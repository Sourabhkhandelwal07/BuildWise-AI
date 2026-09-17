import jsPDF from "jspdf";
import { useState } from "react";
import { analyzeIdea } from "./services/gemini";

function App() {
  const [idea, setIdea] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAnalyze = async () => {
    if (!idea.trim()) {
      alert("Please enter an idea");
      return;
    }

    try {
      setLoading(true);

      const response = await analyzeIdea(idea);

      setResult(response);
    } catch (error) {
      setResult(error.message);
    } finally {
      setLoading(false);
    }
  };

  const downloadPDF = () => {
    const doc = new jsPDF();

    const lines = doc.splitTextToSize(result, 180);

    doc.text(lines, 10, 10);

    doc.save("BuildWise-Analysis.pdf");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
"linear-gradient(135deg, #0f172a, #1e293b)",
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "40px",
      }}
    >
      <h1
  style={{
    fontSize: "4rem",
    fontWeight: "bold",
    textAlign: "center",
  }}
>
  🚀 BuildWise AI
</h1>

<h2
  style={{
    marginTop: "10px",
    color: "#94a3b8",
  }}
>
  Turn Ideas Into Startup Blueprints
</h2>

      <p
        style={{
          marginTop: "20px",
          maxWidth: "700px",
          textAlign: "center",
        }}
      >
        Transform your startup idea into a complete business blueprint using AI.
      </p>

      <textarea
        value={idea}
        onChange={(e) => setIdea(e.target.value)}
        placeholder="Describe your startup idea..."
        rows="4"
        style={{
          marginTop: "30px",
          width: "700px",
          maxWidth: "90%",
          padding: "15px",
          borderRadius: "10px",
          border: "none",
          resize: "none",
        }}
      />

      <button
        onClick={handleAnalyze}
        style={{
          marginTop: "20px",
          padding: "15px 30px",
          borderRadius: "10px",
          border: "none",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        {loading ? "Analyzing..." : "Analyze Idea"}
      </button>

      {result && (
        <div
          style={{
            marginTop: "40px",
            width: "80%",
            maxWidth: "1000px",
          }}
        >
          <div
            style={{
              background: "#334155",
              padding: "20px",
              borderRadius: "15px",
              whiteSpace: "pre-wrap",
            }}
          >
            {result}
          </div>

          <div style={{ marginTop: "15px" }}>
            <button
              onClick={() => navigator.clipboard.writeText(result)}
              style={{
                padding: "10px 20px",
                borderRadius: "8px",
                cursor: "pointer",
                fontWeight: "bold",
                marginRight: "10px",
              }}
            >
              📋 Copy Analysis
            </button>

            <button
              onClick={downloadPDF}
              style={{
                padding: "10px 20px",
                borderRadius: "8px",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              📄 Download PDF
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;