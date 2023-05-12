
interface Model <TData, TMethods> {
    data: TData;
    methods: TMethods;
}


// Properties
interface IUser {
    firstName: string;
    lastName: string;
}

// Methods
interface IMethods {
    fullName(): string;
}

// Model
type model = Model<IUser, IMethods>;

class User implements model {
    data: IUser;
    methods: IMethods;

    constructor(firstName: string, lastName: string) {
        this.data = {
            firstName,
            lastName
        };

        this.methods = {
            fullName() {
                return `${firstName} ${lastName}`;
            }
        };
    }
}

// instance
const user1 = new User("Shahid", "Monowar");
console.log(user1.methods.fullName()) // John Doe