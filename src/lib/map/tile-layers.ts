/**
 * 国土地理院の地図タイルレイヤー設定
 * GSI (Geospatial Information Authority of Japan) tile layer configurations
 */

export const GSI_TILE_LAYERS = {
  /**
   * 基盤地図
   * Base map layers
   */
  base: {
    standard: {
      url: 'https://cyberjapandata.gsi.go.jp/xyz/std/{z}/{x}/{y}.png',
      attribution: '<a href="https://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>',
      maxZoom: 18,
    },
    pale: {
      url: 'https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png',
      attribution: '<a href="https://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>',
      maxZoom: 18,
    },
  },

  /**
   * ハザードマップレイヤー
   * Hazard map overlay layers
   */
  hazard: {
    /**
     * 洪水浸水想定区域（想定最大規模）
     * Flood inundation zones (maximum expected scale)
     */
    floodMaximum: {
      url: 'https://disaportaldata.gsi.go.jp/raster/01_flood_l2_shinsuishin_data/{z}/{x}/{y}.png',
      attribution: '<a href="https://disaportal.gsi.go.jp/" target="_blank">ハザードマップポータルサイト</a>',
      minZoom: 2,
      maxZoom: 17,
      opacity: 0.7,
    },

    /**
     * 洪水浸水想定区域（計画規模）
     * Flood inundation zones (planned scale)
     */
    floodPlanned: {
      url: 'https://disaportaldata.gsi.go.jp/raster/01_flood_l1_shinsuishin_newlegend_data/{z}/{x}/{y}.png',
      attribution: '<a href="https://disaportal.gsi.go.jp/" target="_blank">ハザードマップポータルサイト</a>',
      minZoom: 2,
      maxZoom: 17,
      opacity: 0.7,
    },

    /**
     * 浸水継続時間
     * Water submersion duration
     */
    floodDuration: {
      url: 'https://disaportaldata.gsi.go.jp/raster/01_flood_l2_keizoku_data/{z}/{x}/{y}.png',
      attribution: '<a href="https://disaportal.gsi.go.jp/" target="_blank">ハザードマップポータルサイト</a>',
      minZoom: 2,
      maxZoom: 17,
      opacity: 0.7,
    },
  },
} as const;

export type TileLayerConfig = {
  url: string;
  attribution: string;
  minZoom?: number;
  maxZoom: number;
  opacity?: number;
};
