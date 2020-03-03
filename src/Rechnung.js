
import React, {Component} from 'react'


class Rechnung extends Component {
    render() {
        const notAvailable = this.props.number.filter(n => n.available === false )
        return (
        <div>
        <p>Employee available {notAvailable.length} from {this.props.number.length}</p>
        </div>
        )
    }
}
export default Rechnung

