import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <main className="container mx-auto px-4 py-12 md:py-20">
        {/* ヘッダー */}
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
            防災デモ
          </h1>
          <p className="text-xl md:text-2xl text-gray-600">
            みんなで学ぼう！防災の準備
          </p>
        </header>

        {/* メニューカード */}
        <section className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* ハザードマップカード */}
            <Link
              href="/hazard-map"
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1"
            >
              <div className="p-8">
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  🗺️
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
                  ハザードマップ
                </h2>
                <p className="text-lg text-gray-600 mb-4">
                  防府市の洪水の危険がある場所を地図で見てみよう
                </p>
                <div className="flex items-center text-blue-600 font-semibold group-hover:text-blue-700">
                  <span>見てみる</span>
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </div>
              </div>
            </Link>

            {/* 今後追加予定のカード */}
            <div className="bg-gray-100 rounded-2xl shadow-lg p-8 opacity-60">
              <div className="text-6xl mb-4">🏠</div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-600 mb-3">
                避難所マップ
              </h2>
              <p className="text-lg text-gray-500 mb-4">
                近くの避難所を探そう（準備中）
              </p>
              <div className="text-gray-400 font-semibold">
                まもなく公開
              </div>
            </div>
          </div>
        </section>

        {/* 説明セクション */}
        <section className="max-w-3xl mx-auto mt-16 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            このアプリについて
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            このアプリは、小中学生のみんなが防災について学べるアプリです。
            自分の住んでいる場所の危険を知って、もしものときに備えましょう。
          </p>
        </section>
      </main>
    </div>
  );
}
