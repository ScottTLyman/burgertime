import { dbContext } from "../db/DbContext"
import { BadRequest } from "../utils/Errors"
import { logger } from "../utils/Logger"

class BurgersService {
  async edit(body) {
    const index = dbContext.Burgers.findIndex(b => b.id.toString() === body)
    if (index === -1) {
      throw new BadRequest('Edit which burger now?')
    } dbContext.Burgers.splice(index, 1)
    dbContext.Burgers = dbContext.Burgers
    return 'Burger Modified'
  }
  async getAll() {
    const burgers = await dbContext.Burgers
    return burgers
  }
  remove(burgerId) {
    logger.log('burgerId form user', typeof burgerId)
    const index = dbContext.Burgers.findIndex(b => b.id.toString() === burgerId)
    if (index === -1) {
      throw new BadRequest('No Burgers at that id')
    }
    dbContext.Burgers.splice(index, 1)
    return 'Burger trashed!'
  }
  async create(body) {
    const burger = await dbContext.Burgers.push(body)
    return body
  }
}
export const burgersService = new BurgersService