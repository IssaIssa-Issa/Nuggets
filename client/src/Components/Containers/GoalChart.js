import React, { Component } from 'react';
import './graphcss.scss'
// import { ResponsiveBar } from '@nivo/bar'
// import data from './GoalContainer'
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
    class MyResponsiveBar extends Component {
        render() {
            return(
    <div className="chart">
        <div className="bar bar-30 lime">
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
    </div>
            )}
      }
    

export default MyResponsiveBar;