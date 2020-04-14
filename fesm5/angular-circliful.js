import { __decorate, __values, __read } from 'tslib';
import { ɵɵdefineInjectable, Injectable, Input, Component, ViewEncapsulation, ɵɵinject, ChangeDetectorRef, ViewChild, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CommonModule } from '@angular/common';

var CircleService = /** @class */ (function () {
    function CircleService() {
        this.circleValues = new BehaviorSubject({ percent: { value: 60, color: 'blue' } });
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
        endAngle = endAngle ? endAngle : 360;
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
    CircleService.ɵprov = ɵɵdefineInjectable({ factory: function CircleService_Factory() { return new CircleService(); }, token: CircleService, providedIn: "root" });
    CircleService = CircleService_1 = __decorate([
        Injectable({
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
        Input()
    ], AngularCirclifulComponent.prototype, "percent", void 0);
    __decorate([
        Input()
    ], AngularCirclifulComponent.prototype, "color", void 0);
    __decorate([
        Input()
    ], AngularCirclifulComponent.prototype, "gradient", void 0);
    __decorate([
        Input()
    ], AngularCirclifulComponent.prototype, "strokeWidth", void 0);
    __decorate([
        Input()
    ], AngularCirclifulComponent.prototype, "strokeLinecap", void 0);
    __decorate([
        Input()
    ], AngularCirclifulComponent.prototype, "progressColors", void 0);
    __decorate([
        Input()
    ], AngularCirclifulComponent.prototype, "animate", void 0);
    __decorate([
        Input()
    ], AngularCirclifulComponent.prototype, "animateInView", void 0);
    __decorate([
        Input()
    ], AngularCirclifulComponent.prototype, "angle", void 0);
    __decorate([
        Input()
    ], AngularCirclifulComponent.prototype, "backgroundCircle", void 0);
    __decorate([
        Input()
    ], AngularCirclifulComponent.prototype, "icon", void 0);
    __decorate([
        Input()
    ], AngularCirclifulComponent.prototype, "text", void 0);
    __decorate([
        Input()
    ], AngularCirclifulComponent.prototype, "point", void 0);
    __decorate([
        Input()
    ], AngularCirclifulComponent.prototype, "customClasses", void 0);
    AngularCirclifulComponent = __decorate([
        Component({
            selector: 'ac-angular-circliful',
            template: "<ac-svg-container></ac-svg-container>\n",
            encapsulation: ViewEncapsulation.None
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
    StyleService.ɵprov = ɵɵdefineInjectable({ factory: function StyleService_Factory() { return new StyleService(ɵɵinject(CircleService)); }, token: StyleService, providedIn: "root" });
    StyleService = StyleService_1 = __decorate([
        Injectable({
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
        { type: ChangeDetectorRef },
        { type: StyleService }
    ]; };
    __decorate([
        ViewChild('svgContainer')
    ], SvgContainerComponent.prototype, "svgContainer", void 0);
    SvgContainerComponent = __decorate([
        Component({
            selector: 'ac-svg-container',
            template: "<svg\n  #svgContainer\n  width=\"100%\"\n  height=\"100%\"\n  [attr.viewBox]=\"viewBox\"\n  [ngClass]=\"circleValues.customClasses.svgContainer\"\n>\n  <defs *ngIf=\"circleValues.gradient\">\n    <linearGradient id=\"linearGradient\">\n      <stop\n        offset=\"0\"\n        [attr.stop-color]=\"circleValues.gradient.startColor\">\n      </stop>\n      <stop\n        offset=\"1\"\n        [attr.stop-color]=\"circleValues.gradient.endColor\">\n      </stop>\n    </linearGradient>\n  </defs>\n\n  <circle *ngIf=\"circleValues.backgroundCircle\"\n    class=\"background-circle\"\n    [ngClass]=\"circleValues.customClasses.backgroundCircle\"\n    [attr.stroke]=\"circleValues.backgroundCircle.color ? circleValues.backgroundCircle.color : backgroundCircleColor\"\n    [attr.stroke-width]=\"circleValues.backgroundCircle.strokeWidth ? circleValues.backgroundCircle.strokeWidth : backgroundCircleWidth\"\n    [attr.cx]=\"coordinates.x\"\n    [attr.cy]=\"coordinates.y\"\n    [attr.r]=\"radius\">\n  </circle>\n\n  <circle\n    *ngIf=\"circleValues.point\"\n    [ngClass]=\"circleValues.customClasses.point\"\n    [attr.cx]=\"coordinates.x\"\n    [attr.cy]=\"coordinates.y\"\n    [attr.r]=\"circleValues.point.radius ? circleValues.point.radius : radius\"\n    [attr.fill]=\"circleValues.point.color ? circleValues.point.color : 'none'\">\n  </circle>\n\n  <text\n    *ngIf=\"circleValues.icon\"\n    [attr.text-anchor]=\"circleValues.icon.position ? circleValues.icon.position : 'middle'\"\n    [attr.x]=\"circleValues.icon.x ? circleValues.icon.x : coordinates.x\"\n    [attr.y]=\"circleValues.icon.y ? circleValues.icon.y : coordinates.y\"\n    [ngClass]=\"[circleValues.icon.iconClass, 'fa']\">\n  </text>\n\n  <text\n    *ngIf=\"circleValues.percent\"\n    id=\"percent\"\n    [attr.text-anchor]=\"textPosition\"\n    [attr.x]=\"coordinates.x + (circleValues.percent.x ? circleValues.percent.x : 0)\"\n    [attr.y]=\"coordinates.y + (circleValues.percent.y ? circleValues.percent.y : 0)\"\n    [attr.fill]=\"circleValues.percent.color\"\n    [ngClass]=\"circleValues.customClasses.percent\">\n    {{(circleValues.percent.value ? circleValues.percent.value : circleValues.percent) + (circleValues.percent.noPercentageSign ? '' : '%')}}\n  </text>\n\n  <text\n    *ngIf=\"circleValues.text\"\n    [attr.text-anchor]=\"circleValues.text.position ? circleValues.text.position : textPosition\"\n    [attr.x]=\"circleValues.text.x ? circleValues.text.x : coordinates.x\"\n    [attr.y]=\"circleValues.text.y ? circleValues.text.y : (coordinates.y + 15)\"\n    [ngClass]=\"circleValues.customClasses.text\">\n    {{circleValues.text.content}}\n  </text>\n\n  <path\n    class=\"foreground-circle\"\n    [ngClass]=\"circleValues.customClasses.foregroundCircle\"\n    [attr.d]=\"arcData\"\n    [attr.stroke-width]=\"circleValues.strokeWidth + 'px'\"\n    [attr.stroke-linecap]=\"circleValues.strokeLinecap\"\n    [attr.stroke]=\"circleValues.gradient ? 'url(#linearGradient)' : circleValues.color\">\n  </path>\n</svg>\n",
            encapsulation: ViewEncapsulation.None,
            styles: [".background-circle,.foreground-circle{fill:none}"]
        })
    ], SvgContainerComponent);
    return SvgContainerComponent;
}());

var AngularCirclifulModule = /** @class */ (function () {
    function AngularCirclifulModule() {
    }
    AngularCirclifulModule = __decorate([
        NgModule({
            declarations: [
                AngularCirclifulComponent,
                SvgContainerComponent,
            ],
            imports: [
                CommonModule,
            ],
            exports: [AngularCirclifulComponent],
            schemas: [NO_ERRORS_SCHEMA],
        })
    ], AngularCirclifulModule);
    return AngularCirclifulModule;
}());

/*
 * Public API Surface of angular-circliful
 */

/**
 * Generated bundle index. Do not edit.
 */

export { AngularCirclifulComponent, AngularCirclifulModule, CircleService as ɵa, SvgContainerComponent as ɵb, StyleService as ɵc };
//# sourceMappingURL=angular-circliful.js.map
