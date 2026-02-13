export const BASE_URL = import.meta.env.BASE_URL;

export const ROUTES = {
  ROOT: `${BASE_URL}`,
  MUSIC: `${BASE_URL}/music`,
  LETTER: `${BASE_URL}/letter`,
  CRAFT: `${BASE_URL}/craft`,
  PRESENTATION: `${BASE_URL}/presentation`,
} as const;

export type ColorHex = `#${string}`;