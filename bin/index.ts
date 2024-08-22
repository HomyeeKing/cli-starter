#!/usr/bin/env node
import cac from 'cac';
import path from 'path';
import { checkUpdate } from 'check-cli-update';
import { version } from '../package.json';

const cli = cac('cli-starter-template');
const moduleURL = new URL(import.meta.url);
const __dirname = path.dirname(moduleURL.pathname);
checkUpdate({
  cwd: __dirname,
});

cli.help();
cli.version(version);
cli.parse();
