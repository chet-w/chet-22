/**
 * Given a length of a list, determines which index is the center
 * point (rounded up) of the list.
 *
 * @param {number} length Length of the list.
 * @throws A standard error if the length is 0 or falsy.
 * @returns The center index of the list.
 */
export function determineCenterOfList(length: number): number {
  if (!length) {
    throw new Error(`A list with length ${length} can't have a center`);
  }
  return Math.ceil((length - 1) / 2);
}

/**
 * Determines the `level` of an item at a given index with respect to the
 * center of the list. The `level` denotes how many items way from the
 * center of the list the provided index is.
 *
 * @param {number} index The index to get the `level` for.
 * @param {number} centerOfList Index of the center of the list
 * @returns The level of the item at the provided index.
 * It will be negative if the index is less than the center of the list, and positive otherwise.
 */
export function determineLevel(index: number, centerOfList: number): number {
  const baseLevel = 0;
  const distanceFromCenter = centerOfList - index;
  return baseLevel - distanceFromCenter;
}

/**
 * Gets the base rotation value of an Item given its `index` and the index center of the list.
 * Unless the index is that of the center of the list, it will be `45`. Otherwise `1` to imply
 * no rotation value.
 *
 * @param {number} index The index of the item to get the rotation for.
 * @param {number} center The index of the center of the list.
 * @returns `1` if the index if the center of the list, otherwise `45`.
 */
export function determineBaseRotation(index: number, center: number): number {
  return index == center ? 1 : 45;
}

/**
 * Gets the rotation value of an item, given its level and the base level of rotation.
 *
 * @param {number} level The level of the Item to determine rotation for.
 * @param {number} base The base rotation value to use for the calculation. This often varies
 * between items of different levels.
 * @returns `0` if there level is `0` (center of the list), otherwise the rotation value in degrees for the
 * relevant item. It will be negative for negative levels, and positive for positive ones.
 */
export function determineAbsoluteRotation(level: number, base: number): number {
  if (!level) {
    return 0;
  }
  return base * (level / Math.abs(level));
}

/**
 * Gets the amount of distance an item at a given level should be moves visually.
 *
 * @param {number} level Level of the item to determine translation for.
 * @returns A translation amount in pixels. Negative for positive levels, positive for negative levels.
 */
export function determineAbsoluteTranslation(level: number): number {
  return -1 * level * 100;
}

/**
 * Gets the amount an item at a given level should be scaled down.
 *
 * @param {number} level Level of the item to determine scale for.
 * @returns A number between 0 and 1 to show how much the Item should be scaled down - 1 being no scale, 0 being super small.
 */
export function determineScale(level: number): number {
  return 1 - Math.abs(level) * 0.1;
}

/**
 * Gets the z-index value for an item at a given level to form a stacked effect.
 *
 * @param {number} level Level of the item to determine z-index for.
 * @returns A number to represent the z-index for the item.
 */
export function determineZIndex(level: number): number {
  return 500 - Math.abs(level);
}
