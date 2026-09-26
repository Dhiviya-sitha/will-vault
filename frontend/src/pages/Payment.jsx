import { useState } from "react";

function Payment() {
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  if (paymentSuccess) {
    return (
      <div className="app">

        <nav className="navbar">
          <div className="logo">WILLVAULT</div>

          <div className="nav-links">
            <a href="/">Home</a>
            <a href="/security">Security</a>
          </div>
        </nav>

        <section className="payment-page">
          <div className="payment-container">

            <div className="eyebrow">
              TRANSACTION COMPLETE
            </div>

            <h1>Payment Successful</h1>

            <p className="payment-description">
              Your processing payment has been recorded.
              You can now continue to secure your Will record.
            </p>

            <div className="payment-card success-card">

              <div className="success-icon">
                ✓
              </div>

              <h2>Payment Confirmed</h2>

              <p className="transaction-id">
                Transaction ID: WVTXN-84921
              </p>

              <div className="payment-divider"></div>

              <div className="success-details">

                <div>
                  <span>AMOUNT</span>
                  <strong>₹499</strong>
                </div>

                <div>
                  <span>STATUS</span>
                  <strong className="success-status">
                    COMPLETED
                  </strong>
                </div>

              </div>

              <a href="/write-will">
                <button className="primary-button payment-button">
                  Continue to Write Your Will
                </button>
              </a>

            </div>

          </div>
        </section>

      </div>
    );
  }

  return (
    <div className="app">

      <nav className="navbar">
        <div className="logo">WILLVAULT</div>

        <div className="nav-links">
          <a href="/">Home</a>
          <a href="/security">Security</a>
        </div>
      </nav>

      <section className="payment-page">

        <div className="payment-container">

          <div className="eyebrow">
            SECURE PROCESSING
          </div>

          <h1>Complete Payment</h1>

          <p className="payment-description">
            Complete the processing fee to continue securing
            your Will record.
          </p>

          <div className="payment-card">

            <div className="payment-header">
              <span>WILLVAULT PROCESSING FEE</span>
              <span className="demo-badge">DEMO</span>
            </div>

            <div className="payment-amount">
              ₹499
            </div>

            <div className="payment-divider"></div>

            <div className="payment-method">
              <label>Payment Method</label>

              <select>
                <option>UPI</option>
                <option>Credit / Debit Card</option>
                <option>Net Banking</option>
              </select>
            </div>

            <button
              className="primary-button payment-button"
              onClick={() => setPaymentSuccess(true)}
            >
              Pay ₹499
            </button>

            <p className="demo-note">
              Demo payment only — no real transaction will be processed.
            </p>

          </div>

        </div>

      </section>

    </div>
  );
}

export default Payment;