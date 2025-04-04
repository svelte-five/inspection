import { SvelteInspectionTransport } from '../base'

export class TransporterBase {
    name = 'base'
    levelColorMap = {
        'debug': 'gray',
        'info': 'light-dark(blue, deepskyblue);',
        'warn': 'orange',
        'error': 'red'
    }
    out(obj: SvelteInspectionTransport) {}
}
