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

  // ── 読んでいるもの ───────────────────────────────────
  // title / note に加えて、url（本のリンク）・coverUrl（表紙画像。外部URL
  // でも public/covers/xxx.jpg のようなローカルパスでもOK）を書けます。
  reading: {
    note: {
      ja: "読んでいるもの、考えていること。技術書だけではなく。",
      en: "What I'm reading and thinking about — not only technical books.",
    },
    items: [
      { placeholder: true, label: { ja: "いま読んでいる", en: "NOW READING" }, hint: { ja: "なぜ今これか。", en: "Why this, now." } },
      { placeholder: true, label: { ja: "何度も戻る一冊", en: "KEEP RETURNING TO" }, hint: { ja: "何が変わったか。", en: "What it changed." } },
      { placeholder: true, label: { ja: "技術以外", en: "BEYOND TECH" }, hint: { ja: "スタックの外側。", en: "Outside the stack." } },
    ],
  },

  // ── 大事にしていること ─────────────────────────────
  // 仕事に対する価値観・スタンス。title は短く、text で少し説明する形。
  // placeholder ではなく最初から3つ埋めてあるので、内容を書き換えてください。
  values: {
    note: {
      ja: "働くうえで大事にしていること。",
      en: "What guides how I work.",
    },
    items: [
      {
        title: { ja: "コードの前に業務", en: "Domain before code" },
        text: { ja: "何を作るかの前に、業務が実際にどう回っているかを理解する。営業時代に身についた感覚です。", en: "Understand how the business actually runs before deciding what to build. Sales taught me that." },
      },
      {
        title: { ja: "最後まで持つ", en: "Own it end to end" },
        text: { ja: "スキーマから本番まで通し、リリース後に起きることまで引き受ける。", en: "Carry a feature from schema to production and stay for what happens after launch." },
      },
      {
        title: { ja: "測ってから最適化", en: "Measure, then optimize" },
        text: { ja: "評価とコストは後付けではなく、設計の一部として扱う。", en: "Evaluation and cost are part of the design, not an afterthought." },
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
        text: { ja: "波を読んで、乗ると決める。", en: "Read the conditions, then commit." },
        specs: [{ label: "HOME BREAK", value: "" }, { label: "BOARD", value: "" }],
      },
      {
        drawing: "gym",
        title: { ja: "筋トレ", en: "Training" },
        text: { ja: "少しずつ負荷を上げて、記録する。", en: "Progressive overload, logged." },
        specs: [{ label: "SPLIT", value: "" }, { label: "BIG 3 TOTAL", value: "" }],
      },
      {
        drawing: "golf",
        title: { ja: "ゴルフ", en: "Golf" },
        text: { ja: "小さな調整を積み重ねる長いゲーム。", en: "A long game of small adjustments." },
        specs: [{ label: "AVERAGE", value: "" }, { label: "BEST", value: "" }],
      },
      {
        drawing: "coffee",
        title: { ja: "コーヒー", en: "Coffee" },
        text: { ja: "比率・挽き目・湯温を詰める。", en: "Dial in ratio, grind and temperature." },
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
