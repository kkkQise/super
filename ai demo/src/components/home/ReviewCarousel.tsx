import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Review } from '../../mocks';
import { ReviewCard } from './ReviewCard';

interface ReviewCarouselProps {
  reviews: Review[];
}

export const ReviewCarousel: React.FC<ReviewCarouselProps> = ({ reviews }) => {
  const [index, setIndex] = useState(0);

  // 这里的轮播逻辑：展示当前 index 以及前后的卡片
  // 为了实现循环，我们对索引进行取模处理
  const getReviewAtIndex = (i: number) => {
    const len = reviews.length;
    return reviews[(i + len) % len];
  };

  const nextSlide = useCallback(() => {
    setIndex((prev) => (prev + 1) % reviews.length);
  }, [reviews.length]);

  useEffect(() => {
    const timer = setInterval(nextSlide, 4000); // 4秒自动轮播
    return () => clearInterval(timer);
  }, [nextSlide]);

  // 计算当前要展示的三张卡片索引
  const visibleIndices = [index - 1, index, index + 1];

  return (
    <div className="relative h-[720px] w-full overflow-hidden flex flex-col items-center">
      <AnimatePresence mode="popLayout" initial={false}>
        {visibleIndices.map((vIdx, positionIdx) => {
          const review = getReviewAtIndex(vIdx);
          const isCenter = positionIdx === 1;
          
          return (
            <motion.div
              key={`${review.id}-${vIdx}`}
              initial={{ opacity: 0, y: 100, scale: 0.8 }}
              animate={{ 
                opacity: isCenter ? 1 : 0.3, 
                y: (positionIdx - 1) * 250 + 250, // 紧凑间距实现层叠感
                scale: isCenter ? 1 : 0.85,
                zIndex: isCenter ? 10 : 0
              }}
              exit={{ opacity: 0, scale: 0.5, y: -100 }}
              transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
              className="absolute w-full px-4"
              style={{ top: '0' }}
            >
              <ReviewCard review={review} />
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
};
