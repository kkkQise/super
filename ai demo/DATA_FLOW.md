# DATA_FLOW.md (V1.0)

## 核心数据流向

1. **商品推荐流**:
   - 源: `src/mocks/products.js`
   - 处理: `src/hooks/useProducts.ts` (处理分类过滤与假分页)
   - 消费: `src/components/home/ProductWall.tsx`

2. **物流情报流**:
   - 源: `src/mocks/shipping.js`
   - 处理: `src/hooks/useShippingLines.ts`
   - 消费: `src/components/home/ShippingWall.tsx`

3. **导航映射流**:
   - 源: `src/constants/navigation.js`
   - 处理: 组件直接引用。
   - 消费: `src/components/layout/Header.tsx`, `Footer.tsx`
