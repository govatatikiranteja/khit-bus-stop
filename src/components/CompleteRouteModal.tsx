import React from 'react';
import { 
  X, 
  Clock, 
  MapPin, 
  Bus, 
  CheckCircle2, 
  AlertTriangle, 
  Printer, 
  Navigation,
  FileText
} from 'lucide-react';
import { BusRouteRecord } from '../data/busRoutes';

interface CompleteRouteModalProps {
  route: BusRouteRecord | null;
  searchedStopQuery: string;
  onSelectStopName?: (stopName: string) => void;
  onClose: () => void;
}

export const CompleteRouteModal: React.FC<CompleteRouteModalProps> = ({
  route,
  searchedStopQuery,
  onSelectStopName,
  onClose
}) => {
  if (!route) return null;

  const handlePrint = () => {
    window.print();
  };

  const normalizedSearch = searchedStopQuery.trim().toLowerCase();

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-black/60 flex items-center justify-center p-3 sm:p-6 backdrop-blur-xs"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-lg shadow-2xl max-w-2xl w-full max-h-[92vh] flex flex-col overflow-hidden border-2 border-[#851735]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-[#851735] text-white p-4 sm:p-5 flex items-start justify-between border-b-4 border-[#F0A000]">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="bg-[#F0A000] text-[#550c1f] text-xs font-black uppercase px-2.5 py-0.5 rounded tracking-wider">
                {route.busNumberLabel || `Bus ${route.busNumber}`}
              </span>
              <span className={`text-xs font-bold px-2 py-0.5 rounded ${
                route.shift === 'First Shift' 
                  ? 'bg-blue-900/60 text-blue-200 border border-blue-400/30' 
                  : 'bg-amber-900/60 text-amber-200 border border-amber-400/30'
              }`}>
                {route.shift}
              </span>
              <span className="text-white/60 text-xs hidden sm:inline">·</span>
              <span className="text-white/80 text-xs hidden sm:inline">
                {route.stops.length} Scheduled Stops
              </span>
            </div>

            <h2 className="text-lg sm:text-xl font-bold font-serif text-white tracking-wide">
              {route.startingPoint} ➔ {route.destination}
            </h2>

            <p className="text-xs text-yellow-100/90 flex items-center gap-1.5 pt-0.5">
              <FileText className="w-3.5 h-3.5 text-[#F0A000] shrink-0" />
              <span>Extracted from Official PDF Schedule (Page {route.pdfPage})</span>
            </p>
          </div>

          <div className="flex items-center gap-1">
            <button
              onClick={handlePrint}
              className="p-2 text-white/80 hover:text-white hover:bg-[#660f27] rounded transition-colors"
              title="Print Complete Route"
              aria-label="Print Route"
            >
              <Printer className="w-5 h-5 text-yellow-300" />
            </button>
            <button
              onClick={onClose}
              className="p-2 text-white/80 hover:text-white hover:bg-[#660f27] rounded transition-colors"
              title="Close modal"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Reporting Metric */}
        <div className="bg-[#fbf1f3] px-5 py-2.5 border-b border-gray-200 flex flex-wrap items-center justify-between text-xs text-gray-700">
          <div className="flex items-center gap-2">
            <span className="text-gray-500">Scheduled College Arrival Time:</span>
            <strong className="text-[#851735] font-bold text-sm">{route.collegeArrivalTime}</strong>
          </div>
          <span className="text-gray-500 text-[11px]">
            Original stop sequence from document
          </span>
        </div>

        {/* Complete Route Stops in Original Order (Vertical Timeline) */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          <div className="flex items-center justify-between text-xs text-gray-800 uppercase tracking-wider mb-2">
            <span className="font-bold">Complete Route Timeline ({route.stops.length} Stops)</span>
            <span className="text-[11px] text-gray-500 normal-case">Click any stop to find matching buses</span>
          </div>

          <div className="relative pl-6 space-y-4 before:absolute before:left-3 before:top-2 before:bottom-2 before:w-0.5 before:bg-[#851735]/25">
            {route.stops.map((stop, index) => {
              const isFirst = index === 0;
              const isLast = index === route.stops.length - 1;
              const isMatchedStop =
                normalizedSearch && stop.stopName.toLowerCase().includes(normalizedSearch);

              return (
                <div key={`${route.id}-${stop.order}-${stop.stopName}`} className="relative text-left">
                  {/* Timeline Badge */}
                  <div
                    className={`absolute -left-6 top-1.5 w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-black border-2 transition-all ${
                      isMatchedStop
                        ? 'bg-[#F0A000] border-[#851735] text-[#550c1f] ring-4 ring-[#F0A000]/30 scale-110 shadow-md'
                        : isLast
                        ? 'bg-[#851735] border-white text-white'
                        : isFirst
                        ? 'bg-[#660f27] border-yellow-400 text-yellow-300'
                        : 'bg-white border-[#851735] text-[#851735]'
                    }`}
                  >
                    {isLast ? '★' : stop.order}
                  </div>

                  {/* Stop Information Card */}
                  <div
                    onClick={() => {
                      if (onSelectStopName && !isLast) {
                        onSelectStopName(stop.stopName);
                        onClose();
                      }
                    }}
                    className={`p-3 rounded-lg border transition-all ${
                      !isLast ? 'cursor-pointer hover:border-[#851735]' : ''
                    } ${
                      isMatchedStop
                        ? 'bg-[#fffaf0] border-[#F0A000] shadow-sm ring-2 ring-[#F0A000]/40'
                        : isLast
                        ? 'bg-gray-50 border-gray-300 font-semibold'
                        : 'bg-white border-gray-200'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="font-bold text-sm text-gray-900">
                            {stop.stopName}
                          </h4>
                          {isMatchedStop && (
                            <span className="bg-[#851735] text-white text-[10px] font-bold px-1.5 py-0.2 rounded uppercase">
                              Searched Stop
                            </span>
                          )}
                          {isFirst && (
                            <span className="bg-gray-100 text-gray-700 text-[10px] font-bold px-1.5 py-0.2 rounded uppercase">
                              Start
                            </span>
                          )}
                          {isLast && (
                            <span className="bg-[#851735] text-white text-[10px] font-bold px-1.5 py-0.2 rounded uppercase">
                              College Arrival
                            </span>
                          )}
                        </div>

                        {stop.requiresVerification && (
                          <div className="flex items-center gap-1 text-[11px] text-amber-700 mt-0.5">
                            <AlertTriangle className="w-3 h-3 text-amber-600 shrink-0" />
                            <span>Entry flagged for manual verification from PDF print</span>
                          </div>
                        )}
                      </div>

                      {/* Exact Arrival Time */}
                      <div className="bg-[#fbf1f3] px-2.5 py-1 rounded border border-[#851735]/20 shrink-0 text-right">
                        <span className="text-[10px] text-gray-500 block leading-none">Arrival Time</span>
                        <strong className="text-sm font-bold text-[#851735] flex items-center gap-1 mt-0.5">
                          <Clock className="w-3.5 h-3.5 text-[#F0A000]" />
                          <span>{stop.arrivalTime}</span>
                        </strong>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="bg-gray-100 px-5 py-3 border-t border-gray-200 flex items-center justify-between text-xs">
          <span className="text-gray-600">
            {route.busNumberLabel || `Bus ${route.busNumber}`} · {route.shift} · KHIT Campus
          </span>
          <button
            onClick={onClose}
            className="bg-[#851735] hover:bg-[#660f27] text-white font-bold px-5 py-2 rounded text-xs transition-colors"
          >
            Close Route View
          </button>
        </div>
      </div>
    </div>
  );
};
