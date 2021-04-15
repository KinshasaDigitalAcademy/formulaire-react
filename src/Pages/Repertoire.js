import React from 'react'
import Subtitle from '../Components/Subtitle'
import Card from '../Components/Card'
import logo from '../logo.svg'
class Repertoire extends React.Component{

    render(){
       let tableauContacts=this.props.contacts;
        return(
            <div>
                <Subtitle content= 'Liste de contact'/>
                <div>
                    {
                    tableauContacts.map((contact,index)=>{
                        let {nom ,prenom,bio,groupe}=contact;
                        return  <Card id={index}  key={index} image={logo} nom={nom} prenom={prenom} bio={bio} groupe={groupe} clickEdit={this.props.clickEdit} clickDelete={this.props.clickDelete}/>
                    })
                    }      
                </div>
            </div>
           

        )
    }
}
export default Repertoire
