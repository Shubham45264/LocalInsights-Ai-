import React, { useState, useEffect } from "react";
import Sidebar from "../../components/Sidebar.jsx";
import LocationAnalysisCard from "../../components/LocationAnalysisCard.jsx";


function Dashboard() {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch("http://127.0.0.1:5000/api/data")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 bg-gray-100 p-8">
        <h1 className="text-3xl font-semibold  text-gray-800">
          Welcome to Your Dashboard
        </h1>

        {/* Centered Card Section */}
          {/* <div className="w-full max-w-3xl">
            <LocationAnalysisCard />
          </div> */}

        {/* API Data Message */}
        <p className="mt-8 text-gray-600 text-lg text-center">
          {data.message}
        </p>
      </main>
    </div>
  );
}

export default Dashboard;
