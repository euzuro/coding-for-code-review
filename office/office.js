// Format driver for easy display
function formatDriver(driver) {
    return `${driver.first} ${driver.last} (${driver.seniority})`
}

const sortDriver = (d1, d2) => {
    return d2.seniority - d1.seniority;
}

// Format drivers for easy display
function formatDrivers(drivers) {
    return drivers
        .sort(sortDriver)
        .map(formatDriver)
        .join(', ');
}

// Format an office objet for easy display
function formatOffice(office) {
    const displayOffice = {};
    displayOffice.name = office.name;

    const street = office.address.street;
    const city = office.address.city;
    const country = office.address.country;
    const zip = office.address.zip;

    // Simple adresse format
    displayOffice.address = `${street}, ${city}, ${country} ${zip}`;

    displayOffice.drivers = formatDrivers(office.drivers);

    return displayOffice;
};

module.exports.formatOffice = formatOffice;
