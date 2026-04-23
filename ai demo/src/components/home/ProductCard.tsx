import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../../mocks';
import { ASSETS, FILTER_CATEGORIES } from '../../constants';
import { ShoppingCart } from 'lucide-react';
import { cn } from '../../utils';

export const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`} className="bg-white rounded-md p-3 shadow-sm hover:shadow-md transition-shadow group block">
      <div className="relative aspect-square mb-3 overflow-hidden rounded">
        <img 
          src={product.image} 
          alt={product.title} 
          className="w-full h-full object-cover transition-transform group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-2 left-2 flex items-center gap-1 bg-white/90 backdrop-blur-sm rounded-full px-2 py-0.5 text-[10px] font-medium shadow-sm">
          <img src={ASSETS.FLAGS[product.destCountry as keyof typeof ASSETS.FLAGS]} className="w-3 h-2" />
          <span>{product.updateTime}</span>
        </div>
        <div className="absolute bottom-2 left-2 bg-black/40 backdrop-blur-sm rounded px-2 py-0.5 text-[9px] text-white font-medium">
          {FILTER_CATEGORIES.find(c => c.value === product.category)?.label || '其他'}
        </div>
      </div>
      <h3 className="text-xs text-gray-700 line-clamp-2 h-8 mb-2 leading-relaxed">
        <span className="inline-block align-middle mr-1">
          <img src={ASSETS.PLATFORMS[product.platform.toUpperCase() as keyof typeof ASSETS.PLATFORMS]} className="w-4 h-4 rounded-full" />
        </span>
        {product.title}
      </h3>
      <div className="flex items-end justify-between">
        <div className="flex flex-col">
          <span className="text-[10px] text-gray-400 line-through">US $ {product.originalPrice.toFixed(2)}</span>
          <span className="text-sm font-bold text-gray-900 leading-none">US $ {product.price.toFixed(2)}</span>
        </div>
        <button className="bg-blue-50 p-1.5 rounded-full text-blue-600 hover:bg-blue-600 hover:text-white transition-colors">
          <ShoppingCart size={16} />
        </button>
      </div>
    </Link>
  );
};
