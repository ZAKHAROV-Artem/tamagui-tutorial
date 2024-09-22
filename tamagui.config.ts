import { shorthands } from "@tamagui/shorthands";
import { createTamagui, createTokens } from "tamagui";
import {
  animations,
  tokens as defaultTokens,
  fonts,
  media,
} from "@tamagui/config/v3";

import * as themes from "./theme-output";

const tokens = createTokens({
  ...defaultTokens,
});

const config = createTamagui({
  animations,
  fonts,
  media,
  shorthands,
  themes,
  tokens,
});

type Conf = typeof config;
declare module "tamagui" {
  interface TamaguiCustomConfig extends Conf {}
}
export default config;
