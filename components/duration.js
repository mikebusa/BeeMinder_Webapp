import { parseISO, format } from 'duration-fns'

export default function Duration({ timeString }) {
  const time = parseISO(timeString)
  return <time dateTime={timeString}>{format(time, 'h:m:s')}</time>
}


