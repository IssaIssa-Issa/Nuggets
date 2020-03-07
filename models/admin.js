module.exports = function (sequelize, DataTypes) {

	// Creates a "Admin" model that matches up with DB
	var Admin = sequelize.define("Admin", {
		admin_id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		  },
		admin_name: DataTypes.STRING
	},
	{
	  tableName: "admin"
	}
	);
  
	// Makes the Admin model available for other files (will also create a table)
	return Admin;
  }