const path = require('path')

const express = require("express");
const bodyParser = require('body-parser')

const app = express();

const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')

const rootDir = require('./util/path')

const PORT = 8080;

app.use(bodyParser.urlencoded({ extended: false}))

app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes)
app.use(shopRoutes);

app.use((req,res,next) => {
    res.status(404).sendFile(path.join(rootDir, 'views', 'page-not-found.html'))
})

app.listen(PORT, () => console.log(`Server running in port ${PORT}`));
