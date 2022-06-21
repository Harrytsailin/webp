import React, {useState,useEffect} from 'react'
import firebase from '../utils/firebase';
import {List} from 'semantic-ui-react';




function Topics() {
    const [topics,setTopcis]= useState([]);
    useEffect(()=>{
        firebase
        .firestore()
        .collection('topics')
        .get()
        .then((collectionSnapshot)=>{
            const data=collectionSnapshot.docs.map((doc)=>{
                return doc.data();
            });
            setTopcis(data);
        });
    },[]);
    return (
        <List animated selection>
            {topics.map((topic)=>{
                return<List.Item key={topic.name}>{topic.name}</List.Item>;
                
        })}
        </List>
    
    
    );
    



    
        
    
}

export default Topics;
