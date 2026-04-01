import { buildTopics } from '../builders';
import { defaultTopicDescription } from '../types';
import type { RoadmapPhase, RoadmapTier } from '../types';

// Роадмап по информатике (ЕГЭ).
//
// Логика уровней:
// - `base`     — быстрые “табличные/теоретические” задания + системы счисления
// - `standard` — Python-скрипты, исполнители, рекурсия, работа с файлами
// - `hard`     — теория игр, жадные алгоритмы и эффективные решения (O(N))
//
// Универсальные ресурсы вынесены отдельной фазой в конце каждого tier:
// так их удобно находить, но они не “замусоривают” ссылки внутри каждой темы.

const informaticsUniversalLinks = [
  {
    title: 'Поляков — разборы всех заданий + задачи',
    url: 'https://kpolyakov.spb.ru/school/ege.htm',
  },
  {
    title: 'СдамГИА — тренажёр по всем заданиям',
    url: 'https://inf-ege.sdamgia.ru/',
  },
  {
    title: 'EGE Turbo — теория и практика по каждому заданию',
    url: 'https://egeturbo.ru/ege/inf/tasks',
  },
  {
    title: 'Школково — каталог задач по подтемам',
    url: 'https://3.shkolkovo.online/catalog?SubjectId=5',
  },
  {
    title: 'Все задания 1–27 с Python (Stepik)',
    url: 'https://stepik.org/course/100495/promo',
  },
  {
    title: 'ЕГЭ Информатика: Python (Stepik)',
    url: 'https://stepik.org/course/100936/promo',
  },
  {
    title: 'ctege.info — вся теория и задания (2026)',
    url: 'https://ctege.info/ege-2026/informatika-ege-2026-vse-dlya-podgotovki.html',
  },
  {
    title: 'Кулавский — спецификация + разбор всех заданий',
    url: 'https://edu.kulavsky.com/mod/page/view.php?id=366',
  },
  { title: 'labs-org.ru — разборы с видео', url: 'https://labs-org.ru/' },
];

export const informaticsRoadmap: Record<RoadmapTier, RoadmapPhase[]> = {
  base: [
    {
      id: 'phase-1',
      title: 'Раздел 1: Системы счисления и информация',
      description:
        'Уровень: Порог и база (40+). Быстрые баллы на кодировании и системах счисления.',
      topics: buildTopics({
        sectionId: 1,
        defaultDescription: defaultTopicDescription,
        items: [
          {
            title: 'Анализ графов и таблиц (задание 1).',
            description:
              'Анализ графов и таблиц, чтение условий и быстрый расчёт по схеме.',
            links: [
              { title: 'EGE Turbo — задание 1', url: 'https://egeturbo.ru/ege/inf/tasks/1' },
              {
                title: 'Школково — подтемы 1.01–1.05',
                url: 'https://3.shkolkovo.online/catalog?SubjectId=5',
              },
              {
                title: 'СдамГИА — тренажёр (все задания)',
                url: 'https://inf-ege.sdamgia.ru/',
              },
            ],
          },
          {
            title: 'Условие Фано (задание 4).',
            description:
              'Коды, длины кодовых слов, проверка однозначного декодирования.',
            links: [
              { title: 'EGE Turbo — задание 4', url: 'https://egeturbo.ru/ege/inf/tasks/4' },
              {
                title: 'ctege.info — теория (задание 4)',
                url: 'https://ctege.info/informatika-teoriya-ege/zadanie-4-ege-po-informatike.html',
              },
              {
                title: 'Школково — подтемы 4.02–4.03',
                url: 'https://3.shkolkovo.online/catalog?SubjectId=5',
              },
            ],
          },
          {
            title: 'Кодирование изображений и звука (задание 7).',
            description:
              'Размер изображения/аудио: битовая глубина, частота дискретизации, объём данных.',
            links: [
              { title: 'EGE Turbo — задание 7', url: 'https://egeturbo.ru/ege/inf/tasks/7' },
              {
                title: 'СдамГИА — тема: кодирование информации',
                url: 'https://inf-ege.sdamgia.ru/',
              },
              {
                title: 'Поляков — разборы по всем заданиям',
                url: 'https://kpolyakov.spb.ru/school/ege.htm',
              },
            ],
          },
          {
            title:
              'Вычисление объёма памяти для паролей/идентификаторов (задание 11).',
            description:
              'Алфавит, длина, количество вариантов, перевод в биты/байты/КиБ/МиБ.',
            links: [
              {
                title: 'EGE Turbo — задание 11',
                url: 'https://egeturbo.ru/ege/inf/tasks/11',
              },
              {
                title: 'Школково — каталог задач (SubjectId=5)',
                url: 'https://3.shkolkovo.online/catalog?SubjectId=5',
              },
            ],
          },
          {
            title: 'Перевод чисел между системами счисления (задание 14).',
            description:
              'Переводы 2/8/16, представление числа в позиционных системах.',
            links: [
              {
                title: 'EGE Turbo — задание 14',
                url: 'https://egeturbo.ru/ege/inf/tasks/14',
              },
              {
                title: 'Школково — подтемы 14.01–14.03',
                url: 'https://3.shkolkovo.online/catalog?SubjectId=5',
              },
              {
                title: 'ctege.info — теория + задачи (информатика)',
                url: 'https://ctege.info/informatika-teoriya-ege/',
              },
            ],
          },
          {
            title:
              'Арифметика в различных позиционных системах (через Python: int(x, n)) (задание 14).',
            description:
              'Использование Python для перевода и проверки: `int(x, n)`, `bin()`, `oct()`, `hex()`.',
            links: [
              {
                title: 'EGE Turbo — задание 14 (решения на Python)',
                url: 'https://egeturbo.ru/ege/inf/tasks/14',
              },
              {
                title: 'Stepik — курс «ЕГЭ информатика: Python» (1–17)',
                url: 'https://stepik.org/course/100936/promo',
              },
            ],
          },
        ],
      }),
    },
    {
      id: 'phase-2',
      title: 'Раздел 2: Базовая логика и поиск',
      description:
        'База поиска/фильтрации и базовые понятия сетей/адресации.',
      topics: buildTopics({
        sectionId: 2,
        defaultDescription: defaultTopicDescription,
        items: [
          {
            title: 'Поиск и фильтрация в Excel/LibreOffice (задание 3).',
            description:
              'Фильтры, сортировки, условия и быстрый поиск нужных строк.',
            links: [
              { title: 'EGE Turbo — задание 3', url: 'https://egeturbo.ru/ege/inf/tasks/3' },
              { title: 'СдамГИА — тема: базы данных', url: 'https://inf-ege.sdamgia.ru/' },
              {
                title: 'Школково — каталог задач (SubjectId=5)',
                url: 'https://3.shkolkovo.online/catalog?SubjectId=5',
              },
            ],
          },
          {
            title: 'IP-адресация, маски подсетей (задание 13).',
            description:
              'IP/маска/подсеть: адрес сети, количество адресов, диапазоны.',
            links: [
              {
                title: 'EGE Turbo — задание 13',
                url: 'https://egeturbo.ru/ege/inf/tasks/13',
              },
              {
                title: 'Кулавский — разбор с пояснениями (все задания)',
                url: 'https://edu.kulavsky.com/mod/page/view.php?id=366',
              },
            ],
          },
          {
            title: 'Поиск в текстовых файлах (задание 10).',
            description:
              'Поиск по тексту/шаблонам, аккуратная работа с “найти/заменить” и условиями.',
            links: [
              {
                title: 'EGE Turbo — задание 10',
                url: 'https://egeturbo.ru/ege/inf/tasks/10',
              },
              {
                title: 'СдамГИА — тема: поиск в тексте',
                url: 'https://inf-ege.sdamgia.ru/',
              },
            ],
          },
        ],
      }),
    },
    {
      id: 'phase-base-universal',
      title: 'Универсальные ресурсы (по всему ЕГЭ)',
      description: 'Общие сайты и тренажёры — пригодятся в любой теме.',
      topics: [
        {
          id: 'topic-base-universal-1',
          title: 'Подборка ресурсов',
          description: 'Теория, практика, курсы и разборы по заданиям 1–27.',
          links: informaticsUniversalLinks,
        },
      ],
    },
  ],
  standard: [
    {
      id: 'phase-3',
      title: 'Раздел 3: Алгоритмизация (Python)',
      description:
        'Уровень: Уверенный средний (60+). Скрипты на Python и автоматизация.',
      topics: buildTopics({
        sectionId: 3,
        defaultDescription: defaultTopicDescription,
        items: [
          {
            title: 'Черепаха (turtle), анализ траекторий (задание 6).',
            description:
              'Построение траектории и анализ результата по командам исполнителя.',
            links: [
              { title: 'EGE Turbo — задание 6', url: 'https://egeturbo.ru/ege/inf/tasks/6' },
              { title: 'labs-org.ru — исполнители (разборы)', url: 'https://labs-org.ru/' },
              {
                title: 'Школково — каталог задач (SubjectId=5)',
                url: 'https://3.shkolkovo.online/catalog?SubjectId=5',
              },
            ],
          },
          {
            title: 'Редактор строк и алгоритмы обработки команд (задание 12).',
            description:
              'Командные цепочки, замены, состояния, аккуратное моделирование в коде.',
            links: [
              {
                title: 'EGE Turbo — задание 12',
                url: 'https://egeturbo.ru/ege/inf/tasks/12',
              },
              {
                title: 'Школково — каталог задач (SubjectId=5)',
                url: 'https://3.shkolkovo.online/catalog?SubjectId=5',
              },
            ],
          },
          {
            title: 'Многопроцессорные системы (задание 22).',
            description:
              'Распараллеливание, оценка времени/ресурсов, вычисления по условиям.',
            links: [
              {
                title: 'EGE Turbo — задание 22',
                url: 'https://egeturbo.ru/ege/inf/tasks/22',
              },
              { title: 'СдамГИА — тренажёр', url: 'https://inf-ege.sdamgia.ru/' },
            ],
          },
          {
            title: 'Построение алгоритмов обработки чисел (задание 5).',
            description:
              'Циклы, условия, разбор алгоритмов и трассировка вычислений.',
            links: [
              { title: 'EGE Turbo — задание 5', url: 'https://egeturbo.ru/ege/inf/tasks/5' },
              {
                title: 'Stepik — курс «ЕГЭ информатика: Python» (1–17)',
                url: 'https://stepik.org/course/100936/promo',
              },
            ],
          },
          {
            title: 'Подсчёт количества слов/комбинаций через itertools (задание 8).',
            description:
              'Комбинаторика и перебор: `itertools.product`, `permutations`, фильтрация условий.',
            links: [
              { title: 'EGE Turbo — задание 8', url: 'https://egeturbo.ru/ege/inf/tasks/8' },
              {
                title: 'Школково — каталог задач (SubjectId=5)',
                url: 'https://3.shkolkovo.online/catalog?SubjectId=5',
              },
            ],
          },
        ],
      }),
    },
    {
      id: 'phase-4',
      title: 'Раздел 4: Анализ функций и программ',
      description:
        'Логика, рекурсия и вычисления: научиться писать и оптимизировать решения.',
      topics: buildTopics({
        sectionId: 4,
        defaultDescription: defaultTopicDescription,
        items: [
          {
            title: 'Множества, отрезки и побитовое «И» (задание 15).',
            description:
              'Побитовые операции, отрезки, множества, подбор условий и проверка.',
            links: [
              { title: 'labs-org.ru — задание 15', url: 'https://labs-org.ru/ege-15/' },
              { title: 'itChief — задание 15 на Python', url: 'https://itchief.ru/python/ege-15' },
              { title: 'EGE Turbo — задание 15', url: 'https://egeturbo.ru/ege/inf/tasks/15' },
            ],
          },
          {
            title: 'Динамическое программирование через рекурсию (задание 23).',
            description:
              'Рекурсивный перебор/DP, мемоизация, аккуратные ограничения.',
            links: [
              { title: 'EGE Turbo — задание 23', url: 'https://egeturbo.ru/ege/inf/tasks/23' },
              {
                title: 'Школково — подтемы 23.04–23.06',
                url: 'https://3.shkolkovo.online/catalog?SubjectId=5',
              },
            ],
          },
          {
            title: 'Рекурсивные функции (задание 16).',
            description:
              'Вычисления по рекурсии, аккуратный разбор базовых случаев и ограничений.',
            links: [
              { title: 'EGE Turbo — задание 16', url: 'https://egeturbo.ru/ege/inf/tasks/16' },
              { title: 'labs-org.ru — задание 16', url: 'https://labs-org.ru/ege-16/' },
              {
                title: 'ЕГЭ-Студия — полный курс (задание 16)',
                url: 'https://ege-study.ru/ru/ege/materialy/informatika/polnyi-kurs-podgotovki-k-ege-po-informatike/zadanie-16/',
              },
              {
                title: 'Code-enjoy — рекурсия (задание 16)',
                url: 'https://code-enjoy.ru/ege_po_informatike_2025_zadanie_16_rekursiya/',
              },
            ],
          },
          {
            title:
              'Обработка целочисленных последовательностей из файлов (задание 17).',
            description:
              'Чтение файла, перебор окон/пар/троек, подсчёт по условиям.',
            links: [
              { title: 'EGE Turbo — задание 17', url: 'https://egeturbo.ru/ege/inf/tasks/17' },
              {
                title: 'ЯКласс — разбор на Python с чтением файла',
                url: 'https://www.yaklass.ru/p/it-kursy/python-bazovyj-uroven/reshenie-zadach-ege-s-pomoshchiu-iazyka-python-6985557/',
              },
            ],
          },
        ],
      }),
    },
    {
      id: 'phase-standard-universal',
      title: 'Универсальные ресурсы (по всему ЕГЭ)',
      description: 'Общие сайты и тренажёры — пригодятся в любой теме.',
      topics: [
        {
          id: 'topic-standard-universal-1',
          title: 'Подборка ресурсов',
          description: 'Теория, практика, курсы и разборы по заданиям 1–27.',
          links: informaticsUniversalLinks,
        },
      ],
    },
  ],
  hard: [
    {
      id: 'phase-5',
      title: 'Раздел 5: Теория игр и динамика (Задания 19–21, 26)',
      description:
        'Уровень: Высокий результат (80+). Универсальные шаблоны и обработка файлов.',
      topics: buildTopics({
        sectionId: 5,
        defaultDescription: defaultTopicDescription,
        items: [
          {
            title: 'Теория игр: одна и две кучи камней (задания 19, 20, 21).',
            description:
              'Построение универсальной функции на Python для анализа выигрышных стратегий.',
            links: [
              { title: 'labs-org.ru — задание 19 (шаблон + аналитика)', url: 'https://labs-org.ru/ege-19/' },
              { title: 'itChief — универсальный шаблон (19)', url: 'https://itchief.ru/python/ege-19' },
              {
                title: 'Code-enjoy — теория игр на Python (19–21)',
                url: 'https://code-enjoy.ru/ege_po_informatike_2025_zadaniya_19_21_teoriya_igr_na_python/',
              },
              {
                title: 'Умскул — теория игр: программное решение',
                url: 'https://umschool.net/library/informatika/teoriya-igr-programmnoe-reshenie/',
              },
              { title: 'EGE Turbo — задание 20', url: 'https://egeturbo.ru/ege/inf/tasks/20' },
              { title: 'Stepik — курс по теории игр (19–21)', url: 'https://stepik.org/course/92363/info' },
              { title: 'СдамГИА — практика (одна куча)', url: 'https://inf-ege.sdamgia.ru/test?theme=407' },
              { title: 'СдамГИА — практика (две кучи)', url: 'https://inf-ege.sdamgia.ru/test?theme=409' },
            ],
          },
          {
            title: 'Сортировка и жадные алгоритмы, sort(), lambda (задание 26).',
            description:
              'Обработка больших файлов, сортировки, ключи, жадные стратегии и оптимизация.',
            links: [
              { title: 'EGE Turbo — задание 26', url: 'https://egeturbo.ru/ege/inf/tasks/26' },
              { title: 'Экзамер — задание 26', url: 'https://examer.ru/ege_po_informatike/zadanie_26/' },
              { title: 'Stepik — курс «Задания 24–26»', url: 'https://stepik.org/course/95769/promo' },
            ],
          },
        ],
      }),
    },
    {
      id: 'phase-6',
      title: 'Раздел 6: Сложные алгоритмы (Задания 24, 25, 27)',
      description:
        'Строки, маски/делители и эффективные решения (префиксные суммы, O(N)).',
      topics: buildTopics({
        sectionId: 6,
        defaultDescription: defaultTopicDescription,
        items: [
          {
            title: 'Обработка строк (задание 24): split(), replace().',
            description:
              'Поиск самых длинных подстрок/цепочек по условиям, аккуратная работа со строками.',
            links: [
              { title: 'EGE Turbo — задание 24', url: 'https://egeturbo.ru/ege/inf/tasks/24' },
              { title: 'Экзамер — базовые алгоритмы на строках', url: 'https://examer.ru/ege_po_informatike/zadanie_26/' },
              { title: 'Stepik — курс «Задания 24–26»', url: 'https://stepik.org/course/95769/promo' },
            ],
          },
          {
            title: 'Маски и делители (задание 25).',
            description:
              'Поиск по маске, перебор делителей, оптимизация и ограничения времени.',
            links: [
              { title: 'EGE Turbo — задание 25', url: 'https://egeturbo.ru/ege/inf/tasks/25' },
              { title: 'itChief — разбор + оптимизация (25)', url: 'https://itchief.ru/python/ege-25' },
              {
                title: 'Code-enjoy — делимость чисел (25)',
                url: 'https://code-enjoy.ru/ege_po_informatike_2025_zadanie_25_delimost_chisel/',
              },
            ],
          },
          {
            title: 'Эффективное программирование, префиксные суммы, O(N) (задание 27).',
            description:
              'От перебора к линейным решениям: префиксные суммы, оптимизация по памяти и времени.',
            links: [
              {
                title: 'EGE Turbo — задания (в т.ч. 27)',
                url: 'https://egeturbo.ru/ege/inf/tasks',
              },
              {
                title: 'Stepik — Python: от перебора до линейного',
                url: 'https://stepik.org/course/100936/promo',
              },
              {
                title: 'Stepik — «ЕГЭ Информатика 2026. Все задания 1–27»',
                url: 'https://stepik.org/course/100495/promo',
              },
            ],
          },
        ],
      }),
    },
    {
      id: 'phase-hard-universal',
      title: 'Универсальные ресурсы (по всему ЕГЭ)',
      description: 'Общие сайты и тренажёры — пригодятся в любой теме.',
      topics: [
        {
          id: 'topic-hard-universal-1',
          title: 'Подборка ресурсов',
          description: 'Теория, практика, курсы и разборы по заданиям 1–27.',
          links: informaticsUniversalLinks,
        },
      ],
    },
  ],
};
