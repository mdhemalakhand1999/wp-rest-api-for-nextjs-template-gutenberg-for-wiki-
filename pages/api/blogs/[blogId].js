import {blogList} from '@/data/Data';

export default function handler(req,res){
    const blogId = req.query.blogId; // Get the blogId as a string
    // Find the blog in blogList based on blogId
    const blogData = blogList.find(blog => blog.slug.toString() === blogId);
    if(blogData){
        res.status(200).json(blogData);
    } else{
        res.status(400).json({message:'Blog not found'});
    }
}