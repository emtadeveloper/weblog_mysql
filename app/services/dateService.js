const mj = require("jalali-moment");

exports.toPersionDate = (data, format = "YYYY-MM-DD") => {
  return mj(data).local("fa").format(format);
};
