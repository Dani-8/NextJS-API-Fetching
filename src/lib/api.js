const BASE_URL = 'https://fakestoreapi.com';

export async function fetchProducts() {
  try {
    const res = await fetch(`${BASE_URL}/products`, {
      cache: 'no-store',
    });

    if (!res.ok) return []

    return res.json()
  } catch (err) {
    return [];
  }
}



export async function fetchProductBySlug(slug) {
  try {
    const res = await fetch(`${BASE_URL}/products`, {
      cache: 'no-store',
    });

    if (!res.ok) return null;

    const products = await res.json();

    return (
      products.find(p =>
        p.title.toLowerCase().replace(/[^a-z0-9]+/g, '-') === slug
      ) || null
    );
  } catch (err) {
    return null;
  }
}