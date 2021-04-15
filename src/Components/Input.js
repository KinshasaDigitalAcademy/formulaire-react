import React from 'react'

class Input extends React.Component{

    handleChange = (e)=>{
        let nom = e.target.value
        this.props.handleChange({[this.props.name] : nom})
    }

    render(){
        return(
            <div>
                <input type="text" placeholder={this.props.placeholder} 
                name={this.props.name} defaultValue={this.props.value} onChange={this.handleChange}></input>
            </div>
        )
    }
}
export default Input