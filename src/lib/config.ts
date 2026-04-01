// Глобальная конфигурация сайта (используется в BaseLayout для SEO/meta).
// Здесь удобно держать значения по умолчанию, которые переопределяются на страницах.
export const siteConfig = {
  title: 'ЕГЭ Roadmaps',
  description:
    'Дорожные карты подготовки к ЕГЭ по всем предметам.',
  // TODO: если понадобится формировать абсолютные ссылки/OG-URL, задай реальный base URL.
  // В текущей версии сайт не полагается на `siteConfig.url` при генерации ссылок.
  url: {},
  keywords: [
    'ege',
    'ege preparation',
    'exam roadmap',
    'study plan',
    'roadmap',
    'russian exam',
    'math exam',
    'physics exam',
    'informatics exam',
    'chemistry exam',
    'biology exam',
    'history exam',
    'social studies exam',
    'literature exam',
    'english exam',
    'geography exam',
  ],
};
