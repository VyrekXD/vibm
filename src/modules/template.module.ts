import fs from 'fs/promises'
import simpleGit, { SimpleGit } from 'simple-git'

import {
	gitOptions,
	TEMPLATES_DIR,
	TEMPLATES_NAMES,
	TEMPLATES_REPO
} from '../constants.js'
import { debug } from '../lib/debugManager.js'

export async function templateModule() {
	const dir = await fs.stat(TEMPLATES_DIR).catch(() => null)
	if (!dir) {
		debug('Template Dir doesnt exist creating it')
		await fs.mkdir(TEMPLATES_DIR)
		debug('Template Dir created')
	}

	const git: SimpleGit = simpleGit(gitOptions)
	const insides = await fs.readdir(TEMPLATES_DIR, { withFileTypes: true })

	if (
		insides.filter((x) => x.isDirectory()).length - 1 !==
		Object.entries(TEMPLATES_NAMES).length
	) {
		debug('Template Dir is empty, cloning repo')
		await git.clone(TEMPLATES_REPO, TEMPLATES_DIR)
		debug('Repo cloned')
	} else {
		debug('Template Dir is not empty')
		await git.pull()
		debug('Repo pulled')
	}
}
