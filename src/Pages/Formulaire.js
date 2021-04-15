import React from 'react';

import Input from '../Components/Input'
import Button from '../Components/Button'
import Subtitle from '../Components/Subtitle'

class Formulaire extends React.Component{
    constructor(props){
        super(props);
    }
    click(event){
        event.preventDefault();
        let Tableau=event.target.elements;
        let data={};
        Tableau = Array.from(Tableau).map(element=>{
            data[element.name]=element.value;
        })
        this.props.submit(data);
    }

    handleChange = (e) =>{
        console.log(e);
    }

    render(){
        console.log(this.props.contactToEdit.nom);
        return(
            <div>
              
            <Subtitle content="Formulaire"/>  
            <form onSubmit={this.click.bind(this)}>
                  <Input placeholder="Nom" name="nom"  value={this.props.contactToEdit.nom} handleChange={this.handleChange} />
                  <Input placeholder="Prénom" name="prenom" value={this.props.contactToEdit.prenom} handleChange={this.handleChange} />

                        
                <div>
                        <select name="groupe" placeholder="Groupe" defaultValue={this.props.contactToEdit.groupe}>
                            <option>Ami</option>
                            <option>Famille</option>
                            <option>Pro</option>
                        </select>
                </div> 
                <div> 
                    <textarea name="bio" placeholder="Bio" defaultValue={this.props.contactToEdit.bio}></textarea>
                </div> 
                   
                    <div>
                        <input name="file" type="file"></input>
                        <div className="photo"></div>
                    </div>
                    <Button type="submit" content="Créer" />
                    <Button type="reset" content="Initialiser"/>
                    
              </form>
                
            </div>
        )
    }
}
export default Formulaire