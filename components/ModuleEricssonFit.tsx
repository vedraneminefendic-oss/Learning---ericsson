
import React, { useState } from 'react';

interface SynergyPair {
  id: string;
  need: string;
  contribution: string;
  icon: string;
  details: string;
}

const ModuleEricssonFit: React.FC<{ onNext: () => void, onBack: () => void }> = ({ onNext, onBack }) => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const synergyPairs: SynergyPair[] = [
    { 
      id: 'blended', 
      need: "High-Impact Learning", 
      contribution: "Behavioral Science", 
      icon: "🧠", 
      details: "Using behavioral insights to ensure learning translates to actual on-the-job performance." 
    },
    { 
      id: 'stakeholder', 
      need: "Global Collaboration", 
      contribution: "Stakeholder Focus", 
      icon: "🤝", 
      details: "Working within global team structures by treating internal SMEs as partners to deliver accurate content." 
    },
    { 
      id: 'digital', 
      need: "Scalable Solutions", 
      contribution: "HCM Technical Depth", 
      icon: "⚙️", 
      details: "Using technical experience with platforms like Cornerstone to build learning architectures that work at scale." 
    },
    { 
      id: 'data', 
      need: "Performance Data", 
      contribution: "User-Centered Design", 
      icon: "📊", 
      details: "Using feedback and metrics to refine content based on how learners actually interact with it." 
    }
  ];

  return (
    <div className="max-w-6xl mx-auto h-full flex flex-col justify-center animate-fadeIn py-2 overflow-hidden">
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

      <div className="text-center mb-4 shrink-0">
        <span className="bg-[#fabd00] text-[#002561] px-2 py-0.5 rounded-sm text-[9px] font-black uppercase tracking-widest">Stage 02: Strategic Fit</span>
        <h2 className="text-2xl font-black text-[#002561] mt-1 uppercase tracking-tight">The Synergy Diagram</h2>
      </div>

      <div className="min-h-[70px] mb-4 shrink-0 flex justify-center items-center px-4">
        {hoveredId ? (
          <div className="bg-white border border-slate-100 p-3 rounded-sm shadow-lg max-w-2xl w-full relative animate-fadeIn">
            <div className="absolute -top-2 left-4 bg-[#002561] text-white px-2 py-0.5 rounded-sm text-[7px] font-black uppercase tracking-widest">
              Design Logic
            </div>
            <p className="text-slate-600 font-medium italic text-[11px] leading-relaxed border-l-2 border-[#fabd00] pl-4">
              "{synergyPairs.find(p => p.id === hoveredId)?.details}"
            </p>
          </div>
        ) : (
          <div className="text-center py-4 px-8 border border-dashed border-slate-200 rounded-sm w-full max-w-xl">
            <p className="text-slate-400 font-bold text-[9px] uppercase tracking-[0.4em] animate-pulse">
              Hover over a requirement to reveal design logic
            </p>
          </div>
        )}
      </div>

      <div className="relative grid grid-cols-1 lg:grid-cols-12 items-center gap-2 mb-4 shrink min-h-0">
        <div className="lg:col-span-4 space-y-2 z-20">
          {synergyPairs.map((pair) => (
            <div
              key={`need-${pair.id}`}
              onMouseEnter={() => setHoveredId(pair.id)}
              onMouseLeave={() => setHoveredId(null)}
              className={`p-3 rounded-sm border transition-all duration-300 cursor-default text-right relative overflow-hidden ${
                hoveredId === pair.id 
                ? 'border-[#002561] bg-white shadow-md translate-x-2' 
                : 'border-slate-50 bg-slate-50 opacity-60'
              }`}
            >
              <p className="text-[10px] font-black text-[#002561] uppercase tracking-tight">{pair.need}</p>
            </div>
          ))}
        </div>

        <div className="lg:col-span-4 flex items-center justify-center relative min-h-[180px]">
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 400" preserveAspectRatio="none">
            {synergyPairs.map((pair, idx) => {
              const isActive = hoveredId === pair.id;
              const startY = 80 + (idx * 80);
              const hubY = 200;
              const pathD = `M 0 ${startY} C 150 ${startY}, 150 ${hubY}, 200 ${hubY} C 250 ${hubY}, 250 ${startY}, 400 ${startY}`;
              return (
                <g key={`path-${pair.id}`}>
                  <path d={pathD} fill="none" stroke="#e2e8f0" strokeWidth="1.5" className="transition-opacity duration-500" style={{ opacity: hoveredId && !isActive ? 0.1 : 0.5 }} />
                  {isActive && <path d={pathD} fill="none" stroke="#fabd00" strokeWidth="3" strokeLinecap="round" className="animate-flow glow-active" />}
                </g>
              );
            })}
          </svg>
          <div className="relative z-10 w-24 h-24 bg-[#002561] rounded-full flex items-center justify-center shadow-2xl border-4 border-white transition-all duration-500 overflow-hidden">
            <div className={`absolute inset-0 rounded-full border-2 border-dashed border-[#fabd00]/30 animate-[spin_10s_linear_infinite] ${hoveredId ? 'opacity-100' : 'opacity-0'}`}></div>
            <span className="text-4xl transform transition-transform duration-500 group-hover:scale-110">
              {hoveredId ? synergyPairs.find(p => p.id === hoveredId)?.icon : '💡'}
            </span>
          </div>
        </div>

        <div className="lg:col-span-4 space-y-2 z-20">
          {synergyPairs.map((pair) => (
            <div
              key={`sol-${pair.id}`}
              onMouseEnter={() => setHoveredId(pair.id)}
              onMouseLeave={() => setHoveredId(null)}
              className={`p-3 rounded-sm border transition-all duration-300 cursor-default relative overflow-hidden ${
                hoveredId === pair.id 
                ? 'border-[#fabd00] bg-white shadow-md -translate-x-2' 
                : 'border-slate-50 bg-slate-50 opacity-60'
              }`}
            >
              <p className="text-[10px] font-black text-[#002561] uppercase tracking-tight">{pair.contribution}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center gap-3 shrink-0">
        <button 
          onClick={onNext} 
          className="group relative bg-[#002561] text-white font-black py-4 px-12 rounded-sm shadow-xl tracking-widest text-[10px] uppercase overflow-hidden"
        >
          <span className="relative z-10">PROCEED TO STAKEHOLDER STRATEGY →</span>
          <div className="absolute inset-0 bg-[#fabd00] translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
          <style>{`.group:hover span { color: #002561; }`}</style>
        </button>
        <button onClick={onBack} className="text-[#002561] opacity-50 font-black text-[8px] uppercase tracking-widest border-b border-[#002561]/20 pb-0.5 hover:opacity-100 transition-opacity">
          ← Back to Qualification
        </button>
      </div>
    </div>
  );
};

export default ModuleEricssonFit;
