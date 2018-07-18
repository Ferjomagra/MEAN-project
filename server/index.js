//Se almacena en una constante por que de esa manera se puede reutilizar.
const express = require('express')
const morgan = require('morgan')//Nos ayuda aver lo que el usuario está solicitando

const cors = require('cors')

const app = express();


const {mongoose} = require('./database')

//Settings
app.set('port', process.env.PORT || 3000) //process.env.PORT. Esto hace que si existe un puerto en el sistema operativo, que lo tome.

//Middlewares
app.use(morgan('dev'))
app.use(express.json())
app.use(cors({origin: 'http://localhost:4200'}))

//Routes
app.use('/api/employees', require('./routes/employee.routes'))


//Starting the server
app.listen(app.get('port'), ()=>{
	console.log('Server on port ', app.get('port'))
})