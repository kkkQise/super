import React from 'react';
import { motion } from 'motion/react';
import { 
  Search, 
  ExternalLink, 
  ChevronRight, 
  Info, 
  ShoppingCart, 
  Wallet, 
  Truck, 
  ShieldCheck, 
  PackageCheck,
  Star,
  CheckCircle2
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const Tutorial: React.FC = () => {
  const navigate = useNavigate();
  const [activeGroup, setActiveGroup] = React.useState('TOP_3');

  const platformGroups = [
    { 
      id: 'TOP_3', 
      label: '中国Top 3电商平台', 
      platforms: [
        { name: '淘宝', icon: '淘', color: 'bg-[#FF4200]' },
        { name: '天猫', icon: '天', color: 'bg-[#FF0036]' },
        { name: '京东', icon: 'J', color: 'bg-[#E1251B]' },
      ] 
    },
    { 
      id: 'WEIDIAN', 
      label: '新势力平台', 
      platforms: [
        { name: '微店', icon: '微', color: 'bg-[#E01B2F]' },
      ] 
    },
    { 
      id: 'SECOND_HAND', 
      label: '中国二手电商平台', 
      platforms: [
        { name: '拍拍', icon: '拍', color: 'bg-[#2D9CDB]' },
        { name: '闲鱼', icon: '闲', color: 'bg-[#FFE200]' },
        { name: '转转', icon: '转', color: 'bg-[#FF4D4F]' },
      ] 
    },
    { 
      id: 'OTHERS', 
      label: '其他中国电商平台', 
      platforms: [
        { name: '唯品会', icon: '唯', color: 'bg-[#FF008D]' },
        { name: '有赞', icon: '有', color: 'bg-[#EC3D3D]' },
      ] 
    },
  ];

  const tutorialAssets: Record<string, any> = {
    TOP_3: {
      step1Img1: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&q=80&w=800',
      step1Img2: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
      tag: '常用平台',
      desc: '在淘宝/天猫/京东等平台找到想要购买的商品，复制链接地址。'
    },
    WEIDIAN: {
      step1Img1: 'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&q=80&w=800',
      step1Img2: 'https://images.unsplash.com/photo-1556656793-062ff98782ea?auto=format&fit=crop&q=80&w=800',
      tag: '微店专区',
      desc: '在微店APP或小程序挑选心仪商品，复制商品分享链接或口令。'
    },
    SECOND_HAND: {
      step1Img1: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&q=80&w=800',
      step1Img2: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800',
      tag: '二手交易',
      desc: '在闲鱼/转转挑选商品。注意核对卖家信用及实物细节图，谨防被骗。'
    },
    OTHERS: {
      step1Img1: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800',
      step1Img2: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=800',
      tag: '特卖/小店',
      desc: '在唯品会或有赞商城选购商品，粘贴商品详情页面的完整链接。'
    }
  };

  const currentTutorial = tutorialAssets[activeGroup];

  return (
    <div className="min-h-screen bg-[#F7F8FA] font-sans text-[#333]">
      {/* 顶部通栏 - 搜索与欢迎 */}
      <div 
        className="h-[300px] bg-cover bg-center relative flex flex-col items-center justify-center text-white"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=1600)' }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 text-center w-full max-w-4xl px-4"
        >
          <h1 className="text-4xl font-black mb-8 tracking-tight">欢迎查阅新手指引</h1>
          <div className="relative max-w-2xl mx-auto">
            <input 
              type="text"
              placeholder="请输入您的问题或关键词"
              className="w-full h-14 pl-14 pr-32 rounded-full bg-white text-gray-800 focus:outline-none focus:ring-4 focus:ring-blue-500/20 shadow-2xl transition-all"
            />
            <Search className="absolute left-6 top-4.5 text-gray-400" size={20} />
            <button className="absolute right-2 top-2 h-10 px-8 bg-blue-600 hover:bg-blue-700 rounded-full text-sm font-bold transition-colors">
              搜索
            </button>
          </div>
        </motion.div>
      </div>

      {/* 主体内容 */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        
        {/* 支持平台 */}
        <section className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-black mb-2">Superbuy支持的代购平台</h2>
            <p className="text-gray-400 text-sm">点击不同平台组查看对应新手教程</p>
            <div className="w-12 h-1 bg-blue-600 mx-auto rounded-full mt-4" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
            {platformGroups.map((group) => (
              <motion.button 
                key={group.id}
                onClick={() => setActiveGroup(group.id)}
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.98 }}
                className={`flex flex-col p-6 rounded-3xl border-2 transition-all text-left relative overflow-hidden ${
                  activeGroup === group.id 
                    ? 'border-blue-600 bg-blue-50/50 shadow-xl shadow-blue-500/10' 
                    : 'border-white bg-white hover:border-gray-200 shadow-sm'
                }`}
              >
                {activeGroup === group.id && (
                  <div className="absolute top-0 right-0 w-12 h-12 bg-blue-600 flex items-center justify-center rounded-bl-3xl">
                    <CheckCircle2 className="text-white" size={20} />
                  </div>
                )}
                <span className={`text-xs font-black mb-4 uppercase tracking-wider ${activeGroup === group.id ? 'text-blue-600' : 'text-gray-400'}`}>
                  {group.label}
                </span>
                <div className="flex gap-2 mb-2">
                  {group.platforms.map((p) => (
                    <div 
                      key={p.name}
                      className={`w-10 h-10 ${p.color} text-white rounded-xl flex items-center justify-center text-sm font-black shadow-sm`}
                      title={p.name}
                    >
                      {p.icon}
                    </div>
                  ))}
                </div>
                <div className="mt-4">
                  <span className="text-sm font-bold text-gray-800">
                    {group.platforms.map(p => p.name).join(' / ')}
                  </span>
                </div>
              </motion.button>
            ))}
          </div>
        </section>

        {/* 如何通过Superbuy代购商品 */}
        <section className="mb-20">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-1.5 h-8 bg-blue-600 rounded-full" />
            <h2 className="text-2xl font-black">如何通过Superbuy代购商品</h2>
          </div>

          <div className="space-y-12">
            {/* 步骤1 */}
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 px-6 py-2 bg-blue-600 text-white text-[10px] font-black rounded-bl-2xl uppercase tracking-widest">
                {currentTutorial.tag}
              </div>
              
              <div className="flex items-center gap-3 mb-8">
                <span className="bg-black text-white px-4 py-1.5 rounded-full text-xs font-black">步骤1</span>
                <h3 className="text-xl font-bold">挑选商品</h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-blue-50/50 rounded-2xl p-6 border border-blue-100 flex flex-col">
                  <div className="text-blue-600 font-bold mb-4 flex items-center gap-2">
                    <span className="bg-blue-600 text-white w-5 h-5 rounded-md flex items-center justify-center text-[10px]">1</span>
                    方式一：粘贴链接/搜索
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed mb-6 flex-1">
                    {currentTutorial.desc}
                  </p>
                  <div className="aspect-video bg-gray-200 rounded-xl overflow-hidden border-4 border-white shadow-sm">
                    <img key={`${activeGroup}-1`} src={currentTutorial.step1Img1} alt="step1" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                </div>

                <div className="bg-blue-50/50 rounded-2xl p-6 border border-blue-100 flex flex-col">
                  <div className="text-blue-600 font-bold mb-4 flex items-center gap-2">
                    <span className="bg-blue-600 text-white w-5 h-5 rounded-md flex items-center justify-center text-[10px]">2</span>
                    方式二：挑选并下单
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed mb-6 flex-1">
                    在Superbuy搜索框输入商品名称或直接查看推荐。将选中的商品加入购物车。
                  </p>
                  <div className="aspect-video bg-gray-200 rounded-xl overflow-hidden border-4 border-white shadow-sm">
                    <img key={`${activeGroup}-2`} src={currentTutorial.step1Img2} alt="step2" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                </div>
              </div>
            </div>

            {/* 步骤2 */}
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
              <div className="flex items-center gap-3 mb-8">
                <span className="bg-black text-white px-4 py-1.5 rounded-full text-xs font-black">步骤2</span>
                <h3 className="text-xl font-bold">提交代购</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <p className="text-sm text-gray-600 leading-relaxed">
                    您可以直接转换商品颜色、尺寸、数量，点击“加入购物车”或“立即购买”。
                  </p>
                  <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800" alt="demo" className="w-full rounded-2xl border" referrerPolicy="no-referrer" />
                </div>
                <div className="flex items-center justify-center">
                  <div className="bg-green-50 p-6 rounded-2xl border border-green-100 flex items-start gap-4">
                    <CheckCircle2 className="text-green-500 shrink-0" />
                    <div>
                      <h4 className="font-bold text-green-800 mb-1">专业审单</h4>
                      <p className="text-xs text-green-700">提交后，我们的采购专家会核对商品库存、规格及卖家信用，保障您的消费安全。</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 步骤3-5 组合展示 */}
            <div className="grid lg:grid-cols-3 gap-6">
               {[
                 { step: '3', title: '支付商品费用', desc: '提交代购订单，选择支付方式，支付商品售价及中国大陆段运费。', icon: <Wallet />, tips: '支持多种外汇及RMB多种支付方式（PayPal、信用卡、微信、支付宝等）。' },
                 { step: '4', title: 'Superbuy代购', desc: '买手为您联系卖家订购商品。', icon: <Search />, tips: '订购过程中，您可通过“订单咨询”联系买手。补差价、补充细节要求等。' },
                 { step: '5', title: '验货入库', desc: '收货验货，检查入库，商品会存放在您的“我的仓库”中。', icon: <ShieldCheck />, tips: '收到货后，我们会进行常规属性的抽检，并拍照。' }
               ].map((item) => (
                 <div key={item.step} className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm flex flex-col">
                   <div className="flex items-center gap-3 mb-6">
                    <span className="bg-black text-white px-3 py-1 rounded-full text-[10px] font-black">步骤{item.step}</span>
                    <h3 className="text-lg font-bold">{item.title}</h3>
                  </div>
                  <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-4">
                    {item.icon}
                  </div>
                  <p className="text-sm text-gray-500 mb-6 flex-1">{item.desc}</p>
                  <div className="bg-orange-50 p-4 rounded-xl border border-orange-100 text-[11px] text-orange-700 leading-relaxed">
                    <strong className="block mb-1">TIPS:</strong>
                    {item.tips}
                  </div>
                 </div>
               ))}
            </div>
          </div>
        </section>

        {/* 提包发货流程 */}
        <section className="mb-20">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-1.5 h-8 bg-green-500 rounded-full" />
            <h2 className="text-2xl font-black">如何在Superbuy提包</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '6', title: '提交包裹', desc: '在我的仓库中勾选需要发货的商品，填写海外收货地址及物流偏好。', icon: <PackageCheck /> },
              { step: '7', title: '支付寄费押金', desc: '选择支付方式，支付国际运费押金及报关费。', icon: <Wallet /> },
              { step: '8', title: 'Superbuy发货', desc: '商品出库并打包，加固包装，称重发货。', icon: <Truck /> },
              { step: '9', title: '等待收货', desc: '查收物流轨迹，等待您的心爱包裹跨洋而来。', icon: <ExternalLink /> },
            ].map((item) => (
              <div key={item.step} className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:translate-y-[-4px] transition-all group">
                <div className="text-green-500 font-black text-4xl mb-4 opacity-10 group-hover:opacity-20 transition-opacity">0{item.step}</div>
                <h3 className="text-lg font-bold mb-3">{item.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-8 bg-black rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between text-white">
            <div className="flex items-center gap-6 mb-4 md:mb-0">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center">
                <Star className="text-yellow-400" size={32} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1">最后：评价&奖励</h3>
                <p className="text-sm text-gray-400">收货确认后，晒单分享您的喜悦，不仅能获得积分，还能获得运费余额。</p>
              </div>
            </div>
            <button className="px-10 py-3.5 bg-yellow-400 hover:bg-yellow-500 text-black font-black rounded-full transition-colors active:scale-95">
              立即购物，开启首单
            </button>
          </div>
        </section>
      </div>

      {/* 底部导航返回 */}
      <div className="bg-white border-t border-gray-100 py-8">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-gray-400">
          <button 
            onClick={() => navigate('/')}
            className="flex items-center gap-2 hover:text-blue-600 transition-colors font-bold"
          >
            返回首页
          </button>
          <p className="text-xs">© 2012-2024 Superbuy.com All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
};
