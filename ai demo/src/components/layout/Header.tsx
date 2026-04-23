import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ASSETS, NAV_LINKS } from '../../constants';
import { Globe, ShoppingCart, User, Bell, ChevronDown, Mail, Truck, Headset, Search, FileText, UserCheck, PenTool, BookOpen, HelpCircle, Heart, Layers, MessageSquare, Info, CreditCard, Package, Boxes, LogOut, History, Calculator } from 'lucide-react';
import { cn } from '../../utils';

import { Link, useNavigate, useLocation } from 'react-router-dom';

interface HeaderProps {
  variant?: 'home' | 'standard';
  theme?: 'dark' | 'light'; // 控制置顶时的文字主题
}

export const Header: React.FC<HeaderProps> = ({ 
  variant = 'home', 
  theme = 'dark' 
}) => {
  const [scrollY, setScrollY] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isTop = scrollY < 10;
  // 背景透明度：随滚动逐渐增加，0 -> 0.98
  const bgOpacity = Math.min(scrollY / 150, 0.98);

  // 是否是实际的首页根路径
  const isActualHomePage = location.pathname === '/';

  // 决定文字颜色：
  // 1. 只有在实际首页根路径 ('/')、且使用 home 变体、且处于顶部时，才允许根据 theme 显示白字
  // 2. 其他页面 (哪怕使用了 home 变体，如代购指南) 均强制使用黑色文字
  const isDarkText = (variant === 'home' && isActualHomePage) 
    ? (!isTop || theme === 'light') 
    : true;

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isTop ? "border-transparent" : "border-gray-100 border-b backdrop-blur-md shadow-sm"
      )}
      style={{ 
        backgroundColor: `rgba(255, 255, 255, ${bgOpacity})`
      }}
    >
      {/* 顶部次级导航 */}
      <div 
        className="transition-all duration-300 border-b" 
        style={{ 
          height: '28px',
          backgroundColor: isTop ? 'transparent' : 'rgba(249, 250, 251, 0.95)',
          borderColor: isTop ? 'transparent' : 'rgba(243, 244, 246, 0.95)'
        }}
      >
        <div className={cn(
          "max-w-7xl mx-auto flex items-center justify-between text-[11px] font-medium px-4 h-full transition-colors duration-300",
          isDarkText ? "text-gray-500" : "text-white"
        )}>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 cursor-pointer hover:text-blue-600">
              <Globe size={12} />
              <span>中文 / CNY</span>
              <ChevronDown size={10} />
            </div>
          </div>
          <div className="flex items-center gap-5 h-full">
            {/* 购物车 */}
            <div className="relative cursor-pointer hover:text-blue-600 flex items-center px-1">
              <ShoppingCart size={13} />
              <span className="absolute -top-1 -right-2 bg-red-400 text-white text-[8px] font-bold rounded-full w-3.5 h-3.5 flex items-center justify-center border border-white">0</span>
            </div>

            {/* 寄送工具 */}
            <div className="relative group h-full flex items-center px-1 cursor-pointer hover:text-blue-600">
              <div className="flex items-center gap-1">
                <Truck size={13} />
                <ChevronDown size={10} className="transition-transform group-hover:rotate-180" />
              </div>
              
              {/* 下拉菜单: 寄送工具 */}
              <div className="absolute top-full right-[-60px] hidden group-hover:block pt-1 z-50">
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className="bg-white rounded-xl shadow-2xl border border-gray-100 p-4 w-[280px] text-gray-800"
                >
                  <div className="grid grid-cols-3 gap-y-6">
                    {[
                      { icon: <Calculator size={20} className="text-blue-400" />, label: '运费估算', path: '/shipping-estimation' },
                      { icon: <Search size={20} className="text-blue-400" />, label: '物流查询' },
                      { icon: <FileText size={20} className="text-blue-400" />, label: '寄送方案查询', path: '/shipping-estimation' },
                      { icon: <UserCheck size={20} className="text-blue-400" />, label: '寄送专家' },
                      { icon: <PenTool size={20} className="text-blue-400" />, label: '定制物流' },
                      { icon: <BookOpen size={20} className="text-blue-400" />, label: '购物咨询' },
                    ].map((item, idx) => (
                      <div 
                        key={idx} 
                        className="flex flex-col items-center gap-1.5 hover:text-blue-600 transition-colors cursor-pointer"
                        onClick={() => item.path && navigate(item.path)}
                      >
                        <div className="w-9 h-9 bg-blue-50 rounded-lg flex items-center justify-center">
                          {item.icon}
                        </div>
                        <span className="text-[10px] text-nowrap">{item.label}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>

            {/* 客服 */}
            <div className="relative group h-full flex items-center px-1 cursor-pointer hover:text-blue-600">
              <div className="flex items-center gap-1">
                <Headset size={13} />
                <ChevronDown size={10} className="transition-transform group-hover:rotate-180" />
              </div>

              {/* 下拉菜单: 客服 */}
              <div className="absolute top-full right-[-40px] hidden group-hover:block pt-1 z-50">
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className="bg-white rounded-xl shadow-2xl border border-gray-100 p-4 w-[240px] text-gray-800"
                >
                  <div className="grid grid-cols-3 gap-y-6">
                    {[
                      { icon: <HelpCircle size={20} className="text-blue-400" />, label: '帮助中心' },
                      { icon: <Heart size={20} className="text-blue-400" />, label: '客户服务' },
                      { icon: <Layers size={20} className="text-blue-400" />, label: '攻略汇总' },
                      { icon: <BookOpen size={20} className="text-blue-400" />, label: '新手教程' },
                      { icon: <MessageSquare size={20} className="text-blue-400" />, label: '联系我们' },
                      { icon: <Info size={20} className="text-blue-400" />, label: '关于我们' },
                    ].map((item, idx) => (
                      <div key={idx} className="flex flex-col items-center gap-1.5 hover:text-blue-600 transition-colors">
                        <div className="w-9 h-9 bg-blue-50 rounded-lg flex items-center justify-center">
                          {item.icon}
                        </div>
                        <span className="text-[10px] text-nowrap">{item.label}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>

            {/* 收件箱 */}
            <div className="relative group h-full flex items-center px-1 cursor-pointer hover:text-blue-600">
              <div className="relative">
                <Mail size={13} />
                <span className="absolute -top-0.5 -right-0.5 bg-red-500 rounded-full w-1.5 h-1.5 border border-white shadow-sm"></span>
              </div>

              {/* 下拉菜单: 收件箱 */}
              <div className="absolute top-full right-[-30px] hidden group-hover:block pt-1 z-50">
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className="bg-white rounded-xl shadow-2xl border border-gray-50 w-[200px] text-gray-800 py-2"
                >
                  {[
                    { label: '待处理事项', count: 77 },
                    { label: '未读重要消息', count: 0 },
                    { label: '其他未读消息', count: 678 },
                    { label: '我的咨询', count: 0 },
                  ].map((item, idx) => (
                    <div key={idx} className="px-4 py-2 hover:bg-gray-50 flex items-center justify-between group/msg transition-colors">
                      <span className="text-[11px] group-hover/msg:text-blue-600">{item.label}</span>
                      {item.count > 0 && <span className="text-[10px] font-black text-red-500">{item.count}</span>}
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>

            {/* 个人资料 */}
            <div className="relative group h-full flex items-center gap-1 cursor-pointer">
              <div className="relative">
                <img 
                  src="https://picsum.photos/seed/user/40/40" 
                  alt="avatar" 
                  className="w-5 h-5 rounded-full border border-gray-200" 
                />
                <span className="absolute -bottom-0.5 -right-0.5 bg-yellow-400 text-white text-[7px] font-black rounded-full px-0.5 shadow-sm">V6</span>
              </div>

              {/* 下拉菜单: 个人资料 */}
              <div className="absolute top-full right-0 hidden group-hover:block pt-1 z-50">
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className="bg-white rounded-xl shadow-2xl border border-gray-50 w-[240px] text-gray-800 py-1 overflow-hidden"
                >
                  <div className="px-4 py-3 border-b border-gray-100 flex items-center justify-between bg-gray-50 group/balance">
                    <div className="flex flex-col">
                       <span className="text-[10px] text-gray-400">我的余额</span>
                       <span className="text-xs font-black text-red-500">CN ¥ 6468887.1</span>
                    </div>
                    <button className="text-[10px] text-gray-500 hover:text-blue-600 transition-colors">去充值 &gt;</button>
                  </div>
                  <div className="py-1">
                    {[
                      { label: '购物订单', icon: <ShoppingCart size={14} /> },
                      { label: '转运订单', icon: <History size={14} /> },
                      { label: '我的仓库', icon: <Boxes size={14} /> },
                      { label: '我的包裹', icon: <Package size={14} /> },
                      { label: '我的推广联盟', icon: <User size={14} /> },
                    ].map((item, idx) => (
                      <div key={idx} className="px-4 py-2 hover:bg-gray-50 flex items-center gap-2 cursor-pointer transition-colors group/p">
                        <span className="text-gray-400 group-hover/p:text-blue-600">{item.icon}</span>
                        <span className="text-[11px] group-hover/p:text-blue-600">{item.label}</span>
                      </div>
                    ))}
                  </div>
                  <div className="border-t border-gray-100 py-1">
                    <div className="px-4 py-2 hover:bg-red-50 flex items-center gap-2 cursor-pointer transition-colors group/logout">
                      <LogOut size={14} className="text-gray-400 group-hover/logout:text-red-500" />
                      <span className="text-[11px] group-hover/logout:text-red-500">退出</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 主导航 */}
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between gap-10">
        <div className="flex items-center gap-12 shrink-0">
          <Link to="/">
            <img 
              src={ASSETS.LOGO} 
              alt="Superbuy" 
              style={{ color: '#4e4848' }}
              className={cn(
                "h-9 w-auto object-contain transition-all duration-300",
                !isDarkText ? "brightness-0 invert" : "" 
              )} 
            />
          </Link>
        </div>

        {/* 搜索框 */}
        <div className={cn(
          "flex-1 max-w-[700px] transition-all duration-300 transform",
          variant === 'standard' ? "opacity-100 translate-y-0" : scrollY > 200 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        )}>
          <div className="flex items-center h-10 border-2 border-blue-500 rounded-full bg-white overflow-hidden shadow-sm">
             <div className="flex items-center gap-1 px-4 border-r border-gray-100 cursor-pointer hover:bg-gray-50 h-full group">
                <span className="text-sm font-bold text-gray-700">商品</span>
                <ChevronDown size={14} className="text-gray-400 group-hover:text-blue-500" />
             </div>
             <div className="flex-1 px-4 h-full flex items-center">
                <input 
                  type="text" 
                  placeholder="商品链接或关键词" 
                  className="w-full bg-transparent border-none outline-none text-sm placeholder:text-gray-300"
                />
             </div>
             <div className="flex items-center px-4 gap-4 h-full">
                <button className="text-blue-500 hover:scale-110 transition-transform">
                   <ShoppingCart size={18} />
                </button>
                <div className="w-10 h-full bg-blue-500 flex items-center justify-center cursor-pointer hover:bg-blue-600 transition-colors">
                   <Search size={18} className="text-white" />
                </div>
             </div>
          </div>
        </div>

        <div className="flex items-center gap-12 shrink-0">
          <nav className="hidden lg:flex items-center gap-8">
            {variant === 'home' && NAV_LINKS.map(link => (
              <a 
                key={link.key} 
                href={`#${link.key}`} 
                className={cn(
                  "text-sm font-bold transition-all duration-300",
                  !isDarkText ? "text-white hover:text-blue-400" : "text-gray-700 hover:text-blue-600"
                )}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* 底部导航条 (标准模式) */}
      {variant === 'standard' && (
        <div className="bg-gray-50/80 border-t border-gray-100/50">
          <div className="max-w-7xl mx-auto px-4 flex items-center h-9 text-[13px] font-medium text-gray-700">
            <div className="flex items-center gap-4">
              <a href="/" className="hover:text-blue-600">首页</a>
              <span className="text-gray-300 text-[10px]">/</span>
              <a href="#trans" className="hover:text-blue-600">转运</a>
              <span className="text-gray-300 text-[10px]">/</span>
              <a href="#biz" className="hover:text-blue-600">商业合作</a>
              <span className="text-gray-300 text-[10px]">/</span>
              <a href="#aff" className="hover:text-blue-600">推广联盟</a>
              <span className="text-gray-300 text-[10px]">/</span>
              <a href="#price" className="hover:text-blue-600">价格</a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
