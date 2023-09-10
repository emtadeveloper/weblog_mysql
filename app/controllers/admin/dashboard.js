const statistics = require("@models/statistics");

exports.index = async (req, res) => {
  const data = {
    totalUser: await statistics.totalUsers(),
    totlalComents: await statistics.totalComments(),
    totalPosts: await statistics.totalPosts(),
    totalViews: await statistics.totalViews(),
  };
  res.render("admin/dashboard/index", { layout: "admin", ...data });
};
