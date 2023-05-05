
type a1 = null

type a3 = undefined

type a4 = number;

type a2 = a1 extends string ? string : null;
// nested conditional type

type d = a1 extends null 
    ? null 
    : a3 extends number 
    ? number 
    : a4 extends null 
    ? null 
    : never


// example 2

type Sheikh = {
    wife1: string;
    wife2: string;
}

type A = keyof Sheikh;
type checkProperty<T, K> = K extends keyof Sheikh ? true : false;

type checkWife2 = checkProperty<Sheikh, "girlfriend">;

// matha kharap example

type Bandhubi = "Marry" | "Tina" | "Rina" | "Mina";

type RemoveBandhubi<T, K> = T extends K ? never : T;

type CurrentBandhubi = RemoveBandhubi<Bandhubi, "Marry">;