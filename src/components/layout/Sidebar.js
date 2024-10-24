import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const menuItems = {
    registration: [
      { path: '/registration/buyers', label: 'Buyers' },
      { path: '/registration/societies', label: 'Society' },
      { path: '/registration/growers', label: 'Growers' },
      { path: '/registration/crop-grades', label: 'Crop Grade' },
      { path: '/registration/market-centers', label: 'Market Centers' },
      { path: '/registration/locations', label: 'Location' },
    ],
    marketSales: [
      { path: '/market-sales/register', label: 'Register Sales' },
      { path: '/market-sales/tickets', label: 'Tickets Capturing' },
      { path: '/market-sales/pcn', label: 'Purchase Contract' },
    ],
  };

  return (
    <div className="w-64 bg-gray-800 text-white">
      <div className="p-4">
        <h2 className="text-xl font-semibold">Market Management</h2>
      </div>
      <nav className="mt-4">
        <div className="px-4 py-2">
          <h3 className="text-lg font-medium">Registration</h3>
          <ul className="mt-2 space-y-1">
            {menuItems.registration.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className="block px-4 py-2 hover:bg-gray-700 rounded"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="px-4 py-2 mt-4">
          <h3 className="text-lg font-medium">Market Sales</h3>
          <ul className="mt-2 space-y-1">
            {menuItems.marketSales.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className="block px-4 py-2 hover:bg-gray-700 rounded"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;