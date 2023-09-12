const db = require("../../database/mysql");

exports.findAll = async (column = []) => {
  const sqlColumns = column.length > 0 ? columns.join(",") : "*";
  const [rows, fields] = await db.query(`
    SELECT ${sqlColumns} FROM users
    `);
  return rows;
};
 