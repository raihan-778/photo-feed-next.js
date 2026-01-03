const { match } = require("@formatjs/intl-localematcher");
const Negotiator = require("negotiator");

const languates = ["en", "bn"];

const defaultLanguage = "en";

const getLocale = (request) => {
  const acceptedLanguage = request.headers.get("accept-language") || undefined;

  let headers = { "accept-language": acceptedLanguage };
  const languages = new Negotiator({ headers }).languages();

  return match(languages, locale, defaultLocale);
};
