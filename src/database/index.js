import Sequelize from 'sequelize'
import User from '../app/models/User'
import configDatabase from '../config/database'

const models = [User]
class Database {
  constructor() {
    this.init()
  }

  init() {
    this.connection = new Sequelize('postgresql://postgres:G2IX2bmZuwoZJsDe5ISp@containers-us-west-13.railway.app:6379/railway')
    models.map((model) => model.init(this.connection))
  }
}

export default new Database()
