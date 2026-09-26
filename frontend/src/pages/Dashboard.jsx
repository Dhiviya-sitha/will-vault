function Dashboard() {
  return (
    <div className="app">

      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">WILLVAULT</div>

        <div className="nav-links">
          <a href="/">Home</a>
          <a href="/security">Security</a>
          <a href="/will-discovery">Will Discovery</a>
        </div>
      </nav>

      {/* Dashboard */}
      <section className="dashboard-page">

        <div className="dashboard-container">

          <div className="eyebrow">
            SECURE RECORDS
          </div>

          <h1>Your Will Records</h1>

          <p className="page-description">
            Manage and monitor your secured Will records
            through WILLVAULT.
          </p>

          {/* Will Record */}
          <div className="dashboard-card">

            <div className="dashboard-card-top">
              <div>
                <span className="record-label">
                  WILL RECORD
                </span>

                <h2>WV-10293</h2>
              </div>

              <span className="record-status">
                ● SECURED
              </span>
            </div>

            <div className="dashboard-divider"></div>

            <div className="record-details">

              <div>
                <span>TESTATOR</span>
                <strong>Arun Kumar</strong>
              </div>

              <div>
                <span>VERSION</span>
                <strong>V1</strong>
              </div>

              <div>
                <span>CUSTODIAN</span>
                <strong>Registrar</strong>
              </div>

              <div>
                <span>PAYMENT</span>
                <strong>COMPLETED</strong>
              </div>

            </div>

            <div className="record-hash">
              SHA-256&nbsp;&nbsp; 8f43...72bc
            </div>

            <div className="dashboard-actions">
              <a href="/security">
                <button className="secondary-button">
                  View Security
                </button>
              </a>

              <a href="/will-record">
                <button className="primary-button">
                  View Record
                </button>
              </a>
            </div>

          </div>

        </div>

      </section>

    </div>
  );
}

export default Dashboard;