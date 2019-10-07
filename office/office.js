// Format an office object for easy display
function formatOffice(office) {
    const displayOffice = {};
    displayOffice.name = office.name;

    const street = office.address.street;
    const city = office.address.city;
    const country = office.address.country;
    const zip = office.address.zip;

    // Simple address foomat
    displayOffice.address = `${street}, ${city}, ${country} ${zip}`;

    displayOffice.drivers =
        office.drivers
            .map(d => `${d.first} ${d.last}`)
            .join(', ');

    return displayOffice;
};

module.exports.formatOffice = formatOffice;
