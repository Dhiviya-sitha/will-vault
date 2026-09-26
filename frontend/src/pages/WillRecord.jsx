import { useState } from "react";

function WillRecord() {
  const [showWill, setShowWill] = useState(false);

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

      {/* Will Record */}
      <section className="will-record-page">

        <div className="will-record-container">

          <div className="eyebrow">
            SECURE WILL RECORD
          </div>

          <h1>Will Record</h1>

          <p className="page-description">
            View the secured metadata and integrity information
            associated with this Will.
          </p>

          <div className="record-card">

            <div className="record-header">
              <div>
                <span className="record-label">
                  WILL ID
                </span>

                <h2>WV-10293</h2>
              </div>

              <span className="record-status">
                ● SECURED
              </span>
            </div>

            <div className="record-divider"></div>

            <div className="record-grid">

              <div className="record-field">
                <span>Testator</span>
                <strong>Arun Kumar</strong>
              </div>

              <div className="record-field">
                <span>Executor</span>
                <strong>Ravi Kumar</strong>
              </div>

              <div className="record-field">
                <span>Version</span>
                <strong>V1</strong>
              </div>

              <div className="record-field">
                <span>Custodian</span>
                <strong>Registrar</strong>
              </div>

              <div className="record-field">
                <span>Payment</span>
                <strong>COMPLETED</strong>
              </div>

              <div className="record-field">
                <span>Death Verification</span>
                <strong>NOT VERIFIED</strong>
              </div>

            </div>

            <div className="record-divider"></div>

            <div className="hash-section">

              <span className="record-label">
                DOCUMENT INTEGRITY
              </span>

              <div className="hash-box">
                <span>SHA-256</span>
                <code>
                  8f43a91c...72bc
                </code>
              </div>

              <p>
                This hash can be used to verify that the
                stored Will content has not been altered.
              </p>

            </div>

                        <div className="record-actions">
              <a href="/security">
                <button className="secondary-button">
                  View Security
                </button>
              </a>

              <button
                className="primary-button"
                onClick={() => setShowWill(!showWill)}
              >
                {showWill ? "Hide Will" : "View Will"}
              </button>
            </div>

            {showWill && (
              <div className="will-viewer">

                <div className="record-divider"></div>

                <span className="record-label">
                  WILL CONTENT
                </span>

                <div className="will-document">

                  <h3>LAST WILL AND TESTAMENT</h3>

                  <p>
                    I, ______________________, being of sound mind,
                    hereby declare this to be my Will.
                  </p>

                  <p>
                    I hereby make the following declarations regarding
                    my assets, beneficiaries and executor.
                  </p>

                  <p>
                    This document represents the Will content associated
                    with this secured Will record.
                  </p>

                </div>

              </div>
            )}

          </div>

            
              

        </div>

      </section>

    </div>
  );
}

export default WillRecord;