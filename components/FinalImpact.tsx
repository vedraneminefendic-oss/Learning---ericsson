
import React from 'react';
import { VEDRAN_PROFILE } from '../constants';

const FinalImpact: React.FC = () => {
  const emailSubject = encodeURIComponent("Wow, amazing application. Lets chat!");
  const emailBody = encodeURIComponent("Hi Vedran,\n\nWe explored your interactive application and would love to discuss the Learning Experience Designer role further.");

  return (
    <div className="max-w-4xl mx-auto py-12 animate-fadeIn">
      <div className="text-center mb-20">
        <div className="w-16 h-1 bg-[#002561] mx-auto mb-8"></div>
        <h2 className="text-5xl font-black text-[#002561] tracking-tight uppercase">Ready for Impact.</h2>
        <p className="text-slate-400 font-bold uppercase tracking-[0.3em] mt-4">Göteborg, Sweden</p>
      </div>

      <div className="bg-white rounded-lg shadow-2xl border border-slate-100 p-10 md:p-16 mb-20 relative overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-black text-[#002561] mb-6 leading-tight">A Learning Experience Designer who thinks like a Scientist.</h3>
            <p className="text-slate-600 leading-relaxed mb-8">
              "Vedran brings more than just instructional design; he brings a data-driven approach to human behavior. With deep roots in Cornerstone and CatalystOne ecosystems, he ensures Ericsson's learning is scalable, technical, and psychologically optimized."
            </p>
            <div className="flex flex-wrap gap-2">
              {VEDRAN_PROFILE.skills.map(skill => (
                <span key={skill} className="text-[9px] font-black uppercase tracking-widest text-slate-400 border border-slate-200 px-2 py-1 rounded-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          <div className="relative group">
            <div className="aspect-square rounded-sm overflow-hidden border-8 border-slate-50 shadow-inner">
               <img 
                 src={VEDRAN_PROFILE.photoUrl} 
                 alt={VEDRAN_PROFILE.name} 
                 className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
               />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-[#fabd00] p-6 text-[#002561] shadow-xl">
              <p className="font-black text-sm uppercase tracking-widest">Connect to Learn</p>
              <p className="text-[10px] font-bold opacity-80 uppercase">Focused on Results</p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center">
        <p className="text-slate-400 font-bold uppercase tracking-widest text-xs mb-8">Ready to move forward?</p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a 
            href={`mailto:vedran.eminefendic@gmail.com?subject=${emailSubject}&body=${emailBody}`} 
            className="inline-block bg-[#002561] text-white font-black py-5 px-12 rounded-sm shadow-xl hover:bg-[#001c4a] transition-all tracking-[0.2em] text-sm uppercase min-w-[280px]"
          >
            Email Vedran
          </a>
          <a 
            href={`tel:${VEDRAN_PROFILE.phone.replace(/\s+/g, '')}`} 
            className="inline-block bg-white text-[#002561] border-2 border-[#002561] font-black py-5 px-12 rounded-sm shadow-lg hover:bg-slate-50 transition-all tracking-[0.2em] text-sm uppercase min-w-[280px]"
          >
            {VEDRAN_PROFILE.phone}
          </a>
        </div>
      </div>
    </div>
  );
};

export default FinalImpact;
