import { CategoriesRepository } from '../repositories/implementations/CategoriesRepository'
import { SpecificationsRepository } from '../repositories/implementations/SpecificationsRepository'

import { CreateCategoryController, CreateCategoryUseCase } from './createCategory'
import { CreateSpecificationController, CreateSpecificationUseCase } from './createSpecification'
import { DeleteCategoryController, DeleteCategoryUseCase } from './deleteCategory'
import { DeleteSpecificationController, DeleteSpecificationUseCase } from './deleteSpecification'
import { FindAllCategoriesController, FindAllCategoriesUseCase } from './findAllCategories'
import {
  FindAllSpecificationsController,
  FindAllSpecificationsUseCase
} from './findAllSpecifications'
import { FindCategoryController, FindCategoryUseCase } from './findCategory'
import { FindSpecificationController, FindSpecificationUseCase } from './findSpecification'
import { ImportCategoriesController, ImportCategoriesUseCase } from './importCategories'
import { UpdateCategoryController, UpdateCategoryUseCase } from './updateCategory'
import { UpdateSpecificationController, UpdateSpecificationUseCase } from './updateSpecification'

const categoriesRepository = CategoriesRepository.getInstance()
const specificationsRepository = SpecificationsRepository.getInstance()

const createCategoryUseCase = new CreateCategoryUseCase(categoriesRepository)
const importCategoriesUseCase = new ImportCategoriesUseCase(categoriesRepository)
const findAllCategoriesUseCase = new FindAllCategoriesUseCase(categoriesRepository)
const findCategoryUseCase = new FindCategoryUseCase(categoriesRepository)
const updateCategoryUseCase = new UpdateCategoryUseCase(categoriesRepository)
const deleteCategoryUseCase = new DeleteCategoryUseCase(categoriesRepository)

const createCategoryController = new CreateCategoryController(createCategoryUseCase)
const importCategoriesController = new ImportCategoriesController(importCategoriesUseCase)
const findAllCategoriesController = new FindAllCategoriesController(findAllCategoriesUseCase)
const findCategoryController = new FindCategoryController(findCategoryUseCase)
const updateCategoryController = new UpdateCategoryController(updateCategoryUseCase)
const deleteCategoryController = new DeleteCategoryController(deleteCategoryUseCase)

const createSpecificationUseCase = new CreateSpecificationUseCase(specificationsRepository)
const findAllSpecificationsUseCase = new FindAllSpecificationsUseCase(specificationsRepository)
const findSpecificationUseCase = new FindSpecificationUseCase(specificationsRepository)
const updateSpecificationUseCase = new UpdateSpecificationUseCase(specificationsRepository)
const deleteSpecificationUseCase = new DeleteSpecificationUseCase(specificationsRepository)

const createSpecificationController = new CreateSpecificationController(createSpecificationUseCase)
const findAllSpecificationsController = new FindAllSpecificationsController(
  findAllSpecificationsUseCase
)
const findSpecificationController = new FindSpecificationController(findSpecificationUseCase)
const updateSpecificationController = new UpdateSpecificationController(updateSpecificationUseCase)
const deleteSpecificationController = new DeleteSpecificationController(deleteSpecificationUseCase)

export {
  createCategoryController,
  importCategoriesController,
  findAllCategoriesController,
  findCategoryController,
  updateCategoryController,
  deleteCategoryController,
  createSpecificationController,
  findAllSpecificationsController,
  findSpecificationController,
  updateSpecificationController,
  deleteSpecificationController
}
