import { OnChanges } from '@angular/core';
import { IGradient } from './interface/igradient';
import { IElements } from './interface/ielements';
import { IPercent } from './interface/ipercent';
import { IBackgroundCircle } from './interface/ibackground-circle';
import { IText } from './interface/itext';
import { Icon } from './interface/icon';
import { IPoint } from './interface/ipoint';
import { IProgressColor } from './interface/iprogress-color';
import { CircleService } from './service/circle.service';
export declare class AngularCirclifulComponent implements OnChanges {
    private circleService;
    percent: IPercent;
    color: string;
    gradient: IGradient;
    strokeWidth: number;
    strokeLinecap: string;
    progressColors: IProgressColor[];
    animate: boolean;
    animateInView: boolean;
    angle: {
        start: number;
        end: number;
    };
    backgroundCircle: IBackgroundCircle;
    icon: Icon;
    text: IText;
    point: IPoint;
    customClasses: IElements;
    constructor(circleService: CircleService);
    ngOnChanges(): void;
}
