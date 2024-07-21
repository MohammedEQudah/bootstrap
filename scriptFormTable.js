document.getElementById('studentForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const country = document.getElementById('country').value;
    const phoneNumber = document.getElementById('phoneNumber').value;

    // Create a new row and cells
    const table = document.getElementById('studentTable');
    const newRow = table.insertRow();

    const firstNameCell = newRow.insertCell(0);
    const lastNameCell = newRow.insertCell(1);
    const countryCell = newRow.insertCell(2);
    const phoneNumberCell = newRow.insertCell(3);

    // Insert values into cells
    firstNameCell.textContent = firstName;
    lastNameCell.textContent = lastName;
    countryCell.textContent = country;
    phoneNumberCell.textContent = phoneNumber;

    // Clear form inputs
    document.getElementById('studentForm').reset();
});
