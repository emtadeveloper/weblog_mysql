const dataService = require("@services/dateService");
const langService = require("@services/langService");

class PostPresenter {
  constructor(post) {
    this.post = post;
  }
  jalaliCreatedAt() {
    return langService.toPersionNumbers(
      dataService.toPersionDate(this.post.created_at)
    );
  }
  PersionViews() {
    return langService.toPersionNumbers(this.post.views);
  }
}

module.exports = PostPresenter;
