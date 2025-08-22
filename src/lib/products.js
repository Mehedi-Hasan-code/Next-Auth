// Mock product data
let products = [
  {
    id: '1',
    name: 'Wireless Headphones',
    description: 'High-quality wireless headphones with noise cancellation',
    price: 199.99,
    image: 'https://jontrobazar.com/wp-content/uploads/2025/08/acefast-h6-an%D1%81-wireless-headset-adjustable-headband.webp',
    details:
      'Premium wireless headphones featuring advanced noise cancellation technology, 30-hour battery life, and crystal-clear audio quality. Perfect for music lovers and professionals.',
  },
  {
    id: '2',
    name: 'Smart Watch',
    description: 'Feature-rich smartwatch with health tracking',
    price: 299.99,
    image: 'https://jontrobazar.com/wp-content/uploads/2025/08/acefast-h6-an%D1%81-wireless-headset-adjustable-headband.webp',
    details:
      'Advanced smartwatch with comprehensive health monitoring, GPS tracking, water resistance, and seamless smartphone integration. Track your fitness goals and stay connected.',
  },
  {
    id: '3',
    name: 'Laptop Stand',
    description: 'Ergonomic aluminum laptop stand',
    price: 79.99,
    image: 'https://jontrobazar.com/wp-content/uploads/2025/08/acefast-h6-an%D1%81-wireless-headset-adjustable-headband.webp',
    details:
      'Sleek aluminum laptop stand designed for optimal ergonomics and heat dissipation. Adjustable height and angle for comfortable working sessions.',
  },
];

export function getProducts() {
  return products;
}

export function getProduct(id) {
  return products.find((product) => product.id === id);
}

export function addProduct(product) {
  const newProduct = {
    ...product,
    id: Date.now().toString(),
    image: `https://picsum.photos/300/200?random=${Date.now()}`,
  };
  products.push(newProduct);
  return newProduct;
}
