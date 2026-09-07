import path from "node:path";
import {
  Document,
  Font,
  Page,
  StyleSheet,
  Text,
  View,
  renderToBuffer,
} from "@react-pdf/renderer";
import profile from "@/data/profile";
import { pick } from "@/lib/i18n";

// PDF generation needs Node's filesystem (to load the embedded font) and
// isn't edge-compatible.
export const runtime = "nodejs";

Font.register({
  family: "M PLUS 1p",
  fonts: [
    { src: path.join(process.cwd(), "src/assets/fonts/MPLUS1p-Regular.ttf"), fontWeight: 400 },
    { src: path.join(process.cwd(), "src/assets/fonts/MPLUS1p-Bold.ttf"), fontWeight: 700 },
  ],
});
// react-pdf's line breaker segments text by Unicode script (kanji / kana /
// Latin all count as different "runs"), and treats almost every run
// boundary as a hyphenation point when there's no ASCII space to break at
// instead — exactly the normal shape of Japanese prose. Registering a
// no-op hyphenation callback stops it from *also* splitting long English
// words, but the run-boundary hyphens are a separate, known limitation of
// the library's CJK line-breaking (see `zw()` below for the mitigation);
// they don't affect the document's content, only an occasional trailing
// "-" at a wrapped line.
Font.registerHyphenationCallback((word) => [word]);
// Zero-width spaces between every character give the line breaker a free
// (non-hyphenated) break opportunity at each position, which it prefers
// over the hyphenated ones in most cases and noticeably improves line
// fill. Apply to any prose field long enough to wrap.
const ZWSP = String.fromCharCode(0x200b); // U+200B zero-width space
function zw(text: string): string {
  return Array.from(text).join(ZWSP);
}

const ACCENT = "#7d5411";
const ACCENT_LINE = "#b68235";
const TEXT = "#201f1d";
const NEUTRAL_600 = "#7d7979";
const NEUTRAL_700 = "#605d5d";
const NEUTRAL_800 = "#444141";
const DIVIDER = "#d9d6d6";

const styles = StyleSheet.create({
  page: {
    fontFamily: "M PLUS 1p",
    fontSize: 9.5,
    lineHeight: 1.7,
    color: TEXT,
    padding: "56 50 46",
  },
  header: {
    borderBottom: `1.5 solid ${TEXT}`,
    paddingBottom: 10,
    marginBottom: 16,
  },
  kicker: {
    fontSize: 8.5,
    lineHeight: 1.4,
    letterSpacing: 2,
    color: ACCENT,
    marginBottom: 6,
  },
  name: {
    fontSize: 24,
    lineHeight: 1.4,
    fontWeight: 700,
    marginBottom: 8,
  },
  metaLine: {
    fontSize: 9.5,
    lineHeight: 1.5,
    color: NEUTRAL_700,
    marginBottom: 5,
  },
  linksLine: {
    fontSize: 9,
    lineHeight: 1.5,
    color: TEXT,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  linkItem: {
    marginRight: 12,
  },
  section: {
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 12,
    lineHeight: 1.4,
    fontWeight: 700,
    letterSpacing: 1,
    borderBottom: `1 solid ${DIVIDER}`,
    paddingBottom: 4,
    marginBottom: 8,
  },
  bodyText: {
    fontSize: 9.5,
    lineHeight: 1.8,
  },
  careerItem: {
    marginBottom: 11,
  },
  careerTopRow: {
    flexDirection: "row",
    alignItems: "baseline",
    marginBottom: 3,
  },
  careerOrg: {
    fontSize: 12,
    lineHeight: 1.4,
    fontWeight: 700,
  },
  careerEmployment: {
    fontSize: 8.5,
    lineHeight: 1.4,
    color: NEUTRAL_600,
    marginLeft: 6,
  },
  careerPeriod: {
    fontSize: 9,
    lineHeight: 1.4,
    color: NEUTRAL_700,
    marginLeft: "auto",
  },
  careerTitle: {
    fontSize: 9.5,
    lineHeight: 1.5,
    color: ACCENT,
    marginBottom: 5,
  },
  careerSummary: {
    fontSize: 9.5,
    lineHeight: 1.75,
    marginBottom: 5,
  },
  bulletRow: {
    flexDirection: "row",
    marginBottom: 2,
  },
  bulletMark: {
    color: ACCENT_LINE,
    marginRight: 5,
    fontSize: 9,
    lineHeight: 1.6,
  },
  bulletText: {
    fontSize: 9,
    lineHeight: 1.6,
    flex: 1,
  },
  stackLine: {
    fontSize: 8.5,
    lineHeight: 1.5,
    color: NEUTRAL_700,
    marginTop: 5,
  },
  stackLabel: {
    letterSpacing: 1,
    color: ACCENT,
  },
  skillRow: {
    flexDirection: "row",
    borderBottom: `1 solid ${DIVIDER}`,
    paddingVertical: 4,
  },
  skillGroup: {
    width: 118,
    fontSize: 9,
    lineHeight: 1.5,
    color: NEUTRAL_800,
  },
  skillItems: {
    flex: 1,
    fontSize: 9,
    lineHeight: 1.5,
  },
  plainRow: {
    flexDirection: "row",
    fontSize: 9.5,
    lineHeight: 1.5,
    marginBottom: 3,
  },
  plainLeft: {
    flex: 1,
  },
  plainRight: {
    color: NEUTRAL_700,
  },
  footer: {
    position: "absolute",
    bottom: 28,
    left: 50,
    right: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    fontSize: 8,
    lineHeight: 1.4,
    color: NEUTRAL_600,
    borderTop: `1 solid ${DIVIDER}`,
    paddingTop: 6,
  },
  end: {
    textAlign: "right",
    fontSize: 9.5,
    lineHeight: 1.4,
    color: NEUTRAL_700,
    letterSpacing: 1,
    marginTop: 14,
  },
});

/** "YYYY-MM" -> "YYYY年M月" */
function ymJa(s: string | null | undefined): string {
  if (!s) return "";
  const [y, m] = s.split("-");
  return `${y}年${Number(m)}月`;
}

function ResumeDocument() {
  const lang = "ja" as const;
  const p = (v: Parameters<typeof pick>[0]) => pick(v, lang);
  const { meta } = profile;
  const docName = `${p(meta.name)}（${meta.nameRoman}）`;
  const now = new Date();
  const today = `${now.getFullYear()}年${now.getMonth() + 1}月`;

  return (
    <Document
      title={`職務経歴書_${meta.name.ja}`}
      author={meta.name.ja}
      subject="職務経歴書"
    >
      <Page size="A4" style={styles.page} wrap>
        <View style={styles.header}>
          <Text style={styles.kicker}>職務経歴書</Text>
          <Text style={styles.name}>{docName}</Text>
          <Text style={styles.metaLine}>
            {p(meta.role)} ／ {p(meta.location)} ／ 更新 {today}
          </Text>
          <View style={styles.linksLine}>
            {meta.links.map((l) => (
              <Text key={l.url} style={styles.linkItem}>
                {l.label} · {l.handle}
              </Text>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>職務要約</Text>
          <Text style={styles.bodyText}>{zw(p(meta.summary))}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>職務経歴</Text>
          {profile.career.map((c, i) => {
            const stackLine = (c.stack || []).join(" / ");
            return (
              <View key={i} style={styles.careerItem} wrap={false}>
                <View style={styles.careerTopRow}>
                  <Text style={styles.careerOrg}>{p(c.org)}</Text>
                  <Text style={styles.careerEmployment}>（{p(c.employment)}）</Text>
                  <Text style={styles.careerPeriod}>
                    {ymJa(c.from)} 〜 {c.to ? ymJa(c.to) : "現在"}
                  </Text>
                </View>
                <Text style={styles.careerTitle}>{p(c.title)}</Text>
                <Text style={styles.careerSummary}>{zw(p(c.summary))}</Text>
                {c.bullets.map((b, bi) => (
                  <View key={bi} style={styles.bulletRow}>
                    <Text style={styles.bulletMark}>—</Text>
                    <Text style={styles.bulletText}>{zw(p(b))}</Text>
                  </View>
                ))}
                {stackLine && (
                  <Text style={styles.stackLine}>
                    <Text style={styles.stackLabel}>技術環境</Text>　{stackLine}
                  </Text>
                )}
              </View>
            );
          })}
        </View>

        <View style={styles.section} wrap={false}>
          <Text style={styles.sectionTitle}>保有スキル</Text>
          {profile.skills.map((g, i) => (
            <View key={i} style={styles.skillRow}>
              <Text style={styles.skillGroup}>{p(g.group)}</Text>
              <Text style={styles.skillItems}>{g.items.join("、")}</Text>
            </View>
          ))}
        </View>

        <View style={styles.section} wrap={false}>
          <Text style={styles.sectionTitle}>学歴</Text>
          {profile.education.map((e, i) => (
            <View key={i} style={styles.plainRow}>
              <Text style={styles.plainLeft}>{p(e.school)}</Text>
              <Text style={styles.plainRight}>
                {ymJa(e.from)} 〜 {ymJa(e.to)}
              </Text>
            </View>
          ))}
        </View>

        <View wrap={false}>
          <Text style={styles.sectionTitle}>資格</Text>
          {profile.certifications.map((c, i) => (
            <View key={i} style={styles.plainRow}>
              <Text style={styles.plainLeft}>{p(c.name)}</Text>
              <Text style={styles.plainRight}>{ymJa(c.date)}</Text>
            </View>
          ))}
          <Text style={styles.end}>以上</Text>
        </View>

        <View style={styles.footer} fixed>
          <Text>{docName}</Text>
          <Text render={({ pageNumber, totalPages }) => `職務経歴書 · ${today} · ${pageNumber} / ${totalPages}`} />
        </View>
      </Page>
    </Document>
  );
}

export async function GET() {
  const buffer = await renderToBuffer(<ResumeDocument />);
  const filenameAscii = "resume.pdf";
  const filenameUtf8 = encodeURIComponent(
    `職務経歴書_${profile.meta.name.ja}_${profile.now.updated.replace("-", "")}.pdf`,
  );

  return new Response(new Uint8Array(buffer), {
    status: 200,
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `inline; filename="${filenameAscii}"; filename*=UTF-8''${filenameUtf8}`,
      "Cache-Control": "public, max-age=0, must-revalidate",
    },
  });
}
