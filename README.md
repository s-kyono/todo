# todo

## Next.js環境構築

1. Next.jsプロジェクト生成

   ``` sh
     yarn create next-app PROJECT_NAME
   ```

2. プロジェクト階層の生成 (技術最高責任者に任す)

   ``` sh
      cd PROJECT_NAME
      mkdir src && mv pages src/pages & mv styles src/styles
   ```

3. TypeScriptのインストール

   ``` sh
      yarn add -D typescript @types/react @types/react-dom @types/node
   ```

4. `.js`拡張子のファイルを`.ts、.tsx`拡張子に変更

   ``` sh
      find src/pages -name "_app.js" -or -name "index.js" | sed 'p;s/.js$/.tsx/' | xargs -n2 mv & \\
      find src/pages/api -name "*.js" | sed 'p;s/.js$/.ts/' | xargs -n2 mv
   ```

5. `tsconfig.json`と`next-env.d.ts`ファイルの追加

   ``` sh
      yarn dev
   ```

6. TypeScriptの設定を変更

   ``` json tsconfig.json
      "strict": false,
      ->
      "strict": true,
      /*
         baseUrlにて importの規定ファイルパスを指定
      */
      {
         "compilerOptions": {
            // add
            "baseUrl": "."
         }
      }
   ```

7. `_app.tsx`ファイル修正

   ``` javascript src/pages/_app.tsx
      import { AppProps } from 'next/app';
      import '../styles/globals.css';

      const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
         return <Component {...pageProps} />;
      };

      export default MyApp;
   ```

8. `index.tsx`ファイルを修正

   ``` javascript src/pages/index.tsx
      import Head from 'next/head';
      import Image from 'next/image';
      import { NextPage } from 'next';
      import styles from '../styles/Home.module.css';

      const Home: NextPage = () => {
         //
         // この中身はそのまま利用します。
         //
      };
      export default Home;

   ```

9. `api/hello.ts`ファイルの修正

   ``` javascript src/pages/api/hello.ts
      import type { NextApiRequest, NextApiResponse } from 'next';
      type Data = {
         name: string;
      };
      const hello = (req: NextApiRequest, res: NextApiResponse<Data>) => {
         res.status(200).json({ name: 'John Doe' });
      };
      export default hello;

   ```

10. カスタムドキュメントの追加
    - metaタグ類やWebフォントの利用などに必要となるカスタムドキュメントファイルを追加
    - Next.js v11.1.1よりカスタムドキュメントをfunctional componentとして記載可能

    ``` sh
      touch src/pages/_document.tsx
    ```

    ``` javascript src/pages/_document.tsx
      import { Html, Head, Main, NextScript } from 'next/document';

      const MyDocument = () => {
         const url = '<https://example.com>';
         const title = 'Demo Next.js';
         const description = 'Demo of Next.js';
         return (
            <Html lang="ja-JP">
               <Head>
                  {/* Change the contents of `<Head>` as needed. */}
                  <meta name="description" content={description} />
                  <meta name="theme-color" content="#333" />
                  <meta property="og:type" content="website" />
                  <meta property="og:title" content={title} />
                  <meta property="og:url" content={url} />
                  <meta property="og:description" content={description} />
                  <meta property="og:site_name" content={title} />
                  <meta property="og:image" content={`${url}/ogp.png`} />
                  <meta name="twitter:card" content="summary_large_image" />
                  <meta name="format-detection" content="telephone=no" />
                  <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
               </Head>
               <body>
                  <Main />
                  <NextScript />
               </body>
            </Html>
         );
      };
      export default MyDocument;

    ```

11. Sassインストール

    ``` sh
      yarn add -D sass
    ```

12. 起動スクリプト
    - 同じネットワーク内の他のPCやスマートフォンから開発サーバに接続して閲覧確認できるよう、開発サーバの起動スクリプトを調整

    ``` json packages.json
      {
         "scripts": {
            "dev": "next dev --hostname 0.0.0.0",
         }
      }
    ```

13. Prettierの設定
    - プロジェクトによって作成するか検討、Prettierの設定ファイルを追加

    ``` json .prettier
      {
         "trailingComma": "all",
         "semi": true,
         "singleQuote": true,
         "printWidth": "100",
         "tabWidth": 2,
      }
    ```

14. ESLint
    - Next.js v11からESLintはNext.jsで追加
15. storybook, jest等
