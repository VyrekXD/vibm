import prompts, { Choice } from 'prompts'

import { TEMPLATES_NAMES } from '../constants.js'
import { debug } from '../lib/debugManager.js'

export type Names =
	| 'name'
	| 'type'
	| 'token'
	| 'tokenDev'
	| 'devs'
	| 'devServer'
	| 'mongouri'

function formatTemplateNames(templateNames: Record<string, string>) {
	const choices: Choice[] = []

	for (const templateName in templateNames) {
		const v = templateNames[templateName]

		choices.push({
			title: v as string,
			value: templateName
		})
	}

	return choices
}

export async function responseModule() {
	const responses = await prompts([
		{ type: 'text', name: 'name', message: 'Name of the project' },
		{
			type: 'select',
			name: 'type',
			message: 'What type of bot are you developing?',
			choices: formatTemplateNames(TEMPLATES_NAMES)
		},
		{
			type: 'text',
			name: 'token',
			message: 'Type the bot token'
		},
		{
			type: 'text',
			name: 'tokenDev',
			message:
				'Type the bot token for development (Type NULL if you dont want to use it or just press enter)'
		},
		{
			type: 'text',
			name: 'devs',
			message: 'The ids of the developers (separated by commas)'
		},
		{
			type: 'text',
			name: 'devServer',
			message:
				'The ids of the development servers (separated by commas, press enter to skip)'
		}
	])
	debug(responses)
	if (!responses || !responses.name) throw new Error('No name provided')

	if (responses.type === 'S&PCTB-prisma.ts') {
		const mongouri = await prompts({
			type: 'text',
			name: 'mongouri',
			message: 'Type the mongouri'
		})
		debug(mongouri)
		;(responses as any).mongouri = mongouri.mongouri
	}

	return responses as prompts.Answers<Names>
}
