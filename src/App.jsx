import React from "react";
import Dashboard from "./Components/Dashboard";
import { RevenueProvider } from "./Components/RevenueContext";

const App = () => {
  return (
    <div>
      <RevenueProvider>
        <Dashboard />
        {/* <NewDashboard /> */}
      </RevenueProvider>
    </div>
  );
};

export default App;
