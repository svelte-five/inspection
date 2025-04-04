import { isActive, empty, type SvelteInspectionInput } from './base'
import { default as _debug } from './methods/debug'
import { default as _info } from './methods/info'
import { default as _warn } from './methods/warn'
import { default as _error } from './methods/error'

/*@__NO_SIDE_EFFECTS__*/
export function info(msg: SvelteInspectionInput) {
    return isActive ? _info(msg) : empty(msg)
}
/*@__NO_SIDE_EFFECTS__*/
export function debug(msg: SvelteInspectionInput) {
    return isActive ? _debug(msg) : empty(msg)
}
/*@__NO_SIDE_EFFECTS__*/
export function warn(msg: SvelteInspectionInput) {
    return isActive ? _warn(msg) : empty(msg)
}
/*@__NO_SIDE_EFFECTS__*/
export function error(msg: SvelteInspectionInput) {
    return isActive ? _error(msg) : empty(msg)
}
