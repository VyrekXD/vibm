import { createRequire } from 'module'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

interface Commons {
	require: NodeRequire
	__filename: string
	__dirname: string
}

interface TEMPLATES_NAMES {
	[key: string]: string
}

export const TEMPLATES_NAMES: TEMPLATES_NAMES = {
	'S&PCTB-prisma.ts': 'Slash & Prefixed Commands - Prisma',
	'S&PCTB.ts': 'Slash & Prefixed Commands'
}

export const getTemplateKey = (templateName: string): string => {
	const templateKey = Object.keys(TEMPLATES_NAMES).find(
		(key) => TEMPLATES_NAMES[key] === templateName
	)
	return templateKey || ''
}

export const TEMPLATES_REPO = 'https://github.com/VyrekXD/Templates'

export const DEBUG = process.argv.includes('DEBUG=true')

//Copied from https://github.com/AndreMor8/gidget/blob/master/src/utils/commons.js
export function commons(metaURL: string = import.meta.url): Commons {
	const require = createRequire(metaURL)
	const __filename = fileURLToPath(metaURL)
	const __dirname = dirname(__filename)
	return { require, __filename, __dirname }
}
