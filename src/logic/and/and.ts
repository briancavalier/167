import { And } from './types'
import { curry2 } from '../../function/curry/curry2'

export const and: And = curry2((a: boolean, b: boolean): boolean => a && b ? true : false) as And
