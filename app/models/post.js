const db = require("../../database/mysql");

exports.findAll = async () => {
  const [row, fields] = await db.query("SELECT * FROM posts");

  // p.* //  post یعنی تمام ستون های جدول
  // u.full_name  user ستون نام کامل جدول

  // const [row, fields] = await db.query("SELECT p.* , u.full_name FROM posts p join users u ON p.auther_id = u.id ");
  return row;
};
