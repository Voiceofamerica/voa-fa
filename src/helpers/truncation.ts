export function truncateTitleText (title: string, hasIcon: boolean) {
  if (title.length > 24 || (title.length === 24 && hasIcon)) {
    const truncateLength = hasIcon ? 22 : 23
    title = title.slice(0, truncateLength) + '…'
  }
  return title
}
