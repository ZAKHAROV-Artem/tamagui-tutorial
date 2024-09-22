type Theme = {
  background: string;
  border: string;
  buttonBg: string;
  checkbox: string;
  inputBorder: string;
  text: string;
  textAccent: string;
  textMuted: string;
};

function t(a: [number, number][]) {
  let res: Record<string, string> = {};
  for (const [ki, vi] of a) {
    res[ks[ki] as string] = vs[vi] as string;
  }
  return res as Theme;
}
const vs = [
  "#111827",
  "#4B5563",
  "#10B981",
  "#1F2937",
  "#374151",
  "#F9FAFB",
  "#9CA3AF",
  "#D1FAE5",
  "#A7F3D0",
  "#ECFDF5",
  "#065F46",
  "#6EE7B7",
  "#D1D5DB",
  "#3B82F6",
  "#FFFFFF",
  "#E5E7EB",
  "#6B7280",
];

const ks = [
  "background",
  "border",
  "buttonBg",
  "checkbox",
  "inputBorder",
  "text",
  "textAccent",
  "textMuted",
];

const n1 = t([
  [0, 0],
  [1, 1],
  [2, 2],
  [3, 3],
  [4, 4],
  [5, 5],
  [6, 2],
  [7, 6],
]);

export const dark = n1;
const n2 = t([
  [0, 7],
  [1, 8],
  [2, 2],
  [3, 9],
  [4, 8],
  [5, 10],
  [6, 2],
  [7, 11],
]);

export const green = n2;
const n3 = t([
  [0, 5],
  [1, 12],
  [2, 13],
  [3, 14],
  [4, 15],
  [5, 0],
  [6, 13],
  [7, 16],
]);

export const light = n3;
