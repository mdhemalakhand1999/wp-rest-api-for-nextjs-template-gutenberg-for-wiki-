import {cakeCategories} from '@/data/Data';

export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json(cakeCategories);
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
