import React, { useEffect, useState } from "react"
import { Form, Button } from "react-bootstrap";
import BadgerMessage from "./BadgerMessage";

export default function BadgerChatroom(props) {

    const [messages, setMessages] = useState([]);
    //if we have a username we are logged in
    const [loggedIn, setLoggedIn] = useState(sessionStorage.getItem("username") !== null);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const handleTitle = (e) => { setTitle(e.target.value) };
    const handleContent = (e) => { setContent(e.target.value) };

    const handlePost = () => {
        if(title === "" || content === ""){
            alert("You must provide both a title and content!");
            return;
        }

        fetch(`https://www.cs571.org/s23/hw6/api/chatroom/${props.name}/messages`, {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
                "X-CS571-ID": "bid_eed459b5d77db851f7b6"
            },
            body:
                JSON.stringify({
                    title: title,
                    content: content
                })
                
        }).then(res => {
            if (res.status === 200){
                loadMessages();
                alert("Successfully posted!");  
            }
        });
    };


    function handleDelete(id){
        fetch(`https://www.cs571.org/s23/hw6/api/chatroom/${props.name}/messages/${id}`, {
            method: 'DELETE',
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
                "X-CS571-ID": "bid_eed459b5d77db851f7b6"
            }
        }).then(res => {
            if(res.status === 200){
                loadMessages();
                alert("Successfully deleted the post!");
            }
        });
    }

    const loadMessages = () => {
        fetch(`https://cs571.org/s23/hw6/api/chatroom/${props.name}/messages`, {
            headers: {
                "X-CS571-ID": "bid_eed459b5d77db851f7b6"
            }
        }).then(res => res.json()).then(json => {
            setMessages(json.messages);
        })
    };

    useEffect(() => {
        loadMessages();
        console.log(messages);
    }, [props]);

    return <>
        <h1>{props.name} Chatroom</h1>
        {
            loggedIn ?
            <>
               <Form.Label htmlFor="postTitle">Post title</Form.Label>
                <Form.Control id="postTitle" onChange={handleTitle} />
                <Form.Label htmlFor="postContent">Post content</Form.Label>
                <Form.Control id="postContent" onChange={handleContent} />
                <br></br>
                <Button variant="primary" type="submit" onClick={handlePost}>Post</Button>
            </>
            :
            <>
                <p>You must be logged in to post!</p>
            </>
        }
        <hr/>
        {
            messages.length > 0 ?
                <>
                    {
                        messages.map(message => <BadgerMessage poster={message.poster} title={message.title} created={message.created} content={message.content} key={message.id} id={message.id} handleDelete={handleDelete}/>)
                    }
                </>
                :
                <>
                    <p>There are no messages in this chatroom yet!</p>
                </>
        }
    </>
}