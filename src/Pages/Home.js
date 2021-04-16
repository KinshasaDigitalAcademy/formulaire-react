import React from 'react';
import Formulaire from './Formulaire';
import Header from './Header';
import Repertoire from './Repertoire';
import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/css/all.css';

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
    onContactCreate = (formData)=>{
        this.setState({contacts:[...this.state.contacts,formData]})
    }
    onContactUpdate = (formData) => {
        let newContacts = [...this.state.contacts];
        newContacts[formData.key] = formData;
        this.setState({contacts : newContacts});
    }

    editContact = (index)=>{
        let contactToEdit = this.state.contacts[index];
        contactToEdit.key = index;
        this.setState({contactToEdit});
        
    }
    deleteContact = (index)=>{
        let newContacts = [...this.state.contacts];
        newContacts.splice(index,1)
        this.setState({contacts : newContacts})
    }
    render(){
        return(
            <div className = 'container'>              
                <div className = 'row my-3'>
                    <div className = 'col-12'>
                        <Header></Header>
                    </div>                  
                </div>
                <div className = 'row'>
                    <div className = 'col-md-6 col-12'>
                        <Formulaire onCreate={this.onContactCreate} onUpdate = {this.onContactUpdate}
                        contactToEdit = {this.state.contactToEdit}/>
                    </div>
                    <div className = 'col-md-6 col-12'>
                        <Repertoire  contacts={this.state.contacts} clickEdit={this.editContact} 
                        clickDelete={this.deleteContact}/> 
                    </div>
                    
                    
                </div>
   
            </div>
        )
    }
}
export default Home;