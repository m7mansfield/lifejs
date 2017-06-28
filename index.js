'use strict';

const fs = require('fs');
const tick = require('./tick');

console.log('Reading input...');

var gridString = fs.readFileSync('./input.txt', {encoding: 'utf-8'}).split(/\r?\n/);
var grid = [];
for(var i = 0; i < gridString.length; i++) {
	grid.push(gridString[i].split(''));
}

console.log('Input read from input.txt');

console.log('Generating...');

var newGrid = tick(grid, grid.length - 1, grid[0].length - 1, newGrid);

console.log('Writing ouput...');

var newGridString = '';
for(var j = 0; j < newGrid.length; j++) {
	newGridString += newGrid[j].join('');
	newGridString += '\n';
}
fs.writeFileSync('./output.txt', newGridString);

console.log('Output written to output.txt \n');
console.log(newGridString);
