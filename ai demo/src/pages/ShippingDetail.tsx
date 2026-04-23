import React, { useEffect } from 'react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { ChevronRight, ArrowRight, Package, Info, Truck, Calendar, Layers, ShoppingCart, Globe } from 'lucide-react';
import { cn } from '../utils';

export const ShippingDetail: React.FC = () => {
  // 滚动到顶部
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#f5f6f7] pt-[140px]">
      <Header variant="standard" theme="light" />
      
      <main className="max-w-7xl mx-auto px-4 py-6">
        {/* 面包屑 */}
        <nav className="flex items-center gap-2 text-[12px] text-gray-400 mb-6">
          <span className="cursor-pointer hover:text-blue-600 transition-colors">运费估算</span>
          <ChevronRight size={12} />
          <span className="text-gray-600 font-medium">方案详情</span>
        </nav>

        {/* 方案核心信息卡片 */}
        <section className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 mb-6 relative overflow-hidden">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-blue-500" />
              <h1 className="text-xl font-bold text-gray-800">欧洲免税空运专线</h1>
              <span className="text-[12px] text-blue-500 bg-blue-50 px-2 py-0.5 rounded cursor-pointer hover:bg-blue-100 transition-colors">已寄送5038次</span>
            </div>
            <button className="bg-[#0081ff] hover:bg-blue-600 text-white px-10 py-2.5 rounded-full text-base font-bold shadow-lg shadow-blue-500/20 transition-all active:scale-95">
              立即下单
            </button>
          </div>

          {/* 资费表格 */}
          <div className="grid grid-cols-6 border border-gray-100 rounded-lg mb-8 bg-gray-50/30">
            {[
              { label: '首重价格(CN ¥)', value: '8.00/100g' },
              { label: '续重价格(CN ¥)', value: '8.00/100g' },
              { label: '燃油附加费', value: 'CN ¥ 0.00' },
              { label: '报关费', value: 'CN ¥ 39.00' },
              { label: '重量限制', value: '0-30000g' },
              { label: '寄送周期', value: '14-21工作日' },
            ].map((item, idx) => (
              <div key={idx} className={cn("px-4 py-4", idx !== 5 && "border-r border-gray-100")}>
                <div className="text-[12px] text-gray-400 mb-2">{item.label}</div>
                <div className="text-sm font-bold text-gray-700">{item.value}</div>
              </div>
            ))}
          </div>

          {/* 邮寄限制 */}
          <div className="bg-orange-50/30 rounded-lg p-5 border border-orange-100/50">
            <div className="flex gap-4">
              <span className="text-orange-500 text-[13px] font-bold shrink-0">邮寄限制</span>
              <p className="text-[12px] leading-relaxed text-gray-500">
                内类食品、可充内置电池、非化妆品粉末、50ML以上-500ML（含）液体、移动电源（充电宝）、配套电池（1块）、配套电池机、直插电脑、违禁、药品、非内类食品、大于120CM小于150CM、150-200CM、成人用品、10ML以下液体、邮驳（可带液体）、邮政（可带电）、香港UPS、香港DHL、膏体、化妆品粉末、10ML（含）-50ML（含）液体、手表、不可充内置电池、水具、磁性商品
              </p>
            </div>
          </div>
        </section>

        {/* 包裹详情 */}
        <section className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 mb-6">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1 h-5 bg-blue-500 rounded-full" />
            <h2 className="text-lg font-bold text-gray-800">包裹详情</h2>
          </div>

          <div className="flex items-center justify-between mb-8 pb-6 border-b border-gray-50">
            <div className="flex items-center gap-3">
              <span className="text-sm text-gray-400">用户</span>
              <span className="text-sm font-bold text-gray-800">T****o</span>
              <span className="text-[10px] font-black italic text-blue-500 bg-blue-50 px-1.5 rounded">V3</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm text-gray-400">运费</span>
              <span className="text-xl font-black text-red-500 font-mono">CN ¥ 131.16</span>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-8">
            {[
              { icon: <Globe size={18} />, label: '寄送国家', value: '德国', color: 'text-blue-500' },
              { icon: <Info size={18} />, label: '包裹重量', value: '990g', color: 'text-blue-500' },
              { icon: <Layers size={18} />, label: '包裹尺寸', value: '24cm x 14cm x 17cm', color: 'text-blue-500' },
              { icon: <Calendar size={18} />, label: '提交时间', value: '2026.4.21 21:31:50', color: 'text-blue-500' },
            ].map((info, idx) => (
              <div key={idx} className="flex flex-col gap-2">
                <div className="flex items-center gap-2 text-blue-500">
                  {info.icon}
                  <span className="text-[13px] text-gray-400 font-medium">{info.label}</span>
                </div>
                <div className="text-sm font-bold text-gray-700 pl-6">{info.value}</div>
              </div>
            ))}
          </div>
        </section>

        {/* 商品清单 */}
        <section className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1 h-5 bg-blue-500 rounded-full" />
            <h2 className="text-lg font-bold text-gray-800">商品清单</h2>
          </div>

          <div className="space-y-6">
            {[
              { name: '1号袋子 skz', spec: '打好包的 里面盒子不要拆', qty: 1, weight: '185g', img: 'https://picsum.photos/seed/p1/200/200' },
              { name: '拓麻歌子卡', spec: '', qty: 1, weight: '42g', img: 'https://picsum.photos/seed/p2/200/200' },
              { name: '10号skztrades0325', spec: '', qty: 1, weight: '645g', img: 'https://picsum.photos/seed/p3/200/200' },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-6 group">
                <div className="w-16 h-16 rounded-lg border border-gray-100 overflow-hidden bg-gray-50 flex-shrink-0">
                  <img src={item.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium text-gray-700 mb-1">{item.name}</div>
                  {item.spec && <div className="text-[12px] text-gray-400">{item.spec}</div>}
                </div>
                <div className="flex items-center gap-12 text-sm">
                   <div className="font-bold text-gray-700">x{item.qty}</div>
                   <div className="text-gray-400 w-24">重量 <span className="font-bold text-gray-700">{item.weight}</span></div>
                   <button className="flex items-center gap-1.5 px-6 py-2 rounded-full border border-blue-100 text-blue-600 text-xs font-bold hover:bg-blue-50 transition-colors">
                      <ShoppingCart size={12} />
                      买同款
                   </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};
