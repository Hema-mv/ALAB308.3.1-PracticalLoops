// Input CSV data as a string
const csvData = `ID,Name,Occupation,Age
42,Bruce,Knight,41
57,Bob,Fry Cook,19
63,Blaine,Quiz Master,58
98,Bill,Doctor’s Assistant,26`;

// Initialize an empty array to hold the data
const data = [];

// Initialize variables to keep track of the current row and column
let row = [];
let cell = '';
let inQuotes = false;

// Loop through each character in the CSV data
for (let i = 0; i < csvData.length; i++) {
    const char = csvData[i];

    if (char === '"') {
        inQuotes = !inQuotes; // Toggle the inQuotes flag
    } else if (char === ',' && !inQuotes) {
        row.push(cell); // Add the cell to the current row
        cell = ''; // Reset the cell
    } else if (char === '\n' && !inQuotes) {
        row.push(cell); // Add the last cell to the current row
        data.push(row); // Add the row to the data array
        row = []; // Reset the row
        cell = ''; // Reset the cell
    } else {
        cell += char; // Add the character to the current cell
    }
}

// Add the last row to the data array (if any)
if (row.length > 0) {
    row.push(cell);
    data.push(row);
}

// Example of accessing the data
console.log(data);
