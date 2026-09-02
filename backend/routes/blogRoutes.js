import express from "express" ; 
import { addBlog, deleteBlog, getAllBlogs, getBlogById, updateBlog } from "../controllers/blogControllers.js";
import { upload } from "../middleware/blogmiddleware.js";


const blogRouter = express.Router() ;

blogRouter.post("/addblog" ,upload.single("image") , addBlog);
blogRouter.get("/getallblogs" , getAllBlogs);
blogRouter.get("/getblog/:id" , getBlogById);
blogRouter.put("/updateblog/:id" ,upload.single("image") , updateBlog);
blogRouter.delete("/deleteblog/:id" , deleteBlog);

export default blogRouter ;