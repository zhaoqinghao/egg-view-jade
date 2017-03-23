const jade = require('jade');
module.exports = class JadeView {
  render(filename, locals) {
    return new Promise((resolve, reject) => {
      // 异步调用 API
      jade.renderFile(filename, locals, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  }
  renderString(jadeStr, locals) {
    try {
      // 同步调用 API
      return Promise.resolve(jade.compile(jadeStr, locals));
    } catch (err) {
      return Promise.reject(err);
    }
  }
};