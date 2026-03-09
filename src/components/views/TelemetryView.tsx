import React from 'react';

export function TelemetryView() {
  return (
    <>
      <div className="mb-4 pb-2 border-b border-white/5 flex justify-between items-end">
        <div>
          <h2 className="text-white text-lg font-bold">LIVE TELEMETRY</h2>
          <p className="text-sky-blue/70 text-xs">Streaming terminal output from core subroutines</p>
        </div>
        <span className="text-[10px] bg-success-cyan/10 text-success-cyan px-2 py-1 rounded-sm border border-success-cyan/20">STATUS: GREEN</span>
      </div>
      <div className="mb-1.5"><span className="text-slate-600">14:42:01</span> <span className="text-sky-blue">SYS</span> Initialization sequence complete.</div>
      <div className="mb-1.5"><span className="text-slate-600">14:42:02</span> <span className="text-success-cyan">NET</span> Connection to Quantum Node established (0ms ping)</div>
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
  );
}
