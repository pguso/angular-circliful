(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('angular-circliful', ['exports', '@angular/core', 'rxjs', '@angular/common'], factory) :
    (global = global || self, factory(global['angular-circliful'] = {}, global.ng.core, global.rxjs, global.ng.common));
}(this, (function (exports, core, rxjs, common) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
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
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

    var CircleService = /** @class */ (function () {
        function CircleService() {
            this.circleValues = new rxjs.BehaviorSubject({ percent: { value: 60, color: 'blue' } });
        }
        CircleService_1 = CircleService;
        /**
         * @description For easier handling polar coordinates are used and converted to cartesian coordinates
         * @returns object
         */
        CircleService.polarToCartesian = function (centerX, centerY, radius, angleInDegrees) {
            var angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;
            return {
                x: centerX + radius * Math.cos(angleInRadians),
                y: centerY + radius * Math.sin(angleInRadians),
            };
        };
        /**
         * @description Returns the string for the data attribute in the path tag
         * @returns string
         */
        CircleService.prototype.describeArc = function (maxSize, startAngle, endAngle) {
            var x = maxSize / 2;
            var y = maxSize / 2;
            var radius = maxSize / 2.2;
            var start = CircleService_1.polarToCartesian(x, y, radius, endAngle);
            var end = CircleService_1.polarToCartesian(x, y, radius, startAngle);
            var largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1';
            var closePath = false;
            if (endAngle === 360 && end.x > start.x) {
                closePath = true;
                start.x = start.x - 0.001;
            }
            return [
                'M', start.x, start.y,
                'A', radius, radius, 0, largeArcFlag, 0, end.x, end.y, (closePath ? 'Z' : ''),
            ].join(' ');
        };
        CircleService.prototype.updateCircleValues = function (circleValues) {
            this.circleValues.next(circleValues);
        };
        var CircleService_1;
        CircleService.ɵprov = core["ɵɵdefineInjectable"]({ factory: function CircleService_Factory() { return new CircleService(); }, token: CircleService, providedIn: "root" });
        CircleService = CircleService_1 = __decorate([
            core.Injectable({
                providedIn: 'root'
            })
        ], CircleService);
        return CircleService;
    }());

    var AngularCirclifulComponent = /** @class */ (function () {
        function AngularCirclifulComponent(circleService) {
            this.circleService = circleService;
        }
        AngularCirclifulComponent.prototype.ngOnChanges = function () {
            var customClasses = typeof this.customClasses === 'undefined' ? {} : this.customClasses;
            var circleValues = {
                percent: this.percent,
                color: this.color,
                strokeWidth: this.strokeWidth,
                strokeLinecap: this.strokeLinecap,
                progressColors: this.progressColors,
                animate: this.animate,
                animateInView: this.animateInView,
                backgroundCircle: this.backgroundCircle,
                customClasses: customClasses,
                angle: this.angle
            };
            if (this.gradient && this.gradient.startColor && this.gradient.endColor) {
                circleValues.gradient = this.gradient;
            }
            if (this.icon && this.icon.iconClass) {
                circleValues.icon = this.icon;
            }
            if (this.text && this.text.content) {
                circleValues.text = this.text;
            }
            if (this.point && this.point.color) {
                circleValues.point = this.point;
            }
            this.circleService.updateCircleValues(circleValues);
        };
        AngularCirclifulComponent.ctorParameters = function () { return [
            { type: CircleService }
        ]; };
        __decorate([
            core.Input()
        ], AngularCirclifulComponent.prototype, "percent", void 0);
        __decorate([
            core.Input()
        ], AngularCirclifulComponent.prototype, "color", void 0);
        __decorate([
            core.Input()
        ], AngularCirclifulComponent.prototype, "gradient", void 0);
        __decorate([
            core.Input()
        ], AngularCirclifulComponent.prototype, "strokeWidth", void 0);
        __decorate([
            core.Input()
        ], AngularCirclifulComponent.prototype, "strokeLinecap", void 0);
        __decorate([
            core.Input()
        ], AngularCirclifulComponent.prototype, "progressColors", void 0);
        __decorate([
            core.Input()
        ], AngularCirclifulComponent.prototype, "animate", void 0);
        __decorate([
            core.Input()
        ], AngularCirclifulComponent.prototype, "animateInView", void 0);
        __decorate([
            core.Input()
        ], AngularCirclifulComponent.prototype, "angle", void 0);
        __decorate([
            core.Input()
        ], AngularCirclifulComponent.prototype, "backgroundCircle", void 0);
        __decorate([
            core.Input()
        ], AngularCirclifulComponent.prototype, "icon", void 0);
        __decorate([
            core.Input()
        ], AngularCirclifulComponent.prototype, "text", void 0);
        __decorate([
            core.Input()
        ], AngularCirclifulComponent.prototype, "point", void 0);
        __decorate([
            core.Input()
        ], AngularCirclifulComponent.prototype, "customClasses", void 0);
        AngularCirclifulComponent = __decorate([
            core.Component({
                selector: 'ac-angular-circliful',
                template: "<ac-svg-container></ac-svg-container>\n",
                encapsulation: core.ViewEncapsulation.None
            })
        ], AngularCirclifulComponent);
        return AngularCirclifulComponent;
    }());

    var StyleService = /** @class */ (function () {
        function StyleService(circleService) {
            this.circleService = circleService;
        }
        StyleService_1 = StyleService;
        StyleService.getMilliseconds = function (defaultMs, endAngleGrade) {
            var ms = defaultMs ? defaultMs : 50;
            if (endAngleGrade <= 180) {
                ms = ms / 3;
            }
            return ms;
        };
        StyleService.setAttributes = function (element, attributes) {
            var e_1, _a;
            try {
                for (var _b = __values(Object.entries(attributes)), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var _d = __read(_c.value, 2), key = _d[0], value = _d[1];
                    element.setAttribute(key, value);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
        };
        StyleService.removeAttribute = function (element, attributeName) {
            element.removeAttribute(attributeName);
        };
        /**
         * @description Redraws the arc (circle) border
         */
        StyleService.prototype.animateArc = function (params) {
            var _this = this;
            var arc = params.arc, arcParams = params.arcParams, progressColors = params.progressColors;
            var startAngle = 0;
            var endAngleGrade = 360;
            var ms = StyleService_1.getMilliseconds(arcParams.ms, arcParams.endAngleGrade);
            var hasProgressColor = Array.isArray(progressColors) && progressColors.length > 0;
            StyleService_1.removeAttribute(arc, 'style');
            var count = 1;
            var interval = setInterval(function () {
                var endAngle = endAngleGrade / 100 * count;
                StyleService_1.setAttributes(arc, {
                    d: _this.circleService.describeArc(params.maxSize, startAngle, endAngle),
                });
                if (hasProgressColor) {
                    _this.updateCircleColor(count, arc, progressColors);
                }
                count++;
                if (count > arcParams.percent) {
                    clearInterval(interval);
                }
            }, ms);
        };
        /**
         * @description If options.progressColors is set, colors are changed on given percentages
         */
        StyleService.prototype.updateCircleColor = function (actualCount, arc, progressColors) {
            var progressColor = progressColors.find(function (progress) { return progress.percent === actualCount; });
            if (progressColor) {
                StyleService_1.setAttributes(arc, {
                    style: "stroke: " + progressColor.color,
                });
            }
            else if (typeof progressColor !== 'undefined' && progressColor.percent < actualCount) {
                StyleService_1.removeAttribute(arc, 'style');
            }
        };
        StyleService.prototype.isElementInViewport = function (circleContainer) {
            var offsetTop = circleContainer.offsetTop;
            var scrollPositionTop = window.scrollY;
            var windowHeight = window.innerHeight;
            return scrollPositionTop < offsetTop && scrollPositionTop + windowHeight > offsetTop;
        };
        var StyleService_1;
        StyleService.ctorParameters = function () { return [
            { type: CircleService }
        ]; };
        StyleService.ɵprov = core["ɵɵdefineInjectable"]({ factory: function StyleService_Factory() { return new StyleService(core["ɵɵinject"](CircleService)); }, token: StyleService, providedIn: "root" });
        StyleService = StyleService_1 = __decorate([
            core.Injectable({
                providedIn: 'root'
            })
        ], StyleService);
        return StyleService;
    }());

    var SvgContainerComponent = /** @class */ (function () {
        function SvgContainerComponent(circleService, changeDetectorRef, styleService) {
            this.circleService = circleService;
            this.changeDetectorRef = changeDetectorRef;
            this.styleService = styleService;
            this.coordinates = { x: 0, y: 0 };
            this.radius = 0;
            this.backgroundCircleColor = '#333';
            this.backgroundCircleWidth = 10;
            this.textPosition = 'middle';
        }
        SvgContainerComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.circleService.circleValues.subscribe(function (circleValues) {
                _this.circleValues = circleValues;
                _this.size = {
                    height: 200,
                    maxSize: 200,
                    width: 200
                };
                _this.updatePercent();
                _this.animateCircle();
                _this.animateCircleInView();
            });
        };
        SvgContainerComponent.prototype.updatePercent = function () {
            var _a, _b, _c, _d;
            var percent = this.circleValues.percent.value;
            var endAngle = ((_b = (_a = this.circleValues.angle) === null || _a === void 0 ? void 0 : _a.end) !== null && _b !== void 0 ? _b : 360) / 100 * percent;
            var startAngle = ((_d = (_c = this.circleValues.angle) === null || _c === void 0 ? void 0 : _c.start) !== null && _d !== void 0 ? _d : 0);
            this.viewBox = "0 0 " + this.size.width + " " + this.size.height;
            this.coordinates = {
                x: this.size.maxSize / 2,
                y: this.size.maxSize / 2,
            };
            this.radius = this.size.maxSize / 2.2;
            this.arcData = this.circleService.describeArc(this.size.maxSize, startAngle, endAngle);
            this.changeDetectorRef.detectChanges();
        };
        SvgContainerComponent.prototype.animateCircle = function () {
            var pathElements = this.svgContainer.nativeElement.getElementsByTagName('path');
            if (this.circleValues.animate) {
                this.styleService.animateArc({
                    arc: pathElements[0],
                    arcParams: {
                        percent: this.circleValues.percent.value,
                        x: this.coordinates.x,
                        y: this.coordinates.y,
                        radius: this.radius
                    },
                    maxSize: this.size.maxSize,
                    progressColors: this.circleValues.progressColors
                });
            }
        };
        SvgContainerComponent.prototype.animateCircleInView = function () {
            var _this = this;
            if (this.circleValues.animateInView) {
                window.addEventListener('scroll', function () {
                    _this.checkAnimation();
                });
            }
        };
        SvgContainerComponent.prototype.checkAnimation = function () {
            var _this = this;
            var circleContainer = this.svgContainer.nativeElement.parentElement;
            var inView = this.styleService.isElementInViewport(circleContainer);
            if (!circleContainer.classList.contains('reanimated') && inView) {
                circleContainer.classList.add('reanimated');
                setTimeout(function () { return _this.animateCircle(); }, 250);
            }
        };
        SvgContainerComponent.ctorParameters = function () { return [
            { type: CircleService },
            { type: core.ChangeDetectorRef },
            { type: StyleService }
        ]; };
        __decorate([
            core.ViewChild('svgContainer')
        ], SvgContainerComponent.prototype, "svgContainer", void 0);
        SvgContainerComponent = __decorate([
            core.Component({
                selector: 'ac-svg-container',
                template: "<svg\n  #svgContainer\n  width=\"100%\"\n  height=\"100%\"\n  [attr.viewBox]=\"viewBox\"\n  [ngClass]=\"circleValues.customClasses.svgContainer\"\n>\n  <defs *ngIf=\"circleValues.gradient\">\n    <linearGradient id=\"linearGradient\">\n      <stop\n        offset=\"0\"\n        [attr.stop-color]=\"circleValues.gradient.startColor\">\n      </stop>\n      <stop\n        offset=\"1\"\n        [attr.stop-color]=\"circleValues.gradient.endColor\">\n      </stop>\n    </linearGradient>\n  </defs>\n\n  <circle *ngIf=\"circleValues.backgroundCircle.color\"\n    class=\"background-circle\"\n    [ngClass]=\"circleValues.customClasses.backgroundCircle\"\n    [attr.stroke]=\"circleValues.backgroundCircle.color ? circleValues.backgroundCircle.color : backgroundCircleColor\"\n    [attr.stroke-width]=\"circleValues.backgroundCircle.strokeWidth ? circleValues.backgroundCircle.strokeWidth : backgroundCircleWidth\"\n    [attr.cx]=\"coordinates.x\"\n    [attr.cy]=\"coordinates.y\"\n    [attr.r]=\"radius\">\n  </circle>\n\n  <circle\n    *ngIf=\"circleValues.point\"\n    [ngClass]=\"circleValues.customClasses.point\"\n    [attr.cx]=\"coordinates.x\"\n    [attr.cy]=\"coordinates.y\"\n    [attr.r]=\"circleValues.point.radius ? circleValues.point.radius : radius\"\n    [attr.fill]=\"circleValues.point.color ? circleValues.point.color : 'none'\">\n  </circle>\n\n  <text\n    *ngIf=\"circleValues.icon\"\n    [attr.text-anchor]=\"circleValues.icon.position ? circleValues.icon.position : 'middle'\"\n    [attr.x]=\"circleValues.icon.x ? circleValues.icon.x : coordinates.x\"\n    [attr.y]=\"circleValues.icon.y ? circleValues.icon.y : coordinates.y\"\n    [ngClass]=\"[circleValues.icon.iconClass, 'fa']\">\n  </text>\n\n  <text\n    *ngIf=\"circleValues.percent\"\n    id=\"percent\"\n    [attr.text-anchor]=\"textPosition\"\n    [attr.x]=\"coordinates.x + (circleValues.percent.x ? circleValues.percent.x : 0)\"\n    [attr.y]=\"coordinates.y + (circleValues.percent.y ? circleValues.percent.y : 0)\"\n    [attr.fill]=\"circleValues.percent.color\"\n    [ngClass]=\"circleValues.customClasses.percent\">\n    {{(circleValues.percent.value ? circleValues.percent.value : circleValues.percent) + (circleValues.percent.noPercentageSign ? '' : '%')}}\n  </text>\n\n  <text\n    *ngIf=\"circleValues.text\"\n    [attr.text-anchor]=\"circleValues.text.position ? circleValues.text.position : textPosition\"\n    [attr.x]=\"circleValues.text.x ? circleValues.text.x : coordinates.x\"\n    [attr.y]=\"circleValues.text.y ? circleValues.text.y : (coordinates.y + 15)\"\n    [ngClass]=\"circleValues.customClasses.text\">\n    {{circleValues.text.content}}\n  </text>\n\n  <path\n    class=\"foreground-circle\"\n    [ngClass]=\"circleValues.customClasses.foregroundCircle\"\n    [attr.d]=\"arcData\"\n    [attr.stroke-width]=\"circleValues.strokeWidth + 'px'\"\n    [attr.stroke-linecap]=\"circleValues.strokeLinecap\"\n    [attr.stroke]=\"circleValues.gradient ? 'url(#linearGradient)' : circleValues.color\">\n  </path>\n</svg>\n",
                encapsulation: core.ViewEncapsulation.None,
                styles: [".background-circle,.foreground-circle{fill:none}"]
            })
        ], SvgContainerComponent);
        return SvgContainerComponent;
    }());

    var AngularCirclifulModule = /** @class */ (function () {
        function AngularCirclifulModule() {
        }
        AngularCirclifulModule = __decorate([
            core.NgModule({
                declarations: [
                    AngularCirclifulComponent,
                    SvgContainerComponent,
                ],
                imports: [
                    common.CommonModule,
                ],
                exports: [AngularCirclifulComponent],
                schemas: [core.NO_ERRORS_SCHEMA],
            })
        ], AngularCirclifulModule);
        return AngularCirclifulModule;
    }());

    exports.AngularCirclifulComponent = AngularCirclifulComponent;
    exports.AngularCirclifulModule = AngularCirclifulModule;
    exports.ɵa = CircleService;
    exports.ɵb = SvgContainerComponent;
    exports.ɵc = StyleService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=angular-circliful.umd.js.map
