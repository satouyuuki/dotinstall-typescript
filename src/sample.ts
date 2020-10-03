// 外部モジュール

// Node - CommonJS webpack
// RequireJS - AMD

// import User = require('./user_amd');
import User = require('./user_commonjs');
console.log(User.name);
