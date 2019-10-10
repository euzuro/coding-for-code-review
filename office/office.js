// Format driver for display
function formatDriver(driver) {
    return `${driver.first} ${driver.last}`;
}

// Format drivers for display
function formatDrivers(drivers) {
    return drivers
        .map(formatDriver)
        .join(', ');
}

// Format an office object for easy display
function formatOffice(office) {
    const displayOffice = {};

    // Display name is just office name.
    displayOffice.name = office.name;

    // Simple address foomat
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
