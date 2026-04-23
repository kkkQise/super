import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  ChevronLeft, 
  ChevronRight, 
  Star, 
  Truck, 
  ShieldCheck, 
  RotateCcw, 
  ShoppingCart, 
  Share2,
  Heart,
  MessageCircle,
  MapPin
} from 'lucide-react';
import { MOCK_PRODUCT_DETAILS, ShippingLine, MOCK_SHIPPING } from '../mocks';
import { cn } from '../utils';
import { ASSETS } from '../constants';

export const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const product = MOCK_PRODUCT_DETAILS[id || '1'] || MOCK_PRODUCT_DETAILS['1'];
  
  const [activeImageIndex, setActiveImageIndex] = React.useState(0);
  const [selectedShipping, setSelectedShipping] = React.useState<ShippingLine>(MOCK_SHIPPING[0]);
  const [quantity, setQuantity] = React.useState(1);

  if (!product) return <div className="p-10 text-center">商品未找到</div>;

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* 顶部导航 */}
      <div className="bg-white border-b sticky top-0 z-30 px-4 py-3 flex items-center justify-between">
        <button onClick={() => navigate(-1)} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
          <ChevronLeft size={24} />
        </button>
        <h1 className="text-sm font-bold truncate max-w-[200px]">{product.title}</h1>
        <div className="flex items-center gap-2">
          <button className="p-2 hover:bg-gray-100 rounded-full"><Share2 size={20} /></button>
          <button className="p-2 hover:bg-gray-100 rounded-full"><Heart size={20} /></button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* 左侧：图片展示 */}
        <div className="lg:col-span-7 space-y-4">
          <div className="relative aspect-square bg-white rounded-2xl overflow-hidden shadow-sm">
            <img 
              src={product.images[activeImageIndex]} 
              alt={product.title}
              className="w-full h-full object-contain"
              referrerPolicy="no-referrer"
            />
            {product.images.length > 1 && (
              <>
                <button 
                  onClick={() => setActiveImageIndex(prev => (prev > 0 ? prev - 1 : product.images.length - 1))}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/80 backdrop-blur-sm rounded-full shadow-md hover:bg-white"
                >
                  <ChevronLeft size={20} />
                </button>
                <button 
                  onClick={() => setActiveImageIndex(prev => (prev < product.images.length - 1 ? prev + 1 : 0))}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/80 backdrop-blur-sm rounded-full shadow-md hover:bg-white"
                >
                  <ChevronRight size={20} />
                </button>
              </>
            )}
          </div>
          
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {product.images.map((img, idx) => (
              <button 
                key={idx}
                onClick={() => setActiveImageIndex(idx)}
                className={cn(
                  "w-20 h-20 rounded-lg overflow-hidden border-2 flex-shrink-0 transition-all",
                  activeImageIndex === idx ? "border-blue-600 shadow-md" : "border-transparent opacity-70 hover:opacity-100"
                )}
              >
                <img src={img} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </button>
            ))}
          </div>
        </div>

        {/* 右侧：配置与购买 */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white rounded-2xl p-6 shadow-sm space-y-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <img src={ASSETS.PLATFORMS[product.platform.toUpperCase() as keyof typeof ASSETS.PLATFORMS]} className="w-5 h-5 rounded-full" />
                <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">{product.platform}</span>
              </div>
              <h2 className="text-xl font-bold text-gray-900 leading-tight">{product.title}</h2>
            </div>

            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-black text-red-500">US $ {product.price.toFixed(2)}</span>
              <span className="text-sm text-gray-400 line-through">US $ {product.originalPrice.toFixed(2)}</span>
              <span className="bg-red-50 text-red-600 text-xs font-bold px-2 py-0.5 rounded">
                -{(((product.originalPrice - product.price) / product.originalPrice) * 100).toFixed(0)}%
              </span>
            </div>

            <div className="border-t border-b py-4 space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm font-bold">数量</span>
                <div className="flex items-center border rounded-lg whitespace-nowrap">
                   <button onClick={() => setQuantity(q => Math.max(1, q-1))} className="px-3 py-1 border-r hover:bg-gray-50">-</button>
                   <span className="px-4 py-1 text-sm">{quantity}</span>
                   <button onClick={() => setQuantity(q => q+1)} className="px-3 py-1 border-l hover:bg-gray-50">+</button>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm">
                  <span className="font-bold flex items-center gap-1">
                    <Truck size={16} className="text-gray-400" />
                    发往 {product.destCountry}
                  </span>
                  <button className="text-blue-600 font-medium">更改线路</button>
                </div>
                <div className="bg-gray-50 rounded-xl p-3 space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span className="text-gray-500">{selectedShipping.name}</span>
                    <span className="font-bold">US $ {selectedShipping.price.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-400">
                    <span>预计 {selectedShipping.duration}</span>
                    <span>{selectedShipping.weight}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <button className="flex-1 bg-white border-2 border-blue-600 text-blue-600 py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-blue-50 transition-colors">
                <ShoppingCart size={20} />
                加入购物车
              </button>
              <button className="flex-1 bg-blue-600 text-white py-3 rounded-xl font-bold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200">
                立即购买
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4 text-[11px] text-gray-500">
              <div className="flex items-center gap-1"><ShieldCheck size={14} className="text-green-500" /> 1688 原厂保障</div>
              <div className="flex items-center gap-1"><RotateCcw size={14} className="text-green-500" /> 7天无理由退换</div>
            </div>
          </div>

          {/* 累计转运与评价缩略 */}
          <div className="bg-white rounded-2xl p-6 shadow-sm space-y-4">
             <div className="flex items-center justify-between">
               <h3 className="font-bold">评价 ({product.reviews.length})</h3>
               <div className="flex items-center gap-1 text-orange-400">
                 <Star size={14} fill="currentColor" />
                 <span className="text-sm font-bold">5.0</span>
                 <ChevronRight size={14} className="text-gray-300" />
               </div>
             </div>
             {product.reviews.length > 0 ? (
               <div className="space-y-4">
                 <div className="flex gap-3">
                   <img src={product.reviews[0].avatar} className="w-8 h-8 rounded-full" />
                   <div className="flex-1 space-y-1">
                     <div className="flex justify-between text-xs">
                       <span className="font-bold">{product.reviews[0].user}</span>
                       <span className="text-gray-400">{product.reviews[0].date}</span>
                     </div>
                     <p className="text-sm text-gray-600 line-clamp-2">{product.reviews[0].content}</p>
                   </div>
                 </div>
               </div>
             ) : (
               <p className="text-sm text-gray-400 italic">暂无评价</p>
             )}
          </div>
        </div>
      </div>

      {/* 底部详情 */}
      <div className="max-w-7xl mx-auto px-4 mt-8">
        <div className="bg-white rounded-2xl shadow-sm">
          <div className="flex border-b">
            <button className="px-8 py-4 text-sm font-bold border-b-2 border-blue-600 text-blue-600">商品详情</button>
            <button className="px-8 py-4 text-sm font-bold text-gray-400 hover:text-gray-600">服务保障</button>
          </div>
          <div className="p-8 space-y-8">
            <section className="space-y-4">
              <h3 className="text-lg font-bold flex items-center gap-2">
                <div className="w-1 h-5 bg-blue-600 rounded-full" />
                产品描述
              </h3>
              <p className="text-gray-600 leading-relaxed">{product.description}</p>
            </section>

            <section className="space-y-4">
              <h3 className="text-lg font-bold flex items-center gap-2">
                <div className="w-1 h-5 bg-blue-600 rounded-full" />
                规则参数
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {product.specs.map((spec, idx) => (
                  <div key={idx} className="flex bg-gray-50 p-3 rounded-lg">
                    <span className="w-24 text-gray-400 text-sm">{spec.label}</span>
                    <span className="text-gray-800 text-sm font-medium">{spec.value}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};
