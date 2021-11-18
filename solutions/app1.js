'use strict';

function converterPromise(array) {
    const converter = new Promise((resolve, reject) => {
        if (array.every(el => typeof el === "string")) {    
            resolve(array.map(el => el.toUpperCase()));
        } else {
            reject('Error: Not all elements are string type!');
        }
    }); return converter
};

export default converterPromise;