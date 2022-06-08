/**
 * 定数ファイル
 */
type Config = {
  /* app/document 定数 */
  document: {
    title: string,
    url: string,
    description: string,
    lang: string,
  },
}
export default {
  document: {
    title: 'TODOアプリ（自己学習）',
    url: '<https://example.com>',
    description: 'Demo of Next.js',
    lang: 'ja-JP',
  }
} as Config;
