import chalk from 'chalk';
import Table from 'cli-table';
import wv from './weights';

export default function outputWeights(value: number, mtowMode: boolean) {
    function calculateAndDisplayValue(val: number, weight: number): string {
        const calc = val / weight;
        let display = '';
    
        if (calc > 1.0) {
            display = chalk.yellow(calc.toFixed(2));
        } else {
            display = calc.toFixed(2);
        }
    
        return display;
    }

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
            table.push([type, Intl.NumberFormat('en-US').format(mtow), calculateAndDisplayValue(value, mtow)]);
        } else {
            table.push([type, Intl.NumberFormat('en-US').format(pw), calculateAndDisplayValue(value, pw)]);
        }
    }

    console.log(table.toString());
}