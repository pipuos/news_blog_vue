import moment from 'moment'

export function formatDate(date: string, format: string = "DD.MM.YYYY") {
  return moment(date).format(format);
}
