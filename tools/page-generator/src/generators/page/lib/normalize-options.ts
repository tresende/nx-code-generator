import { normalizeBaseOptions } from '../../../lib'
import { NormalizedSchema, RawSchema } from '../types'

export const normalizeOptions = (rawSchema: RawSchema): NormalizedSchema => {
  const baseOptions = normalizeBaseOptions(rawSchema)

  return {
    ...rawSchema,
    ...baseOptions
  }
}
