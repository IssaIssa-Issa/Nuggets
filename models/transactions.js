module.exports = function (sequelize, DataTypes) {

	// Creates a "Transactions" model that matches up with DB
	var Transactions = sequelize.define("Transactions", {
	"transaction_id": {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
		  },
        amount: Sequelize.DECIMAL,
        admin_id: Sequelize.INTEGER,
        child_id: Sequelize.INTEGER,
        admin_notes: Sequelize.STRING
	},
	{
	  tableName: "transactions"
	}
	);
  
	// Makes the Children model available for other files (will also create a table)
	return Transactions;
  }