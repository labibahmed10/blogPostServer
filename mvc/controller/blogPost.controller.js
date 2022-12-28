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

exports.updateBlog = async (req, res, next) => {
   const { id } = req.params;
   const update = req.body;

   try {
      const outcome = await blogService.updateOneBlog(id, update);

      res.status(200).send({
         success: true,
         outcome,
      });
   } catch (error) {
      console.log(error);
   }
};

exports.deleteABlog = async (req, res, next) => {
   const { id } = req.params;

   try {
      const deletedContent = await blogService.deleteABlogService(id);

      res.status(200).send({
         success: true,
         ...deletedContent,
      });
   } catch (error) {
      console.log(error);
   }
};
