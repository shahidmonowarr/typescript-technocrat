let emni: any;

emni = "Next Level web Development";

(emni as string).toUpperCase();
// or
(<string>emni).toUpperCase();
// but this is not recommended as it can be confused with JSX syntax.

function kgToGram(param: string | number): string | number | undefined{
    if(typeof param === "string"){
        const value = parseInt(param) * 1000;
        return `The converted value is ${value} gram`;
    }
    else if(typeof param === "number"){
        const value = param * 1000;
        return value;
    }
    else{
        return undefined;
    }
}

const resultToBeString = kgToGram("10") as string;
const resultToBeNumber = kgToGram(10) as number;

// another way to do type assertion
type CustomErrorType={
    message: string;
}

try {

}catch(err){
    console.log((err as CustomErrorType).message);
}