/**
 * 地図読み込み中のローディング表示
 * Loading state component for map
 */
export default function LoadingMap() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-blue-50">
      <div className="animate-pulse">
        <div className="w-16 h-16 bg-blue-500 rounded-full mb-4 mx-auto"></div>
      </div>
      <h2 className="text-2xl font-bold text-gray-800 mb-2">
        地図を準備しています...
      </h2>
      <p className="text-lg text-gray-600">
        もう少しお待ちください
      </p>
    </div>
  );
}
