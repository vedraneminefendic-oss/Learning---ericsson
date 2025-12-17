
import React, { useState } from 'react';

interface SynergyPair {
  id: string;
  need: string;
  contribution: string;
  icon: string;
  details: string;
}

const ModuleEricssonFit: React.FC<{ onNext: () => void }> = ({ onNext }) => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const synergyPairs: SynergyPair[] = [
    {
      id: 'blended',
      need: "High-Impact Learning",
      contribution: "Behavioral Science",
      icon: "🧠",
      details: "Using cognitive load theory and nudging to ensure learning translates to on-the-job behavior at Ericsson."
    },
    {
      id: 'stakeholder',
      need: "Global Collaboration",
      contribution: "Stakeholder Focus",
      icon: "🤝",
      details: "Navigating complex global hierarchies by treating internal SMEs as high-value partners to secure project success."
    },
    {
      id: 'digital',
      need: "Scalable Solutions",
      contribution: "HCM Technical Depth",
      icon: "⚙️",
      details: "Leveraging years of Cornerstone and CatalystOne experience to build learning architectures that scale across the workforce."
    },
    {
      id: 'data',
      need: "Performance Data",
      contribution: "User-Centered Design",
      icon: "📊",
      details: "Using metrics and learner feedback loops to iterate content based on real evidence, not assumptions."
    }
  ];

  return (
    <div className="max-w-6xl mx-auto py-8 animate-fadeIn">
      <style>
        {`
          @keyframes flow {
            from { stroke-dashoffset: 24; }
            to { stroke-dashoffset: 0; }
          }
          .animate-flow {
            stroke-dasharray: 12 12;
            animation: flow 1s linear infinite;
          }
          .glow-active {
            filter: drop-shadow(0 0 8px rgba(250, 189, 0, 0.6));
          }
        `}
      </style>

      <div className="text-center mb-16">
        <span className="bg-[#fabd00] text-[#002561] px-3 py-1 rounded-sm text-[10px] font-black uppercase tracking-[0.2em]">Stage 02: Strategic Fit</span>
        <h2 className="text-4xl font-black text-[#002561] mt-4 uppercase tracking-tight">The Synergy Diagram</h2>
        <p className="text-slate-400 font-bold text-xs uppercase tracking-widest mt-2 italic">Hover to visualize the connection</p>
      </div>

      <div className="relative grid grid-cols-1 lg:grid-cols-12 items-center gap-4 lg:gap-0 mb-16 h-auto min-h-[500px]">
        {/* Left Column: Ericsson Needs */}
        <div className="lg:col-span-4 space-y-6 z-20">
          <h3 className="text-[#002561] font-black text-[10px] uppercase tracking-[0.3em] mb-8 text-center lg:text-right border-b border-slate-100 pb-2">
            Ericsson Requirements
          </h3>
          {synergyPairs.map((pair) => (
            <div
              key={`need-${pair.id}`}
              onMouseEnter={() => setHoveredId(pair.id)}
              onMouseLeave={() => setHoveredId(null)}
              className={`p-5 rounded-sm border-2 transition-all duration-500 cursor-default text-right relative overflow-hidden group ${
                hoveredId === pair.id 
                ? 'border-[#002561] bg-white shadow-xl translate-x-4 scale-105 z-30' 
                : 'border-slate-50 bg-slate-50/50 opacity-60'
              }`}
            >
              <p className="text-xs font-black text-[#002561] uppercase tracking-tight relative z-10">{pair.need}</p>
              {hoveredId === pair.id && (
                <div className="absolute top-0 right-0 w-1 h-full bg-[#fabd00]"></div>
              )}
            </div>
          ))}
        </div>

        {/* Center: Interactive Visual Hub */}
        <div className="lg:col-span-4 flex flex-col items-center justify-center relative h-full min-h-[400px]">
          <svg 
            className="absolute inset-0 w-full h-full pointer-events-none" 
            viewBox="0 0 400 500"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#002561" stopOpacity="0.2" />
                <stop offset="50%" stopColor="#fabd00" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#002561" stopOpacity="0.2" />
              </linearGradient>
            </defs>
            {synergyPairs.map((pair, idx) => {
              const isActive = hoveredId === pair.id;
              // Adjusted curve logic: start left, curve toward center hub (y=250), then out to right
              const startY = 100 + (idx * 100);
              const endY = startY;
              const hubY = 250;
              
              const pathD = `M 0 ${startY} C 150 ${startY}, 150 ${hubY}, 200 ${hubY} C 250 ${hubY}, 250 ${endY}, 400 ${endY}`;
              
              return (
                <g key={`group-${pair.id}`}>
                  {/* Background static line */}
                  <path
                    d={pathD}
                    fill="none"
                    stroke="#e2e8f0"
                    strokeWidth="2"
                    className="transition-opacity duration-500"
                    style={{ opacity: hoveredId && !isActive ? 0.1 : 1 }}
                  />
                  {/* Active flowing line */}
                  <path
                    d={pathD}
                    fill="none"
                    stroke={isActive ? '#fabd00' : 'transparent'}
                    strokeWidth="4"
                    strokeLinecap="round"
                    className={`transition-all duration-700 ${isActive ? 'animate-flow glow-active' : ''}`}
                  />
                </g>
              );
            })}
          </svg>
          
          <div className="relative z-10 w-28 h-28 md:w-36 md:h-36 bg-[#002561] rounded-full flex items-center justify-center shadow-2xl border-4 border-white transition-all duration-700 group">
            <div className={`absolute inset-0 rounded-full border-2 border-dashed border-[#fabd00] animate-[spin_8s_linear_infinite] ${hoveredId ? 'opacity-100 scale-110' : 'opacity-20'}`}></div>
            <div className="text-4xl md:text-5xl transform transition-transform duration-500 group-hover:scale-110">
              {hoveredId ? synergyPairs.find(p => p.id === hoveredId)?.icon : '💡'}
            </div>
            {hoveredId && (
              <div className="absolute -bottom-10 whitespace-nowrap bg-[#fabd00] text-[#002561] px-3 py-1 text-[9px] font-black uppercase tracking-widest rounded-sm animate-bounce">
                SYNERGY ACTIVE
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Vedran's Contributions */}
        <div className="lg:col-span-4 space-y-6 z-20">
          <h3 className="text-[#002561] font-black text-[10px] uppercase tracking-[0.3em] mb-8 text-center lg:text-left border-b border-slate-100 pb-2">
            Vedran's Solution
          </h3>
          {synergyPairs.map((pair) => (
            <div
              key={`contrib-${pair.id}`}
              onMouseEnter={() => setHoveredId(pair.id)}
              onMouseLeave={() => setHoveredId(null)}
              className={`p-5 rounded-sm border-2 transition-all duration-500 cursor-default relative overflow-hidden group ${
                hoveredId === pair.id 
                ? 'border-[#fabd00] bg-white shadow-xl -translate-x-4 scale-105 z-30' 
                : 'border-slate-50 bg-slate-50/50 opacity-60'
              }`}
            >
              <p className="text-xs font-black text-[#002561] uppercase tracking-tight relative z-10">{pair.contribution}</p>
              {hoveredId === pair.id && (
                <div className="absolute top-0 left-0 w-1 h-full bg-[#002561]"></div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Details Panel */}
      <div className="min-h-[140px] mb-12 flex justify-center items-center">
        {hoveredId ? (
          <div className="bg-white border border-slate-100 p-8 rounded-sm shadow-2xl animate-slideUp max-w-2xl w-full relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#002561] text-white px-4 py-1 rounded-sm text-[9px] font-black uppercase tracking-[0.3em]">
              Strategic Context
            </div>
            <div className="flex items-center gap-6">
              <span className="text-4xl filter drop-shadow-md">{synergyPairs.find(p => p.id === hoveredId)?.icon}</span>
              <p className="text-slate-600 font-medium leading-relaxed italic text-sm md:text-base border-l-2 border-[#fabd00] pl-6">
                "{synergyPairs.find(p => p.id === hoveredId)?.details}"
              </p>
            </div>
          </div>
        ) : (
          <div className="text-center py-12 px-8 bg-slate-50/50 border border-dashed border-slate-200 rounded-sm w-full max-w-2xl">
            <p className="text-slate-400 font-bold text-[10px] uppercase tracking-[0.4em] animate-pulse">
              Select a requirement to reveal the design logic
            </p>
          </div>
        )}
      </div>

      <div className="flex justify-center">
        <button 
          onClick={onNext}
          className="group relative bg-[#002561] text-white font-black py-6 px-20 rounded-sm shadow-xl hover:shadow-[0_25px_50px_-12px_rgba(0,37,97,0.4)] transition-all tracking-[0.3em] text-[10px] md:text-xs uppercase overflow-hidden"
        >
          <span className="relative z-10">PROCEED TO STAKEHOLDER STRATEGY →</span>
          <div className="absolute inset-0 bg-[#fabd00] translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
          <style>{`.group:hover span { color: #002561; }`}</style>
        </button>
      </div>
    </div>
  );
};

export default ModuleEricssonFit;
