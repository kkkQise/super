/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Workstation } from './pages/Workstation';
import { ProductDetail } from './pages/ProductDetail';
import { Community } from './pages/Community';

import { ShippingDetail } from './pages/ShippingDetail';
import { ShippingEstimation } from './pages/ShippingEstimation';
import { SecondHandShopping } from './pages/SecondHandShopping';
import { ManualOrder } from './pages/ManualOrder';
import { ShoppingGuide } from './pages/ShoppingGuide';
import { Tutorial } from './pages/Tutorial';
import { ReviewRewards } from './pages/ReviewRewards';
import { ShoeBoxService } from './pages/ShoeBoxService';
import { SideToolbar } from './components/layout/SideToolbar';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/workstation" element={<Workstation />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/community" element={<Community />} />
        <Route path="/shipping-detail/:id" element={<ShippingDetail />} />
        <Route path="/shipping-estimation" element={<ShippingEstimation />} />
        <Route path="/second-hand-shopping" element={<SecondHandShopping />} />
        <Route path="/manual-order" element={<ManualOrder />} />
        <Route path="/guide" element={<ShoppingGuide />} />
        <Route path="/tutorial" element={<Tutorial />} />
        <Route path="/review-rewards" element={<ReviewRewards />} />
        <Route path="/shoe-box-service" element={<ShoeBoxService />} />
      </Routes>
      <SideToolbar />
    </BrowserRouter>
  );
}
