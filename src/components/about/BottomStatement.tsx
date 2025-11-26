import React from 'react';

interface BottomStatementProps {
  isVisible: boolean;
}

export function BottomStatement({ isVisible }: BottomStatementProps) {
  return (
    <div className={`text-center mt-20 transform transition-all duration-1000 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
      <div className="inline-flex items-center gap-6 px-8 py-6 bg-slate-50 rounded-2xl hover:bg-slate-100 transition-all duration-300 group cursor-pointer">
        <div className="w-12 h-12 bg-gradient-to-r from-slate-700 to-slate-800 rounded-xl flex items-center justify-center text-white font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
          DC
        </div>
        <div className="text-left">
          <div className="text-lg font-semibold text-slate-900">
            Ready to transform your vision?
          </div>
          <div className="text-slate-600 text-sm">
            Let&apos;s build something extraordinary together
          </div>
        </div>
      </div>
    </div>
  );
}