

 // JavaScript to handle page transitions
 document.getElementById('start-button').addEventListener('click', function() {
    document.getElementById('cover').style.display = 'none'; // Hide cover page
    document.getElementById('form').style.display = 'block'; // Show form page
});

const scriptURL = 'https://script.google.com/macros/s/AKfycbxGZqxSMCkGugdmyqk-W7qbjr_P-bB_hqLPa0VGEWfcksqvSsCdqr7A5xV9NznuAMgA/exec';
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById("msg");
const submitButton = form.querySelector('button[type="submit"]');

form.addEventListener('submit', e => {
    e.preventDefault();
    
    // Gather all selected checkbox values from the form
    const selectedChallenges = Array.from(form.querySelectorAll('input[name="challenges"]:checked'))
        .map(checkbox => checkbox.value);
    const selectedFeatures = Array.from(form.querySelectorAll('input[name="features"]:checked'))
        .map(checkbox => checkbox.value);
    const selectedIntegrations = Array.from(form.querySelectorAll('input[name="integrations"]:checked'))
        .map(checkbox => checkbox.value);
    const selectedCommunication = Array.from(form.querySelectorAll('input[name="communication"]:checked'))
        .map(checkbox => checkbox.value);

    // Combine all selections into a single object
    const allSelections = {
        challenges: selectedChallenges.join(', '),
        features: selectedFeatures.join(', '),
        integrations: selectedIntegrations.join(', '),
        communication: selectedCommunication.join(', ')
    };

    // Create a hidden input field for the combined selections
    const hiddenInput = document.createElement("input");
    hiddenInput.type = "hidden";
    hiddenInput.name = "all_selections"; // Ensure this matches your Google Apps Script
    hiddenInput.value = JSON.stringify(allSelections); // Store as JSON
    form.appendChild(hiddenInput);

    // Display the message immediately
    msg.innerHTML = "Your submission is being processed...";
    submitButton.disabled = true;

    // Fetch request to the script URL
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => response.json())
        .then(data => {
            if (data.result === 'success') {
                msg.innerHTML = "Your submission was successful! Thank you.";
                setTimeout(() => {
                    msg.innerHTML = "";
                    submitButton.disabled = false; // Re-enable the button
                }, 3000);
                form.reset();
            } else {
                msg.innerHTML = "Error: " + data.error;
                submitButton.disabled = false; // Re-enable the button on error
            }
        })
        .catch(error => {
            msg.innerHTML = "Error! Please try again.";
            submitButton.disabled = false; // Re-enable the button on error
            console.error('Error!', error.message);
        });
});

// Function to reset the form
function resetForm() {
    form.reset();
    msg.innerHTML = "";
}