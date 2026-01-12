/**
 * 防府市の地理座標
 * Hofu City, Yamaguchi Prefecture coordinates
 */
export const HOFU_COORDINATES = {
  lat: 34.0500,
  lng: 131.5667,
  zoom: 13,
} as const;

/**
 * 地図の表示範囲
 * Map bounds for reasonable zoom area
 */
export const MAP_BOUNDS = {
  minZoom: 10,
  maxZoom: 17,
} as const;
