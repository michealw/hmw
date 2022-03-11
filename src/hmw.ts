#!/usr/bin/env node
import { program } from 'commander';
import ow from './output';

program
    .name('hmw')
    .description('CLI tool to compare weight values to cargo airliner capacities')
    .version('hmw\r\n(C) 2022 Micheal R. Wass');

program.command('gal')
    .description('Convert gallon value')
    .argument('<number>', 'value to convert')
    .option('--mtow', 'use maximum takeoff weight instead of payload value')
    .action((val, options) => {
        const calc = val * 8.3454;
        
        if (options.mtow) {
            ow(calc, true);
        } else {
            ow(calc, false);
        }
    });

program.command('kg')
    .description('Convert kilogram value')
    .argument('<number>', 'value to convert')
    .option('--mtow', 'use maximum takeoff weight instead of payload value')
    .action((val, options) => {
        const calc = val * 2.205;
        
        if (options.mtow) {
            ow(calc, true);
        } else {
            ow(calc, false);
        }
    });

program.command('lb')
    .description('Convert pound value')
    .argument('<number>', 'value to convert')
    .option('--mtow', 'use maximum takeoff weight instead of payload value')
    .action((val, options) => {
        if (options.mtow) {
            ow(val, true);
        } else {
            ow(val, false);
        }
    });

program.command('oz')
    .description('Convert ounce value')
    .argument('<number>', 'value to convert')
    .option('--mtow', 'use maximum takeoff weight instead of payload value')
    .action((val, options) => {
        const calc = val / 16;
        
        if (options.mtow) {
            ow(calc, true);
        } else {
            ow(calc, false);
        }
    });

program.command('ton')
    .description('Convert ton value')
    .argument('<number>', 'value to convert')
    .option('--mtow', 'use maximum takeoff weight instead of payload value')
    .action((val, options) => {
        const calc = val * 2000;
        
        if (options.mtow) {
            ow(calc, true);
        } else {
            ow(calc, false);
        }
    });

program.parse();