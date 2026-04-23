export const ASSETS = {
  LOGO: 'https://img.superbuy.com/img/front/common/logo.png', // 尽量使用官方或清晰占位
  FLAGS: {
    CN: 'https://flagcdn.com/w20/cn.png',
    US: 'https://flagcdn.com/w20/us.png',
    CA: 'https://flagcdn.com/w20/ca.png',
    GB: 'https://flagcdn.com/w20/gb.png',
    AU: 'https://flagcdn.com/w20/au.png',
    DE: 'https://flagcdn.com/w20/de.png',
    FR: 'https://flagcdn.com/w20/fr.png',
    JP: 'https://flagcdn.com/w20/jp.png',
  },
  PLATFORMS: {
    TAOBAO: 'https://www.taobao.com/favicon.ico',
    JD: 'https://www.jd.com/favicon.ico',
    XIANYU: 'https://v.alicdn.com/favicon.ico',
    '1688': 'https://www.1688.com/favicon.ico',
    WEIDIAN: 'https://weidian.com/favicon.ico',
    VIP: 'https://www.vip.com/favicon.ico',
  },
  BANNERS: [
    { title: '代购指南', color: 'bg-[#68cdff]', image: 'https://picsum.photos/seed/guide/400/160', path: '/guide' },
    { title: '二手代购', color: 'bg-[#ffda00]', image: 'https://picsum.photos/seed/secondhand/400/160', path: '/second-hand-shopping' },
    { title: '晒单最高赢 $100', color: 'bg-[#007aff]', image: 'https://picsum.photos/seed/prize/400/160', path: '/review-rewards' },
    { title: '折叠鞋盒 轻松省运费!', color: 'bg-[#1890ff]', image: 'https://picsum.photos/seed/box/400/160', path: '/shoe-box-service' },
  ]
};

export const FILTER_COUNTRIES = [
  { label: '全部国家', value: 'ALL' },
  { label: '美国', value: 'US' },
  { label: '英国', value: 'GB' },
  { label: '加拿大', value: 'CA' },
  { label: '澳大利亚', value: 'AU' },
  { label: '德国', value: 'DE' },
  { label: '日本', value: 'JP' },
];

export const FILTER_CATEGORIES = [
  { label: '全部品类', value: 'ALL' },
  { label: '衣服鞋包', value: 'FASHION' },
  { label: '家电数码', value: 'DIGITAL' },
  { label: '家居厨具', value: 'HOME' },
  { label: '美妆个护', value: 'BEAUTY' },
  { label: '零食玩具', value: 'TOYS' },
];

export const NAV_LINKS = [
  { label: '首页', key: 'home' },
  { label: '转运', key: 'forwarding' },
  { label: '商业合作', key: 'business' },
  { label: '推广联盟', key: 'affiliate' },
  { label: '价格', key: 'pricing' },
];

export const FOOTER_LINKS = {
  service: ['帮助中心', '联系我们', '专家服务', '假冒产品政策'],
  guide: ['代购演示', '服务与费用', '订单状态', '退换货服务'],
  payment: ['充值方式', 'Wise支付', '国际信用卡', '微信支付'],
  shipping: ['物流运费', '邮寄限制', '海关及税项', '收货注意事项'],
  aftersales: ['商品保管期', '验货规则', '售后政策', '保险及赔偿'],
};
