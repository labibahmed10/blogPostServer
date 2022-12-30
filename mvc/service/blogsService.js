const BlogPostModel = require("../model/BlogPost");

exports.getAllBlogsService = async () => {
   const result = await BlogPostModel.find({}).select("-__v");
   return result;
};

exports.getBlogByIdService = async (id) => {
   const result = await BlogPostModel.findById(id).select("-__v");
   return result;
};

exports.addNewBlogService = async (blog) => {
   const result = await BlogPostModel.create(blog);
   return result;
};

exports.updateOneBlog = async (id, update) => {
   const findThatBlog = await BlogPostModel.findByIdAndUpdate({ _id: id }, update, {
      runValidators: true,
   }).select("-__v");
   return findThatBlog;
};

exports.deleteABlogService = async (id) => {
   const deleteOne = await BlogPostModel.deleteOne({ _id: id });
   return deleteOne;
};
