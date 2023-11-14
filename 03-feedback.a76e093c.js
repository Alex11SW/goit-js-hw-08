var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={};t=/**
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
 */function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)};var n={},o={},r={};r="object"==typeof e&&e&&e.Object===Object&&e;/** Detect free variable `self`. */var l="object"==typeof self&&self&&self.Object===Object&&self;o=r||l||Function("return this")();var a={},c={},i={},f=/\s/;i=/**
 * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
 * character of `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the index of the last non-whitespace character.
 */function(e){for(var t=e.length;t--&&f.test(e.charAt(t)););return t};/** Used to match leading whitespace. */var u=/^\s+/;c=/**
 * The base implementation of `_.trim`.
 *
 * @private
 * @param {string} string The string to trim.
 * @returns {string} Returns the trimmed string.
 */function(e){return e?e.slice(0,i(e)+1).replace(u,""):e};var s={},d={},m={};m=o.Symbol;var v={},b=Object.prototype,g=b.hasOwnProperty,y=b.toString,p=m?m.toStringTag:void 0;v=/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */function(e){var t=g.call(e,p),n=e[p];try{e[p]=void 0;var o=!0}catch(e){}var r=y.call(e);return o&&(t?e[p]=n:delete e[p]),r};var j={},O=Object.prototype.toString;j=/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */function(e){return O.call(e)};/** Built-in value references. */var S=m?m.toStringTag:void 0;d=/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":S&&S in Object(e)?v(e):j(e)};var h={};h=/**
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
 */function(e){return null!=e&&"object"==typeof e},s=/**
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
 */function(e){return"symbol"==typeof e||h(e)&&"[object Symbol]"==d(e)};/** Used as references for various `Number` constants. */var E=0/0,w=/^[-+]0x[0-9a-f]+$/i,T=/^0b[01]+$/i,I=/^0o[0-7]+$/i,L=parseInt;function N(e){let t=localStorage.getItem(e);try{return JSON.parse(t)}catch(e){return t}}const $={formElem:document.querySelector(".feedback-form")};$.formElem.addEventListener("input",function(e){let t=e.target.name,n=e.target.value;localStorage.setItem(t,JSON.stringify(n))}),document.addEventListener("DOMContentLoaded",function(){let e=N("email"),t=N("message");console.log($.formElem.elements),$.formElem.elements.email.value=e,$.formElem.elements.message.value=t});//# sourceMappingURL=03-feedback.a76e093c.js.map

//# sourceMappingURL=03-feedback.a76e093c.js.map
