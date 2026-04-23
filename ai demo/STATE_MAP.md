# STATE_MAP.md (V1.0)

## 状态归属映射

| 状态描述 | 归属点 | 使用者 | 变更入口 |
| :--- | :--- | :--- | :--- |
| 当前分类 ID | `Home.tsx` | `ProductWall` | `CategoryTabs` |
| 滚动位置 (scrollY) | `Header.tsx` | `Header` | `window.scrollY` (EventListener) |
| 搜索关键词 | `SearchBar.tsx` | `SearchBar` | `SearchInput` |
| 侧边栏可见性 | `App.tsx` | `FloatingToolbar` | `ScrollEvent` |
| 用户登录态 (Mock) | `Header.tsx` | `Header` | 无 (预设 True) |
