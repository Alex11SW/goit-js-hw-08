!function(){var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={};e=/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)};var n={},o={},r={};r="object"==typeof t&&t&&t.Object===Object&&t;/** Detect free variable `self`. */var l="object"==typeof self&&self&&self.Object===Object&&self;o=r||l||Function("return this")();var a={},i={},c={},f=/\s/;c=/**
 * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
 * character of `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the index of the last non-whitespace character.
 */function(t){for(var e=t.length;e--&&f.test(t.charAt(e)););return e};/** Used to match leading whitespace. */var u=/^\s+/;i=/**
 * The base implementation of `_.trim`.
 *
 * @private
 * @param {string} string The string to trim.
 * @returns {string} Returns the trimmed string.
 */function(t){return t?t.slice(0,c(t)+1).replace(u,""):t};var b={},d={},v={};v=o.Symbol;var s={},y=Object.prototype,p=y.hasOwnProperty,g=y.toString,j=v?v.toStringTag:void 0;s=/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */function(t){var e=p.call(t,j),n=t[j];try{t[j]=void 0;var o=!0}catch(t){}var r=g.call(t);return o&&(e?t[j]=n:delete t[j]),r};var m={},O=Object.prototype.toString;m=/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */function(t){return O.call(t)};/** Built-in value references. */var S=v?v.toStringTag:void 0;d=/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":S&&S in Object(t)?s(t):m(t)};var h={};h=/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */function(t){return null!=t&&"object"==typeof t},b=/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */function(t){return"symbol"==typeof t||h(t)&&"[object Symbol]"==d(t)};/** Used as references for various `Number` constants. */var w=0/0,T=/^[-+]0x[0-9a-f]+$/i,E=/^0b[01]+$/i,$=/^0o[0-7]+$/i,I=parseInt;let N={formElem:document.querySelector(".feedback-form")};N.formElem.addEventListener("input",function(t){let e=t.target.name,n=t.target.value;localStorage.setItem(e,JSON.stringify(n))}),onload()}();//# sourceMappingURL=03-feedback.98e01be9.js.map

//# sourceMappingURL=03-feedback.98e01be9.js.map
