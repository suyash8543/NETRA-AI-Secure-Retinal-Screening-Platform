import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function AIAnalysis() {
  const location = useLocation();
  const navigate = useNavigate();

  const state = location.state || {};

  const patient = state.patient || {};

  const leftImage = state.leftImage || "";
  const rightImage = state.rightImage || "";

  // ==========================================
  // Get prediction safely
  // ==========================================

  const getPrediction = (result, response) => {
    if (!result && !response) {
      return null;
    }

    const value = result || response;

    // Case 1:
    // {
    //   prediction: "Mild NPDR",
    //   confidence: 0.6907
    // }

    if (
      typeof value === "object" &&
      typeof value.prediction === "string"
    ) {
      return value;
    }

    // Case 2:
    // {
    //   prediction: {
    //      class_id: 1,
    //      prediction: "Mild NPDR",
    //      confidence: 0.6907
    //   }
    // }

    if (
      typeof value === "object" &&
      value.prediction &&
      typeof value.prediction === "object"
    ) {
      return value.prediction;
    }

    // Case 3:
    // {
    //   data: {
    //      prediction: "Mild NPDR",
    //      confidence: 0.6907
    //   }
    // }

    if (
      value?.data &&
      typeof value.data.prediction === "string"
    ) {
      return value.data;
    }

    // Case 4:
    // API response itself
    if (
      value?.data?.prediction &&
      typeof value.data.prediction === "object"
    ) {
      return value.data.prediction;
    }

    return null;
  };

  const leftPrediction = getPrediction(
    state.leftResult,
    state.leftResponse
  );

  const rightPrediction = getPrediction(
    state.rightResult,
    state.rightResponse
  );

  console.log(
    "AIAnalysis - Left Response:",
    state.leftResponse
  );

  console.log(
    "AIAnalysis - Right Response:",
    state.rightResponse
  );

  console.log(
    "AIAnalysis - Left Prediction:",
    leftPrediction
  );

  console.log(
    "AIAnalysis - Right Prediction:",
    rightPrediction
  );

  // ==========================================
  // Helpers
  // ==========================================

  const formatConfidence = (confidence) => {
    if (
      confidence === undefined ||
      confidence === null ||
      Number.isNaN(Number(confidence))
    ) {
      return "N/A";
    }

    const number = Number(confidence);

    // Model currently returns 0.6907
    return `${(number * 100).toFixed(1)}%`;
  };

  const getSeverity = (prediction) => {
    if (!prediction) {
      return "Unknown";
    }

    return (
      prediction.prediction ||
      prediction.class_name ||
      prediction.label ||
      "Unknown"
    );
  };

  const getClassId = (prediction) => {
    if (!prediction) {
      return "-";
    }

    return prediction.class_id ?? "-";
  };

  const getDescription = (severity) => {
    switch (severity) {
      case "No DR":
        return "No signs of diabetic retinopathy detected.";

      case "Mild NPDR":
        return "Signs consistent with mild non-proliferative diabetic retinopathy.";

      case "Moderate NPDR":
        return "Signs consistent with moderate non-proliferative diabetic retinopathy.";

      case "Severe NPDR":
        return "Signs consistent with severe non-proliferative diabetic retinopathy.";

      case "Proliferative DR":
        return "Signs consistent with proliferative diabetic retinopathy.";

      default:
        return "AI classification result requires clinical review.";
    }
  };

  const getSeverityColor = (severity) => {
    switch (severity) {
      case "No DR":
        return "#15803d";

      case "Mild NPDR":
        return "#ca8a04";

      case "Moderate NPDR":
        return "#dc2626";

      case "Severe NPDR":
        return "#b91c1c";

      case "Proliferative DR":
        return "#7f1d1d";

      default:
        return "#344054";
    }
  };

  const leftSeverity = getSeverity(leftPrediction);

  const rightSeverity = getSeverity(rightPrediction);

  const leftConfidence =
    leftPrediction?.confidence;

  const rightConfidence =
    rightPrediction?.confidence;

  // ==========================================
  // Combined result
  // ==========================================

  const getOverallSeverity = () => {
    const severityOrder = {
      "No DR": 0,
      "Mild NPDR": 1,
      "Moderate NPDR": 2,
      "Severe NPDR": 3,
      "Proliferative DR": 4,
    };

    const leftValue =
      severityOrder[leftSeverity] ?? -1;

    const rightValue =
      severityOrder[rightSeverity] ?? -1;

    if (
      leftValue === -1 &&
      rightValue === -1
    ) {
      return "Unknown";
    }

    return leftValue >= rightValue
      ? leftSeverity
      : rightSeverity;
  };

  const overallSeverity = getOverallSeverity();

  const overallColor =
    getSeverityColor(overallSeverity);

  const averageConfidence = () => {
    const values = [];

    if (
      leftConfidence !== undefined &&
      leftConfidence !== null
    ) {
      values.push(Number(leftConfidence));
    }

    if (
      rightConfidence !== undefined &&
      rightConfidence !== null
    ) {
      values.push(Number(rightConfidence));
    }

    if (values.length === 0) {
      return null;
    }

    return (
      values.reduce(
        (sum, value) => sum + value,
        0
      ) / values.length
    );
  };

  const avgConfidence = averageConfidence();

  // ==========================================
  // No analysis data
  // ==========================================

  if (!leftPrediction && !rightPrediction) {
    return (
      <div
        style={{
          minHeight: "100vh",
          background: "#f5f7fb",
          padding: "40px",
        }}
      >
        <div
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            background: "#ffffff",
            padding: "40px",
            borderRadius: "14px",
            textAlign: "center",
          }}
        >
          <h2>No AI analysis data found</h2>

          <p
            style={{
              color: "#667085",
            }}
          >
            Please run a new screening first.
          </p>

          <button
            onClick={() =>
              navigate("/new-screening")
            }
            style={primaryButton}
          >
            Start New Screening
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f5f7fb",
        padding: "30px",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          maxWidth: "1250px",
          margin: "0 auto",
        }}
      >
        {/* BACK */}

        <button
          onClick={() =>
            navigate("/new-screening")
          }
          style={backButton}
        >
          ← Back to Screening
        </button>

        {/* HEADER */}

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "20px",
            flexWrap: "wrap",
            gap: "10px",
          }}
        >
          <div>
            <h1
              style={{
                margin: 0,
                fontSize: "32px",
                color: "#172033",
              }}
            >
              AI Analysis
            </h1>

            <p
              style={{
                color: "#667085",
                marginTop: "7px",
              }}
            >
              Explainable AI-powered diabetic
              retinopathy screening.
            </p>
          </div>

          <div
            style={{
              padding: "10px 16px",
              borderRadius: "20px",
              background: "#ecfdf3",
              color: "#027a48",
              fontWeight: "600",
            }}
          >
            ✓ Analysis Complete
          </div>
        </div>

        {/* PATIENT */}

        <div style={cardStyle}>
          <h3
            style={{
              marginTop: 0,
            }}
          >
            Patient
          </h3>

          <div
            style={{
              display: "flex",
              gap: "12px",
              flexWrap: "wrap",
              color: "#475467",
            }}
          >
            <strong>
              {patient.name || "Patient"}
            </strong>

            {patient.id && (
              <>
                <span>•</span>
                <span>{patient.id}</span>
              </>
            )}

            {patient.age && (
              <>
                <span>•</span>
                <span>{patient.age} years</span>
              </>
            )}

            {patient.gender && (
              <>
                <span>•</span>
                <span>{patient.gender}</span>
              </>
            )}
          </div>
        </div>

        {/* OVERALL RESULT */}

        <div
          style={{
            ...cardStyle,
            borderLeft: `6px solid ${overallColor}`,
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "20px",
            }}
          >
            <div>
              <p
                style={{
                  margin: 0,
                  fontSize: "13px",
                  fontWeight: "700",
                  color: overallColor,
                  textTransform: "uppercase",
                }}
              >
                Overall Detected Severity
              </p>

              <h2
                style={{
                  margin: "8px 0",
                  fontSize: "32px",
                  color: overallColor,
                }}
              >
                {overallSeverity}
              </h2>

              <p
                style={{
                  margin: 0,
                  color: "#667085",
                }}
              >
                Highest detected severity across
                both eyes.
              </p>
            </div>

            <div
              style={{
                width: "110px",
                height: "110px",
                borderRadius: "50%",
                border: `8px solid ${overallColor}22`,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <strong
                style={{
                  fontSize: "22px",
                  color: overallColor,
                }}
              >
                {formatConfidence(avgConfidence)}
              </strong>

              <span
                style={{
                  fontSize: "12px",
                  color: "#667085",
                }}
              >
                Confidence
              </span>
            </div>
          </div>
        </div>

        {/* BOTH EYE RESULTS */}

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(350px, 1fr))",
            gap: "20px",
            marginTop: "20px",
          }}
        >
          {/* LEFT */}

          <EyeResultCard
            eye="Left Eye"
            image={leftImage}
            prediction={leftPrediction}
          />

          {/* RIGHT */}

          <EyeResultCard
            eye="Right Eye"
            image={rightImage}
            prediction={rightPrediction}
          />
        </div>

        {/* CLINICAL WARNING */}

        <div
          style={{
            marginTop: "20px",
            background: "#fffaeb",
            border: "1px solid #fedf89",
            borderRadius: "12px",
            padding: "18px",
            color: "#b54708",
          }}
        >
          <strong>
            Clinical Review Required
          </strong>

          <p
            style={{
              marginBottom: 0,
            }}
          >
            This AI result is intended for screening
            assistance and should be reviewed by a
            qualified ophthalmologist before clinical
            decision-making.
          </p>
        </div>

        {/* ACTIONS */}

        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            gap: "12px",
            marginTop: "25px",
            flexWrap: "wrap",
          }}
        >
          <button
            onClick={() =>
              navigate("/recommendations", {
                state,
              })
            }
            style={secondaryButton}
          >
            Recommendations
          </button>

          <button
            onClick={() =>
              navigate("/reports", {
                state,
              })
            }
            style={primaryButton}
          >
            Generate Report
          </button>
        </div>
      </div>
    </div>
  );
}

/* ==========================================
   EYE RESULT CARD
========================================== */

function EyeResultCard({
  eye,
  image,
  prediction,
}) {
  const severity =
    prediction?.prediction ||
    prediction?.class_name ||
    prediction?.label ||
    "Unknown";

  const confidence =
    prediction?.confidence;

  const classId =
    prediction?.class_id ?? "-";

  const color = getSeverityColorStatic(
    severity
  );

  return (
    <div style={cardStyle}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "15px",
        }}
      >
        <h2
          style={{
            margin: 0,
          }}
        >
          {eye}
        </h2>

        <span
          style={{
            padding: "7px 12px",
            borderRadius: "20px",
            background: `${color}15`,
            color,
            fontWeight: "700",
            fontSize: "13px",
          }}
        >
          {severity}
        </span>
      </div>

      {/* IMAGE */}

      <div
        style={{
          width: "100%",
          height: "300px",
          borderRadius: "10px",
          overflow: "hidden",
          background: "#101828",
          marginBottom: "18px",
        }}
      >
        {image ? (
          <img
            src={image}
            alt={`${eye} fundus`}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
            onError={(event) => {
              console.error(
                `${eye} image failed to load`
              );

              event.currentTarget.style.display =
                "none";
            }}
          />
        ) : (
          <div
            style={{
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#ffffff",
            }}
          >
            Image unavailable
          </div>
        )}
      </div>

      {/* RESULT */}

      <div
        style={{
          background: "#f8fafc",
          borderRadius: "10px",
          padding: "16px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "10px",
          }}
        >
          <span
            style={{
              color: "#667085",
            }}
          >
            Prediction
          </span>

          <strong>{severity}</strong>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "10px",
          }}
        >
          <span
            style={{
              color: "#667085",
            }}
          >
            Confidence
          </span>

          <strong>
            {formatConfidenceStatic(
              confidence
            )}
          </strong>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <span
            style={{
              color: "#667085",
            }}
          >
            Class ID
          </span>

          <strong>{classId}</strong>
        </div>
      </div>

      {/* DESCRIPTION */}

      <p
        style={{
          color: "#667085",
          lineHeight: 1.5,
          marginBottom: 0,
        }}
      >
        {getDescriptionStatic(severity)}
      </p>
    </div>
  );
}

/* ==========================================
   STATIC HELPERS
========================================== */

function formatConfidenceStatic(
  confidence
) {
  if (
    confidence === undefined ||
    confidence === null ||
    Number.isNaN(Number(confidence))
  ) {
    return "N/A";
  }

  return `${(
    Number(confidence) * 100
  ).toFixed(1)}%`;
}

function getSeverityColorStatic(
  severity
) {
  switch (severity) {
    case "No DR":
      return "#15803d";

    case "Mild NPDR":
      return "#ca8a04";

    case "Moderate NPDR":
      return "#dc2626";

    case "Severe NPDR":
      return "#b91c1c";

    case "Proliferative DR":
      return "#7f1d1d";

    default:
      return "#344054";
  }
}

function getDescriptionStatic(
  severity
) {
  switch (severity) {
    case "No DR":
      return "No signs of diabetic retinopathy detected.";

    case "Mild NPDR":
      return "Signs consistent with mild non-proliferative diabetic retinopathy.";

    case "Moderate NPDR":
      return "Signs consistent with moderate non-proliferative diabetic retinopathy.";

    case "Severe NPDR":
      return "Signs consistent with severe non-proliferative diabetic retinopathy.";

    case "Proliferative DR":
      return "Signs consistent with proliferative diabetic retinopathy.";

    default:
      return "AI classification result requires clinical review.";
  }
}

/* ==========================================
   STYLES
========================================== */

const cardStyle = {
  background: "#ffffff",
  borderRadius: "14px",
  padding: "22px",
  boxShadow: "0 2px 10px rgba(0,0,0,0.06)",
  boxSizing: "border-box",
};

const primaryButton = {
  padding: "12px 22px",
  border: "none",
  borderRadius: "8px",
  background: "#1769aa",
  color: "#ffffff",
  fontWeight: "600",
  cursor: "pointer",
};

const secondaryButton = {
  padding: "12px 22px",
  border: "1px solid #d0d5dd",
  borderRadius: "8px",
  background: "#ffffff",
  color: "#344054",
  fontWeight: "600",
  cursor: "pointer",
};

const backButton = {
  border: "none",
  background: "transparent",
  padding: "0",
  marginBottom: "20px",
  color: "#344054",
  fontSize: "15px",
  cursor: "pointer",
};

export default AIAnalysis;