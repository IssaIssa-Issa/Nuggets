import React, { useState, useEffect } from "react";
import './graphcss.scss'
import EditGoals from "./../Forms/EditGoals"
import "./style.css"
import DeleteBtn from "../Buttons/DeleteBtn/index";
import axios from 'axios'



const GoalChart = () => {

    const [goalsArray, setGoalsArray] = useState([])


    useEffect(() => {
        loadGoals()
    }, [])

    // Loads all chores
    function loadGoals() {
        axios.get("/api/goals/")
            .then(res =>
                setGoalsArray(res.data),
            )
            .catch(err => console.log(err));
    };

    // Deletes a chore from the database with a given chores_id, then reloads chores
    function deleteGoal(goal_id) {
        console.log(goal_id)
        axios.delete(`/api/goals/${goal_id}`).then(response => {
            console.log(response);
            loadGoals()
        })
    };

    return (

        <div className="childContainer">
            <nav className="navbar" style={{ backgroundColor: "#20638C" }}>
                <a className="navbar-brand" href="/child" style={{ color: "white" }}>
                    <img src="images/logo.png" width="100px" className="d-inline-block align-top" alt="Logo"></img>
                    <h3 className="header-title">Log Out</h3>
                </a>
            </nav>
            <h4>All Goals</h4>
            {/* Goes through Chores Array and lists out each chore. Chore name and amount are displayed and a delete button is created for each chore */}
            {goalsArray.length ? (
                <div>
                    {goalsArray.map(goal => {
                        return (
                            <div>
                            <b> {goal.goal_name} </b> ${goal.goal_amount}.00
                            <DeleteBtn onClick={() => deleteGoal(goal.goal_id)} />
                            <div className="`bar bar-100 lime">
                                <div className="face top">
                                    <div className="growing-bar"></div>
                                </div>
                                <div className="face side-0">
                                    <div className="growing-bar"></div>
                                </div>
                                <div className="face floor">
                                    <div className="growing-bar"></div>
                                </div>
                                <div className="face side-a"></div>
                                <div className="face side-b"></div>
                                <div className="face side-1">
                                    <div className="growing-bar"></div>
                                </div>
                                </div>
                              <br />
                                <br />
                                <br />
                            </div>
                                    )
                    })}
                </div>
            ) : (
                    // This will render when there are no chores to be displayed
                    <p>No Goals... Make a new Goal!</p>
                )}
            <hr />
            <EditGoals />
            <br />
            <br />
            <nav className="footer parentFooter" style={{ backgroundColor: "white" }}>
                <a className="navbar-brand" href="/parent"> <div className="footer-copyright text-gray font-small" style={{ "font-size": 15 + "px" }}> © 2020 Copyright: Nuggets</div>
                </a>
            </nav>
        </div>

    )
}



export default GoalChart;