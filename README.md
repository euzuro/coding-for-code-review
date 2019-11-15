# coding-for-code-review

This is a small repo used for the talk: **Coding for Code Review**
([Slides](http://bit.ly/coding-for-code-review-slides))

## Introduction

![image](https://user-images.githubusercontent.com/793700/68904824-29922880-073f-11ea-8489-caa24a27dcf8.png)

Let's pretend we are working on the **Reporting UI** for a **Food Delivery Services**.

We have a page that displays a list of all the company's offices, together with a list of their drivers:

![image](https://user-images.githubusercontent.com/793700/68905212-ae317680-0740-11ea-990a-0a9a907dbd67.png)

Our PM has asked us to make a small modification to the way we display the drivers...

## The Function: `formatOffice()`

```javascript
const formatOffice = (officeJson) => {
    return {
        /*
           Transform 'officeJson' into
           fields optimized for display
        */
    };
};
```

## Office JSON
```javascript
const OFFICE_JSON = {
    id: 1423,
    name: "Bordeaux",
    address: {
        street: "39 Rue du Château d'Eau",
        city: "Bordeaux", country: "France", zip: "33000",
    },
    drivers: [{
        id: 3, vehicle: 'Renault',
        first: 'Daniel', last: 'RICCARDO',
        seniority: 5, age: 30,
    }, {
        id: 33, vehicle: 'Honda',
        first: 'Max', last: 'VERSTAPPEN',
        seniority: 3, age: 22,
    }, {
        id: 14, vehicle: 'Mercedes',
        first: 'Lewis', last: 'HAMILTON',
        seniority: 12, age: 34,
    },
    ]
};
```

## Output Today
```javascript
console.log(formatOffice(OFFICE_JSON));
// {
//    name: "Bordeaux",
//    address: "39 Rue du Château d'Eau, Bordeaux, France 33000",
//    drivers: "Daniel RICCARDO, Max VERSTAPPEN, Lewis HAMILTON"
// };
```

## Desired Modification

Our PM has asked us to make some modifications to the way we display
the drivers for each office.

![image](https://user-images.githubusercontent.com/793700/68929126-f75ae800-078b-11ea-8001-d566e5e7b576.png)

Specifically, she would like to:
- Display seniority for each driver
- Sort drivers by descending seniority


```javascript
console.log(formatOffice(OFFICE_JSON));
// {
//    name: "Bordeaux",
//    address: "39 Rue du Château d'Eau, Bordeaux, France 33000",
//    drivers: "Lewis HAMILTON (12), Daniel RICCARDO (5), Max VERSTAPPEN (3)"
// };
```
