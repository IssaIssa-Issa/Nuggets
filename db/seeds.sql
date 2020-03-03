INSERT INTO
    nuggets.chores (
        chores_id,
        admin_id,
        chore_name,
        completed_by_child_id,
        amount,
        child_comments,
        admin_comments
    )
VALUES
    (1, 1, "Empty Dishwasher", 1, 2.00, "", ""),
    (2, 1, "Take Out Trash", 1, 1.00, "", ""),
    (3, 1, "Take Out Recycling", 1, 1.00, "", ""),
    (4, 1, "Set the Table", 1, 1.00, "", ""),
    (5, 1, "Clear the Table", 1, 2.00, "", ""),
    (6, 1, "Vacuum First Floor", 1, 3.00, "", "");

INSERT INTO
    nuggets.transactions (
        transaction_id,
        amount,
        admin_id,
        child_id,
        admin_comments
    )
VALUES
    (1, 20, 1, 1, "birthday money"),
    (2, -10, 1, 1, "bought Chipotle"),
    (3, 10, 1, 1, "money from Grandma");

INSERT INTO
    nuggets.admin (admin_id, admin_name)
VALUES
    (1, "Elizabeth");

INSERT INTO
    nuggets.children (children_id, child_name, admin_id, balance)
VALUES
    (1, "Ben", 1, 0.0);

INSERT INTO
    nuggets.goals (
        goals_id,
        goals_name,
        goal_amount,
        child_id,
        goal_color
    )
VALUES
    (1, "Computer", 1000.00, 1, "Yellow"),
    (2, "Mom's Birthday Present", 40.00, 1, "Red");