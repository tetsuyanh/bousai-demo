'use client';

import { Component, type ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

/**
 * エラーハンドリング用のErrorBoundaryコンポーネント
 * Error boundary component for catching React errors
 */
export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="w-full h-full flex flex-col items-center justify-center bg-red-50 p-6">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-md text-center">
            <div className="text-6xl mb-4">⚠️</div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              エラーが発生しました
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              地図の表示に問題が発生しました。
              <br />
              ページを再読み込みしてください。
            </p>
            <button
              onClick={() => window.location.reload()}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg text-lg transition-colors"
            >
              ページを再読み込み
            </button>
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="mt-6 text-left">
                <summary className="cursor-pointer text-sm text-gray-500">
                  エラー詳細（開発者向け）
                </summary>
                <pre className="mt-2 text-xs text-red-600 overflow-auto">
                  {this.state.error.toString()}
                </pre>
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
