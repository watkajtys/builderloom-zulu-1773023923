import React from 'react';

export function Sidebar() {
  return (
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
  );
}
