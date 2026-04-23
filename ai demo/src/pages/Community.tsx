import React from 'react';
import { 
  Search, 
  ChevronRight, 
  MessageCircle, 
  Eye, 
  TrendingUp, 
  Youtube, 
  Twitter, 
  Facebook, 
  Instagram, 
  MessageSquare,
  ChevronDown
} from 'lucide-react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { MOCK_COMMUNITY_POSTS } from '../mocks';
import { cn } from '../utils';

const CATEGORIES = [
  { label: '全部', value: 'ALL' },
  { label: '服务建议', value: 'SERVICE' },
  { label: '物流资讯', value: 'LOGISTICS' },
  { label: '代购指南', value: 'GUIDE' },
  { label: '常见问题', value: 'FAQ' },
];

export const Community: React.FC = () => {
  const [activeCategory, setActiveCategory] = React.useState('ALL');
  const [sortBy, setSortBy] = React.useState('default');

  const filteredPosts = MOCK_COMMUNITY_POSTS.filter(post => 
    activeCategory === 'ALL' || post.category === activeCategory
  );

  return (
    <div className="min-h-screen bg-[#f8f9fa] pt-[150px]">
      <Header variant="standard" theme="light" />
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* BBS社区顶部 Banner */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-8">
          <div className="md:col-span-8">
             <div className="relative rounded-xl overflow-hidden bg-white shadow-sm border border-cyan-500/20 h-[240px]">
                <img 
                  src="https://picsum.photos/seed/community-hero/1200/400" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex flex-col justify-center p-10 text-white">
                   <h2 className="text-3xl font-black mb-2 italic tracking-tight">史上最新新手指引</h2>
                   <p className="text-sm opacity-90 mb-4">开启您的全球代购新视角</p>
                   <button className="w-fit px-6 py-2 bg-blue-600 rounded-lg text-sm font-bold hover:bg-blue-700 transition-colors">
                     点击查看
                   </button>
                </div>
             </div>
          </div>
          <div className="md:col-span-4 grid grid-cols-1 gap-4">
             <div className="bg-white rounded-xl shadow-sm border border-cyan-500/20 p-4 flex items-center justify-between group cursor-pointer hover:border-cyan-400">
                <div className="flex items-center gap-3">
                   <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600">
                      <TrendingUp size={24} />
                   </div>
                   <div>
                      <h3 className="font-bold text-sm">物流时效看板</h3>
                      <p className="text-xs text-gray-400">实时更新线路动态</p>
                   </div>
                </div>
                <ChevronRight size={18} className="text-gray-300 group-hover:text-cyan-600" />
             </div>
             <div className="bg-white rounded-xl shadow-sm border border-cyan-500/20 overflow-hidden relative">
                <img src="https://picsum.photos/seed/subbanner/400/200" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/40 flex flex-col justify-center p-4">
                   <span className="text-xs font-bold text-blue-400 uppercase">Superbuy</span>
                   <h3 className="text-white font-black text-lg italic">精品团购入口</h3>
                </div>
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* 左侧主要内容 */}
          <div className="lg:col-span-8 space-y-6">
            {/* 顶部分类与搜索 */}
            <div className="bg-white rounded-xl shadow-sm p-1">
               <div className="flex items-center justify-between flex-wrap gap-4 px-4 py-2">
                  <div className="flex items-center gap-6">
                    {CATEGORIES.map(cat => (
                      <button 
                        key={cat.value}
                        onClick={() => setActiveCategory(cat.value)}
                        className={cn(
                          "py-3 text-sm font-bold relative transition-colors whitespace-nowrap",
                          activeCategory === cat.value ? "text-blue-600" : "text-gray-500 hover:text-gray-900"
                        )}
                      >
                        {cat.label}
                        {activeCategory === cat.value && (
                          <div className="absolute bottom-0 left-0 right-0 h-1 bg-blue-600 rounded-full" />
                        )}
                      </button>
                    ))}
                  </div>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                    <input 
                      type="text" 
                      placeholder="搜索感兴趣的话题" 
                      className="pl-10 pr-4 py-2 bg-gray-50 border border-transparent focus:border-blue-200 focus:bg-white rounded-lg text-sm w-[200px] transition-all outline-none"
                    />
                  </div>
               </div>
            </div>

            {/* 排序筛选 */}
            <div className="flex items-center justify-between text-xs text-gray-500 px-2 font-medium">
               <div className="flex items-center gap-4">
                  <button onClick={() => setSortBy('default')} className={cn("hover:text-cyan-600 transition-colors", sortBy === 'default' && "text-cyan-600 font-bold")}>默认</button>
                  <button onClick={() => setSortBy('views')} className={cn("hover:text-cyan-600 transition-colors", sortBy === 'views' && "text-cyan-600 font-bold")}>阅读数</button>
                  <button onClick={() => setSortBy('likes')} className={cn("hover:text-cyan-600 transition-colors", sortBy === 'likes' && "text-cyan-600 font-bold")}>收藏量</button>
               </div>
               <div className="flex items-center gap-1 cursor-pointer hover:text-cyan-600">
                  <span>最后一周</span>
                  <ChevronDown size={14} />
               </div>
            </div>

            {/* 帖子列表 */}
            <div className="space-y-1">
               {filteredPosts.map(post => (
                 <div key={post.id} className="bg-white rounded-xl p-6 flex gap-6 hover:shadow-md transition-shadow cursor-pointer group">
                    <div className="w-[180px] h-[120px] bg-gray-50 rounded-lg overflow-hidden flex-shrink-0">
                       {post.image ? (
                          <img src={post.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                       ) : (
                          <div className="w-full h-full flex items-center justify-center text-gray-200 bg-gray-100">
                            <span className="text-4xl font-black italic select-none opacity-20">S</span>
                          </div>
                       )}
                    </div>
                    <div className="flex-1 flex flex-col justify-between py-1">
                       <div className="space-y-2">
                          <h3 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">{post.title}</h3>
                          <p className="text-sm text-gray-500 line-clamp-2 leading-relaxed">{post.summary}</p>
                       </div>
                       <div className="flex items-center justify-between mt-4">
                          <div className="flex items-center gap-3">
                             <img src={post.authorAvatar} className="w-6 h-6 rounded-full ring-1 ring-gray-100" />
                             <div className="flex items-center gap-2 text-xs">
                                <span className="font-bold text-gray-700">{post.author}</span>
                                <span className="text-gray-300">|</span>
                                <span className="text-gray-400 tracking-tighter">{post.date}</span>
                             </div>
                          </div>
                          <div className="flex items-center gap-4 text-gray-400">
                             <div className="flex items-center gap-1">
                                <Eye size={14} />
                                <span className="text-[11px] font-medium">{post.views}</span>
                             </div>
                             <div className="flex items-center gap-1">
                                <MessageCircle size={14} />
                                <span className="text-[11px] font-medium">{post.likes}</span>
                             </div>
                          </div>
                       </div>
                    </div>
                 </div>
               ))}
               <div className="py-10 text-center">
                  <button className="text-sm font-bold text-gray-400 hover:text-blue-600 transition-colors">
                    更多内容...
                  </button>
               </div>
            </div>
          </div>

          {/* 右侧侧边栏 */}
          <div className="lg:col-span-4 space-y-6">
             {/* 公告板块 */}
             <div className="bg-white rounded-xl shadow-sm border border-cyan-500/20 p-6 space-y-4">
                <div className="flex items-center justify-between border-b border-cyan-100 pb-3">
                   <h3 className="font-black text-sm flex items-center gap-2">
                     <div className="w-1.5 h-4 bg-cyan-600 rounded-full" />
                     公告
                   </h3>
                   <button className="text-[10px] text-gray-400 hover:text-cyan-600">更多 {'>'}</button>
                </div>
                <div className="space-y-3">
                   <div className="text-xs space-y-1 group cursor-pointer">
                      <p className="text-red-500 font-bold line-clamp-1 group-hover:underline">重要通知：英国线路关税政策调整通知</p>
                   </div>
                   <div className="text-xs space-y-1 group cursor-pointer">
                      <p className="text-gray-700 font-medium line-clamp-1 group-hover:text-cyan-600 transition-colors">兔税空运专线（普货）& 经济空运专线线...</p>
                   </div>
                   <div className="text-xs space-y-1 group cursor-pointer">
                      <p className="text-gray-700 font-medium line-clamp-1 group-hover:text-cyan-600 transition-colors">欧洲DHL优先线路时效延误通知</p>
                   </div>
                   <div className="text-xs space-y-1 group cursor-pointer">
                      <p className="text-gray-700 font-medium line-clamp-1 group-hover:text-cyan-600 transition-colors">欧欧极速空运专线线 & 欧欧德邮线...</p>
                   </div>
                </div>
             </div>

             {/* 社交链接 */}
             <div className="bg-white rounded-xl shadow-sm border border-cyan-500/20 p-6">
                <div className="grid grid-cols-4 gap-4">
                   <div className="flex flex-col items-center gap-1 group cursor-pointer">
                      <div className="w-10 h-10 bg-red-50 text-red-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm">
                         <Youtube size={20} />
                      </div>
                   </div>
                   <div className="flex flex-col items-center gap-1 group cursor-pointer">
                      <div className="w-10 h-10 bg-blue-50 text-blue-400 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm">
                         <Twitter size={20} />
                      </div>
                   </div>
                   <div className="flex flex-col items-center gap-1 group cursor-pointer">
                      <div className="w-10 h-10 bg-blue-600 text-white rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm">
                         <Facebook size={20} />
                      </div>
                   </div>
                   <div className="flex flex-col items-center gap-1 group cursor-pointer">
                      <div className="w-10 h-10 bg-pink-50 text-pink-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm">
                         <Instagram size={20} />
                      </div>
                   </div>
                </div>
                <div className="mt-6 p-4 bg-green-50 rounded-xl flex items-center gap-3">
                   <MessageSquare className="text-green-600" size={20} />
                   <div className="text-xs">
                      <p className="font-bold text-green-800">关注Suberbuy微博</p>
                      <p className="text-green-600/70">独家优惠抢先知！</p>
                   </div>
                </div>
             </div>

             {/* 热门文章 */}
             <div className="bg-white rounded-xl shadow-sm border border-cyan-500/20 p-6 space-y-4">
                <div className="flex items-center justify-between border-b border-cyan-100 pb-3">
                   <h3 className="font-black text-sm flex items-center gap-2">
                     <div className="w-1.5 h-4 bg-orange-500 rounded-full" />
                     热门文章
                   </h3>
                </div>
                <div className="space-y-4">
                   {[1, 2, 3].map(i => (
                     <div key={i} className="flex gap-3 group cursor-pointer">
                        <div className="w-4 h-4 bg-gray-100 flex items-center justify-center text-[10px] font-bold text-gray-400 rounded group-hover:bg-cyan-500 group-hover:text-white transition-colors">
                          {i}
                        </div>
                        <p className="flex-1 text-xs text-gray-600 font-medium group-hover:text-cyan-600 transition-colors line-clamp-1">代购及时运送商品免罚费声明，为了保障您的购买体验...</p>
                     </div>
                   ))}
                </div>
             </div>

             {/* 热门分类 */}
             <div className="bg-white rounded-xl shadow-sm border border-cyan-500/20 p-6 space-y-4">
                <div className="flex items-center justify-between border-b border-cyan-100 pb-3">
                   <h3 className="font-black text-sm flex items-center gap-2">
                     <div className="w-1.5 h-4 bg-purple-500 rounded-full" />
                     热门分类
                   </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                   {['服务体验', '物流寄送', '代购指南', '常见问题'].map(tag => (
                     <span key={tag} className="px-3 py-1 bg-gray-50 border border-cyan-100 rounded-lg text-xs text-gray-500 hover:text-cyan-600 hover:border-cyan-200 cursor-pointer transition-all">
                       {tag}
                     </span>
                   ))}
                </div>
             </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};
