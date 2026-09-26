function Security() {
  return (
    <div className="app">

      <nav className="navbar">
        <div className="logo">WILLVAULT</div>

        <div className="nav-links">
          <a href="/">Home</a>
          <a href="/dashboard">Dashboard</a>
        </div>
      </nav>

      <section className="security-page">
        <div className="security-container">

          <div className="eyebrow">SECURITY CENTER</div>

          <h1>Will Security</h1>

          <p className="page-description">
            Protecting Will records through integrity verification,
            version control and secure audit tracking.
          </p>

          <div className="security-grid">

            <div className="security-card">
              <div className="security-icon">✓</div>
              <h3>Document Integrity</h3>
              <p>
                Each Will is associated with a SHA-256 hash that
                can be used to detect unauthorized changes.
              </p>
              <span className="security-status">PROTECTED</span>
            </div>

            <div className="security-card">
              <div className="security-icon">◈</div>
              <h3>Version Control</h3>
              <p>
                Every updated Will can be maintained as a separate
                version while preserving the previous record.
              </p>
              <span className="security-status">TRACKED</span>
            </div>

            <div className="security-card">
              <div className="security-icon">⌁</div>
              <h3>Audit Trail</h3>
              <p>
                Important actions such as verification and discovery
                can be recorded for traceability.
              </p>
              <span className="security-status">AUDITED</span>
            </div>

          </div>

          <div className="hash-panel">

            <div>
              <span className="record-label">CURRENT DOCUMENT HASH</span>
              <h2>SHA-256</h2>
            </div>

            <code>
              8f43a91c7b2e...9d72bc
            </code>

            <p>
              A matching hash indicates that the document content
              remains unchanged from the recorded version.
            </p>

          </div>

        </div>
      </section>

    </div>
  );
}

export default Security;