import React from 'react';
import { FOOTER_LINKS } from '../../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 pt-16 pb-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-16">
          <div>
            <h5 className="text-sm font-bold text-gray-900 mb-6">客服服务</h5>
            <ul className="space-y-3">
              {FOOTER_LINKS.service.map(item => (
                <li key={item} className="text-xs text-gray-500 hover:text-blue-600 cursor-pointer">{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="text-sm font-bold text-gray-900 mb-6">代购指南</h5>
            <ul className="space-y-3">
              {FOOTER_LINKS.guide.map(item => (
                <li key={item} className="text-xs text-gray-500 hover:text-blue-600 cursor-pointer">{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="text-sm font-bold text-gray-900 mb-6">支付方式</h5>
            <ul className="space-y-3">
              {FOOTER_LINKS.payment.map(item => (
                <li key={item} className="text-xs text-gray-500 hover:text-blue-600 cursor-pointer">{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="text-sm font-bold text-gray-900 mb-6">配送相关</h5>
            <ul className="space-y-3">
              {FOOTER_LINKS.shipping.map(item => (
                <li key={item} className="text-xs text-gray-500 hover:text-blue-600 cursor-pointer">{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="text-sm font-bold text-gray-900 mb-6">售后服务</h5>
            <ul className="space-y-3">
              {FOOTER_LINKS.aftersales.map(item => (
                <li key={item} className="text-xs text-gray-500 hover:text-blue-600 cursor-pointer">{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-start gap-8">
          <div className="max-w-md">
            <div className="flex items-center gap-4 text-[11px] text-gray-400 font-medium mb-4">
               <span>Wise | VISA | ALIPAY | WeChat Pay | Union Pay</span>
            </div>
            <p className="text-[10px] text-gray-400 leading-relaxed">
              7x24小时（北京时间09:00~18:00）服务热线 (非免费): +86 123456789 <br/>
              服务邮箱: care@superbuy-demo.com <br/>
              商务合作邮箱: b2b@superbuy-demo.com
            </p>
          </div>
          <div className="flex items-center gap-4">
             <div className="w-20 h-20 bg-gray-200 rounded flex items-center justify-center text-[10px] text-gray-400">
               QR Code
             </div>
             <div className="text-[10px] text-gray-400 uppercase leading-relaxed">
               © 2012-2024 SUPERBUY.COM <br/> ALL RIGHTS RESERVED
             </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
