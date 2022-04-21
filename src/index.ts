import boxen from 'boxen'
import chalk from 'chalk'
import update from 'log-update'

import { DEBUG } from './constants.js'
import { debug } from './lib/debug.js'
import { getTemplates } from './lib/getTemplates.js'
import { makePrompts } from './lib/makePrompts.js'

async function main() {
	const startBox = boxen('Vyrek Interface Bot Maker', {
		padding: 1,
		margin: 1,
		borderStyle: 'double'
	})

	console.log(startBox)

	console.log(`Getting ${chalk.red('templates')}...`)
	await getTemplates().then((r) => (DEBUG ? debug(r) : null))
	DEBUG
		? console.log(`Got ${chalk.red('templates')}`)
		: update(`Got ${chalk.red('templates')}`)

	await makePrompts()
}

main()
