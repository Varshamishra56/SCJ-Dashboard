import React from "react";
import { RevenueProvider } from "./Components/RevenueContext";
import DistributionPage from "./Components/DistributionPage";

const App = () => {
  return (
    <div>
      <RevenueProvider>
        <DistributionPage />
      </RevenueProvider>
    </div>
  );
};

export default App;
