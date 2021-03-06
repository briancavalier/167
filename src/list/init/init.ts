import { InitArity1 } from './types'
import { dropLast } from '../dropLast'

/**
 * Returns all but the last element of the given list or string.
 */
export const init: InitArity1 = dropLast(1)
