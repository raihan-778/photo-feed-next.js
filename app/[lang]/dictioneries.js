import "server-only";

const dictioneries = {
  bn: () => import("./dictioneries/bn.json").then((module) => module.default),
  en: () => import("./dictioneries/en.json").then((module) => module.default),
};

export const getDictionery = async (locale) => dictioneries[locale]();
