import React from 'react';

export function Footer() {
  return (
    <footer className="bg-black/80 backdrop-blur-md border-t border-white/10 px-6 py-2 flex items-center justify-between text-[10px] font-bold text-slate-500 z-50">
      <div className="flex gap-8 items-center">
        <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-success-cyan shadow-[0_0_8px_#00F2FF]"></span> REACTOR_TEMP: 1,422°K</span>
        <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-sky-blue shadow-[0_0_8px_#00F2FF]"></span> COMM_LINK: STABLE</span>
        <span className="bg-neon-pink/5 px-3 py-1 border border-neon-pink/20 text-neon-pink/60 tracking-[0.3em]">ZULU_CORE_BEYOND_v5.4</span>
      </div>
      <div className="flex gap-6 items-center">
        <span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-[12px] text-sky-blue">explore</span> DEEP_SPACE_COORD: 0x822A:44F1</span>
        <span className="text-white bg-white/5 px-2 py-1">2024-11-04 23:59:59 RELATIVE</span>
      </div>
    </footer>
  );
}
