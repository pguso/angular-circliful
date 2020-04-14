var StyleService_1;
import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { CircleService } from './circle.service';
import * as i0 from "@angular/core";
import * as i1 from "./circle.service";
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
StyleService.ɵprov = i0.ɵɵdefineInjectable({ factory: function StyleService_Factory() { return new StyleService(i0.ɵɵinject(i1.CircleService)); }, token: StyleService, providedIn: "root" });
StyleService = StyleService_1 = __decorate([
    Injectable({
        providedIn: 'root'
    })
], StyleService);
export { StyleService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3R5bGUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItY2lyY2xpZnVsLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2Uvc3R5bGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0MsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLGtCQUFrQixDQUFDOzs7QUFLL0MsSUFBYSxZQUFZLG9CQUF6QixNQUFhLFlBQVk7SUFFdkIsWUFBb0IsYUFBNEI7UUFBNUIsa0JBQWEsR0FBYixhQUFhLENBQWU7SUFBSSxDQUFDO0lBRTdDLE1BQU0sQ0FBQyxlQUFlLENBQUMsU0FBaUIsRUFBRSxhQUFxQjtRQUNyRSxJQUFJLEVBQUUsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBRXBDLElBQUksYUFBYSxJQUFJLEdBQUcsRUFBRTtZQUN4QixFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztTQUNiO1FBRUQsT0FBTyxFQUFFLENBQUM7SUFDWixDQUFDO0lBRU8sTUFBTSxDQUFDLGFBQWEsQ0FBQyxPQUFnQixFQUFFLFVBQXdDO1FBQ3JGLEtBQUssTUFBTSxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQ3JELE9BQU8sQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQ2xDO0lBQ0gsQ0FBQztJQUVPLE1BQU0sQ0FBQyxlQUFlLENBQUMsT0FBZ0IsRUFBRSxhQUFxQjtRQUNwRSxPQUFPLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFRDs7T0FFRztJQUNJLFVBQVUsQ0FDZixNQUtDO1FBRUQsTUFBTSxFQUFDLEdBQUcsRUFBRSxTQUFTLEVBQUUsY0FBYyxFQUFDLEdBQUcsTUFBTSxDQUFDO1FBQ2hELE1BQU0sVUFBVSxHQUFHLENBQUMsQ0FBQztRQUNyQixNQUFNLGFBQWEsR0FBRyxHQUFHLENBQUM7UUFDMUIsTUFBTSxFQUFFLEdBQUcsY0FBWSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsRUFBRSxFQUFFLFNBQVMsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUMvRSxNQUFNLGdCQUFnQixHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLElBQUksY0FBYyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFFcEYsY0FBWSxDQUFDLGVBQWUsQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFFM0MsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ2QsTUFBTSxRQUFRLEdBQUcsV0FBVyxDQUFDLEdBQUcsRUFBRTtZQUNoQyxNQUFNLFFBQVEsR0FBRyxhQUFhLEdBQUcsR0FBRyxHQUFHLEtBQUssQ0FBQztZQUM3QyxjQUFZLENBQUMsYUFBYSxDQUFDLEdBQUcsRUFBRTtnQkFDOUIsQ0FBQyxFQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsVUFBVSxFQUFFLFFBQVEsQ0FBQzthQUN6RSxDQUFDLENBQUM7WUFFSCxJQUFJLGdCQUFnQixFQUFFO2dCQUNwQixJQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxjQUFjLENBQUMsQ0FBQzthQUNwRDtZQUVELEtBQUssRUFBRSxDQUFDO1lBRVIsSUFBSSxLQUFLLEdBQUcsU0FBUyxDQUFDLE9BQU8sRUFBRTtnQkFDN0IsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQ3pCO1FBQ0gsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ1QsQ0FBQztJQUVEOztPQUVHO0lBQ0ksaUJBQWlCLENBQUMsV0FBbUIsRUFBRSxHQUFZLEVBQUUsY0FBZ0M7UUFDMUYsTUFBTSxhQUFhLEdBQUcsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQXdCLEVBQUUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEtBQUssV0FBVyxDQUFDLENBQUM7UUFDMUcsSUFBSSxhQUFhLEVBQUU7WUFDakIsY0FBWSxDQUFDLGFBQWEsQ0FBQyxHQUFHLEVBQUU7Z0JBQzlCLEtBQUssRUFBRSxXQUFXLGFBQWEsQ0FBQyxLQUFLLEVBQUU7YUFDeEMsQ0FBQyxDQUFDO1NBQ0o7YUFBTSxJQUFJLE9BQU8sYUFBYSxLQUFLLFdBQVcsSUFBSSxhQUFhLENBQUMsT0FBTyxHQUFHLFdBQVcsRUFBRTtZQUN0RixjQUFZLENBQUMsZUFBZSxDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUMsQ0FBQztTQUM1QztJQUNILENBQUM7SUFFTSxtQkFBbUIsQ0FBQyxlQUE0QjtRQUNyRCxNQUFNLFNBQVMsR0FBRyxlQUFlLENBQUMsU0FBUyxDQUFDO1FBQzVDLE1BQU0saUJBQWlCLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQztRQUN6QyxNQUFNLFlBQVksR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDO1FBRXhDLE9BQU8saUJBQWlCLEdBQUcsU0FBUyxJQUFJLGlCQUFpQixHQUFHLFlBQVksR0FBRyxTQUFTLENBQUM7SUFDdkYsQ0FBQztDQUNGLENBQUE7O1lBakZvQyxhQUFhOzs7QUFGckMsWUFBWTtJQUh4QixVQUFVLENBQUM7UUFDVixVQUFVLEVBQUUsTUFBTTtLQUNuQixDQUFDO0dBQ1csWUFBWSxDQW1GeEI7U0FuRlksWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7SUNhbGN1bGF0aW9uUGFyYW1zfSBmcm9tICcuLi9pbnRlcmZhY2UvaWNhbGN1bGF0aW9uLXBhcmFtcyc7XG5pbXBvcnQge0lQcm9ncmVzc0NvbG9yfSBmcm9tICcuLi9pbnRlcmZhY2UvaXByb2dyZXNzLWNvbG9yJztcbmltcG9ydCB7Q2lyY2xlU2VydmljZX0gZnJvbSAnLi9jaXJjbGUuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFN0eWxlU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjaXJjbGVTZXJ2aWNlOiBDaXJjbGVTZXJ2aWNlKSB7IH1cblxuICBwcml2YXRlIHN0YXRpYyBnZXRNaWxsaXNlY29uZHMoZGVmYXVsdE1zOiBudW1iZXIsIGVuZEFuZ2xlR3JhZGU6IG51bWJlcikge1xuICAgIGxldCBtcyA9IGRlZmF1bHRNcyA/IGRlZmF1bHRNcyA6IDUwO1xuXG4gICAgaWYgKGVuZEFuZ2xlR3JhZGUgPD0gMTgwKSB7XG4gICAgICBtcyA9IG1zIC8gMztcbiAgICB9XG5cbiAgICByZXR1cm4gbXM7XG4gIH1cblxuICBwcml2YXRlIHN0YXRpYyBzZXRBdHRyaWJ1dGVzKGVsZW1lbnQ6IEVsZW1lbnQsIGF0dHJpYnV0ZXM6IHtzdHlsZT86IHN0cmluZywgZD86IHN0cmluZ30pOiB2b2lkIHtcbiAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhhdHRyaWJ1dGVzKSkge1xuICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoa2V5LCB2YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzdGF0aWMgcmVtb3ZlQXR0cmlidXRlKGVsZW1lbnQ6IEVsZW1lbnQsIGF0dHJpYnV0ZU5hbWU6IHN0cmluZyk6IHZvaWQge1xuICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiBSZWRyYXdzIHRoZSBhcmMgKGNpcmNsZSkgYm9yZGVyXG4gICAqL1xuICBwdWJsaWMgYW5pbWF0ZUFyYyhcbiAgICBwYXJhbXM6IHtcbiAgICAgIGFyYzogRWxlbWVudCxcbiAgICAgIGFyY1BhcmFtczogSUNhbGN1bGF0aW9uUGFyYW1zLFxuICAgICAgbWF4U2l6ZTogbnVtYmVyLFxuICAgICAgcHJvZ3Jlc3NDb2xvcnM/OiBJUHJvZ3Jlc3NDb2xvcltdXG4gICAgfVxuICApOiB2b2lkIHtcbiAgICBjb25zdCB7YXJjLCBhcmNQYXJhbXMsIHByb2dyZXNzQ29sb3JzfSA9IHBhcmFtcztcbiAgICBjb25zdCBzdGFydEFuZ2xlID0gMDtcbiAgICBjb25zdCBlbmRBbmdsZUdyYWRlID0gMzYwO1xuICAgIGNvbnN0IG1zID0gU3R5bGVTZXJ2aWNlLmdldE1pbGxpc2Vjb25kcyhhcmNQYXJhbXMubXMsIGFyY1BhcmFtcy5lbmRBbmdsZUdyYWRlKTtcbiAgICBjb25zdCBoYXNQcm9ncmVzc0NvbG9yID0gQXJyYXkuaXNBcnJheShwcm9ncmVzc0NvbG9ycykgJiYgcHJvZ3Jlc3NDb2xvcnMubGVuZ3RoID4gMDtcblxuICAgIFN0eWxlU2VydmljZS5yZW1vdmVBdHRyaWJ1dGUoYXJjLCAnc3R5bGUnKTtcblxuICAgIGxldCBjb3VudCA9IDE7XG4gICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBjb25zdCBlbmRBbmdsZSA9IGVuZEFuZ2xlR3JhZGUgLyAxMDAgKiBjb3VudDtcbiAgICAgIFN0eWxlU2VydmljZS5zZXRBdHRyaWJ1dGVzKGFyYywge1xuICAgICAgICBkOiAgdGhpcy5jaXJjbGVTZXJ2aWNlLmRlc2NyaWJlQXJjKHBhcmFtcy5tYXhTaXplLCBzdGFydEFuZ2xlLCBlbmRBbmdsZSksXG4gICAgICB9KTtcblxuICAgICAgaWYgKGhhc1Byb2dyZXNzQ29sb3IpIHtcbiAgICAgICAgdGhpcy51cGRhdGVDaXJjbGVDb2xvcihjb3VudCwgYXJjLCBwcm9ncmVzc0NvbG9ycyk7XG4gICAgICB9XG5cbiAgICAgIGNvdW50Kys7XG5cbiAgICAgIGlmIChjb3VudCA+IGFyY1BhcmFtcy5wZXJjZW50KSB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgICAgfVxuICAgIH0sIG1zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gSWYgb3B0aW9ucy5wcm9ncmVzc0NvbG9ycyBpcyBzZXQsIGNvbG9ycyBhcmUgY2hhbmdlZCBvbiBnaXZlbiBwZXJjZW50YWdlc1xuICAgKi9cbiAgcHVibGljIHVwZGF0ZUNpcmNsZUNvbG9yKGFjdHVhbENvdW50OiBudW1iZXIsIGFyYzogRWxlbWVudCwgcHJvZ3Jlc3NDb2xvcnM6IElQcm9ncmVzc0NvbG9yW10pIHtcbiAgICBjb25zdCBwcm9ncmVzc0NvbG9yID0gcHJvZ3Jlc3NDb2xvcnMuZmluZCgocHJvZ3Jlc3M6IElQcm9ncmVzc0NvbG9yKSA9PiBwcm9ncmVzcy5wZXJjZW50ID09PSBhY3R1YWxDb3VudCk7XG4gICAgaWYgKHByb2dyZXNzQ29sb3IpIHtcbiAgICAgIFN0eWxlU2VydmljZS5zZXRBdHRyaWJ1dGVzKGFyYywge1xuICAgICAgICBzdHlsZTogYHN0cm9rZTogJHtwcm9ncmVzc0NvbG9yLmNvbG9yfWAsXG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBwcm9ncmVzc0NvbG9yICE9PSAndW5kZWZpbmVkJyAmJiBwcm9ncmVzc0NvbG9yLnBlcmNlbnQgPCBhY3R1YWxDb3VudCkge1xuICAgICAgU3R5bGVTZXJ2aWNlLnJlbW92ZUF0dHJpYnV0ZShhcmMsICdzdHlsZScpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBpc0VsZW1lbnRJblZpZXdwb3J0KGNpcmNsZUNvbnRhaW5lcjogSFRNTEVsZW1lbnQpOiBib29sZWFuIHtcbiAgICBjb25zdCBvZmZzZXRUb3AgPSBjaXJjbGVDb250YWluZXIub2Zmc2V0VG9wO1xuICAgIGNvbnN0IHNjcm9sbFBvc2l0aW9uVG9wID0gd2luZG93LnNjcm9sbFk7XG4gICAgY29uc3Qgd2luZG93SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuXG4gICAgcmV0dXJuIHNjcm9sbFBvc2l0aW9uVG9wIDwgb2Zmc2V0VG9wICYmIHNjcm9sbFBvc2l0aW9uVG9wICsgd2luZG93SGVpZ2h0ID4gb2Zmc2V0VG9wO1xuICB9XG59XG4iXX0=