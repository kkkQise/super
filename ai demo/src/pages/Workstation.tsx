import React from 'react';
import { Search, Plus, ExternalLink, Grid, Bell, User, MessageCircle, Info } from 'lucide-react';
import { MOCK_APPS } from '../mocks';
import { cn } from '../utils';

export const Workstation: React.FC = () => {
  const tabs = ['全部应用', '客户联系', '效率工具', '内部管理', '上下游管理', '智能办公', '其他'];
  const [activeTab, setActiveTab] = React.useState('全部应用');

  return (
    <div className="min-h-screen bg-[#f3f6f9] text-[#333]">
      {/* 顶部页签栏 */}
      <div className="bg-white border-b border-gray-200 px-6 py-2 flex items-center justify-between sticky top-0 z-10 shadow-sm">
        <div className="flex items-center gap-1 overflow-x-auto no-scrollbar">
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={cn(
                "px-4 py-1.5 rounded-md text-[13px] font-medium transition-colors whitespace-nowrap",
                activeTab === tab ? "bg-[#e5eef9] text-[#2865ad]" : "text-gray-600 hover:bg-gray-100"
              )}
            >
              {tab}
            </button>
          ))}
        </div>
        
        <div className="flex items-center gap-4">
          <div className="relative group flex items-center gap-2 text-gray-400 hover:text-blue-600 transition-colors cursor-pointer">
            <Search size={18} />
            <span className="text-[13px]">搜索</span>
          </div>
          <button className="bg-white border border-gray-200 px-4 py-1.5 rounded-lg flex items-center gap-2 text-[13px] hover:bg-gray-50 transition-colors shadow-sm">
             <span className="text-[#333]">找服务</span>
          </button>
          <button className="bg-[#2865ad] text-white px-4 py-1.5 rounded-lg flex items-center gap-2 text-[13px] hover:bg-blue-700 transition-colors shadow-md">
             <Grid size={16} />
             <span>选应用</span>
          </button>
        </div>
      </div>

      {/* 应用主网格 */}
      <div className="max-w-[1280px] mx-auto p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {MOCK_APPS.map(app => (
            <div 
              key={app.id} 
              className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-all cursor-pointer group flex items-start gap-4"
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-gray-50 group-hover:scale-105 transition-transform overflow-hidden flex-shrink-0">
                <img src={app.icon} alt={app.title} className="w-8 h-8 object-contain" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-[15px] font-bold text-gray-800 truncate">{app.title}</h3>
                  {app.tag && <span className="text-[10px] bg-red-50 text-red-500 px-1.5 rounded uppercase font-bold">{app.tag}</span>}
                </div>
                <p className="text-[12px] text-gray-400 line-clamp-2 leading-relaxed">
                  {app.description || '暂无详细说明...'}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 底部浮动信息或操作（可选） */}
    </div>
  );
};
