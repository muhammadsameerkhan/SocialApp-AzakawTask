export interface user {
    website: string;
    username: string;
    phone: string;
    name: string;
    id: number;
    email: string;
    company: company;
    address: address
}

interface company {
    bs: string;
    catchPhrase: string;
    name: string;
}

interface address {
    city: string;
    street: string;
    suite: string;
    zipcode: string;
    geo: geo
}

interface geo {
    lat: string;
    lng: string;
}