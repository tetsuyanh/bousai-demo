'use client';

import dynamic from 'next/dynamic';
import { useMemo } from 'react';
import LoadingMap from '@/components/hazard-map/LoadingMap';
import ErrorBoundary from '@/components/common/ErrorBoundary';
import Link from 'next/link';

/**
 * ハザードマップページ
 * Hazard map page for Hofu City flood zones
 */
export default function HazardMapPage() {
  // Leafletは動的インポートで読み込む（SSR回避のため）
  // Dynamically import to avoid SSR issues with Leaflet
  const HazardMap = useMemo(
    () =>
      dynamic(() => import('@/components/hazard-map/HazardMap'), {
        loading: () => <LoadingMap />,
        ssr: false,
      }),
    []
  );

  return (
    <div className="min-h-screen flex flex-col">
      {/* ヘッダー */}
      <header className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 shadow-lg">
        <div className="max-w-7xl mx-auto">
          <Link
            href="/"
            className="inline-block mb-4 text-white hover:text-blue-100 transition-colors"
          >
            ← ホームに戻る
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            防府市 洪水ハザードマップ
          </h1>
          <p className="text-lg md:text-xl text-blue-100">
            洪水の危険がある場所を確認しよう
          </p>
        </div>
      </header>

      {/* 説明セクション */}
      <section className="bg-blue-50 p-4 md:p-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-2">
              使い方
            </h2>
            <ul className="text-base text-gray-700 space-y-2">
              <li className="flex items-start">
                <span className="mr-2">📍</span>
                <span>地図をドラッグして動かせます</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">🔍</span>
                <span>＋－ボタンで拡大・縮小できます</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">🗺️</span>
                <span>右上のボタンで地図の種類を切り替えられます</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">💧</span>
                <span>色が濃いほど水が深くなる場所です</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 地図セクション */}
      <main className="flex-1 relative">
        <ErrorBoundary>
          <div className="absolute inset-0">
            <HazardMap />
          </div>
        </ErrorBoundary>
      </main>
    </div>
  );
}
