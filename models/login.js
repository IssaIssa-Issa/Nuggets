module.exports = function (sequelize, DataTypes) {

	// Creates a "Login" model that matches up with DB
	var Login = sequelize.define("Login", {
		login_id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
		  },
        username: Sequlize.STRING,
        password: Sequelize.STRING,
        admin_id: Sequelize.INTEGER,
        child_id: Sequelize.INTEGER
	},
	{
	  tableName: "login"
	}
	);
  
	// Makes the Login model available for other files (will also create a table)
	return Login;
  }