import React from 'react';
import { Star } from 'lucide-react';
import { Review } from '../../mocks';

interface ReviewCardProps {
  review: Review;
}

export const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => {
  return (
    <div className="bg-white rounded-[28px] border-[5px] border-[#FFD21E] overflow-hidden flex flex-col shadow-[0_4px_12px_rgba(255,210,30,0.15)] transition-all hover:shadow-[0_8px_24px_rgba(255,210,30,0.25)] hover:-translate-y-1">
      {/* 晒单图容器 - 带有占位背景 */}
      {review.images && review.images.length > 0 && (
        <div className="w-full bg-[#f8f8f8] p-2.5 pb-0">
          <div className="rounded-[20px] overflow-hidden aspect-[1/1] border border-gray-100 bg-gray-100 animate-pulse">
            <img 
              src={review.images[0]} 
              alt="review" 
              className="w-full h-full object-cover transition-opacity duration-300"
              onLoad={(e) => {
                (e.currentTarget.parentElement as HTMLElement).classList.remove('animate-pulse', 'bg-gray-100');
              }}
            />
          </div>
        </div>
      )}
      
      {/* 内容区 */}
      <div className="p-5 pt-3">
        {/* 用户名 - 采用灰色脱敏样式 */}
        <p className="text-[#C2C2C2] text-[12px] font-medium tracking-tight mb-2.5">
          {review.user}
        </p>
        
        {/* 晒单文案 - 极粗字体，紧凑行间距 */}
        <p className="text-black text-[14px] font-[900] leading-[1.3] line-clamp-5 tracking-tight">
          {review.content}
        </p>
      </div>
    </div>
  );
};
