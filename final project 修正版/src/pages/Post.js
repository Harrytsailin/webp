import React from "react";
import { useParams } from "react-router-dom";
import{Container,Grid,Image,Header, Segment, Icon,Comment,Form} from "semantic-ui-react";
import Topics from'../components/Topics';
import firebase from '../utils/firebase';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
// import { isCompositeComponent } from "react-dom/test-utils";





function Post(){
    const [likes, setLikes] = React.useState([]);
    const {postId} = useParams();
    const[post,setPost]=React.useState({
        author:{},
    });

    const [CommentContent,setCommentContent]= React.useState("");
    const [comments,setComments]=React.useState([]);

    React.useEffect(()=>{
    firebase
    .firestore()
    .collection("posts")
    .doc(postId)
    .onSnapshot((docSnapshot)=>{
        const data=docSnapshot.data();
        setPost(data);
    // .get()
    // .then((docSnapshot)=>{
    //     const data = docSnapshot.data();
    //     setPost(data);
    // });
    });
},[postId]);

//留言
React.useEffect(()=>{
    firebase
    .firestore()
    .collection('posts')
    .doc(postId)
    .collection('comments')
    .onSnapshot((collectionSnapshot)=>{
        const data =collectionSnapshot.docs.map((doc)=>{
            return   doc.data();
            
        });
        setComments(data);
    });
    
},[postId]);












//愛心
const postlike=(event)=>{
event.preventDefault();
firebase
    .firestore()
    .collection("posts")
    .doc(postId)
    .collection('likes')
    .add({
        collectedBy:postId
    });
    

}


React.useEffect(() => {
    let unsubscribe;
    if (postId) {
      unsubscribe = firebase.firestore()
        .collection("posts")
        .doc(postId)
        .collection("likes")
        .onSnapshot((snapshot) => {
          setLikes(snapshot.docs.map((doc) => doc.data()));
        });
    }

    return () => {
      unsubscribe();
    };
  }, [postId]);





function onSubmit(){
    const firestore=firebase.firestore();
    const batch = firestore.batch();
    const postRef=firestore.collection('posts').doc(postId)
    batch.update(postRef,{
        CommentContent:firebase.firestore.FieldValue.increment(1)
    })
    const commentRef=postRef.collection('comments').doc();
    batch.set(commentRef,{
        content:CommentContent,
        createdAt:firebase.firestore.Timestamp.now(),
        author:{
            uid: firebase.auth().currentUser.uid,
            displayName:firebase.auth().currentUser.displayName ||'',
            photoURL:firebase.auth().currentUser.photoURL||'',



        },
    });
    batch.commit().then(()=>{
        setCommentContent('');
    });

}












    return (
    <Container>
    <Grid>
        <Grid.Row>
            {/* <Grid.Column width={3}>
                <Topics/>
            </Grid.Column> */}
            <Grid.Column width={10}>
                {post.author.photoURL?(
                <Image src={post.author.photoURL}/>
                ) :(
                <Icon name="user circle"></Icon>
                )}{''}
                {post.author.displayName || '使用者'}
                <Header>
                    {post.title}
                    <Header.Subheader>
                        {post.topic}.{post.createdAt?.toDate().toLocaleDateString()}
                    </Header.Subheader>
                </Header>
                <Image src={post.imageUrl}/>
                <Segment basic vertical>{post.content}</Segment>
                <Segment basic vertical>
                 {likes.length}                                                 
{/* 愛心數量  */}                    
                    <Icon name="thumbs up outline" color="grey"
                    
                    link onClick={postlike}/>                               
                                                                                                            {/* <p>{likes.length} likes</p> */}
{/* 留言 */}
                </Segment>
                    <Comment.Group>
                        <Form reply value={CommentContent} 
                        onChange={(e)=>setCommentContent(e.target.value)}>
                            <Form.TextArea/>

                            
                        <Form.Button onClick={onSubmit}>留言</Form.Button>
                        </Form>
                        <Header>共{post.commentsCount}則</Header>
                        {comments.map((comment)=>{
                            return(
                                <Comment>
                                <Comment.Avatar src="https://cdn3.iconfinder.com/data/icons/mixed-communication-and-ui-pack-1/48/general_pack_NEW_glyph_profile-512.png"/>
                                <Comment.Content>
                                    <Comment.Author as="span">
                                        {comment.author.displayName||"使用者"}
                                    </Comment.Author>
                                        <Comment.Metadata>
                                            {comment.createdAt.toDate().toLocaleDateString()}
                                        </Comment.Metadata>
                                    <Comment.Text>{comment.content}</Comment.Text>
                                </Comment.Content>
                            </Comment>

                            );
                        })}
                   
                    </Comment.Group>
                    
            </Grid.Column>
            <Grid.Column width={3}></Grid.Column>
        </Grid.Row>

    </Grid>
    </Container>



    );

}





export default Post;


