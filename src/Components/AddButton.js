import React, {Component} from 'react'

class AddButton extends Component {

    render() {
        return (
            <button data-toggle="modal" data-target="#modal-form" className="ml-3 btn btn-primary btn-add rounded  shadow d-flex align-items-center justify-content-center">
                <i className="fa fa-plus"></i>
                <span className="font-weight-bold ml-2">Ajouter</span>
            </button>
        )
    }
}

export default AddButton;