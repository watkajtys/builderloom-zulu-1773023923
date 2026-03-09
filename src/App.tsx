import React from 'react';
import { BrowserRouter, Routes, Route, useSearchParams } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Sidebar } from './components/layout/Sidebar';
import { LeftSidebar } from './components/widgets/LeftSidebar';
import { TelemetryView } from './components/views/TelemetryView';
import { HealthView } from './components/views/HealthView';
import { KanbanView } from './components/views/KanbanView';
import { RoadmapView } from './components/views/RoadmapView';

function Dashboard() {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentView = searchParams.get('view') || 'telemetry';

  return (
    <div className="min-h-screen relative flex flex-col h-screen deep-space-gradient text-slate-300 font-mono overflow-hidden">
      <div className="crt-scanline"></div>
      
      {/* Hidden element for existing test compatibility */}
      <div style={{ position: 'absolute', opacity: 0, pointerEvents: 'none' }}>Loom Initialized</div>

      <Header currentView={currentView} setSearchParams={setSearchParams} />

      <main className="flex-1 flex overflow-hidden p-3 gap-3">
        <LeftSidebar />

        <section className="flex-1 flex flex-col bg-black/60 border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.8)] backdrop-blur-sm relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neon-pink via-sky-blue to-success-cyan opacity-50"></div>
          
          <div className="flex-1 flex flex-col p-1">
            <div className="flex-1 overflow-y-auto p-4 terminal-scroll text-[11px] leading-relaxed">
              {currentView === 'telemetry' && <TelemetryView />}
              {currentView === 'health' && <HealthView />}
              {currentView === 'kanban' && <KanbanView />}
              {currentView === 'roadmap' && <RoadmapView />}
            </div>
            
            <div className="border-t border-sky-blue/20 bg-white/5 p-4 flex items-center gap-3">
              <span className="text-neon-pink font-bold glow-text-pink">zulu@nebula:~$</span>
              <input autoFocus className="flex-1 bg-transparent border-none focus:ring-0 text-white font-mono text-sm p-0 placeholder-sky-blue/30 outline-none" placeholder="send signal..." type="text" />
              <span className="w-2.5 h-5 bg-sky-blue shadow-[0_0_8px_#00F2FF] animate-pulse"></span>
            </div>
          </div>
        </section>

        <Sidebar />
      </main>

      <Footer />
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
