import { firstBannerData } from '@/data/Data';

export default function handler(req, res) {
    if (req.method === 'GET') {
      res.status(200).json(firstBannerData);
    } else {
      res.status(405).json({ message: 'Method Not Allowed' });
    }
  }