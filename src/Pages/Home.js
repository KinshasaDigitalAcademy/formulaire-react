import React from 'react';
import Formulaire from './Formulaire';
import Header from './Header';
import Repertoire from './Repertoire';


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
            <div>
                <Header></Header>
                <div className="mainFormulaire">
                    <Formulaire submit={this.onSubmit.bind(this)} contactToEdit = {this.state.contactToEdit}/>
                    <Repertoire  contacts={this.state.contacts} clickEdit={this.editContact} clickDelete={this.deleteContact}/>
                </div>
            </div>
        )
    }
}
export default Home;