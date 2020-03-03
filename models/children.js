module.exports = function (sequelize, DataTypes) {

	// Creates a "Children" model that matches up with DB
	var Children = sequelize.define("Children", {
		child_id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		  },
        child_name: DataTypes.STRING,
        admin_id: DataTypes.INTEGER,
        balance: DataTypes.DECIMAL
	},
	{
	  tableName: "children"
	}
	);
  
	// Makes the Children model available for other files (will also create a table)
	return Children;
  }