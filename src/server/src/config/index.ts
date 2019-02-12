import * as dotenv from 'dotenv';
import * as fs from 'fs';
import * as path from 'path';

const config = dotenv.parse(fs.readFileSync(path.resolve(__dirname, '..', '..', '.env')));

export default config;
