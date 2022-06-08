import { load } from 'js-yaml/index.js'
import { readFileSync } from 'fs'

const config = load(readFileSync('settings.yaml', 'utf8'))

console.log(config);
