# Responsive-Registration-Form

This project implements a user registration form using HTML, CSS, JavaScript, and PHP.  It includes client-side validation using JavaScript and server-side processing with PHP to store user data in a MySQL database.

## Features

*   **User-Friendly Form:** This is a clean and responsive registration form with fields for name, full name, address, Aadhar ID, mobile number, and email address.
*   **Client-Side Validation:** JavaScript is used to validate user input before submission, ensuring data integrity and providing immediate feedback to the user.  Validation checks include:
    *   Valid email format.
    *   10-digit mobile number.
    *   Valid Aadhar ID format.
*   **Server-Side Processing:** PHP handles form submissions, sanitizes user input, and interacts with a MySQL database to store the registration data.
*   **Database Integration:** User data is securely stored in a MySQL database.
*   **Success/Error Notifications:**  The user receives clear notifications upon successful registration or if any errors occur.
*   **Reset Button:** A reset button clears the form fields.

## Technologies Used

*   **HTML:** For structuring the registration form.
*   **CSS:** For styling the form and making it responsive.
*   **JavaScript:** For client-side validation and handling form submission asynchronously using Fetch API.
*   **PHP:** For server-side processing, database interaction, and handling form submissions.
*   **MySQL:** For storing user registration data.

## Setup and Installation

1.  **Clone the Repository:**
    ```bash
    git clone [https://github.com/manika7105/Responsive-Reg-form.git]https://github.com/manika7105/Responsive-Reg-form.git)
    ```

2.  **Database Setup:**
    *   Create a MySQL database named `registration` (or change the `$dbname` variable in `dbconnection.php` accordingly).
    *   Create a table named `details` with the following columns (adjust data types as needed):
        *   `id` (INT, PRIMARY KEY, AUTO_INCREMENT)
        *   `name` (VARCHAR)
        *   `fullName` (VARCHAR)
        *   `address` (VARCHAR)
        *   `aadharId` (VARCHAR)
        *   `mobile` (VARCHAR)
        *   `email` (VARCHAR)

3.  **Configure PHP:**
    *   Open the `dbconnection.php` file.
    *   Update the `$servername`, `$username`, `$password`, and `$dbname` variables with your MySQL database credentials.

4.  **Open the HTML file:** Open `index.html` in your web browser.

## How to Use

1.  Fill in all the required fields in the registration form.
2.  Ensure that the email, mobile number, and Aadhar ID are in the correct format.
3.  Click the "Submit" button.
4.  You will see a notification indicating whether the registration was successful or if there were any errors.
5.  Click the "Reset" button to clear the form.

## Future Improvements

*   **Enhanced Validation:** Implement more robust client-side and server-side validation (e.g., checking for duplicate entries, stronger password requirements).
*   **Security Enhancements:** Implement stronger security measures, such as password hashing and protection against SQL injection.
*   **Improved User Interface:** Enhance the user interface with better styling and user experience.
*   **Email Confirmation:** Add email confirmation functionality to verify user email addresses.

## Author

Manika Goel - https://github.com/manika7105
