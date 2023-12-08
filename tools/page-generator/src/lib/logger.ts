import { logger } from '@nx/devkit'

export const printSuccessfullyCreatedModuleMessage = (}) => {
  logger.info('\n🍪 Successfully created module!\n')
  logger.log(`🐨 💬 Before starting to create new features:\n`)
  logger.log(`    🍎 run "yarn lint --fix"`)
  logger.log(`    🍰 Create a merge request with a generated code using "yarn commit"\n`)
}
