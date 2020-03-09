module.exports = function (sequelize, DataTypes) {

	// Creates a "Admin" model that matches up with DB
	var Admin = sequelize.define("Admin", {
		admin_id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		admin_name: DataTypes.STRING,
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
			tableName: "admin"
		}
	);

	// Makes the Admin model available for other files (will also create a table)
	return Admin;
}