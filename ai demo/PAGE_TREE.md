# PAGE_TREE.md (V1.5)

## 全局布局 (Global Layout)
### Header (Header.tsx)
1. **TopBar**: 语言/币种切换、购物车、寄送工具、客服、收件箱、个人中心。
2. **MainHeader**: 
   - **Home 模式**: 背景随滚动由透明变为实色，Logo 与文字颜色动态适配。
   - **Standard 模式**: 白色常驻背景，集成了参考图样式的复合搜索框（分类下拉 + 输入框 + 图片搜索图标 + 蓝色搜索按钮）。
3. **SubNav (Standard Mode Only)**: 灰色辅助导航条，提供“首页/转运/商业合作”等快捷链接。

### Footer (Footer.tsx)
包含服务保证、关于我们、社交媒体链接与版权信息。

### SideToolbar (SideToolbar.tsx) [NEW GLOBAL]
1. **BeijinTime**: 实时北京时间播报。
2. **ToolIcons**: 微信码、APP码、购物车、客服快捷入口。
3. **ShoppingAssistant**: 悬浮二级菜单（估算、转运、查询）。
4. **Mascot**: 在线客服萌宠入口。
5. **BackToTop**: 下滚触发的平滑回顶。

## 首页 (Home.tsx) 区块划分

1. **TopNavSegment**: 语言切换、用户入口。
2. **HeaderSegment**: Logo + 主导航。
3. **HeroSegment**: 
   - `TitleGroup`: 品牌标语。
   - `SearchBar`: 跨平台搜索组件。
   - `QuickActionGroup`: 订单、咨询、估价工具。
   - `ServiceStepGroup`: 移入此处的代购服务三部曲（含毛玻璃背景）。
4. **AnnouncementSegment**: 纵向滚动的公告通知栏（含物流调价等实时信息）。
5. **OperationBannerSegment**: 
   - 包含四个主题卡位（新年、Run! Ace!、年货福利、Superbuy严选）。
   - 增加“更多”链接入口。
6. **DynamicInfoSegment**: 
   - `ProductFeed`: 商品推荐墙。
   - `ShippingFeed`: 物流实时动态。
6. **FooterSegment**: 链接矩阵 + 资质信息。

## 工作台 (Workstation.tsx)
1. **ToolBarSegment**: 页签切换、搜索、选应用按钮。
2. **AppGridSegment**: 核心应用磁贴网格。

## 商品详情页 (ProductDetail.tsx)
1. **ProductNavigation**: 顶部返回键、商品标题、分享/收藏。
2. **GallerySection**: 商品主图轮播、缩略图列表。
3. **ProductConfigSection**: 价格、属性选择（数量）、运费线路预览、购买按钮。
4. **SocialProofSection**: 预览评价碎片的统计信息。
5. **DetailTabsSection**: 商品描述、规格参数、详细评价 Tabs 区块。

## 物流详情页 (ShippingDetail.tsx)
1. **Breadcrumbs**: 运费估算 > 方案详情。
2. **RouteRateCard**: 线路名称、资费明细表（首重/续重/报关等）、邮寄限制说明、立即下单按钮。
3. **PackageDetailSection**: 用户资产脱敏显示（如 T****o）、包裹重量、尺寸、目的地及提交时间。
4. **ItemListSection**: 包裹内商品清单（图文摘要、规格）、买同款快捷入口。

## 运费估算页 (ShippingEstimation.tsx)
1. **PromoBanner**: 顶部晒单奖励横幅。
2. **EstimationFormSection**: 目的地、物品分类（含快捷建议）、重量及体积输入框。
3. **TabSwitcher**: “运费估算”与“商品寄送方案查询”双模式切换。
4. **ListView (Estimation Mode)**: 
    - 方案过滤 Bar（排序/服务商/税费/周期/价格区间）。
    - 物流线路卡片流（含警告提示、资费模型分析、时效监测、立即下单入口）。
5. **GridView (Solution Mode)**:
    - 瀑布流案例卡片（包含商品来源网标、签收路径、运费明细、包裹实测数值、商品预览图）。
6. **ShortcutEntrySection**: “寄送专家”与“定制服务”渐变色块入口。
7. **FAQSection**: 核心业务问题的详细解答矩阵。

## 二手代购页 (SecondHandShopping.tsx)
1. **SearchSection**: 包含闲鱼、拍拍平台支持标识的复合搜索框。
2. **StepSection**: 数字化服务步骤（1-5）。
3. **PitfallBanner**: “二手代购排雷技巧”大幅推广位。
4. **ProductShowcase**: “二手好物”区块，包含二次元特典、特色服饰等主题。
5. **ResearchInstitute**: “二手好物研究所”内容分享区块（瀑布流/矩阵式评价卡片）。

## 手动提交订单页 (ManualOrder.tsx)
1. **TitleProgressSection**: 页面标题、必填项提示及 1-3 步可视化进度条。
2. **FormMatrix**:
    - **ProductInfoCard**: 链接（必填）、名称、分类、备注输入矩阵。
    - **FeeInfoCard**: 商品单价（多币种）、数量、寄送仓库选择、到仓运费。
    - **AttachmentSection**: 图片上传区域（支持多格式，有大小限制说明）。
3. **StatementSidebar**: 免责声明与费用声明侧边提示。
4. **ActionFooter**: 总计金额摘要（带运费估算入口）及“立即购买/加入购物车”动作组。
5. **KnowledgeBaseTabs**: “代购须知”与“售后服务”内容切换，内置海关邮寄限制矩阵表。

## 代购指南页 (ShoppingGuide.tsx)
1. **GuideBanner**: 深色调背景，包含“下单-提包-收货”三阶段服务流可视化。
2. **NavigationMatrix**: 包含“代购指引”、“海淘工具箱”、“服务市场”、“主流电商平台”四个功能磁贴组。
3. **ThemedShowcaseMatrix**: 垂直排列的分类磁贴，包含潮玩手办、时尚女装、户外运动等多个品类的矩阵式商品列表。

## 晒单奖励页 (ReviewRewards.tsx)
1. **ActivityHero**: 标志性的 $100 奖金与活动摘要。
2. **ProcessTimeline**: 5 步走活动流程。
3. **RegulationCard**: 详细的图文晒单格式与社媒渠道参考。
4. **ShowcaseGallery**: 优秀用户晒单案例展示。

## 折叠鞋盒服务页 (ShoeBoxService.tsx)
1. **PostLayout**: 模拟社区帖子结构的详情展示。
2. **ServiceFeature**: 服务价格（¥5）、空间节省说明。
3. **TutorialSection**: 带有系统截图的仓库端操作教学。
4. **MemberSidebar**: 官方账号信息及侧边热门推荐。

## BBS社区门户 (Community.tsx)
1. **BBSHeaderSegment**: 顶部 Banner（包含新手指引导航、物流时效看板及精品团购入口）。
2. **CategoryNavigation**: 包含服务建议、物流资讯、代购指南、常见问题等品类的筛选页签。
3. **PostListSegment**: 瀑布流/垂直排列的 BBS 帖子卡片，包含作者信息、摘要及阅读/收藏统计。
4. **SideWidgetGroups**: 
    - **NoticeWidget**: 滚动/静态公告悬浮窗。
    - **SocialWidget**: 官方社媒（YouTube/Twitter等）快捷入口。
    - **HotArticles**: 热门文章排行。
    - **TagCloud**: 热门分类标签云。

## 图文教程页 (Tutorial.tsx) [ITERATED]
1. **SearchGuideline**: 顶部常驻搜索指引，带背景插画。
2. **PlatformGrouping**: 平台的品类化分组展示（Top 3, 新势力, 二手电商, 其他平台），点击交互动态切换下方教程内容。
3. **ShoppingTutorial (Dynamic)**: 
    - **DynamicStep1**: 根据选定平台组展示对应的“挑选商品”文案与参考图。
    - **StandardWorkflow**: 包含支付、买手订购、验货、提交包裹等后续通用 8 个核心步骤。
    - **BusinessIllustration**: 适配步骤的业务演示图。
    - **ProTips**: 每个大环节配套的避坑指南与操作技巧。
4. **ParcelTutorial**: “提包发货”专项流程指引（合包、称重、出库）。
5. **ActionCTA**: 底部“立即购物”快速转场入口。
