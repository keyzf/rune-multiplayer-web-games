// @ts-check
const { createConfigTester } = require("../createConfigTester")

const test = createConfigTester({
  extends: "plugin:rune/logic",
  parserOptions: {
    sourceType: "module",
  },
})

test("syntax", {
  valid: [
    "1+1",
    "1-1",
    "1*1",
    "1**1",
    "1/1",
    "1 & 1",
    "1 | 1",
    "null",
    "true",
    "false",
    "[]",
    "{}",
    "'hest' + 'klap' == 'klad'",
    "'hest' + 'klap' === 'klad'",
    "'hest' - 'klap' != 'klad'",
    "'hest' - 'klap' !== 'klad'",
    "const hest = 'snel'",
    "let hest = 'snel'",
    "let hest = 1; hest++",
    "let hest = 1; ++hest",
    "let hest = 1; hest += 1",
    "let hest = 1; hest--",
    "let hest = 1; --hest",
    "let hest = 1; hest -= 1",
    "let hest = false; hest ||= true",
    "let hest = false; hest &&= true",
    "let hest; hest ??= true",
    "if (true) {}",
    "() => { if (true) return 'yes' }",
    "if (false) {} else {}",
    "if (false) {} else if (true) {}",
    "true ? 'yes' : 'no'",
    "throw new Error('hest')",
    'function hest() { return "snel" }',
    "for (let i = 0; i < 10; i++) {}",
    "const arr = [1,2,3]; for (const n of arr) {}",
    "const hest = { snel: true }; for (const k in hest) {}",
    "let hest = 'snel'; while (hest !== 'klad') { continue; }",
    "let hest = 'snel'; do { continue; } while (hest !== 'klad')",
    "const [...numbers] = [1,2,3]",
    "const [one] = [1,2,3]",
    "const [...numbers] = { one: 1 }",
    "const {one} = { one: 1 }",
    "const numbers = [1,2,3]; new Array(...numbers)",
    "const one = 1; `one = ${one}`",
    "class Hest { klapp() { return 'snel' } }",
    "function yep() { return 'yes' }",
    "const yep = function() { return 'yes' }",
    "debugger",
    "void 0",
    "typeof 0",
    "if ({} instanceof Object) {}",
    "if ('snel' in {}) {}",
    "switch('hest') { case 'hest': break; default: break; }",
    "let hest = {}; hest.aaa?.bbb",
    "let hest = {}; hest.aaa ?? 'bbb'",
  ],
  invalid: [
    ["var hest = 'snel'", "unexpectedVar"],
    ["try { throw new Error('hest') } catch (_e) { }", "restrictedSyntax"],
    ["try { throw new Error('hest') } finally { }", "restrictedSyntax"],
    ['this.hest = "snel"', "restrictedSyntax"],
    ['async () => "hest"', "restrictedSyntax"],
    ['async () => { await Promise.resolve("hest") }', "restrictedSyntax"],
    ['async function hest() { return "snel" }', "restrictedSyntax"],
    [
      'async function hest() { await Promise.resolve("snel") }',
      "restrictedSyntax",
    ],
    ['function* hest() { yield "snel" }', "restrictedSyntax"],
    ['import snel from "hest"', "restrictedSyntax"],
    ['import { snel as klad } from "hest"', "restrictedSyntax"],
    ['import * as snel from "hest"', "restrictedSyntax"],
    ['import "hest"', "restrictedSyntax"],
    ['export const hest = "snel"', "restrictedSyntax"],
    ['export * from "hest"', "restrictedSyntax"],
    ['export { snel } from "hest"', "restrictedSyntax"],
    ['export default "hest"', "restrictedSyntax"],
  ],
})