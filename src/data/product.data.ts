import { Product } from '@/interface';

const PRODUCT_DATA: Product[] = Array.from({ length: 9 }, (_, i) => ({
  id: i + 1,
  name: `Product Name ${i + 1}`,
  date: "24 Apr '2024",
  time: '10:24 AM',
  timeSpent: '2h 5m',
  orderValue: 120.21,
  commission: 55,
  imgUrl: '/icons/product.svg',
  imgAlt: 'Product',
}));

export { PRODUCT_DATA };
