import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MessageSquare, Users, ChevronRight, TrendingUp } from 'lucide-react';
import { cn } from '../../utils';

export const CommunityEntryCard: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div 
      onClick={() => navigate('/community')}
      className="bg-white rounded-xl border border-blue-100 p-5 shadow-sm hover:shadow-md hover:border-blue-300 transition-all cursor-pointer group relative overflow-hidden h-[180px] flex flex-col justify-between"
    >
      {/* 背景装饰 */}
      <div className="absolute -right-4 -top-4 w-24 h-24 bg-blue-50 rounded-full opacity-50 group-hover:scale-125 transition-transform" />
      <div className="absolute right-4 top-4 text-blue-100 group-hover:text-blue-200 transition-colors">
         <MessageSquare size={48} />
      </div>

      <div className="relative">
        <div className="flex items-center gap-2 mb-2">
           <div className="px-2 py-0.5 bg-blue-600 text-white text-[10px] font-bold rounded uppercase tracking-wider">BBS</div>
           <div className="flex items-center gap-1 text-[10px] text-orange-500 font-bold">
              <TrendingUp size={10} />
              Hot
           </div>
        </div>
        <h3 className="text-sm font-black text-gray-900 leading-tight mb-2">
          进入全球代购BBS社区<br />
          发现更多物流攻略与心得
        </h3>
        <p className="text-[11px] text-gray-400 line-clamp-2">
          与全球 1,000,000+ 用户实时互动，分享您的开箱喜悦与省钱秘籍...
        </p>
      </div>

      <div className="relative flex items-center justify-between mt-auto pt-4 border-t border-dashed border-gray-100">
         <div className="flex -space-x-2">
            {[1,2,3].map(i => (
              <img 
                key={i}
                src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i+10}`} 
                className="w-5 h-5 rounded-full border-2 border-white"
              />
            ))}
            <div className="w-5 h-5 rounded-full border-2 border-white bg-gray-50 flex items-center justify-center text-[8px] font-bold text-gray-400">
              9k+
            </div>
         </div>
         <div className="flex items-center gap-1 text-xs font-bold text-blue-600 group-hover:gap-2 transition-all">
            立即进入
            <ChevronRight size={14} />
         </div>
      </div>
    </div>
  );
};
