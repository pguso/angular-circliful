import { BehaviorSubject } from 'rxjs';
import { ICircle } from '../interface/icircle';
export declare class CircleService {
    circleValues: BehaviorSubject<ICircle>;
    /**
     * @description For easier handling polar coordinates are used and converted to cartesian coordinates
     * @returns object
     */
    private static polarToCartesian;
    /**
     * @description Returns the string for the data attribute in the path tag
     * @returns string
     */
    describeArc(maxSize: number, startAngle: number, endAngle: number): string;
    updateCircleValues(circleValues: ICircle): void;
}
