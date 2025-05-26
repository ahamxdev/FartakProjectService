// lib/emotion-cache.ts
import createCache from "@emotion/cache";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";

export const createEmotionCache = () =>
  createCache({
    key: "mui-rtl",
    stylisPlugins: [prefixer, rtlPlugin],
  });
