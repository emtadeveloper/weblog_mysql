const postModel = require("@models/post");
const dataService = require("@services/dateService");
const langService = require("@services/langService");
const userModel = require("@models/user");
const postValidator = require("@validators/post");
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

exports.create = async (req, res) => {
  const users = await userModel.findAll();
  console.log(users, "users");
  res.render("admin/posts/create", {
    layout: "admin",
    users,
  });
};

exports.store = async (req, res) => {
  let hasError = false;
  const postData = {
    title: req.body.title,
    slug: req.body.slug,
    auther_id: req.body.auther,
    content: req.body.content,
    status: req.body.status,
  };

  const errors = postValidator.create(postData);
  if (errors.length) {
    req.flash("error", errors);
    return res.redirect("/admin/create");
  }
  const insertId = await postModel.create(postData);
  if (insertId) {
    return res.redirect("/admin/posts");
  }

  // if (errors.length > 0) {
  //   console.log(errors, postData, "errors");
  //   const users = await userModel.findAll();
  //   res.render("admin/posts/create", {
  //     layout: "admin",
  //     users,
  //     hasError: errors.length > 0,
  //     errors,

  //   });
  // } else {
  //   const result = await postModel.create(postData);
  // }
};
