import React, { Component } from 'react';
import Eintrag from './Eintrag';
import Rechnung from './Rechnung'
import Days from './Days'

class Liste extends Component {

    constructor(props) {
        super(props);
        this.state = {
            liste: [
                { id: 1, name: 'Alex', available: false, department: 'Tech' },
                { id: 2, name: 'Bea', available: true, department: 'PM' },
                { id: 3, name: 'Carl', available: true, department: 'HR' },
                { id: 4, name: 'Dasha', available: true, department: 'BE' },
                { id: 5, name: 'Eric', available: true, department: 'RD' },
                { id: 6, name: 'Francesca', available: true, department: 'FE' },
                { id: 7, name: 'Gabriella', available: true, department: 'DM' },
            ]

        }
    }


    eintragClickHandler = (eintrag) => {
        console.log(eintrag)
        this.setState(prevState => ({
            liste: prevState.liste.map(
                prevEintrag => prevEintrag.name === eintrag ?
                    { ...prevEintrag, available: !prevEintrag.available } : prevEintrag
            )
        }))


    }



    render() {
        return (<div>

            <p>Employees:</p>
            <Rechnung number={this.state.liste} />

            <ol>
                {this.state.liste.map(daten => <Eintrag key={daten.id} member={daten} eintragClickHandler={this.eintragClickHandler} />)}
            </ol>
            
            <div><Days employee={this.state.liste.filter(
                employe => employe.available !== false
            )}  /></div>

            </div>)
    }
}

export default Liste;
