import React from 'react'

class Button extends React.Component{
    render(){
       
        return(
            <button onClick={this.props.handleClick} type={this.props.type} className = {this.props.className}> {this.props.content}</button>
        )
    }
}

export default Button