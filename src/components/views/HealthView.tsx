import React from 'react';

export function HealthView() {
  return (
    <div className="text-sky-blue/70">
      <p className="text-success-cyan font-bold mb-4">SYSTEM HEALTH REPORT - OK</p>
      <p className="mb-2">CPU USAGE: 12% [Stable]</p>
      <p className="mb-2">MEMORY: 64TB / 128TB</p>
      <p className="mb-2">STORAGE_ARRAY: 99.9% Integrity</p>
      <p className="mb-2 text-error-magenta">ANOMALY DETECTED: Minor radiation spike in localized sector</p>
    </div>
  );
}
