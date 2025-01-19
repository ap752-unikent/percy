export type Cat = {
    name: string;
    subscriptionActive: boolean;
    breed: string;
    pouchSize: string;
}

export type User = {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    cats: Cat[];
} | undefined