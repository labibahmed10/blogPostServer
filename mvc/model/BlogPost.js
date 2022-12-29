const mongoose = require("mongoose");

const allBlogs = mongoose.Schema(
   {
      title: {
         type: String,
         require: [true, "Please provide a valid blog title"],
         trim: true,
         minLength: [5, "Title must contain at least 5 characters"],
      },
      image: {
         type: String,
         require: [true, "Please provide a valid URL"],
      },
      text: {
         type: String,
         require: true,
         trim: true,
      },
      tags: [String],
      seen: {
         type: Date,
         default: Date.now(),
      },
   },
   {
      timestamps: true,
   },
);

const BlogPostModel = mongoose.model("allBlogs", allBlogs);

module.exports = BlogPostModel;
