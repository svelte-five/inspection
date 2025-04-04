export type SvelteInspectionInput = {
    msg: string;
    [prop: string]: string | number | boolean | Error;
} | string | Error;
type log = (msg: SvelteInspectionInput) => void;

export declare const info: log;
export declare const debug: log;
export declare const warn: log;
export declare const error: log;
