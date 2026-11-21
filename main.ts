import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const POEM_V1 = `You hold the folded map, I hold the key.
Neither can cross the threshold on our own.
We lay the iron down against the chart,
a quiet pact where two intents agree.
The latch gives way before our single choice;
together now, we step into the open.`;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const outputDirEnv = process.env.MAKEFUN_OUTPUT_DIR;
const targetDir = outputDirEnv ? resolve(__dirname, outputDirEnv) : '/output';

mkdirSync(targetDir, { recursive: true });
const targetFile = resolve(targetDir, 'entry.txt');
writeFileSync(targetFile, POEM_V1, 'utf-8');
