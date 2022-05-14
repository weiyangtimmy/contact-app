import React, { useState } from "react";
import "./App.css";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";


function App() {
    //const contacts = [
    //    {
    //        id: "1",
    //        "name": "Dipesh",
    //        "email": "malvia@gmail.com",
    //    },
    //    {
    //        id: "2",
    //        "name": "nikesh",
    //        "email": "nicks@gmail.com",
    //    }

    //];
    const [contacts, setContacts] = useState([]);
    const addContactHandler = (contact) => {
        console.log
    }
    return (
        <div className="ui container" s>
            <Header />
            <AddContact addContactHandler={addContactHandler}/>
            <ContactList contacts={contacts} />
        </div>

    );
}

export default App;
