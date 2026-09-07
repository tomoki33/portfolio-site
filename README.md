# portfolio-site

宮澤知輝の自己紹介サイト。Next.js (App Router) + TypeScript。

## 編集するのはここだけ

**`src/data/profile.ts`** — 名前・経歴・スキル・制作物・Zenn 記事・読書メモなど、サイトと職務経歴書 PDF の両方がこの 1 ファイルを参照している。ここを編集するだけで両方が更新される。

- `works`（制作物）と `articles.items`（Zenn 記事）は `placeholder: true` の枠が最初から入っている。埋めるときは `placeholder` を消して `title` / `blurb` / `stack` / `url` などを書く。
- ポートレート写真は `public/portrait.jpg` を置くだけで表示される（ファイルが無ければ自動でプレースホルダー表示になる）。

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
