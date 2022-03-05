import chalk from 'chalk';
import Table from 'cli-table';
import wv from './weights';

export default function outputWeights(value: number, mtowMode: boolean) {
    let table = new Table({
        head: ['Type', 'Payload Weight', 'Calculation']
    });

    if (mtowMode) {
        table = new Table({
            head: ['Type', 'Max Takeoff Weight', 'Calculation']
        });
    }

    console.log('Weight value: ' + chalk.greenBright(Intl.NumberFormat('en-US').format(value)) + ' pounds');

    for (const val of wv.entries()) {
        const type = val[0];
        const weights = val[1];
        const pw = weights[0];
        const mtow = weights[1];
    
        if (mtowMode) {
            const calc = value / mtow;
            let display = '';

            if (calc > 1.0) {
                display = chalk.yellow(calc.toFixed(2));
            } else {
                display = calc.toFixed(2);
            }

            table.push([type, Intl.NumberFormat('en-US').format(mtow), display]);
        } else {
            const calc = value / pw;
            let display = '';

            if (calc > 1.0) {
                display = chalk.yellow(calc.toFixed(2));
            } else {
                display = calc.toFixed(2);
            }

            table.push([type, Intl.NumberFormat('en-US').format(pw), display]);
        }
    }

    console.log(table.toString());
}