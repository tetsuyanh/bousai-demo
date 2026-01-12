'use client';

import { FLOOD_DEPTH_COLORS } from '@/lib/map/map-config';

/**
 * 洪水深さの凡例コンポーネント
 * Legend component for flood depth colors
 */
export default function MapLegend() {
  return (
    <div className="absolute bottom-6 right-6 bg-white rounded-lg shadow-lg p-4 z-[1000] max-w-xs">
      <h3 className="text-lg font-bold mb-3 text-gray-800">
        洪水の深さ
      </h3>
      <div className="space-y-2">
        {FLOOD_DEPTH_COLORS.map((item) => (
          <div key={item.depth} className="flex items-center gap-3">
            <div
              className="w-8 h-8 rounded border border-gray-300 flex-shrink-0"
              style={{ backgroundColor: item.color }}
            />
            <div className="flex-1 min-w-0">
              <div className="font-medium text-sm text-gray-900">
                {item.depth}
              </div>
              <div className="text-xs text-gray-600">
                {item.description}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 pt-3 border-t border-gray-200">
        <p className="text-xs text-gray-500">
          色が濃いほど水が深くなります
        </p>
      </div>
    </div>
  );
}
