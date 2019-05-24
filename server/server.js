var server =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../objio-layout/base/layout.js":
/*!**************************************!*\
  !*** ../objio-layout/base/layout.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Promise) {
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var objio_1 = __webpack_require__(/*! objio */ "objio");
var object_base_1 = __webpack_require__(/*! objio-object/base/object-base */ "objio-object/base/object-base");
var ObjectHolderBase = /** @class */ (function (_super) {
    __extends(ObjectHolderBase, _super);
    function ObjectHolderBase(args) {
        var _this = _super.call(this) || this;
        _this.tasks = new Array();
        if (args) {
            _this.obj = args.obj;
            _this.view = args.view;
        }
        return _this;
    }
    ObjectHolderBase.prototype.setOwner = function (owner) {
        this.owner = owner;
    };
    ObjectHolderBase.prototype.getObject = function () {
        return this.obj;
    };
    ObjectHolderBase.prototype.getView = function () {
        return this.view;
    };
    ObjectHolderBase.prototype.getName = function () {
        return this.name;
    };
    ObjectHolderBase.prototype.setName = function (name) {
        if (this.name == name)
            return;
        this.name = name;
        this.holder.save();
        this.holder.delayedNotify();
    };
    ObjectHolderBase.prototype.getTasksInProgress = function () {
        return this.tasks.length;
    };
    ObjectHolderBase.prototype.getProps = function () {
        return null;
    };
    ObjectHolderBase.prototype.addTask = function (task) {
        if (this.tasks.indexOf(task) == -1)
            this.tasks.push(task);
    };
    ObjectHolderBase.prototype.removeTask = function (task) {
        this.tasks.splice(this.tasks.indexOf(task), 1);
        this.holder.delayedNotify();
    };
    ObjectHolderBase.prototype.watchTask = function (task) {
        var _this = this;
        this.addTask(task);
        return (task.then(function (res) {
            _this.removeTask(task);
            return res;
        }).catch(function (err) {
            _this.removeTask(task);
            return Promise.reject(err);
        }));
    };
    ObjectHolderBase.TYPE_ID = 'LayoutObjectHolder';
    ObjectHolderBase.SERIALIZE = function () { return ({
        name: { type: 'string' },
        obj: { type: 'object' },
        view: { type: 'string' }
    }); };
    return ObjectHolderBase;
}(objio_1.OBJIOItem));
exports.ObjectHolderBase = ObjectHolderBase;
var DocLayoutBase = /** @class */ (function (_super) {
    __extends(DocLayoutBase, _super);
    function DocLayoutBase() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.layout = { type: 'row', items: [] };
        _this.holders = new objio_1.OBJIOArray();
        return _this;
    }
    DocLayoutBase.prototype.getHolders = function () {
        return this.holders;
    };
    DocLayoutBase.TYPE_ID = 'DocLayout2';
    DocLayoutBase.SERIALIZE = function () { return (__assign({}, object_base_1.ObjectBase.SERIALIZE(), { layout: { type: 'json' }, holders: { type: 'object' } })); };
    return DocLayoutBase;
}(object_base_1.ObjectBase));
exports.DocLayoutBase = DocLayoutBase;
//# sourceMappingURL=layout.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! bluebird */ "bluebird")))

/***/ }),

/***/ "../objio-layout/server/index.js":
/*!***************************************!*\
  !*** ../objio-layout/server/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var layout_1 = __webpack_require__(/*! ./layout */ "../objio-layout/server/layout.js");
function getClasses() {
    return [
        layout_1.DocLayout,
        layout_1.ObjectHolderBase
    ];
}
exports.getClasses = getClasses;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../objio-layout/server/layout.js":
/*!****************************************!*\
  !*** ../objio-layout/server/layout.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var layout_1 = __webpack_require__(/*! ../base/layout */ "../objio-layout/base/layout.js");
var ObjectHolderBase = /** @class */ (function (_super) {
    __extends(ObjectHolderBase, _super);
    function ObjectHolderBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ObjectHolderBase;
}(layout_1.ObjectHolderBase));
exports.ObjectHolderBase = ObjectHolderBase;
var DocLayout = /** @class */ (function (_super) {
    __extends(DocLayout, _super);
    function DocLayout() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return DocLayout;
}(layout_1.DocLayoutBase));
exports.DocLayout = DocLayout;
//# sourceMappingURL=layout.js.map

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/model/base/doc-holder.ts":
/*!**************************************!*\
  !*** ./src/model/base/doc-holder.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(Promise) {var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! objio */ "objio"), __webpack_require__(/*! objio-object/base/object-base */ "objio-object/base/object-base"), __webpack_require__(/*! objio-object/base/file-object */ "objio-object/base/file-object")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, objio_1, object_base_1, file_object_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var DocHolderBase = /** @class */ (function (_super) {
        __extends(DocHolderBase, _super);
        function DocHolderBase(args) {
            var _this = _super.call(this) || this;
            _this.childNum = 0;
            _this.objType = '';
            _this.subscribers = Array();
            _this.notifySubscibers = function () {
                _this.subscribers.forEach(function (s) { return s(); });
            };
            _this.onObjLoadedOrCreated = function (obj) {
                _this.loadTask = null;
                _this.doc = obj;
                obj.holder.subscribe(_this.notifySubscibers);
                _this.doc.holder.addEventHandler({
                    onObjChange: function () {
                        var folders = _this.getChildren();
                        if (!folders || !folders.length)
                            return;
                        _this.childNum = folders[0].objects.length;
                        _this.objType = objio_1.OBJIOItem.getClass(_this.doc).TYPE_ID;
                        _this.holder.save();
                        _this.holder.delayedNotify();
                    }
                });
                return _this.doc;
            };
            if (args) {
                _this.doc = args.doc;
                _this.onObjLoadedOrCreated(_this.doc);
                _this.name = _this.doc.getName();
                _this.objType = objio_1.OBJIOItem.getClass(args.doc).TYPE_ID;
            }
            _this.holder.subscribe(_this.notifySubscibers);
            return _this;
        }
        DocHolderBase.prototype.subscribe = function (cb) {
            if (this.subscribers.indexOf(cb) == -1)
                this.subscribers.push(cb);
        };
        DocHolderBase.prototype.unsubscribe = function (cb) {
            this.subscribers.splice(this.subscribers.indexOf(cb), 1);
        };
        DocHolderBase.prototype.getObjType = function () {
            if (!this.get())
                return this.objType;
            return this.doc.getObjType();
        };
        DocHolderBase.prototype.isLoaded = function () {
            return this.doc instanceof object_base_1.ObjectBase;
        };
        DocHolderBase.prototype.isLoadInProgress = function () {
            return this.loadTask != null;
        };
        DocHolderBase.prototype.getProgress = function () {
            if (!this.get())
                return 0;
            return this.doc.getProgress();
        };
        DocHolderBase.prototype.getChildNum = function () {
            return this.childNum;
        };
        DocHolderBase.prototype.getChildren = function () {
            if (!this.get())
                return [];
            return this.doc.getChildren();
        };
        DocHolderBase.prototype.isStatusInProgess = function () {
            if (!this.get())
                return false;
            return this.doc.isStatusInProgess();
        };
        DocHolderBase.prototype.load = function () {
            var _this = this;
            if (this.isLoaded())
                return Promise.resolve(this.doc);
            if (!this.loadTask)
                (this.loadTask = this.holder.getObject(this.doc)
                    .then(this.onObjLoadedOrCreated)
                    .catch(function () {
                    _this.loadTask = null;
                    return null;
                }));
            return this.loadTask;
        };
        DocHolderBase.prototype.get = function () {
            if (!this.isLoaded())
                return null;
            return this.doc;
        };
        DocHolderBase.prototype.getID = function () {
            if (!this.isLoaded())
                return this.doc;
            return this.doc.holder.getID();
        };
        DocHolderBase.prototype.getName = function () {
            if (!this.isLoaded())
                return this.name || '';
            return this.doc.getName();
        };
        DocHolderBase.prototype.setName = function (name) {
            if (this.name == name)
                return;
            this.name = name;
            var doc = this.get();
            if (doc)
                doc.setName(name);
            this.holder.save();
            this.holder.notify();
        };
        DocHolderBase.prototype.getAppComponents = function () {
            if (!this.get())
                return _super.prototype.getAppComponents.call(this);
            return this.doc.getAppComponents();
        };
        DocHolderBase.prototype.getObjPropGroups = function (props) {
            if (!this.get())
                return _super.prototype.getObjPropGroups.call(this, props);
            return this.doc.getObjPropGroups(props);
        };
        DocHolderBase.prototype.getFileDropDest = function () {
            if (!this.get())
                return Promise.reject('object not loaded yet');
            return this.doc.getFileDropDest();
        };
        DocHolderBase.prototype.sendFile = function (args) {
            if (!this.get())
                return Promise.reject('object not loaded yet');
            return this.doc.sendFile(args);
        };
        DocHolderBase.prototype.removeContent = function () {
            if (!this.get())
                return Promise.reject('object not loaded yet');
            if (this.doc instanceof file_object_1.FileObjectBase)
                this.doc.removeContent();
            return Promise.resolve();
        };
        DocHolderBase.TYPE_ID = 'DocHolder';
        DocHolderBase.SERIALIZE = function () { return ({
            doc: { type: 'object-deferred' },
            name: { type: 'string' },
            childNum: { type: 'integer' },
            objType: { type: 'string' }
        }); };
        return DocHolderBase;
    }(object_base_1.ObjectBase));
    exports.DocHolderBase = DocHolderBase;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! bluebird */ "bluebird")))

/***/ }),

/***/ "./src/model/base/doc-root.ts":
/*!************************************!*\
  !*** ./src/model/base/doc-root.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! objio */ "objio")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, objio_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var DocRootBase = /** @class */ (function (_super) {
        __extends(DocRootBase, _super);
        function DocRootBase() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.objects = new objio_1.OBJIOArray();
            return _this;
        }
        DocRootBase.prototype.getObjects = function () {
            return this.objects.getArray();
        };
        DocRootBase.TYPE_ID = 'DocRoot';
        DocRootBase.SERIALIZE = function () { return ({
            objects: { type: 'object' }
        }); };
        return DocRootBase;
    }(objio_1.OBJIOItem));
    exports.DocRootBase = DocRootBase;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/model/server/doc-holder.ts":
/*!****************************************!*\
  !*** ./src/model/server/doc-holder.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ../base/doc-holder */ "./src/model/base/doc-holder.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, doc_holder_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var DocHolder = /** @class */ (function (_super) {
        __extends(DocHolder, _super);
        function DocHolder() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return DocHolder;
    }(doc_holder_1.DocHolderBase));
    exports.DocHolder = DocHolder;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/model/server/doc-root.ts":
/*!**************************************!*\
  !*** ./src/model/server/doc-root.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ../base/doc-root */ "./src/model/base/doc-root.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, doc_root_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var DocRoot = /** @class */ (function (_super) {
        __extends(DocRoot, _super);
        function DocRoot() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return DocRoot;
    }(doc_root_1.DocRootBase));
    exports.DocRoot = DocRoot;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/model/server/register-objects.ts":
/*!**********************************************!*\
  !*** ./src/model/server/register-objects.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./doc-root */ "./src/model/server/doc-root.ts"), __webpack_require__(/*! objio-object/server */ "objio-object/server"), __webpack_require__(/*! ./doc-holder */ "./src/model/server/doc-holder.ts"), __webpack_require__(/*! objio-layout/server */ "../objio-layout/server/index.js"), __webpack_require__(/*! objio-mysql-database/server */ "objio-mysql-database/server"), __webpack_require__(/*! objio-sqlite-table/server */ "objio-sqlite-table/server")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, doc_root_1, Objects, doc_holder_1, Layout, MYSQL, SQLITE3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function registerObjects(fact) {
        Layout.getClasses().concat(Objects.getClasses(), SQLITE3.getClasses(), MYSQL.getClasses()).forEach(function (classObj) {
            fact.registerItem(classObj);
        });
        fact.registerItem(doc_holder_1.DocHolder);
        fact.registerItem(doc_root_1.DocRoot);
    }
    exports.registerObjects = registerObjects;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/server/doc-server.ts":
/*!**********************************!*\
  !*** ./src/server/doc-server.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(Promise, global) {var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! objio */ "objio"), __webpack_require__(/*! objio/server */ "objio/server"), __webpack_require__(/*! ../model/server/register-objects */ "./src/model/server/register-objects.ts"), __webpack_require__(/*! bluebird */ "bluebird"), __webpack_require__(/*! process */ "process")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, objio_1, server_1, register_objects_1, Bluebird, process) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    Bluebird.config({ cancellation: true });
    global.Promise = Bluebird;
    function runDocServer() {
        return __awaiter(this, void 0, void 0, function () {
            var factory;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, objio_1.createFactory()];
                    case 1:
                        factory = _a.sent();
                        register_objects_1.registerObjects(factory);
                        server_1.createOBJIOServer({
                            factory: factory,
                            rootDir: 'data'
                        });
                        return [2 /*return*/];
                }
            });
        });
    }
    console.log(process.env['FFMPEG']);
    runDocServer();
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! bluebird */ "bluebird"), __webpack_require__(/*! ./../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi ./src/server/doc-server.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/server/doc-server.ts */"./src/server/doc-server.ts");


/***/ }),

/***/ "bluebird":
/*!***************************!*\
  !*** external "bluebird" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("bluebird");

/***/ }),

/***/ "objio":
/*!************************!*\
  !*** external "objio" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("objio");

/***/ }),

/***/ "objio-mysql-database/server":
/*!**********************************************!*\
  !*** external "objio-mysql-database/server" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("objio-mysql-database/server");

/***/ }),

/***/ "objio-object/base/file-object":
/*!************************************************!*\
  !*** external "objio-object/base/file-object" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("objio-object/base/file-object");

/***/ }),

/***/ "objio-object/base/object-base":
/*!************************************************!*\
  !*** external "objio-object/base/object-base" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("objio-object/base/object-base");

/***/ }),

/***/ "objio-object/server":
/*!**************************************!*\
  !*** external "objio-object/server" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("objio-object/server");

/***/ }),

/***/ "objio-sqlite-table/server":
/*!********************************************!*\
  !*** external "objio-sqlite-table/server" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("objio-sqlite-table/server");

/***/ }),

/***/ "objio/server":
/*!*******************************!*\
  !*** external "objio/server" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("objio/server");

/***/ }),

/***/ "process":
/*!**************************!*\
  !*** external "process" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("process");

/***/ })

/******/ });
//# sourceMappingURL=server.js.map