import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { predictImage } from "../api/mlApi";

function fileToDataURL(file) {
  return new Promise((resolve, reject) => {
    if (!file) {
      reject(new Error("No file selected"));
      return;
    }

    const reader = new FileReader();

    reader.onload = () => {
      resolve(reader.result);
    };

    reader.onerror = () => {
      reject(new Error("Unable to read image"));
    };

    reader.readAsDataURL(file);
  });
}

function NewScreening() {
  const navigate = useNavigate();

  const [patient, setPatient] = useState({
    name: "",
    id: "",
    age: "",
    gender: "",
  });

  const [leftFile, setLeftFile] = useState(null);
  const [rightFile, setRightFile] = useState(null);

  const [leftPreview, setLeftPreview] = useState("");
  const [rightPreview, setRightPreview] = useState("");

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const handlePatientChange = (e) => {
    const { name, value } = e.target;

    setPatient((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLeftImage = (e) => {
    const file = e.target.files?.[0];

    if (!file) return;

    setLeftFile(file);
    setLeftPreview(URL.createObjectURL(file));
    setError("");
  };

  const handleRightImage = (e) => {
    const file = e.target.files?.[0];

    if (!file) return;

    setRightFile(file);
    setRightPreview(URL.createObjectURL(file));
    setError("");
  };

  const handleAnalyze = async () => {
    try {
      setError("");

      if (!leftFile) {
        setError("Please upload the left eye image.");
        return;
      }

      if (!rightFile) {
        setError("Please upload the right eye image.");
        return;
      }

      setLoading(true);

      

      console.log("Analyzing Left Eye...");

      const leftResponse = await predictImage(leftFile);

      console.log("Left Eye Result:", leftResponse);

      // ==========================================
      // RIGHT EYE
      // ==========================================

      console.log("Analyzing Right Eye...");

      const rightResponse = await predictImage(rightFile);

      console.log("Right Eye Result:", rightResponse);

      

      const leftImageData = await fileToDataURL(leftFile);
      const rightImageData = await fileToDataURL(rightFile);

      console.log("Images converted successfully.");

      // ==========================================
      // NORMALIZE ML RESPONSE
      // ==========================================

      const leftPrediction =
        leftResponse?.prediction ??
        leftResponse?.data?.prediction ??
        leftResponse;

      const rightPrediction =
        rightResponse?.prediction ??
        rightResponse?.data?.prediction ??
        rightResponse;

      console.log(
        "Final Left Prediction:",
        leftPrediction
      );

      console.log(
        "Final Right Prediction:",
        rightPrediction
      );

      // ==========================================
      // GO TO AI ANALYSIS
      // ==========================================

      navigate("/ai-analysis", {
        state: {
          patient,

          leftImage: leftImageData,

          rightImage: rightImageData,

          leftResult: leftPrediction,

          rightResult: rightPrediction,

          // Keep complete API responses too.
          leftResponse,

          rightResponse,
        },
      });
    } catch (err) {
      console.error("AI Analysis Error:", err);

      setError(
        err?.response?.data?.detail ||
          err?.response?.data?.message ||
          err?.message ||
          "AI analysis failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

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
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        {/* HEADER */}

        <div
          style={{
            marginBottom: "25px",
          }}
        >
          <h1
            style={{
              margin: 0,
              fontSize: "32px",
              color: "#172033",
            }}
          >
            New Screening
          </h1>

          <p
            style={{
              color: "#667085",
              marginTop: "8px",
            }}
          >
            Upload retinal fundus images for AI-powered
            diabetic retinopathy screening.
          </p>
        </div>

        {/* PATIENT INFORMATION */}

        <div
          style={{
            background: "#ffffff",
            borderRadius: "14px",
            padding: "25px",
            marginBottom: "20px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.06)",
          }}
        >
          <h2
            style={{
              marginTop: 0,
              color: "#172033",
            }}
          >
            Patient Information
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "16px",
            }}
          >
            <div>
              <label>Patient Name</label>

              <input
                type="text"
                name="name"
                value={patient.name}
                onChange={handlePatientChange}
                placeholder="Enter patient name"
                style={inputStyle}
              />
            </div>

            <div>
              <label>Patient ID</label>

              <input
                type="text"
                name="id"
                value={patient.id}
                onChange={handlePatientChange}
                placeholder="Enter patient ID"
                style={inputStyle}
              />
            </div>

            <div>
              <label>Age</label>

              <input
                type="number"
                name="age"
                value={patient.age}
                onChange={handlePatientChange}
                placeholder="Age"
                style={inputStyle}
              />
            </div>

            <div>
              <label>Gender</label>

              <select
                name="gender"
                value={patient.gender}
                onChange={handlePatientChange}
                style={inputStyle}
              >
                <option value="">Select gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>
        </div>

        {/* IMAGE UPLOAD */}

        <div
          style={{
            background: "#ffffff",
            borderRadius: "14px",
            padding: "25px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.06)",
          }}
        >
          <h2
            style={{
              marginTop: 0,
              color: "#172033",
            }}
          >
            Retinal Images
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "25px",
            }}
          >
            {/* LEFT EYE */}

            <div>
              <h3>Left Eye</h3>

              <label style={uploadBoxStyle}>
                {leftPreview ? (
                  <img
                    src={leftPreview}
                    alt="Left eye preview"
                    style={previewStyle}
                  />
                ) : (
                  <div>
                    <strong>Upload Left Eye</strong>

                    <p
                      style={{
                        color: "#667085",
                      }}
                    >
                      Click to select fundus image
                    </p>
                  </div>
                )}

                <input
                  type="file"
                  accept="image/*"
                  onChange={handleLeftImage}
                  style={{
                    display: "none",
                  }}
                />
              </label>

              {leftFile && (
                <p
                  style={{
                    fontSize: "14px",
                    color: "#667085",
                  }}
                >
                  {leftFile.name}
                </p>
              )}
            </div>

            {/* RIGHT EYE */}

            <div>
              <h3>Right Eye</h3>

              <label style={uploadBoxStyle}>
                {rightPreview ? (
                  <img
                    src={rightPreview}
                    alt="Right eye preview"
                    style={previewStyle}
                  />
                ) : (
                  <div>
                    <strong>Upload Right Eye</strong>

                    <p
                      style={{
                        color: "#667085",
                      }}
                    >
                      Click to select fundus image
                    </p>
                  </div>
                )}

                <input
                  type="file"
                  accept="image/*"
                  onChange={handleRightImage}
                  style={{
                    display: "none",
                  }}
                />
              </label>

              {rightFile && (
                <p
                  style={{
                    fontSize: "14px",
                    color: "#667085",
                  }}
                >
                  {rightFile.name}
                </p>
              )}
            </div>
          </div>

          {/* ERROR */}

          {error && (
            <div
              style={{
                marginTop: "20px",
                padding: "14px",
                borderRadius: "8px",
                background: "#fff1f2",
                color: "#c1121f",
                border: "1px solid #fecdd3",
              }}
            >
              {error}
            </div>
          )}

          {/* ANALYZE BUTTON */}

          <div
            style={{
              marginTop: "30px",
              textAlign: "right",
            }}
          >
            <button
              onClick={handleAnalyze}
              disabled={
                loading ||
                !leftFile ||
                !rightFile
              }
              style={{
                padding: "14px 28px",
                border: "none",
                borderRadius: "8px",
                background:
                  loading ||
                  !leftFile ||
                  !rightFile
                    ? "#98a2b3"
                    : "#1769aa",
                color: "#ffffff",
                fontSize: "16px",
                fontWeight: "600",
                cursor:
                  loading ||
                  !leftFile ||
                  !rightFile
                    ? "not-allowed"
                    : "pointer",
              }}
            >
              {loading
                ? "Analyzing..."
                : "Analyze with AI"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "12px",
  marginTop: "7px",
  border: "1px solid #d0d5dd",
  borderRadius: "8px",
  boxSizing: "border-box",
  fontSize: "15px",
};

const uploadBoxStyle = {
  minHeight: "280px",
  border: "2px dashed #b8c2d1",
  borderRadius: "12px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  cursor: "pointer",
  overflow: "hidden",
  background: "#f8fafc",
};

const previewStyle = {
  width: "100%",
  height: "280px",
  objectFit: "contain",
  background: "#101828",
};

export default NewScreening;