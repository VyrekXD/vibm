import boxen from 'boxen'
import chalk from 'chalk'
import update from 'log-update'
import { join } from 'path'

import { DEBUG, commons } from './constants.js'
import { templateModule } from './modules/template.module.js'
import { creationModule } from './modules/creation.module.js'
import { replaceModule } from './modules/replace.module.js'
import { responseModule } from './modules/response.module.js'
import { installModule } from './modules/install.module.js'

const { __dirname } = commons()
const botsPath = join(__dirname, '../../../Bots')

async function main() {
	const startBox = boxen('Vyrek Interface Bot Maker', {
		padding: 1,
		margin: 1,
		borderStyle: 'double'
	})
	console.log(startBox)

	console.log(`Getting ${chalk.red('templates')}...`)
	await templateModule()
	DEBUG
		? console.log(`Got ${chalk.red('templates')}`)
		: update(`Got ${chalk.red('templates')}`)

	const responses = await responseModule()
	const directory = join(botsPath, responses.name)
	await creationModule(responses, directory)
	await replaceModule(responses, directory)
	await installModule(directory)
}

main()
