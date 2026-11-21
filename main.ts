import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const POEM = `You hold the creased map; I hold the iron key.
Neither can cross the threshold on our own.
We press the notched teeth to the charted road:
two separate wills deciding on one door.
The tumbler drops. The lock gives up its hold,
and in that single choice, we step as two.`;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const outputDirEnv = process.env.MAKEFUN_OUTPUT_DIR;
const targetDir = outputDirEnv ? resolve(__dirname, outputDirEnv) : '/output';

mkdirSync(targetDir, { recursive: true });
const targetFile = resolve(targetDir, 'entry.txt');
writeFileSync(targetFile, POEM, 'utf-8');
