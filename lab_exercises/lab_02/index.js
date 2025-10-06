function getPromise(x) {
    let myPromise = new Promise((resolve, reject) => {
    resolve('Promise resolved successfully.');
    reject('Promise rejected.');
    })

    return myPromise;
}

// Promise consumption
myPromise.then((message) => {
    console.log(message);
}, (error) => {
    console.log(error);
});

myPromise
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.log('Caught an error:' + error);
    })
