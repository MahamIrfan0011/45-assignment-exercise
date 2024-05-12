//creating a function 

function makeShirt(size: string = "Large", message: string = "I love Typescript"){

    console.log(`You selected ${size} shirt with a message ${message} on it.`)

}

//calling a function with default message and value
makeShirt()

//calling a function with medium size with default message
makeShirt("Medium") 

//calling a function with small size with different value
makeShirt("Small", "I love Javascript")