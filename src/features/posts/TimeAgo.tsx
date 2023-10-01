import { parseISO, formatDistanceToNow } from "date-fns";

type timeAgoType = {
    timestamp: string
}

const TimeAgo = ({ timestamp }: timeAgoType) => {
    let timeAgo: string = '';

    const date = parseISO(timestamp)
    const timePeriod = formatDistanceToNow(date)

    timeAgo = `${timePeriod} ago`

    return (
        <span title={timestamp}>
            &nbsp; <i>{timeAgo}</i>
        </span>
    )
}

export default TimeAgo