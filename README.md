# Making SQL Easy with Sequelize

## Objective

Learn how to use Sequelize ORM with Node.js and MySQL to simplify database operations. This task demonstrates how to:

- Connect Sequelize to a MySQL database
- Create a table using Sequelize
- Verify the table in MySQL Workbench

---

## What is Sequelize?

Sequelize is a promise-based ORM (Object Relational Mapper) for Node.js that allows developers to interact with SQL databases using JavaScript instead of writing raw SQL queries.

### Advantages of Sequelize

- Easy database management
- Supports multiple SQL databases
- Reduces boilerplate SQL code
- Provides model-based development
- Supports validations and associations

---

## Prerequisites

Make sure the following tools are installed:

- Node.js
- npm
- MySQL Server
- MySQL Workbench
- VS Code

Check installation versions:

```bash
node -v
npm -v
mysql --version
```

---

## Step 1: Create a New Project

Create a new Node.js project.

```bash
mkdir sequelize-demo
cd sequelize-demo

npm init -y
```

---

## Step 2: Install Required Packages

Install Sequelize and MySQL driver.

```bash
npm install sequelize mysql2
```

---

## Step 3: Create MySQL Database

Open MySQL Workbench and execute:

```sql
CREATE DATABASE sequelize_db;
```

Verify database creation:

```sql
SHOW DATABASES;
```

---

## Step 4: Configure Sequelize Connection

Create a file named `database.js`.

### database.js

```javascript
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  "sequelize_db",
  "root",
  "your_password",
  {
    host: "localhost",
    dialect: "mysql",
  }
);

module.exports = sequelize;
```

> Replace `root` and `your_password` with your MySQL credentials.

---

## Step 5: Create Student Model

Create a file named `Student.js`.

### Student.js

```javascript
const { DataTypes } = require("sequelize");
const sequelize = require("./database");

const Student = sequelize.define("Student", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },

  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },

  age: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Student;
```

---

## Step 6: Synchronize Model with Database

Create a file named `app.js`.

### app.js

```javascript
const sequelize = require("./database");
const Student = require("./Student");

async function connectDB() {
  try {
    await sequelize.authenticate();
    console.log("Database connected successfully.");

    await sequelize.sync({ alter: true });

    console.log("Student table created successfully.");
  } catch (error) {
    console.error("Error:", error);
  } finally {
    await sequelize.close();
  }
}

connectDB();
```

---

## Step 7: Run the Application

Execute the application:

```bash
node app.js
```

### Expected Output

```text
Database connected successfully.
Student table created successfully.
```

---

## Step 8: Verify Table in MySQL Workbench

Open MySQL Workbench and run:

```sql
USE sequelize_db;

SHOW TABLES;
```

### Expected Output

```text
students
```

Check table structure:

```sql
DESCRIBE students;
```

### Expected Columns

| Column | Type | Constraint |
| ----------- | ----------- | ----------- |
| id | INT | Primary Key, Auto Increment |
| name | VARCHAR(255) | Not Null |
| email | VARCHAR(255) | Unique, Not Null |
| age | INT | Not Null |

---

## Project Structure

```text
sequelize-demo/
│
├── node_modules/
├── app.js
├── database.js
├── Student.js
├── package.json
└── package-lock.json
```

---

## Results

Successfully completed the following:

- Connected Sequelize with MySQL
- Created a database connection
- Defined a Student model
- Generated a table using Sequelize
- Verified the table in MySQL Workbench

---

## Conclusion

Sequelize simplifies database operations by allowing developers to interact with SQL databases through JavaScript. By defining models and synchronizing them with the database, tables can be created and managed efficiently without writing extensive SQL queries.

### Technologies Used

- Node.js
- Sequelize
- MySQL
- MySQL Workbench
- VS Code