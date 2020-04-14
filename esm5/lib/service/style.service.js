import { __decorate, __read, __values } from "tslib";
import { Injectable } from '@angular/core';
import { CircleService } from './circle.service';
import * as i0 from "@angular/core";
import * as i1 from "./circle.service";
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
    StyleService.ɵprov = i0.ɵɵdefineInjectable({ factory: function StyleService_Factory() { return new StyleService(i0.ɵɵinject(i1.CircleService)); }, token: StyleService, providedIn: "root" });
    StyleService = StyleService_1 = __decorate([
        Injectable({
            providedIn: 'root'
        })
    ], StyleService);
    return StyleService;
}());
export { StyleService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3R5bGUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItY2lyY2xpZnVsLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2Uvc3R5bGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUczQyxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sa0JBQWtCLENBQUM7OztBQUsvQztJQUVFLHNCQUFvQixhQUE0QjtRQUE1QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtJQUFJLENBQUM7cUJBRjFDLFlBQVk7SUFJUiw0QkFBZSxHQUE5QixVQUErQixTQUFpQixFQUFFLGFBQXFCO1FBQ3JFLElBQUksRUFBRSxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFFcEMsSUFBSSxhQUFhLElBQUksR0FBRyxFQUFFO1lBQ3hCLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQ2I7UUFFRCxPQUFPLEVBQUUsQ0FBQztJQUNaLENBQUM7SUFFYywwQkFBYSxHQUE1QixVQUE2QixPQUFnQixFQUFFLFVBQXdDOzs7WUFDckYsS0FBMkIsSUFBQSxLQUFBLFNBQUEsTUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQSxnQkFBQSw0QkFBRTtnQkFBNUMsSUFBQSx3QkFBWSxFQUFYLFdBQUcsRUFBRSxhQUFLO2dCQUNwQixPQUFPLENBQUMsWUFBWSxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQzthQUNsQzs7Ozs7Ozs7O0lBQ0gsQ0FBQztJQUVjLDRCQUFlLEdBQTlCLFVBQStCLE9BQWdCLEVBQUUsYUFBcUI7UUFDcEUsT0FBTyxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRUQ7O09BRUc7SUFDSSxpQ0FBVSxHQUFqQixVQUNFLE1BS0M7UUFOSCxpQkFpQ0M7UUF6QlEsSUFBQSxnQkFBRyxFQUFFLDRCQUFTLEVBQUUsc0NBQWMsQ0FBVztRQUNoRCxJQUFNLFVBQVUsR0FBRyxDQUFDLENBQUM7UUFDckIsSUFBTSxhQUFhLEdBQUcsR0FBRyxDQUFDO1FBQzFCLElBQU0sRUFBRSxHQUFHLGNBQVksQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLEVBQUUsRUFBRSxTQUFTLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDL0UsSUFBTSxnQkFBZ0IsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxJQUFJLGNBQWMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBRXBGLGNBQVksQ0FBQyxlQUFlLENBQUMsR0FBRyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBRTNDLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQztRQUNkLElBQU0sUUFBUSxHQUFHLFdBQVcsQ0FBQztZQUMzQixJQUFNLFFBQVEsR0FBRyxhQUFhLEdBQUcsR0FBRyxHQUFHLEtBQUssQ0FBQztZQUM3QyxjQUFZLENBQUMsYUFBYSxDQUFDLEdBQUcsRUFBRTtnQkFDOUIsQ0FBQyxFQUFHLEtBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsVUFBVSxFQUFFLFFBQVEsQ0FBQzthQUN6RSxDQUFDLENBQUM7WUFFSCxJQUFJLGdCQUFnQixFQUFFO2dCQUNwQixLQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxjQUFjLENBQUMsQ0FBQzthQUNwRDtZQUVELEtBQUssRUFBRSxDQUFDO1lBRVIsSUFBSSxLQUFLLEdBQUcsU0FBUyxDQUFDLE9BQU8sRUFBRTtnQkFDN0IsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQ3pCO1FBQ0gsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ1QsQ0FBQztJQUVEOztPQUVHO0lBQ0ksd0NBQWlCLEdBQXhCLFVBQXlCLFdBQW1CLEVBQUUsR0FBWSxFQUFFLGNBQWdDO1FBQzFGLElBQU0sYUFBYSxHQUFHLGNBQWMsQ0FBQyxJQUFJLENBQUMsVUFBQyxRQUF3QixJQUFLLE9BQUEsUUFBUSxDQUFDLE9BQU8sS0FBSyxXQUFXLEVBQWhDLENBQWdDLENBQUMsQ0FBQztRQUMxRyxJQUFJLGFBQWEsRUFBRTtZQUNqQixjQUFZLENBQUMsYUFBYSxDQUFDLEdBQUcsRUFBRTtnQkFDOUIsS0FBSyxFQUFFLGFBQVcsYUFBYSxDQUFDLEtBQU87YUFDeEMsQ0FBQyxDQUFDO1NBQ0o7YUFBTSxJQUFJLE9BQU8sYUFBYSxLQUFLLFdBQVcsSUFBSSxhQUFhLENBQUMsT0FBTyxHQUFHLFdBQVcsRUFBRTtZQUN0RixjQUFZLENBQUMsZUFBZSxDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUMsQ0FBQztTQUM1QztJQUNILENBQUM7SUFFTSwwQ0FBbUIsR0FBMUIsVUFBMkIsZUFBNEI7UUFDckQsSUFBTSxTQUFTLEdBQUcsZUFBZSxDQUFDLFNBQVMsQ0FBQztRQUM1QyxJQUFNLGlCQUFpQixHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUM7UUFDekMsSUFBTSxZQUFZLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQztRQUV4QyxPQUFPLGlCQUFpQixHQUFHLFNBQVMsSUFBSSxpQkFBaUIsR0FBRyxZQUFZLEdBQUcsU0FBUyxDQUFDO0lBQ3ZGLENBQUM7OztnQkFoRmtDLGFBQWE7OztJQUZyQyxZQUFZO1FBSHhCLFVBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1NBQ25CLENBQUM7T0FDVyxZQUFZLENBbUZ4Qjt1QkEzRkQ7Q0EyRkMsQUFuRkQsSUFtRkM7U0FuRlksWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7SUNhbGN1bGF0aW9uUGFyYW1zfSBmcm9tICcuLi9pbnRlcmZhY2UvaWNhbGN1bGF0aW9uLXBhcmFtcyc7XG5pbXBvcnQge0lQcm9ncmVzc0NvbG9yfSBmcm9tICcuLi9pbnRlcmZhY2UvaXByb2dyZXNzLWNvbG9yJztcbmltcG9ydCB7Q2lyY2xlU2VydmljZX0gZnJvbSAnLi9jaXJjbGUuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFN0eWxlU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjaXJjbGVTZXJ2aWNlOiBDaXJjbGVTZXJ2aWNlKSB7IH1cblxuICBwcml2YXRlIHN0YXRpYyBnZXRNaWxsaXNlY29uZHMoZGVmYXVsdE1zOiBudW1iZXIsIGVuZEFuZ2xlR3JhZGU6IG51bWJlcikge1xuICAgIGxldCBtcyA9IGRlZmF1bHRNcyA/IGRlZmF1bHRNcyA6IDUwO1xuXG4gICAgaWYgKGVuZEFuZ2xlR3JhZGUgPD0gMTgwKSB7XG4gICAgICBtcyA9IG1zIC8gMztcbiAgICB9XG5cbiAgICByZXR1cm4gbXM7XG4gIH1cblxuICBwcml2YXRlIHN0YXRpYyBzZXRBdHRyaWJ1dGVzKGVsZW1lbnQ6IEVsZW1lbnQsIGF0dHJpYnV0ZXM6IHtzdHlsZT86IHN0cmluZywgZD86IHN0cmluZ30pOiB2b2lkIHtcbiAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhhdHRyaWJ1dGVzKSkge1xuICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoa2V5LCB2YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzdGF0aWMgcmVtb3ZlQXR0cmlidXRlKGVsZW1lbnQ6IEVsZW1lbnQsIGF0dHJpYnV0ZU5hbWU6IHN0cmluZyk6IHZvaWQge1xuICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiBSZWRyYXdzIHRoZSBhcmMgKGNpcmNsZSkgYm9yZGVyXG4gICAqL1xuICBwdWJsaWMgYW5pbWF0ZUFyYyhcbiAgICBwYXJhbXM6IHtcbiAgICAgIGFyYzogRWxlbWVudCxcbiAgICAgIGFyY1BhcmFtczogSUNhbGN1bGF0aW9uUGFyYW1zLFxuICAgICAgbWF4U2l6ZTogbnVtYmVyLFxuICAgICAgcHJvZ3Jlc3NDb2xvcnM/OiBJUHJvZ3Jlc3NDb2xvcltdXG4gICAgfVxuICApOiB2b2lkIHtcbiAgICBjb25zdCB7YXJjLCBhcmNQYXJhbXMsIHByb2dyZXNzQ29sb3JzfSA9IHBhcmFtcztcbiAgICBjb25zdCBzdGFydEFuZ2xlID0gMDtcbiAgICBjb25zdCBlbmRBbmdsZUdyYWRlID0gMzYwO1xuICAgIGNvbnN0IG1zID0gU3R5bGVTZXJ2aWNlLmdldE1pbGxpc2Vjb25kcyhhcmNQYXJhbXMubXMsIGFyY1BhcmFtcy5lbmRBbmdsZUdyYWRlKTtcbiAgICBjb25zdCBoYXNQcm9ncmVzc0NvbG9yID0gQXJyYXkuaXNBcnJheShwcm9ncmVzc0NvbG9ycykgJiYgcHJvZ3Jlc3NDb2xvcnMubGVuZ3RoID4gMDtcblxuICAgIFN0eWxlU2VydmljZS5yZW1vdmVBdHRyaWJ1dGUoYXJjLCAnc3R5bGUnKTtcblxuICAgIGxldCBjb3VudCA9IDE7XG4gICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBjb25zdCBlbmRBbmdsZSA9IGVuZEFuZ2xlR3JhZGUgLyAxMDAgKiBjb3VudDtcbiAgICAgIFN0eWxlU2VydmljZS5zZXRBdHRyaWJ1dGVzKGFyYywge1xuICAgICAgICBkOiAgdGhpcy5jaXJjbGVTZXJ2aWNlLmRlc2NyaWJlQXJjKHBhcmFtcy5tYXhTaXplLCBzdGFydEFuZ2xlLCBlbmRBbmdsZSksXG4gICAgICB9KTtcblxuICAgICAgaWYgKGhhc1Byb2dyZXNzQ29sb3IpIHtcbiAgICAgICAgdGhpcy51cGRhdGVDaXJjbGVDb2xvcihjb3VudCwgYXJjLCBwcm9ncmVzc0NvbG9ycyk7XG4gICAgICB9XG5cbiAgICAgIGNvdW50Kys7XG5cbiAgICAgIGlmIChjb3VudCA+IGFyY1BhcmFtcy5wZXJjZW50KSB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgICAgfVxuICAgIH0sIG1zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gSWYgb3B0aW9ucy5wcm9ncmVzc0NvbG9ycyBpcyBzZXQsIGNvbG9ycyBhcmUgY2hhbmdlZCBvbiBnaXZlbiBwZXJjZW50YWdlc1xuICAgKi9cbiAgcHVibGljIHVwZGF0ZUNpcmNsZUNvbG9yKGFjdHVhbENvdW50OiBudW1iZXIsIGFyYzogRWxlbWVudCwgcHJvZ3Jlc3NDb2xvcnM6IElQcm9ncmVzc0NvbG9yW10pIHtcbiAgICBjb25zdCBwcm9ncmVzc0NvbG9yID0gcHJvZ3Jlc3NDb2xvcnMuZmluZCgocHJvZ3Jlc3M6IElQcm9ncmVzc0NvbG9yKSA9PiBwcm9ncmVzcy5wZXJjZW50ID09PSBhY3R1YWxDb3VudCk7XG4gICAgaWYgKHByb2dyZXNzQ29sb3IpIHtcbiAgICAgIFN0eWxlU2VydmljZS5zZXRBdHRyaWJ1dGVzKGFyYywge1xuICAgICAgICBzdHlsZTogYHN0cm9rZTogJHtwcm9ncmVzc0NvbG9yLmNvbG9yfWAsXG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBwcm9ncmVzc0NvbG9yICE9PSAndW5kZWZpbmVkJyAmJiBwcm9ncmVzc0NvbG9yLnBlcmNlbnQgPCBhY3R1YWxDb3VudCkge1xuICAgICAgU3R5bGVTZXJ2aWNlLnJlbW92ZUF0dHJpYnV0ZShhcmMsICdzdHlsZScpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBpc0VsZW1lbnRJblZpZXdwb3J0KGNpcmNsZUNvbnRhaW5lcjogSFRNTEVsZW1lbnQpOiBib29sZWFuIHtcbiAgICBjb25zdCBvZmZzZXRUb3AgPSBjaXJjbGVDb250YWluZXIub2Zmc2V0VG9wO1xuICAgIGNvbnN0IHNjcm9sbFBvc2l0aW9uVG9wID0gd2luZG93LnNjcm9sbFk7XG4gICAgY29uc3Qgd2luZG93SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuXG4gICAgcmV0dXJuIHNjcm9sbFBvc2l0aW9uVG9wIDwgb2Zmc2V0VG9wICYmIHNjcm9sbFBvc2l0aW9uVG9wICsgd2luZG93SGVpZ2h0ID4gb2Zmc2V0VG9wO1xuICB9XG59XG4iXX0=