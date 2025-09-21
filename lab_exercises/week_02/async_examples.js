async function sayHello() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Hello, World!')
        }, 5000)
    })
}

console.log(sayHello());