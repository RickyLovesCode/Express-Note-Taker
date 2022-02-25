const express = require('express');
const PORT = process.env.PORT || 3002;
const app = express();

// transmit 'html/css/js' middleware
app.use(express.static('public'));

//parse any incoming string or array
app.use(express.urlencoded({ extended: true }));
//parse incoming JSON data
app.use(express.json());

const notesApiRoutes = require("./routes/apiRoutes/notesApi");
const indexRoutes = require("./routes/hmtlRoutes/index");
const notesRoutes = require("./routes/hmtlRoutes/notes");

app.use("/api", notesApiRoutes);
app.use('/', notesRoutes);
app.use("/", indexRoutes);

app.listen(PORT, () => {
    console.log(`API server is now on port ${PORT}!`);
});

