import * as React from 'react';
import { Menu ,Search} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import firebase from './utils/firebase';


function Header(){
    const[user,SetUser]=React.useState(null);
    React.useEffect(()=>{

        firebase.auth().onAuthStateChanged((currentUser)=>{
            SetUser(currentUser);
        });
    },[]);







    return (
    <Menu>
        <Menu.Item as={Link} to= "/">
            Hinstarry
        </Menu.Item>
        <Menu.Item>
            <Search/>
        </Menu.Item>
        <Menu.Menu position="right">
            {user? (
            <>
                <Menu.Item as={Link} to= "/new-post">
                    發表文章
                </Menu.Item>
       
                <Menu.Item as={Link} to= "/my">
                    會員
                </Menu.Item>
         
                <Menu.Item onClick={()=>firebase.auth().signOut()}>
                    Log out
                </Menu.Item>
        




            </>
            ):(
                 <Menu.Item as={Link} to= "/signin">signin/signout</Menu.Item>
            )}
            {/* <Menu.Item as={Link} to= "/signin">signin/signout</Menu.Item> */}
        </Menu.Menu>
    
    
    
    </Menu>
    );
}



export default Header;


