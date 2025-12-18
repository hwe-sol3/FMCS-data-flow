import React, { useState } from 'react';
import { SITES } from '../constants.js';

const Sidebar = ({ selectedMenu, onSelect }) => {
  const [expandedSites, setExpandedSites] = useState({
    'cheonan': true,
  });

  const toggleSite = (siteId) => {
    setExpandedSites(prev => ({
      ...prev,
      [siteId]: !prev[siteId]
    }));
  };

  return React.createElement(
    'aside',
    { className: 'w-64 bg-slate-900 text-slate-300 flex flex-col h-full border-r border-slate-800 shadow-xl overflow-y-auto' },
    // Sidebar Header
    React.createElement(
      'div',
      { className: 'p-6 border-b border-slate-800' },
      React.createElement(
        'h1',
        { className: 'text-xl font-bold text-white flex items-center gap-2' },
        'FMCS Dashboard'
      ),
      React.createElement('p', { className: 'text-[10px] text-slate-500 mt-1 uppercase tracking-widest' }, 'Data Flow Visualization')
    ),
    // Navigation
    React.createElement(
      'nav',
      { className: 'flex-1 py-4' },
      SITES.map((site) => 
        React.createElement(
          'div',
          { key: site.id, className: 'mb-1' },
          React.createElement(
            'button',
            {
              onClick: () => toggleSite(site.id),
              className: 'w-full px-6 py-3 flex items-center justify-between hover:bg-slate-800 transition-colors group'
            },
            React.createElement(
              'span',
              { className: `text-sm font-medium transition-colors ${expandedSites[site.id] ? 'text-white' : 'text-slate-400'}` },
              site.name
            ),
            React.createElement(
              'svg',
              { 
                className: `w-3 h-3 transition-transform duration-200 ${expandedSites[site.id] ? 'rotate-180' : ''}`,
                fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24'
              },
              React.createElement('path', { strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2, d: 'M19 9l-7 7-7-7' })
            )
          ),
          expandedSites[site.id] && React.createElement(
            'div',
            { className: 'ml-8 mt-1 space-y-1' },
            site.subMenus.map((subMenu) => {
              const isActive = selectedMenu?.siteId === site.id && selectedMenu?.subMenu === subMenu;
              return React.createElement(
                'button',
                {
                  key: `${site.id}-${subMenu}`,
                  onClick: () => onSelect({ siteId: site.id, siteName: site.name, subMenu }),
                  className: `w-full text-left px-4 py-2 text-xs font-medium rounded-l-md transition-all ${
                    isActive 
                      ? 'bg-blue-600/20 text-blue-400 border-l-2 border-blue-500' 
                      : 'text-slate-500 hover:text-slate-200 hover:bg-slate-800'
                  }`
                },
                subMenu
              );
            })
          )
        )
      )
    ),
    // Sidebar Footer
    React.createElement(
      'div',
      { className: 'p-4 border-t border-slate-800 text-[10px] text-slate-500 text-center' },
      '© 2024 FMCS System'
    )
  );
};

export default Sidebar;
