import Sequelize, { Model } from 'sequelize'

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        birthdate: Sequelize.DATEONLY,
        address: Sequelize.STRING,
        creditValue: Sequelize.FLOAT,
      },
      {
        sequelize,
      }
    )
  }
}
export default User
