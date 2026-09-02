import Blog from "../models/blogModel.js";



const addBlog = async (req, res) => {
    try {
        const { title, content } = req.body;

        let imageurl = "";
        if(req.file){
            imageurl = `uploads/${req.file.filename}`;
        }

        const blog = await Blog.create({
            title,
            content,
            image: imageurl,
        });
        
        res.status(201).json(blog);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};




const getAllBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find();
        res.json(blogs);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};



const getBlogById = async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id);
        if (!blog) {
            return res.status(404).json({ error: "Blog not found" });
        }
        res.json(blog);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};



const updateBlog = async (req, res) => {
    try {
        const { title, content } = req.body;
        if(req.file){
            const blog = await Blog.findById(req.params.id);
            blog.image = `uploads/${req.file.filename}`;
            await blog.save();
        }

        const blog = await Blog.findByIdAndUpdate(
            req.params.id,
            { title, content },
            { new: true }
        );
        if (!blog) {
            return res.status(404).json({ error: "Blog not found" });
        }
      
        res.json(blog);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};



const deleteBlog = async (req, res) => {
    try {
        const blog = await Blog.findByIdAndDelete(req.params.id);
        if (!blog) {
            return res.status(404).json({ error: "Blog not found" });
        }
        res.json({ message: "Blog deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export { addBlog, getAllBlogs, getBlogById, updateBlog, deleteBlog };