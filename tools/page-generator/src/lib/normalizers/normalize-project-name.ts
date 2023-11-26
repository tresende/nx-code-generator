import { joinPathFragments } from '@nx/devkit'
import { MODULES_DIRECTORY } from '../constants'
import { normalizeString } from './normalize-string'

export const normalizeProjectName = (moduleName: string) => {
  const normalizedModuleName = normalizeString(moduleName)
  return joinPathFragments(MODULES_DIRECTORY, normalizedModuleName)
}
