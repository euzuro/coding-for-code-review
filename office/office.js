// Format driver for easy display
function formatDriver(driver) {
    return `${driver.first} ${driver.last}`;
}

// Format drivers for easy display
function formatDrivers(drivers) {
    return drivers
        .map(formatDriver)
        .join(', ');
}

// Format an office object for easy display
function formatOffice(officeJson) {
    const displayOffice = {};

    // Display name is just office name.
    displayOffice.name = officeJson.name;

    // Simple address foormat
    const address = officeJson.address;
    const street = address.street;
    const city = address.city;
    const country = address.country;
    const zip = address.zip;
    displayOffice.address = `${street}, ${city}, ${country} ${zip}`;

    // Display drivers in a list
    displayOffice.drivers = formatDrivers(officeJson.drivers);

    return displayOffice;
};

module.exports.formatOffice = formatOffice;
