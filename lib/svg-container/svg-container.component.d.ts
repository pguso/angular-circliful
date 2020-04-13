import { ElementRef, OnInit } from '@angular/core';
import { CircleService } from '../service/circle.service';
import { ChangeDetectorRef } from '@angular/core';
import { StyleService } from '../service/style.service';
import { ICircle } from '../interface/icircle';
export declare class SvgContainerComponent implements OnInit {
    private circleService;
    private changeDetectorRef;
    private styleService;
    svgContainer: ElementRef;
    arcData: string;
    viewBox: string;
    coordinates: {
        x: number;
        y: number;
    };
    radius: number;
    backgroundCircleColor: string;
    backgroundCircleWidth: number;
    textPosition: string;
    circleValues: ICircle;
    private size;
    constructor(circleService: CircleService, changeDetectorRef: ChangeDetectorRef, styleService: StyleService);
    ngOnInit(): void;
    updatePercent(): void;
    animateCircle(): void;
    animateCircleInView(): void;
    checkAnimation(): void;
}
