import { ornamentList } from '@/data/Data';

export default function handler(req, res) {
  const ornamentId = req.query.ornamentId; // Get the ornamentId as a string
  // Find the ornament in ornamentList based on ornamentId
  const ornamentData = ornamentList.find(ornament => ornament.slug.toString() === ornamentId);
  if (ornamentData) {
    res.status(200).json(ornamentData);
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
}
