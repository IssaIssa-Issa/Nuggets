module.exports = function (sequelize, DataTypes) {

	// Creates a "Transactions" model that matches up with DB
	var Goals = sequelize.define("Goals", {
	goal_id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		  },
        goal_amount: DataTypes.DECIMAL,
        child_id: DataTypes.INTEGER,
		goal_color: DataTypes.STRING,
		goal_name: DataTypes.STRING,
		updatedAt: {
			type: DataTypes.DATEONLY,
			allowNull: false,
			defaultValue: DataTypes.NOW
		},
		createdAt:
		{
			type: DataTypes.DATEONLY,
			allowNull: false,
			defaultValue: DataTypes.NOW
		},
	},
	{
	  tableName: "goals"
	}
	);
  
	// Makes the Goals model available for other files (will also create a table)
	return Goals;
  }