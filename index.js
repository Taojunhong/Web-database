const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('<h1>Hello World!</h1><br><br><div style="background-color:red;width:400px;height:400px;">江西软件职业技术大学</div>'))


app.listen(port, () => console.log(`Example app listening on port ${port}!`))