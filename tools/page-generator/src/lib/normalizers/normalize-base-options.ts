import { BaseNormalizedSchema, BaseRawSchema } from '../types'
import { normalizeProjectName, normalizeString } from '.'

export const normalizeBaseOptions = ({ moduleName }: BaseRawSchema): BaseNormalizedSchema => {
  const normalizedModuleName = normalizeString(moduleName)
  const normalizedProjectName = normalizeProjectName(normalizedModuleName)
  const pathToRoot = '../..'

  return {
    moduleName: normalizedModuleName,
    projectName: normalizedProjectName,
    pathToRoot
  }
}
