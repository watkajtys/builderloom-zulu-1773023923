import React from 'react';

export function LeftSidebar() {
  return (
    <aside className="w-72 flex flex-col gap-3">
      <div className="bg-panel-bg border border-white/10 p-4 relative overflow-hidden flex flex-col h-44 shadow-2xl">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-[10px] text-sky-blue/70 uppercase tracking-widest font-bold">Neural_Oscillation</h3>
          <span className="material-symbols-outlined text-neon-pink text-xs animate-pulse">settings_input_antenna</span>
        </div>
        <div className="flex-1 flex items-center justify-center relative">
          <svg className="w-full h-16 opacity-90" viewBox="0 0 200 60">
            <path d="M0 30 Q 5 10, 10 30 T 20 30 T 30 30 T 40 30 T 50 30 T 60 30 T 70 30 T 80 30 T 90 30 T 100 30 T 110 30 T 120 30 T 130 30 T 140 30 T 150 30 T 160 30 T 170 30 T 180 30 T 190 30 T 200 30" fill="none" stroke="#FF0080" strokeWidth="1.5"></path>
            <path d="M0 35 Q 15 15, 30 35 T 60 35 T 90 35 T 120 35 T 150 35 T 180 35 T 210 35" fill="none" opacity="0.4" stroke="#00F2FF" strokeDasharray="3 2" strokeWidth="1"></path>
          </svg>
        </div>
        <div className="mt-2 flex justify-between items-baseline">
          <span className="text-2xl font-bold text-white glow-text-pink">12.8<span className="text-sm opacity-50">THz</span></span>
          <span className="text-[9px] text-success-cyan font-bold">QUANTUM_LOCK</span>
        </div>
      </div>
      
      <div className="bg-panel-bg border border-white/10 p-4 flex-1 flex flex-col shadow-2xl">
        <h3 className="text-[10px] text-sky-blue/70 uppercase tracking-widest font-bold mb-4">Instance_Clusters</h3>
        <div className="space-y-4 overflow-y-auto pr-2 terminal-scroll">
          <div className="border-l-2 border-sky-blue pl-3 py-1 bg-sky-blue/5">
            <div className="flex justify-between text-[11px] mb-1">
              <span className="text-white">void-nexus-01</span>
              <span className="text-success-cyan font-bold">ACTIVE</span>
            </div>
            <div className="w-full bg-white/5 h-1">
              <div className="bg-sky-blue h-full w-[92%] shadow-[0_0_8px_#00F2FF]"></div>
            </div>
          </div>
          <div className="border-l-2 border-sky-blue pl-3 py-1">
            <div className="flex justify-between text-[11px] mb-1">
              <span className="text-white">stellar-compute</span>
              <span className="text-success-cyan">STABLE</span>
            </div>
            <div className="w-full bg-white/5 h-1">
              <div className="bg-sky-blue h-full w-[64%]"></div>
            </div>
          </div>
          <div className="border-l-2 border-error-magenta pl-3 py-1 bg-error-magenta/5">
            <div className="flex justify-between text-[11px] mb-1">
              <span className="text-white">core-routing</span>
              <span className="text-error-magenta font-bold animate-pulse">ERR_THERMAL</span>
            </div>
            <div className="w-full bg-white/5 h-1">
              <div className="bg-error-magenta h-full w-[98%] shadow-[0_0_8px_#FF0080]"></div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
