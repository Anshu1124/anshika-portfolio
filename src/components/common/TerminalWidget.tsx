import React, { useState } from 'react';
import { Terminal, Copy, Check, Sparkles, Circle } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

export const TerminalWidget: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const copyCommand = () => {
    navigator.clipboard.writeText(`git clone ${PERSONAL_INFO.github}/gatimaan.git`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-xl mx-auto lg:max-w-none bg-[#0B1020]/95 border border-slate-800 rounded-xl shadow-2xl overflow-hidden backdrop-blur-md font-mono text-xs">
      {/* Terminal Title Bar */}
      <div className="bg-[#111827] px-4 py-3 flex items-center justify-between border-b border-slate-800">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
          </div>
          <span className="text-slate-400 text-[11px] ml-2 flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5 text-cyan-400" />
            anshika@engineer-workstation: ~/workspace
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[10px]">
            <Circle className="w-2 h-2 fill-emerald-400 animate-pulse" />
            ONLINE
          </span>
        </div>
      </div>

      {/* Terminal Body */}
      <div className="p-4 sm:p-5 space-y-3.5 text-slate-300">
        {/* Command 1 */}
        <div>
          <div className="flex items-center gap-2 text-cyan-300 font-semibold">
            <span className="text-violet-400">anshika@core</span>
            <span className="text-slate-500">:</span>
            <span className="text-cyan-400">~</span>
            <span className="text-slate-500">$</span>
            <span className="text-slate-100">whoami --verbose</span>
          </div>
          <div className="mt-1 pl-4 border-l border-slate-800 space-y-1 text-slate-400">
            <div>
              <span className="text-slate-500">Candidate:</span>{' '}
              <span className="text-white font-medium">Anshika Agarwal</span>
            </div>
            <div>
              <span className="text-slate-500">Degree:</span>{' '}
              <span className="text-slate-200">B.Tech CSE (2024–2028), Amity University MP</span>
            </div>
            <div>
              <span className="text-slate-500">Role:</span>{' '}
              <span className="text-cyan-300">Amity Coding Club Coordinator</span>
            </div>
            <div>
              <span className="text-slate-500">Major Award:</span>{' '}
              <span className="text-amber-300 font-medium">MUJ HACX 4.0 Winner (1st / ₹70,000)</span>
            </div>
          </div>
        </div>

        {/* Command 2 */}
        <div>
          <div className="flex items-center gap-2 text-cyan-300 font-semibold">
            <span className="text-violet-400">anshika@core</span>
            <span className="text-slate-500">:</span>
            <span className="text-cyan-400">~</span>
            <span className="text-slate-500">$</span>
            <span className="text-slate-100">systemctl status core-competencies</span>
          </div>
          <div className="mt-1 pl-4 border-l border-slate-800 space-y-1 text-slate-400">
            <div className="flex items-center gap-2">
              <span className="text-emerald-400">● Full-Stack Systems:</span>
              <span className="text-slate-300">React, TypeScript, Node.js, Express, PostgreSQL</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-cyan-400">● Geospatial & Realtime:</span>
              <span className="text-slate-300">FastAPI, PostGIS, Leaflet, Socket.IO</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-violet-400">● Hardware & IoT:</span>
              <span className="text-slate-300">Arduino Uno, ESP8266, Motion Sensing, Telemetry</span>
            </div>
          </div>
        </div>

        {/* Command 3: Quick Clone & Target Focus */}
        <div className="bg-[#111827]/80 rounded p-2.5 border border-slate-800/90 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-[11px] text-slate-300">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
            <span>Target: Software Engineering Internships & Applied AI</span>
          </div>

          <button
            type="button"
            onClick={copyCommand}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#0B1020] hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700/80 transition-colors text-[11px]"
            title="Copy git clone command"
          >
            {copied ? (
              <>
                <Check className="w-3 h-3 text-emerald-400" />
                <span className="text-emerald-400">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3 h-3 text-cyan-400" />
                <span>git clone GATIMAAN</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
