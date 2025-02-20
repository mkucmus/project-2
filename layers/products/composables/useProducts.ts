export function useProducts() {
  const products = [
    {
      id: 1,
      name: "Vintage Camera",
      price: 299.99,
      description: "Classic vintage-style camera with modern features",
      image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400"
    },
    {
      id: 2,
      name: "Leather Backpack",
      price: 89.99,
      description: "Handcrafted leather backpack perfect for daily use",
      image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400"
    },
    {
      id: 3,
      name: "Smart Watch",
      price: 199.99,
      description: "Feature-rich smartwatch with health tracking",
      image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=400"
    }
  ]

  return {
    products
  }
}