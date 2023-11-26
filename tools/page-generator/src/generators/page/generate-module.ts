import { generateFiles, Tree } from '@nx/devkit'

import * as lib from '../../lib'
import { getSourceTemplateDirectory } from './lib/utils'
import { NormalizedSchema } from './types'
import { MODULES_DIRECTORY } from '../../lib/constants'

export const generateModule = (tree: Tree, options: NormalizedSchema) => {
  const sourceTemplateDirectory = getSourceTemplateDirectory(tree)

  generateFiles(tree, sourceTemplateDirectory, MODULES_DIRECTORY, {
    ...options,
    helpers: { ...lib }
  })
}
