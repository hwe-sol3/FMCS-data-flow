import React, { useState } from 'react';
import Sidebar from './components/Sidebar.js';
import Dashboard from './components/Dashboard.js';

const App = () => {
  const [selectedMenu, setSelectedMenu] = useState(null);

  const handleMenuSelect = (menu) => {
    setSelectedMenu(menu);
  };

  return React.createElement(
    'div',
    { className: 'flex h-screen w-full overflow-hidden bg-slate-50' },
    React.createElement(Sidebar, { selectedMenu, onSelect: handleMenuSelect }),
    React.createElement(
      'div',
      { className: 'flex-1 flex flex-col overflow-hidden' },
      // Top Navigation Bar
      React.createElement(
        'header',
        { className: 'h-14 border-b border-slate-200 bg-white flex items-center justify-between px-6 z-10' },
        React.createElement(
          'div',
          { className: 'flex items-center gap-4' },
          React.createElement('div', { className: 'h-6 w-px bg-slate-200 hidden md:block' }),
          React.createElement(
            'div',
            { className: 'hidden md:flex items-center gap-2' },
            React.createElement('span', { className: 'px-2 py-1 bg-slate-100 rounded text-[10px] font-bold text-slate-500 uppercase' }, 'Operation'),
            React.createElement('span', { className: 'text-sm font-medium text-slate-600' }, 'Monitoring Mode')
          )
        ),
        React.createElement(
          'div',
          { className: 'flex items-center gap-3' },
          React.createElement(
            'div',
            { className: 'text-right hidden sm:block' },
            React.createElement('p', { className: 'text-xs font-bold text-slate-800' }, '관리자'),
            React.createElement('p', { className: 'text-[10px] text-slate-500' }, 'System Engineer')
          ),
          React.createElement(
            'div',
            { className: 'w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-white text-xs font-bold' },
            'AD'
          )
        )
      ),
      // Dashboard Content
      React.createElement(Dashboard, { selectedMenu })
    )
  );
};

export default App;
