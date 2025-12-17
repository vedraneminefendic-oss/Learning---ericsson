
import React from 'react';
import { VEDRAN_PROFILE } from '../constants';

const FinalImpact: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto p-6 animate-fadeIn">
      <div className="text-center mb-16">
        <span className="text-[#002561] font-black tracking-[0.3em] text-sm uppercase">Conclusion</span>
        <h2 className="text-5xl md:text-6xl font-black text-[#002561] mt-4 tracking-tight">The Ericsson Advantage</h2>
        <div className="w-24 h-1 bg-[#fabd00] mx-auto mt-6"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-20">
        <div className="lg:col-span-7 space-y-6">
          <div className="bg-white p-8 rounded-3xl shadow-sm border-l-8 border-[#002561]">
            <h3 className="text-xl font-bold text-[#002561] mb-3">Enterprise Experience</h3>
            <p className="text-slate-600 leading-relaxed italic">
              "Working with HCM strategy for global organizations has taught me that the best learning experiences are those that drive real business impact."
            </p>
          </div>
          
          <div className="bg-slate-900 text-white p-8 rounded-3xl shadow-xl">
            <h3 className="text-xl font-bold mb-4 text-[#fabd00]">Göteborg Ready</h3>
            <p className="text-slate-300">
              Locally based and globally minded. I am ready to join the 17-person team and drive the <strong>Connect to Learn</strong> project forward.
            </p>
          </div>
        </div>

        <div className="lg:col-span-5 bg-[#002561] rounded-[3rem] p-10 text-white flex flex-col justify-between shadow-2xl">
          <div>
            <h3 className="text-3xl font-bold mb-8 leading-tight">A designer who thinks like a scientist.</h3>
          </div>
          <div className="flex items-center gap-5 pt-8 border-t border-blue-800">
            <div className="w-16 h-16 rounded-xl overflow-hidden grayscale border-2 border-white/20">
               <img src={VEDRAN_PROFILE.photoUrl} alt={VEDRAN_PROFILE.name} className="w-full h-full object-cover" />
            </div>
            <div>
              <p className="font-bold text-lg">{VEDRAN_PROFILE.name}</p>
              <p className="text-sm text-blue-300">LXD Candidate • Göteborg, SE</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinalImpact;
