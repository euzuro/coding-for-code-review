function formatDrivers(drivers) {
    return drivers
        .sort(sortDriver)
        .map(driver => `${driver.first} ${driver.last} (${driver.seniority})`)
        .join(', ');
}

function sortDriver(d1, d2) {
    return d2.seniority - d1.seniority;
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
