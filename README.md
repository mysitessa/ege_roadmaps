# ЕГЭ Roadmaps (Astro)

Небольшой Astro-сайт с дорожными картами подготовки к ЕГЭ по предметам.

Если нужно быстро разобраться в архитектуре и “куда смотреть” — см. `docs/ORIENTATION.md`.

## Быстрая навигация по коду

- `src/pages/`
  - `index.astro` — главная (герой + список предметов).
  - `roadmaps.astro` — страница со всеми предметами.
  - `about.astro` — “О проекте”.
  - `[roadmapId]/index.astro` — динамическая страница дорожной карты: `/<roadmapId>?tier=...`.
  - `[roadmapId].json.ts` — API-роут, отдает JSON роадмапа: `/<roadmapId>.json?tier=...`.
- `src/lib/`
  - `subjects.ts` — список предметов; `id` используется в URL (`/<id>`).
  - `roadmaps/generator.ts` — генерация структуры роадмапа (этапы, темы) по `subjectId` и уровню `tier`.
  - `roadmaps/subjects/*.ts` — контент конкретных предметов (математика/русский/информатика и т.д.).
  - `roadmaps/types.ts` — общие типы данных для роадмапов.
  - `roadmaps/builders.ts` — утилиты сборки тем (id/описания/ссылки).
  - `config.ts` — метаданные сайта (title/description/keywords) для layout.
- `src/layouts/BaseLayout.astro` — общий layout: meta-теги, навигация, футер.
- `src/components/` — UI-компоненты (Navigation, HeroSection, FeaturedItems).
- `src/styles/global.css` — Tailwind + кастомные стили (в т.ч. “таймлайн” роадмапа и сайдбар).

## Где менять данные (самое частое)

- Добавить/переименовать предмет: `src/lib/subjects.ts`.
  - Важно: `subjects[].id` должен совпадать с `subjectId`, который ожидает генератор (и будет частью URL).
- Изменить содержимое роадмапов:
  - Базовая логика и уровни (`base|standard|hard`): `src/lib/roadmaps/generator.ts`.
  - Контент предметов: `src/lib/roadmaps/subjects/`.
  - Если для предмета нет файла — генератор отдает “заглушки” (скелет).

## Прогресс изучения

На странице роадмапа прогресс отмечается локально (в браузере) через `localStorage`.
Ключ имеет формат `ege-roadmap:${roadmapId}:${tier}`.
