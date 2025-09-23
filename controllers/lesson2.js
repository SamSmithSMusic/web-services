import {client} from "../db/connections.js";

const contacts = async (req,res) => {
    try {
        await client.connect();
    } catch (error) {
        console.log(error);
        res.status(500).send("Error connecting to database");
        return;
    }
    
    let allContacts;
    if (req.params.id) {
        allContacts = await client.db("webService").collection("contacts").find({fname: req.params.id}).toArray();
    }
    else {
        allContacts = await client.db("webService").collection("contacts").find().toArray();
    }
    console.log(allContacts);
    const pretty = [];
    allContacts.forEach(contact => {
        pretty.push(`${contact.fname} ${contact.lname}`)
    });
    console.log(pretty);
    res.send(pretty.toString());
};

export default {contacts}