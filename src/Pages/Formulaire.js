import React from 'react';

import Input from '../Components/Input'
import Button from '../Components/Button'
import Subtitle from '../Components/Subtitle'

class Formulaire extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            form: {
                
            },
            isEditing : false
        }
    }
    handleChange = (inputValue) => {
        const key = Object.keys(inputValue)[0];
        const form = {...this.state.form};
        form[key] = inputValue[key];
        this.setState({ form });
        console.log(this.state.form);
    }
    componentDidUpdate(prevProps, prevState){
        if(prevProps.contactToEdit !== this.props.contactToEdit){
            console.log(prevProps.contactToEdit);
            console.log(this.props.contactToEdit)
            this.setState({
                form : this.props.contactToEdit,
                isEditing : true
            })
        }
    }
    resetForm = () => {
        this.setState({
            form : {},
            isEditing : false
        })
    }
    onSubmit = (event) => {
        event.preventDefault();
      if(this.state.isEditing) {
          this.props.onUpdate(this.state.form);
          
      } else {
          this.props.onCreate(this.state.form);
      }
      this.resetForm();
    }
    handleField = (e) => {
        let value = e.target.value;
        let key = e.target.name;
        this.handleChange({[key] : value});
        console.log(this.state.form);
    }
    render() {
       return (
            <div>
                <Subtitle content="Formulaire" />
                <form onSubmit={this.onSubmit}>
                    <Input placeholder="Nom" name="nom" value={this.state.form.nom}
                        handleChange={this.handleChange} />

                    <Input placeholder="Prénom" name="prenom" value={this.state.form.prenom} handleChange={this.handleChange} />

                    <div className='form-group'>
                        <select name="groupe" placeholder="Groupe" className='form-control'
                            value={this.state.form.groupe || ''} onChange = {this.handleField}>
                            <option></option>
                            <option>Ami</option>
                            <option>Famille</option>
                            <option>Pro</option>
                        </select>
                    </div>
                    <div className='form-group'>
                        <textarea name="bio" placeholder="Bio" className='form-control'
                             onChange = {this.handleField}>{this.state.form.bio}</textarea>
                    </div>

                    <div className='form-group'>
                        <input name="file" type="file" className='form-control'></input>
                        <div className="photo"></div>
                    </div>
                    <Button type="submit" content={this.state.isEditing ? 'Modifier' : 'Créer'} className='btn btn-primary mr-2' />
                    <Button type="reset" content="Initialiser" handleClick = {this.resetForm}
                     className='btn btn-danger' />

                </form>

            </div>
        )
    }
}
export default Formulaire