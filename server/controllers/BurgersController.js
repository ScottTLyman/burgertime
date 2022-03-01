
import { burgersService } from "../services/BurgersService";
import BaseController from "../utils/BaseController";
import { logger } from "../utils/Logger";

export class BurgersController extends BaseController {
  constructor() {
    super('api/burgers')
    this.router
      .post('', this.create)
      .get('', this.getAll)
      .delete('/:id', this.remove)
      .put('/:id', this.edit)
  }
  async edit(req, res, next) {
    try {
      logger.log(req.params.BurgerId)
      const message = await burgersService.edit(req.body)
    } catch (error) {
      next(error)
    }
  }
  async remove(req, res, next) {
    try {
      logger.log(req.params.id)
      const message = await burgersService.remove(req.params.id)
      return res.send(message)
    } catch (error) {
      next(error)
    }
  }
  async getAll(req, res, next) {
    try {
      const burgers = await burgersService.getAll()
      return res.send(burgers)
    } catch (error) {
      next(error)
    }
  }
  async create(req, res, next) {
    try {
      const burger = await burgersService.create(req.body)
      return res.send(burger)
    } catch (error) {
      next(error)
    }
  }

}