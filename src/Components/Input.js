import React from 'react'

class Input extends React.Component{

    handleChange = (e)=>{
        let nom = e.target.value
        this.props.handleChange({[this.props.name] : nom})
    }

    render(){
        
        return(

            <div className = 'form-group'>
                <input type="text" placeholder={this.props.placeholder} className = 'form-control'
                name={this.props.name} value={this.props.value || ''} onChange={this.handleChange}></input>
            </div>
        )
    }
}
export default Input