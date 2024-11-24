# README for Event Management System Questionnaire

## Overview

The **Event Management System Questionnaire** is a web-based form designed to collect valuable insights from users regarding their experiences and expectations related to event management systems. This questionnaire aims to improve services based on user feedback.

## Features

- **User-Friendly Interface**: The questionnaire consists of multiple sections including stakeholder information, demographic details, current system evaluation, desired features, and more.
- **Responsive Design**: The layout adapts for both desktop and mobile devices, ensuring accessibility across platforms.
- **Data Submission**: Responses are submitted to a Google Apps Script for processing, providing a straightforward way to handle form data.

## Project Structure

The project consists of the following main files:

- **index.html**: The main HTML file containing the structure of the questionnaire.
- **style.css**: The CSS file for styling the questionnaire and ensuring responsive design.
- **app.js**: The JavaScript file handling the form submission and page interactions.

## Installation

1. **Clone the Repository**:
   ```bash
   git clone <repository-url>
   ```
2. **Open `index.html`** in your web browser to view the questionnaire.

## Usage

1. **Starting the Questionnaire**: The user is greeted with a cover page. Clicking the "Fill Questionnaire" button will navigate to the form.
2. **Filling Out the Form**: Users are required to complete various fields, including their name, role in event management, and satisfaction levels with current systems.
3. **Submission**: Upon clicking the "Submit Questionnaire" button, the form data is sent to a Google Apps Script for processing.

## Error Handling

If an error occurs during the submission, a message will be displayed indicating the failure. Ensure the Google Apps Script URL is set correctly in the `app.js` file.

### Common Error

- **Error Message**: "Script function not found: doGet"
  - **Cause**: This error indicates that the Google Apps Script endpoint is not set up correctly or is missing the required `doGet` function.
  - **Solution**: Verify the Google Apps Script deployment and ensure that the `doGet` function is implemented.

## Customization

To customize the questionnaire:
- **Modify Questions**: Edit the HTML in `index.html` to add, remove, or change questions.
- **Styling**: Update styles in `style.css` to change the look and feel of the questionnaire.
- **JavaScript Logic**: Adjust functionality in `app.js` for different form handling or validation logic.

## Contribution

Contributions are welcome! Please fork the repository and submit a pull request for any enhancements or fixes.

## Contact

For any inquiries or issues, please contact the project maintainer at [your-email@example.com]. 

---

This README provides an overview of the Event Management System Questionnaire, instructions for installation, usage, and customization, as well as information on error handling and contributions.