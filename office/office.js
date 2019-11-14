// Format an office object for easy display
function formatOffice(officeJson) {
    const displayOffice = {};

    // Display name is just ooffice name.
    displayOffice.name = officeJson.name;

    // Simple address format
    const address = officeJson.address;
    const street = address.street;
    const city = address.city;
    const country = address.country;
    const zip = address.zip;
    displayOffice.address = `${street}, ${city}, ${country} ${zip}`;

    displayOffice.drivers =
        officeJson.drivers
            .map(driver => `${driver.first} ${driver.last}`)
            .join(', ');

    return displayOffice;
};

module.exports.formatOffice = formatOffice;
