!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={};t=/**
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
 */function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)};var n={},o={},r={};r="object"==typeof e&&e&&e.Object===Object&&e;/** Detect free variable `self`. */var l="object"==typeof self&&self&&self.Object===Object&&self;o=r||l||Function("return this")();var a={},i={},f={},c=/\s/;f=/**
 * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
 * character of `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the index of the last non-whitespace character.
 */function(e){for(var t=e.length;t--&&c.test(e.charAt(t)););return t};/** Used to match leading whitespace. */var u=/^\s+/;i=/**
 * The base implementation of `_.trim`.
 *
 * @private
 * @param {string} string The string to trim.
 * @returns {string} Returns the trimmed string.
 */function(e){return e?e.slice(0,f(e)+1).replace(u,""):e};var m={},s={},d={};d=o.Symbol;var v={},b=Object.prototype,g=b.hasOwnProperty,p=b.toString,y=d?d.toStringTag:void 0;v=/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */function(e){var t=g.call(e,y),n=e[y];try{e[y]=void 0;var o=!0}catch(e){}var r=p.call(e);return o&&(t?e[y]=n:delete e[y]),r};var j={},O=Object.prototype.toString;j=/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */function(e){return O.call(e)};/** Built-in value references. */var S=d?d.toStringTag:void 0;s=/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":S&&S in Object(e)?v(e):j(e)};var E={};E=/**
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
 */function(e){return null!=e&&"object"==typeof e},m=/**
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
 */function(e){return"symbol"==typeof e||E(e)&&"[object Symbol]"==s(e)};/** Used as references for various `Number` constants. */var h=0/0,w=/^[-+]0x[0-9a-f]+$/i,L=/^0b[01]+$/i,T=/^0o[0-7]+$/i,k=parseInt;function I(e,t){localStorage.setItem(e,JSON.stringify(t))}function N(e){let t=localStorage.getItem(e);try{return JSON.parse(t)}catch(e){return t}}let $={formElem:document.querySelector(".feedback-form")};$.formElem.addEventListener("input",function(e){let t=e.target.name,n=e.target.value;I(t,n)}),$.formElem.addEventListener("submit",function(e){e.preventDefault();let t=$.formElem.elements.email.value,n=$.formElem.elements.message.value;I("feedback-form-state",{email:t,message:n}),console.log({email:t,message:n}),e.target.reset();// localStorage.removeItem('email');
// localStorage.removeItem('message');
}),document.addEventListener("DOMContentLoaded",function(){let e=N("email"),t=N("message"),n=N("feedback-form-state");n&&($.formElem.elements.email.value=e||"email",$.formElem.elements.message.value=t||"input text")})}();//# sourceMappingURL=03-feedback.c48d25b0.js.map

//# sourceMappingURL=03-feedback.c48d25b0.js.map
