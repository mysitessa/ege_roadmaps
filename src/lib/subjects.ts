// Единый список предметов, который используется:
// - для карточек на главной/странице /roadmaps
// - для человекочитаемых заголовков на странице `/<roadmapId>`
//
// Важно: `id` становится частью URL (`/<id>`) и должен быть стабильным.
export type SubjectItem = {
  id: string;
  title: string;
  description?: string;
};

export const subjects: SubjectItem[] = [
  { id: 'russian', title: 'Русский язык' },
  { id: 'math', title: 'Математика' },
  { id: 'informatics', title: 'Информатика' },
];
