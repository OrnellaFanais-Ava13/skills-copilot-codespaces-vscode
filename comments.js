// Create web server 
// Create a post route that takes in a comment and adds it to the comments array
// Create a get route that returns the list of comments
// Create a delete route that deletes a comment by id
// Create a put route that updates a comment by id

// Import express
const express = require('express');
// Create a new express app
const app = express();
// Set the port
const port = 5000;

// Middleware
app.use(express.json());

// Comments array
let comments = [];

// Routes
app.post('/comments', (req, res) => {
    const comment = req.body.comment;
    comments.push(comment);
    res.json({ comment: comment });
});

app.get('/comments', (req, res) => {
    res.json({ comments: comments });
});

app.delete('/comments/:id', (req, res) => {
    const id = req.params.id;
    comments = comments.filter((comment, index) => {
        return index != id;
    });
    res.json({ comments: comments });
});

app.put('/comments/:id', (req, res) => {
    const id = req.params.id;
    const comment = req.body.comment;
    comments[id] = comment;
    res.json({ comments: comments });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

// curl -X POST -H "Content-Type: application/json" -d "{\"comment\":\"This is a comment\"}" http://localhost:5000/comments
// curl -X GET http://localhost:5000/comments
// curl -X DELETE http://localhost:5000/comments/0
// curl -X PUT -H "Content-Type: application/json" -d "{\"comment\":\"This is an updated comment\"}" http://localhost:5000/comments/0