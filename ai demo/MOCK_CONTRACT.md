# MOCK_CONTRACT.md (V1.2)

## 数据契约 (Dictionary)

### ProductEntity
- `id`: string
- `title`: string (商品名称)
- `price`: number (现价)
- `originalPrice`: number (原价)
- `image`: string
- `platform`: string (例如'taobao', 'jd', '1688', 'weidian', 'vip')
- `destCountry`: string (目的地代码，如 'US', 'GB')
- `updateTime`: string (例如 "5分钟内")
- `category`: 'FASHION' | 'DIGITAL' | 'HOME' | 'BEAUTY' | 'TOYS'

### ShippingLineEntity
- `id`: string
- `name`: string (线路名称)
- `price`: number (预估运费)
- `duration`: string (配送时效)
- `countryCode`: string (目的地代码)
- `weight`: string (模拟重量，如 '2478g')
- `size`: string (模拟体积，如 '36.6 x 26.6 x 14cm')

### ReviewEntity
- `id`: string
- `user`: string (脱敏用户名)
- `avatar`: string
- `content`: string (评价内容)
- `rating`: number (1-5)
- `date`: string (相对时间)
- `countryCode`: string (目的地代码)
- `category`: string (可选，关联品类)
- `images`: string[] (可选)

### WorkstationAppEntity
- `id`: string
- `title`: string (应用名称)
- `description`: string (应用描述)
- `icon`: string (图标URL)
- `tag`: string (可选，如 "beta")

### ProductDetailEntity (Extends ProductEntity)
- `description`: string (长文本描述)
- `images`: string[] (高清图库集)
- `specs`: { label: string, value: string }[] (商品规格参数)
- `shippingInfo`: string (简化的物流说明)
- `reviews`: ReviewEntity[] (关联的评价列表)

### CommunityPostEntity
- `id`: string
- `title`: string (文章标题)
- `summary`: string (摘要内容)
- `author`: string (作者昵称)
- `authorAvatar`: string (作者头像)
- `date`: string (发表日期)
- `category`: 'SERVICE' | 'LOGISTICS' | 'GUIDE' | 'FAQ' | 'GENERAL'
- `views`: number (阅读数)
- `likes`: number (点赞/收藏数)
- `image`: string (可选，封面图)
