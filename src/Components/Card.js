import React, { Component } from 'react'
import Button from './Button'


class Card extends Component {
    render() {
        const { image, nom, prenom, groupe, bio } = this.props
        return (
            <div className='card shadow shadow-md border-0 mt-3 pt-4'>
                <div className="row">
                    <div className="col-3 d-flex align-items-center">
                        <img src={image} className='img-fluid rounded-circle'/>
                    </div>
                    <div className="col-9 d-flex flex-column">
                        <span className="font-weight-bold">{nom} {prenom}</span>
                        <span className="text-info">{groupe}</span>
                        <p>{bio}</p>

                    </div>
                    <div className="position-absolute r-0 px-3" >
                        <i onClick={() => { this.props.clickEdit(this.props.id) } } className = 'mr-3 fas fa-edit text-primary cursor-pointer'></i>
                        <i onClick={() => { this.props.clickDelete(this.props.id) }} className = 'fas fa-trash-alt text-danger cursor-pointer'></i>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card