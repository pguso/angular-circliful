import { IPercent } from './ipercent';
import { IGradient } from './igradient';
import { IProgressColor } from './iprogress-color';
import { IBackgroundCircle } from './ibackground-circle';
import { Icon } from './icon';
import { IText } from './itext';
import { IPoint } from './ipoint';
import { IElements } from './ielements';
export interface ICircle {
    percent: IPercent;
    color?: string;
    gradient?: IGradient;
    strokeWidth?: number;
    strokeLinecap?: string;
    angle?: {
        start: number;
        end: number;
    };
    progressColors?: IProgressColor[];
    animate?: boolean;
    animateInView?: boolean;
    backgroundCircle?: IBackgroundCircle;
    icon?: Icon;
    text?: IText;
    point?: IPoint;
    customClasses?: IElements;
    width?: string;
    height?: string;
}
