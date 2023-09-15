'use client'

import { useEffect, useState } from 'react'

import moment from 'moment'

// Because of the hydration error, custom hook is created to format the date
// See: https://stackoverflow.com/a/73006128
const useFormattedDate = (date: Date) => {
  const [formattedDate, setFormattedDate] = useState<string | null>(null)

  useEffect(
    () => setFormattedDate(moment(date).format('DD.MM.YYYY HH:mm')),
    [date]
  )

  return formattedDate
}

export default useFormattedDate
