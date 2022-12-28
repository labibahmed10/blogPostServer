"get" - " all the blog post";
"post" - "post a new blog post";
"patch" - "update one of the post";
"delete" - "delete one of the post";

const express = require("express");
const routes = express.Router();
const blogController = require("../mvc/controller/blogPost.controller");

routes.get("/all", blogController.getAllBlogs);
routes.post("/addBlog", blogController.addNewBlog);


module.exports = routes;
