// Единый список предметов
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
