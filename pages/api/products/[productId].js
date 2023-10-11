import { allProductList } from '@/data/Data';

export default function handler(req, res) {
  const productId = req.query.productId; // Get the productId as a string

  // Find the product in allProductList based on productId
  const productData = allProductList.find(product => product.slug.toString() === productId);

  if (productData) {
    res.status(200).json(productData);
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
}
