import React from 'react';
import { 
  ChevronRight, 
  Send, 
  Search, 
  CheckCircle2, 
  Gift, 
  Image as ImageIcon,
  MessageSquare,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  CloudLightning
} from 'lucide-react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';

export const ReviewRewards: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#e8f4ff]">
      <Header />
      
      <main className="pt-20">
        {/* Banner Section */}
        <div className="relative h-[400px] md:h-[500px] bg-[#68cdff] flex items-center justify-center overflow-hidden">
          {/* Background Illustrations (Simulated) */}
          <div className="absolute top-10 left-10 text-white/20 animate-bounce">
            <CloudLightning size={120} />
          </div>
          <div className="absolute bottom-10 right-10 text-white/20 animate-pulse">
            <Gift size={150} />
          </div>

          <div className="relative z-10 text-center text-white px-4 max-w-4xl">
            <div className="inline-block bg-yellow-400 text-red-600 font-black text-6xl md:text-8xl px-8 py-4 rounded-full shadow-2xl mb-8 transform -rotate-3 border-4 border-white">
              $100
            </div>
            <h1 className="text-4xl md:text-6xl font-black mb-6 drop-shadow-lg">
              晒单最高赢 $100
            </h1>
            <p className="text-lg md:text-xl font-medium opacity-90 leading-relaxed bg-black/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
              每一次购物都是一段独特的旅程，我们十分期待听到你的故事！无论是你精心挑选的商品，还是购物过程中的小惊喜，快和我们分享你的购物心得吧！你不仅可以让更多人看到你的好物推荐，还有机会获得最高100美金的奖励哦！赶紧行动，晒出你的购物体验，让大家一起感受购物的乐趣吧！
            </p>
          </div>
        </div>

        {/* Activity Flow */}
        <section className="max-w-6xl mx-auto px-4 -mt-16 relative z-20">
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-blue-100">
            <div className="flex items-center gap-3 mb-12">
              <div className="w-2 h-8 bg-blue-600 rounded-full" />
              <h2 className="text-3xl font-black text-gray-900">活动流程</h2>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
              {[
                { label: 'Superbuy 注册下单', icon: <Gift className="text-blue-500" /> },
                { label: '分享购物体验 / 包裹晒单', icon: <Send className="text-blue-500" /> },
                { label: '申请奖励', icon: <Search className="text-blue-500" /> },
                { label: 'Superbuy 审核', icon: <CheckCircle2 className="text-blue-500" /> },
                { label: '发放奖金', icon: <CloudLightning className="text-blue-500" /> },
              ].map((step, i) => (
                <div key={i} className="flex flex-col items-center group relative">
                  <div className="w-20 h-20 rounded-full bg-blue-50 flex items-center justify-center mb-4 border-2 border-transparent group-hover:border-blue-400 group-hover:bg-white group-hover:shadow-lg transition-all duration-300">
                    {React.cloneElement(step.icon as React.ReactElement, { size: 32 })}
                  </div>
                  <span className="text-sm font-bold text-gray-700 text-center">{step.label}</span>
                  {i < 4 && (
                    <ChevronRight className="hidden md:block absolute -right-6 top-8 text-gray-200" size={24} />
                  )}
                </div>
              ))}
            </div>
            
            <div className="mt-12 flex justify-center gap-6">
              <button className="bg-blue-600 text-white px-10 py-4 rounded-full font-bold shadow-lg hover:bg-blue-700 hover:-translate-y-1 transition-all">
                申请奖励
              </button>
              <button className="bg-white text-blue-600 border-2 border-blue-600 px-10 py-4 rounded-full font-bold hover:bg-blue-50 transition-all">
                查看奖励
              </button>
            </div>
          </div>
        </section>

        {/* Posting Rules */}
        <section className="max-w-6xl mx-auto px-4 mt-20">
          <div className="bg-[#ffdada] rounded-3xl p-12 border-4 border-[#ffb0b0] relative overflow-hidden">
            <div className="flex items-center gap-3 mb-12">
              <div className="w-2 h-8 bg-red-600 rounded-full" />
              <h2 className="text-3xl font-black text-gray-900">晒单规则</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-16">
              <div className="bg-white rounded-3xl p-8 shadow-sm">
                <div className="flex gap-4 mb-8">
                  <div className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center font-black text-xl shrink-0">1</div>
                  <div>
                    <h3 className="text-xl font-black mb-2 italic underline underline-offset-4 decoration-yellow-400">上传影像或图文</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      • 拍摄包裹视频(10秒以上) 或 图片(3张以上)<br/>
                      • 内容包含购物截图、包裹实物/物流轨迹图等
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 mb-8">
                  <div className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center font-black text-xl shrink-0">2</div>
                  <div>
                    <h3 className="text-xl font-black mb-2 italic underline underline-offset-4 decoration-yellow-400">正文</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      • 谈谈Superbuy的购物体验(50字以上)<br/>
                      • @我们并带tag #Superbuy Haul<br/>
                      • 包含你的邀请码
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center font-black text-xl shrink-0">3</div>
                  <div>
                    <h3 className="text-xl font-black mb-2 italic underline underline-offset-4 decoration-yellow-400">发布 & 提交</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      发布成功后复制分享链接，并前往Superbuy此活动页面提交奖励申请单
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-center">
                <h3 className="text-2xl font-black mb-8 text-red-600">社媒发布渠道参考</h3>
                <div className="grid grid-cols-4 gap-6">
                  {[
                    { icon: <Instagram className="text-pink-500" />, label: 'Instagram' },
                    { icon: <Facebook className="text-blue-600" />, label: 'Facebook' },
                    { icon: <Twitter className="text-sky-400" />, label: 'X' },
                    { icon: <Youtube className="text-red-600" />, label: 'Youtube' },
                    { icon: <MessageSquare className="text-green-500" />, label: 'WeChat' },
                    { icon: <ImageIcon className="text-orange-500" />, label: 'LittleRedBook' },
                    { icon: <Send className="text-blue-400" />, label: 'Telegram' },
                  ].map((social, i) => (
                    <div key={i} className="flex flex-col items-center gap-2 group cursor-pointer">
                      <div className="w-14 h-14 rounded-2xl bg-white shadow-md flex items-center justify-center group-hover:scale-110 group-hover:-translate-y-1 transition-all">
                        {React.cloneElement(social.icon as React.ReactElement, { size: 28 })}
                      </div>
                      <span className="text-[10px] font-bold text-gray-500">{social.label}</span>
                    </div>
                  ))}
                  <div className="flex flex-col items-center gap-2 group cursor-pointer">
                    <div className="w-14 h-14 rounded-2xl bg-white/50 border-2 border-dashed border-red-300 flex items-center justify-center text-red-400 font-bold text-xs group-hover:bg-white transition-all">
                      其他
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Excellent Showcase */}
        <section className="max-w-6xl mx-auto px-4 mt-20">
          <div className="bg-[#fff9e6] rounded-3xl p-12 border-4 border-[#ffedb3]">
            <div className="flex items-center gap-3 mb-12">
              <div className="w-2 h-8 bg-yellow-600 rounded-full" />
              <h2 className="text-3xl font-black text-gray-900">优秀晒单案例</h2>
            </div>
            
            <div className="grid md:grid-cols-4 gap-6">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <div key={i} className="bg-white rounded-2xl shadow-sm border border-yellow-100 overflow-hidden group cursor-pointer">
                  <div className="aspect-[4/5] bg-gray-100 overflow-hidden relative">
                    <img 
                      src={`https://picsum.photos/seed/review${i}/400/500`} 
                      alt="Review" 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Search className="text-white" />
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="text-xs font-black text-gray-900 mb-1">S******* C*******</div>
                    <p className="text-[10px] text-gray-500 line-clamp-2 italic">
                      "I love Superbuy! The shipping was so fast and everything was packed perfectly..."
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Reward List */}
        <section className="max-w-6xl mx-auto px-4 mt-20 mb-32">
          <div className="bg-white rounded-3xl shadow-xl p-12 border border-blue-50">
            <div className="flex items-center gap-3 mb-12">
              <div className="w-2 h-8 bg-blue-600 rounded-full" />
              <h2 className="text-3xl font-black text-gray-900">活动奖励及发放</h2>
            </div>
            
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <div className="p-6 bg-blue-50 rounded-2xl border border-blue-100">
                    <h3 className="text-lg font-black text-blue-900 mb-4 flex items-center gap-2">
                       奖金审核标准
                    </h3>
                    <ul className="space-y-3 text-sm text-gray-600">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 shrink-0" />
                        内容真实性 (推荐程度、引导性等)
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 shrink-0" />
                        信息完整度 (物流轨迹、包裹细节、省钱攻略)
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 shrink-0" />
                        分享互动热度 (浏览量/点赞/评论/转发)
                      </li>
                    </ul>
                    <div className="mt-4 text-red-600 font-bold text-sm">
                      单项奖金最高可达 $100 美金奖励！
                    </div>
                  </div>
                </div>

                <div className="relative overflow-hidden rounded-3xl">
                  <img 
                    src="https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&q=80&w=600" 
                    alt="Money" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/60 to-transparent flex items-end p-8">
                    <p className="text-white font-black text-xl italic tracking-tighter">最高奖励 $100</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                <h3 className="text-lg font-black text-gray-900 mb-6">发放须知</h3>
                <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
                  <div className="flex gap-4">
                    <div className="w-6 h-6 rounded bg-blue-600 text-white flex items-center justify-center font-bold text-xs shrink-0">1</div>
                    <p>奖励审核成功后，系统会发放奖励，可在您的余额账户中查看。</p>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-6 h-6 rounded bg-blue-600 text-white flex items-center justify-center font-bold text-xs shrink-0">2</div>
                    <p>发放时间：奖励申请通过后，正常情况下会在每月的第一个工作日后的3个工作日内发放到账。</p>
                  </div>
                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6 italic">
                    注意：参与晒单的账号需在过去6个月内有国际包裹订单。每位用户每月最多申请及获得奖励2次。
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};
