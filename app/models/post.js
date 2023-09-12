const db = require("../../database/mysql");

exports.findAll = async () => {
  const [row, fields] = await db.query("SELECT * FROM posts");

  // p.* //  post یعنی تمام ستون های جدول
  // u.full_name  user ستون نام کامل جدول

  // const [row, fields] = await db.query(`SELECT p.* , u.full_name
  //  FROM posts p
  //  join users u ON p.auther_id = u.id
  //  `);

  return row;
};

// exports.create = async (postData) => {
//   const [result] = await db.query(`INSERT INFO posts SET ?`[postData]);
//   console.log(result);
//   return result;
// };

exports.create = async (postData) => {
  try {
    const [result] = await db.query("INSERT INTO posts SET ?", postData);
    console.log(result);
    return result;
  } catch (error) {
    console.error("خطا در ایجاد پست:", error);
    throw error; // یک خطای مطلق را به بالا پرتاب کنید تا در صورت خطا به کد فراخوانی‌کننده اعلام شود.
  }
};
