import React, { useState } from 'react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { ShoppingCart, HelpCircle, AlertCircle, Info, Upload, CheckCircle2, ChevronRight, Calculator } from 'lucide-react';
import { cn } from '../utils';

export const ManualOrder: React.FC = () => {
  const [activeTab, setActiveTab] = useState('rules');

  return (
    <div className="min-h-screen bg-[#f8f9fb]">
      <Header theme="light" />
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* 顶部标题与进度 */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-6">
          <h1 className="text-2xl font-black text-gray-900 flex items-center gap-3">
            填写代购单
            <span className="text-xs font-normal text-gray-400">(*为必填项)</span>
          </h1>
          
          {/* 进度条 */}
          <div className="relative flex items-center">
             <div className="flex items-center">
                <div className="flex flex-col items-center relative z-10">
                   <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm shadow-lg shadow-blue-200">1</div>
                   <span className="text-[10px] text-blue-600 font-bold mt-2 absolute -bottom-10 whitespace-nowrap text-center">填写并提交<br/>需要购买的商品信息</span>
                </div>
                <div className="w-24 h-1 bg-gray-200 -mx-1" />
                <div className="flex flex-col items-center relative z-10">
                   <div className="w-8 h-8 rounded-full bg-gray-200 text-gray-400 flex items-center justify-center font-bold text-sm">2</div>
                   <span className="text-[10px] text-gray-400 font-bold mt-2 absolute -bottom-10 whitespace-nowrap text-center">支付商品费用<br/>及到仓运费</span>
                </div>
                <div className="w-24 h-1 bg-gray-200 -mx-1" />
                <div className="flex flex-col items-center relative z-10">
                   <div className="w-8 h-8 rounded-full bg-gray-200 text-gray-400 flex items-center justify-center font-bold text-sm">3</div>
                   <span className="text-[10px] text-gray-400 font-bold mt-2 absolute -bottom-10 whitespace-nowrap text-center">等待商家发货<br/>到选择的仓库</span>
                </div>
             </div>
             {/* 装饰色块 */}
             <div className="absolute top-0 right-0 -mr-16 bg-green-500 text-white px-3 py-1 rounded-full text-[10px] font-black tracking-tighter transform rotate-3">
                提交包裹，国际快递
             </div>
          </div>
        </div>

        {/* 温馨提示 */}
        <div className="bg-blue-50/50 border border-blue-100 rounded-lg p-3 flex items-center gap-3 mb-8">
           <Info size={16} className="text-blue-500 shrink-0" />
           <p className="text-xs text-gray-500">
             如遇淘宝、1688、闲鱼、微店等平台的商品信息获取失败，或购买其他商城电商平台（如拼多多、小红书、得物等）的商品，您可以通过手动跳转交付单，直接填写代购商品链接及相关信息进行下单。
           </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
           {/* 左侧表单 */}
           <div className="lg:col-span-2 space-y-8">
              {/* 商品信息卡片 */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                 <div className="p-6 border-b border-gray-50 flex items-center justify-between">
                    <h2 className="text-base font-black text-gray-900 flex items-center gap-2">
                       <div className="w-1.5 h-4 bg-blue-600 rounded-full" />
                       商品信息
                    </h2>
                    <div className="flex gap-2">
                       <button className="flex items-center gap-1 text-[11px] text-blue-600 hover:bg-blue-50 px-2 py-1 rounded border border-blue-100 transition-colors">
                          <HelpCircle size={12} />
                          购物咨询
                       </button>
                       <button className="flex items-center gap-1 text-[11px] text-blue-600 hover:bg-blue-50 px-2 py-1 rounded border border-blue-100 transition-colors">
                          <Calculator size={12} />
                          运费估算
                       </button>
                    </div>
                 </div>
                 <div className="p-8 space-y-6">
                    <div className="grid grid-cols-4 gap-4 items-center">
                       <label className="text-xs font-bold text-gray-600 text-right"><span className="text-red-500 mr-1">*</span>商品链接</label>
                       <div className="col-span-3">
                          <input 
                            type="text" 
                            placeholder="请粘贴想要购买的商品链接"
                            className="w-full bg-gray-50 border border-gray-100 rounded-lg px-4 py-3 text-xs focus:ring-2 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all"
                          />
                       </div>
                    </div>
                    <div className="grid grid-cols-4 gap-4 items-center">
                       <label className="text-xs font-bold text-gray-600 text-right">商品名称</label>
                       <div className="col-span-3">
                          <input 
                            type="text" 
                            placeholder="请输入商品名称 (限100字符)"
                            className="w-full bg-gray-50 border border-gray-100 rounded-lg px-4 py-3 text-xs focus:ring-2 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all"
                          />
                       </div>
                    </div>
                    <div className="grid grid-cols-4 gap-4 items-center">
                       <label className="text-xs font-bold text-gray-600 text-right"><span className="text-red-500 mr-1">*</span>商品分类</label>
                       <div className="col-span-3">
                          <select className="w-full bg-gray-50 border border-gray-100 rounded-lg px-4 py-3 text-xs focus:ring-2 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all appearance-none cursor-pointer">
                             <option>请选择商品分类</option>
                             <option>服饰鞋包</option>
                             <option>数码家电</option>
                             <option>美妆个护</option>
                             <option>零食饮品</option>
                          </select>
                       </div>
                    </div>
                    <div className="grid grid-cols-4 gap-4 items-start">
                       <label className="text-xs font-bold text-gray-600 text-right mt-3">商品备注</label>
                       <div className="col-span-3 relative">
                          <textarea 
                            placeholder="如您购买的商品有多种款式、尺寸、颜色等，请您根据商品页面上的分类描述，在此备注相关属性。如需购买同一商品的多钟不同属性，请分开添加购物车。"
                            className="w-full bg-gray-50 border border-gray-100 rounded-lg px-4 py-3 text-xs h-24 focus:ring-2 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all resize-none"
                          />
                          <span className="absolute bottom-2 right-4 text-[10px] text-gray-300">0/200</span>
                       </div>
                    </div>
                 </div>
              </div>

              {/* 费用信息卡片 */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                 <div className="p-6 border-b border-gray-50">
                    <h2 className="text-base font-black text-gray-900 flex items-center gap-2">
                       <div className="w-1.5 h-4 bg-orange-500 rounded-full" />
                       费用信息
                    </h2>
                 </div>
                 <div className="p-8 space-y-6">
                    <div className="grid grid-cols-4 gap-4 items-center">
                       <label className="text-xs font-bold text-gray-600 text-right"><span className="text-red-500 mr-1">*</span>商品价格</label>
                       <div className="col-span-3 flex items-center gap-4">
                          <div className="relative flex-1">
                             <select className="absolute left-0 top-0 bottom-0 px-3 bg-gray-100 border-r border-gray-200 rounded-l-lg text-xs font-bold">
                                <option>CN ¥</option>
                                <option>US $</option>
                             </select>
                             <input type="number" className="w-full bg-gray-50 border border-gray-100 rounded-lg pl-20 pr-4 py-3 text-xs outline-none" />
                          </div>
                          <span className="text-gray-300">×</span>
                          <input type="number" defaultValue={1} className="w-20 bg-gray-50 border border-gray-100 rounded-lg px-4 py-3 text-xs outline-none text-center" />
                       </div>
                    </div>
                    <div className="grid grid-cols-4 gap-4 items-center">
                       <label className="text-xs font-bold text-gray-600 text-right"><span className="text-red-500 mr-1">*</span>寄送仓库</label>
                       <div className="col-span-3 flex items-center gap-2">
                          <select className="flex-1 bg-gray-50 border border-gray-100 rounded-lg px-4 py-3 text-xs outline-none appearance-none cursor-pointer">
                             <option>请选择仓库</option>
                             <option>广东仓</option>
                             <option>上海仓</option>
                          </select>
                          <HelpCircle size={14} className="text-gray-300 cursor-help" />
                       </div>
                    </div>
                    <div className="grid grid-cols-4 gap-4 items-center">
                       <label className="text-xs font-bold text-gray-600 text-right"><span className="text-red-500 mr-1">*</span>到仓运费</label>
                       <div className="col-span-3 flex items-center gap-4">
                          <div className="relative flex-1">
                             <select className="absolute left-0 top-0 bottom-0 px-3 bg-gray-100 border-r border-gray-200 rounded-l-lg text-xs font-bold">
                                <option>CN ¥</option>
                             </select>
                             <input type="number" placeholder="0.00" className="w-full bg-gray-50 border border-gray-100 rounded-lg pl-20 pr-4 py-3 text-xs outline-none" />
                          </div>
                          <div className="flex items-center gap-1.5 bg-orange-50 px-3 py-1.5 rounded-lg border border-orange-100 group cursor-pointer relative">
                             <AlertCircle size={12} className="text-orange-500" />
                             <span className="text-[10px] text-orange-600 font-bold">运费说明</span>
                             {/* Tooltip */}
                             <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block transition-all">
                                <div className="bg-white p-3 rounded-lg shadow-2xl border border-gray-100 w-64">
                                   <p className="text-[10px] leading-relaxed text-gray-500">将中国大陆地区外的商品邮寄至全球，中国大陆外仓库暂时不提供同仓内订单转账服务。<br/><a className="text-blue-500 hover:underline">了解更多 {'>'}</a></p>
                                </div>
                             </div>
                          </div>
                       </div>
                    </div>
                    <div className="grid grid-cols-4 gap-4 items-center">
                       <label className="text-xs font-bold text-gray-600 text-right">上传图片</label>
                       <div className="col-span-3">
                          <div className="border-2 border-dashed border-gray-100 rounded-xl p-8 flex flex-col items-center justify-center gap-2 hover:border-blue-300 hover:bg-blue-50/20 transition-all cursor-pointer group">
                             <Upload size={24} className="text-gray-300 group-hover:text-blue-500 transition-colors" />
                             <span className="text-xs text-gray-400">点击上传</span>
                             <span className="text-[10px] text-gray-300">(0/1) 单张图片大小限制在3M以内 (支持gif, jpg, png, bmp格式)</span>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>

              {/* 总计与按钮 */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 flex flex-col md:flex-row items-center justify-between gap-6">
                 <div className="flex items-baseline gap-2">
                    <span className="text-xl font-black text-gray-900">总计</span>
                    <span className="text-2xl font-black text-blue-600">CN ¥ 0.00</span>
                    <span className="text-[10px] text-gray-400 flex items-center gap-1 italic">
                       <HelpCircle size={10} />
                       不包含国际运费，国际运费需另外支付 <a className="text-blue-500 uppercase font-black hover:underline">估算运费 {'>'}</a>
                    </span>
                 </div>
                 <div className="flex gap-4 w-full md:w-auto">
                    <button className="flex-1 md:flex-none px-12 py-3 rounded-full border-2 border-blue-600 text-blue-600 text-sm font-black hover:bg-blue-50 transition-all">立即购买</button>
                    <button className="flex-1 md:flex-none px-12 py-3 rounded-full bg-blue-600 text-white text-sm font-black hover:bg-blue-700 shadow-lg shadow-blue-200 transition-all">加入购物车</button>
                 </div>
              </div>
           </div>

           {/* 右侧声明 */}
           <div className="space-y-6">
              {/* 免责声明 */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-50 p-6">
                 <h3 className="text-sm font-black text-gray-900 flex items-center gap-2 mb-4">
                    <Info size={16} className="text-blue-500" />
                    免责声明
                 </h3>
                 <p className="text-[11px] leading-relaxed text-gray-500">
                   您提交的商品链接来自第三方电商平台（如拼多多、小红书、得物等），Superbuy仅提供代购及国际物流服务，不参与商品的生产或销售，不承担商品质权、知识产权及质量问题。当您使用Superbuy代购服务时，视为您已了解并接受本条款。
                 </p>
              </div>

              {/* 费用声明 */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-50 p-6">
                 <h3 className="text-sm font-black text-gray-900 flex items-center gap-2 mb-4">
                    <Calculator size={16} className="text-orange-500" />
                    费用声明
                 </h3>
                 <p className="text-[11px] leading-relaxed text-gray-500">
                   您在此页面提交的代购订单涉及未联网的第三方平台商品（如拼多多、小红书、得物等），这些商品可能会产生额外服务费，无法订购或存在风险险，具体情况以工作人员核实反馈为准。关于收费详情，请参见帮助中心的<a className="text-blue-500 hover:underline">“第三方平台代购服务费说明”</a>
                 </p>
              </div>
           </div>
        </div>

        {/* 底部详情区块 */}
        <div className="mt-12 bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
           <div className="flex border-b border-gray-50">
              {['代购须知', '售后服务'].map(tab => (
                 <button 
                   key={tab}
                   onClick={() => setActiveTab(tab === '代购须知' ? 'rules' : 'after-sale')}
                   className={cn(
                     "px-10 py-5 text-sm font-black transition-all relative",
                     (activeTab === 'rules' && tab === '代购须知') || (activeTab === 'after-sale' && tab === '售后服务')
                      ? "text-blue-600" 
                      : "text-gray-400 hover:text-gray-600"
                   )}
                 >
                    {tab}
                    {((activeTab === 'rules' && tab === '代购须知') || (activeTab === 'after-sale' && tab === '售后服务')) && (
                       <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-1 bg-blue-600 rounded-full" />
                    )}
                 </button>
              ))}
           </div>
           
           <div className="p-8">
              {activeTab === 'rules' ? (
                 <div className="space-y-10">
                    {/* CEO温馨提示 */}
                    <div>
                       <h4 className="text-xs font-black text-blue-600 mb-4 bg-blue-50 inline-block px-3 py-1 rounded">CEO温馨提示</h4>
                       <div className="space-y-3 text-[11px] text-gray-500 leading-relaxed">
                          <p>1. 【关于海关物流】由于各个国家各个海关政策差异，部分国家或地区对特殊物品较为敏感，所以会出现禁运、限购制品、物流线路限制及体积重量限制的情况。具体请点击<a className="text-blue-500 font-bold hover:underline">【代购须知】</a>版块查看。</p>
                          <p>2. 【关于售后问题】如您对商品、尺寸、物流有任何疑问，可以随时联系我们的在线客服或电话客服 +86 19986924711，我们会在第一时间为您处理，您也可以点击<a className="text-blue-500 font-bold hover:underline">【售后服务】</a>版块助您查询了解。</p>
                          <p>3. 【关于商品问题】如果您因为自己挑选的代购商品质量太差、价格过高、没时间挑选或不知道如何选购等问题，可以尝试我们为您提供的<a className="text-blue-500 font-bold hover:underline">【专家购服务】</a>解决您购物过程中所遇到的问题。</p>
                       </div>
                    </div>

                    {/* 禁限运物品 */}
                    <div>
                       <h4 className="text-xs font-black text-gray-900 mb-4 flex items-center gap-2">
                          禁限运物品
                          <span className="text-[10px] font-normal text-red-500 flex items-center gap-1">
                             <CheckCircle2 size={10} /> 不承诺
                          </span>
                       </h4>
                       <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                           {[
                              { label: '烟、酒、违禁品', icon: '🚭' },
                              { label: '液体或膏状化妆品', icon: '🧴' },
                              { label: '中药属于中国海关限制出口货物', icon: '🍃' },
                              { label: '刀具', icon: '🔪' },
                           ].map((item, i) => (
                              <div key={i} className="flex flex-col items-center p-4 bg-gray-50/50 rounded-xl border border-gray-100 hover:bg-white hover:shadow-lg transition-all group">
                                 <span className="text-2xl mb-2 group-hover:scale-125 transition-transform">{item.icon}</span>
                                 <span className="text-[10px] text-gray-500 text-center leading-tight">{item.label}</span>
                              </div>
                           ))}
                       </div>
                    </div>

                    {/* 各线路邮寄限制 - 表格 */}
                    <div>
                       <h4 className="text-xs font-black text-gray-900 mb-6">各线路邮寄限制</h4>
                       <div className="overflow-x-auto">
                          <table className="w-full text-[11px] text-gray-500 text-center border-collapse">
                             <thead>
                                <tr className="bg-gray-50/80">
                                   <th className="p-4 font-black border border-gray-100">分类</th>
                                   <th className="p-4 font-black border border-gray-100">欧洲免税空运专线 (特货)</th>
                                   <th className="p-4 font-black border border-gray-100">EMS</th>
                                   <th className="p-4 font-black border border-gray-100">UPS</th>
                                   <th className="p-4 font-black border border-gray-100">EUB</th>
                                </tr>
                             </thead>
                             <tbody>
                                {[
                                   { category: '少量液体', v1: true, v2: true, v3: false, v4: true },
                                   { category: '香水', v1: true, v2: false, v3: false, v4: false },
                                   { category: '气体', v1: false, v2: false, v3: false, v4: false },
                                   { category: '光盘', v1: true, v2: true, v3: false, v4: true },
                                   { category: '知名品牌商品', v1: true, v2: true, v3: true, v4: true },
                                   { category: '药品', v1: true, v2: true, v3: false, v4: true },
                                   { category: '保健品', v1: true, v2: true, v3: false, v4: true },
                                   { category: '内置电池', v1: true, v2: false, v3: true, v4: false },
                                   { category: '数码产品(不含电池)', v1: true, v2: true, v3: true, v4: true },
                                   { category: '纯电池/充电宝', v1: true, v2: false, v3: false, v4: false },
                                ].map((row, i) => (
                                   <tr key={i} className="hover:bg-gray-50/30 transition-colors">
                                      <td className="p-4 font-bold text-gray-800 border border-gray-100 bg-gray-50/20">{row.category}</td>
                                      <td className="p-4 border border-gray-100">{row.v1 ? <span className="text-blue-500 font-bold">✔</span> : <span className="text-gray-300">--</span>}</td>
                                      <td className="p-4 border border-gray-100">{row.v2 ? <span className="text-blue-500 font-bold">✔</span> : <span className="text-gray-300">--</span>}</td>
                                      <td className="p-4 border border-gray-100">{row.v3 ? <span className="text-blue-500 font-bold">✔</span> : <span className="text-gray-300">--</span>}</td>
                                      <td className="p-4 border border-gray-100">{row.v4 ? <span className="text-blue-500 font-bold">✔</span> : <span className="text-gray-300">--</span>}</td>
                                   </tr>
                                ))}
                             </tbody>
                          </table>
                       </div>
                    </div>

                    {/* 体积重量限制 */}
                    <div className="space-y-6">
                       <h4 className="text-xs font-black text-gray-900 mb-4">体积重量限制</h4>
                       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {[
                             { icon: '📦', text: '单边长度 > 120cm 加收超长费' },
                             { icon: '📏', text: '主线国家如有任意一边长 > 60cm，实重和体积重两者取其高者收费，体积重量(kg) = 长cm × 宽cm × 高cm / 6000' },
                             { icon: '✈', text: '一般情况下，单边长度 < 120cm，无法寄送 (实重和体积重两者取其高者计费)' },
                             { icon: '🚚', text: '两边长 < 60cm，无法寄送 (按实际重量(kg)收费)' },
                          ].map((item, i) => (
                             <div key={i} className="flex items-start gap-4 p-4 rounded-xl border border-gray-100 hover:border-blue-200 hover:bg-blue-50/10 transition-all">
                                <span className="text-xl shrink-0">{item.icon}</span>
                                <p className="text-[10px] text-gray-500 leading-relaxed font-medium">{item.text}</p>
                             </div>
                          ))}
                       </div>
                    </div>
                 </div>
              ) : (
                 <div className="flex items-center justify-center py-20 text-gray-400 flex-col gap-4">
                    <Info size={40} className="text-gray-200" />
                    <p className="text-sm">售后服务条款正在加载中...</p>
                 </div>
              )}
           </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};
