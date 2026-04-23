import React from 'react';
import { 
  Box, 
  ChevronRight, 
  Star, 
  ThumbsUp, 
  MessageSquare, 
  Share2, 
  Bookmark, 
  Eye, 
  ExternalLink,
  ChevronDown,
  Gift
} from 'lucide-react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';

export const ShoeBoxService: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#f0f2f5]">
      <Header />
      
      <main className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Main Content Area */}
          <div className="lg:col-span-3 space-y-6">
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              {/* Post Header */}
              <div className="p-8 border-b border-gray-100">
                <div className="flex items-center gap-2 text-blue-600 text-sm font-bold mb-4">
                  <Box size={18} />
                  <span>网站公告 / 超值服务</span>
                </div>
                <h1 className="text-3xl font-black text-gray-900 mb-6 leading-tight">
                  【超值服务】折叠鞋盒，轻松省运费！ ✨
                </h1>
                <div className="flex items-center justify-between text-gray-400 text-sm">
                  <div className="flex items-center gap-6">
                    <span className="flex items-center gap-1.5"><Eye size={16} /> 1653</span>
                    <span className="flex items-center gap-1.5"><MessageSquare size={16} /> 9</span>
                    <span className="flex items-center gap-1.5"><ThumbsUp size={16} /> 9</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-blue-500" />
                    <span className="text-gray-600 font-bold">小仙女官方</span>
                    <span>发布于 2024-03-06</span>
                  </div>
                </div>
              </div>

              {/* Post Body */}
              <div className="p-8 prose prose-blue max-w-none">
                <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 mb-8 font-medium text-blue-900 leading-relaxed">
                  想让你的包裹更轻便、运费更划算？那快来试一试 Superbuy 全新上线的 <span className="font-black underline decoration-blue-400">折叠鞋盒服务</span> 吧！
                  现在只需 <span className="text-red-600 font-black text-xl">CNY ¥ 5 / 包裹</span>，即可享受专业折叠鞋盒服务，帮你大幅缩减包裹体积，轻松节省国际运费！
                </div>

                <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
                  <Star className="text-yellow-400 fill-current" />
                  折叠鞋盒服务亮点：
                </h2>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold shrink-0">1</div>
                    <p className="text-gray-700">
                      <strong>空间节省高达 99%:</strong> 专业仓储团队将鞋盒拆解并“平铺”堆放。包裹更矮更小了，国际运费自然更低了！
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold shrink-0">2</div>
                    <p className="text-gray-700">
                      <strong>专业操作:</strong> 仓库团队将细心拆解并摊平折叠鞋盒，确保安全无损。
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold shrink-0">3</div>
                    <p className="text-gray-700">
                      <strong>超低价格:</strong> 仅需 ¥ 5/包裹，节省下来的国际空运费用可不止这点钱！
                    </p>
                  </div>
                </div>

                <div className="bg-yellow-50 p-6 rounded-2xl border-l-4 border-yellow-400 mb-8">
                  <div className="font-bold text-yellow-800 mb-2">💡 小贴士：</div>
                  <p className="text-sm text-yellow-700 opacity-90">
                    包裹过程中鞋盒可能会产生轻微折痕，请知悉。如需送人请慎重选择。如鞋盒无法折叠，我们将全额退还服务费。
                  </p>
                </div>

                <h2 className="text-xl font-black text-gray-900 mb-6">📸 效果图对比：</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                  <div className="space-y-2">
                    <div className="text-center font-bold text-gray-500 bg-gray-100 py-2 rounded-t-xl">折叠前</div>
                    <img 
                      src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=400" 
                      className="w-full aspect-square object-contain bg-white rounded-b-xl border" 
                      alt="Before"
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="text-center font-bold text-blue-500 bg-blue-50 py-2 rounded-t-xl">折叠后</div>
                    <img 
                      src="https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=400" 
                      className="w-full aspect-square object-cover grayscale brightness-110 rounded-b-xl border" 
                      alt="After"
                    />
                  </div>
                </div>

                <h2 className="text-xl font-black text-gray-900 mb-6">🚀 如何操作：</h2>
                <div className="bg-gray-50 p-8 rounded-3xl border space-y-12">
                  <div className="space-y-4">
                    <p className="font-bold text-gray-800 flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-gray-900 text-white flex items-center justify-center text-xs">1</span>
                      进入【我的仓库】，勾选需要发出的鞋子商品。
                    </p>
                    <div className="border border-gray-200 rounded-xl overflow-hidden shadow-inner">
                      <img src="https://picsum.photos/seed/step1/800/400" alt="Guide Step 1" className="w-full" />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <p className="font-bold text-gray-800 flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-gray-900 text-white flex items-center justify-center text-xs">2</span>
                      在提单页面的【增值服务】中，找到并勾选【折叠鞋盒服务】。
                    </p>
                    <div className="border border-gray-200 rounded-xl overflow-hidden shadow-inner">
                      <img src="https://picsum.photos/seed/step2/800/400" alt="Guide Step 2" className="w-full" />
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-center py-12 gap-4">
                  <button className="flex flex-col items-center gap-2 group">
                    <div className="w-16 h-16 rounded-full bg-white border shadow-md flex items-center justify-center group-hover:shadow-lg transition-all text-blue-500">
                      <ThumbsUp size={24} />
                    </div>
                    <span className="text-xs font-bold text-gray-500">点赞 (9)</span>
                  </button>
                  <button className="flex flex-col items-center gap-2 group">
                    <div className="w-16 h-16 rounded-full bg-white border shadow-md flex items-center justify-center group-hover:shadow-lg transition-all text-yellow-500">
                      <Bookmark size={24} />
                    </div>
                    <span className="text-xs font-bold text-gray-500">收藏</span>
                  </button>
                  <button className="flex flex-col items-center gap-2 group">
                    <div className="w-16 h-16 rounded-full bg-white border shadow-md flex items-center justify-center group-hover:shadow-lg transition-all text-green-500">
                      <Share2 size={24} />
                    </div>
                    <span className="text-xs font-bold text-gray-500">分享</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Comments List */}
            <div className="bg-white rounded-xl shadow-sm p-8">
              <h2 className="text-xl font-black text-gray-900 mb-8 border-b pb-4">用户回帖 (3)</h2>
              <div className="space-y-8">
                {[
                  { user: 'B******', content: '折叠之后的体积确实小了很多，很省钱！', time: '2024-03-07 10:25' },
                  { user: 'k*******', content: '这个服务太实用了，特别适合买很多鞋又不需要原包装完美的。', time: '2024-03-10 14:12' },
                  { user: 'W******', content: '好评，仓库操作很细心，鞋盒只是变扁了但没破损。', time: '2024-03-15 09:44' },
                ].map((comment, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-400">
                      U
                    </div>
                    <div className="flex-1 border-b border-gray-50 pb-6">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-bold text-gray-800">{comment.user}</span>
                        <span className="text-xs text-gray-400">{comment.time}</span>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">{comment.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar Area */}
          <div className="space-y-6">
            {/* Author Info */}
            <div className="bg-white rounded-xl shadow-sm p-6 text-center">
              <div className="w-20 h-20 rounded-full bg-blue-100 mx-auto mb-4 flex items-center justify-center border-4 border-blue-50">
                <Box size={32} className="text-blue-500" />
              </div>
              <h3 className="font-black text-gray-900 mb-1">小仙女官方</h3>
              <p className="text-xs text-blue-600 bg-blue-50 py-1 rounded-full px-4 inline-block mb-4">官方认证认证</p>
              
              <div className="grid grid-cols-2 gap-4 border-t pt-4">
                <div>
                  <div className="text-lg font-black">4187</div>
                  <div className="text-[10px] text-gray-400">主题</div>
                </div>
                <div>
                  <div className="text-lg font-black">9.8w</div>
                  <div className="text-[10px] text-gray-400">好评</div>
                </div>
              </div>
            </div>

            {/* Other Trending Posts */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="p-4 bg-gray-50 border-b font-bold flex items-center justify-between">
                <span>其他热门资讯</span>
                <ChevronDown size={14} className="text-gray-400" />
              </div>
              <div className="divide-y">
                {[
                  '欧洲及美国拼邮运费下调！',
                  '【物流实时播报】欧/英各线路时效预测',
                  '关于欧洲线、美国线、澳洲线路包裹重量调整公告',
                ].map((post, i) => (
                  <a key={i} href="#" className="p-4 block text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50/50 transition-all font-medium">
                    {post}
                  </a>
                ))}
              </div>
            </div>

            {/* Promotion Cards */}
            <div className="space-y-4">
              <div className="bg-gradient-to-br from-indigo-600 to-blue-500 rounded-2xl p-6 text-white overflow-hidden relative group cursor-pointer">
                <h4 className="text-lg font-black mb-2 relative z-10">次元潮流新品</h4>
                <p className="text-xs opacity-80 mb-4 relative z-10">更多潮玩情报一触即发</p>
                <div className="bg-white/20 px-4 py-1.5 rounded-full text-[10px] font-bold w-fit relative z-10 backdrop-blur-sm group-hover:bg-white/30 transition-all">
                  立即查看
                </div>
                <div className="absolute right-[-10%] bottom-[-10%] opacity-20 transform rotate-12 group-hover:scale-110 transition-transform">
                  <Star size={100} />
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl p-6 text-white overflow-hidden relative group cursor-pointer">
                <h4 className="text-lg font-black mb-2 relative z-10">晒单分享赢 $100</h4>
                <p className="text-xs opacity-80 mb-4 relative z-10">每一个故事都值得被分享</p>
                <div className="bg-white/20 px-4 py-1.5 rounded-full text-[10px] font-bold w-fit relative z-10 backdrop-blur-sm group-hover:bg-white/30 transition-all">
                  参与活动
                </div>
                <div className="absolute right-[-10%] bottom-[-10%] opacity-20 transform -rotate-12 group-hover:scale-110 transition-transform">
                  <Gift size={100} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};
