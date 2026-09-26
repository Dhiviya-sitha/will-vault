function Home() {
  return (
    <div className="app">

      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">WILLVAULT</div>

        <div className="nav-links">
          <a href="/security">Security</a>
          <a href="/will-discovery">How it works</a>
          <a href="/create-will">
            <button className="nav-button">Get Started</button>
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero">

        <div className="hero-content">

          <div className="eyebrow">
            DIGITAL WILL MANAGEMENT
          </div>

          <h1>
            Your Will.
            <br />
            <span>Secured. Discoverable.</span>
          </h1>

          <p className="hero-description">
            WILLVAULT provides a secure digital bridge for Will
            management, verification and discovery — helping
            authorized people find the right Will when it matters.
          </p>

          <div className="hero-buttons">

            <a href="/create-will">
              <button className="primary-button">
                Secure a Will
              </button>
            </a>

            <a href="/will-discovery">
              <button className="secondary-button">
                Explore how it works
              </button>
            </a>

          </div>

        </div>

        {/* Security Card */}
        <div className="security-card">

          <div className="card-top">
            <span>WILL RECORD</span>
            <span className="status">● SECURED</span>
          </div>

          <div className="will-id">
            WV-10293
          </div>

          <div className="card-details">

            <div>
              <small>VERSION</small>
              <p>V3</p>
            </div>

            <div>
              <small>CUSTODIAN</small>
              <p>Registrar</p>
            </div>

            <div>
              <small>STATUS</small>
              <p>Protected</p>
            </div>

          </div>

          <div className="hash">
            SHA-256&nbsp;&nbsp; 8f43...72bc
          </div>

        </div>

      </section>

      {/* Features */}
      <section className="features">

        <div className="feature">
          <h3>01 — Secure</h3>
          <p>
            Sensitive Will metadata is protected using
            secure storage and controlled access.
          </p>
        </div>

        <div className="feature">
          <h3>02 — Verified</h3>
          <p>
            Death verification initiates the controlled
            discovery workflow for authorized parties.
          </p>
        </div>

        <div className="feature">
          <h3>03 — Audited</h3>
          <p>
            Hashing and audit records help maintain
            integrity and traceability.
          </p>
        </div>

      </section>

    </div>
  );
}

export default Home;