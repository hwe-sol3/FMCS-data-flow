import React, { useState } from 'react';
import { SITES } from '../constants';
import { SelectedMenu, Site, SubMenuType } from '../types';

interface SidebarProps {
  selectedMenu: SelectedMenu | null;
  onSelect: (menu: SelectedMenu) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ selectedMenu, onSelect }) => {
  const [expandedSites, setExpandedSites] = useState<Record<string, boolean>>({
    'cheonan': true, // Default expanded
  });

  const toggleSite = (siteId: string) => {
    setExpandedSites(prev => ({
      ...prev,
      [siteId]: !prev[siteId]
    }));
  };

  return (
    <aside className="w-64 bg-slate-900 text-slate-300 flex flex-col h-full border-r border-slate-800 shadow-xl overflow-y-auto">
      <div className="p-6 border-b border-slate-800">
        <h1 className="text-xl font-bold text-white flex items-center gap-2">
          <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
          FMCS Manager
        </h1>
        <p className="text-xs text-slate-500 mt-1 uppercase tracking-wider font-semibold">Monitoring System</p>
      </div>

      <nav className="flex-1 py-4">
        {SITES.map((site) => (
          <div key={site.id} className="mb-2">
            <button
              onClick={() => toggleSite(site.id)}
              className="w-full px-6 py-2 flex items-center justify-between hover:bg-slate-800 transition-colors group"
            >
              <div className="flex items-center gap-3">
                <span className="text-slate-500 group-hover:text-blue-400">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </span>
                <span className={`text-sm font-medium ${expandedSites[site.id] ? 'text-white' : 'text-slate-400'}`}>
                  {site.name}
                </span>
              </div>
              <svg 
                className={`w-3 h-3 transition-transform duration-200 ${expandedSites[site.id] ? 'rotate-180' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {expandedSites[site.id] && (
              <div className="ml-10 mt-1 space-y-1">
                {site.subMenus.map((subMenu) => {
                  const isActive = selectedMenu?.siteId === site.id && selectedMenu?.subMenu === subMenu;
                  return (
                    <button
                      key={`${site.id}-${subMenu}`}
                      onClick={() => onSelect({ siteId: site.id, siteName: site.name, subMenu })}
                      className={`w-full text-left px-4 py-1.5 text-xs font-medium rounded-l-md transition-all ${
                        isActive 
                          ? 'bg-blue-600/20 text-blue-400 border-l-2 border-blue-500' 
                          : 'text-slate-500 hover:text-slate-200 hover:bg-slate-800'
                      }`}
                    >
                      {subMenu}
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        ))}
      </nav>

      <div className="p-4 border-t border-slate-800 text-[10px] text-slate-500">
        © 2024 FMCS Intelligence Corp.
      </div>
    </aside>
  );
};

export default Sidebar;
