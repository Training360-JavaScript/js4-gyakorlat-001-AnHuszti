'use strict';

function sorterPromise(array) {
    const sorter = new Promise((resolve, reject) => {
        if (array.every(el => typeof el === "string")) {    
            resolve(array.sort());
        } else {
            reject('Error: Not all elements are string type!');
    };
});  return sorter
}


export default sorterPromise;
