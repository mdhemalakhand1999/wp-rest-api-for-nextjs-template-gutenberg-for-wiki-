import { allCakeList } from '@/data/Data';

export default function handler(req, res) {
  const cakeId = req.query.cakeId; // Get the allCakeId as a string
  // Find the allCake in allCakeList based on allCakeId
  const cakeData = allCakeList.find(cake => cake.slug.toString() === cakeId);
  if (cakeData) {
    res.status(200).json(cakeData);
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
}
