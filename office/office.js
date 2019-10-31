// Format an office object for easy display
function formatOffice(office) {
    const displayOffice = {};

    // Display name is just ooffice name.
    displayOffice.name = office.name;

    // Simple address format
    const address = office.address;
    const street = address.street;
    const city = address.city;
    const country = address.country;
    const zip = address.zip;
    displayOffice.address = `${street}, ${city}, ${country} ${zip}`;

    displayOffice.drivers =
        office.drivers
            .map(driver => `${driver.first} ${driver.last}`)
            .join(', ');

    return displayOffice;
};

module.exports.formatOffice = formatOffice;
