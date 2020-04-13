import { __decorate } from 'tslib';
import { ɵɵdefineInjectable, Injectable, Input, Component, ViewEncapsulation, ɵɵinject, ChangeDetectorRef, ViewChild, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CommonModule } from '@angular/common';

var CircleService_1;
let CircleService = CircleService_1 = class CircleService {
    constructor() {
        this.circleValues = new BehaviorSubject({ percent: { value: 60, color: 'blue' } });
    }
    /**
     * @description For easier handling polar coordinates are used and converted to cartesian coordinates
     * @returns object
     */
    static polarToCartesian(centerX, centerY, radius, angleInDegrees) {
        const angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;
        return {
            x: centerX + radius * Math.cos(angleInRadians),
            y: centerY + radius * Math.sin(angleInRadians),
        };
    }
    /**
     * @description Returns the string for the data attribute in the path tag
     * @returns string
     */
    describeArc(maxSize, startAngle, endAngle) {
        const x = maxSize / 2;
        const y = maxSize / 2;
        const radius = maxSize / 2.2;
        endAngle = endAngle ? endAngle : 360;
        const start = CircleService_1.polarToCartesian(x, y, radius, endAngle);
        const end = CircleService_1.polarToCartesian(x, y, radius, startAngle);
        const largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1';
        let closePath = false;
        if (endAngle === 360 && end.x > start.x) {
            closePath = true;
            start.x = start.x - 0.001;
        }
        return [
            'M', start.x, start.y,
            'A', radius, radius, 0, largeArcFlag, 0, end.x, end.y, (closePath ? 'Z' : ''),
        ].join(' ');
    }
    updateCircleValues(circleValues) {
        this.circleValues.next(circleValues);
    }
};
CircleService.ɵprov = ɵɵdefineInjectable({ factory: function CircleService_Factory() { return new CircleService(); }, token: CircleService, providedIn: "root" });
CircleService = CircleService_1 = __decorate([
    Injectable({
        providedIn: 'root'
    })
], CircleService);

let AngularCirclifulComponent = class AngularCirclifulComponent {
    constructor(circleService) {
        this.circleService = circleService;
    }
    ngOnChanges() {
        const customClasses = typeof this.customClasses === 'undefined' ? {} : this.customClasses;
        const circleValues = {
            percent: this.percent,
            color: this.color,
            strokeWidth: this.strokeWidth,
            strokeLinecap: this.strokeLinecap,
            progressColors: this.progressColors,
            animate: this.animate,
            animateInView: this.animateInView,
            backgroundCircle: this.backgroundCircle,
            customClasses,
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
    }
};
AngularCirclifulComponent.ctorParameters = () => [
    { type: CircleService }
];
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

var StyleService_1;
let StyleService = StyleService_1 = class StyleService {
    constructor(circleService) {
        this.circleService = circleService;
    }
    static getMilliseconds(defaultMs, endAngleGrade) {
        let ms = defaultMs ? defaultMs : 50;
        if (endAngleGrade <= 180) {
            ms = ms / 3;
        }
        return ms;
    }
    static setAttributes(element, attributes) {
        for (const [key, value] of Object.entries(attributes)) {
            element.setAttribute(key, value);
        }
    }
    static removeAttribute(element, attributeName) {
        element.removeAttribute(attributeName);
    }
    /**
     * @description Redraws the arc (circle) border
     */
    animateArc(params) {
        const { arc, arcParams, progressColors } = params;
        const startAngle = 0;
        const endAngleGrade = 360;
        const ms = StyleService_1.getMilliseconds(arcParams.ms, arcParams.endAngleGrade);
        const hasProgressColor = Array.isArray(progressColors) && progressColors.length > 0;
        StyleService_1.removeAttribute(arc, 'style');
        let count = 1;
        const interval = setInterval(() => {
            const endAngle = endAngleGrade / 100 * count;
            StyleService_1.setAttributes(arc, {
                d: this.circleService.describeArc(params.maxSize, startAngle, endAngle),
            });
            if (hasProgressColor) {
                this.updateCircleColor(count, arc, progressColors);
            }
            count++;
            if (count > arcParams.percent) {
                clearInterval(interval);
            }
        }, ms);
    }
    /**
     * @description If options.progressColors is set, colors are changed on given percentages
     */
    updateCircleColor(actualCount, arc, progressColors) {
        const progressColor = progressColors.find((progress) => progress.percent === actualCount);
        if (progressColor) {
            StyleService_1.setAttributes(arc, {
                style: `stroke: ${progressColor.color}`,
            });
        }
        else if (typeof progressColor !== 'undefined' && progressColor.percent < actualCount) {
            StyleService_1.removeAttribute(arc, 'style');
        }
    }
    isElementInViewport(circleContainer) {
        const offsetTop = circleContainer.offsetTop;
        const scrollPositionTop = window.scrollY;
        const windowHeight = window.innerHeight;
        return scrollPositionTop < offsetTop && scrollPositionTop + windowHeight > offsetTop;
    }
};
StyleService.ctorParameters = () => [
    { type: CircleService }
];
StyleService.ɵprov = ɵɵdefineInjectable({ factory: function StyleService_Factory() { return new StyleService(ɵɵinject(CircleService)); }, token: StyleService, providedIn: "root" });
StyleService = StyleService_1 = __decorate([
    Injectable({
        providedIn: 'root'
    })
], StyleService);

let SvgContainerComponent = class SvgContainerComponent {
    constructor(circleService, changeDetectorRef, styleService) {
        this.circleService = circleService;
        this.changeDetectorRef = changeDetectorRef;
        this.styleService = styleService;
        this.coordinates = { x: 0, y: 0 };
        this.radius = 0;
        this.backgroundCircleColor = '#333';
        this.backgroundCircleWidth = 10;
        this.textPosition = 'middle';
    }
    ngOnInit() {
        this.circleService.circleValues.subscribe((circleValues) => {
            this.circleValues = circleValues;
            this.size = {
                height: 200,
                maxSize: 200,
                width: 200
            };
            this.updatePercent();
            this.animateCircle();
            this.animateCircleInView();
        });
    }
    updatePercent() {
        var _a, _b, _c, _d;
        const percent = this.circleValues.percent.value;
        const endAngle = ((_b = (_a = this.circleValues.angle) === null || _a === void 0 ? void 0 : _a.end) !== null && _b !== void 0 ? _b : 360) / 100 * percent;
        const startAngle = ((_d = (_c = this.circleValues.angle) === null || _c === void 0 ? void 0 : _c.start) !== null && _d !== void 0 ? _d : 0);
        this.viewBox = `0 0 ${this.size.width} ${this.size.height}`;
        this.coordinates = {
            x: this.size.maxSize / 2,
            y: this.size.maxSize / 2,
        };
        this.radius = this.size.maxSize / 2.2;
        this.arcData = this.circleService.describeArc(this.size.maxSize, startAngle, endAngle);
        this.changeDetectorRef.detectChanges();
    }
    animateCircle() {
        const pathElements = this.svgContainer.nativeElement.getElementsByTagName('path');
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
    }
    animateCircleInView() {
        if (this.circleValues.animateInView) {
            window.addEventListener('scroll', () => {
                this.checkAnimation();
            });
        }
    }
    checkAnimation() {
        const circleContainer = this.svgContainer.nativeElement.parentElement;
        const inView = this.styleService.isElementInViewport(circleContainer);
        if (!circleContainer.classList.contains('reanimated') && inView) {
            circleContainer.classList.add('reanimated');
            setTimeout(() => this.animateCircle(), 250);
        }
    }
};
SvgContainerComponent.ctorParameters = () => [
    { type: CircleService },
    { type: ChangeDetectorRef },
    { type: StyleService }
];
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

let AngularCirclifulModule = class AngularCirclifulModule {
};
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

/*
 * Public API Surface of angular-circliful
 */

/**
 * Generated bundle index. Do not edit.
 */

export { AngularCirclifulComponent, AngularCirclifulModule, CircleService as ɵa, SvgContainerComponent as ɵb, StyleService as ɵc };
//# sourceMappingURL=angular-circliful.js.map
