//
// 【60条】
//////////////////////// 只读全局变量 globals ////////////////////////
global = 0;
window = 0;
////////////////////////////////////////////////////////////////////////
//
//
// 【40条】         https://github.com/eslint-community/eslint-plugin-n#-rules
//////////////////////// eslint-plugin-n【recommend】////////////////////////
require("fs").exists; // n/no-deprecated-api
exports = { foo: 1 }; // n/no-exports-assign
new require("fs"); // n/no-new-require
__dirname + "/foo.js"; // n/no-path-concat
require("./foo"); // n/no-missing-require
////////////////////////////////////////////////////////////////////////
//
//
// 【266条】                          https://eslint.org/docs/latest/rules/
//////////////////////// eslint【recommend】/////////////////////////////
debugger; // no-debugger
var aaaa = "aaaa"; // no-unused-vars
try {
  //
} catch (e) {
  // throw new Error(e.message);
  throw e;
}
//////////////////////////////////////////////////////////////////////////////
//
//
// 【15条】    https://github.com/eslint-community/eslint-plugin-promise#rules
//////////////////////// eslint-plugin-promise【recommend】////////////////////
// 'promise/no-return-wrap': 'error',
new Promise.resolve(1);
////////////////////////////////////////////////////////////////////////
//
//
// 【10条】        https://github.com/import-js/eslint-plugin-import#rules
//////////////////////// eslint-plugin-import 【recommend】//////////////
import x from "./foo";
////////////////////////////////////////////////////////////////////////
//
//
// 【9条】  https://mysticatea.github.io/eslint-plugin-eslint-comments/rules/
//////////////////////// plugin:eslint-comments 【recommend】//////////////
/*eslint-disable no-var,no-unused-vars, no-debugger */
var aaaaaaa = "aaaaaaa";
/*eslint-enable no-var,no-unused-vars */
////////////////////////////////////////////////////////////////////////////////////////////////
//
//
// 【50条】 https://github.com/gajus/eslint-plugin-jsdoc#user-content-eslint-plugin-jsdoc-rules
//////////////////////// eslint-plugin-jsdoc 【recommend】//////////////////////////////////////
/**
 * @param {abc} quuxP
 */
export function quux(quuxP) {
  debugger;
  console.log(quuxP);
}
////////////////////////////////////////////////////////////////////////
//
//
// 【98条】    https://github.com/sindresorhus/eslint-plugin-unicorn#rules
//////////////////////// eslint-plugin-unicorn 【recommend】//////////////
var reg = /[0-9]/;
// TODO [2000-01-01]: I'll fix this next week.

[].forEach((item) => item);
////////////////////////////////////////////////////////////////////////
//
//
