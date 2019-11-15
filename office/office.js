function formatDrivers(drivers) {
    return drivers
        .map(driver => `${driver.first} ${driver.last}`)
        .join(', ');
}

// Format an office object for easy display
function formatOffice(officeJson) {
    const displayOffice = {};

    // Display name is just office name.
    displayOffice.name = officeJson.name;

    // Simple address format
    const address = officeJson.address;
    const street = address.street;
    const city = address.city;
    const country = address.country;
    const zip = address.zip;
    displayOffice.address = `${street}, ${city}, ${country} ${zip}`;

    // Simple drivers format
    displayOffice.drivers = formatDrivers(officeJson.drivers);

    return displayOffice;
};

module.exports.formatOffice = formatOffice;
