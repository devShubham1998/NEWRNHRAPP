import { addMinutes, isValid, parse } from 'date-fns'
import format from 'date-fns/format'
import formatISO from 'date-fns/formatISO'

export const DATE_FORMAT_DASHES = 'yyyy-MM-dd'
export const DATE_FORMAT_DASHES_FIRST_DAY = 'dd-MMM-yyyy'
export const DATE_FORMAT_MONTH_WORD_TIME = 'dd MMM yyyy . HH:mm'
export const DATE_FORMAT_MONTH_WORD_TIME_SHORT = 'HH:mm,dd MMM yyyy'
export const DATE_FORMAT_MONTH_WORD = 'dd/MMM/yyyy'
export const DATE_FORMAT_NUMBER = 'dd/MM/yyyy'
export const TIME_FORMAT = 'HH:mm'
export const TIME_DATE_FORMAT = 'dd MMM yyyy, HH:mm'
export const MONTH_FIRST_FORMAT = 'MMMM, yyyy'
export const EVENT_DATE = 'dd MMMM yyyy'
export const DATE_FOLLOW_FORMAT_NUMBER = 'dd / MM / yyyy'

export default class Formatters {
  public static formatDateLong(dt: number | undefined): string {
    if (dt === undefined) {
      return ''
    }
    return format(dt, DATE_FORMAT_MONTH_WORD)
  }
  public static formatDateTimeLong(dt: number | undefined): string {
    if (dt === undefined) {
      return ''
    }
    return format(dt, DATE_FORMAT_MONTH_WORD_TIME)
  }

  public static formatDateTimeShort(dt: number | undefined): string {
    let date = new Date(dt)
    var hours = date.getHours()
    var minutes: any = date.getMinutes()
    var ampm = hours >= 12 ? 'PM' : 'AM'
    hours = hours % 12
    hours = hours ? hours : 12 // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes
    var strTime = hours + ':' + minutes + ' ' + ampm
    return strTime + ' , ' + Formatters.formatDateDashesFirstDay(date)
  }

  public static formatDateShort(dt: number | undefined): string {
    if (dt === undefined) {
      return ''
    }
    return format(dt, 'dd-MMM')
  }

  public static formatTime24hrs(dt: number) {
    if (dt === undefined || !isValid(dt)) {
      return ''
    }
    return format(dt, TIME_FORMAT)
  }

  public static formatDateNumbers(dt: number | undefined): string {
    if (dt === undefined) {
      return ''
    }
    return format(dt, DATE_FORMAT_NUMBER)
  }

  public static formatFollowUpDate(dt: number | undefined): string {
    if (dt === undefined) {
      return ''
    }
    return format(dt, DATE_FOLLOW_FORMAT_NUMBER)
  }

  public static formatUTC(dt: number | undefined): string {
    if (dt === undefined) {
      return ''
    }
    return formatISO(dt)
  }

  public static formatTime(date: Date) {
    return format(date, TIME_FORMAT)
  }
  public static formatDateTime(date: Date) {
    return format(date, TIME_DATE_FORMAT)
  }

  public static formatTimeUTC(date: Date) {
    return format(addMinutes(date, date.getTimezoneOffset()), TIME_FORMAT)
  }

  public static parseTime(time: string | undefined) {
    if (time === undefined) {
      return undefined
    }
    return parse(time, TIME_FORMAT, new Date())
  }

  public static parseDateTime(date: string) {
    return parse(date, 'yyyyMMddHHmm', new Date())
  }

  public static formatDateTimeApi(date: Date) {
    return format(date, 'yyyyMMddHHmm')
  }

  public static parseDate(date: string) {
    return parse(date, 'yyyyMMdd', new Date())
  }

  public static formatDateApi(date: Date) {
    return format(date, 'yyyyMMdd')
  }

  public static formatMonthFirst(date: Date) {
    return format(date, MONTH_FIRST_FORMAT)
  }

  public static formatEventDate(date: Date) {
    return format(date, EVENT_DATE)
  }

  public static formatDateDashes(date: Date) {
    return format(date, DATE_FORMAT_DASHES)
  }

  public static formatDateDashesFirstDay(date: Date | undefined) {
    if (date === undefined) {
      return ''
    }
    return format(date, DATE_FORMAT_DASHES_FIRST_DAY)
  }

  public static parseTimeInterval(time: string | undefined) {
    if (time === undefined) {
      return undefined
    }
    let formattedTime = time.split(':')[0] + 'hh' + time.split(':')[1] + 'mm'
    return formattedTime
  }
}

export const timeSince = (date: any) => {
  let minute = 60
  let hour = minute * 60
  let day = hour * 24
  let month = day * 30
  let year = day * 365

  let suffix = ' ago'

  let elapsed = Math.floor((Date.now() - date) / 1000)

  // if (elapsed < minute) {
  //   return minute
  // }

  // get an array in the form of [number, string]
  let a = (elapsed < hour && [Math.floor(elapsed / minute), 'minute']) ||
    (elapsed < day && [Math.floor(elapsed / hour), 'hour']) ||
    (elapsed < month && [Math.floor(elapsed / day), 'day']) ||
    (elapsed < year && [Math.floor(elapsed / month), 'month']) || [
      Math.floor(elapsed / year),
      'year',
    ]

  // pluralise and append suffix
  if (elapsed < day) {
    return Formatters.formatTime24hrs(date)
  } else {
    return a[0] + ' ' + a[1] + (a[0] === 1 ? '' : 's') + suffix
  }
}

export const timeSinceWithDate = (date: any) => {
  let minute = 60
  let hour = minute * 60
  let day = hour * 24
  let month = day * 30
  let year = day * 365

  let suffix = ' ago'

  let elapsed = Math.floor((Date.now() - date) / 1000)

  // if (elapsed < minute) {
  //   return minute
  // }

  // get an array in the form of [number, string]
  let a = (elapsed < hour && [Math.floor(elapsed / minute), 'minute']) ||
    (elapsed < day && [Math.floor(elapsed / hour), 'hour']) ||
    (elapsed < month && [Math.floor(elapsed / day), 'day']) ||
    (elapsed < year && [Math.floor(elapsed / month), 'month']) || [
      Math.floor(elapsed / year),
      'year',
    ]

  // pluralise and append suffix
  if (elapsed < day) {
    return Formatters.formatTime24hrs(date)
  } else {
    return Formatters.formatDateDashesFirstDay(date)
  }
}

export const getAge = (date: number) => {
  let minute = 60
  let hour = minute * 60
  let day = hour * 24
  let month = day * 30
  let year = day * 365

  let suffix = ' ago'

  let elapsed = Math.floor((Date.now() - date) / 1000)

  // if (elapsed < minute) {
  //   return minute
  // }

  // get an array in the form of [number, string]
  let a = (elapsed < hour && [Math.floor(elapsed / minute), 'minute']) ||
    (elapsed < day && [Math.floor(elapsed / hour), 'hour']) ||
    (elapsed < month && [Math.floor(elapsed / day), 'day']) ||
    (elapsed < year && [Math.floor(elapsed / month), 'month']) || [
      Math.floor(elapsed / year),
      'year',
    ]

  // pluralise and append suffix
  if (elapsed < day) {
    return Formatters.formatTime24hrs(date)
  } else {
    return a[0] + ' ' + a[1] + (a[0] === 1 ? '' : 's')
  }
}

export const date_to_webkit = (date_string: number) => {
  let epoch_start: any = new Date(1601, 0, 1)
  let date_: any = new Date(date_string)
  let diff = Math.abs(date_ - epoch_start) * 1000
  return diff
}

export var days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]
export var months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]
