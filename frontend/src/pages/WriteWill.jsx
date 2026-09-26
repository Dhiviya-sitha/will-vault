import { useState } from "react";

function WriteWill() {
  const [willText, setWillText] = useState("");

  const saveWill = () => {
    const text = willText.trim();

    if (text.length === 0) {
      alert("Please write your Will before securing it.");
      return;
    }

    const willId =
      "WV-" + Math.floor(10000 + Math.random() * 90000);

    const willRecord = {
      willId: willId,
      willText: text,
      version: "V1",
      custodian: "Registrar",
      paymentStatus: "COMPLETED",
      status: "SECURED",
      createdAt: new Date().toISOString(),
      hash: "8f43...72bc",
    };

    localStorage.setItem(
      "willvaultRecord",
      JSON.stringify(willRecord)
    );

    alert("Will secured successfully!");

    window.location.href = "/dashboard";
  };

  return (
    <div className="app">

      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">WILLVAULT</div>

        <div className="nav-links">
          <a href="/dashboard">Dashboard</a>
          <a href="/security">Security</a>
        </div>
      </nav>

      {/* Write Will */}
      <section className="write-will-page">

        <div className="write-will-container">

          <div className="eyebrow">
            WILL CONTENT
          </div>

          <h1>Write Your Will</h1>

          <p className="page-description">
            Enter the contents of your Will below. Your document
            will be associated with your secure WILLVAULT record.
          </p>

          <div className="will-editor-card">

            <div className="editor-header">

              <div>
                <span className="editor-label">
                  WILL RECORD
                </span>

                <strong>WV-10293</strong>
              </div>

              <span className="version-badge">
                VERSION V1
              </span>

            </div>

            <div className="editor-divider"></div>

            <label className="editor-title">
              Will Content
            </label>

            <textarea
              className="will-textarea"
              value={willText}
              onChange={(e) => setWillText(e.target.value)}
              placeholder={`I, ______________________, being of sound mind, hereby declare this to be my Will.

I hereby make the following declarations regarding my assets, beneficiaries and executor...`}
            />

            <div className="editor-footer">
              <span>
                Characters: {willText.length}
              </span>

              <span>
                Draft
              </span>
            </div>

            <div className="editor-notice">
              <strong>Important</strong>

              <p>
                This prototype provides a digital space for managing
                Will information. Legal execution, witnessing,
                registration and validity remain subject to applicable
                law and authorized processes.
              </p>
            </div>

            <button
              className="primary-button save-will-button"
              onClick={saveWill}
            >
              Save & Secure Will
            </button>

          </div>

        </div>

      </section>

    </div>
  );
}

export default WriteWill;