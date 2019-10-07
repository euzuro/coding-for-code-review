const INPUT = {
    id: 1423,
    name: "Bordeaux",
    address: {
        street: "39 Rue du Château d'Eau",
        city: "Bordeaux", country: "France", zip: "33000",
    },
    drivers: [{
        id: 3, vehicle: 'renault',
        first: 'Daniel', last: 'RICCARDO',
        seniority: 5, age: 30,
    }, {
        id: 33, vehicle: 'Honda',
        first: 'Max', last: 'VERSTAPPEN',
        seniority: 3, age: 22,
    }, {
        id: 14, vehicle: 'mercedes',
        first: 'Lewis', last: 'HAMILTON',
        seniority: 12, age: 34,
    },
    ]
};

const ORIGINAL = {
    name: "Bordeaux",
    address: "39 Rue du Château d'Eau, Bordeaux, France 33000",
    drivers: "Daniel RICCARDO, Max VERSTAPPEN, Lewis HAMILTON"
};

const FIXED = {
    name: "South Ouest",
    address: "39 Rue du Château d'Eau, Bordeaux, France 33000",
    drivers: "Lewis HAMILTON (12), Daniel RICCARDO (5), Max VERSTAPPEN (3)"
};