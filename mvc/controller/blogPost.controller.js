const blogService = require("../service/blogsService");

exports.getAllBlogs = async (req, res, next) => {
   try {
      const result = await blogService.getAllBlogsService();
      res.status(200).send({
         success: true,
         result,
      });
   } catch (error) {
      console.log(error);
   }
};

exports.addNewBlog = async (req, res, next) => {
   const blog = req.body;

   try {
      const result = await blogService.addNewBlogService(blog);
      res.status(200).send({
         success: true,
         result,
      });
   } catch (error) {
      console.log(error);
   }
};


