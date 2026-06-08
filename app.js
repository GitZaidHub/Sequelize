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