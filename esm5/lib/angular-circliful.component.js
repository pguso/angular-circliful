import { __decorate } from "tslib";
import { Component, Input, ViewEncapsulation } from '@angular/core';
import { CircleService } from './service/circle.service';
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
export { AngularCirclifulComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1jaXJjbGlmdWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1jaXJjbGlmdWwvIiwic291cmNlcyI6WyJsaWIvYW5ndWxhci1jaXJjbGlmdWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBYSxpQkFBaUIsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQVM3RSxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFRdkQ7SUFrQkUsbUNBQW9CLGFBQTRCO1FBQTVCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO0lBQUksQ0FBQztJQUVyRCwrQ0FBVyxHQUFYO1FBQ0UsSUFBTSxhQUFhLEdBQUcsT0FBTyxJQUFJLENBQUMsYUFBYSxLQUFLLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQzFGLElBQU0sWUFBWSxHQUFhO1lBQzdCLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTztZQUNyQixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7WUFDakIsV0FBVyxFQUFFLElBQUksQ0FBQyxXQUFXO1lBQzdCLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYTtZQUNqQyxjQUFjLEVBQUUsSUFBSSxDQUFDLGNBQWM7WUFDbkMsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPO1lBQ3JCLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYTtZQUNqQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsZ0JBQWdCO1lBQ3ZDLGFBQWEsZUFBQTtZQUNiLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztTQUNsQixDQUFDO1FBRUYsSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFO1lBQ3ZFLFlBQVksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztTQUN2QztRQUVELElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNwQyxZQUFZLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7U0FDL0I7UUFFRCxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDbEMsWUFBWSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1NBQy9CO1FBRUQsSUFBSSxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFO1lBQ2xDLFlBQVksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztTQUNqQztRQUVELElBQUksQ0FBQyxhQUFhLENBQUMsa0JBQWtCLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDdEQsQ0FBQzs7Z0JBbENrQyxhQUFhOztJQWpCdkM7UUFBUixLQUFLLEVBQUU7OERBQW1CO0lBQ2xCO1FBQVIsS0FBSyxFQUFFOzREQUFlO0lBQ2Q7UUFBUixLQUFLLEVBQUU7K0RBQXFCO0lBQ3BCO1FBQVIsS0FBSyxFQUFFO2tFQUFxQjtJQUNwQjtRQUFSLEtBQUssRUFBRTtvRUFBdUI7SUFDdEI7UUFBUixLQUFLLEVBQUU7cUVBQWtDO0lBQ2pDO1FBQVIsS0FBSyxFQUFFOzhEQUFrQjtJQUNqQjtRQUFSLEtBQUssRUFBRTtvRUFBd0I7SUFDdkI7UUFBUixLQUFLLEVBQUU7NERBQXFDO0lBRXBDO1FBQVIsS0FBSyxFQUFFO3VFQUFxQztJQUNwQztRQUFSLEtBQUssRUFBRTsyREFBWTtJQUNYO1FBQVIsS0FBSyxFQUFFOzJEQUFhO0lBQ1o7UUFBUixLQUFLLEVBQUU7NERBQWU7SUFFZDtRQUFSLEtBQUssRUFBRTtvRUFBMEI7SUFoQnZCLHlCQUF5QjtRQUxyQyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsc0JBQXNCO1lBQ2hDLG1EQUFpRDtZQUNqRCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtTQUN0QyxDQUFDO09BQ1cseUJBQXlCLENBc0RyQztJQUFELGdDQUFDO0NBQUEsQUF0REQsSUFzREM7U0F0RFkseUJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPbkNoYW5nZXMsIFZpZXdFbmNhcHN1bGF0aW9ufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7SUdyYWRpZW50fSBmcm9tICcuL2ludGVyZmFjZS9pZ3JhZGllbnQnO1xuaW1wb3J0IHtJRWxlbWVudHN9IGZyb20gJy4vaW50ZXJmYWNlL2llbGVtZW50cyc7XG5pbXBvcnQge0lQZXJjZW50fSBmcm9tICcuL2ludGVyZmFjZS9pcGVyY2VudCc7XG5pbXBvcnQge0lCYWNrZ3JvdW5kQ2lyY2xlfSBmcm9tICcuL2ludGVyZmFjZS9pYmFja2dyb3VuZC1jaXJjbGUnO1xuaW1wb3J0IHtJVGV4dH0gZnJvbSAnLi9pbnRlcmZhY2UvaXRleHQnO1xuaW1wb3J0IHtJY29ufSBmcm9tICcuL2ludGVyZmFjZS9pY29uJztcbmltcG9ydCB7SVBvaW50fSBmcm9tICcuL2ludGVyZmFjZS9pcG9pbnQnO1xuaW1wb3J0IHtJUHJvZ3Jlc3NDb2xvcn0gZnJvbSAnLi9pbnRlcmZhY2UvaXByb2dyZXNzLWNvbG9yJztcbmltcG9ydCB7Q2lyY2xlU2VydmljZX0gZnJvbSAnLi9zZXJ2aWNlL2NpcmNsZS5zZXJ2aWNlJztcbmltcG9ydCB7SUNpcmNsZX0gZnJvbSAnLi9pbnRlcmZhY2UvaWNpcmNsZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FjLWFuZ3VsYXItY2lyY2xpZnVsJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2FuZ3VsYXItY2lyY2xpZnVsLmNvbXBvbmVudC5odG1sJyxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBBbmd1bGFyQ2lyY2xpZnVsQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgQElucHV0KCkgcGVyY2VudDogSVBlcmNlbnQ7XG4gIEBJbnB1dCgpIGNvbG9yOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGdyYWRpZW50OiBJR3JhZGllbnQ7XG4gIEBJbnB1dCgpIHN0cm9rZVdpZHRoOiBudW1iZXI7XG4gIEBJbnB1dCgpIHN0cm9rZUxpbmVjYXA6IHN0cmluZztcbiAgQElucHV0KCkgcHJvZ3Jlc3NDb2xvcnM6IElQcm9ncmVzc0NvbG9yW107XG4gIEBJbnB1dCgpIGFuaW1hdGU6IGJvb2xlYW47XG4gIEBJbnB1dCgpIGFuaW1hdGVJblZpZXc6IGJvb2xlYW47XG4gIEBJbnB1dCgpIGFuZ2xlOiB7c3RhcnQ6IG51bWJlciwgZW5kOiBudW1iZXJ9O1xuXG4gIEBJbnB1dCgpIGJhY2tncm91bmRDaXJjbGU6IElCYWNrZ3JvdW5kQ2lyY2xlO1xuICBASW5wdXQoKSBpY29uOiBJY29uO1xuICBASW5wdXQoKSB0ZXh0OiBJVGV4dDtcbiAgQElucHV0KCkgcG9pbnQ6IElQb2ludDtcblxuICBASW5wdXQoKSBjdXN0b21DbGFzc2VzOiBJRWxlbWVudHM7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjaXJjbGVTZXJ2aWNlOiBDaXJjbGVTZXJ2aWNlKSB7IH1cblxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcbiAgICBjb25zdCBjdXN0b21DbGFzc2VzID0gdHlwZW9mIHRoaXMuY3VzdG9tQ2xhc3NlcyA9PT0gJ3VuZGVmaW5lZCcgPyB7fSA6IHRoaXMuY3VzdG9tQ2xhc3NlcztcbiAgICBjb25zdCBjaXJjbGVWYWx1ZXM6IElDaXJjbGUgPSAge1xuICAgICAgcGVyY2VudDogdGhpcy5wZXJjZW50LFxuICAgICAgY29sb3I6IHRoaXMuY29sb3IsXG4gICAgICBzdHJva2VXaWR0aDogdGhpcy5zdHJva2VXaWR0aCxcbiAgICAgIHN0cm9rZUxpbmVjYXA6IHRoaXMuc3Ryb2tlTGluZWNhcCxcbiAgICAgIHByb2dyZXNzQ29sb3JzOiB0aGlzLnByb2dyZXNzQ29sb3JzLFxuICAgICAgYW5pbWF0ZTogdGhpcy5hbmltYXRlLFxuICAgICAgYW5pbWF0ZUluVmlldzogdGhpcy5hbmltYXRlSW5WaWV3LFxuICAgICAgYmFja2dyb3VuZENpcmNsZTogdGhpcy5iYWNrZ3JvdW5kQ2lyY2xlLFxuICAgICAgY3VzdG9tQ2xhc3NlcyxcbiAgICAgIGFuZ2xlOiB0aGlzLmFuZ2xlXG4gICAgfTtcblxuICAgIGlmICh0aGlzLmdyYWRpZW50ICYmIHRoaXMuZ3JhZGllbnQuc3RhcnRDb2xvciAmJiB0aGlzLmdyYWRpZW50LmVuZENvbG9yKSB7XG4gICAgICBjaXJjbGVWYWx1ZXMuZ3JhZGllbnQgPSB0aGlzLmdyYWRpZW50O1xuICAgIH1cblxuICAgIGlmICh0aGlzLmljb24gJiYgdGhpcy5pY29uLmljb25DbGFzcykge1xuICAgICAgY2lyY2xlVmFsdWVzLmljb24gPSB0aGlzLmljb247XG4gICAgfVxuXG4gICAgaWYgKHRoaXMudGV4dCAmJiB0aGlzLnRleHQuY29udGVudCkge1xuICAgICAgY2lyY2xlVmFsdWVzLnRleHQgPSB0aGlzLnRleHQ7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucG9pbnQgJiYgdGhpcy5wb2ludC5jb2xvcikge1xuICAgICAgY2lyY2xlVmFsdWVzLnBvaW50ID0gdGhpcy5wb2ludDtcbiAgICB9XG5cbiAgICB0aGlzLmNpcmNsZVNlcnZpY2UudXBkYXRlQ2lyY2xlVmFsdWVzKGNpcmNsZVZhbHVlcyk7XG4gIH1cblxufVxuIl19