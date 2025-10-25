import React from 'react';
import { MapPin, Award, DollarSign, Users, TrendingUp, Target } from 'lucide-react';

// This is the main component for the entire application.
// In a real app, this would be in App.jsx or index.jsx.
export default function App() {
  // We render the card component inside a light gray background
  // to make it stand out, similar to the shadow in the image.
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <LocationAnalysisCard />
    </div>
  );
}

// This is the main card component you requested.
function LocationAnalysisCard() {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 w-full max-w-4xl font-sans">
      {/* Header Section */}
      <header className="flex items-start md:items-center gap-3 md:gap-4 mb-6">
        <div className="flex-shrink-0">
          <MapPin className="w-8 h-8 md:w-10 md:h-10 text-blue-600" strokeWidth={1.5} />
        </div>
        <div>
          <h1 className="text-xl md:text-2xl font-bold text-gray-800">
            Location Analysis Complete
          </h1>
          <p className="text-sm md:text-base text-gray-500">
            For HotBulls Cafe - Restaurant/Cafe
          </p>
        </div>
      </header>

      {/* Main Content Area (Blue Box) */}
      <main className="bg-blue-50 rounded-xl p-6">
        <div className="flex flex-col lg:flex-row gap-6">
          
          {/* Left Side: Top Recommendation */}
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-blue-600" />
              <h2 className="text-lg font-semibold text-gray-800">
                Top Recommendation
              </h2>
            </div>
            
            <p className="text-4xl md:text-5xl font-bold text-blue-700 mt-3">
              Mumbai
            </p>
            <p className="text-sm text-gray-600 mt-2 max-w-md">
              Best location for your business based on AI analysis
            </p>
            
            <div className="mt-4">
              <span className="inline-block bg-green-100 text-green-800 text-sm font-semibold py-1.5 px-4 rounded-full">
                66.5% Success Rate
              </span>
            </div>
          </div>
          
          {/* Right Side: Stats Grid */}
          <div className="flex-1 grid grid-cols-2 gap-4">
            <StatCard
              icon={<DollarSign className="w-4 h-4" />}
              label="Est. Monthly Revenue"
              value="₹5.0K"
            />
            <StatCard
              icon={<Users className="w-4 h-4" />}
              label="Competition"
              value="90%"
            />
            <StatCard
              icon={<TrendingUp className="w-4 h-4" />}
              label="Market Demand"
              value="100%"
            />
            <StatCard
              icon={<Target className="w-4 h-4" />}
              label="Competitors"
              value="111"
            />
          </div>
        </div>
      </main>
    </div>
  );
}

// A helper component for the four statistics cards on the right.
function StatCard({ icon, label, value }) {
  return (
    <div className="bg-white rounded-lg p-4 shadow-sm">
      <div className="flex items-center gap-2 text-blue-600">
        {icon}
        <span className="text-xs font-medium uppercase tracking-wide">
          {label}
        </span>
      </div>
      <p className="text-2xl md:text-3xl font-bold text-gray-800 mt-1">
        {value}
      </p>
    </div>
  );
}
