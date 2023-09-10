const postModel = require("../../models/post");
const dataService = require("@services/dateService");
const langService = require("@services/langService");

// const PostPresenter = require("@presenters/post");

exports.index = async (req, res) => {
  const Posts = await postModel.findAll();
  const presentedPost = Posts.map((post) => {
    post.created_at_persian = dataService.toPersionDate(post.created_at);
    post.persian_views = langService.toPersionNumbers(post.views);
    return post;
  });
  res.render("admin/posts/index", {
    layout: "admin",
    Posts: presentedPost,
  });
};

// exports.index = async (req, res) => {
//   const Posts = await postModel.findAll();
//   const presentedPost = Posts.map(
//     (post) => (post.presenter = new PostPresenter(post))
//   );

//   console.log(presentedPost[0], "presentedPost");
//   console.log(Posts, "Posts");
//   res.render("admin/posts/index", {
//     layout: "admin",
//     Posts: presentedPost,
//   });
// };

exports.create = (req, res) => {
  res.render("admin/posts/create", {
    layout: "admin",
  });
};
