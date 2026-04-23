import React from 'react';
import { 
  ShoppingCart, 
  ChevronRight, 
  Gift, 
  BookOpen, 
  Truck, 
  HelpCircle, 
  Calculator, 
  Settings, 
  Search, 
  Edit3, 
  Users, 
  ShoppingBag, 
  MessageCircle, 
  Grid 
} from 'lucide-react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { useProducts } from '../hooks/useData';
import { useNavigate } from 'react-router-dom';
import { ASSETS } from '../constants';

export const ShoppingGuide: React.FC = () => {
  const navigate = useNavigate();
  const { products } = useProducts();

  const categories = [
    { id: 'HOBBY', name: '潮玩手办' },
    { id: 'ACCESSORIES', name: '时尚精品' },
    { id: 'WOMEN', name: '时尚女装' },
    { id: 'MEN', name: '潮流男装' },
    { id: 'BEAUTY', name: '彩妆' },
    { id: 'SPORTS', name: '运动户外' },
    { id: 'HOME', name: '家居用品' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="pt-20">
        {/* Banner Area with Image Background and Overlay */}
        <div 
          className="relative py-20 text-center text-white overflow-hidden bg-cover bg-center"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1600")' }}
        >
          {/* Dark Overlay Filter */}
          <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px] z-0" />

          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <h1 className="text-4xl font-bold mb-2 drop-shadow-md">代购指南</h1>
            <p className="text-blue-400 text-sm tracking-[0.2em] mb-12 font-medium">你的海淘小助手</p>
            
            {/* 3 Step Flow with White Background Box */}
            <div className="inline-flex flex-col md:flex-row items-center bg-white rounded-2xl shadow-2xl px-12 py-8 gap-12 md:gap-24 relative overflow-hidden">
              {[
                { step: '1', title: '下单', desc: 'Superbuy 采购、验货、质检、入仓入库' },
                { step: '2', title: '提包', desc: 'Superbuy 打包、发货' },
                { step: '3', title: '收货', desc: '等待包裹，开心收货' },
              ].map((s, i) => (
                <div key={i} className="flex items-center gap-4 group relative z-10">
                  <div className="w-10 h-10 rounded-full bg-gray-900 text-white flex items-center justify-center font-bold text-lg shadow-md transition-transform group-hover:scale-110">
                    {s.step}
                  </div>
                  <div className="text-left">
                    <h3 className="font-bold text-lg text-gray-900">{s.title}</h3>
                    <p className="text-[11px] text-gray-500 max-w-[160px] leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
              
              {/* Decorative line inside the box */}
              <div className="hidden md:block absolute top-1/2 left-[15%] right-[15%] h-px bg-gray-100 -translate-y-1 z-0" />
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Left Section: Navigation Matrix (Simulating the image grids) */}
            <div className="lg:col-span-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-12">
              {/* 代购指引 */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <h2 className="text-base font-bold mb-4 flex items-center gap-2">
                   代购指引
                </h2>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { label: '新人福利', icon: <Gift className="text-blue-500" />, color: 'bg-blue-50' },
                    { label: '代购指引', icon: <BookOpen className="text-purple-500" />, color: 'bg-purple-50' },
                    { label: '转运指引', icon: <Truck className="text-cyan-500" />, color: 'bg-cyan-50' },
                    { label: '帮助中心', icon: <HelpCircle className="text-indigo-500" />, color: 'bg-indigo-50' },
                  ].map((item, idx) => (
                    <button key={idx} className={`${item.color} p-4 rounded-xl flex flex-col items-center gap-2 hover:brightness-95 transition-all text-xs font-bold text-gray-700`}>
                      {item.icon}
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* 海淘工具箱 */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <h2 className="text-base font-bold mb-4">海淘工具箱</h2>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { label: '运费估算', icon: <Calculator className="text-blue-400" />, path: '/shipping-estimation' },
                    { label: '定制物流', icon: <Settings className="text-blue-400" /> },
                    { label: '物流查询', icon: <Search className="text-blue-400" /> },
                    { label: '手动提交订单', icon: <Edit3 className="text-blue-400" />, path: '/manual-order' },
                  ].map((item, idx) => (
                    <button 
                      key={idx} 
                      onClick={() => item.path && navigate(item.path)}
                      className="bg-blue-50/50 p-4 rounded-xl flex flex-col items-center gap-2 hover:bg-blue-100 transition-all text-xs font-bold text-gray-700"
                    >
                      {item.icon}
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* 服务市场 */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <h2 className="text-base font-bold mb-4">服务市场</h2>
                <div className="grid grid-cols-1 gap-3">
                  {[
                    { label: '专家购', icon: <Users className="text-orange-500" />, desc: '专业代购团队为您代劳' },
                    { label: '购物咨询', icon: <MessageCircle className="text-green-500" />, desc: '在线解答您的购物疑惑' },
                  ].map((item, idx) => (
                    <button key={idx} className="bg-gray-50 p-4 rounded-xl flex items-center gap-4 hover:bg-gray-100 transition-all text-left">
                      <div className="w-10 h-10 rounded-lg bg-white shadow-sm flex items-center justify-center">
                        {item.icon}
                      </div>
                      <div>
                        <div className="text-xs font-bold text-gray-800">{item.label}</div>
                        <div className="text-[10px] text-gray-400 mt-0.5">{item.desc}</div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* 主流电商平台 */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <h2 className="text-base font-bold mb-4">主流电商平台</h2>
                <div className="grid grid-cols-2 gap-3 h-full pb-4">
                  {[
                    { name: '淘宝/天猫', icon: ASSETS.PLATFORMS.TAOBAO },
                    { name: '京东', icon: ASSETS.PLATFORMS.JD },
                    { name: '1688', icon: ASSETS.PLATFORMS['1688'] },
                    { name: '闲鱼', icon: ASSETS.PLATFORMS.XIANYU },
                  ].map((platform, idx) => (
                    <button key={idx} className="bg-gray-50 p-3 rounded-xl flex flex-col items-center gap-2 hover:bg-gray-100 transition-all">
                      <img src={platform.icon} alt={platform.name} className="w-8 h-8 object-contain" />
                      <span className="text-[10px] font-bold text-gray-600">{platform.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Product Matrix Sections */}
            <div className="lg:col-span-4 space-y-12">
              {categories.map(cat => {
                const catProducts = products.filter(p => p.category === cat.id);
                if (catProducts.length === 0) return null;

                return (
                  <section key={cat.id} className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-1.5 h-6 bg-blue-600 rounded-full" />
                        <h2 className="text-lg font-black text-gray-900 tracking-tight">{cat.name}</h2>
                      </div>
                      <button className="text-xs text-gray-400 hover:text-blue-600 transition-colors flex items-center gap-1 group">
                        更多 <ChevronRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                      </button>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-6">
                      {catProducts.map(product => (
                        <div key={product.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 group">
                          <div className="aspect-square relative overflow-hidden">
                            <img 
                              src={product.image} 
                              alt={product.title} 
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                              referrerPolicy="no-referrer"
                            />
                            <div className="absolute top-2 right-2 flex flex-col gap-1">
                              <span className="bg-white/90 backdrop-blur-sm px-1.5 py-0.5 rounded text-[10px] font-bold text-gray-800 shadow-sm">
                                {product.platform.toUpperCase()}
                              </span>
                            </div>
                          </div>
                          <div className="p-3">
                            <h3 className="text-xs font-medium text-gray-800 line-clamp-2 h-8 mb-3 leading-relaxed">
                              {product.title}
                            </h3>
                            <div className="flex items-center justify-between">
                              <div className="flex flex-col">
                                <div className="text-blue-600 font-black text-sm">
                                  ¥{product.price}
                                </div>
                                <div className="text-[10px] text-gray-300 line-through">
                                  ¥{product.originalPrice}
                                </div>
                              </div>
                              <button className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all active:scale-90">
                                <ShoppingCart size={14} />
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>
                );
              })}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};
