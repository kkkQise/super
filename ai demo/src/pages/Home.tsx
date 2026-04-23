import React, { useState } from 'react';
import { ShoppingCart, Filter, ChevronDown, Box, ChevronRight } from 'lucide-react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { Hero } from '../components/home/Hero';
import { ProductCard } from '../components/home/ProductCard';
import { ShippingCard } from '../components/home/ShippingCard';
import { useProducts, useShippingLines, useReviews } from '../hooks/useData';
import { ASSETS, FILTER_COUNTRIES, FILTER_CATEGORIES } from '../constants';
import { cn } from '../utils';
import { ReviewCard } from '../components/home/ReviewCard';
import { CommunityEntryCard } from '../components/home/CommunityEntryCard';
import { AnnouncementBar } from '../components/home/AnnouncementBar';
import { useNavigate } from 'react-router-dom';

import { ReviewCarousel } from '../components/home/ReviewCarousel';

export const Home: React.FC = () => {
  const navigate = useNavigate();
  const { products, loading: productsLoading } = useProducts();
  const { lines, loading: shippingLoading } = useShippingLines();
  const { reviews, loading: reviewsLoading } = useReviews();

  const [selectedCountry, setSelectedCountry] = useState('ALL');
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [displayLimit, setDisplayLimit] = useState(6);

  // 数据过滤逻辑
  const filteredProducts = products.filter(p => 
    (selectedCountry === 'ALL' || p.destCountry === selectedCountry) &&
    (selectedCategory === 'ALL' || p.category === selectedCategory)
  );

  const filteredLines = lines.filter(l => 
    selectedCountry === 'ALL' || l.countryCode === selectedCountry
  );

  const filteredReviews = reviews.filter(r => 
    (selectedCountry === 'ALL' || r.countryCode === selectedCountry) &&
    (selectedCategory === 'ALL' || !r.category || r.category === selectedCategory)
  );

  const hasMore = filteredProducts.length > displayLimit || filteredLines.length > displayLimit;

  return (
    <div className="min-h-screen bg-white">
      <main>
        <Hero />
        <AnnouncementBar />

        {/* 运营广告位区块 */}
        <section className="bg-white py-6">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
               {ASSETS.BANNERS.map((banner, i) => (
                 <div 
                   key={i} 
                   onClick={() => banner.path && navigate(banner.path)}
                   className={cn(
                     "aspect-[2.4/1] rounded-lg overflow-hidden relative group cursor-pointer shadow-sm hover:shadow-lg transition-all",
                     banner.color
                   )}
                 >
                   <img 
                    src={banner.image} 
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" 
                    referrerPolicy="no-referrer" 
                   />
                   <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent flex items-center p-4">
                      <span className="text-white text-sm font-bold tracking-wider drop-shadow-md">{banner.title}</span>
                   </div>
                 </div>
               ))}
            </div>
            <div className="flex justify-end mt-2">
               <button className="text-[11px] text-gray-400 hover:text-blue-600 transition-colors">更多</button>
            </div>
          </div>
        </section>

        {/* 大家都在买和寄 - 全新五列排布 */}
        <section className="bg-gray-50/50 py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col items-center mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">大家都在买和寄</h2>
              <div className="w-12 h-1 bg-blue-600 rounded-full mb-8" />
              
              {/* 筛选器 */}
              <div className="flex flex-wrap items-center justify-center gap-4 bg-white p-3 rounded-2xl shadow-sm border border-gray-100 mb-2">
                <div className="flex items-center gap-2 px-3 py-1.5 border-r border-gray-100">
                  <Filter size={14} className="text-blue-600" />
                  <span className="text-xs font-bold text-gray-500">筛选动态:</span>
                </div>
                
                {/* 国家筛选 */}
                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-400">目的地:</span>
                  <div className="flex items-center gap-1">
                    {FILTER_COUNTRIES.slice(0, 4).map(c => (
                      <button 
                        key={c.value}
                        onClick={() => setSelectedCountry(c.value)}
                        className={cn(
                          "px-3 py-1 rounded-full text-xs font-medium transition-all",
                          selectedCountry === c.value ? "bg-blue-600 text-white shadow-md" : "text-gray-500 hover:bg-gray-100"
                        )}
                      >
                        {c.label}
                      </button>
                    ))}
                    <select 
                      value={FILTER_COUNTRIES.find(c => c.value === selectedCountry) ? selectedCountry : 'ALL'}
                      onChange={(e) => setSelectedCountry(e.target.value)}
                      className="text-xs text-gray-500 bg-transparent focus:outline-none cursor-pointer"
                    >
                      <option value="ALL">更多国家</option>
                      {FILTER_COUNTRIES.slice(4).map(c => (
                        <option key={c.value} value={c.value}>{c.label}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="w-px h-4 bg-gray-200" />

                {/* 品类筛选 */}
                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-400">商品品类:</span>
                  <div className="flex gap-1">
                    {FILTER_CATEGORIES.map(cat => (
                      <button 
                        key={cat.value}
                        onClick={() => setSelectedCategory(cat.value)}
                        className={cn(
                          "px-3 py-1 rounded-full text-xs font-medium transition-all flex items-center gap-1",
                          selectedCategory === cat.value ? "bg-orange-500 text-white shadow-md" : "text-gray-500 hover:bg-gray-100"
                        )}
                      >
                        {cat.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              {/* 第1-2列：商品 */}
              <div className="lg:col-span-2 space-y-6">
                <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                  <h3 className="text-sm font-black flex items-center gap-2">
                    <span className="w-1.5 h-4 bg-orange-500 rounded-full" />
                    大家都在买
                  </h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 min-h-[400px] content-start">
                  {productsLoading ? (
                    [1,2,3,4,5,6].map(i => <div key={i} className="aspect-square bg-white animate-pulse rounded-xl" />)
                  ) : filteredProducts.length > 0 ? (
                    filteredProducts.slice(0, displayLimit).map(p => <ProductCard key={p.id} product={p} />)
                  ) : (
                    <div className="col-span-2 flex flex-col items-center justify-center py-12 text-gray-400">
                      <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-2">
                        <Filter size={16} />
                      </div>
                      <p className="text-xs">暂无符合条件的商品</p>
                    </div>
                  )}
                </div>
              </div>

              {/* 第3-4列：包裹物流 */}
              <div className="lg:col-span-2 space-y-6">
                <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                  <h3 className="text-sm font-black flex items-center gap-2">
                    <span className="w-1.5 h-4 bg-blue-500 rounded-full" />
                    大家都在寄
                  </h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 min-h-[400px] content-start">
                  {shippingLoading ? (
                    [1,2,3,4,5,6].map(i => <div key={i} className="h-32 bg-white animate-pulse rounded-xl" />)
                  ) : filteredLines.length > 0 ? (
                    filteredLines.concat(filteredLines).slice(0, displayLimit).map((line, idx) => <ShippingCard key={`${line.id}-${idx}`} line={line} />)
                  ) : (
                    <div className="col-span-2 flex flex-col items-center justify-center py-12 text-gray-400">
                      <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-2">
                        <Box size={16} />
                      </div>
                      <p className="text-xs">暂无该国家的实时物流</p>
                    </div>
                  )}
                </div>
              </div>

              {/* 第5列：大家都在晒 */}
              <div className="lg:col-span-1 flex flex-col h-full">
                <div className="flex items-center justify-between border-b border-gray-100 pb-3 mb-6">
                  <h3 className="text-sm font-black flex items-center gap-2">
                    <span className="w-1.5 h-4 bg-green-500 rounded-full" />
                    大家都在晒
                  </h3>
                </div>
                
                {/* 模拟例图中的背景色容器 */}
                <div className="flex-1 bg-[#fffbe6]/50 rounded-[32px] p-2 relative">
                  {/* 装性侧边条 */}
                  <div className="absolute left-0 top-12 bottom-12 w-1.5 flex flex-col rounded-r-full overflow-hidden">
                    <div className="flex-1 bg-[#2D9CDB]" />
                    <div className="flex-[0.5] bg-[#FFD21E]" />
                  </div>
                  
                  <div className="space-y-5 pl-4 px-1 py-4 text-left">
                    <div className="mb-4">
                      <CommunityEntryCard />
                      <div className="mt-6 border-b border-dashed border-orange-200/50" />
                    </div>
                    {reviewsLoading ? (
                      <div className="h-[600px] bg-white/30 animate-pulse rounded-3xl" />
                    ) : filteredReviews.length > 0 ? (
                      <ReviewCarousel reviews={filteredReviews} />
                    ) : (
                      <div className="flex flex-col items-center justify-center py-12 text-gray-400">
                        <p className="text-xs">该筛选条件下暂无评价</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            
            {/* 加载更多按钮 */}
            {hasMore && (
              <div className="mt-12 flex justify-center">
                <button 
                  onClick={() => setDisplayLimit(prev => prev + 6)}
                  className="group px-10 py-3.5 bg-white border border-gray-200 rounded-full text-sm font-bold text-gray-600 hover:text-blue-600 hover:border-blue-600 hover:shadow-xl transition-all active:scale-95 flex items-center gap-2"
                >
                  查看更多
                  <ChevronDown size={16} className="group-hover:translate-y-1 transition-transform" />
                </button>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};
