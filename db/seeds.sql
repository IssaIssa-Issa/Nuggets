INSERT INTO
    database_development.chores (
        chores_id,
        admin_id,
        chore_name,
        completed_by_child_id,
        amount,
        child_comments,
        admin_comments,
        updatedAt,
        createdAt
    )
VALUES
    (
        1,
        1,
        "Empty Dishwasher",
        1,
        2.00,
        "",
        "",
        "2020-03-05",
        "2020-03-05"
    ), (
        2,
        1,
        "Take Out Trash",
        1,
        1.00,
        "",
        "",
        "2020-03-05",
        "2020-03-05"
    ), (
        3,
        1,
        "Take Out Recycling",
        1,
        1.00,
        "",
        "",
        "2020-03-05",
        "2020-03-05"
    ), (
        4,
        1,
        "Set the Table",
        1,
        1.00,
        "",
        "",
        "2020-03-05",
        "2020-03-05"
    ), (
        5,
        1,
        "Clear the Table",
        1,
        2.00,
        "",
        "",
        "2020-03-05",
        "2020-03-05"
    ), (
        6,
        1,
        "Vacuum First Floor",
        1,
        3.00,
        "",
        "",
        "2020-03-05",
        "2020-03-05"
    );
INSERT INTO
    database_development.transactions (
        transaction_id,
        amount,
        admin_id,
        child_id,
        admin_comments,
        date,
        updatedAt,
        createdAt
    )
VALUES
    (
        1,
        20,
        1,
        1,
        "birthday present",
        "2020-03-05",
        "2020-03-05",
        "2020-03-05"
    ),
    (
        2,
        10,
        1,
        1,
        "bought Chipotle",
        "2020-03-05",
        "2020-03-05",
        "2020-03-05"
    );
INSERT INTO
    database_development.admin (
        admin_id,
        admin_name,
        updatedAt,
        createdAt
    )
VALUES
    (
        1,
        "Elizabeth",
        "2020-03-05",
        "2020-03-05"
    );

INSERT INTO
    database_development.children (
        child_id,
        child_name,
        admin_id,
        balance,
        updatedAt,
        createdAt
    )
VALUES
    (
        1,
        "Ben",
        1,
        100,
        "2020-03-05",
        "2020-03-05"
    );

INSERT INTO
    database_development.goals (
        goal_id,
        goal_name,
        goal_amount,
        child_id,
        goal_color,
        updatedAt,
        createdAt
    )
VALUES
    (
        1,
        "Computer",
        1000.00,
        1,
        "Yellow",
        "2020-03-05",
        "2020-03-05"
    ),
    (
        2,
        "Mom's Birthday Present",
        40.00,
        1,
        "Red",
        "2020-03-05",
        "2020-03-05"
    );
    