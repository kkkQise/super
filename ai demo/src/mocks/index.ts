export interface Product {
  id: string;
  title: string;
  price: number;
  originalPrice: number;
  image: string;
  updateTime: string;
  destCountry: string;
  platform: string;
  category: 'FASHION' | 'DIGITAL' | 'HOME' | 'BEAUTY' | 'TOYS' | 'HOBBY' | 'ACCESSORIES' | 'WOMEN' | 'MEN' | 'SPORTS';
}

export const MOCK_PRODUCTS: Product[] = [
  {
    id: '1',
    title: '男鞋春夏季新款网面鞋子男士网鞋',
    price: 7.13,
    originalPrice: 18.33,
    image: 'https://picsum.photos/seed/shoe1/300/300',
    updateTime: '1分钟内',
    destCountry: 'US',
    platform: 'taobao',
    category: 'FASHION'
  },
  {
    id: '2',
    title: '兔打孔挂钩超强力承重粘胶厨房',
    price: 0.70,
    originalPrice: 1.50,
    image: 'https://picsum.photos/seed/hook1/300/300',
    updateTime: '3分钟内',
    destCountry: 'GB',
    platform: 'taobao',
    category: 'HOME'
  },
  {
    id: '3',
    title: '世晶天然巴西紫水晶手链紫罗兰',
    price: 15.15,
    originalPrice: 20.50,
    image: 'https://picsum.photos/seed/jewel1/300/300',
    updateTime: '5分钟内',
    destCountry: 'CA',
    platform: '1688',
    category: 'BEAUTY'
  },
  {
    id: '4',
    title: 'OPPO一加Ace 2新款5G手机官方官网',
    price: 328.61,
    originalPrice: 400.00,
    image: 'https://picsum.photos/seed/phone1/300/300',
    updateTime: '8分钟内',
    destCountry: 'AU',
    platform: 'taobao',
    category: 'DIGITAL'
  },
  {
    id: '5',
    title: '夏季潮流宽松短袖T恤男',
    price: 12.00,
    originalPrice: 25.00,
    image: 'https://picsum.photos/seed/tshirt/300/300',
    updateTime: '10分钟内',
    destCountry: 'DE',
    platform: 'taobao',
    category: 'FASHION'
  },
  {
    id: '6',
    title: '可爱毛绒玩具公仔大熊猫',
    price: 15.00,
    originalPrice: 30.00,
    image: 'https://picsum.photos/seed/panda/300/300',
    updateTime: '12分钟内',
    destCountry: 'JP',
    platform: 'taobao',
    category: 'TOYS'
  },
  {
    id: '7',
    title: '修身显瘦黑色小香风连衣裙',
    price: 25.50,
    originalPrice: 45.00,
    image: 'https://picsum.photos/seed/dress/300/300',
    updateTime: '15分钟内',
    destCountry: 'US',
    platform: 'taobao',
    category: 'FASHION'
  },
  {
    id: '8',
    title: '智能降噪蓝牙耳机 Pro',
    price: 89.99,
    originalPrice: 120.00,
    image: 'https://picsum.photos/seed/earbuds/300/300',
    updateTime: '18分钟内',
    destCountry: 'GB',
    platform: 'jd',
    category: 'DIGITAL'
  },
  {
    id: '9',
    title: '不粘锅平底锅 32cm',
    price: 35.00,
    originalPrice: 50.00,
    image: 'https://picsum.photos/seed/pan/300/300',
    updateTime: '20分钟内',
    destCountry: 'CA',
    platform: 'taobao',
    category: 'HOME'
  },
  {
    id: '10',
    title: '补水保湿面霜 50ml',
    price: 18.20,
    originalPrice: 28.00,
    image: 'https://picsum.photos/seed/cream/300/300',
    updateTime: '25分钟内',
    destCountry: 'AU',
    platform: 'vip',
    category: 'BEAUTY'
  },
  // 潮玩手办
  {
    id: 'h1',
    title: '五等分的花嫁 中野三玖 手办现货',
    price: 70.46,
    originalPrice: 150.00,
    image: 'https://picsum.photos/seed/hobby1/300/300',
    updateTime: '1小时前',
    destCountry: 'US',
    platform: 'taobao',
    category: 'HOBBY'
  },
  {
    id: 'h2',
    title: '进击的巨人 调查兵团 披风',
    price: 59.37,
    originalPrice: 159.00,
    image: 'https://picsum.photos/seed/hobby2/300/300',
    updateTime: '2小时前',
    destCountry: 'JP',
    platform: 'taobao',
    category: 'HOBBY'
  },
  // 时尚精品
  {
    id: 'a1',
    title: '韩国气质水滴仿水晶耳环',
    price: 2.39,
    originalPrice: 8.00,
    image: 'https://picsum.photos/seed/acc1/300/300',
    updateTime: '3小时前',
    destCountry: 'US',
    platform: 'taobao',
    category: 'ACCESSORIES'
  },
  // 时尚女装
  {
    id: 'w1',
    title: '法式复古小香风裙/衬衫',
    price: 109.9,
    originalPrice: 200.00,
    image: 'https://picsum.photos/seed/women1/300/300',
    updateTime: '30分钟前',
    destCountry: 'CA',
    platform: 'taobao',
    category: 'WOMEN'
  },
  // 潮流男装
  {
    id: 'm1',
    title: '日系简约工装口袋衬衫',
    price: 89.00,
    originalPrice: 150.00,
    image: 'https://picsum.photos/seed/men1/300/300',
    updateTime: '4小时前',
    destCountry: 'US',
    platform: 'taobao',
    category: 'MEN'
  },
  // 运动户外
  {
    id: 'sp1',
    title: '户外露营帐篷/遮阳天幕',
    price: 178.00,
    originalPrice: 388.00,
    image: 'https://picsum.photos/seed/sports1/300/300',
    updateTime: '5小时前',
    destCountry: 'AU',
    platform: '1688',
    category: 'SPORTS'
  }
];

export interface ShippingLine {
  id: string;
  name: string;
  price: number;
  duration: string;
  countryCode: string;
  weight: string;
  size: string;
}

export const MOCK_SHIPPING: ShippingLine[] = [
  {
    id: 's1',
    name: 'UPS(HK)-5500',
    price: 75.03,
    duration: '6个工作日签收',
    countryCode: 'CA',
    weight: '2478g',
    size: '36.6 x 26.6 x 14cm'
  },
  {
    id: 's2',
    name: '云途空运专线 (带电)',
    price: 32.00,
    duration: '15个工作日签收',
    countryCode: 'US',
    weight: '1287g',
    size: '34.8 x 23.6 x 9.7cm'
  },
  {
    id: 's3',
    name: 'EMS 特快专线',
    price: 45.50,
    duration: '8个工作日签收',
    countryCode: 'GB',
    weight: '1500g',
    size: '30 x 20 x 10cm'
  },
  {
    id: 's4',
    name: '澳洲专线-特惠',
    price: 55.20,
    duration: '10个工作日签收',
    countryCode: 'AU',
    weight: '3200g',
    size: '40 x 30 x 15cm'
  },
  {
    id: 's5',
    name: '中邮挂号小包',
    price: 12.50,
    duration: '25个工作日签收',
    countryCode: 'DE',
    weight: '450g',
    size: '20 x 15 x 5cm'
  },
  {
    id: 's6',
    name: 'DHL 极速专线',
    price: 88.00,
    duration: '3个工作日签收',
    countryCode: 'US',
    weight: '2100g',
    size: '30 x 30 x 20cm'
  },
  {
    id: 's7',
    name: '海运集运大货线',
    price: 150.00,
    duration: '45个工作日签收',
    countryCode: 'CA',
    weight: '15000g',
    size: '60 x 50 x 40cm'
  },
  {
    id: 's8',
    name: '日本佐川急便',
    price: 28.50,
    duration: '5个工作日签收',
    countryCode: 'JP',
    weight: '1200g',
    size: '25 x 20 x 15cm'
  }
];

export interface CommunityPost {
  id: string;
  title: string;
  summary: string;
  content: string;
  author: string;
  authorAvatar: string;
  date: string;
  category: 'SERVICE' | 'LOGISTICS' | 'GUIDE' | 'FAQ' | 'GENERAL';
  views: number;
  likes: number;
  image?: string;
}

export const MOCK_COMMUNITY_POSTS: CommunityPost[] = [
  {
    id: '1',
    title: '部分欧洲线路物流时效延误通知',
    summary: '尊敬的Superbuy客户：您好！由于北太西洋公约组织（NATO）首脑会议将于1月7日至12日在立陶宛举行，当地政府对于陆运及海运区域（特别地处陆地周边及主要干道）局势...',
    content: '尊敬的Superbuy客户：您好！由于北太西洋公约组织（NATO）首脑会议将于1月7日至12日在立陶宛举行，当地政府对于陆运及海运区域（特别地处陆地周边及主要干道）局势管控。在此期间，通过该区域的货件可能会出现清关或派送延误。',
    author: '凡妮莎爱吃草莓蛋糕',
    authorAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Vanessa',
    date: '2025-06-19',
    category: 'LOGISTICS',
    views: 459,
    likes: 0,
  },
  {
    id: '2',
    title: '【物流价格调整】欧洲空派&欧欧免税空运经济专线运费调通知',
    summary: '尊敬的Superbuy用户：接物流商通知，因运费成本调整，Superbuy承诺的以下线路将调整运费：欧洲空派 欧洲空运（特货）欧欧免税空运经济专线（普货）欧欧免税空运经济专线（特货）...',
    content: '内容详情...',
    author: '凡妮莎爱吃草莓蛋糕',
    authorAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Vanessa2',
    date: '2025-06-18',
    category: 'LOGISTICS',
    views: 262,
    likes: 0,
  },
  {
    id: '3',
    title: 'Superbuy客服系统全新升级！5月30日起反馈有礼！',
    summary: '尊敬的Superbuy用户：衷心感谢您一直以来对Superbuy的信任与支持！在Superbuy，我们始终秉承“极致服务”的理念，致力于为用户打造更优质的购物体验。为了更好地满足您的需求，我们极其...',
    content: '内容详情...',
    author: '小Q编',
    authorAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Editor',
    date: '2025-05-30',
    category: 'SERVICE',
    views: 1288,
    likes: 1,
  },
  {
    id: '4',
    title: 'Superbuy春节假期公告及服务暂停通知',
    summary: '尊敬的Superbuy用户：年虽远轮年，月更值轮年。Superbuy团队预祝各位新春快乐！Superbuy员工将于1月21日至1月27日（北京时间）放假。在此期间，我们将暂停服务，并于1月28日恢复服务。感谢大家的理...',
    content: '内容详情...',
    author: 'camelTowing',
    authorAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Camel',
    date: '2025-01-18',
    category: 'GENERAL',
    views: 16658,
    likes: 2,
  },
  {
    id: '5',
    title: '【赠送“优先出库”服务】优选Superbuy空运专线，极速3小时完成打包称重',
    summary: 'Superbuy空运专线，自营物流线路，全程为您保驾护航！可寄送美国、加拿大、英国！普货、敏感物品悉数包容！空运仓储，为您打造极速清关体验！如果您在转运过程中遇到任何问题...',
    content: '内容详情...',
    author: 'truelies',
    authorAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=True',
    date: '2022-10-17',
    category: 'LOGISTICS',
    views: 9740,
    likes: 9,
  }
];

export interface Review {
  id: string;
  user: string;
  avatar: string;
  content: string;
  rating: number;
  date: string;
  countryCode: string;
  category?: string;
  images?: string[];
}

export const MOCK_REVIEWS: Review[] = [
  {
    id: 'r1',
    user: 'S******_C******',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=s1',
    content: '(This is for the LNY review event! Not sure if this is the place for it, but here we go~) Because the volumes were very heavy...',
    rating: 5,
    date: '1小时前',
    countryCode: 'US',
    category: 'HOBBY',
    images: ['https://images.unsplash.com/photo-1549463599-24759e66c986?auto=format&fit=crop&q=80&w=400&h=400']
  },
  {
    id: 'r2',
    user: 'A**** N***',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=s2',
    content: 'This time 2 @SuperbuyChina, parcels arrived the same day! So here you are the review of the second one ...a lot of clothes...',
    rating: 5,
    date: '3小时前',
    countryCode: 'CA',
    category: 'MEN',
    images: ['https://images.unsplash.com/photo-1621243804936-775306a8f2e3?auto=format&fit=crop&q=80&w=400&h=400']
  },
  {
    id: 'r3',
    user: 'M***a L***',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=s3',
    content: 'Everything was packed perfectly. These anime figures are so detailed! Definitely will buy again.',
    rating: 5,
    date: '5小时前',
    countryCode: 'DE',
    category: 'HOBBY',
    images: ['https://images.unsplash.com/photo-1551269901-5c5e14c25df7?auto=format&fit=crop&q=80&w=400&h=400']
  },
  {
    id: 'r4',
    user: 'T***o K***',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=s4',
    content: 'The shipping was super fast to Japan. These posters arrived in a tube, no wrinkles at all!',
    rating: 5,
    date: '8小时前',
    countryCode: 'JP',
    category: 'HOBBY',
    images: ['https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=400&h=400']
  },
  {
    id: 'r5',
    user: 'X***y_99',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=s5',
    content: 'Bought a whole set of limited edition art books. Superbuy reinforced the package box so well, not a single corner was bumped! So grateful.',
    rating: 5,
    date: '10小时前',
    countryCode: 'US',
    category: 'HOBBY',
    images: ['https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=400&h=400']
  },
  {
    id: 'r6',
    user: 'D***vid_K',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=s6',
    content: 'My custom keyboard arrived safely. The bubble wrap was like 3 inches thick lol. 10/10 service for fragile items.',
    rating: 5,
    date: '12小时前',
    countryCode: 'AU',
    category: 'DIGITAL',
    images: ['https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?auto=format&fit=crop&q=80&w=400&h=400']
  },
  {
    id: 'r7',
    user: 'L***la_Moon',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=s7',
    content: 'Seasonal cosmetics from Taobao! Arrived in London within 10 days using Tax-free line. Highly recommended for skincare hauls!',
    rating: 5,
    date: '15小时前',
    countryCode: 'GB',
    category: 'BEAUTY',
    images: ['https://images.unsplash.com/photo-1596462502278-27bfad450216?auto=format&fit=crop&q=80&w=400&h=400']
  },
  {
    id: 'r8',
    user: 'R***ck_B',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=s8',
    content: 'Vintage cameras collection. The QC photos were very detailed, letting me see the lens condition before shipping overseas.',
    rating: 5,
    date: '18小时前',
    countryCode: 'CA',
    category: 'DIGITAL',
    images: ['https://images.unsplash.com/photo-1516035069341-34939603c7f2?auto=format&fit=crop&q=80&w=400&h=400']
  },
  {
    id: 'r9',
    user: 'Y***na_V',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=s9',
    content: 'Just received my Hanfu! The embroidery is stunning. Superbuy helped me confirm the size with the seller. Perfect fit!',
    rating: 5,
    date: '1天前',
    countryCode: 'JP',
    category: 'WOMEN',
    images: ['https://images.unsplash.com/photo-1617201834942-706823363402?auto=format&fit=crop&q=80&w=400&h=400']
  }
];

export interface ProductDetail extends Product {
  description: string;
  images: string[];
  specs: { label: string; value: string }[];
  shippingInfo: string;
  reviews: Review[];
}

export const MOCK_PRODUCT_DETAILS: Record<string, ProductDetail> = {
  '1': {
    ...MOCK_PRODUCTS[0],
    description: '新款透气网面运动鞋，轻便舒适，适合夏季跑步与日常穿搭。采用高弹中底，减震护足。',
    images: [
      'https://picsum.photos/seed/shoe1/600/600',
      'https://picsum.photos/seed/shoe1_2/600/600',
      'https://picsum.photos/seed/shoe1_3/600/600',
    ],
    specs: [
      { label: '品牌', value: '自由品牌' },
      { label: '闭合方式', value: '系带' },
      { label: '鞋底材质', value: '橡胶' },
      { label: '鞋面材质', value: '网布' },
    ],
    shippingInfo: '通常在24小时内发货，支持国际转运',
    reviews: [MOCK_REVIEWS[0]],
  },
  '2': {
    ...MOCK_PRODUCTS[1],
    description: '强力粘胶挂钩，免打孔设计，不伤墙面。适用于厨房、卫浴等多种场景。',
    images: [
      'https://picsum.photos/seed/hook1/600/600',
      'https://picsum.photos/seed/hook1_2/600/600',
    ],
    specs: [
      { label: '材质', value: 'ABS塑料' },
      { label: '承重', value: '5kg' },
      { label: '安装方式', value: '背胶' },
    ],
    shippingInfo: '通常在12小时内发货',
    reviews: [],
  }
};

export interface WorkstationApp {
  id: string;
  title: string;
  description: string;
  icon: string;
  tag?: string;
}

export const MOCK_APPS: WorkstationApp[] = [
  { id: '1', title: '审批', description: '企业可自定义审批模版，实...', icon: 'https://api.iconify.design/flat-color-icons:approval.svg' },
  { id: '2', title: '汇报', description: '企业对员工工作内容及过程...', icon: 'https://api.iconify.design/flat-color-icons:report.svg' },
  { id: '3', title: '公告', description: '企业向员工互传的内容重要...', icon: 'https://api.iconify.design/flat-color-icons:advertising.svg' },
  { id: '4', title: '健康上报', description: '疫情期间，可使用健康上报...', icon: 'https://api.iconify.design/flat-color-icons:plus.svg' },
  { id: '5', title: '上下游', description: '在上下游，与经销商、供应...', icon: 'https://api.iconify.design/flat-color-icons:workflow.svg' },
  { id: '6', title: '上下游协作', description: '加入上下游后，你可以便捷...', icon: 'https://api.iconify.design/flat-color-icons:conference-call.svg' },
  { id: '7', title: '智能总结', description: '邀请同事一起汇总信息，并...', icon: 'https://api.iconify.design/flat-color-icons:rating.svg' },
  { id: '8', title: '智能机器人', description: '可创建和管理智能机器人，...', icon: 'https://api.iconify.design/flat-color-icons:command-line.svg' },
  { id: '9', title: '智能表格', description: '比亚格更强大的业务数据库...', icon: 'https://api.iconify.design/flat-color-icons:grid.svg' },
  { id: '10', title: '企业名片', description: '更正式地对外介绍企业和展...', icon: 'https://api.iconify.design/flat-color-icons:contacts.svg' },
  { id: '11', title: '行业资讯', description: '在这里和同事一起阅读行业...', icon: 'https://api.iconify.design/flat-color-icons:news.svg' },
  { id: '12', title: '微信客服', description: '可以在微信内、外各个场景...', icon: 'https://api.iconify.design/logos:whatsapp-icon.svg' },
  { id: '13', title: '会议室', description: '管理企业内部的会议室，供...', icon: 'https://api.iconify.design/flat-color-icons:calendar.svg' },
  { id: '14', title: 'AI工具平台', description: '内部效率提升工具', icon: 'https://picsum.photos/seed/ai/40/40' },
  { id: '15', title: 'BD通行证', description: 'BD内部系统认证授权', icon: 'https://api.iconify.design/flat-color-icons:portrait-mode.svg' },
  { id: '16', title: 'Bucky AI助手', description: 'AI对话/AI圆图/业务助手', icon: 'https://picsum.photos/seed/bucky/40/40' },
  { id: '17', title: 'ChatGPT', description: 'AI助力你提高工作效率', icon: 'https://api.iconify.design/logos:openai-icon.svg' },
  { id: '18', title: '代购后台登陆', description: '', icon: 'https://api.iconify.design/flat-color-icons:enter.svg' },
  { id: '19', title: 'Superbuy智能助手(beta)', description: '', icon: 'https://picsum.photos/seed/sb/40/40' },
  { id: '20', title: '腾讯云企业服务', description: '腾讯云企业服务，为用户提...', icon: 'https://api.iconify.design/logos:tencent-cloud.svg' },
  { id: '21', title: '星球圈', description: '从这里，了解STARIT', icon: 'https://api.iconify.design/flat-color-icons:globe.svg' },
  { id: '22', title: '星球BBS', description: '知识沉淀、沟通、协作', icon: 'https://api.iconify.design/flat-color-icons:comments.svg' },
  { id: '23', title: '用友工资条', description: '很多人把用友工资条看成是...', icon: 'https://api.iconify.design/flat-color-icons:money-transfer.svg' },
  { id: '24', title: '投屏', description: '通过与智慧硬件设备的连接...', icon: 'https://api.iconify.design/flat-color-icons:video-projector.svg' },
];
