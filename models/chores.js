module.exports = function (sequelize, DataTypes) {

	// Creates a "Chores" model that matches up with DB
	var Chores = sequelize.define("Chores", {
		chores_id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		admin_id: DataTypes.INTEGER,
		chore_name: DataTypes.STRING,
		date_approved: DataTypes.DATE,
		date_completed: DataTypes.DATE,
		completed_by_child_id: DataTypes.INTEGER,
		amount: DataTypes.DECIMAL,
		child_comments: DataTypes.STRING,
		admin_comments: DataTypes.STRING,
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
			tableName: "chores"
		}
	);

	// Makes the Chores model available for other files (will also create a table)
	return Chores;
}