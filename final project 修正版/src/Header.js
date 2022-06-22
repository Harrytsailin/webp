import * as React from 'react';
import { Menu ,Tabular} from 'semantic-ui-react';
// import { Search} from 'semantic-ui-react';
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
        
        
        <Menu.Menu position="left">
            {user? (
            <>
                <Menu.Item as={Link} to= "/new-post">
                    發表文章
                </Menu.Item>
       
                <Menu.Item as={Link} to= "/my">
                    會員
                </Menu.Item>
               
                <Menu.Item as={Link} to= "/signin" onClick={()=>firebase.auth().signOut() }>      
                    Log out
                </Menu.Item>
        
                {/* //跳轉回登入畫面 */}



            </>
            ):(
                 <Menu.Item as={Link} to= "/signin">signin/register</Menu.Item>
            )}
            {/* <Menu.Item as={Link} to= "/signin">signin/signout</Menu.Item> */}
        </Menu.Menu>
        <Menu.Item position="right" as={Link} to= "/">
            Hinstarry
        </Menu.Item>
    
    
    
    </Menu>
    );
}



export default Header;


