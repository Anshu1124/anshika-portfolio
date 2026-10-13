import React, { useState } from 'react';
import { Layers, ArrowRight, Database, Server, Smartphone, Cpu, ShieldCheck } from 'lucide-react';
import type { ArchitectureLayer } from '../../types/portfolio';

interface ArchitectureDiagramProps {
  type: 'gatimaan-queue' | 'sentinel-spatial' | 'iot-telemetry' | 'safety-network';
  layers: ArchitectureLayer[];
  flowSteps: string[];
}

export const ArchitectureDiagram: React.FC<ArchitectureDiagramProps> = ({
  type,
  layers,
  flowSteps,
}) => {
  const [selectedLayerIndex, setSelectedLayerIndex] = useState<number>(0);
  const activeLayer = layers[selectedLayerIndex] || layers[0];

  const typeLabels: Record<string, string> = {
    'gatimaan-queue': 'Queue Orchestrator',
    'sentinel-spatial': 'Spatial Analytics Engine',
    'iot-telemetry': 'IoT Hardware Telemetry',
    'safety-network': 'Spatial Safety Network',
  };

  return (
    <div className="w-full bg-[#141720] border border-[#292D36] rounded-xl p-6 overflow-hidden">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#292D36] gap-3">
        <div className="flex items-center gap-2.5">
          <Layers className="w-4 h-4 text-[#B9A0FF]" />
          <h4 className="font-heading text-xs uppercase tracking-wider font-bold text-[#F5F5F7]">
            System Architecture & Data Flow
          </h4>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#0B0D12] text-[#B9A0FF] border border-[#292D36]">
            {typeLabels[type] || type}
          </span>
        </div>
        <div className="flex items-center gap-2 text-xs font-mono text-[#A5A8B2]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#B9A0FF]"></span>
          <span>Select any layer to inspect details</span>
        </div>
      </div>

      {/* Visual System Pipeline Flow */}
      <div className="my-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
          {layers.map((layer, idx) => {
            const isSelected = selectedLayerIndex === idx;
            return (
              <button
                key={layer.name}
                type="button"
                onClick={() => setSelectedLayerIndex(idx)}
                className={`relative text-left p-4 rounded-lg border transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[#B9A0FF] ${
                  isSelected
                    ? 'bg-[#141720] border-[#B9A0FF] ring-1 ring-[#B9A0FF]/40 text-[#F5F5F7]'
                    : 'bg-[#0B0D12] border-[#292D36] hover:border-[#292D36]/80 text-[#A5A8B2]'
                }`}
              >
                {/* Step indicator */}
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`font-mono text-[10px] px-2 py-0.5 rounded font-medium ${
                      isSelected
                        ? 'bg-[#0B0D12] text-[#B9A0FF] border border-[#B9A0FF]/40'
                        : 'bg-[#141720] text-[#A5A8B2] border border-[#292D36]'
                    }`}
                  >
                    0{idx + 1} LAYER
                  </span>
                  {idx === 0 && <Smartphone className={`w-3.5 h-3.5 ${isSelected ? 'text-[#B9A0FF]' : 'text-[#A5A8B2]'}`} />}
                  {idx === 1 && <Server className={`w-3.5 h-3.5 ${isSelected ? 'text-[#B9A0FF]' : 'text-[#A5A8B2]'}`} />}
                  {idx === 2 && <Database className={`w-3.5 h-3.5 ${isSelected ? 'text-[#B9A0FF]' : 'text-[#A5A8B2]'}`} />}
                  {idx >= 3 && <Cpu className={`w-3.5 h-3.5 ${isSelected ? 'text-[#B9A0FF]' : 'text-[#A5A8B2]'}`} />}
                </div>

                <div className={`font-semibold text-xs sm:text-sm mb-1 line-clamp-1 ${isSelected ? 'text-[#F5F5F7]' : 'text-[#A5A8B2]'}`}>
                  {layer.name}
                </div>
                <div className="text-[11px] text-[#A5A8B2] line-clamp-2 leading-relaxed">
                  {layer.badge}
                </div>

                {/* Connecting arrow indicator for desktop */}
                {idx < layers.length - 1 && (
                  <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-[#292D36] pointer-events-none">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Layer Detail Inspector */}
      {activeLayer && (
        <div className="bg-[#0B0D12] rounded-lg border border-[#292D36] p-5 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#292D36] pb-3">
            <div>
              <div className="text-xs font-mono text-[#B9A0FF] uppercase tracking-wider">
                Layer {selectedLayerIndex + 1} Specifications
              </div>
              <h5 className="font-heading text-sm sm:text-base font-bold text-[#F5F5F7]">
                {activeLayer.name}
              </h5>
            </div>
            <div className="text-xs font-mono text-[#A5A8B2]">
              {activeLayer.badge}
            </div>
          </div>

          <p className="text-xs sm:text-sm text-[#A5A8B2] leading-relaxed">
            {activeLayer.description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-[#A5A8B2] mb-2">
                Core Technologies
              </div>
              <div className="flex flex-wrap gap-1.5">
                {activeLayer.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded bg-[#141720] border border-[#292D36] text-xs font-mono text-[#F5F5F7]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-[#A5A8B2] mb-2">
                Implementation Details
              </div>
              <ul className="space-y-1.5">
                {activeLayer.keyDetails.map((detail, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-[#A5A8B2]">
                    <span className="text-[#B9A0FF] font-mono">›</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* Execution / Data Flow Timeline */}
      {flowSteps && flowSteps.length > 0 && (
        <div className="mt-5 pt-4 border-t border-[#292D36]">
          <div className="flex items-center gap-2 mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-[#B9A0FF]" />
            <span className="text-xs font-mono uppercase tracking-wider text-[#A5A8B2] font-semibold">
              Data Pipeline Execution Sequence
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2.5">
            {flowSteps.map((step, idx) => (
              <div
                key={idx}
                className="bg-[#0B0D12] border border-[#292D36] rounded-md p-3 text-xs leading-relaxed flex flex-col justify-between"
              >
                <div className="font-mono text-[10px] text-[#B9A0FF] font-semibold mb-1">
                  STEP 0{idx + 1}
                </div>
                <div className="text-[#A5A8B2] text-[11px] leading-relaxed">{step}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
