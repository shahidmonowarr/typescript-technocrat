// nullable type
const searchName = (value: string | null) => {
    if (value === null){
        console.log("Nothing to search");
    } else {
        console.log("searching...");
    }
};

searchName(null);

// unknown type
// km^-1 to ms^-1
const getMyCarSpeed = (speed: unknown) => {
    if (typeof speed === "number"){
        const convertedCarSpeed = speed * 1000 / 3600;
        console.log(`Your car speed is ${convertedCarSpeed} ms^-1`);
    }
    if(typeof speed === "string"){
        const [value, unit] = speed.split(" ");
        const convertedCarSpeed = (parseFloat(value) * 1000) / 3600;
        console.log(`Your car speed is ${convertedCarSpeed} ms^-1`);
    }
    else {
        console.log("Type is not supported");
    }
}

getMyCarSpeed(100);
getMyCarSpeed("100 kmh^-1");
getMyCarSpeed(true);

// never type

function throwError(message: string): never {
    throw new Error(message);
}
throwError("Something went wrong, please try again later");