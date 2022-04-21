import { createRequire } from 'module';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
export const TEMPLATES_NAMES = {
    'S&PCTB-prisma.ts': 'Slash & Prefixed Commands - Prisma',
    'S&PCTB.ts': 'Slash & Prefixed Commands'
};
export const getTemplateKey = (templateName) => {
    const templateKey = Object.keys(TEMPLATES_NAMES).find((key) => TEMPLATES_NAMES[key] === templateName);
    return templateKey || '';
};
export const TEMPLATES_REPO = 'https://github.com/VyrekXD/Templates';
export const DEBUG = process.argv.includes('DEBUG=true');
export function commons(metaURL = import.meta.url) {
    const require = createRequire(metaURL);
    const __filename = fileURLToPath(metaURL);
    const __dirname = dirname(__filename);
    return { require, __filename, __dirname };
}
