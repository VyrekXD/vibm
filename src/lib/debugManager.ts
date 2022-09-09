import { Console, DEBUG } from '../constants.js'

export function debug(log: any) {
	if (!DEBUG) return

	Console.debug(log)
}
