import { BLACK } from "./consts";

export const getRowCount = table => table.length;
export const getColCount = table => table[0] && table[0].length || 0;

export const getHorizontalDefinitions = (table) => {
    const rowCount = getRowCount(table);
    const colCount = getColCount(table);
    const definitions = [];
    for (let rowIdx = 0; rowIdx < rowCount; rowIdx++) {
        definitions[rowIdx] = [];
        let num = 0;
        for (let colIdx = 0; colIdx < colCount; colIdx++) {
            if (table[rowIdx][colIdx] === BLACK) {
                num++;
            } else if (num > 0) {
                definitions[rowIdx].push(num);
                num = 0;
            }
        }
        if (num > 0) {
            definitions[rowIdx].push(num);
        }
    }
    return definitions;
};

export const getVerticalDefinitions = (table) => {
    const rowCount = getRowCount(table);
    const colCount = getColCount(table);
    const definitions = [];
    for (let colIdx = 0; colIdx < colCount; colIdx++) {
        definitions[colIdx] = [];
        let num = 0;
        for (let rowIdx = 0; rowIdx < rowCount; rowIdx++) {
            if (table[rowIdx][colIdx] === BLACK) {
                num++;
            } else if (num > 0) {
                definitions[colIdx].push(num);
                num = 0;
            }
        }
        if (num > 0) {
            definitions[colIdx].push(num);
        }
    }
    return definitions;
};

export const getNewTable = (newRowCount, newColCount, originalTable) => {
    const newTable = [];
    for (let rowIdx = 0; rowIdx < newRowCount; rowIdx++) {
        newTable[rowIdx] = [];
        for (let colIdx = 0; colIdx < newColCount; colIdx++) {
            const originalCellValue = originalTable[rowIdx] && originalTable[rowIdx][colIdx];
            newTable[rowIdx][colIdx] = originalCellValue || null;
        }
    }
    return newTable;
}

export const checkValidity = (userProvided, definition) => {
    if (userProvided.length === definition.length && userProvided.every((num, numIdx) => num === definition[numIdx])) {
        return true;
    } else if (userProvided.reduce((sum, num) => sum + num, 0) > definition.reduce((sum, num) => sum + num, 0)) { // TODO
        return false
    } else {
        return null;
    }
}