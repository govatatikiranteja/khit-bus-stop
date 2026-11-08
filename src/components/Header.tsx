import React from 'react';
import { Bus, MapPin } from 'lucide-react';

interface HeaderProps {
  onResetSearch?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onResetSearch }) => {
  return (
    <header className="sticky top-0 z-40 bg-white border-b border-gray-200 shadow-sm">
      {/* Top Affiliation Bar */}
      <div className="bg-[#660f27] text-white text-xs py-1.5 px-4 hidden sm:block border-b border-[#550c1f]">
        <div className="max-w-5xl mx-auto flex justify-between items-center text-[11px] font-medium text-white/90">
          <div className="flex items-center gap-2">
            <span className="font-bold text-[#F0A000]">KHIT</span>
            <span>·</span>
            <span>Approved by AICTE</span>
            <span>·</span>
            <span>Accredited by NAAC 'A' Grade</span>
            <span>·</span>
            <span>Affiliated to JNTUK</span>
            <span>·</span>
            <span>NH-16, Chowdavaram, Guntur</span>
          </div>
          <div className="text-white/80">
            Autonomous Institution
          </div>
        </div>
      </div>

      {/* Main Maroon Header Branding Bar */}
      <div className="bg-[#851735] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          {/* Logo & College Title */}
          <button 
            onClick={onResetSearch}
            className="flex items-center gap-3.5 text-left focus:outline-none group"
            aria-label="KHIT Bus Stop Home"
          >
            {/* College Crest */}
            <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center p-1 shadow-md border-2 border-[#F0A000] group-hover:scale-105 transition-transform">
              <div className="w-full h-full rounded bg-[#851735] flex flex-col items-center justify-center text-white">
                <span className="text-[10px] font-black tracking-wider text-[#F0A000]">KHIT</span>
                <Bus className="w-5 h-5 text-[#F0A000]" />
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-white leading-tight font-serif">
                  KHIT BUS STOP
                </h1>
                <span className="bg-[#F0A000] text-[#550c1f] text-[10px] font-extrabold uppercase px-2 py-0.5 rounded font-sans tracking-wide">
                  Official Portal
                </span>
              </div>
              <p className="text-xs text-yellow-200/90 font-medium tracking-normal">
                Kallam Haranadhareddy Institute of Technology · Transport Cell
              </p>
            </div>
          </button>

          {/* Right badge */}
          <div className="hidden sm:flex items-center gap-1.5 text-xs text-yellow-300 bg-[#660f27] px-3 py-1.5 rounded border border-white/10 font-medium">
            <MapPin className="w-3.5 h-3.5 text-[#F0A000]" />
            <span>Bus Stop Schedule Lookup</span>
          </div>
        </div>
      </div>
    </header>
  );
};
