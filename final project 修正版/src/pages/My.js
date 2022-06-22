import React from "react";

import{Container,Header} from "semantic-ui-react";

import firebase from '../utils/firebase';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
import{Form} from 'semantic-ui-react';
import{useHistory} from 'react-router-dom';







// function Submit(){
// const [email,setEmail]=React.useState('');
// const [password,setPassword]=React.useState('');
// // const history=useHistory();
// //         firebase.auth()
// //         .createUserWithEmailAndPassword(email,password)
// //         .then(()=>{
// //             history.push('/');
// //         })
        
   
 
//     }










function My() {
    return (
        <Container>
        <Header>會員資訊</Header>

        <Header>會員  id  :{firebase.auth().currentUser.uid}</Header>
        {/* <Header>{firebase.firestore.posts.author.title}</Header> */}
        <Header>會員  email   :    { firebase.auth().currentUser.email}</Header>
        {/* <Header>會員  email   :    { firebase.firestore.Timestamp.now()}</Header> */}

       
       










        {/* <Form onSubmit={Submit}>
                <Form.Input 
                    label="信箱" 
                    value ={email}    
                    onChange={(e)=>setEmail(e.target.value)}       
                    placeholder="輸入電子信箱"
                    
                />
                <Form.Input 
                label="密碼" 
                value ={password} 
                onChange={(e)=>setPassword(e.target.value)}       
                placeholder="輸入密碼"
                type="password"
                />
               
            </Form>

            <Form.Button onclisk={Submit}>change</Form.Button>


         */}


        </Container>
    )
}


export default My
