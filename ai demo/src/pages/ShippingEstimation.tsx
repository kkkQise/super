import React, { useState, useEffect } from 'react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { Search, Info, ChevronDown, Package, Truck, Calendar, MapPin, Layers, ArrowRight, ShoppingBag, MessageSquare, HelpCircle, ChevronRight, X } from 'lucide-react';
import { cn } from '../utils';
import { ASSETS } from '../constants';

import { useNavigate } from 'react-router-dom';

type TabType = 'estimation' | 'solution';

export const ShippingEstimation: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<TabType>('estimation');
  const [country, setCountry] = useState('USA 美国');
  const [category, setCategory] = useState('手机壳');
  const [weight, setWeight] = useState('500');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#f5f6f7] pt-[140px]">
      <Header variant="standard" theme="light" />
      
      {/* 顶部通栏广告/Slogan - 参考截图 */}
      <div className="max-w-7xl mx-auto px-4 mb-6">
        <div className="relative h-[180px] rounded-2xl overflow-hidden bg-gradient-to-r from-blue-500 to-blue-600 group cursor-pointer">
           <img 
            src="https://picsum.photos/seed/promo/1200/200" 
            className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" 
           />
           <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-8">
              <h2 className="text-3xl font-black mb-2 drop-shadow-md italic">晒单最高赢 $100</h2>
              <p className="text-lg opacity-90 mb-6 drop-shadow-sm">• 图文/视频皆可 • 简单3步参与</p>
              <button className="bg-yellow-400 hover:bg-yellow-500 font-black text-blue-900 px-8 py-2.5 rounded-full shadow-lg transition-all active:scale-95">
                立即分享
              </button>
           </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 pb-20">
        {/* 核心查询区域 */}
        <section className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-8">
          <div className="flex border-b border-gray-100">
            <button 
              onClick={() => setActiveTab('estimation')}
              className={cn(
                "px-8 py-4 text-sm font-bold transition-all relative",
                activeTab === 'estimation' ? "text-blue-600" : "text-gray-500 hover:text-gray-700"
              )}
            >
              运费估算
              {activeTab === 'estimation' && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600" />}
            </button>
            <button 
              onClick={() => setActiveTab('solution')}
              className={cn(
                "px-8 py-4 text-sm font-bold transition-all relative",
                activeTab === 'solution' ? "text-blue-600" : "text-gray-500 hover:text-gray-700"
              )}
            >
              商品寄送方案查询
              {activeTab === 'solution' && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600" />}
            </button>
            <div className="flex-1 flex justify-end items-center px-8">
              <span className="text-[11px] text-gray-400">若大家大家寄送物种有特殊需求，您可以选择 <span className="text-blue-500 underline cursor-pointer">定制寄送服务 &gt;</span></span>
            </div>
          </div>

          {/* 表单查询框 */}
          <div className="p-8">
            <div className="flex flex-wrap items-center gap-4">
              {/* 国家选择 */}
              <div className="flex flex-col gap-1.5 flex-1 min-w-[180px]">
                <div className="flex items-center gap-1">
                  <span className="text-red-500">*</span>
                  <span className="text-[12px] text-gray-400 font-medium">USA 美国</span>
                </div>
                <div className="flex items-center justify-between px-3 py-2 bg-gray-50/50 border border-gray-200 rounded-lg group cursor-pointer hover:border-blue-300">
                   <div className="flex items-center gap-2">
                     <img src={ASSETS.FLAGS.US} className="w-4 h-3 object-cover rounded-sm shadow-sm" />
                     <span className="text-sm text-gray-700">{country}</span>
                   </div>
                   <X size={14} className="text-gray-300 hover:text-gray-500" />
                </div>
              </div>

              {/* 分类 */}
              <div className="flex flex-col gap-1.5 flex-1 min-w-[180px]">
                <div className="flex items-center gap-1">
                  <span className="text-red-500">*</span>
                  <span className="text-[12px] text-gray-400 font-medium">分类</span>
                </div>
                <div className="flex items-center justify-between px-3 py-2 bg-gray-50/50 border border-gray-200 rounded-lg group cursor-pointer hover:border-blue-300">
                   <span className="text-sm text-gray-700 placeholder-gray-300">请输入关键词，如“书”</span>
                   <Search size={14} className="text-gray-400" />
                </div>
                <div className="flex gap-2 mt-1">
                   {['T恤', '手机壳', '项链', '玩具', '电子产品', '礼物'].map(tag => (
                     <span key={tag} className="text-[10px] text-gray-400 bg-gray-100/50 px-2 py-0.5 rounded cursor-pointer hover:bg-gray-100">{tag}</span>
                   ))}
                </div>
              </div>

              {/* 重量 */}
              <div className="flex flex-col gap-1.5 w-[140px]">
                <div className="flex items-center gap-1">
                  <span className="text-[12px] text-gray-400 font-medium">包裹重量</span>
                </div>
                <div className="flex items-center bg-gray-50/50 border border-gray-200 rounded-lg overflow-hidden group hover:border-blue-300">
                   <input 
                    type="text" 
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    className="w-full bg-transparent px-3 py-2 text-sm text-gray-700 outline-none" 
                   />
                   <span className="text-sm text-gray-400 bg-gray-100/50 h-full flex items-center px-3 border-l border-gray-200">g</span>
                </div>
              </div>

              {/* 尺寸 */}
              <div className="flex flex-col gap-1.5 w-[240px]">
                <div className="flex items-center gap-1">
                  <span className="text-[12px] text-gray-400 font-medium">包裹尺寸</span>
                </div>
                <div className="flex items-center gap-2">
                   <div className="flex-1 bg-gray-50/50 border border-gray-200 rounded-lg flex items-center group hover:border-blue-300">
                      <input type="text" placeholder="长" className="w-full bg-transparent px-2 py-2 text-sm text-gray-700 outline-none placeholder:text-[10px]" />
                      <span className="text-[10px] text-gray-300 pr-2">(cm)</span>
                   </div>
                   <div className="flex items-center text-gray-300 px-0.5">X</div>
                   <div className="flex-1 bg-gray-50/50 border border-gray-200 rounded-lg flex items-center group hover:border-blue-300">
                      <input type="text" placeholder="宽" className="w-full bg-transparent px-2 py-2 text-sm text-gray-700 outline-none placeholder:text-[10px]" />
                      <span className="text-[10px] text-gray-300 pr-2">(cm)</span>
                   </div>
                   <div className="flex-center text-gray-300 px-0.5">X</div>
                   <div className="flex-1 bg-gray-50/50 border border-gray-200 rounded-lg flex items-center group hover:border-blue-300">
                      <input type="text" placeholder="高" className="w-full bg-transparent px-2 py-2 text-sm text-gray-700 outline-none placeholder:text-[10px]" />
                      <span className="text-[10px] text-gray-300 pr-2">(cm)</span>
                   </div>
                </div>
              </div>

              {/* 重置 & 查询 */}
              <div className="flex items-center gap-3 pt-5">
                 <button className="text-[12px] text-gray-400 hover:text-blue-600 font-medium px-4">重置</button>
                 <button className="bg-blue-500 hover:bg-blue-600 text-white px-10 py-2.5 rounded-lg text-sm font-bold shadow-lg shadow-blue-500/10 transition-all active:scale-95">
                   查询
                 </button>
              </div>
            </div>
            
            {/* 提示信息 */}
            <div className="mt-4 flex items-center gap-2 text-orange-400">
               <Info size={14} />
               <span className="text-[11px] font-medium">• 待检物品：{category} <span className="text-blue-500 underline cursor-pointer ml-2">具体物品筛选 &gt;</span></span>
            </div>
          </div>
        </section>

        {activeTab === 'estimation' ? (
          /* 运费估算列表视图 */
          <div className="space-y-4">
             {/* 排序与过滤 bar */}
             <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 flex items-center gap-12">
                <div className="flex items-center gap-8">
                   <div className="flex flex-col gap-1">
                      <span className="text-[10px] text-gray-400">排序</span>
                      <div className="flex items-center gap-1 cursor-pointer">
                         <span className="text-[13px] font-bold text-gray-700">推荐</span>
                         <ChevronDown size={14} className="text-gray-400" />
                      </div>
                   </div>
                   <div className="flex flex-col gap-1">
                      <span className="text-[10px] text-gray-400">服务商</span>
                      <div className="flex items-center gap-1 cursor-pointer">
                         <span className="text-[13px] font-bold text-gray-700">全部</span>
                         <ChevronDown size={14} className="text-gray-400" />
                      </div>
                   </div>
                   <div className="flex flex-col gap-1">
                      <span className="text-[10px] text-gray-400">是否含税</span>
                      <div className="flex items-center gap-1 cursor-pointer">
                         <span className="text-[13px] font-bold text-gray-700">全部</span>
                         <ChevronDown size={14} className="text-gray-400" />
                      </div>
                   </div>
                   <div className="flex flex-col gap-1">
                      <span className="text-[10px] text-gray-400">寄送周期</span>
                      <div className="flex items-center gap-1 cursor-pointer">
                         <span className="text-[13px] font-bold text-gray-700">全部</span>
                         <ChevronDown size={14} className="text-gray-400" />
                      </div>
                   </div>
                </div>

                <div className="flex-1 flex items-center gap-3">
                   <span className="text-[10px] text-gray-400">价格区间</span>
                   <div className="flex items-center gap-2">
                      <input type="text" placeholder="CN ¥ 0.00" className="w-24 bg-gray-50 border border-gray-200 rounded px-2 py-1 text-xs outline-none focus:border-blue-300" />
                      <div className="w-2 h-[1px] bg-gray-300" />
                      <input type="text" placeholder="不限" className="w-24 bg-gray-50 border border-gray-200 rounded px-2 py-1 text-xs outline-none focus:border-blue-300" />
                   </div>
                </div>

                <div className="flex items-center gap-4">
                   <div className="flex items-center gap-2">
                      <span className="text-[10px] text-gray-400">线路名称</span>
                      <input type="text" placeholder="请输入..." className="w-32 bg-gray-50 border border-gray-200 rounded px-2 py-1 text-xs outline-none focus:border-blue-300" />
                   </div>
                   <button className="bg-blue-600 text-white px-6 py-1.5 rounded-lg text-xs font-bold hover:bg-blue-700 transition-colors">查询</button>
                   <button className="text-xs text-gray-400 hover:text-blue-600 underline">重置</button>
                </div>
             </div>

             {/* 方案分类 Tabs */}
             <div className="flex items-center gap-1">
                {['全部', '空运', '海运', '陆运'].map(cat => (
                  <button key={cat} className={cn(
                    "px-6 py-2 text-[13px] font-bold rounded-t-xl transition-all border-b-2",
                    cat === '全部' ? "bg-white text-blue-600 border-blue-600" : "text-gray-500 hover:bg-white/50 border-transparent"
                  )}>
                    {cat}
                  </button>
                ))}
             </div>

             {/* 物流线路列表 */}
             <div className="space-y-4">
                {[
                  { name: '普通邮政空运 (免充)', tags: ['免税', '空运专用轴', '精选辅材'], rate: '98.86%', duration: '8-14', minWeight: '1600g', price: '525.00', usage: '6347', promo: '此线路禁止寄送带有品牌标志、电池及液体(如化妆品/液体/移动电源) 凡持有大牌、摄影机等高敏敏感度商品，均请勿邮寄此线路。造成各种风险由其自负。请选择包裹专线查询此线路，详情请咨询客服。' },
                  { name: '云途空运专线 (包税)', tags: ['含税', '空运专线', 'Pak包装'], rate: '97.67%', duration: '7-14', minWeight: '500g', price: '94.00', usage: '48532', promo: '该线路提交后我们将自动为您申请免除海关报关费，具体请联系我们的客服咨询详细政策。清关更快捷，支持多种特色服务。' },
                  { name: '免税空运快线 (计重)', tags: ['免税', '空运专线', 'Pak包装'], rate: '97.67%', duration: '11-22', minWeight: '500g', price: '124.00', usage: '36003', promo: '该线路提交后我们将自动为您申请免除海关报关费，具体请联系我们的客服咨询详细政策。清关更快捷，支持多种特色服务。' },
                  { name: '欧洲免税物流快线 (特惠)', tags: ['包邮', '空运专线', '精品路线'], rate: '86.44%', duration: '11-22', minWeight: '1000g', price: '169.00', usage: '9680', promo: '该线路提交后我们将自动为您申请免除海关报关费，具体请联系我们的客服咨询详细政策。清关更快捷，支持多种特色服务。' },
                ].map((line, idx) => (
                  <div 
                    key={idx} 
                    onClick={() => navigate(`/shipping-detail/${idx + 100}`)}
                    className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:border-blue-200 transition-all group overflow-hidden cursor-pointer"
                  >
                    {/* 顶部警告栏 */}
                    <div className="flex gap-4 mb-6 bg-orange-50/50 p-3 rounded-lg border border-orange-100/30">
                       <Info size={16} className="text-orange-400 shrink-0 mt-0.5" />
                       <p className="text-[11px] leading-relaxed text-gray-500">{line.promo}</p>
                    </div>

                    <div className="flex items-start gap-10 relative">
                       {/* 基本信息 */}
                       <div className="w-[300px] shrink-0 border-r border-gray-50 pr-8">
                          <div className="flex items-center gap-3 mb-4">
                             <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
                                <Truck size={20} className="text-blue-500" />
                             </div>
                             <div>
                                <h3 className="text-sm font-black text-gray-800 mb-1 group-hover:text-blue-600 transition-colors uppercase">{line.name}</h3>
                                <div className="flex gap-1.5">
                                   {line.tags.map(t => (
                                     <span key={t} className="text-[10px] px-1.5 py-0.5 rounded bg-blue-50 text-blue-500 border border-blue-100">{t}</span>
                                   ))}
                                </div>
                             </div>
                          </div>
                          
                          <div className="grid grid-cols-2 gap-y-4">
                             <div>
                                <div className="text-[11px] text-gray-400 mb-1">寄送周期 / 准点率</div>
                                <div className="flex items-baseline gap-1.5">
                                   <span className="text-sm font-bold text-gray-700">{line.duration}天</span>
                                   <span className="text-[11px] text-green-500 font-bold">{line.rate}</span>
                                </div>
                                <div className="text-[10px] text-gray-400 underline decoration-dotted mt-0.5">30天月使用 {line.usage} 次</div>
                             </div>
                             <div>
                                <div className="text-[11px] text-gray-400 mb-1">计费方式</div>
                                <div className="text-xs font-bold text-gray-700">取 <span className="text-blue-500">实重与体积重及较大者计费</span></div>
                                <div className="flex items-center gap-2 mt-1">
                                   <div className="flex items-center gap-1 text-[10px] text-gray-400">体积重量 <Info size={10} /></div>
                                   <div className="flex items-center gap-1 text-[10px] text-gray-400">续重收费 <Info size={10} /></div>
                                   <div className="flex items-center gap-1 text-[10px] text-gray-400">报关费 <Info size={10} /></div>
                                </div>
                             </div>
                          </div>
                       </div>

                       {/* 详情与价格 */}
                       <div className="flex-1 flex justify-between items-end pb-2">
                          <div className="space-y-4 h-full flex flex-col justify-end">
                             <div className="text-[11px] text-gray-400 uppercase">主要限额</div>
                             <div className="flex gap-6">
                                <div className="flex flex-col">
                                   <span className="text-[10px] text-gray-400 bg-gray-50 px-2 py-0.5 rounded w-fit mb-1">重量限制</span>
                                   <span className="text-sm font-bold text-gray-700">0-10 kg</span>
                                </div>
                                <div className="flex flex-col">
                                   <span className="text-[10px] text-gray-400 bg-gray-50 px-2 py-0.5 rounded w-fit mb-1">尺寸限制</span>
                                   <span className="text-sm font-bold text-gray-700">最长边 &lt; 150cm</span>
                                </div>
                             </div>
                          </div>

                          <div className="text-right flex flex-col items-end gap-4">
                             <div className="flex flex-col items-end">
                                <span className="text-[11px] text-gray-400 mb-1">预估运费</span>
                                <div className="flex items-baseline gap-1">
                                   <span className="text-[10px] text-red-500 font-bold uppercase">CN ¥</span>
                                   <span className="text-3xl font-black text-red-500 font-mono tracking-tighter">{line.price}</span>
                                </div>
                                <button className="text-[11px] text-blue-500 underline mt-1">明细 &gt;</button>
                             </div>
                             <button className="bg-[#0081ff] hover:bg-blue-600 text-white px-8 py-2.5 rounded-full text-sm font-black shadow-lg shadow-blue-500/20 transition-all active:scale-95">
                                立即下单
                             </button>
                          </div>
                       </div>
                    </div>

                    {/* 底部展开说明 */}
                    <div className="mt-6 pt-4 border-t border-gray-50 flex items-center justify-between text-[11px] text-gray-400">
                       <div className="flex items-center gap-6">
                          <div className="flex items-center gap-1.5"><Package size={12} /><span>最高报关 $1120</span></div>
                          <div className="flex items-center gap-1.5"><HelpCircle size={12} /><span>支持保价</span></div>
                       </div>
                       <button className="flex items-center gap-1 hover:text-blue-500 transition-colors uppercase font-bold">
                          线路详情 <ChevronDown size={14} />
                       </button>
                    </div>
                  </div>
                ))}
             </div>
          </div>
        ) : (
          /* 商品寄送方案网格视图 */
          <div className="space-y-8">
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { id: 1, name: '云途空运专线 (带电)', flag: ASSETS.FLAGS.US, price: '96.00', date: '2026.3.23', delivery: '2026.4.2', weight: '200g', size: '22x15x11cm', time: '11个工作日签收', status: 'EP泡体填充物', img: 'https://picsum.photos/seed/s1/400/400' },
                  { id: 2, name: '欧美免税空运快线 (计重)', flag: ASSETS.FLAGS.US, price: '90.00', date: '2026.1.5', delivery: '2026.1.15', weight: '352g', size: '16x12x10cm', time: '10个工作日签收', status: '', img: 'https://picsum.photos/seed/s2/400/400' },
                  { id: 3, name: 'UPS(HK)-5500', flag: ASSETS.FLAGS.US, price: '253.51', date: '2026.1.24', delivery: '2026.1.30', weight: '687g', size: '21x15x12cm', time: '6个工作日签收', status: '', img: 'https://picsum.photos/seed/s3/400/400' },
                  { id: 4, name: '免税空运快线 (计重)', flag: ASSETS.FLAGS.US, price: '85.50', date: '2025.12.28', delivery: '2026.1.20', weight: '215g', size: '22x12x5cm', time: '23个工作日签收', status: '极简包装', img: 'https://picsum.photos/seed/s4/400/400' },
                  { id: 5, name: '欧美免税空运专线 (带电)', flag: ASSETS.FLAGS.US, price: '78.00', date: '2025.11.12', delivery: '2025.12.3', weight: '209g', size: '19x11x8cm', time: '21个工作日签收', status: '极简包装', img: 'https://picsum.photos/seed/s5/400/400' },
                  { id: 6, name: '欧美免税物流快线 (特惠)', flag: ASSETS.FLAGS.US, price: '100.68', date: '2025.10.20', delivery: '2025.10.20', weight: '385g', size: '19x12x10cm', time: '14个工作日签收', status: '极简包装', img: 'https://picsum.photos/seed/s6/400/400' },
                  { id: 7, name: '欧美免税空运快线 (计重)', flag: ASSETS.FLAGS.US, price: '85.50', date: '2025.10.15', delivery: '2025.10.29', weight: '264g', size: '15x12x9cm', time: '15个工作日签收', status: '', img: 'https://picsum.photos/seed/s7/400/400' },
                  { id: 8, name: '云途空运专线 (波兰)', flag: ASSETS.FLAGS.US, price: '98.40', date: '2025.9.25', delivery: '2025.10.1', weight: '88g', size: '20x11x4cm', time: '7个工作日签收', status: '极简包装', img: 'https://picsum.photos/seed/s8/400/400' },
                ].map((item, idx) => (
                  <div 
                    key={idx} 
                    onClick={() => navigate(`/shipping-detail/${item.id}`)}
                    className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl hover:shadow-blue-500/5 hover:-translate-y-1 transition-all group p-4 flex flex-col h-full cursor-pointer"
                  >
                    <div className="flex items-start justify-between mb-2">
                       <div className="flex items-center gap-1.5 uppercase">
                          <img src={ASSETS.PLATFORMS.TAOBAO} className="w-3.5 h-3.5 rounded-sm" />
                          <span className="text-[10px] font-bold text-gray-400">Taobao</span>
                       </div>
                       <img src={item.flag} className="w-4 h-3 rounded shadow-sm opacity-60" />
                    </div>
                    
                    <h3 className="text-sm font-bold text-gray-800 line-clamp-1 mb-2 group-hover:text-blue-600 transition-colors">{item.name}</h3>
                    
                    <div className="flex items-baseline gap-1 mb-4">
                       <span className="text-[10px] text-red-500 font-bold uppercase">CN ¥</span>
                       <span className="text-xl font-black text-red-500 font-mono">{item.price}</span>
                    </div>

                    <div className="space-y-2 mb-4 flex-1">
                       <div className="flex items-center justify-between text-[11px] text-gray-400">
                          <span className="font-medium">{item.date} 寄出</span>
                          <span className="w-4 h-[1px] bg-gray-200" />
                          <span className="font-medium font-mono">{item.delivery} 签收</span>
                       </div>
                       <div className="grid grid-cols-2 gap-y-1.5 text-[11px] text-gray-500">
                          <div className="flex flex-col">
                             <span className="text-gray-300 scale-90 origin-left">重 {item.weight}</span>
                             <span className="font-medium font-mono">{item.size}</span>
                          </div>
                          <div className="text-right flex flex-col">
                             <span className="text-gray-300 scale-90 origin-right">{item.time}</span>
                             {item.status && <span className="text-orange-500 font-bold scale-90 origin-right">{item.status}</span>}
                          </div>
                       </div>
                    </div>

                    <div className="relative aspect-square rounded-xl overflow-hidden bg-gray-50 mb-4">
                       <img src={item.img} className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700" />
                       <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all" />
                       <div className="absolute bottom-2 left-2 right-2 flex justify-center translate-y-10 group-hover:translate-y-0 transition-transform duration-300">
                          <button className="bg-white/90 backdrop-blur-md text-blue-600 font-black text-[10px] px-6 py-1.5 rounded-full shadow-lg">
                             查看详情
                          </button>
                       </div>
                    </div>

                    <div className="flex items-center justify-between border-t border-gray-50 pt-3">
                       <div className="flex items-center gap-1.5">
                          <span className="text-[10px] text-gray-400 bg-gray-50 px-2 py-0.5 rounded">共1件商品</span>
                          <span className="text-[10px] text-blue-500 bg-blue-50 px-2 py-0.5 rounded font-black italic">保护寄/壳</span>
                       </div>
                    </div>
                  </div>
                ))}
             </div>

             {/* 分页组件 */}
             <div className="flex items-center justify-center gap-3">
                <button className="w-8 h-8 rounded-full bg-white border border-gray-100 flex items-center justify-center text-gray-400 hover:border-blue-300 hover:text-blue-500 transition-all shadow-sm">
                   <ChevronRight size={16} className="rotate-180" />
                </button>
                <div className="flex items-center gap-1.5">
                   {[1, 2, 3, 4, 5, '...', 643].map((p, i) => (
                      <button key={i} className={cn(
                        "w-8 h-8 rounded-full border transition-all text-[13px] font-bold shadow-sm",
                        p === 1 ? "bg-blue-600 border-blue-600 text-white shadow-blue-500/10" : "bg-white border-gray-100 text-gray-500 hover:border-blue-300 hover:text-blue-500"
                      )}>
                        {p}
                      </button>
                   ))}
                </div>
                <button className="w-8 h-8 rounded-full bg-white border border-gray-100 flex items-center justify-center text-gray-400 hover:border-blue-300 hover:text-blue-500 transition-all shadow-sm">
                   <ChevronRight size={16} />
                </button>
                <div className="flex items-center gap-3 ml-4 text-[13px]">
                   <span className="text-gray-400">跳至</span>
                   <input type="text" className="w-12 h-8 bg-white border border-gray-100 rounded text-center outline-none focus:border-blue-300 font-bold text-gray-700 shadow-sm" />
                   <span className="text-gray-400">页</span>
                </div>
             </div>
          </div>
        )}

        {/* 底部横幅入口 */}
        <section className="mt-16 grid grid-cols-2 gap-6">
           <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white relative overflow-hidden group cursor-pointer hover:shadow-2xl hover:shadow-blue-500/20 transition-all">
              <div className="relative z-10">
                 <h3 className="text-2xl font-black mb-2 uppercase italic tracking-wider">寄送专家服务</h3>
                 <p className="text-sm opacity-80 mb-6 font-medium">拥有多年物流经验，为您规划精准、低风险、低价格方案</p>
                 <ArrowRight size={20} className="group-hover:translate-x-4 transition-transform" />
              </div>
              <div className="absolute right-[-40px] top-[-40px] w-40 h-40 bg-white/10 rounded-full blur-3xl group-hover:scale-150 transition-transform" />
           </div>
           <div className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl p-8 text-white relative overflow-hidden group cursor-pointer hover:shadow-2xl hover:shadow-cyan-500/20 transition-all">
              <div className="relative z-10">
                 <h3 className="text-2xl font-black mb-2 uppercase italic tracking-wider">定制寄送服务</h3>
                 <p className="text-sm opacity-80 mb-6 font-medium">超大货物、特殊航运需求，由资深物流专人一对一支持制定方案</p>
                 <ArrowRight size={20} className="group-hover:translate-x-4 transition-transform" />
              </div>
              <div className="absolute right-[-40px] bottom-[-40px] w-40 h-40 bg-white/10 rounded-full blur-3xl group-hover:scale-150 transition-transform" />
           </div>
        </section>

        {/* 常见问题区块 */}
        <section className="mt-20">
           <div className="flex items-center justify-between mb-10 pb-4 border-b border-gray-100">
              <div className="flex items-center gap-3">
                 <div className="w-1.5 h-6 bg-blue-600 rounded-full" />
                 <h2 className="text-xl font-black text-gray-800">常见问题</h2>
              </div>
              <button className="text-xs text-gray-400 hover:text-blue-600 font-bold uppercase transition-colors">
                 更多常见问题 &gt;&gt;
              </button>
           </div>
           
           <div className="grid grid-cols-2 gap-x-20 gap-y-12">
              {[
                { q: '什么是首重和续重？', a: '首重是指最低的计费重量，包裹重量在首重范围内的，需按首重价格核算，续重则是指超过首重的部分。通常按0.5kg/1kg为一个计费周期。' },
                { q: '对液体、膏体、粉末、饰物、DVD光盘、药品寄送有什么规定？', a: '受海关规定，烟、酒、药、违禁品不予承运。根据航司运输要求，食品、药品、化妆品需要提供非危险品证明；普通免税包裹寄送限制较多，建议选择相应的专线通道。敏感物品如电池、粉末、液体及磁性物品（如音箱、马达、手机等）一同寄送，建议选择敏感线。任何对于包裹中存在的风险及可能导致查收的风险行为后果由其自负。' },
                { q: '我提交的包裹超过限重怎么办？', a: '每条线路都有最大的计费重量限制，如果商品超重，将提示无法提交该包裹，需要您移除部分商品，分批提交寄送。' },
                { q: '什么是体积重？', a: '体积重是主要针对轻抛货物的结算环节中，当一件物品的体积大而重量太轻时，会在运输中就会占据您的体积计算结果，大物流会通过体积重量来权衡收费。公式一般为：长(cm) x 宽(cm) x 高(cm) / 6000 = 体积重量(kg)，当然一些特殊的物流渠道可能会由于合作原因进行一定比例核算转换。' },
              ].map((faq, i) => (
                <div key={i} className="group">
                   <h4 className="text-sm font-black text-gray-800 mb-3 group-hover:text-blue-600 transition-colors uppercase">{faq.q}</h4>
                   <p className="text-[12px] leading-relaxed text-gray-400 font-medium">
                      {faq.a}
                   </p>
                </div>
              ))}
           </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};
