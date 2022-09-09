import prompts from 'prompts'
import fs from 'fs/promises'
import { join } from 'path'

import { debug } from '../lib/debugManager.js'
import { commons } from '../constants.js'
import { Names } from './response.module.js'

const { __dirname } = commons()
const botsPath = join(__dirname, '../../../Bots')

export async function creationModule(
	responses: prompts.Answers<Names>,
	directory: string
) {
	const { name, type } = responses
	const directoryStat = await fs.stat(directory).catch(() => null)
	if (!directoryStat) {
		debug('Bot directory doesnt exist, creating it')
		await fs.mkdir(join(botsPath, name))
		debug('Bot directory created')
	}

	const templatePath = join(__dirname, '../templates', type)
	debug(templatePath)
	await fs.cp(templatePath, directory, {
		recursive: true
	})
	debug('Copied template files')
}
