const BlogPostModel = require("../model/BlogPost");

exports.getAllBlogsService = async () => {
   const result = await BlogPostModel.find({});
   return result;
};

exports.addNewBlogService = async (blog) => {
   const result = await BlogPostModel.insertMany(blog);
   return result;
};


