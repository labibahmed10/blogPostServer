const BlogPostModel = require("../model/BlogPost");

exports.getAllBlogs = (req, res) => {
   res.send("Hello");
   console.log(BlogPostModel);
};
