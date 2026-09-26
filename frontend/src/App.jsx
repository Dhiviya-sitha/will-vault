import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import CreateWill from "./pages/CreateWill";
import Payment from "./pages/Payment";
import Security from "./pages/Security";
import DeathVerification from "./pages/DeathVerification";
import WillDiscovery from "./pages/WillDiscovery";
import WriteWill from "./pages/WriteWill";
import WillRecord from "./pages/WillRecord";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/create-will" element={<CreateWill />} />

        <Route path="/payment" element={<Payment />} />

        <Route path="/write-will" element={<WriteWill />} />

        <Route path="/will-record" element={<WillRecord />} />

        <Route path="/security" element={<Security />} />

        <Route
          path="/death-verification"
          element={<DeathVerification />}
        />

        <Route
          path="/will-discovery"
          element={<WillDiscovery />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
