// ============================================================
//  ここだけ編集すれば、サイトと職務経歴書PDFの両方が更新されます。
//  Edit this file only — the site and the résumé PDF both read it.
// ============================================================
import type { Profile } from "@/lib/types";

const profile: Profile = {
  meta: {
    handle: "tomoki33",
    name: { ja: "宮澤 知輝", en: "Tomoki Miyazawa" },
    nameRoman: "TOMOKI MIYAZAWA",
    role: { ja: "フルスタックエンジニア", en: "Full-stack Engineer" },
    location: { ja: "千葉県浦安市", en: "Urayasu, Chiba, Japan" },
    since: 2022, // エンジニアとしてのキャリア開始年（経験年数を自動計算）
    tagline: {
      ja: "設計から運用まで、ひとりで通せるフルスタック。いまはAIエージェントとRAGを実務に落とし込んでいます。",
      en: "Full-stack from architecture to operations. Currently putting AI agents and RAG into real production systems.",
    },
    lead: {
      ja: "フルスタックエンジニア。金融ドメインからクラウドまで。",
      en: "Full-stack engineer — from the finance domain down to the cloud.",
    },
    annotations: [
      { title: { ja: "リテール営業からのキャリア", en: "Started in retail sales" }, text: { ja: "コードの前に業務を読む", en: "reads the business before the code" } },
      { title: { ja: "UI/UX 設計から実装まで", en: "UI/UX, design to build" }, text: { ja: "デザインシステム → コンポーネント", en: "design system → components" } },
      { title: { ja: "API 設計 · OIDC / Entra ID", en: "API design · OIDC / Entra ID" }, text: { ja: "契約を先に決める", en: "contracts first" } },
      { title: { ja: "スキーマ設計 · NoSQL 運用", en: "Schema design · NoSQL in prod" }, text: { ja: "クエリから逆算する", en: "shape data for the query" } },
      { title: { ja: "マルチクラウド · IaC · CI/CD", en: "Multi-cloud · IaC · CI/CD" }, text: { ja: "コストを意識した構成", en: "cost-aware architecture" } },
    ],
    summary: {
      ja: "TypeScript / React / Next.js のフロントエンド、Python / FastAPI のバックエンド、AWS・Azure・GCP のマルチクラウド、Terraform と GitHub Actions による CI/CD まで、一貫して設計・実装・運用を担ってきました。AI 関連では RAG システムの実装やアーキテクチャ設計フェーズから関与し、技術リードも担当。金融ドメイン（証券リテール営業、銀行業務システム）の実務経験を、そのままプロダクト設計に持ち込めます。",
      en: "I design, build and operate systems end to end — TypeScript / React / Next.js on the front, Python / FastAPI behind it, across AWS, Azure and GCP, with Terraform and GitHub Actions carrying the delivery. On AI work I join from the architecture phase, implement RAG systems, and lead technically. A background in finance — securities retail sales, then bank trading systems — comes with me into product decisions.",
    },
    links: [
      { label: "Zenn", handle: "zenn.dev/tomoki33", url: "https://zenn.dev/tomoki33" },
      { label: "GitHub", handle: "github.com/tomoki33", url: "https://github.com/tomoki33" },
      { label: "LinkedIn", handle: "in/tomoki-miyazawa", url: "https://www.linkedin.com/in/tomoki-miyazawa-a7947b302/" },
    ],
    contact: {
      // 公開したいメールアドレスに差し替えてください
      email: "",
      note: {
        ja: "業務委託・受託のご相談、カジュアル面談、技術的な雑談、いずれも歓迎です。",
        en: "Contract work, casual chats about a role, or just talking shop — all welcome.",
      },
    },
  },

  // 「いま」やっていること。3〜4行、月に一度書き換えるつもりで。
  now: {
    updated: "2026-09",
    items: [
      {
        ja: "銀行トレーダー向けの類似相場検索ツールを、Next.js + FastAPI + AWS で設計から運用まで担当。",
        en: "Building a similar-market-search tool for bank traders — Next.js, FastAPI, AWS, design through operations.",
      },
      {
        ja: "エージェントベースの AI 機能を本番に載せる仕事。評価とコストの折り合いをどうつけるかを考えている。",
        en: "Shipping agent-based AI features to production, and wrestling with how to trade off evaluation against cost.",
      },
      {
        ja: "Data Science チームと組んでモデル活用機能を開発。クラウドコスト削減も継続テーマ。",
        en: "Working with the Data Science team on model-backed features; cloud cost reduction is an ongoing theme.",
      },
    ],
  },

  career: [
    {
      orgShort: "Japan Digital Design",
      roleShort: { ja: "フルスタック — 銀行向け業務ツール", en: "Full-stack — trading tools for banking" },
      kind: "now",
      org: { ja: "Japan Digital Design 株式会社", en: "Japan Digital Design, Inc." },
      employment: { ja: "正社員", en: "Full-time" },
      title: { ja: "Software Developer / フルスタックエンジニア", en: "Software Developer / Full-stack Engineer" },
      from: "2026-06",
      to: null, // null = 現在
      summary: {
        ja: "銀行トレーダー向け類似相場検索ツールをはじめとする各種業務システム・Web アプリケーションのフルスタック開発を担当。設計から実装、運用まで一貫して参画し、Data Science チームとの協働やチーム運用改善にも取り組む。",
        en: "Full-stack development of internal systems and web applications, starting with a similar-market-search tool for bank traders. Involved from design through implementation and operations, plus collaboration with the Data Science team and team-process improvement.",
      },
      bullets: [
        { ja: "フロントエンド・バックエンドの設計および開発", en: "Front-end and back-end design and development" },
        { ja: "データベースおよび API 設計・実装", en: "Database and API design and implementation" },
        { ja: "AWS を活用したクラウド構成設計・実装、クラウドコストの削減検討および実行", en: "Cloud architecture on AWS, plus cloud cost reduction analysis and execution" },
        { ja: "UI/UX 設計およびフロントエンド実装", en: "UI/UX design and front-end implementation" },
        { ja: "AI プロジェクトへのアーキテクチャ設計フェーズからの参画、エージェントベースの AI 機能実装", en: "Joining AI projects from the architecture phase; implementing agent-based AI features" },
        { ja: "Data Science チームとの協働によるモデル活用機能の開発", en: "Model-backed feature development with the Data Science team" },
        { ja: "コードレビュー、トラブルシューティング、チーム開発プロセスの運用改善", en: "Code review, troubleshooting, and team development-process improvement" },
      ],
      stack: ["AWS", "Docker", "Next.js", "TypeScript", "FastAPI", "Python", "DocumentDB", "DynamoDB", "GitHub Actions", "Claude", "Codex", "Databricks"],
    },
    {
      orgShort: "AlphaVision",
      roleShort: { ja: "フルスタック — AI Agent プロダクト立ち上げ", en: "Full-stack — AI agent product, 0 → 1" },
      kind: "side",
      org: { ja: "株式会社 AlphaVision", en: "AlphaVision, Inc." },
      employment: { ja: "業務委託／副業", en: "Contract / side work" },
      title: { ja: "Software Developer / フルスタックエンジニア（AI Agent プロジェクト）", en: "Software Developer / Full-stack Engineer (AI Agent project)" },
      from: "2025-12",
      to: "2026-06",
      summary: {
        ja: "AI Agent プロダクトの立ち上げフェーズから参画し、技術選定〜設計〜実装〜デプロイまでを一貫して担当。",
        en: "Joined an AI agent product at inception and owned it from stack selection through architecture, implementation and deployment.",
      },
      bullets: [
        { ja: "技術スタック選定およびアーキテクチャ設計", en: "Technology selection and architecture design" },
        { ja: "TypeScript および Prisma を用いた API・UI 実装", en: "API and UI implementation with TypeScript and Prisma" },
        { ja: "Terraform による GCP インフラ構築、Docker によるコンテナ化", en: "GCP infrastructure with Terraform; containerisation with Docker" },
        { ja: "GitHub Actions を用いた CI/CD パイプライン構築、開発全体の品質管理", en: "CI/CD pipelines on GitHub Actions and overall delivery quality" },
      ],
      stack: ["TypeScript", "Next.js", "GCP", "Terraform", "Docker", "Prisma", "GitHub Actions"],
    },
    {
      orgShort: "AIFUL",
      roleShort: { ja: "フルスタック — 社内 RAG チャット 技術リード", en: "Full-stack — internal RAG chat, tech lead" },
      kind: "ft",
      org: { ja: "アイフル株式会社", en: "Aiful Corporation" },
      employment: { ja: "正社員", en: "Full-time" },
      title: { ja: "Software Developer / フルスタックエンジニア", en: "Software Developer / Full-stack Engineer" },
      from: "2023-01",
      to: "2026-05",
      summary: {
        ja: "社内 AI チャットプロジェクトを中心に、Web アプリケーションのフルスタック開発を担当。設計から実装、運用まで一貫して参画。",
        en: "Full-stack web application development centred on an internal AI chat project, from design through implementation and operations.",
      },
      bullets: [
        { ja: "AWS・Azure を活用したマルチクラウド構成設計・実装", en: "Multi-cloud architecture across AWS and Azure" },
        { ja: "認証・認可設計（Microsoft Entra ID / OIDC）", en: "Authentication and authorisation design (Microsoft Entra ID / OIDC)" },
        { ja: "AI プロジェクトにおけるアーキテクチャ設計フェーズからの技術リード", en: "Technical lead on AI projects from the architecture phase" },
        { ja: "RAG ベースの AI 機能実装", en: "RAG-based AI feature implementation" },
        { ja: "データベースおよび API 設計・実装、UI/UX 設計およびフロントエンド実装", en: "Database and API design; UI/UX design and front-end implementation" },
      ],
      stack: ["Azure App Service", "AWS", "Docker", "Next.js", "TypeScript", "FastAPI", "Python", "Entra ID", "OIDC", "MongoDB", "GitHub Actions"],
    },
    {
      orgShort: "DMM 生成AI CAMP",
      roleShort: { ja: "メンター — AI エンジニア講座", en: "Mentor — AI engineering curriculum" },
      kind: "side",
      org: { ja: "DMM 生成 AI CAMP", en: "DMM Generative AI CAMP" },
      employment: { ja: "業務委託／副業", en: "Contract / side work" },
      title: { ja: "AI エンジニア カリキュラムメンター", en: "AI Engineering Curriculum Mentor" },
      from: "2025-06",
      to: "2025-12",
      summary: {
        ja: "AI エンジニアリング講座の受講生に対する技術支援とメンタリング。",
        en: "Technical support and mentoring for students on an AI engineering curriculum.",
      },
      bullets: [
        { ja: "AI エンジニアリングに関する技術質問対応", en: "Answering technical questions on AI engineering" },
        { ja: "RAG・LangChain に関する技術支援", en: "Hands-on support with RAG and LangChain" },
        { ja: "受講生の学習サポートおよびモチベーション管理", en: "Learning support and motivation management" },
      ],
      stack: ["RAG", "LangChain"],
    },
    {
      orgShort: "Ambient Lab",
      roleShort: { ja: "フルスタック — 人事管理システム", en: "Full-stack — HR management system" },
      kind: "side",
      org: { ja: "Ambient Lab 株式会社", en: "Ambient Lab, Inc." },
      employment: { ja: "業務委託／副業", en: "Contract / side work" },
      title: { ja: "Software Developer / フルスタックエンジニア", en: "Software Developer / Full-stack Engineer" },
      from: "2024-10",
      to: "2025-04",
      summary: {
        ja: "人事管理システムのフルスタック開発を副業として担当。",
        en: "Full-stack development of an HR management system as side work.",
      },
      bullets: [
        { ja: "API 設計・実装", en: "API design and implementation" },
        { ja: "フロントエンド画面設計・実装", en: "Front-end screen design and implementation" },
        { ja: "不具合調査および修正", en: "Defect investigation and fixes" },
      ],
      stack: [],
    },
    {
      orgShort: "NRI",
      roleShort: { ja: "サポートエンジニア — PM・設計レビュー支援", en: "Support engineer — PM, spec reviews" },
      kind: "side",
      org: { ja: "株式会社野村総合研究所（NRI）", en: "Nomura Research Institute (NRI)" },
      employment: { ja: "業務委託", en: "Contract" },
      title: { ja: "サポートエンジニア", en: "Support Engineer" },
      from: "2021-04",
      to: "2022-10",
      summary: {
        ja: "プロジェクト管理・運用サポート、要件定義・基本設計レビューの支援。",
        en: "Project management and operations support, plus requirements and basic-design review support.",
      },
      bullets: [
        { ja: "プロジェクト管理・運用サポート", en: "Project management and operations support" },
        { ja: "ドキュメント作成、データ管理、JIRA 管理", en: "Documentation, data management, JIRA administration" },
        { ja: "要件定義・基本設計レビュー支援", en: "Requirements and basic-design review support" },
      ],
      stack: ["JIRA"],
    },
    {
      orgShort: "Nomura Securities",
      roleShort: { ja: "リテール営業 — 金融ドメインの原点", en: "Retail sales — where the domain knowledge comes from" },
      kind: "sales",
      org: { ja: "野村證券株式会社", en: "Nomura Securities Co., Ltd." },
      employment: { ja: "正社員", en: "Full-time" },
      title: { ja: "リテール営業", en: "Retail Sales" },
      from: "2020-03",
      to: "2021-02",
      summary: {
        ja: "個人・法人顧客に対する資産運用コンサルティング営業。金融商品知識と顧客ヒアリングを通じた課題整理・提案力を培う。",
        en: "Asset-management consulting sales to individual and corporate clients — where the habit of listening for the real problem before proposing came from.",
      },
      bullets: [
        { ja: "個人・法人顧客への資産運用提案（株式・投資信託・債券等）", en: "Investment proposals to individual and corporate clients (equities, funds, bonds)" },
        { ja: "顧客ニーズのヒアリングおよび提案資料作成", en: "Client needs interviews and proposal materials" },
        { ja: "市場動向のキャッチアップと顧客への情報提供", en: "Tracking market movements and briefing clients" },
      ],
      stack: [],
    },
  ],

  skills: [
    { group: { ja: "言語・フレームワーク", en: "Languages & frameworks" }, items: ["TypeScript", "Python", "React", "Next.js", "FastAPI", "Prisma"] },
    { group: { ja: "クラウド・基盤", en: "Cloud & infrastructure" }, items: ["AWS", "Azure", "GCP", "Docker", "Terraform"] },
    { group: { ja: "データベース", en: "Databases" }, items: ["MongoDB", "Amazon DocumentDB", "Amazon DynamoDB"] },
    { group: { ja: "CI/CD・ツール", en: "CI/CD & tooling" }, items: ["GitHub Actions", "GitHub", "JIRA", "Slack"] },
    { group: { ja: "AI / LLM", en: "AI / LLM" }, items: ["RAG", "LangChain", "AI エージェント開発", "Claude", "Codex", "Databricks"] },
    { group: { ja: "設計・進め方", en: "Design & practice" }, items: ["API 設計", "認証・認可（OIDC / Entra ID）", "アジャイル開発", "コードレビュー", "UI/UX 設計", "クラウドコスト最適化", "チーム運用改善"] },
    { group: { ja: "ドメイン知識", en: "Domain knowledge" }, items: ["証券リテール営業", "銀行業務システム", "人事管理"] },
  ],

  // ── 制作物（Figures シート）──────────────────────────
  // problem → approach がキャプションになります。image は public/ 以下のパス。
  // 公開URLが無いものは url の代わりに note を書くと表示されます。
  works: [
    {
      title: "PLATE",
      kind: { ja: "iOS アプリ · 筋トレ × 食事", en: "iOS APP · TRAINING × NUTRITION" },
      year: "2026",
      problem: {
        ja: "筋トレの記録と食事管理が別々のアプリで、トレーニングした日もしない日も同じカロリー目標のまま。",
        en: "Training logs and food tracking live in separate apps, so the calorie target stays the same whether you trained legs or rested.",
      },
      approach: {
        ja: "週の合計カロリーをトレの予定に合わせて日ごとに配分し、実際のトレ内容で当日の PFC 目標を自動で組み替える。食事は写真・文章から AI が食品と量を推定し、栄養値は日本食品標準成分表から計算。",
        en: "Spreads a weekly calorie budget across days by training plan and re-balances today's PFC targets from the session you actually logged. Meals can be logged from a photo or text — AI identifies foods and portions, and nutrition is computed from Japan's standard food composition tables.",
      },
      image: "/works/plate.jpg",
      url: "https://plate-site-ashen.vercel.app",
      urlLabel: "LP",
      stack: ["Expo", "React Native", "TypeScript", "SQLite", "Drizzle", "Supabase", "Gemini", "RevenueCat"],
    },
    {
      title: "ReSwing",
      kind: { ja: "PWA · ゴルフ · AI", en: "PWA · GOLF · AI" },
      year: "2026",
      problem: {
        ja: "ゴルフ初心者は、レッスンで言われたことを次の練習までに忘れてしまう。",
        en: "Beginner golfers forget what the coach said by the next session.",
      },
      approach: {
        ja: "打つ前に「今日の一点」を表示。ラウンド・練習・レッスンを最小操作で記録し、AI がノートから繰り返し指摘されている要点を根拠つきで抽出する。",
        en: "Shows one focus point before each swing, logs rounds, range sessions and lessons in a few taps, and has AI pull the recurring advice out of lesson notes — with the source notes cited.",
      },
      image: "/works/reswing.jpg",
      url: "https://reswing.vercel.app",
      urlLabel: "LIVE",
      stack: ["Next.js", "TypeScript", "Supabase", "Gemini", "PWA", "Vitest"],
    },
    {
      title: "ReSurf",
      kind: { ja: "PWA · サーフィン · AI", en: "PWA · SURF · AI" },
      year: "2026",
      problem: {
        ja: "海から上がると、何を意識して何ができたかをすぐに忘れる。",
        en: "Out of the water, beginner surfers lose track of what they worked on and what clicked.",
      },
      approach: {
        ja: "入水前に意識する一点を表示し、海上がりに音声で話すだけで AI が構造化してログに残す。波・風・潮は自動取得、オフラインでも記録して復帰時に同期。",
        en: "One focus point before paddling out; after the session, just talk and AI structures it into a log. Wave, wind and tide are fetched automatically, and it records offline and syncs later.",
      },
      image: "/works/resurf.jpg",
      url: "https://resurf-two.vercel.app",
      urlLabel: "LIVE",
      stack: ["Next.js", "TypeScript", "Supabase", "Gemini", "PWA", "Monorepo"],
    },
    {
      title: "Morning Bytes",
      kind: { ja: "デイリーダイジェスト · LLM", en: "DAILY DIGEST · LLM" },
      year: "2026",
      problem: {
        ja: "海外と国内のテックニュースを、毎朝あちこち巡回して読むのは時間がかかる。",
        en: "Keeping up with tech news across a dozen English and Japanese sources eats every morning.",
      },
      approach: {
        ja: "19 ソースを取得し、LLM が 9 カテゴリの朝刊スタイルで日本語に編集。ボタンを押したときだけ生成するので、読まない日のコストはゼロ。",
        en: "Pulls 19 feeds and has an LLM edit them into a Japanese broadsheet across nine sections. It only generates when you press refresh, so days you don't read cost nothing.",
      },
      image: "/works/bytes.jpg",
      note: { ja: "個人利用 · 非公開", en: "PERSONAL USE · PRIVATE" },
      stack: ["Next.js", "Gemini", "Claude", "Upstash Redis", "Zod", "Vercel"],
    },
    {
      title: { ja: "からだログ", en: "Karada Log" },
      kind: { ja: "LINE ボット · コーチング支援", en: "LINE BOT · COACHING" },
      year: "2026",
      problem: {
        ja: "LINE での個別トレーニング指導は、体重や食事の記録・計算にコーチの時間が取られる。",
        en: "Coaching a client over LINE means the coach spends their time logging weights and adding up calories.",
      },
      approach: {
        ja: "記録・集計・カロリー概算は LINE ボットと画像解析 AI に任せ、評価とアドバイスはコーチが行う。コーチ専用ダッシュボードつき。",
        en: "A LINE bot and vision AI handle the logging, totals and calorie estimates; judgement and advice stay with the coach, who gets a dashboard of their own.",
      },
      image: "/works/karadalog.jpg",
      url: "https://karadalog-lp.vercel.app",
      urlLabel: "LP",
      stack: ["Next.js", "Supabase", "LINE Messaging API", "Gemini Vision", "Vercel Cron", "Tailwind CSS"],
    },
  ],

  // ── Zenn 記事 ───────────────────────────────────────
  // タイトル・日付・URL を貼るだけ。placeholder を消せば公開されます。
  articles: {
    source: "https://zenn.dev/tomoki33",
    items: [
      { placeholder: true, hint: { ja: "記事タイトルと公開日を貼る", en: "Paste the article title and date" } },
      { placeholder: true, hint: { ja: "反応が良かった記事", en: "The one that landed well" } },
      { placeholder: true, hint: { ja: "技術的に踏み込んだ記事", en: "The technically deepest one" } },
      { placeholder: true, hint: { ja: "最近書いたもの", en: "Most recent" } },
    ],
  },

  // ── 読んだ本 ─────────────────────────────────────
  // ジャンルごとのタイトル一覧。author・url は任意。番号は上から通しで振られます。
  reading: {
    note: {
      ja: "読んできた本。技術書だけではなく。",
      en: "Books I've read — not only technical ones.",
    },
    groups: [
      {
        label: { ja: "技術", en: "ENGINEERING" },
        items: [
          { title: "システム設計の面接試験", author: "アレックス・シュウ" },
          { title: "Webを支える技術", author: "山本陽平" },
          { title: "良いコード／悪いコードで学ぶ設計入門", author: "仙塲大也" },
          { title: "システム開発と「具体と抽象」", author: "細谷功" },
          { title: "AWSコンテナ設計・構築［本格］入門", author: "新井雅也・馬勝淳史" },
          { title: "AWS 開発を《成功》させる技術", author: "高岡将・佐々木亨" },
          { title: "プロフェッショナルAI駆動開発", author: "松本淳太郎 ほか" },
          { title: "世界一流エンジニアの思考法", author: "牛尾剛" },
        ],
      },
      {
        label: { ja: "キャリア・仕事", en: "CAREER & WORK" },
        items: [
          { title: "CAREER SKILLS ソフトウェア開発者の完全キャリアガイド", author: "ジョン・ソンメズ" },
          { title: "ITエンジニアの転職学", author: "赤川朗" },
          { title: "21世紀最強の職業 Web系エンジニアになろう", author: "勝又健太" },
          { title: "替えがきかない人材になるための専門性の身につけ方", author: "国分峰樹" },
          { title: "働き方の科学", author: "佐藤豪竜" },
          { title: "The Long Game", author: "ドリー・クラーク" },
          { title: "LIFE SHIFT", author: "リンダ・グラットン・アンドリュー・スコット" },
          { title: "LIFE SHIFT 2", author: "アンドリュー・スコット・リンダ・グラットン" },
          { title: "人生の経営戦略", author: "山口周" },
          { title: "起業のすすめ", author: "佐々木紀彦" },
          { title: "世界の起業家が学んでいるMBA経営理論の必読書50冊を1冊にまとめてみた", author: "永井孝尚" },
        ],
      },
      {
        label: { ja: "思考・言葉", en: "THINKING & LANGUAGE" },
        items: [
          { title: "アウトプット思考", author: "内田和成" },
          { title: "まっすぐ考える", author: "ダリウス・フォルー" },
          { title: "脳の外で考える", author: "アニー・マーフィー・ポール" },
          { title: "HIDDEN POTENTIAL 可能性の科学", author: "アダム・グラント" },
          { title: "瞬時に「言語化できる人」が、うまくいく", author: "荒木俊哉" },
          { title: "「何回説明しても伝わらない」はなぜ起こるのか？", author: "今井むつみ" },
          { title: "言語の力", author: "ビオリカ・マリアン" },
          { title: "Think Fast, Talk Smart", author: "マット・エイブラハムズ" },
          { title: "FACTFULNESS", author: "ハンス・ロスリング ほか" },
          { title: "世界の「頭のいい人」がやっていることを1冊にまとめてみた", author: "中野信子" },
        ],
      },
      {
        label: { ja: "お金・経済・教養", en: "MONEY & ECONOMY" },
        items: [
          { title: "DIE WITH ZERO", author: "ビル・パーキンス" },
          { title: "SAME AS EVER", author: "モーガン・ハウセル" },
          { title: "The Algebra of Wealth 富の方程式", author: "スコット・ギャロウェイ" },
          { title: "きみのお金は誰のため", author: "田内学" },
          { title: "僕がウォール街で学んだ勝利の投資術", author: "高橋ダン" },
          { title: "決算書の比較図鑑", author: "矢部謙介" },
          { title: "行動経済学が最強の学問である", author: "相良奈美香" },
          { title: "世界経済地図", author: "すあし社長" },
          { title: "地政学が最強の教養である", author: "田村耕太郎" },
          { title: "今さら聞けない 教養の超基本", author: "上田紀行 監修" },
        ],
      },
      {
        label: { ja: "脳・心・からだ", en: "MIND & BODY" },
        items: [
          { title: "運動脳", author: "アンデシュ・ハンセン" },
          { title: "筋肉が全て", author: "ガブリエル・ライオン" },
          { title: "不夜脳", author: "東島威史" },
          { title: "「脳にいいこと」だけをやりなさい！", author: "マーシー・シャイモフ" },
          { title: "科学者たちが語る食欲", author: "デイヴィッド・ローベンハイマー・スティーヴン・J・シンプソン" },
          { title: "瞬間ストレスリセット", author: "ジェニファー・L・タイツ" },
          { title: "CALM YOUR MIND", author: "クリス・ベイリー" },
          { title: "Chatter", author: "イーサン・クロス" },
          { title: "「繊細さん」の本", author: "武田友紀" },
          { title: "「繊細さん」の4つの才能", author: "コートニー・マルケサーニ" },
          { title: "「静かな人」の戦略書", author: "ジル・チャン" },
          { title: "人は、なぜさみしさに苦しむのか？", author: "中野信子" },
        ],
      },
      {
        label: { ja: "生き方", en: "HOW TO LIVE" },
        items: [
          { title: "YOUR TIME", author: "鈴木祐" },
          { title: "不完全主義", author: "オリバー・バークマン" },
          { title: "グッド・ライフ", author: "ロバート・ウォールディンガー・マーク・シュルツ" },
          { title: "一度しかない人生を最高の人生にする方法", author: "スコット・アラン" },
          { title: "このプリン、いま食べるか？ ガマンするか？", author: "柿内尚文" },
          { title: "やり抜く力 GRIT", author: "アンジェラ・ダックワース" },
          { title: "幸せになる勇気", author: "岸見一郎・古賀史健" },
          { title: "小さいことにくよくよするな！", author: "リチャード・カールソン" },
          { title: "サレンダー", author: "マイケル・A・シンガー" },
          { title: "スマホ時代の哲学", author: "谷川嘉浩" },
          { title: "夢をかなえるゾウ2", author: "水野敬也" },
          { title: "教養としてのコーヒー", author: "井崎英典" },
        ],
      },
      {
        label: { ja: "小説", en: "FICTION" },
        items: [
          { title: "旅のラゴス", author: "筒井康隆" },
        ],
      },
    ],
  },

  // ── 趣味・関心（Details シート）────────────────────────
  // drawing は線画の種類（surf / gym / golf / coffee）。specs の value を
  // 埋めると表の「—」が置き換わります。
  hobbies: {
    note: {
      ja: "仕事以外の時間について。",
      en: "Outside of work.",
    },
    items: [
      {
        drawing: "surf",
        title: { ja: "サーフィン", en: "Surfing" },
        specs: [{ label: "HOME BREAK", value: "" }, { label: "BOARD", value: "" }],
      },
      {
        drawing: "gym",
        title: { ja: "筋トレ", en: "Training" },
        specs: [{ label: "SPLIT", value: "" }, { label: "BIG 3 TOTAL", value: "" }],
      },
      {
        drawing: "golf",
        title: { ja: "ゴルフ", en: "Golf" },
        specs: [{ label: "AVERAGE", value: "" }, { label: "BEST", value: "" }],
      },
      {
        drawing: "coffee",
        title: { ja: "コーヒー", en: "Coffee" },
        specs: [{ label: "METHOD", value: "" }, { label: "BEANS", value: "" }],
      },
    ],
  },

  education: [
    { school: { ja: "立命館大学 法学部（租税法専攻）", en: "Ritsumeikan University — Faculty of Law (Tax Law)" }, from: "2016-04", to: "2020-03" },
  ],

  certifications: [
    { name: { ja: "TOEIC L&R 975 点", en: "TOEIC L&R — 975" }, date: "2024-06" },
    { name: { ja: "AWS Certified DevOps Engineer – Professional", en: "AWS Certified DevOps Engineer – Professional" }, date: "2024-05" },
    { name: { ja: "AWS Certified Developer – Associate", en: "AWS Certified Developer – Associate" }, date: "2023-11" },
    { name: { ja: "AWS Certified Solutions Architect – Associate", en: "AWS Certified Solutions Architect – Associate" }, date: "2023-09" },
  ],
};

export default profile;
