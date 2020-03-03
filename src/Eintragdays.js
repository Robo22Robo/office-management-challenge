import React, {Component} from 'react'


class Eintragdays extends Component {
    render () {
        return (<div>
            <li key={this.props.day}>{this.props.tage}</li>
            <ul>
            {this.props.pair[this.props.day].map(
                (pair, id) => <li key={id}>{pair.name}</li>
            )}
            </ul>
            </div>); 
    }
}

export default Eintragdays;