export function formatDateString(date: Date) {
    const formatDate = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`

    return formatDate
}