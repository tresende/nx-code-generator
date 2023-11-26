import { joinPathFragments, Tree } from '@nx/devkit'

const GENERATOR_BASE_DIRECTORY = '/tools/page-generator/src/generators/page'

export const getSourceTemplateDirectory = (tree: Tree) => {
  return joinPathFragments(tree.root, GENERATOR_BASE_DIRECTORY, 'files')
}
