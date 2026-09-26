import { useState } from "react";
function CreateWill() {
    const [formData, setFormData] = useState({
  testatorName: "",
  testatorId: "",
  executorName: "",
  custodian: "Registrar",
  version: 1,
  reference: "",
});

  return (
    <div className="app">

      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">WILLVAULT</div>

        <div className="nav-links">
          <a href="/">Home</a>
          <a href="/security">Security</a>
        </div>
      </nav>

      {/* Create Will Section */}
      <section className="create-will-page">

        <div className="create-will-container">

          <div className="eyebrow">
            WILL RECORD
          </div>

          <h1>Create Your Will Record</h1>

          <p className="page-description">
            Enter the basic details required to create a
            secure digital Will record.
          </p>

          <div className="will-form-card">

            {/* Testator */}
            <div className="form-group">
              <label>Testator Name</label>
              <input
                type="text"
                placeholder="Enter full name"
                value={formData.testatorName}
  onChange={(e) =>
    setFormData({
      ...formData,
      testatorName: e.target.value,
    })
  }
              />
            </div>

            {/* Testator ID */}
<div className="form-group">
  <label>Testator ID</label>
  <input
    type="text"
    placeholder="Enter identification/reference ID"
    value={formData.testatorId}
  onChange={(e) =>
    setFormData({
      ...formData,
      testatorId: e.target.value,
    })
  }
  />
</div>

            {/* Executor */}
            <div className="form-group">
              <label>Executor Name</label>
              <input
                type="text"
                placeholder="Enter executor name"
                 value={formData.executorName}
  onChange={(e) =>
    setFormData({
      ...formData,
      executorName: e.target.value,
    })
  }
              />
            </div>

            {/* Custodian */}
            <div className="form-group">
              <label>Custodian</label>

              <select>
                 value={formData.custodian}
  onChange={(e) =>
    setFormData({
      ...formData,
      custodian: e.target.value,
    })
  }

                <option>Registrar</option>
                <option>Authorized Custodian</option>
              </select>
            </div>

            {/* Will Version */}
            <div className="form-group">
              <label>Will Version</label>

              <input
                type="text"
                value="V1"
                readOnly
              />
            </div>

            {/* Reference */}
            <div className="form-group">
              <label>Deposit / Registration Reference</label>

              <input
                type="text"
                placeholder="Enter reference number"
                value={formData.reference}
  onChange={(e) =>
    setFormData({
      ...formData,
      reference: e.target.value,
    })
  }
              />
            </div>

            {/* Notice */}
            <div className="form-notice">
              <strong>Important</strong>

              <p>
                WILLVAULT stores secure metadata associated
                with the Will. It does not replace the legally
                executed Will or the authority of the Registrar
                or custodian.
              </p>
            </div>

            {/* Continue */}
            <a href="/payment">
              <button className="primary-button form-button">
                Continue to Payment
              </button>
            </a>

          </div>

        </div>

      </section>

    </div>
  );
}

export default CreateWill;