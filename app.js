const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const blogRoutes = require('./Routes/blogRoutes')
//create express app
const app = express();

//connect to mongodb
const dbURI = 'mongodb+srv://NabiGauda:nabi1410@b34s7-d3v-blog.vvbqt.mongodb.net/b34s7-d3v-blog?retryWrites=true&w=majority'
mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then((result) => app.listen(3000, () => console.log('server listening at port 3000..')))
    .catch((err) => console.log(err));
    
//set the template engine
app.set('view engine', 'ejs')

//use the middleware for static files
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))

//use third party middleware ad logger
app.use(morgan('dev'));


//routes
app.get('/', (req, res) => {
   res.redirect('/blogs');
})

app.get('/about', (req, res) => {
    res.render('about', { title : "About"});
})
//blog routes
app.use('/blogs', blogRoutes);


//404 page
app.use((req,res) => {
    res.status(404).render('404', { title : "404"});
})


