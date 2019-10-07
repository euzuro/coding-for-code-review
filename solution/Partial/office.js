// Format drivers for display
function formatDrivers(drivers) {
    return drivers
        .map(driver => `${driver.first} ${driver.last}`)
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

    // Simple address format
    displayOffice.address = `${street}, ${city}, ${country} ${zip}`;

    displayOffice.drivers = formatDrivers(office.drivers);

    return displayOffice;
};

module.exports.formatOffice = formatOffice;
