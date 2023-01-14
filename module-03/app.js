const path = require('path')

const express = require("express");
const bodyParser = require('body-parser')

const app = express();

// reserve keyboard for setting up the template engines
app.set('view engine', 'pug')
app.set('views', 'views')

const adminData = require('./routes/admin')
const shopRoutes = require('./routes/shop')

const rootDir = require('./util/path')

const PORT = 8080;

app.use(bodyParser.urlencoded({ extended: false}))

app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes)
app.use(shopRoutes);

app.use((req,res,next) => {
    res.status(404).render('404', { docTitle: 'Page not Found'})
})

app.listen(PORT, () => console.log(`Server running in port ${PORT}`));
