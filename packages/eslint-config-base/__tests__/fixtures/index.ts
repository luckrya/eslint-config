//
// 【26条】
//////////////////////// plugin:@typescript-eslint/recommended ////////////////////////
import { notFoo } from "./foo";

// @ts-ignore
console.log("hello");

export const foo = {
  bar: "baz",
  bar: "qux",
};

export const foooo = require("foo");
////////////////////////////////////////////////////////////////////////
//
