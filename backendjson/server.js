import jsonServer from 'json-server'
import fs from 'fs'
import path from 'path'

const server = jsonServer.create()
const __dirname = path.resolve();
// const db = JSON.parse(fs.readFileSync(path.join(__dirname, 'data.json')))
const router = jsonServer.router(path.join(__dirname, 'data.json'))
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(router)
server.listen(1000, () => {
  console.log('JSON Server is running')
})