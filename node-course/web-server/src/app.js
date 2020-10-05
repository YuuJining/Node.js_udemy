const path = require('path')
const express = require('express')

const app = express()

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewPath = path.join(__dirname, '../templates')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewPath)
app.use(express.static(publicDirectoryPath))

// Setup static directory to serve
app.get('', (req,res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Yujin Lee'
    })
})

app.get('/about', (req,res) => {
    res.render('about', {
        title: 'About Me',
        name: 'Yujin Lee'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        helpText: 'This is some helpful text.'
    })
})

app.get('/weather', (req, res) => {
    res.send({
        forcast: 'It is snowing',
        location: 'Incheon'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})