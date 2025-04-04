import { type SvelteInspectionInput } from '../base'
import { transporter } from '../transporting/transporter'
import { tconsole } from '../transporting/transports/console'

transporter.add(tconsole)

export default function warn (msg: SvelteInspectionInput) {
    transporter.handle(msg, 'warn')
}
