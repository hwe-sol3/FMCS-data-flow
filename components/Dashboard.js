import React from 'react';
import FlowCanvas from './FlowCanvas.js';

const Dashboard = ({ selectedMenu }) => {
  if (!selectedMenu) {
    return React.createElement(
      'div',
      { className: 'flex-1 flex flex-col items-center justify-center text-slate-400 bg-slate-50' },
      React.createElement(
        'div',
        { className: 'p-10 bg-white rounded-3xl shadow-sm border border-slate-200 text-center max-w-sm' },
        React.createElement(
          'div',
          { className: 'w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6' },
          React.createElement(
            'svg',
            { className: 'w-8 h-8 text-blue-500', fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' },
            React.createElement('path', { strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2, d: 'M9 5l7 7-7 7' })
          )
        ),
        React.createElement('h2', { className: 'text-lg font-bold text-slate-800 mb-2' }, '사이트를 선택하세요'),
        React.createElement('p', { className: 'text-xs text-slate-500' }, '왼쪽 메뉴에서 데이터 흐름도를 확인할 사이트와 시스템을 선택해 주십시오.')
      )
    );
  }

  return React.createElement(
    'main',
    { className: 'flex-1 flex flex-col overflow-hidden p-6' },
    // Content Header
    React.createElement(
      'header',
      { className: 'mb-6' },
      React.createElement(
        'div',
        { className: 'flex items-center gap-2 text-[10px] text-slate-400 mb-1 uppercase tracking-widest font-bold' },
        React.createElement('span', null, 'Sites'),
        React.createElement('span', null, '/'),
        React.createElement('span', { className: 'text-blue-500' }, selectedMenu.siteName)
      ),
      React.createElement(
        'div',
        { className: 'flex items-center justify-between' },
        React.createElement(
          'h1',
          { className: 'text-2xl font-black text-slate-900' },
          `${selectedMenu.siteName} ${selectedMenu.subMenu} 데이터 흐름도`
        ),
        React.createElement(
          'div',
          { className: 'flex gap-2' },
          React.createElement(
            'button',
            { className: 'px-4 py-2 bg-white border border-slate-200 rounded-lg text-xs font-bold text-slate-600 hover:bg-slate-50' },
            '새로고침'
          ),
          React.createElement(
            'button',
            { className: 'px-4 py-2 bg-slate-900 text-white rounded-lg text-xs font-bold hover:bg-slate-800' },
            '내보내기'
          )
        )
      )
    ),
    // Data Flow Visualization Canvas
    React.createElement(FlowCanvas, { selectedMenu }),
    // Status Footer
    React.createElement(
      'footer',
      { className: 'mt-6 grid grid-cols-3 gap-4' },
      ['System Health', 'Flow Rate', 'Efficiency'].map((title, i) => 
        React.createElement(
          'div',
          { key: i, className: 'p-4 bg-white rounded-xl border border-slate-200 shadow-sm' },
          React.createElement('h3', { className: 'text-[10px] font-bold text-slate-400 uppercase mb-1' }, title),
          React.createElement('p', { className: 'text-lg font-black text-slate-800' }, i === 0 ? 'Optimal' : i === 1 ? '450 m³/h' : '94.2%')
        )
      )
    )
  );
};

export default Dashboard;
