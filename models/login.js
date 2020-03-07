module.exports = function (sequelize, DataTypes) {

	// Creates a "Login" model that matches up with DB
	var Login = sequelize.define("Login", {
		login_id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		  },
        username: DataTypes.STRING,
        password: DataTypes.STRING,
        admin_id: DataTypes.INTEGER,
		child_id: DataTypes.INTEGER
	},
	{
	  tableName: "login"
	}
	);
  
	// Makes the Login model available for other files (will also create a table)
	return Login;
  }