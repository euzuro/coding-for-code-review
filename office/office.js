// Format driver for easy display
function formatDriver(driver) {
    return `${driver.first} ${driver.last}`;
}

// I love you javascript
function sortDriver(d1, d2) {
    return d2.seniority - d1.seniority;
}

// Format drivers for easy display
function formatDrivers(drivers) {
    return drivers
        .sort(sortDriver)
        .map(formatDriver)
        .join(', ');
}

// Format an office object for easy display
function formatOffice(office) {
    const displayOffice = {};

    // Display name is just office name.
    displayOffice.name = office.name;

    // Simple address format
    const address = office.address;
    const street = address.street;
    const city = address.city;
    const country = address.country;
    const zip = address.zip;
    displayOffice.address = `${street}, ${city}, ${country} ${zip}`;

    // Simple drivers format
    displayOffice.drivers = formatDrivers(office.drivers);

    return displayOffice;
};

module.exports.formatOffice = formatOffice;
