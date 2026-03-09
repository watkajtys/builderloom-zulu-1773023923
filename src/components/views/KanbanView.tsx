import React from 'react';

export function KanbanView() {
  return (
    <div className="text-sky-blue/70">
      <p className="text-neon-pink font-bold mb-4">ACTIVE OPERATIONS BACKLOG</p>
      <ul className="list-disc pl-5">
        <li className="mb-2">TODO: Calibrate long-range sensors</li>
        <li className="mb-2">IN PROGRESS: Dark matter harvesting (Sector-9)</li>
        <li className="mb-2 text-success-cyan">DONE: Handshake protocol update</li>
      </ul>
    </div>
  );
}
