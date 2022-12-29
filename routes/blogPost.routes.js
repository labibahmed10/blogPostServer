const express = require("express");
const routes = express.Router();
const blogController = require("../mvc/controller/blogPost.controller");

routes.get("/all", blogController.getAllBlogs);
routes.get("/blog/:id", blogController.getBlogById);
routes.post("/addBlog", blogController.addNewBlog);
routes.patch("/update/:id", blogController.updateBlog);
routes.delete("/delete/:id", blogController.deleteABlog);

module.exports = routes;
