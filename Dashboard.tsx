import React from 'react';
import { SelectedMenu } from '../types';
import FlowCanvas from './FlowCanvas';

interface DashboardProps {
  selectedMenu: SelectedMenu | null;
}

const Dashboard: React.FC<DashboardProps> = ({ selectedMenu }) => {
  if (!selectedMenu) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center text-slate-400 bg-slate-50">
        <div className="p-8 bg-white rounded-2xl shadow-sm border border-slate-200 text-center max-w-md">
          <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2 className="text-xl font-bold text-slate-800 mb-2">데이터 흐름도 확인</h2>
          <p className="text-sm">왼쪽 메뉴에서 사이트와 시스템(UPW/WWT)을 선택하여 상세 흐름도를 확인하십시오.</p>
        </div>
      </div>
    );
  }

  return (
    <main className="flex-1 flex flex-col overflow-hidden bg-slate-50 p-6">
      {/* Header Info */}
      <header className="mb-6 flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2 text-xs text-slate-400 mb-1">
            <span>Sites</span>
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="font-medium text-slate-500">{selectedMenu.siteName}</span>
          </div>
          <h1 className="text-2xl font-bold text-slate-800 flex items-center gap-3">
            {selectedMenu.subMenu} System Data Flow
            <span className="px-2 py-0.5 rounded bg-blue-100 text-blue-700 text-[10px] font-bold uppercase tracking-wider">
              Live Data
            </span>
          </h1>
        </div>
        
        <div className="flex gap-3">
          <div className="px-4 py-2 bg-white rounded-lg border border-slate-200 shadow-sm flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-xs font-medium text-slate-600">PLC Connection: Stable</span>
          </div>
          <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-sm text-sm font-medium transition-all">
            Export Report
          </button>
        </div>
      </header>

      {/* Main Flow Area */}
      <FlowCanvas selectedMenu={selectedMenu} />

      {/* Footer Info Area */}
      <footer className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm">
          <h3 className="text-xs font-bold text-slate-400 uppercase mb-2">Process Health</h3>
          <div className="flex items-center justify-between">
            <span className="text-lg font-bold text-slate-700">98.2%</span>
            <span className="text-xs text-green-500 font-medium">+0.4%</span>
          </div>
        </div>
        <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm">
          <h3 className="text-xs font-bold text-slate-400 uppercase mb-2">Active Alarms</h3>
          <div className="flex items-center justify-between">
            <span className="text-lg font-bold text-slate-700">0</span>
            <span className="text-xs text-slate-400 font-medium">Clear</span>
          </div>
        </div>
        <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm">
          <h3 className="text-xs font-bold text-slate-400 uppercase mb-2">Update Interval</h3>
          <div className="flex items-center justify-between">
            <span className="text-lg font-bold text-slate-700">5s</span>
            <span className="text-xs text-blue-500 font-medium">Standard</span>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Dashboard;
