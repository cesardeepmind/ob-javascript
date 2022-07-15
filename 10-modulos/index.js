import {suma, multiplica} from './controllers/controller.js';
import chalk from 'chalk';

console.log(chalk.green(multiplica(suma(1,2), suma(4,5))));
