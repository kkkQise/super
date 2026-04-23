import React from 'react';
import { ShippingLine } from '../../mocks';
import { ASSETS } from '../../constants';
import { useNavigate } from 'react-router-dom';

export const ShippingCard: React.FC<{ line: ShippingLine }> = ({ line }) => {
  const navigate = useNavigate();

  return (
    <div 
      onClick={() => navigate(`/shipping-detail/${line.id}`)}
      className="bg-white border border-gray-100 rounded-lg p-4 shadow-sm hover:border-blue-200 transition-all cursor-pointer group"
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-orange-100 rounded flex items-center justify-center">
            <span className="text-orange-500 font-bold text-xs">S</span>
          </div>
          <div>
            <h4 className="text-sm font-bold text-gray-900">{line.name}</h4>
            <div className="flex items-center gap-1">
              <img src={ASSETS.FLAGS[line.countryCode as keyof typeof ASSETS.FLAGS]} className="w-3" />
              <span className="text-[10px] font-medium text-gray-500">签收时效: {line.duration}</span>
            </div>
          </div>
        </div>
        <div className="text-right">
          <span className="text-sm font-bold text-blue-600">US ${line.price}</span>
          <p className="text-[10px] text-gray-400">运费</p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2 text-[10px] text-gray-500 border-t pt-3">
        <div className="flex flex-col">
          <span className="text-gray-400">重量</span>
          <span className="font-medium text-gray-700">{line.weight}</span>
        </div>
        <div className="flex flex-col">
          <span className="text-gray-400">尺寸</span>
          <span className="font-medium text-gray-700">{line.size}</span>
        </div>
      </div>
    </div>
  );
};
