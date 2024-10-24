import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from 'buying/components/layout/Layout';
import Buyers from 'buying/pages/registration/Buyers';
import Societies from 'buying/pages/registration/Societies';
import Growers from './pages/registration/Growers';
import CropGrades from './pages/registration/CropGrades';
import MarketCenters from './pages/registration/MarketCenters';
import Locations from './pages/registration/Locations';
import RegisterSales from './pages/marketSales/RegisterSales';
import TicketsCapturing from './pages/marketSales/TicketsCapturing';
import PurchaseContract from './pages/marketSales/PurchaseContract';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* Registration Routes */}
          <Route path="/registration/buyers" element={<Buyers />} />
          <Route path="/registration/societies" element={<Societies />} />
          <Route path="/registration/growers" element={<Growers />} />
          <Route path="/registration/crop-grades" element={<CropGrades />} />
          <Route path="/registration/market-centers" element={<MarketCenters />} />
          <Route path="/registration/locations" element={<Locations />} />
          
          {/* Market Sales Routes */}
          <Route path="/market-sales/register" element={<RegisterSales />} />
          <Route path="/market-sales/tickets" element={<TicketsCapturing />} />
          <Route path="/market-sales/pcn" element={<PurchaseContract />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;