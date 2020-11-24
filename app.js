// require packages used in the project
const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')

// require express-handlebars here
const exphbs = require('express-handlebars')

// 載入同層的JS檔
const gTrashTalk = require('./generate_trashTalk.js')

// 引入Jason檔案
// const movieList = require('./movies.json')

// 為了要使用register helper而引入
const handlebars = require('handlebars')

// setting template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// setting static files 設定 Express 路由以提供靜態檔案(就是讓CSS或者是JS可以使用)
app.use(express.static('public'))

// setting body-parser
app.use(bodyParser.urlencoded({ extended: true }))

// register helper
handlebars.registerHelper('ifEqual', function (job, targetJob, options) {
  if (job === targetJob) {
    return options.fn(this)
  }
  return options.inverse(this)
})

// =========== routes setting Start ===========
// 進入index頁面
app.get('/', (req, res) => {
  res.render('index')
})
// 接收表單資訊
app.post('/submit', (req, res) => {
  let choice = req.body.trashTalk
  if (choice === undefined) {
    choice = 0
  }
  const gT = gTrashTalk(choice)
  res.render('index', { gT: gT, choice: choice })
})
// =========== routes setting End ===========

// start and listen on the Express server
app.listen(port, () => {
  console.log(`Express is listening on localhost:${port}`)
})