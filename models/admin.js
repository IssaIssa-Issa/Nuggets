module.exports = function (sequelize, DataTypes) {

	// Creates a "Admin" model that matches up with DB
	var Admin = sequelize.define("Admin", {
		admin_id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
		  },
		admin_name: Sequlize.STRING,
	},
	{
	  tableName: "admin"
	}
	);
  
	// Makes the Admin model available for other files (will also create a table)
	return Admin;
  }