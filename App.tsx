import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import { SelectedMenu } from './types';

const App: React.FC = () => {
  const [selectedMenu, setSelectedMenu] = useState<SelectedMenu | null>(null);

  const handleMenuSelect = (menu: SelectedMenu) => {
    setSelectedMenu(menu);
  };

  return (
    <div className="flex h-screen w-full overflow-hidden">
      {/* Sidebar Navigation */}
      <Sidebar 
        selectedMenu={selectedMenu} 
        onSelect={handleMenuSelect} 
      />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top bar (Global) */}
        <header className="h-14 border-b border-slate-200 bg-white flex items-center justify-between px-6 z-10">
          <div className="flex items-center gap-4">
            <button className="md:hidden p-1 rounded hover:bg-slate-100">
              <svg className="w-6 h-6 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <div className="h-6 w-px bg-slate-200 hidden md:block"></div>
            <div className="hidden md:flex items-center gap-2">
              <span className="px-2 py-1 bg-slate-100 rounded text-[10px] font-bold text-slate-500 uppercase">Production</span>
              <span className="text-sm font-medium text-slate-600">Live Environment</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="relative p-2 text-slate-400 hover:text-blue-600 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
            <div className="flex items-center gap-3 pl-4 border-l border-slate-200">
              <div className="text-right hidden sm:block">
                <p className="text-xs font-bold text-slate-800">Admin User</p>
                <p className="text-[10px] text-slate-500">System Administrator</p>
              </div>
              <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs font-bold">
                AD
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard View */}
        <Dashboard selectedMenu={selectedMenu} />
      </div>
    </div>
  );
};

export default App;
