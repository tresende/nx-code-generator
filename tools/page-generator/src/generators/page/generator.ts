import { formatFiles, Tree } from '@nx/devkit'

import { addModuleImport, generateLibrary, printSuccessfullyCreatedModuleMessage } from '../../lib'
import { generateModule } from './generate-module'
import { normalizeOptions } from './lib/normalize-options'
import { RawSchema } from './types'

export default async (tree: Tree, options: RawSchema) => {
  const normalizedOptions = normalizeOptions(options)

  await generateLibrary(tree, normalizedOptions)
  await generateModule(tree, normalizedOptions)

  addModuleImport(tree, normalizedOptions)

  await formatFiles(tree)
  printSuccessfullyCreatedModuleMessage()
}
