import { MbscFrameBase, ElementRef, NgZone, NgControl, EventEmitter, MbscInputService, MbscOptionsService } from './frameworks/angular';
import { Color, MbscColorOptions } from './classes/color';
export { MbscColorOptions };
export declare class MbscColor extends MbscFrameBase {
    optionService: MbscOptionsService;
    _instance: Color;
    clear: boolean;
    data: Array<string | {
        color: string;
    }>;
    defaultValue: string;
    enhance: boolean;
    format: 'hex' | 'rgb' | 'hsl';
    inputClass: string;
    mode: 'preset' | 'refine';
    navigation: 'horizontal' | 'vertical';
    preview: boolean;
    previewText: boolean;
    rows: number;
    valueText: string;
    select: 'single' | 'multiple' | number;
    onSet: EventEmitter<{
        valueText: string;
        inst: any;
    }>;
    onClear: EventEmitter<{
        inst: any;
    }>;
    inlineOptions(): MbscColorOptions;
    inlineEvents(): MbscColorOptions;
    options: MbscColorOptions;
    value: any;
    onChangeEmitter: EventEmitter<any>;
    constructor(initialElem: ElementRef, zone: NgZone, control: NgControl, inputService: MbscInputService, optionService: MbscOptionsService);
    refreshData(newData: any): void;
    ngAfterViewInit(): void;
    isMulti: boolean;
    setNewValue(v: any): void;
    ngOnInit(): void;
}
export declare class MbscColorComponent extends MbscColor {
    inputIcon: string;
    iconAlign: 'left' | 'right';
    name: string;
    error: boolean;
    errorMessage: string;
    options: MbscColorOptions;
    placeholder: string;
    data: Array<string | {
        color: string;
    }>;
    enhance: boolean;
    constructor(initialElem: ElementRef, zone: NgZone, control: NgControl, inputService: MbscInputService, optionService: MbscOptionsService);
    ngAfterViewInit(): void;
}
