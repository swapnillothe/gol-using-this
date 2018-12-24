const Table = require('cli-table');

const table = new Table({
});

table.push(
[1,2,3],
[4,5,6]
);
table.push([7,8,9])
console.log(table.toString());