import fs from 'fs'
import { parse } from 'csv-parse'
import { inject, injectable } from 'tsyringe'

import { AppError } from '../../../../shared/errors/AppError'

import type { CategoriesRepositoryInterface } from '../../repositories/CategoriesRepositoryInterface'
import type { Category } from '../../entities/Category'

@injectable()
export class ImportCategoriesUseCase {
  constructor(
    @inject('CategoriesRepository')
    private categoriesRepository: CategoriesRepositoryInterface
  ) {}

  async execute(file?: Express.Multer.File) {
    if (!file) {
      throw new AppError('File not provided')
    }

    const newCategories: Category[] = []
    const stream = fs.createReadStream(file.path)
    const parseFile = parse()

    stream.pipe(parseFile)
    parseFile.on('data', async (line: string[]) => {
      const [name, description] = line

      const category = await this.categoriesRepository.findByName(name)

      if (!category) {
        const newCategory = await this.categoriesRepository.create({ name, description })
        newCategories.push(newCategory)
      }
    })

    await new Promise(resolve => parseFile.on('end', resolve))

    fs.unlink(file.path, error => {
      if (error) console.error(error)
    })

    return newCategories
  }
}
