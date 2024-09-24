// Get the current year
const currentYear = new Date().getFullYear();

// Output the current year
document.getElementById("currentyear").textContent = currentYear; // Ensure this ID matches

// Get last modified date of doc
const lastModifiedDate = document.lastModified;

// Output last modified date
document.getElementById("lastModified").textContent = `Last Modification: ${lastModifiedDate}`;