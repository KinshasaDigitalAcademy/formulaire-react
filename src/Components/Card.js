import React, {Component} from 'react'
import Button from './Button'


class Card extends Component{
    render(){
        const {image, nom, prenom, groupe, bio}= this.props
        return (
            <div className="card">
                
                <div className="card--image">
                    <img src={image}/>
                </div>
                <div className="card--content">
                    <p><span>{nom} </span><span>{prenom}</span></p>
                    <p>{groupe}</p>
                    <p>{bio}</p>
                    
                   
                </div>
                <div className="icons">
                    <i onClick={()=>{this.props.clickEdit(this.props.id)}}>edit</i>
                    <br/>
                    <i onClick={()=>{this.props.clickDelete(this.props.id)}}>delete</i>
                </div>
            </div>
        )
    }
}

export default Card