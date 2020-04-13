import { __decorate } from "tslib";
import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { CircleService } from '../service/circle.service';
import { ChangeDetectorRef } from '@angular/core';
import { StyleService } from '../service/style.service';
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
export { SvgContainerComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3ZnLWNvbnRhaW5lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWNpcmNsaWZ1bC8iLCJzb3VyY2VzIjpbImxpYi9zdmctY29udGFpbmVyL3N2Zy1jb250YWluZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFzQixTQUFTLEVBQUUsaUJBQWlCLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDMUYsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBQ3hELE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNoRCxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFVdEQ7SUFjRSwrQkFDVSxhQUE0QixFQUM1QixpQkFBb0MsRUFDcEMsWUFBMEI7UUFGMUIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUNwQyxpQkFBWSxHQUFaLFlBQVksQ0FBYztRQVo3QixnQkFBVyxHQUFHLEVBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFDLENBQUM7UUFDM0IsV0FBTSxHQUFHLENBQUMsQ0FBQztRQUNYLDBCQUFxQixHQUFHLE1BQU0sQ0FBQztRQUMvQiwwQkFBcUIsR0FBRyxFQUFFLENBQUM7UUFDM0IsaUJBQVksR0FBRyxRQUFRLENBQUM7SUFVL0IsQ0FBQztJQUVELHdDQUFRLEdBQVI7UUFBQSxpQkFZQztRQVhDLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxVQUFDLFlBQXFCO1lBQzlELEtBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO1lBQ2pDLEtBQUksQ0FBQyxJQUFJLEdBQUc7Z0JBQ1YsTUFBTSxFQUFFLEdBQUc7Z0JBQ1gsT0FBTyxFQUFFLEdBQUc7Z0JBQ1osS0FBSyxFQUFFLEdBQUc7YUFDWCxDQUFD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QUFZLENBQUMsQ0FBQztZQUM1QyxVQUFVLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxhQUFhLEVBQUUsRUFBcEIsQ0FBb0IsRUFBRSxHQUFHLENBQUMsQ0FBQztTQUM3QztJQUNILENBQUM7O2dCQXhFd0IsYUFBYTtnQkFDVCxpQkFBaUI7Z0JBQ3RCLFlBQVk7O0lBaEJUO1FBQTFCLFNBQVMsQ0FBQyxjQUFjLENBQUM7K0RBQTBCO0lBRHpDLHFCQUFxQjtRQU5qQyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsa0JBQWtCO1lBQzVCLG85RkFBNkM7WUFFN0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7O1NBQ3RDLENBQUM7T0FDVyxxQkFBcUIsQ0F3RmpDO0lBQUQsNEJBQUM7Q0FBQSxBQXhGRCxJQXdGQztTQXhGWSxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRWxlbWVudFJlZiwgT25Jbml0LCBWaWV3Q2hpbGQsIFZpZXdFbmNhcHN1bGF0aW9ufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q2lyY2xlU2VydmljZX0gZnJvbSAnLi4vc2VydmljZS9jaXJjbGUuc2VydmljZSc7XG5pbXBvcnQge0NoYW5nZURldGVjdG9yUmVmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7U3R5bGVTZXJ2aWNlfSBmcm9tICcuLi9zZXJ2aWNlL3N0eWxlLnNlcnZpY2UnO1xuaW1wb3J0IHtJU2l6ZX0gZnJvbSAnLi4vaW50ZXJmYWNlL2lzaXplJztcbmltcG9ydCB7SUNpcmNsZX0gZnJvbSAnLi4vaW50ZXJmYWNlL2ljaXJjbGUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhYy1zdmctY29udGFpbmVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3N2Zy1jb250YWluZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zdmctY29udGFpbmVyLmNvbXBvbmVudC5jc3MnXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBTdmdDb250YWluZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBAVmlld0NoaWxkKCdzdmdDb250YWluZXInKSBzdmdDb250YWluZXI6IEVsZW1lbnRSZWY7XG5cbiAgcHVibGljIGFyY0RhdGE6IHN0cmluZztcbiAgcHVibGljIHZpZXdCb3g6IHN0cmluZztcbiAgcHVibGljIGNvb3JkaW5hdGVzID0ge3g6IDAsIHk6IDB9O1xuICBwdWJsaWMgcmFkaXVzID0gMDtcbiAgcHVibGljIGJhY2tncm91bmRDaXJjbGVDb2xvciA9ICcjMzMzJztcbiAgcHVibGljIGJhY2tncm91bmRDaXJjbGVXaWR0aCA9IDEwO1xuICBwdWJsaWMgdGV4dFBvc2l0aW9uID0gJ21pZGRsZSc7XG4gIHB1YmxpYyBjaXJjbGVWYWx1ZXM6IElDaXJjbGU7XG5cbiAgcHJpdmF0ZSBzaXplOiBJU2l6ZTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNpcmNsZVNlcnZpY2U6IENpcmNsZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSBzdHlsZVNlcnZpY2U6IFN0eWxlU2VydmljZVxuICApIHtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuY2lyY2xlU2VydmljZS5jaXJjbGVWYWx1ZXMuc3Vic2NyaWJlKChjaXJjbGVWYWx1ZXM6IElDaXJjbGUpID0+IHtcbiAgICAgIHRoaXMuY2lyY2xlVmFsdWVzID0gY2lyY2xlVmFsdWVzO1xuICAgICAgdGhpcy5zaXplID0ge1xuICAgICAgICBoZWlnaHQ6IDIwMCxcbiAgICAgICAgbWF4U2l6ZTogMjAwLFxuICAgICAgICB3aWR0aDogMjAwXG4gICAgICB9O1xuICAgICAgdGhpcy51cGRhdGVQZXJjZW50KCk7XG4gICAgICB0aGlzLmFuaW1hdGVDaXJjbGUoKTtcbiAgICAgIHRoaXMuYW5pbWF0ZUNpcmNsZUluVmlldygpO1xuICAgIH0pO1xuICB9XG5cbiAgdXBkYXRlUGVyY2VudCgpOiB2b2lkIHtcbiAgICBjb25zdCBwZXJjZW50ID0gdGhpcy5jaXJjbGVWYWx1ZXMucGVyY2VudC52YWx1ZTtcbiAgICBjb25zdCBlbmRBbmdsZSA9ICh0aGlzLmNpcmNsZVZhbHVlcy5hbmdsZT8uZW5kID8/IDM2MCkgLyAxMDAgKiBwZXJjZW50O1xuICAgIGNvbnN0IHN0YXJ0QW5nbGUgPSAodGhpcy5jaXJjbGVWYWx1ZXMuYW5nbGU/LnN0YXJ0ID8/IDApO1xuICAgIHRoaXMudmlld0JveCA9IGAwIDAgJHt0aGlzLnNpemUud2lkdGh9ICR7dGhpcy5zaXplLmhlaWdodH1gO1xuICAgIHRoaXMuY29vcmRpbmF0ZXMgPSB7XG4gICAgICB4OiB0aGlzLnNpemUubWF4U2l6ZSAvIDIsXG4gICAgICB5OiB0aGlzLnNpemUubWF4U2l6ZSAvIDIsXG4gICAgfTtcbiAgICB0aGlzLnJhZGl1cyA9IHRoaXMuc2l6ZS5tYXhTaXplIC8gMi4yO1xuXG4gICAgdGhpcy5hcmNEYXRhID0gdGhpcy5jaXJjbGVTZXJ2aWNlLmRlc2NyaWJlQXJjKFxuICAgICAgdGhpcy5zaXplLm1heFNpemUsXG4gICAgICBzdGFydEFuZ2xlLFxuICAgICAgZW5kQW5nbGUsXG4gICAgKTtcbiAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuXG4gIGFuaW1hdGVDaXJjbGUoKTogdm9pZCB7XG4gICAgY29uc3QgcGF0aEVsZW1lbnRzID0gdGhpcy5zdmdDb250YWluZXIubmF0aXZlRWxlbWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgncGF0aCcpO1xuICAgIGlmICh0aGlzLmNpcmNsZVZhbHVlcy5hbmltYXRlKSB7XG4gICAgICB0aGlzLnN0eWxlU2VydmljZS5hbmltYXRlQXJjKHtcbiAgICAgICAgYXJjOiBwYXRoRWxlbWVudHNbMF0sXG4gICAgICAgIGFyY1BhcmFtczoge1xuICAgICAgICAgIHBlcmNlbnQ6IHRoaXMuY2lyY2xlVmFsdWVzLnBlcmNlbnQudmFsdWUsXG4gICAgICAgICAgeDogdGhpcy5jb29yZGluYXRlcy54LFxuICAgICAgICAgIHk6IHRoaXMuY29vcmRpbmF0ZXMueSxcbiAgICAgICAgICByYWRpdXM6IHRoaXMucmFkaXVzXG4gICAgICAgIH0sXG4gICAgICAgIG1heFNpemU6IHRoaXMuc2l6ZS5tYXhTaXplLFxuICAgICAgICBwcm9ncmVzc0NvbG9yczogdGhpcy5jaXJjbGVWYWx1ZXMucHJvZ3Jlc3NDb2xvcnNcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGFuaW1hdGVDaXJjbGVJblZpZXcoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY2lyY2xlVmFsdWVzLmFuaW1hdGVJblZpZXcpIHtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuY2hlY2tBbmltYXRpb24oKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGNoZWNrQW5pbWF0aW9uKCk6IHZvaWQge1xuICAgIGNvbnN0IGNpcmNsZUNvbnRhaW5lciA9IHRoaXMuc3ZnQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgICBjb25zdCBpblZpZXcgPSB0aGlzLnN0eWxlU2VydmljZS5pc0VsZW1lbnRJblZpZXdwb3J0KGNpcmNsZUNvbnRhaW5lcik7XG5cbiAgICBpZiAoIWNpcmNsZUNvbnRhaW5lci5jbGFzc0xpc3QuY29udGFpbnMoJ3JlYW5pbWF0ZWQnKSAmJiBpblZpZXcpIHtcbiAgICAgIGNpcmNsZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdyZWFuaW1hdGVkJyk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuYW5pbWF0ZUNpcmNsZSgpLCAyNTApO1xuICAgIH1cbiAgfVxufVxuIl19