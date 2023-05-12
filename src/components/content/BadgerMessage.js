import React from "react"
import { Button } from "react-bootstrap";

function BadgerMessage(props) {

    const dt = new Date(props.created);
    //only have delete button for the user who posted the message
    const deleteButton = props.poster === sessionStorage.getItem("username") 
        ? <Button variant="danger" onClick={deleteMessage}>Delete</Button> 
        : <></>;

    function deleteMessage(){
        props.handleDelete(props.id);
    }

    return <>
        <h2>{props.title}</h2>
        <sub>Posted on {dt.toLocaleDateString()} at {dt.toLocaleTimeString()}</sub>
        <br/><br/>
        <i>{props.poster}</i>
        <p>{props.content}</p>
        {deleteButton}
    </>
}

export default BadgerMessage;