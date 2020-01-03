import React from "react" 
import {connect} from "react-redux"

class Number extends React.Component {
    render() {
        return (
            <p><span>{this.props.number}</span></p>
        )
    }
}

export default connect((state) => {
    return {number: state.num}
})(Number)
// export default Number