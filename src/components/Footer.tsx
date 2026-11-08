import React from 'react';
import { Bus } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#550c1f] text-white border-t-4 border-[#F0A000] mt-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          
          <div className="space-y-1">
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <Bus className="w-5 h-5 text-[#F0A000]" />
              <h3 className="font-serif font-bold text-base text-white tracking-wide">
                KHIT BUS STOP
              </h3>
            </div>
            <p className="text-xs text-white/80">
              Kallam Haranadhareddy Institute of Technology · NH-16, Chowdavaram, Guntur – 522019, Andhra Pradesh
            </p>
            <p className="text-[11px] text-yellow-300">
              Official Bus Schedule (First Shift & Second Shift)
            </p>
          </div>

          <div className="text-xs text-white/80 space-y-1 sm:text-right">
            <p className="text-white/70 text-[11px]">
              Autonomous Institution · Accredited by NAAC 'A' Grade
            </p>
            <p className="text-white/60 text-[11px]">
              © {new Date().getFullYear()} KHIT College of Engineering. All rights reserved.
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
};
