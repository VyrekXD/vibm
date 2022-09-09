import { exec } from 'child_process'
import { debug } from 'console'
import { promisify } from 'util'

const shell = promisify(exec)

export async function installModule(path: string) {
	try {
		const command = `cd ${path} && pnpm i`
		const { stderr, stdout } = await shell(command)

		if (!stderr && !stdout) throw new Error('No output')
		if (stderr) throw new Error(stderr)

		debug(stdout)
	} catch (e) {
		throw e
	}
}
