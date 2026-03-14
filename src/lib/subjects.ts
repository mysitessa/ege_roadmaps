export type SubjectItem = {
  id: string;
  title: string;
  description?: string;
};

export const subjects: SubjectItem[] = [
  { id: 'russian', title: 'Русский язык' },
  { id: 'math', title: 'Математика' },
  { id: 'physics', title: 'Физика' },
  { id: 'informatics', title: 'Информатика' },
  { id: 'chemistry', title: 'Химия' },
  { id: 'biology', title: 'Биология' },
  { id: 'history', title: 'История' },
  { id: 'social-studies', title: 'Обществознание' },
  { id: 'literature', title: 'Литература' },
  { id: 'english', title: 'Английский язык' },
  { id: 'geography', title: 'География' },
];
