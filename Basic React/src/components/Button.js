import React from "react" 

class Button extends React.Component {
    render() {
        return (
            <button type="button" class="btn btn-dark">Get number</button>
            // onClick={this.props.changeNumber}
        )
    }
}

export default Button