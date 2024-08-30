export function longestWord(str) {
    let newList = str.split(' ');
    var longstr = " ";
    var len = 0;
    
    for(let item of newList) {
        if(item.length >= len) {
            len = item.length;
            longstr = item;
        }
    }
    return longstr;
}

export function shortestWord(str) {
    let newList = str.split(' ');
    let shortstr = newList[0];
    for (let item of newList) {
        if (item.length !== 0 && item.length <= shortstr.length){
            shortstr = item;
        }
    }
    return shortstr;
}

export function wordLengths(str){
    let newList = str.split(' ');
    let count = 0;
    for (let item of newList) {
        count += item.length;
    }
    return count;
}
