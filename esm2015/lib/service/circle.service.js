var CircleService_1;
import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
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
CircleService.ɵprov = i0.ɵɵdefineInjectable({ factory: function CircleService_Factory() { return new CircleService(); }, token: CircleService, providedIn: "root" });
CircleService = CircleService_1 = __decorate([
    Injectable({
        providedIn: 'root'
    })
], CircleService);
export { CircleService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2lyY2xlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWNpcmNsaWZ1bC8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlL2NpcmNsZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sTUFBTSxDQUFDOztBQU1yQyxJQUFhLGFBQWEscUJBQTFCLE1BQWEsYUFBYTtJQUExQjtRQUNTLGlCQUFZLEdBQUcsSUFBSSxlQUFlLENBQVUsRUFBQyxPQUFPLEVBQUUsRUFBQyxLQUFLLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUMsRUFBQyxDQUFDLENBQUM7S0ErQzNGO0lBN0NDOzs7T0FHRztJQUNLLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FDN0IsT0FBZSxFQUNmLE9BQWUsRUFDZixNQUFjLEVBQ2QsY0FBc0I7UUFFdEIsTUFBTSxjQUFjLEdBQUcsQ0FBQyxjQUFjLEdBQUcsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsR0FBRyxLQUFLLENBQUM7UUFFL0QsT0FBTztZQUNMLENBQUMsRUFBRSxPQUFPLEdBQUcsTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDO1lBQzlDLENBQUMsRUFBRSxPQUFPLEdBQUcsTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDO1NBQy9DLENBQUM7SUFDSixDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksV0FBVyxDQUFDLE9BQWUsRUFBRSxVQUFrQixFQUFFLFFBQWdCO1FBQ3RFLE1BQU0sQ0FBQyxHQUFHLE9BQU8sR0FBRyxDQUFDLENBQUM7UUFDdEIsTUFBTSxDQUFDLEdBQUcsT0FBTyxHQUFHLENBQUMsQ0FBQztRQUN0QixNQUFNLE1BQU0sR0FBRyxPQUFPLEdBQUcsR0FBRyxDQUFDO1FBQzdCLE1BQU0sS0FBSyxHQUFHLGVBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQztRQUNyRSxNQUFNLEdBQUcsR0FBRyxlQUFhLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFDckUsTUFBTSxZQUFZLEdBQUcsUUFBUSxHQUFHLFVBQVUsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO1FBQzlELElBQUksU0FBUyxHQUFHLEtBQUssQ0FBQztRQUV0QixJQUFJLFFBQVEsS0FBSyxHQUFHLElBQUksR0FBRyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxFQUFFO1lBQ3ZDLFNBQVMsR0FBRyxJQUFJLENBQUM7WUFDakIsS0FBSyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQztTQUMzQjtRQUVELE9BQU87WUFDTCxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUNyQixHQUFHLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsWUFBWSxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1NBQzlFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2QsQ0FBQztJQUVNLGtCQUFrQixDQUFDLFlBQXFCO1FBQzdDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7Q0FDRixDQUFBOztBQWhEWSxhQUFhO0lBSHpCLFVBQVUsQ0FBQztRQUNWLFVBQVUsRUFBRSxNQUFNO0tBQ25CLENBQUM7R0FDVyxhQUFhLENBZ0R6QjtTQWhEWSxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJQ2FsY3VsYXRpb25QYXJhbXN9IGZyb20gJy4uL2ludGVyZmFjZS9pY2FsY3VsYXRpb24tcGFyYW1zJztcbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0JlaGF2aW9yU3ViamVjdH0gZnJvbSAncnhqcyc7XG5pbXBvcnQge0lDaXJjbGV9IGZyb20gJy4uL2ludGVyZmFjZS9pY2lyY2xlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgQ2lyY2xlU2VydmljZSB7XG4gIHB1YmxpYyBjaXJjbGVWYWx1ZXMgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PElDaXJjbGU+KHtwZXJjZW50OiB7dmFsdWU6IDYwLCBjb2xvcjogJ2JsdWUnfX0pO1xuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gRm9yIGVhc2llciBoYW5kbGluZyBwb2xhciBjb29yZGluYXRlcyBhcmUgdXNlZCBhbmQgY29udmVydGVkIHRvIGNhcnRlc2lhbiBjb29yZGluYXRlc1xuICAgKiBAcmV0dXJucyBvYmplY3RcbiAgICovXG4gIHByaXZhdGUgc3RhdGljIHBvbGFyVG9DYXJ0ZXNpYW4oXG4gICAgY2VudGVyWDogbnVtYmVyLFxuICAgIGNlbnRlclk6IG51bWJlcixcbiAgICByYWRpdXM6IG51bWJlcixcbiAgICBhbmdsZUluRGVncmVlczogbnVtYmVyLFxuICApOiBJQ2FsY3VsYXRpb25QYXJhbXMge1xuICAgIGNvbnN0IGFuZ2xlSW5SYWRpYW5zID0gKGFuZ2xlSW5EZWdyZWVzIC0gOTApICogTWF0aC5QSSAvIDE4MC4wO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHg6IGNlbnRlclggKyByYWRpdXMgKiBNYXRoLmNvcyhhbmdsZUluUmFkaWFucyksXG4gICAgICB5OiBjZW50ZXJZICsgcmFkaXVzICogTWF0aC5zaW4oYW5nbGVJblJhZGlhbnMpLFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIFJldHVybnMgdGhlIHN0cmluZyBmb3IgdGhlIGRhdGEgYXR0cmlidXRlIGluIHRoZSBwYXRoIHRhZ1xuICAgKiBAcmV0dXJucyBzdHJpbmdcbiAgICovXG4gIHB1YmxpYyBkZXNjcmliZUFyYyhtYXhTaXplOiBudW1iZXIsIHN0YXJ0QW5nbGU6IG51bWJlciwgZW5kQW5nbGU6IG51bWJlcik6IHN0cmluZyB7XG4gICAgY29uc3QgeCA9IG1heFNpemUgLyAyO1xuICAgIGNvbnN0IHkgPSBtYXhTaXplIC8gMjtcbiAgICBjb25zdCByYWRpdXMgPSBtYXhTaXplIC8gMi4yO1xuICAgIGNvbnN0IHN0YXJ0ID0gQ2lyY2xlU2VydmljZS5wb2xhclRvQ2FydGVzaWFuKHgsIHksIHJhZGl1cywgZW5kQW5nbGUpO1xuICAgIGNvbnN0IGVuZCA9IENpcmNsZVNlcnZpY2UucG9sYXJUb0NhcnRlc2lhbih4LCB5LCByYWRpdXMsIHN0YXJ0QW5nbGUpO1xuICAgIGNvbnN0IGxhcmdlQXJjRmxhZyA9IGVuZEFuZ2xlIC0gc3RhcnRBbmdsZSA8PSAxODAgPyAnMCcgOiAnMSc7XG4gICAgbGV0IGNsb3NlUGF0aCA9IGZhbHNlO1xuXG4gICAgaWYgKGVuZEFuZ2xlID09PSAzNjAgJiYgZW5kLnggPiBzdGFydC54KSB7XG4gICAgICBjbG9zZVBhdGggPSB0cnVlO1xuICAgICAgc3RhcnQueCA9IHN0YXJ0LnggLSAwLjAwMTtcbiAgICB9XG5cbiAgICByZXR1cm4gW1xuICAgICAgJ00nLCBzdGFydC54LCBzdGFydC55LFxuICAgICAgJ0EnLCByYWRpdXMsIHJhZGl1cywgMCwgbGFyZ2VBcmNGbGFnLCAwLCBlbmQueCwgZW5kLnksIChjbG9zZVBhdGggPyAnWicgOiAnJyksXG4gICAgXS5qb2luKCcgJyk7XG4gIH1cblxuICBwdWJsaWMgdXBkYXRlQ2lyY2xlVmFsdWVzKGNpcmNsZVZhbHVlczogSUNpcmNsZSk6IHZvaWQge1xuICAgIHRoaXMuY2lyY2xlVmFsdWVzLm5leHQoY2lyY2xlVmFsdWVzKTtcbiAgfVxufVxuIl19