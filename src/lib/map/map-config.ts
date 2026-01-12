import type { MapOptions } from 'leaflet';
import { HOFU_COORDINATES, MAP_BOUNDS } from './coordinates';

/**
 * Leafletマップのデフォルト設定
 * Default configuration for Leaflet map
 */
export const DEFAULT_MAP_CONFIG: Partial<MapOptions> = {
  center: [HOFU_COORDINATES.lat, HOFU_COORDINATES.lng],
  zoom: HOFU_COORDINATES.zoom,
  minZoom: MAP_BOUNDS.minZoom,
  maxZoom: MAP_BOUNDS.maxZoom,
  zoomControl: true,
  scrollWheelZoom: true,
  doubleClickZoom: true,
  touchZoom: true,
  dragging: true,
};

/**
 * 洪水深さの色分け定義
 * Flood depth color definitions
 */
export const FLOOD_DEPTH_COLORS = [
  {
    depth: '0.5m未満',
    color: '#FFFFCC',
    description: 'ひざまで',
    rangeMin: 0,
    rangeMax: 0.5,
  },
  {
    depth: '0.5～3m',
    color: '#FFE0B2',
    description: 'おとなの胸まで',
    rangeMin: 0.5,
    rangeMax: 3,
  },
  {
    depth: '3～5m',
    color: '#FFA726',
    description: '2階まで',
    rangeMin: 3,
    rangeMax: 5,
  },
  {
    depth: '5～10m',
    color: '#EF5350',
    description: 'ビルの2-3階まで',
    rangeMin: 5,
    rangeMax: 10,
  },
  {
    depth: '10m以上',
    color: '#C62828',
    description: 'ビルの3階以上',
    rangeMin: 10,
    rangeMax: Infinity,
  },
] as const;
