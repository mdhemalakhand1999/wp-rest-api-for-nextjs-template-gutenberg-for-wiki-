import { cakeClientSlider } from "@/data/Data";

export default function handler(req, res) {
    if(req.method === 'GET'){
        res.status(200).json(cakeClientSlider);
    } else {
        res.status(405).json({message: 'Method not Allowed'});
    }
}