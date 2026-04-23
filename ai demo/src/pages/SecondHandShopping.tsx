import React, { useEffect } from 'react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { Search, Camera, Info, ShieldAlert, ChevronRight, MessageSquare, Heart, Share2, AlertCircle } from 'lucide-react';
import { cn } from '../utils';
import { ASSETS } from '../constants';
import { motion } from 'motion/react';

export const SecondHandShopping: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white pt-[140px]">
      <Header variant="standard" theme="light" />

      {/* 搜索区域 */}
      <section className="bg-white py-12 border-b border-gray-50">
        <div className="max-w-4xl mx-auto px-4">
           {/* 顶部小提示 */}
           <div className="flex justify-end gap-6 mb-4">
              <div className="flex items-center gap-1.5 text-[11px] text-gray-500 cursor-pointer hover:text-blue-600 transition-colors">
                <AlertCircle size={14} className="text-orange-400" />
                <span>代购前需要知道的三件事</span>
              </div>
              <div className="flex items-center gap-1.5 text-[11px] text-gray-500 cursor-pointer hover:text-blue-600 transition-colors">
                <BookOpen size={14} className="text-blue-400" />
                <span>二手商品代购及服务费说明</span>
              </div>
           </div>

           <div className="relative group">
              <div className="bg-black rounded-lg p-0.5 flex items-center shadow-xl group-focus-within:ring-4 group-focus-within:ring-black/5 transition-all">
                <input 
                  type="text" 
                  placeholder="请输入商品链接或关键词" 
                  className="flex-1 bg-white h-12 px-6 rounded-l-[6px] outline-none text-sm"
                />
                <button className="bg-black hover:bg-gray-800 text-white px-8 h-12 rounded-r-[6px] transition-colors">
                  <Search size={20} />
                </button>
              </div>
           </div>
           
           <div className="mt-4 flex items-center gap-4 flex-wrap">
              <span className="text-[12px] text-gray-400">热搜:</span>
              {['女装', '特色服饰', '动漫周边'].map(tag => (
                <span key={tag} className="text-[12px] text-gray-500 cursor-pointer hover:text-blue-600 font-medium">{tag}</span>
              ))}
              <div className="flex-1" />
              <div className="flex items-center gap-4">
                <span className="text-[11px] text-gray-400">SUPERBUY支持中国二手电商平台商品代购:</span>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1">
                    <img src={ASSETS.PLATFORMS.XIANYU} className="w-4 h-4 rounded-full" />
                    <span className="text-[11px] font-bold text-gray-600">闲鱼</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                      <span className="text-[8px] text-white">拍</span>
                    </div>
                    <span className="text-[11px] font-bold text-gray-600">拍拍</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Share2 size={14} className="text-blue-500" />
                    <span className="text-[11px] font-bold text-gray-600">转转</span>
                  </div>
                </div>
              </div>
           </div>
        </div>
      </section>

      {/* 步骤条 */}
      <section className="bg-white py-8 border-b border-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between relative">
            {/* 线条 */}
            <div className="absolute top-1/2 left-0 right-0 h-px bg-gray-100 -translate-y-1/2 -z-0" />
            
            {[
              { id: '1', title: '成为Superbuy会员', sub: '立即注册' },
              { id: '2', title: '第一次付款', sub: '购买二手代购商品或仓库寻宝' },
              { id: '3', title: 'Superbuy验货入库', sub: '' },
              { id: '4', title: '第二次付款', sub: '支付国际运费提交寄存' },
              { id: '5', title: '售后说明', sub: '二手代购仓库等物品商品，不退不换' },
            ].map((step, i) => (
              <div key={i} className="flex flex-col items-center bg-white px-4 relative z-10">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-5 h-5 rounded-full bg-black text-white text-[10px] flex items-center justify-center font-bold">{step.id}</div>
                  <span className="text-[13px] font-black text-gray-800">{step.title}</span>
                </div>
                {step.sub && (
                  <span className={cn(
                    "text-[11px] font-medium max-w-[120px] text-center",
                    step.sub.includes('立即注册') ? "text-blue-500 underline cursor-pointer" : "text-gray-400"
                  )}>
                    {step.sub}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 核心卡片区域 */}
      <main className="max-w-7xl mx-auto px-4 py-12 space-y-20">
        
        {/* 注意事项 & 主广告 */}
        <div className="space-y-6">
          <div className="bg-[#fff9f9] border border-red-50 rounded-2xl p-6 flex items-start gap-12">
            <div className="flex items-center gap-2 shrink-0">
              <ShieldAlert size={20} className="text-red-500" />
              <h3 className="text-lg font-black text-red-500 italic">二手代购注意事项</h3>
            </div>
            <div className="flex-1 grid grid-cols-2 gap-12">
              <div className="flex items-start gap-3">
                 <div className="p-2 bg-white rounded-lg shadow-sm">
                   <Calculator size={18} className="text-gray-400" />
                 </div>
                 <div>
                    <h4 className="text-sm font-black text-gray-800 mb-1">服务费说明</h4>
                    <p className="text-[11px] text-gray-400 leading-relaxed font-medium">二手代购服务费为20元/单，包括仓库质检，并赠送三张精细拍照</p>
                 </div>
              </div>
              <div className="flex items-start gap-3">
                 <div className="p-2 bg-white rounded-lg shadow-sm">
                   <XCircle size={18} className="text-gray-400" />
                 </div>
                 <div>
                    <h4 className="text-sm font-black text-gray-800 mb-1">不支持退换货</h4>
                    <p className="text-[11px] text-gray-400 leading-relaxed font-medium">Superbuy不支持任何形式的退换货服务</p>
                 </div>
              </div>
            </div>
          </div>

          <div className="relative aspect-[4/1.2] rounded-3xl overflow-hidden group cursor-pointer">
             <img 
               src="https://picsum.photos/seed/pitfalls/1200/400" 
               className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" 
             />
             <div className="absolute inset-0 bg-blue-600/40 flex flex-col items-center justify-center p-8 text-center">
                <div className="bg-white/20 backdrop-blur-md px-6 py-1 rounded-full text-white text-xs font-black mb-4 tracking-widest">— 进阶篇 —</div>
                <h2 className="text-5xl font-black text-white px-12 py-4 border-y-4 border-white tracking-widest">二手代购排雷技巧</h2>
             </div>
          </div>
        </div>

        {/* 二手好物 */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-baseline gap-3">
              <h2 className="text-2xl font-black text-gray-800 italic">二手好物</h2>
              <span className="text-sm text-gray-400 font-medium">限制好物 低价捡漏</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="aspect-[2.4/1] rounded-2xl overflow-hidden relative group cursor-pointer shadow-lg hover:shadow-2xl transition-all">
              <img src="https://picsum.photos/seed/acg/800/400" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent p-8 flex flex-col justify-end">
                <h3 className="text-3xl font-black text-white italic drop-shadow-md">二次元<br/>主题特典</h3>
                <p className="text-purple-200 text-sm mt-2 font-bold uppercase tracking-wider">热门IP 限量珍藏</p>
              </div>
            </div>
            <div className="aspect-[2.4/1] rounded-2xl overflow-hidden relative group cursor-pointer shadow-lg hover:shadow-2xl transition-all">
              <img src="https://picsum.photos/seed/hanfu/800/400" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/80 to-transparent p-8 flex flex-col justify-end">
                <h3 className="text-3xl font-black text-white italic drop-shadow-md">特色<br/>文化服饰</h3>
                <p className="text-green-200 text-sm mt-2 font-bold uppercase tracking-wider">Lolita, JK, 旗袍, 汉服</p>
              </div>
            </div>
          </div>
        </section>

        {/* 二手好物研究所 */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-baseline gap-3">
              <h2 className="text-2xl font-black text-gray-800 italic">二手好物研究所</h2>
              <span className="text-sm text-gray-400 font-medium">购物分享</span>
            </div>
          </div>
          
          <div className="grid grid-cols-12 gap-6">
            {/* 左侧大卡片 */}
            <div className="col-span-6 aspect-[4/3] bg-gray-50 rounded-2xl overflow-hidden group cursor-pointer relative shadow-sm hover:shadow-xl transition-all">
              <img src="https://picsum.photos/seed/review1/800/600" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/60 to-transparent">
                 <div className="flex gap-4 text-white/60 text-[10px] font-bold uppercase tracking-widest mb-4">
                    <span>私 藏</span><span>设 计</span><span>潮 潮 穿 搭</span>
                 </div>
                 <h3 className="text-4xl font-black text-white italic mb-4">盛夏的风</h3>
                 <div className="flex items-center gap-2 text-white font-bold group-hover:translate-x-2 transition-transform">
                   查看详情 <ChevronRight size={18} />
                 </div>
              </div>
            </div>

            {/* 右侧网格 */}
            <div className="col-span-6 grid grid-cols-2 gap-6">
               {[
                 { title: '淘二手好物购物分享 ①', sub: '带上儿子一起开箱', img: 'https://picsum.photos/seed/r2/400/300' },
                 { title: '闲鱼 ① 购物分享', sub: 'A kind of toys which bought from the superbuy', img: 'https://picsum.photos/seed/r3/400/300' },
                 { title: '闲鱼 ② 购物分享', sub: '闲鱼购物！和我一起拆快递', img: 'https://picsum.photos/seed/r4/400/300' },
                 { title: '淘二手好物购物分享 ②', sub: '闲鱼购物开箱分享！收到漂洋过海的包裹，激动地拍个小视频', img: 'https://picsum.photos/seed/r5/400/300' },
               ].map((item, i) => (
                 <div key={i} className="flex flex-col group cursor-pointer">
                   <div className="aspect-[1.6/1] rounded-xl overflow-hidden mb-3 shadow-sm group-hover:shadow-lg transition-all">
                     <img src={item.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                   </div>
                   <h4 className="text-[13px] font-black text-gray-800 mb-1 group-hover:text-blue-600 transition-colors">{item.title}</h4>
                   <p className="text-[11px] text-gray-400 line-clamp-1 font-medium">{item.sub}</p>
                 </div>
               ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

// 缺失的图标组件
const BookOpen: React.FC<any> = ({ size, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
  </svg>
);

const Calculator: React.FC<any> = ({ size, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="16" height="20" x="4" y="2" rx="2" />
    <line x1="8" x2="16" y1="6" y2="6" />
    <line x1="16" x2="16" y1="14" y2="18" />
    <path d="M16 10h.01" />
    <path d="M12 10h.01" />
    <path d="M8 10h.01" />
    <path d="M12 14h.01" />
    <path d="M8 14h.01" />
    <path d="M12 18h.01" />
    <path d="M8 18h.01" />
  </svg>
);

const XCircle: React.FC<any> = ({ size, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="10" />
    <path d="m15 9-6 6" />
    <path d="m9 9 6 6" />
  </svg>
);
