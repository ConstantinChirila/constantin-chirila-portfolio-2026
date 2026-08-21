// Custom Shiki theme built from the site palette (see app/lib/palette.ts):
// ink ground, bone text, orange accents, with a warm tonal ramp in between so
// code blocks read as part of the editorial system rather than an import from
// another site.
const bone = "#f6ede7";
const boneBright = "#fffaf6";
const orange = "#ff6737";
const peach = "#ffb491";
const apricot = "#ffd0bd";
const clay = "#ff9d76";
const warmGray = "#8a8078";
const dimBone = "#b5aba3";

export const codeTheme = {
  name: "portfolio-ink",
  type: "dark" as const,
  colors: {
    "editor.background": "#0c0b0a",
    "editor.foreground": bone,
  },
  tokenColors: [
    {
      scope: ["comment", "punctuation.definition.comment"],
      settings: { foreground: warmGray, fontStyle: "italic" },
    },
    {
      scope: [
        "string",
        "string.template",
        "punctuation.definition.string",
        "markup.inline.raw",
      ],
      settings: { foreground: peach },
    },
    {
      scope: [
        "keyword",
        "keyword.operator.new",
        "keyword.operator.expression",
        "storage.type",
        "storage.modifier",
        "variable.language",
      ],
      settings: { foreground: orange },
    },
    {
      scope: [
        "constant.numeric",
        "constant.language",
        "constant.character",
        "support.constant",
      ],
      settings: { foreground: apricot },
    },
    {
      scope: [
        "entity.name.function",
        "support.function",
        "meta.function-call entity.name.function",
      ],
      settings: { foreground: boneBright },
    },
    {
      scope: [
        "entity.name.type",
        "entity.name.class",
        "support.type",
        "support.class",
        "entity.other.inherited-class",
      ],
      settings: { foreground: clay },
    },
    {
      scope: [
        "entity.name.tag",
        "punctuation.definition.tag",
      ],
      settings: { foreground: orange },
    },
    {
      scope: ["entity.other.attribute-name"],
      settings: { foreground: peach },
    },
    {
      scope: [
        "variable",
        "variable.parameter",
        "variable.other.property",
        "support.variable",
        "meta.object-literal.key",
      ],
      settings: { foreground: bone },
    },
    {
      scope: [
        "punctuation",
        "meta.brace",
        "keyword.operator",
      ],
      settings: { foreground: dimBone },
    },
  ],
};
