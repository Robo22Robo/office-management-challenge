
import React, { Component } from 'react'
import Eintragdays from './Eintragdays'

class Days extends Component {

    constructor(props) {
        super(props);
        this.state = {
            daysData: [
                'Monday',
                'Tuesday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday'
            ]
        }
    }


    render() {

        const weeklyList = [
            ...this.props.employee, 
            ...this.props.employee, 
            ...this.props.employee, 
            ...this.props.employee, 
            ...this.props.employee, 
            ...this.props.employee]
        const pair = (array) => {
            const teams = []
            for (let i = 0; i < array.length; i += 2) {
                teams.push(
                    array.slice(i, i + 2)
                )
            }
            return teams
        }

        const pairList = pair(weeklyList)
        console.log(pairList);

        return (<div><ul>
            {this.state.daysData.map((daten, id) => <Eintragdays key={id} tage={daten} day={id} pair={pairList} />)}
        </ul></div>)
    }
}
export default Days

