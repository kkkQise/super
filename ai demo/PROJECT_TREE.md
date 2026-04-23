# PROJECT_TREE.md (V1.0)

## 目录结构与职能定义

- `src/constants/`: 静态映射表，包含资源 URL、导航配置。
- `src/mocks/`: 业务实体 Mock 数据（商品列表、物流线路、分类数据）。
- `src/utils/`: 格式化工具、延迟加载模拟器。
- `src/hooks/`: 状态流转中心，封装对 Mock 数据的获取逻辑。
- `src/components/`:
  - `layout/`: Header, Footer, FloatingToolbar
  - `home/`: Hero, ServiceSteps, ProductWall, ShippingWall
  - `common/`: 按钮、输入框等原子组件封装
- `src/pages/`: 页面总装，目前仅包含 `Home.tsx`。
- `src/styles/`: Tailwind 全局配置与 AntD 主题覆盖。

## 模块边界
- 组件不得直接定义数据，必须从 Hooks 获取。
- Hooks 不得硬编码数据，必须引用 Mock。
