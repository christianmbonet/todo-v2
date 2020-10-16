// server.js



/**
 * Required External Modules
 */

const express = require("express");
const path = require("path");

/**
 * App Variables
 */

 const app = express();
 const port = process.env.PORT || "8000"

/**
 *  App Configuration
 */

app.use(express.json())



/**
 * Routes Definitions
 */

app.get("/", (req, res) => {
    res.status(200).send
    ("TO DO App");
});

// this route will return all the existing To Do items

const items = [];
let id = 0;


app.get("/api/items", (req, res, next) => {
    res.json(items);
});

app.post("/api/items", (req, res, next) => {
    console.log(req.body)
    if (req.body.item) 
    {
        id = id + 1;
        const newItem = {
            id: id,
            item: req.body.item,
            completed: false
        };
        items.push(newItem);
        res.json(newItem);
    } else {
        res.status(400).json({
            error: "item needs a description"
        });
    }
});

// this route will edit the item (or complete the list item)

app.patch("/api/items/:id", (req, res, next) => {
    console.log(req);
    // get paramater id
    const itemID = Number(req.params.id);
    // we will have to go through the items array
    // and we find the particular item with the ID
    // we are looking for

    const itemToComplete = items.find((item) => item.id === itemID);

    // if we find the item with the item id...

    if(itemToComplete){
        const indexOfItemToComplete = items.indexOf(itemToComplete);
        itemToComplete.completed = !itemToComplete.completed
        items.splice(indexOfItemToComplete, 1, itemToComplete)
    // do something...
    // we will need to edit the item with the thing
    // that was in the req body 
        res.json(itemToComplete);
    // return the json of the item to complete
    } else {
        res.status(404).json({
        error: "item not found"
    }); 
}
    // if not, return a HTTP 404 not found
});

/**
 * Server Activation
 */

 app.listen(port, () => {
     console.log(`Lisening to requests on htto://localhost:${port}`);
 });