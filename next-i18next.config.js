module.exports = {
  i18n: {
    locales: ['en', 'fr', 'pt'],
    defaultLocale: 'en',
    localeDetection: false,
  },
  ...(typeof window === undefined ? { localePath: path.resolve('./public/locales') } : {}),
};
