import React, { useState, useEffect } from "react";
import axios from 'axios'


const EditGoals = () => {

    const [color, setColor] = useState()
    const [amount, setAmount] = useState()
    const [goal, setGoal] = useState()

    // Add goal to db based on input fields (chore name and amount)
    function addGoal(event) {
        var newGoal = {
            goal_name: goal,
            goal_amount: amount,
            goal_color: color,
            child_id: 1
        };
        axios.post("/api/goals/", newGoal).then(
            function () {
                console.log("This is the result", newGoal)
            })
    }
    
    return (
        <div>
            <form>
                <div class="col-md-6 offset-md-3">
                    <h4>Add a new Goal</h4>
                    <h6>Choose a Color!</h6>
                    <select className="form-control" type="Color" onChange={e => setColor(e.target.value)} id="goalColor">
                        <option>Pink</option>
                        <option>Red</option>
                    </select>
                    <br />
                    <br />
                    <div className="form-group">
                        <h6>Goal Name</h6>
                        <input type="Name" className="form-control" onChange={e => setGoal(e.target.value)} id="goalName"></input>
                    </div>
                    <br />
                    <br />
                    <div className="form-group">
                        <h6>Amount (In Dollars):</h6>
                        <input type="Amount" className="form-control" onChange={e => setAmount(e.target.value)} id="goalAmount"></input>
                    </div>
                    <button type="submit" onClick={addGoal} className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>

    )
};

export default EditGoals