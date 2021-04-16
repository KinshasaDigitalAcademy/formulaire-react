import React from 'react';
import Formulaire from './Formulaire';
import Header from './Header';
import Repertoire from './Repertoire';
import AddButton from './../Components/AddButton'
import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/css/all.css';
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.js'
import $ from 'jquery';

class Home extends React.Component{
    constructor(props){
        super(props);
        this.state={
            contacts:[],
            contactToEdit : {
                nom : "",
                prenom : "",
                groupe : "",
                bio :"",
                file : ""
            }
        }
    }
    onSubmit(formData){
        console.log(formData)
        this.setState({contacts:[...this.state.contacts,formData]})
        $('#modal-form').modal('hide');
    }

    editContact = (index)=>{
       let contactToEdit = this.state.contacts[index];
        this.setState({contactToEdit})
        
    }


    deleteContact = (index)=>{
        let newContacts = [...this.state.contacts]

        newContacts.splice(index,1)
        this.setState({contacts : newContacts})
    }
    render(){
        return(
            <div className ='container mt-4'>              
                <div className = 'row my-3'>
                    <div className = 'col-12'>
                        <Header></Header>
                    </div>                  
                </div>
                <div className ='row'>
                    <div className = 'col-md-6 col-12 mt-3'>
                        <Repertoire  contacts={this.state.contacts} clickEdit={this.editContact} 
                        clickDelete={this.deleteContact}/> 
                    </div>
                </div>
                <div>
                <Formulaire submit={this.onSubmit.bind(this)} 
                        contactToEdit = {this.state.contactToEdit}/>
                </div>
            </div>
        )
    }
}
export default Home;