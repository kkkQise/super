import React, { useState, useEffect } from 'react';
import { Megaphone, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../../utils';

const ANNOUNCEMENTS = [
  { id: 1, text: '【物流价格调整】香港UPS经济（免税）&香港UPS&UPS(HK)-5500调价通知', isNew: true, color: 'text-red-500' },
  { id: 2, text: 'Superbuy 2024年春节假期收寄安排调整公告', isNew: false, color: 'text-gray-700' },
  { id: 3, text: '关于近期北美由于极端天气导致部分航路延迟的通知', isNew: false, color: 'text-gray-700' },
];

export const AnnouncementBar: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % ANNOUNCEMENTS.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const current = ANNOUNCEMENTS[index];

  return (
    <section className="bg-white border-b border-gray-100 py-2.5">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-5">
        <div className="flex items-center gap-3 overflow-hidden">
          <Megaphone size={14} className="text-gray-400 shrink-0" />
          
          <div className="relative h-5 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="flex items-center h-full"
              >
                <a 
                  href="#" 
                  className={cn(
                    "text-[12px] font-medium truncate hover:text-blue-600 transition-colors cursor-pointer",
                    current.color
                  )}
                >
                  {current.text}
                </a>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <button className="text-[11px] text-blue-500 hover:text-blue-600 transition-colors font-medium flex items-center gap-0.5">
          更多
          <ChevronRight size={10} />
        </button>
      </div>
    </section>
  );
};
