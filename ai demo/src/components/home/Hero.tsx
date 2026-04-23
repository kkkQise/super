import React from 'react';
import { Search, Camera, Globe, Calculator, ShieldCheck, Box, ChevronDown, Image as ImageIcon, ExternalLink, MessageCircle, Info, Heart } from 'lucide-react';
import { Header } from '../layout/Header';
import { ASSETS } from '../../constants';
import { useNavigate } from 'react-router-dom';

export const Hero: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section 
      className="relative pt-32 pb-24 text-white overflow-hidden"
      style={{ 
        backgroundColor: '#2865ad',
        height: '725px'
      }}
    >
      {/* 渐变背景 - 保持视觉层次感但调整色值 */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#2865ad] via-[#2462c4] to-[#3b82f6] -z-10" />
      
      {/* 集成 Header */}
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 text-center mt-12">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 drop-shadow-lg">
          为您购买&寄送任何中国商品
        </h1>
        <div className="flex justify-center flex-wrap gap-x-8 gap-y-2 text-lg font-medium opacity-90 mb-12">
          <span>• 13年极致服务</span>
          <span>• 腾讯联合创始人创办</span>
          <span>• 支持200多个国家及地区</span>
        </div>

        {/* 核心搜索区域 */}
        <div className="max-w-4xl mx-auto mb-4">
          <div className="bg-white rounded-full shadow-2xl p-1.5 flex items-center overflow-hidden">
            <div className="flex items-center gap-1 px-6 py-3 border-r border-gray-100 cursor-pointer hover:bg-gray-50 text-gray-800 transition-colors">
              <span className="text-sm font-bold">商品</span>
              <ChevronDown size={14} className="text-gray-400" />
            </div>
            
            <div className="flex-1 flex items-center px-4 relative">
              <input 
                type="text" 
                placeholder="请输入商品链接或关键词" 
                className="w-full py-3 text-gray-900 text-sm focus:outline-none placeholder-gray-400"
              />
              
              {/* 平台快捷图标 - 参考图片 */}
              <div className="hidden xl:flex items-center gap-4 mr-4 border-l border-gray-100 pl-4">
                {[
                  { name: 'Taobao', icon: ASSETS.PLATFORMS.TAOBAO },
                  { name: '1688', icon: ASSETS.PLATFORMS['1688'] },
                  { name: 'weidian', icon: ASSETS.PLATFORMS.WEIDIAN },
                  { name: 'Vip.com', icon: ASSETS.PLATFORMS.VIP },
                  { name: 'Xianyu', icon: ASSETS.PLATFORMS.XIANYU },
                ].map((p, i) => (
                  <div key={i} className="flex flex-col items-center group cursor-pointer">
                    <img src={p.icon} alt={p.name} className="w-5 h-5 rounded shadow-sm group-hover:scale-110 transition-transform" />
                    <span className="text-[10px] text-gray-400 mt-0.5 scale-90">{p.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4 pr-2">
              <ImageIcon size={22} className="text-blue-500 cursor-pointer hover:text-blue-600 transition-colors" />
              <button className="bg-[#0081ff] hover:bg-blue-600 text-white px-10 py-3 rounded-full text-base font-bold transition-all shadow-lg active:scale-95">
                去代购
              </button>
            </div>
          </div>
        </div>

        {/* 搜索框下方快捷操作 - 拟态玻璃效果 */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {[
            { label: '手动提交订单', arrow: true, path: '/manual-order', subIcons: [ASSETS.PLATFORMS.TAOBAO, ASSETS.PLATFORMS.JD, ASSETS.PLATFORMS.XIANYU] },
            { label: '购物咨询', arrow: true },
            { label: '运费估算', arrow: true, path: '/shipping-estimation' },
            { label: '专家购', arrow: true },
          ].map((btn, i) => (
            <div 
              key={i} 
              onClick={() => btn.path && navigate(btn.path)}
              className="px-4 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center gap-2 cursor-pointer hover:bg-white/20 transition-all group"
            >
              <span className="text-xs font-medium text-white/90">{btn.label}</span>
              {btn.subIcons && (
                <div className="flex -space-x-1 border-l border-white/20 pl-2">
                  {btn.subIcons.map((icon, idx) => (
                    <img key={idx} src={icon} className="w-3.5 h-3.5 rounded-full border border-white/40 shadow-sm" />
                  ))}
                </div>
              )}
              {btn.arrow && <ChevronDown size={12} className="-rotate-90 text-white/60 group-hover:text-white transition-colors" />}
            </div>
          ))}
        </div>

        {/* 服务步骤明细 */}
        <div className="max-w-4xl mx-auto relative mt-16">
          {/* 背景连接线 - 虚线 */}
          <div className="absolute top-4 left-[10%] right-[10%] border-t border-dashed border-white/20 hidden md:block" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10 px-0">
            {/* Step 1 */}
            <div className="flex flex-col items-start text-left group">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-[#0081ff] flex items-center justify-center text-sm font-bold shadow-lg shadow-blue-500/30 shrink-0">1</div>
                <h3 className="text-lg font-bold">下单并支付</h3>
              </div>
              <ul className="space-y-2 text-sm text-white/80">
                <li className="flex items-center gap-2">• 粘贴商品链接下单</li>
                <li className="flex items-center gap-2">• 支付商品售价及中国大陆运费</li>
                <li className="flex items-center gap-2 bg-[#0081ff]/20 px-2 rounded w-fit">• 为您认购商品并寄送至仓库</li>
                <li className="pl-4">
                  <button onClick={() => navigate('/tutorial')} className="inline-block mt-2 text-xs text-white/50 hover:text-white underline underline-offset-4 transition-colors cursor-pointer bg-transparent border-none p-0">了解更多</button>
                </li>
              </ul>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-start text-left group">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-[#0081ff] flex items-center justify-center text-sm font-bold shadow-lg shadow-blue-500/30 shrink-0">2</div>
                <h3 className="text-lg font-bold">质检&仓储</h3>
              </div>
              <ul className="space-y-2 text-sm text-white/80">
                <li className="flex items-center gap-2">• 入库质检</li>
                <li className="flex items-center gap-2">• 赠送3张免费质检图片</li>
                <li className="flex items-center gap-2">• 90天无存存储费</li>
                <li className="pl-4">
                  <button onClick={() => navigate('/tutorial')} className="inline-block mt-2 text-xs text-white/50 hover:text-white underline underline-offset-4 transition-colors cursor-pointer bg-transparent border-none p-0">了解更多</button>
                </li>
              </ul>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-start text-left group">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-[#0081ff] flex items-center justify-center text-sm font-bold shadow-lg shadow-blue-500/30 shrink-0">3</div>
                <h3 className="text-lg font-bold">国际运输</h3>
              </div>
              <ul className="space-y-2 text-sm text-white/80">
                <li className="flex items-center gap-2">• 支持不同订单商品合并寄送</li>
                <li className="flex items-center gap-2">• 定制化打包，100+物流线路</li>
                <li className="flex items-center gap-2">• 支付国际运费</li>
                <li className="pl-4">
                  <button onClick={() => navigate('/tutorial')} className="inline-block mt-2 text-xs text-white/50 hover:text-white underline underline-offset-4 transition-colors cursor-pointer bg-transparent border-none p-0">了解更多</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
