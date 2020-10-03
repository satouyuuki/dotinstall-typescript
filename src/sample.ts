// 内部モジュール
// module UserModule {
//   export const name = 'taguchi';
//   export module AddressModule {
//     export const zip = "111-1111";
//   }
// }

/// <reference path="./user.ts" />

console.log(UserModule.name);
// console.log(UserModule.AddressModule.zip);

import addr = UserModule.AddressModule;
console.log(addr.zip);