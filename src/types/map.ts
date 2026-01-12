import type { LatLngExpression } from 'leaflet';

/**
 * 地図の座標型
 * Map coordinate type
 */
export interface Coordinates {
  lat: number;
  lng: number;
  zoom?: number;
}

/**
 * タイルレイヤーの設定型
 * Tile layer configuration type
 */
export interface TileLayerConfig {
  url: string;
  attribution: string;
  minZoom?: number;
  maxZoom: number;
  opacity?: number;
}

/**
 * 地図マーカーの型（将来の拡張用）
 * Map marker type (for future features)
 */
export interface MapMarker {
  id: string;
  position: LatLngExpression;
  label: string;
  type: 'home' | 'school' | 'shelter' | 'custom';
  createdAt: string;
}

/**
 * 避難所の型（将来の拡張用）
 * Evacuation shelter type (for future features)
 */
export interface Shelter {
  id: string;
  name: string;
  nameKanji: string;
  position: LatLngExpression;
  address: string;
  capacity?: number;
  facilities?: string[];
  floodSafe: boolean;
  earthquakeSafe: boolean;
  tsunamiSafe: boolean;
}

/**
 * 洪水深さの色分け型
 * Flood depth color definition type
 */
export interface FloodDepthColor {
  depth: string;
  color: string;
  description: string;
  rangeMin: number;
  rangeMax: number;
}
