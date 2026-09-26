function DeathVerification() {
  return (
    <div className="app">

      <nav className="navbar">
        <div className="logo">WILLVAULT</div>

        <div className="nav-links">
          <a href="/dashboard">Dashboard</a>
          <a href="/will-discovery">Will Discovery</a>
        </div>
      </nav>

      <section className="verification-page">
        <div className="verification-container">

          <div className="eyebrow">AUTHORIZED WORKFLOW</div>

          <h1>Death Verification</h1>

          <p className="page-description">
            Verify the death status associated with a secured Will
            before authorized discovery can take place.
          </p>

          <div className="verification-card">

            <div className="verification-header">
              <div>
                <span className="record-label">WILL RECORD</span>
                <h2>WV-10293</h2>
              </div>

              <span className="verification-status">
                NOT VERIFIED
              </span>
            </div>

            <div className="dashboard-divider"></div>

            <div className="verification-info">

              <div>
                <span>TESTATOR</span>
                <strong>Arun Kumar</strong>
              </div>

              <div>
                <span>STATUS</span>
                <strong>Verification Required</strong>
              </div>

            </div>

            <div className="verification-notice">
              <strong>Important</strong>
              <p>
                Will discovery remains unavailable until death
                verification has been completed through the
                authorized verification process.
              </p>
            </div>

            <button
  className="primary-button verification-button"
  onClick={() =>
    alert("Death verification request submitted successfully!")
  }
>
  Request Death Verification
</button>

            
          </div>

        </div>
      </section>

    </div>
  );
}

export default DeathVerification;