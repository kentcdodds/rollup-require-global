(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.myLib = factory());
}(this, (function () { 'use strict';

const AnyPackageAtAll = require('any-package-at-all');

return AnyPackageAtAll;

})));
