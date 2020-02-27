module.exports = function (sequelize, DataTypes) {

	// Creates a "Children" model that matches up with DB
	var Children = sequelize.define("Children", {
		child_id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
		  },
        child_name: Sequlize.STRING,
        admin_id: Sequelize.INTEGER,
        balance: Sequelize.DECIMAL
	},
	{
	  tableName: "children"
	}
	);
  
	// Makes the Children model available for other files (will also create a table)
	return Children;
  }