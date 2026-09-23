# portfolio-site

宮澤知輝の自己紹介サイト。Next.js (App Router) + TypeScript。

デザインは "Blueprint"（図面セット）。ページは 01〜09 の番号つき「シート」で、`/`（Index）・`/now`・`/career`・`/works`・`/writing`・`/reading`・`/values`・`/interests`・`/contact`。EN（既定）/ JA は `lang` Cookie で保持。`/writing` は Zenn の RSS から自動取得（1時間キャッシュ）。

## 編集するのはここだけ

**`src/data/profile.ts`** — 名前・経歴・スキル・制作物・Zenn 記事・読書メモなど、サイトと職務経歴書 PDF の両方がこの 1 ファイルを参照している。ここを編集するだけで両方が更新される。

- `works`（制作物）は `problem` → `approach` がキャプションになる。スクリーンショットは `public/works/` に置いて `image` に指定。
- `reading` は `placeholder: true` の枠が入っている。埋めるときは `placeholder` を消して `title` / `note` / `url` / `coverUrl` を書く。
- `hobbies` の `specs[].value` を埋めると Details シートの「—」が置き換わる。`values` の3項目は下書き。

## 職務経歴書 PDF

ヘッダーの「職務経歴書」ボタンと `/api/resume` は `src/data/profile.ts` から PDF を毎回その場で生成する（`src/app/api/resume/route.tsx`, `@react-pdf/renderer` 使用）。データを更新するだけで PDF も最新化される。

## 開発

```bash
npm run dev      # 開発サーバー (http://localhost:3000)
npm run build    # 本番ビルド
npm run start    # 本番サーバー起動
```

## デプロイ

Vercel へのデプロイを想定。`vercel` CLI でリンクしてデプロイするか、GitHub リポジトリを作成して Vercel と連携する。
