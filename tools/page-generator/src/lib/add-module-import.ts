import { applyChangesToString, ChangeType, Tree } from '@nx/devkit'
import { ensureTypescript } from '@nx/js/src/utils/typescript/ensure-typescript'

import { BaseNormalizedSchema } from './types'
import { Identifier, isArrayLiteralExpression, isIdentifier, isVariableStatement, SourceFile } from 'typescript'

const ROUTE_FILE_PATH = `apps/web/src/app/routes.tsx`
const ROUTE_EXPORT_TOKEN = 'routes'

const tsModule = ensureTypescript()

function getFileContent(tree: Tree, path: string) {
  const contents = tree.read(path, 'utf-8')
  if (!contents) throw new Error(`Cannot read ${path}`)
  return contents
}

function getSourceFile(tree: Tree, path: string) {
  const contents = getFileContent(tree, path)
  const { createSourceFile, ScriptTarget } = tsModule
  return createSourceFile(path, contents, ScriptTarget.ESNext)
}

function getRouteArrayExpression(sourceFile: SourceFile) {
  const { declarationList } = sourceFile.statements.find(isVariableStatement)
  const { declarations } = declarationList
  //export default nao funcionaria
  const declaration = declarations.find(({ name }) => isIdentifier(name) && name.escapedText === ROUTE_EXPORT_TOKEN)
  if (!isArrayLiteralExpression(declaration.initializer)) {
    throw new Error(`Expected ${ROUTE_EXPORT_TOKEN} to be an array literal expression`)
  }

  return declaration.initializer
}

function getLatestRouteIdentifier(sourceFile: SourceFile) {
  const sourceFileImportDeclarations = sourceFile.statements.filter(tsModule.isImportDeclaration)
  return sourceFileImportDeclarations[sourceFileImportDeclarations.length - 1]
}

export const addModuleImport = (tree: Tree, { moduleName }: BaseNormalizedSchema) => {
  const moduleRouteImportAlias = `${moduleName}Route`
  const importStatement = `\nimport { route as ${moduleRouteImportAlias} } from '@nx-code-generator/${moduleName}'`

  const contents = getFileContent(tree, ROUTE_FILE_PATH)
  const sourceFile = getSourceFile(tree, ROUTE_FILE_PATH)
  const sourceFileImportDeclarations = getLatestRouteIdentifier(sourceFile)
  const routeArray = getRouteArrayExpression(sourceFile)

  const changes = applyChangesToString(contents, [
    {
      type: ChangeType.Insert,
      index: sourceFileImportDeclarations.getEnd(),
      text: importStatement
    },
    {
      type: ChangeType.Insert,
      index: routeArray.elements.end,
      text: `, ${moduleRouteImportAlias}`
    }
  ])

  tree.write(ROUTE_FILE_PATH, changes)
}
