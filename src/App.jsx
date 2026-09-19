import { useState } from "react";
import jsPDF from "jspdf";
import { analyzeIdea } from "./services/gemini";

function App() {
  const [idea, setIdea] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleAnalyze = async () => {
    if (!idea.trim()) return;

    try {
      setLoading(true);
      const response = await analyzeIdea(idea);
      setResult(response);
    } catch (err) {
      console.error(err);
      alert("Analysis Failed");
    } finally {
      setLoading(false);
    }
  };

  const downloadPDF = () => {
    if (!result) return;

    const doc = new jsPDF();

    const content = `
Startup Score: ${result.startupScore}

Funding Potential: ${result.fundingPotential}

Executive Summary:
${result.summary}

Problem:
${result.problem}

Target Audience:
${result.audience}

Market:
${result.market}

Revenue Model:
${result.revenueModel}

MVP:
${result.mvp}

Tech Stack:
${result.techStack}

Growth:
${result.growth}

Investor Pitch:
${result.pitch}
`;

    const lines = doc.splitTextToSize(content, 180);

    doc.text(lines, 10, 10);

    doc.save("BuildWise-Analysis.pdf");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg,#020617,#0f172a,#001b44)",
        color: "white",
        padding: "30px",
        fontFamily: "Inter,sans-serif",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          fontSize: "4rem",
          fontWeight: "bold",
        }}
      >
        🚀 BuildWise AI
      </h1>

      <p
        style={{
          textAlign: "center",
          color: "#94a3b8",
          marginBottom: "30px",
        }}
      >
        AI Startup Validation Platform
      </p>

      <div
        style={{
          maxWidth: "1100px",
          margin: "auto",
        }}
      >
        <textarea
          value={idea}
          onChange={(e) => setIdea(e.target.value)}
          placeholder="Describe your startup idea..."
          rows={6}
          style={{
            width: "100%",
            padding: "20px",
            borderRadius: "16px",
            border: "none",
            fontSize: "16px",
          }}
        />

        <div style={{ textAlign: "center" }}>
          <button
            onClick={handleAnalyze}
            style={{
              marginTop: "20px",
              padding: "15px 40px",
              border: "none",
              borderRadius: "12px",
              background:
                "linear-gradient(90deg,#8b5cf6,#3b82f6)",
              color: "white",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            {loading ? "Analyzing..." : "Analyze Idea"}
          </button>
        </div>

        {result && (
          <>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "20px",
                marginTop: "40px",
              }}
            >
              <div
                style={{
                  background: "#1e293b",
                  padding: "30px",
                  borderRadius: "20px",
                }}
              >
                <h2>Startup Score</h2>

                <h1
                  style={{
                    fontSize: "5rem",
                    margin: 0,
                  }}
                >
                  {result.startupScore}
                </h1>

                <p>Investor Ready</p>
              </div>

              <div
                style={{
                  background: "#1e293b",
                  padding: "30px",
                  borderRadius: "20px",
                  textAlign: "center",
                }}
              >
                <h2>Funding Potential</h2>

                <div
                  style={{
                    width: "180px",
                    height: "180px",
                    borderRadius: "50%",
                    border: "14px solid #22c55e",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "20px auto",
                    fontSize: "2rem",
                    fontWeight: "bold",
                  }}
                >
                  {result.fundingPotential}%
                </div>
              </div>
            </div>

            <div
              style={{
                background: "#1e293b",
                padding: "25px",
                marginTop: "25px",
                borderRadius: "20px",
              }}
            >
              <h2>🏆 Competitor Analysis</h2>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr 1fr",
                  gap: "15px",
                }}
              >
                {result.competitors?.map((c, i) => (
                  <div
                    key={i}
                    style={{
                      background: "#0f172a",
                      padding: "20px",
                      borderRadius: "12px",
                    }}
                  >
                    {c}
                  </div>
                ))}
              </div>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "20px",
                marginTop: "25px",
              }}
            >
              <div
                style={{
                  background: "#166534",
                  padding: "20px",
                  borderRadius: "16px",
                }}
              >
                <h3>Strengths</h3>
                <p>{result.swot?.strengths}</p>
              </div>

              <div
                style={{
                  background: "#991b1b",
                  padding: "20px",
                  borderRadius: "16px",
                }}
              >
                <h3>Weaknesses</h3>
                <p>{result.swot?.weaknesses}</p>
              </div>

              <div
                style={{
                  background: "#1d4ed8",
                  padding: "20px",
                  borderRadius: "16px",
                }}
              >
                <h3>Opportunities</h3>
                <p>{result.swot?.opportunities}</p>
              </div>

              <div
                style={{
                  background: "#b45309",
                  padding: "20px",
                  borderRadius: "16px",
                }}
              >
                <h3>Threats</h3>
                <p>{result.swot?.threats}</p>
              </div>
            </div>

            <div
              style={{
                background: "#1e293b",
                marginTop: "25px",
                padding: "25px",
                borderRadius: "20px",
              }}
            >
              <h2>🧠 AI Generated Investor Report</h2>

              <div style={{ lineHeight: "2" }}>
                <h3>Executive Summary</h3>
                <p>{result.summary}</p>

                <h3>Problem Statement</h3>
                <p>{result.problem}</p>

                <h3>Target Audience</h3>
                <p>{result.audience}</p>

                <h3>Market Size</h3>
                <p>{result.market}</p>

                <h3>Revenue Model</h3>
                <p>{result.revenueModel}</p>

                <h3>MVP Features</h3>
                <p>{result.mvp}</p>

                <h3>Tech Stack</h3>
                <p>{result.techStack}</p>

                <h3>Growth Strategy</h3>
                <p>{result.growth}</p>

                <h3>Investor Pitch</h3>
                <p>{result.pitch}</p>
              </div>
            </div>

            <div style={{ marginTop: "20px" }}>
              <button
                onClick={() =>
                  navigator.clipboard.writeText(
                    JSON.stringify(result, null, 2)
                  )
                }
                style={{
                  padding: "12px 20px",
                  borderRadius: "10px",
                  marginRight: "10px",
                }}
              >
                📋 Copy Analysis
              </button>

              <button
                onClick={downloadPDF}
                style={{
                  padding: "12px 20px",
                  borderRadius: "10px",
                }}
              >
                📄 Download PDF
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;