const express = require('express')
const app = express()
const port = 5050
const cors = require('cors')

app.use(express.json())
app.use(cors())

app.get("/api",(req,res)=>{
    res.json(
        [{
            "id" : 1,
            "name": "Assorted Coffee",
            "url" : "https://upcdn.io/FW25bVF/raw/coffee-asorted-300x300.jpg",
            "price": 35,
            "star":3,
            "sale":false,
        },
        {
            "id" : 2,
            "name": "Cashew Butter",
            "url" : "https://upcdn.io/FW25bVF/raw/cashew-butter-500-300x300.jpg",
            "price": 25,
            "star":4,
            "sale":true,
        },
        {
            "id" : 3,
            "name": "Diabetic Cookies",
            "url": "https://upcdn.io/FW25bVF/raw/diabetic-cookies-300x300.jpg",
            "price": 25,
            "star":4,
            "sale":true,
        },
        {
            "id" : 4,
            "name": "Farm Fresh Eggs",
            "url": "https://upcdn.io/FW25bVF/raw/eggs-300x300.jpg",
            "price": 34,
            "star":5,
            "sale":false,
        },
        {
            "id" : 5,
            "name": "Fresh Orange Juice",
            "url": "https://upcdn.io/FW25bVF/raw/orage-juice-kariz-300x300.jpg",
            "price": 18,
            "star":2,
            "sale":false,
        },
        ])
})

app.listen(port,()=>{console.log(`Server is running on ${port}`)})