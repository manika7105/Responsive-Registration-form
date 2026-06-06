# 📝 Responsive Registration Form

Responsive Registration Form is a full-stack web application built using HTML, CSS, JavaScript, PHP, and MySQL. It allows users to register through a clean and responsive interface while validating input data and storing records in a database.

This project was created to practice frontend development, form validation, backend integration, and database connectivity.

---

## 📸 Preview

![Registration Form](screenshots/preview.png)

---

## ✨ Features

* 📝 User registration form with multiple input fields
* ✅ Client-side validation using JavaScript
* 📧 Email format verification
* 📱 Mobile number validation
* 🆔 Aadhar number validation
* ⚡ Asynchronous form submission using Fetch API
* 🗄️ MySQL database integration
* 🔔 Success and error notifications
* 📱 Responsive design for different screen sizes

---

## 🛠️ Technologies Used

* 🧱 HTML5
* 🎨 CSS3
* ⚙️ JavaScript (Vanilla)
* 🐘 PHP
* 🗄️ MySQL

---

## 🚀 Setup and Installation

### Clone the Repository

```bash
git clone https://github.com/manika7105/Responsive-Registration-Form.git
```

### Create Database

Create a database named:

```sql
registration
```

Create a table:

```sql
CREATE TABLE details (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    fullName VARCHAR(100),
    address VARCHAR(255),
    aadharId VARCHAR(20),
    mobile VARCHAR(20),
    email VARCHAR(100)
);
```

### Configure Database Connection

Open:

```php
dbconnection.php
```

Update:

```php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "registration";
```

according to your local database configuration.

### Run the Project

Place the project folder inside:

```text
htdocs
```

for XAMPP users and start:

* Apache
* MySQL

Then open:

```text
http://localhost/project-folder-name
```

---

## 🧾 How to Use

1. Open the registration form.
2. Fill in all required details.
3. Enter a valid email address.
4. Enter a valid 10-digit mobile number.
5. Enter a valid Aadhar number.
6. Click **Submit**.
7. The information will be validated and stored in the database.
8. A success or error notification will be displayed.

---

## 🎯 Concepts Practiced

* HTML Forms
* CSS Styling
* Responsive Design
* JavaScript Validation
* Fetch API
* PHP Backend Development
* MySQL Database Connectivity
* CRUD Fundamentals

---

## 🔮 Future Improvements

* 🔐 Password-based authentication
* 📧 Email verification system
* 👤 User login and registration module
* 🛡️ Stronger server-side validation
* 🔒 Password hashing and security enhancements
* 📊 Admin dashboard for managing registrations

---

## 👨‍💻 Author

**Manika Goel**

* GitHub: https://github.com/manika7105
* LinkedIn: https://www.linkedin.com/in/manika-goel-92201a286
* Email: goelmanika07@gmail.com

---

⭐ If you found this project useful, consider giving it a star on GitHub!
