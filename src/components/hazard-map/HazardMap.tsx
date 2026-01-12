'use client';

import { MapContainer, TileLayer, LayersControl } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import 'leaflet-defaulticon-compatibility';

import { HOFU_COORDINATES } from '@/lib/map/coordinates';
import { GSI_TILE_LAYERS } from '@/lib/map/tile-layers';
import MapLegend from './MapLegend';

/**
 * ハザードマップのメインコンポーネント
 * Main hazard map component with Leaflet integration
 */
export default function HazardMap() {
  return (
    <div className="w-full h-full relative">
      <MapContainer
        center={[HOFU_COORDINATES.lat, HOFU_COORDINATES.lng]}
        zoom={HOFU_COORDINATES.zoom}
        className="w-full h-full"
        zoomControl={true}
        scrollWheelZoom={true}
      >
        <LayersControl position="topright">
          <LayersControl.BaseLayer checked name="標準地図">
            <TileLayer
              url={GSI_TILE_LAYERS.base.standard.url}
              attribution={GSI_TILE_LAYERS.base.standard.attribution}
              maxZoom={GSI_TILE_LAYERS.base.standard.maxZoom}
            />
          </LayersControl.BaseLayer>

          <LayersControl.BaseLayer name="淡色地図">
            <TileLayer
              url={GSI_TILE_LAYERS.base.pale.url}
              attribution={GSI_TILE_LAYERS.base.pale.attribution}
              maxZoom={GSI_TILE_LAYERS.base.pale.maxZoom}
            />
          </LayersControl.BaseLayer>

          <LayersControl.Overlay checked name="洪水浸水想定区域（最大規模）">
            <TileLayer
              url={GSI_TILE_LAYERS.hazard.floodMaximum.url}
              attribution={GSI_TILE_LAYERS.hazard.floodMaximum.attribution}
              opacity={GSI_TILE_LAYERS.hazard.floodMaximum.opacity}
              maxZoom={GSI_TILE_LAYERS.hazard.floodMaximum.maxZoom}
            />
          </LayersControl.Overlay>

          <LayersControl.Overlay name="洪水浸水想定区域（計画規模）">
            <TileLayer
              url={GSI_TILE_LAYERS.hazard.floodPlanned.url}
              attribution={GSI_TILE_LAYERS.hazard.floodPlanned.attribution}
              opacity={GSI_TILE_LAYERS.hazard.floodPlanned.opacity}
              maxZoom={GSI_TILE_LAYERS.hazard.floodPlanned.maxZoom}
            />
          </LayersControl.Overlay>
        </LayersControl>

        <MapLegend />
      </MapContainer>
    </div>
  );
}
