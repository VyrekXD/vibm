import prompts from 'prompts'
import fs from 'fs/promises'
import { join } from 'path'

import { Names } from './response.module.js'
import { debug } from '../lib/debugManager.js'

export async function replaceModule(
	responses: prompts.Answers<Names>,
	path: string
) {
	fs.unlink(join(path, '.env.example'))
	debug('Removed .env.example')

	let env = `TOKEN=${responses.token}\nDEVS=${responses.devs}`

	if (responses.tokenDev) {
		env += `\nTOKEN_DEV=${responses.tokenDev}`
	}
	if (responses.devServer) {
		env += `\nDEV_SERVERS=${responses.devServer}`
	}
	if (responses.mongouri) {
		env += `\nMONGO_URI=${responses.mongouri}`
	}

	await replaceInFiles(/template/gim, responses.name, path)

	fs.writeFile(join(path, '.env'), env)
	debug('Created .env file')
}

export async function replaceInFiles(
	search: RegExp,
	replaceWith: string,
	path: string
) {
	const files = await fs.readdir(path)

	for (const file of files) {
		const filePath = join(path, file)
		const fileStat = await fs.stat(filePath)

		if (fileStat.isDirectory()) {
			await replaceInFiles(search, replaceWith, filePath)
		} else {
			const content = await fs.readFile(filePath)
			const newContent = content.toString().replace(search, replaceWith)
			await fs.writeFile(filePath, newContent)
		}
	}
}
