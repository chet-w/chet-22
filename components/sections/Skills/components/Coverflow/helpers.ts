/**
 * Determines the distance that the Coverflow component should
 * be moved across (left or right) such that the item at the `activeIndex`
 * is centered.
 *
 * @param {number} activeIndex Index of the currently active item.
 * @param {number} length Number of items in the list.
 * @returns The distance in pixels that Coverflow should be moved along the x axis.
 */
export function determineOffsetDistance(
  activeIndex: number,
  length: number
): number {
  return (activeIndex - determineCenterOfList(length)) * -200;
}

/**
 * Given a lists length, returns the center index (rounded up).
 *
 * @param {number} length Lenght of the list
 * @returns The center index (rounded up).
 */
export function determineCenterOfList(length: number): number {
  return Math.ceil(length / 2) - 1;
}

/**
 * Determines which index in the Coverflow should be the activated based
 * on how far along the Coverflow has beens scrolled.
 *
 * @param {number} length Length of the list of items.
 * @param {number} scrollPercentage How far long (between 0 and 100) the Coverflow has been scrolled.
 * @returns Which index should be active.
 */
export function determineActiveIndex(
  length: number,
  scrollPercentage: number
): number {
  const index = Math.ceil(length * scrollPercentage) - 1;
  return index > -1 ? index : 0;
}
