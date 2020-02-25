module.exports = function (sequelize, DataTypes) {

	// Creates a "Chores" model that matches up with DB
	var Chores = sequelize.define("Chores", {
		chores_id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
		  },
		admin_id: Sequelize.INTEGER,
		chore_name: Sequlize.STRING,
		date_created: Sequelize.DATEONLY,
		date_approved: Sequelize.DATEONLY,
		date_completed: Sequelize.DATEONLY,
		completed_by_child_id: Sequelize.INTEGER,
		amount: Sequelize.DECIMAL,
		child_comments: Sequelize.STRING,
		admin_comments: Sequelize.STRING
	},
	{
	  tableName: "chores"
	}
	);
  
	// Makes the Chores model available for other files (will also create a table)
	return Chores;
  }