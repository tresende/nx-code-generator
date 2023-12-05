import { logger } from '@nx/devkit'

type PrintSuccessfullyCreatedModuleMessageProps = {
  withModulePermissionsMessage?: boolean
}

export const printSuccessfullyCreatedModuleMessage = ({
  withModulePermissionsMessage
}: PrintSuccessfullyCreatedModuleMessageProps = {}) => {
  logger.info('\n🍪 Successfully created module!\n')
  logger.log(`🐨 💬 Before starting to create new features:\n`)
  logger.log(`    🍎 run "yarn lint --fix"`)
  if (withModulePermissionsMessage) {
    logger.log(`    🥓 Change module permissions`)
  }
  logger.log(`    🍰 Create a merge request with a generated code using "yarn commit"\n`)
}
