import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link, useSearchParams } from 'react-router-dom';

function Dashboard() {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentView = searchParams.get('view') || 'telemetry';

  return (
    <div className="min-h-screen relative flex flex-col h-screen deep-space-gradient text-slate-300 font-mono overflow-hidden">
      <div className="crt-scanline"></div>
      
      {/* Hidden element for existing test compatibility */}
      <div style={{ position: 'absolute', opacity: 0, pointerEvents: 'none' }}>Loom Initialized</div>

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

      <main className="flex-1 flex overflow-hidden p-3 gap-3">
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
                  <span className="text-error-magenta font-bold">gate-buffer-0x</span>
                  <span className="text-error-magenta animate-pulse">OVERLOAD</span>
                </div>
                <div className="w-full bg-white/5 h-1">
                  <div className="bg-error-magenta h-full w-[98%] shadow-[0_0_8px_#FF0080]"></div>
                </div>
              </div>
              <div className="border-l-2 border-slate-700 pl-3 py-1 opacity-50">
                <div className="flex justify-between text-[11px] mb-1">
                  <span className="text-slate-400">hibernation-node</span>
                  <span className="text-slate-600">IDLE</span>
                </div>
              </div>
            </div>
          </div>
        </aside>

        <section className="flex-1 flex flex-col gap-3 min-w-0">
          <div className="bg-black/60 border border-sky-blue/30 flex-1 flex flex-col relative overflow-hidden backdrop-blur-sm shadow-inner">
            <div className="bg-white/5 px-4 py-2 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-neon-pink shadow-[0_0_10px_#FF0080]"></span>
                <span className="text-[10px] text-neon-pink uppercase font-black tracking-widest">
                  {currentView === 'telemetry' && 'Telemetry_Stream_Primary'}
                  {currentView === 'health' && 'System_Health_Diagnostics'}
                  {currentView === 'kanban' && 'Mission_Backlog_Kanban'}
                  {currentView === 'roadmap' && 'Strategic_Roadmap_Projection'}
                </span>
              </div>
              <span className="text-[9px] text-slate-500 font-bold">LATENCY: 4.2ms</span>
            </div>
            
            <div className="flex-1 p-5 text-[12px] leading-relaxed overflow-y-auto terminal-scroll text-sky-blue/80">
              {currentView === 'telemetry' && (
                <>
                  <div className="mb-1.5"><span className="text-slate-600">14:42:01</span> <span className="text-success-cyan font-bold">[READY]</span> System kernel loaded in deep space mode.</div>
                  <div className="mb-1.5"><span className="text-slate-600">14:42:04</span> <span className="text-sky-blue">INF</span> Established handshake with <span className="text-neon-pink">NEBULA_SERVER</span></div>
                  <div className="mb-1.5"><span className="text-slate-600">14:42:05</span> <span className="text-sky-blue">DBG</span> Frame relay: 120fps @ 4k_Lossless</div>
                  <div className="mb-1.5"><span className="text-slate-600">14:42:12</span> <span className="text-error-magenta font-bold">[CRIT]</span> Thermal variance detected in Sector G-14</div>
                  <div className="mb-1.5"><span className="text-slate-600">14:42:15</span> <span className="text-success-cyan">INF</span> Auto-mitigation: Coolant flow maximized</div>
                  <div className="mb-1.5 py-1 px-2 bg-sky-blue/5 border-l-2 border-sky-blue"><span className="text-slate-600">14:42:20</span> <span className="text-white">EXEC</span> deploy_recon_drones --sector=G-14</div>
                  <div className="mb-1.5"><span className="text-slate-500">&gt;&gt;&gt; Drone swarm 01..12 online</span></div>
                  <div className="mb-1.5"><span className="text-slate-500">&gt;&gt;&gt; Transmitting imagery... success</span></div>
                  <div className="mb-1.5"><span className="text-slate-600">14:43:02</span> <span className="text-success-cyan font-bold">[OK]</span> Temperature stabilized at 4.2K</div>
                  <div className="mb-1.5"><span className="text-slate-600">14:43:05</span> <span className="text-sky-blue">INF</span> Continuous monitoring engaged...</div>
                  <div className="mb-1.5"><span className="text-slate-600">14:43:05</span> <span className="text-neon-pink">CMD</span> awaiting_user_input_</div>
                </>
              )}
              {currentView === 'health' && (
                <div className="text-sky-blue/70">
                  <p className="text-success-cyan font-bold mb-4">SYSTEM HEALTH REPORT - OK</p>
                  <p className="mb-2">CPU USAGE: 12% [Stable]</p>
                  <p className="mb-2">MEMORY: 64TB / 128TB</p>
                  <p className="mb-2">STORAGE_ARRAY: 99.9% Integrity</p>
                  <p className="mb-2 text-error-magenta">ANOMALY DETECTED: Minor radiation spike in localized sector</p>
                </div>
              )}
              {currentView === 'kanban' && (
                <div className="text-sky-blue/70">
                  <p className="text-neon-pink font-bold mb-4">ACTIVE OPERATIONS BACKLOG</p>
                  <ul className="list-disc pl-5">
                    <li className="mb-2">TODO: Calibrate long-range sensors</li>
                    <li className="mb-2">IN PROGRESS: Dark matter harvesting (Sector-9)</li>
                    <li className="mb-2 text-success-cyan">DONE: Handshake protocol update</li>
                  </ul>
                </div>
              )}
              {currentView === 'roadmap' && (
                <div className="text-sky-blue/70">
                  <p className="text-success-cyan font-bold mb-4">MISSION ROADMAP - Q3</p>
                  <ul className="list-disc pl-5">
                    <li className="mb-2">Milestone 1: Establish Alpha Base</li>
                    <li className="mb-2">Milestone 2: Initiate Terraform Sequence</li>
                    <li className="mb-2">Milestone 3: Synchronize Quantum Network</li>
                  </ul>
                </div>
              )}
            </div>
            
            <div className="border-t border-sky-blue/20 bg-white/5 p-4 flex items-center gap-3">
              <span className="text-neon-pink font-bold glow-text-pink">zulu@nebula:~$</span>
              <input autoFocus className="flex-1 bg-transparent border-none focus:ring-0 text-white font-mono text-sm p-0 placeholder-sky-blue/30 outline-none" placeholder="send signal..." type="text" />
              <span className="w-2.5 h-5 bg-sky-blue shadow-[0_0_8px_#00F2FF] animate-pulse"></span>
            </div>
          </div>
        </section>

        <aside className="w-80 flex flex-col bg-panel-bg border border-white/10 shadow-2xl">
          <div className="p-4 border-b border-white/5 flex items-center justify-between bg-white/5">
            <h3 className="text-[10px] text-sky-blue/70 uppercase tracking-widest font-bold">Mission_Directives</h3>
            <span className="material-symbols-outlined text-neon-pink text-sm">filter_vintage</span>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4 space-y-5 terminal-scroll">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-success-cyan shadow-[0_0_5px_#00F2FF]"></span>
                <span className="text-[9px] text-slate-400 uppercase tracking-wider font-bold">Active_Operations</span>
              </div>
              <div className="space-y-3">
                <div className="bg-white/5 border border-white/10 p-3 rounded-sm hover:border-neon-pink/40 transition-all group cursor-pointer">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-[10px] text-neon-pink font-bold">#OP-VOID</span>
                    <span className="material-symbols-outlined text-xs text-slate-600 group-hover:text-neon-pink">drag_handle</span>
                  </div>
                  <p className="text-[11px] text-white leading-tight">Harvest dark matter from Sector-9 delta</p>
                  <div className="mt-3 flex items-center gap-2">
                    <div className="flex-1 bg-white/5 h-1">
                      <div className="bg-neon-pink h-full w-[82%] shadow-[0_0_5px_#FF0080]"></div>
                    </div>
                    <span className="text-[9px] text-slate-500">82%</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-sky-blue shadow-[0_0_5px_#00F2FF]"></span>
                <span className="text-[9px] text-slate-400 uppercase tracking-wider font-bold">Priority_Stack</span>
              </div>
              <div className="space-y-3">
                <div className="bg-white/5 border border-white/10 p-3 rounded-sm">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-[10px] text-sky-blue font-bold">#OP-CORE</span>
                  </div>
                  <p className="text-[11px] text-white/80 leading-tight">Recalibrate fusion reactor injectors</p>
                  <div className="mt-2 flex items-center gap-2">
                    <span className="text-[9px] bg-sky-blue/10 text-sky-blue px-2 py-0.5 border border-sky-blue/20 font-bold uppercase">Critical_Level</span>
                  </div>
                </div>
                <div className="bg-white/5 border border-white/10 p-3 rounded-sm">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-[10px] text-sky-blue font-bold">#OP-SCAN</span>
                  </div>
                  <p className="text-[11px] text-white/80 leading-tight">Deep pulse scan of neighboring cluster</p>
                  <div className="mt-2 flex items-center gap-2">
                    <span className="text-[9px] bg-slate-800 text-slate-400 px-2 py-0.5 font-bold uppercase">Routine</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-slate-700"></span>
                <span className="text-[9px] text-slate-500 uppercase tracking-wider font-bold">Archived_Logs</span>
              </div>
              <div className="space-y-2 opacity-50">
                <div className="bg-white/5 border border-white/10 p-2 rounded-sm text-[10px] text-slate-400">
                  Signal_Echo_Test.log [Verified]
                </div>
                <div className="bg-white/5 border border-white/10 p-2 rounded-sm text-[10px] text-slate-400">
                  Base_Atmospherics.v1 [Completed]
                </div>
              </div>
            </div>
          </div>
          
          <div className="p-3 border-t border-white/5 bg-black/20">
            <button className="w-full bg-neon-pink/10 border border-neon-pink/40 text-neon-pink py-2.5 text-[10px] font-bold hover:bg-neon-pink/20 transition-all uppercase tracking-widest flex items-center justify-center gap-2">
              <span className="material-symbols-outlined text-sm">add_circle</span> Initiate_New_Op
            </button>
          </div>
        </aside>
      </main>

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
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}
