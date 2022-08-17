import { readFileSync, writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { env } from 'node:process';

const isAlpha = env.ALPHA;
const __dirname = dirname(fileURLToPath(import.meta.url));
const distLibPath = resolve(__dirname, './dist/ng-cron');
const packagePath = resolve(distLibPath, './package.json');

const packageString = readFileSync(packagePath);
const origin = JSON.parse(packageString);

const nextVersion = isAlpha ? `${origin.version}-alpha.${Date.now()}` : origin.version;

const libPackage = JSON.stringify({
  ...origin,
  version: nextVersion
}, null, '  ');

writeFileSync(resolve(distLibPath, './package.json'), libPackage);
