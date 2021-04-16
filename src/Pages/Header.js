import React from 'react';
import AddButton from './../Components/AddButton';

class Header extends React.Component{
    render(){
        return(
            <div className="d-flex">
                <div className="d-flex"> 
                    <h1 className = 'title--style font-weight-bold'>Repertoire de contacts</h1>
                </div>
                <AddButton />
            </div>
            
        )
    }
}
export default Header;