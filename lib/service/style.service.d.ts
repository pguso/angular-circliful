import { ICalculationParams } from '../interface/icalculation-params';
import { IProgressColor } from '../interface/iprogress-color';
import { CircleService } from './circle.service';
export declare class StyleService {
    private circleService;
    constructor(circleService: CircleService);
    private static getMilliseconds;
    private static setAttributes;
    private static removeAttribute;
    /**
     * @description Redraws the arc (circle) border
     */
    animateArc(params: {
        arc: Element;
        arcParams: ICalculationParams;
        maxSize: number;
        progressColors?: IProgressColor[];
    }): void;
    /**
     * @description If options.progressColors is set, colors are changed on given percentages
     */
    updateCircleColor(actualCount: number, arc: Element, progressColors: IProgressColor[]): void;
    isElementInViewport(circleContainer: HTMLElement): boolean;
}
