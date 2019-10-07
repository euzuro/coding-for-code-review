
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
function formatOffice(office) {
    const displayOffice = {};
    displayOffice.name = office.name;

    const street = office.address.street;
    const city = office.address.city;
    const country = office.address.country;
    const zip = office.address.zip;

    // Simple address foomat
    displayOffice.address = `${street}, ${city}, ${country} ${zip}`;

    displayOffice.drivers = formatDrivers(office.drivers);

    return displayOffice;
};

module.exports.formatOffice = formatOffice;
