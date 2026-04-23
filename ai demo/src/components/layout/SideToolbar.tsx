import React, { useState, useEffect } from 'react';
import { ShoppingCart, Headset, Smartphone, MessageCircle, ShoppingBag, X, ChevronRight, ArrowUp } from 'lucide-react';
import { cn } from '../../utils';

export const SideToolbar: React.FC = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    
    const timer = setInterval(() => setTime(new Date()), 1000);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(timer);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 z-[100] flex flex-col items-center gap-2 pointer-events-none">
      {/* 北京时间 */}
      <div className="bg-white rounded-lg shadow-xl border border-gray-100 p-2 flex flex-col items-center min-w-[80px] pointer-events-auto mb-4 scale-90 origin-right">
        <span className="text-[10px] text-gray-400 font-bold">北京时间</span>
        <span className="text-[10px] text-gray-800 font-black">
          {time.getMonth() + 1}月{time.getDate()}日
        </span>
        <span className="text-xs font-black text-blue-600 tracking-tighter mt-0.5">
          {time.toLocaleTimeString('zh-CN', { hour12: false })}
        </span>
      </div>

      {/* 主导航条 */}
      <div className="bg-white rounded-xl shadow-2xl border border-gray-100 w-11 flex flex-col items-center py-2 pointer-events-auto relative group/toolbar">
        {/* 微信 */}
        <div className="p-3 text-green-500 hover:bg-gray-50 cursor-pointer transition-colors relative group/item">
          <MessageCircle size={20} className="fill-current" />
          <div className="absolute right-full mr-4 top-0 hidden group-hover/item:block">
            <div className="bg-white p-2 rounded-lg shadow-xl border border-gray-100 w-32">
              <img src="https://picsum.photos/seed/qr/200/200" alt="wechat qr" className="w-full aspect-square rounded" />
              <p className="text-[10px] text-center text-gray-500 mt-1">关注Superbuy微信</p>
            </div>
          </div>
        </div>
        
        <div className="w-6 h-px bg-gray-100 mx-auto" />

        {/* APP */}
        <div className="p-3 text-blue-500 hover:bg-gray-50 cursor-pointer transition-colors">
          <Smartphone size={20} />
        </div>

        <div className="w-6 h-px bg-gray-100 mx-auto" />

        {/* 购物车 */}
        <div className="p-3 text-gray-600 hover:bg-gray-50 cursor-pointer transition-colors relative">
          <ShoppingCart size={20} />
          <span className="absolute top-2 right-1.5 bg-red-500 text-white text-[9px] font-bold rounded-full w-4 h-4 flex items-center justify-center border border-white shadow-sm">5</span>
        </div>

        <div className="w-6 h-px bg-gray-100 mx-auto" />

        {/* 客服 */}
        <div className="p-3 text-gray-600 hover:bg-gray-50 cursor-pointer transition-colors">
          <Headset size={20} />
        </div>

        <div className="w-6 h-px bg-gray-100 mx-auto" />

        {/* 购物助手 */}
        <div className="p-3 text-blue-600 hover:bg-gray-50 cursor-pointer transition-colors relative group/assistant">
          <ShoppingBag size={20} className="fill-blue-50" />
          <span className="absolute top-2.5 right-2 text-white font-black text-[8px]">?</span>
          
          {/* 购物助手弹窗 */}
          <div className="absolute right-full mr-4 top-0 hidden group-hover/assistant:block translate-y-[-20%]">
            <div className="bg-white rounded-2xl shadow-2xl border border-gray-50 p-5 min-w-[200px] text-left">
              <h4 className="text-base font-black text-gray-900 mb-4 tracking-tight">购物助手</h4>
              <div className="space-y-4">
                {['运费估算', '国内转运', '物流查询', '购物咨询'].map(item => (
                  <div key={item} className="flex items-center justify-between group/link cursor-pointer">
                    <span className="text-xs font-bold text-gray-500 group-hover/link:text-blue-600 transition-colors">{item}</span>
                    <ChevronRight size={14} className="text-gray-300 group-hover/link:text-blue-600 group-hover/link:translate-x-1 transition-all" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="w-6 h-px bg-gray-100 mx-auto" />

        {/* 关闭按钮 (原图中有一个X) */}
        <div className="p-3 text-gray-400 hover:text-gray-600 cursor-pointer transition-colors">
          <X size={20} />
        </div>
      </div>

      {/* 回到顶部 - 仅当下滚时显示 */}
      <div 
        onClick={scrollToTop}
        className={cn(
          "w-11 h-11 bg-white rounded-xl shadow-lg border border-gray-100 flex items-center justify-center text-gray-500 hover:bg-blue-600 hover:text-white transition-all cursor-pointer pointer-events-auto",
          showBackToTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 scale-90 pointer-events-none"
        )}
      >
        <ArrowUp size={20} />
      </div>

      {/* 在线客服吉祥物 */}
      <div className="relative mt-4 pointer-events-auto group cursor-pointer">
        <img 
          src="https://img.superbuy.com/img/front/common/customer-service.png" 
          alt="mascot" 
          className="w-16 h-16 object-contain -mb-1 animate-bounce duration-3000"
          style={{ animationDuration: '3s' }}
          onError={(e) => {
             e.currentTarget.src = "https://picsum.photos/seed/mascot/100/100";
          }}
        />
        <div className="bg-yellow-400 text-gray-900 px-3 py-1.5 rounded-lg text-xs font-black shadow-lg hover:bg-yellow-300 transition-colors text-nowrap">
          在线客服
        </div>
      </div>
    </div>
  );
};
