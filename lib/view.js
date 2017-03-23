const jade = require('jade');
module.exports = class EjsView {
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
  renderString(tpl, locals) {
    try {
      // 同步调用 API
      return Promise.resolve(jade.render(tpl, locals));
    } catch (err) {
      return Promise.reject(err);
    }
  }
};