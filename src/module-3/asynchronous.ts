// fetching data from API using fetch async await
// JSON place holder

interface ITodo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

const getTodo = async(): Promise<ITodo> =>{
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    return await response.json()
}

const getTodoData = async(): Promise<void>=>{
    const result = await getTodo();
    console.log(result);
}

getTodoData();

// Mocking
const makePromise = (): Promise<string> =>{
   return new Promise<string>((resolve, reject) =>{
        const data: string = "Data is fetched";
        if(data){
            resolve(data);
        }else{
            reject("Failed to fetch");
        }
    });
};

const makePromiseBoolean = (): Promise<boolean> =>{
   return new Promise<boolean>((resolve, reject) =>{
        const data: boolean = true;
        if(data){
            resolve(data);
        }else{
            reject("Failed to fetch");
        }
    });
};

interface ObjectInterface {
    other: string;
}

const makePromiseObject = (): Promise<ObjectInterface> =>{
   return new Promise<ObjectInterface>((resolve, reject) =>{
        const data: ObjectInterface = {other: "Data is fetched"};
        if(data){
            resolve(data);
        }else{
            reject("Failed to fetch");
        }
    });
};

const getPromiseData = async (): Promise<string> =>{
    const data = await makePromise();
    return data;
};

const getPromiseDataBoolean = async (): Promise<boolean> =>{
    const data = await makePromiseBoolean();
    return data;
};

const getPromiseDataObject = async (): Promise<object> =>{
    const data = await makePromiseObject();
    return data;
};

