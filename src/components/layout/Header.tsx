import React from 'react';

export function Header({ currentView, setSearchParams }: { currentView: string, setSearchParams: (params: Record<string, string>) => void }) {
  return (
    <header className="flex items-center justify-between border-b border-white/5 bg-black/40 backdrop-blur-md px-6 py-3 z-40">
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined text-neon-pink text-3xl glow-text-pink">rocket_launch</span>
          <div className="flex flex-col">
            <h1 className="text-xs font-bold tracking-[0.3em] uppercase text-sky-blue glow-text-blue leading-none">Zulu_Deep_Space_v5</h1>
            <span className="text-[9px] text-success-cyan font-mono opacity-80 mt-1">CORE_LINK: SYNCHRONIZED</span>
          </div>
        </div>
        <nav className="flex items-center gap-8">
          <button 
            onClick={() => setSearchParams({ view: 'telemetry' })}
            className={`${currentView === 'telemetry' ? 'text-neon-pink border-b-2 border-neon-pink' : 'text-slate-500 hover:text-sky-blue'} text-[11px] font-bold py-1 tracking-wider transition-all hover:glow-text-pink`}
          >
            TELEMETRY
          </button>
          <button 
            onClick={() => setSearchParams({ view: 'health' })}
            className={`${currentView === 'health' ? 'text-neon-pink border-b-2 border-neon-pink' : 'text-slate-500 hover:text-sky-blue'} text-[11px] font-bold py-1 tracking-wider transition-all hover:glow-text-pink`}
          >
            SYSTEM HEALTH
          </button>
          <button 
            onClick={() => setSearchParams({ view: 'kanban' })}
            className={`${currentView === 'kanban' ? 'text-neon-pink border-b-2 border-neon-pink' : 'text-slate-500 hover:text-sky-blue'} text-[11px] font-bold py-1 tracking-wider transition-all hover:glow-text-pink`}
          >
            KANBAN
          </button>
          <button 
            onClick={() => setSearchParams({ view: 'roadmap' })}
            className={`${currentView === 'roadmap' ? 'text-neon-pink border-b-2 border-neon-pink' : 'text-slate-500 hover:text-sky-blue'} text-[11px] font-bold py-1 tracking-wider transition-all hover:glow-text-pink`}
          >
            ROADMAP
          </button>
        </nav>
      </div>

      <div className="flex items-center gap-6 font-mono text-[10px]">
        <div className="flex flex-col items-end">
          <span className="text-slate-500 tracking-tighter">MISSION_TIME: 1284:44:02</span>
          <span className="text-success-cyan">SIGNAL_STRENGTH: 98.4%</span>
        </div>
        <div className="w-9 h-9 rounded-sm border border-neon-pink/40 bg-cover bg-center ring-1 ring-sky-blue/20" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCxc518eizkO9lo2wuOfiMZOYlEofEHc0z6NDoDnYAn6HnKXKhNY-N1ngCXY7KEHFf42xA909mFo-zxf6AK4D1FWHb1o3qE1kxRfYlXPJDHqJAp3mCrjI0wqqVa7QYG1aInQnUtGiGQOquO4DRKYCLSxdFOT_F4giu0XFbtSsPocsJhsaOS-0xTWNATlyAewvOeSVu_HFxGxjutKUHoY5IIWU6vPEU0XzdE_7AfVh8d2XAVs_AMlMSOsa1eLThuOAiTsKNEcPGni54')"}}></div>
      </div>
    </header>
  );
}
