function WillDiscovery() {
  return (
    <div className="app">

      <nav className="navbar">
        <div className="logo">WILLVAULT</div>

        <div className="nav-links">
          <a href="/dashboard">Dashboard</a>
          <a href="/security">Security</a>
        </div>
      </nav>

      <section className="discovery-page">
        <div className="discovery-container">

          <div className="eyebrow">AUTHORIZED DISCOVERY</div>

          <h1>Will Discovery</h1>

          <p className="page-description">
            Locate the secured Will record after verified death
            through the authorized discovery workflow.
          </p>

          <div className="discovery-card">

            <div className="discovery-lock">
              ✓
            </div>

            <span className="record-label">
              DISCOVERY STATUS
            </span>

            <h2>Verification Required</h2>

            <p>
              A Will can only enter the discovery workflow after
              the associated death has been verified through the
              authorized process.
            </p>

            <div className="discovery-status-row">
              <span>Death Verification</span>
              <strong>NOT VERIFIED</strong>
            </div>

            <div className="discovery-status-row">
              <span>Will Discovery</span>
              <strong>LOCKED</strong>
            </div>

            <a href="/death-verification">
              <button className="primary-button discovery-button">
                Go to Death Verification
              </button>
            </a>

          </div>

        </div>
      </section>

    </div>
  );
}

export default WillDiscovery;