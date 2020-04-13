import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
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
    CircleService.ɵprov = i0.ɵɵdefineInjectable({ factory: function CircleService_Factory() { return new CircleService(); }, token: CircleService, providedIn: "root" });
    CircleService = CircleService_1 = __decorate([
        Injectable({
            providedIn: 'root'
        })
    ], CircleService);
    return CircleService;
}());
export { CircleService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2lyY2xlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWNpcmNsaWZ1bC8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlL2NpcmNsZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSxNQUFNLENBQUM7O0FBTXJDO0lBQUE7UUFDUyxpQkFBWSxHQUFHLElBQUksZUFBZSxDQUFVLEVBQUMsT0FBTyxFQUFFLEVBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFDLEVBQUMsQ0FBQyxDQUFDO0tBK0MzRjtzQkFoRFksYUFBYTtJQUd4Qjs7O09BR0c7SUFDWSw4QkFBZ0IsR0FBL0IsVUFDRSxPQUFlLEVBQ2YsT0FBZSxFQUNmLE1BQWMsRUFDZCxjQUFzQjtRQUV0QixJQUFNLGNBQWMsR0FBRyxDQUFDLGNBQWMsR0FBRyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxHQUFHLEtBQUssQ0FBQztRQUUvRCxPQUFPO1lBQ0wsQ0FBQyxFQUFFLE9BQU8sR0FBRyxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUM7WUFDOUMsQ0FBQyxFQUFFLE9BQU8sR0FBRyxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUM7U0FDL0MsQ0FBQztJQUNKLENBQUM7SUFFRDs7O09BR0c7SUFDSSxtQ0FBVyxHQUFsQixVQUFtQixPQUFlLEVBQUUsVUFBa0IsRUFBRSxRQUFnQjtRQUN0RSxJQUFNLENBQUMsR0FBRyxPQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQ3RCLElBQU0sQ0FBQyxHQUFHLE9BQU8sR0FBRyxDQUFDLENBQUM7UUFDdEIsSUFBTSxNQUFNLEdBQUcsT0FBTyxHQUFHLEdBQUcsQ0FBQztRQUM3QixJQUFNLEtBQUssR0FBRyxlQUFhLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDckUsSUFBTSxHQUFHLEdBQUcsZUFBYSxDQUFDLGdCQUFnQixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBQ3JFLElBQU0sWUFBWSxHQUFHLFFBQVEsR0FBRyxVQUFVLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztRQUM5RCxJQUFJLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFFdEIsSUFBSSxRQUFRLEtBQUssR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsRUFBRTtZQUN2QyxTQUFTLEdBQUcsSUFBSSxDQUFDO1lBQ2pCLEtBQUssQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUM7U0FDM0I7UUFFRCxPQUFPO1lBQ0wsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDckIsR0FBRyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLFlBQVksRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztTQUM5RSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNkLENBQUM7SUFFTSwwQ0FBa0IsR0FBekIsVUFBMEIsWUFBcUI7UUFDN0MsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDdkMsQ0FBQzs7O0lBL0NVLGFBQWE7UUFIekIsVUFBVSxDQUFDO1lBQ1YsVUFBVSxFQUFFLE1BQU07U0FDbkIsQ0FBQztPQUNXLGFBQWEsQ0FnRHpCO3dCQXhERDtDQXdEQyxBQWhERCxJQWdEQztTQWhEWSxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJQ2FsY3VsYXRpb25QYXJhbXN9IGZyb20gJy4uL2ludGVyZmFjZS9pY2FsY3VsYXRpb24tcGFyYW1zJztcbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0JlaGF2aW9yU3ViamVjdH0gZnJvbSAncnhqcyc7XG5pbXBvcnQge0lDaXJjbGV9IGZyb20gJy4uL2ludGVyZmFjZS9pY2lyY2xlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgQ2lyY2xlU2VydmljZSB7XG4gIHB1YmxpYyBjaXJjbGVWYWx1ZXMgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PElDaXJjbGU+KHtwZXJjZW50OiB7dmFsdWU6IDYwLCBjb2xvcjogJ2JsdWUnfX0pO1xuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gRm9yIGVhc2llciBoYW5kbGluZyBwb2xhciBjb29yZGluYXRlcyBhcmUgdXNlZCBhbmQgY29udmVydGVkIHRvIGNhcnRlc2lhbiBjb29yZGluYXRlc1xuICAgKiBAcmV0dXJucyBvYmplY3RcbiAgICovXG4gIHByaXZhdGUgc3RhdGljIHBvbGFyVG9DYXJ0ZXNpYW4oXG4gICAgY2VudGVyWDogbnVtYmVyLFxuICAgIGNlbnRlclk6IG51bWJlcixcbiAgICByYWRpdXM6IG51bWJlcixcbiAgICBhbmdsZUluRGVncmVlczogbnVtYmVyLFxuICApOiBJQ2FsY3VsYXRpb25QYXJhbXMge1xuICAgIGNvbnN0IGFuZ2xlSW5SYWRpYW5zID0gKGFuZ2xlSW5EZWdyZWVzIC0gOTApICogTWF0aC5QSSAvIDE4MC4wO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHg6IGNlbnRlclggKyByYWRpdXMgKiBNYXRoLmNvcyhhbmdsZUluUmFkaWFucyksXG4gICAgICB5OiBjZW50ZXJZICsgcmFkaXVzICogTWF0aC5zaW4oYW5nbGVJblJhZGlhbnMpLFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIFJldHVybnMgdGhlIHN0cmluZyBmb3IgdGhlIGRhdGEgYXR0cmlidXRlIGluIHRoZSBwYXRoIHRhZ1xuICAgKiBAcmV0dXJucyBzdHJpbmdcbiAgICovXG4gIHB1YmxpYyBkZXNjcmliZUFyYyhtYXhTaXplOiBudW1iZXIsIHN0YXJ0QW5nbGU6IG51bWJlciwgZW5kQW5nbGU6IG51bWJlcik6IHN0cmluZyB7XG4gICAgY29uc3QgeCA9IG1heFNpemUgLyAyO1xuICAgIGNvbnN0IHkgPSBtYXhTaXplIC8gMjtcbiAgICBjb25zdCByYWRpdXMgPSBtYXhTaXplIC8gMi4yO1xuICAgIGNvbnN0IHN0YXJ0ID0gQ2lyY2xlU2VydmljZS5wb2xhclRvQ2FydGVzaWFuKHgsIHksIHJhZGl1cywgZW5kQW5nbGUpO1xuICAgIGNvbnN0IGVuZCA9IENpcmNsZVNlcnZpY2UucG9sYXJUb0NhcnRlc2lhbih4LCB5LCByYWRpdXMsIHN0YXJ0QW5nbGUpO1xuICAgIGNvbnN0IGxhcmdlQXJjRmxhZyA9IGVuZEFuZ2xlIC0gc3RhcnRBbmdsZSA8PSAxODAgPyAnMCcgOiAnMSc7XG4gICAgbGV0IGNsb3NlUGF0aCA9IGZhbHNlO1xuXG4gICAgaWYgKGVuZEFuZ2xlID09PSAzNjAgJiYgZW5kLnggPiBzdGFydC54KSB7XG4gICAgICBjbG9zZVBhdGggPSB0cnVlO1xuICAgICAgc3RhcnQueCA9IHN0YXJ0LnggLSAwLjAwMTtcbiAgICB9XG5cbiAgICByZXR1cm4gW1xuICAgICAgJ00nLCBzdGFydC54LCBzdGFydC55LFxuICAgICAgJ0EnLCByYWRpdXMsIHJhZGl1cywgMCwgbGFyZ2VBcmNGbGFnLCAwLCBlbmQueCwgZW5kLnksIChjbG9zZVBhdGggPyAnWicgOiAnJyksXG4gICAgXS5qb2luKCcgJyk7XG4gIH1cblxuICBwdWJsaWMgdXBkYXRlQ2lyY2xlVmFsdWVzKGNpcmNsZVZhbHVlczogSUNpcmNsZSk6IHZvaWQge1xuICAgIHRoaXMuY2lyY2xlVmFsdWVzLm5leHQoY2lyY2xlVmFsdWVzKTtcbiAgfVxufVxuIl19