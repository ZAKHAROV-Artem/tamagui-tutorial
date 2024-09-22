import { createThemeBuilder } from "@tamagui/theme-builder";

const palettes = {
  dark: [
    "#111827", // background
    "#F9FAFB", // text
    "#10B981", // textAccent
    "#9CA3AF", // textMuted
    "#374151", // input border
    "#4B5563", // checkbox border
    "#1F2937", // checkbox background
    "#10B981", // button background
  ],
  green: [
    "#D1FAE5", // background
    "#065F46", // text
    "#10B981", // textAccent
    "#6EE7B7", // textMuted
    "#A7F3D0", // input border
    "#A7F3D0", // checkbox border
    "#ECFDF5", // checkbox background
    "#10B981", // button background
  ],
  light: [
    "#F9FAFB", // background
    "#111827", // text
    "#3B82F6", // textAccent
    "#6B7280", // textMuted
    "#E5E7EB", // input border
    "#D1D5DB", // checkbox border
    "#FFFFFF", // checkbox background
    "#3B82F6", // button background
  ],
};

const templates = {
  base: {
    background: 0,
    border: 5,
    buttonBg: 7,
    checkbox: 6,
    inputBorder: 4,
    text: 1,
    textAccent: 2,
    textMuted: 3,
  },
};

export const themes = createThemeBuilder()
  .addPalettes(palettes)
  .addTemplates(templates)
  .addThemes({
    dark: {
      palette: "dark",
      template: "base",
    },
    green: {
      palette: "green",
      template: "base",
    },
    light: {
      palette: "light",
      template: "base",
    },
  })
  .build();
