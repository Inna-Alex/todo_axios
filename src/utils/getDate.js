import { format } from 'date-fns';
import * as Consts from '../utils/consts'

export const getFormatDate = (date) =>
  date ? format(date, Consts.DateFormat) : ''