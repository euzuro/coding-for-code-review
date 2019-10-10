# Office

This package contains helper methods for dealing with Office objects.

## Office JSON
An Office object in raw JSON looks something like:

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

## Helpers

### Function: `formatOffice()`

`formatOffice()` takes as input an Office object in raw json format (see above)
and translates it into a new object with only the fields necessary for the
display in the report admin.

Usage:
```javascript
const officeDisplay = formatOffice(officeJson);
```

Notes:
- The `address` object is de-structured into a single string.
- The `drivers` array is sorted by seniority and then mapped into a single,
  comma-delimited string.
