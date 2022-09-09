import { createRequire } from 'module'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
import { SimpleGitOptions } from 'simple-git'
import { formatters, KufaConsole } from 'kufa'

interface Commons {
	require: NodeRequire
	__filename: string
	__dirname: string
}

interface TEMPLATES_NAMES {
	[key: string]: string
}

const { __dirname } = commons()

export const TEMPLATES_REPO = 'https://github.com/VyrekXD/Templates'

export const TEMPLATES_DIR = join(__dirname, '../templates')

export const DEBUG = process.argv.includes('DEBUG=true')

export const gitOptions: Partial<SimpleGitOptions> = {
	baseDir: join(__dirname, '../templates')
}

export const Console = new KufaConsole({
	timeZone: 'America/Mexico_City',
	onlyHours: true,
	traceFun: true,
	format: false || `[§a%time%§r] [%prefix%§r] %message%`,
	log_prefix: false || `§2LOG`,
	warn_prefix: false || `§6WARN`,
	error_prefix: false || `§4ERROR`,
	depth: 2,
	parser: (ctx) => {
		ctx.str = `§4[VIBM]§r ${ctx.str}`
	},
	formatters: [formatters.chalk, formatters.colors]
})

export const TEMPLATES_NAMES: TEMPLATES_NAMES = {
	'S&PCTB-prisma.ts': 'Slash & Prefixed Commands - Prisma',
	'S&PCTB.ts': 'Slash & Prefixed Commands'
}

//Copied from https://github.com/AndreMor8/gidget/blob/master/src/utils/commons.js
export function commons(metaURL: string = import.meta.url): Commons {
	const require = createRequire(metaURL)
	const __filename = fileURLToPath(metaURL)
	const __dirname = dirname(__filename)
	return { require, __filename, __dirname }
}
