import { Tree } from '@nx/devkit'
import { Linter } from '@nx/linter'
import { libraryGenerator } from '@nx/react'

import { BaseNormalizedSchema } from './types'

export const generateLibrary = async (tree: Tree, options: BaseNormalizedSchema) => {
  const { moduleName } = options

  await libraryGenerator(tree, {
    name: moduleName,
    linter: Linter.None,
    style: 'none',
    skipPackageJson: true,
    minimal: true,
    unitTestRunner: 'none'
  })
}
