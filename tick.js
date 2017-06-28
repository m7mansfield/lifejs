'use strict';

const _ = require('lodash');

module.exports = function(grid, yBound, xBound) {
	var newGrid = _.cloneDeep(grid);
	for(var y = 0; y <= yBound; y++) {
		for(var x = 0; x <= xBound; x++) {
			var neighbours = 0;
			if(y > 0) {
				if(grid[y-1][x] === '0') {
					neighbours++;
				}
			}
			if(y < yBound) {
				if(grid[y+1][x] === '0') {
					neighbours++;
				}
			}
			if(x > 0) {
				if(grid[y][x-1] === '0') {
					neighbours++;
				}
			}
			if(x < xBound) {
				if(grid[y][x+1] === '0') {
					neighbours++;
				}
			}
			if((x > 0) && (y > 0)) {
				if(grid[y-1][x-1] === '0') {
					neighbours++;
				}
			}
			if((x < xBound) && (y < yBound)) {
				if(grid[y+1][x+1] === '0') {
					neighbours++;
				}
			}
			if((x < xBound) && (y > 0)) {
				if(grid[y-1][x+1] === '0') {
					neighbours++;
				}
			}
			if((x > 0) && (y < yBound)) {
				if(grid[y+1][x-1] === '0') {
					neighbours++;
				}
			}
			if(grid[y][x] === '0' && (neighbours === 2 || neighbours === 3)) {
				newGrid[y][x] = '0';
			} else {
				newGrid[y][x] = '.';
			}
			if(grid[y][x] === '.' && neighbours === 3) {
				newGrid[y][x] = '0';
			}
		}
	}
	return newGrid;
}
