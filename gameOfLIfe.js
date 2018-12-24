const assert = require('assert');

const isLeftTopOf = function (x, y) {
    return (x <= this.x) && (y <= this.y);
}

const isRightBottomOf = function (x, y) {
    return (x >= this.x) && (y >= this.y);
}

const isSamePoint = function (x, y) {
    return (this.x == x) && (this.y == y);
}

const zipList = function (list1, list2) {
    let zippedlist = [];
    list1.map(element1 => (
        list2.map(element2 => (
            zippedlist.push({ x: element1, y: element2 }))
        ))
    );
    return zippedlist;
}

const getNeighbourhood = (num) => [num - 1, num, num + 1];

const getNeighbours = function () {
    let neighbours = zipList(
        getNeighbourhood(this.x),
        getNeighbourhood(this.y)
    );
    return neighbours;
}

const isAlive = function (currentGen) {
    return currentGen.some(element =>
        (element[0] == this.x) && (element[1] == this.y)
    );
}

const getLiveNeighbours = function (currentGen) {
    let allNeighbours = this.getNeighbours();
    let liveNeighbours = allNeighbours.filter(neighbour => currentGen.some(
            liveCell => (neighbour.x == liveCell[0] && neighbour.y == liveCell[1])
        ));
    return liveNeighbours;
}

const getLiveNeighboursNo = function (currentGen) {
    return this.getLiveNeighbours(currentGen).length;
}

const willAlive = function (currentGen) {
    let liveNeighboursNo = this.getLiveNeighboursNo(currentGen);
    return liveNeighboursNo === 3;
}

const createPoint = function (x, y) {
    let point = { x, y };
    point.getNeighbours = getNeighbours.bind(point);
    point.isLeftTopOf = isLeftTopOf.bind(point);
    point.isRightBottomOf = isRightBottomOf.bind(point);
    point.isSamePoint = isSamePoint.bind(point);
    point.getLiveNeighbours = getLiveNeighbours.bind(point);
    point.getLiveNeighboursNo = getLiveNeighboursNo.bind(point);
    point.isAlive = isAlive.bind(point);
    point.willAlive = willAlive.bind(point);
    return point;
}

module.exports = {
    createPoint
}