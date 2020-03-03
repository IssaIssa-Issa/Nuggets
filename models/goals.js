module.exports = function (goals, DataTypes) {

	// Creates a "Transactions" model that matches up with DB
	var Goals = sequelize.define("Goals", {
	goal_id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
		  },
        goal_amount: Sequelize.DECIMAL,
        child_id: Sequelize.INTEGER,
		date_created: Sequelize.DATEONLY,
		goal_color: Sequelize.STRING,
		goal_name: Sequelize.Goals
	},
	{
	  tableName: "goals"
	}
	);
  
	// Makes the Goals model available for other files (will also create a table)
	return Goals;
  }