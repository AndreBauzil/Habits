import dayjs from 'dayjs'

export function generateRangeDatesFromYearStart() {
  const startDate = dayjs().startOf('year')
  const endDate = new Date()

  const offset = (startDate.day()) % 7; 

  let dateRange = []
  let compareDate = startDate.subtract(offset, 'days')
1

  while (compareDate.isBefore(endDate)) {
    dateRange.push(compareDate.toDate())
    compareDate = compareDate.add(1, 'day')
  }

  return dateRange
}