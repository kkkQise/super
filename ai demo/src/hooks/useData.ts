import { useState, useEffect } from 'react';
import { MOCK_PRODUCTS, Product, MOCK_SHIPPING, ShippingLine, MOCK_REVIEWS, Review } from '../mocks';
import { delay } from '../utils';

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      await delay(500);
      setProducts(MOCK_PRODUCTS);
      setLoading(false);
    }
    load();
  }, []);

  return { products, loading };
}

export function useShippingLines() {
  const [lines, setLines] = useState<ShippingLine[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      await delay(800);
      setLines(MOCK_SHIPPING);
      setLoading(false);
    }
    load();
  }, []);

  return { lines, loading };
}

export function useReviews() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      await delay(600);
      setReviews(MOCK_REVIEWS);
      setLoading(false);
    }
    load();
  }, []);

  return { reviews, loading };
}
