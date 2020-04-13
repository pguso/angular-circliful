import { __decorate } from "tslib";
import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { CircleService } from '../service/circle.service';
import { ChangeDetectorRef } from '@angular/core';
import { StyleService } from '../service/style.service';
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
        template: "<svg\n  #svgContainer\n  width=\"100%\"\n  height=\"100%\"\n  [attr.viewBox]=\"viewBox\"\n  [ngClass]=\"circleValues.customClasses.svgContainer\"\n>\n  <defs *ngIf=\"circleValues.gradient\">\n    <linearGradient id=\"linearGradient\">\n      <stop\n        offset=\"0\"\n        [attr.stop-color]=\"circleValues.gradient.startColor\">\n      </stop>\n      <stop\n        offset=\"1\"\n        [attr.stop-color]=\"circleValues.gradient.endColor\">\n      </stop>\n    </linearGradient>\n  </defs>\n\n  <circle *ngIf=\"circleValues.backgroundCircle.color\"\n    class=\"background-circle\"\n    [ngClass]=\"circleValues.customClasses.backgroundCircle\"\n    [attr.stroke]=\"circleValues.backgroundCircle.color ? circleValues.backgroundCircle.color : backgroundCircleColor\"\n    [attr.stroke-width]=\"circleValues.backgroundCircle.strokeWidth ? circleValues.backgroundCircle.strokeWidth : backgroundCircleWidth\"\n    [attr.cx]=\"coordinates.x\"\n    [attr.cy]=\"coordinates.y\"\n    [attr.r]=\"radius\">\n  </circle>\n\n  <circle\n    *ngIf=\"circleValues.point\"\n    [ngClass]=\"circleValues.customClasses.point\"\n    [attr.cx]=\"coordinates.x\"\n    [attr.cy]=\"coordinates.y\"\n    [attr.r]=\"circleValues.point.radius ? circleValues.point.radius : radius\"\n    [attr.fill]=\"circleValues.point.color ? circleValues.point.color : 'none'\">\n  </circle>\n\n  <text\n    *ngIf=\"circleValues.icon\"\n    [attr.text-anchor]=\"circleValues.icon.position ? circleValues.icon.position : 'middle'\"\n    [attr.x]=\"circleValues.icon.x ? circleValues.icon.x : coordinates.x\"\n    [attr.y]=\"circleValues.icon.y ? circleValues.icon.y : coordinates.y\"\n    [ngClass]=\"[circleValues.icon.iconClass, 'fa']\">\n  </text>\n\n  <text\n    *ngIf=\"circleValues.percent\"\n    id=\"percent\"\n    [attr.text-anchor]=\"textPosition\"\n    [attr.x]=\"coordinates.x + (circleValues.percent.x ? circleValues.percent.x : 0)\"\n    [attr.y]=\"coordinates.y + (circleValues.percent.y ? circleValues.percent.y : 0)\"\n    [attr.fill]=\"circleValues.percent.color\"\n    [ngClass]=\"circleValues.customClasses.percent\">\n    {{(circleValues.percent.value ? circleValues.percent.value : circleValues.percent) + (circleValues.percent.noPercentageSign ? '' : '%')}}\n  </text>\n\n  <text\n    *ngIf=\"circleValues.text\"\n    [attr.text-anchor]=\"circleValues.text.position ? circleValues.text.position : textPosition\"\n    [attr.x]=\"circleValues.text.x ? circleValues.text.x : coordinates.x\"\n    [attr.y]=\"circleValues.text.y ? circleValues.text.y : (coordinates.y + 15)\"\n    [ngClass]=\"circleValues.customClasses.text\">\n    {{circleValues.text.content}}\n  </text>\n\n  <path\n    class=\"foreground-circle\"\n    [ngClass]=\"circleValues.customClasses.foregroundCircle\"\n    [attr.d]=\"arcData\"\n    [attr.stroke-width]=\"circleValues.strokeWidth + 'px'\"\n    [attr.stroke-linecap]=\"circleValues.strokeLinecap\"\n    [attr.stroke]=\"circleValues.gradient ? 'url(#linearGradient)' : circleValues.color\">\n  </path>\n</svg>\n",
        encapsulation: ViewEncapsulation.None,
        styles: [".background-circle,.foreground-circle{fill:none}"]
    })
], SvgContainerComponent);
export { SvgContainerComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3ZnLWNvbnRhaW5lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWNpcmNsaWZ1bC8iLCJzb3VyY2VzIjpbImxpYi9zdmctY29udGFpbmVyL3N2Zy1jb250YWluZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFzQixTQUFTLEVBQUUsaUJBQWlCLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDMUYsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBQ3hELE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNoRCxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFVdEQsSUFBYSxxQkFBcUIsR0FBbEMsTUFBYSxxQkFBcUI7SUFjaEMsWUFDVSxhQUE0QixFQUM1QixpQkFBb0MsRUFDcEMsWUFBMEI7UUFGMUIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUNwQyxpQkFBWSxHQUFaLFlBQVksQ0FBYztRQVo3QixnQkFBVyxHQUFHLEVBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFDLENBQUM7UUFDM0IsV0FBTSxHQUFHLENBQUMsQ0FBQztRQUNYLDBCQUFxQixHQUFHLE1BQU0sQ0FBQztRQUMvQiwwQkFBcUIsR0FBRyxFQUFFLENBQUM7UUFDM0IsaUJBQVksR0FBRyxRQUFRLENBQUM7SUFVL0IsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxZQUFxQixFQUFFLEVBQUU7WUFDbEUsSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7WUFDakMsSUFBSSxDQUFDLElBQUksR0FBRztnQkFDVixNQUFNLEVBQUUsR0FBRztnQkFDWCxPQUFPLEVBQUUsR0FBRztnQkFDWixL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QyxDQUFDO1lBQzVDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDN0M7SUFDSCxDQUFDO0NBQ0YsQ0FBQTs7WUF6RTBCLGFBQWE7WUFDVCxpQkFBaUI7WUFDdEIsWUFBWTs7QUFoQlQ7SUFBMUIsU0FBUyxDQUFDLGNBQWMsQ0FBQzsyREFBMEI7QUFEekMscUJBQXFCO0lBTmpDLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxrQkFBa0I7UUFDNUIsMDlGQUE2QztRQUU3QyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTs7S0FDdEMsQ0FBQztHQUNXLHFCQUFxQixDQXdGakM7U0F4RlkscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEVsZW1lbnRSZWYsIE9uSW5pdCwgVmlld0NoaWxkLCBWaWV3RW5jYXBzdWxhdGlvbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0NpcmNsZVNlcnZpY2V9IGZyb20gJy4uL3NlcnZpY2UvY2lyY2xlLnNlcnZpY2UnO1xuaW1wb3J0IHtDaGFuZ2VEZXRlY3RvclJlZn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1N0eWxlU2VydmljZX0gZnJvbSAnLi4vc2VydmljZS9zdHlsZS5zZXJ2aWNlJztcbmltcG9ydCB7SVNpemV9IGZyb20gJy4uL2ludGVyZmFjZS9pc2l6ZSc7XG5pbXBvcnQge0lDaXJjbGV9IGZyb20gJy4uL2ludGVyZmFjZS9pY2lyY2xlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYWMtc3ZnLWNvbnRhaW5lcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9zdmctY29udGFpbmVyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc3ZnLWNvbnRhaW5lci5jb21wb25lbnQuY3NzJ10sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgU3ZnQ29udGFpbmVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQFZpZXdDaGlsZCgnc3ZnQ29udGFpbmVyJykgc3ZnQ29udGFpbmVyOiBFbGVtZW50UmVmO1xuXG4gIHB1YmxpYyBhcmNEYXRhOiBzdHJpbmc7XG4gIHB1YmxpYyB2aWV3Qm94OiBzdHJpbmc7XG4gIHB1YmxpYyBjb29yZGluYXRlcyA9IHt4OiAwLCB5OiAwfTtcbiAgcHVibGljIHJhZGl1cyA9IDA7XG4gIHB1YmxpYyBiYWNrZ3JvdW5kQ2lyY2xlQ29sb3IgPSAnIzMzMyc7XG4gIHB1YmxpYyBiYWNrZ3JvdW5kQ2lyY2xlV2lkdGggPSAxMDtcbiAgcHVibGljIHRleHRQb3NpdGlvbiA9ICdtaWRkbGUnO1xuICBwdWJsaWMgY2lyY2xlVmFsdWVzOiBJQ2lyY2xlO1xuXG4gIHByaXZhdGUgc2l6ZTogSVNpemU7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjaXJjbGVTZXJ2aWNlOiBDaXJjbGVTZXJ2aWNlLFxuICAgIHByaXZhdGUgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgc3R5bGVTZXJ2aWNlOiBTdHlsZVNlcnZpY2VcbiAgKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmNpcmNsZVNlcnZpY2UuY2lyY2xlVmFsdWVzLnN1YnNjcmliZSgoY2lyY2xlVmFsdWVzOiBJQ2lyY2xlKSA9PiB7XG4gICAgICB0aGlzLmNpcmNsZVZhbHVlcyA9IGNpcmNsZVZhbHVlcztcbiAgICAgIHRoaXMuc2l6ZSA9IHtcbiAgICAgICAgaGVpZ2h0OiAyMDAsXG4gICAgICAgIG1heFNpemU6IDIwMCxcbiAgICAgICAgd2lkdGg6IDIwMFxuICAgICAgfTtcbiAgICAgIHRoaXMudXBkYXRlUGVyY2VudCgpO1xuICAgICAgdGhpcy5hbmltYXRlQ2lyY2xlKCk7XG4gICAgICB0aGlzLmFuaW1hdGVDaXJjbGVJblZpZXcoKTtcbiAgICB9KTtcbiAgfVxuXG4gIHVwZGF0ZVBlcmNlbnQoKTogdm9pZCB7XG4gICAgY29uc3QgcGVyY2VudCA9IHRoaXMuY2lyY2xlVmFsdWVzLnBlcmNlbnQudmFsdWU7XG4gICAgY29uc3QgZW5kQW5nbGUgPSAodGhpcy5jaXJjbGVWYWx1ZXMuYW5nbGU/LmVuZCA/PyAzNjApIC8gMTAwICogcGVyY2VudDtcbiAgICBjb25zdCBzdGFydEFuZ2xlID0gKHRoaXMuY2lyY2xlVmFsdWVzLmFuZ2xlPy5zdGFydCA/PyAwKTtcbiAgICB0aGlzLnZpZXdCb3ggPSBgMCAwICR7dGhpcy5zaXplLndpZHRofSAke3RoaXMuc2l6ZS5oZWlnaHR9YDtcbiAgICB0aGlzLmNvb3JkaW5hdGVzID0ge1xuICAgICAgeDogdGhpcy5zaXplLm1heFNpemUgLyAyLFxuICAgICAgeTogdGhpcy5zaXplLm1heFNpemUgLyAyLFxuICAgIH07XG4gICAgdGhpcy5yYWRpdXMgPSB0aGlzLnNpemUubWF4U2l6ZSAvIDIuMjtcblxuICAgIHRoaXMuYXJjRGF0YSA9IHRoaXMuY2lyY2xlU2VydmljZS5kZXNjcmliZUFyYyhcbiAgICAgIHRoaXMuc2l6ZS5tYXhTaXplLFxuICAgICAgc3RhcnRBbmdsZSxcbiAgICAgIGVuZEFuZ2xlLFxuICAgICk7XG4gICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cblxuICBhbmltYXRlQ2lyY2xlKCk6IHZvaWQge1xuICAgIGNvbnN0IHBhdGhFbGVtZW50cyA9IHRoaXMuc3ZnQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3BhdGgnKTtcbiAgICBpZiAodGhpcy5jaXJjbGVWYWx1ZXMuYW5pbWF0ZSkge1xuICAgICAgdGhpcy5zdHlsZVNlcnZpY2UuYW5pbWF0ZUFyYyh7XG4gICAgICAgIGFyYzogcGF0aEVsZW1lbnRzWzBdLFxuICAgICAgICBhcmNQYXJhbXM6IHtcbiAgICAgICAgICBwZXJjZW50OiB0aGlzLmNpcmNsZVZhbHVlcy5wZXJjZW50LnZhbHVlLFxuICAgICAgICAgIHg6IHRoaXMuY29vcmRpbmF0ZXMueCxcbiAgICAgICAgICB5OiB0aGlzLmNvb3JkaW5hdGVzLnksXG4gICAgICAgICAgcmFkaXVzOiB0aGlzLnJhZGl1c1xuICAgICAgICB9LFxuICAgICAgICBtYXhTaXplOiB0aGlzLnNpemUubWF4U2l6ZSxcbiAgICAgICAgcHJvZ3Jlc3NDb2xvcnM6IHRoaXMuY2lyY2xlVmFsdWVzLnByb2dyZXNzQ29sb3JzXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBhbmltYXRlQ2lyY2xlSW5WaWV3KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNpcmNsZVZhbHVlcy5hbmltYXRlSW5WaWV3KSB7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgKCkgPT4ge1xuICAgICAgICB0aGlzLmNoZWNrQW5pbWF0aW9uKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBjaGVja0FuaW1hdGlvbigpOiB2b2lkIHtcbiAgICBjb25zdCBjaXJjbGVDb250YWluZXIgPSB0aGlzLnN2Z0NvbnRhaW5lci5uYXRpdmVFbGVtZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgY29uc3QgaW5WaWV3ID0gdGhpcy5zdHlsZVNlcnZpY2UuaXNFbGVtZW50SW5WaWV3cG9ydChjaXJjbGVDb250YWluZXIpO1xuXG4gICAgaWYgKCFjaXJjbGVDb250YWluZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdyZWFuaW1hdGVkJykgJiYgaW5WaWV3KSB7XG4gICAgICBjaXJjbGVDb250YWluZXIuY2xhc3NMaXN0LmFkZCgncmVhbmltYXRlZCcpO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmFuaW1hdGVDaXJjbGUoKSwgMjUwKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==