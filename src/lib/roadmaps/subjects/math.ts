import { buildTopics } from '../builders';
import { defaultTopicDescription } from '../types';
import type { RoadmapPhase, RoadmapTier, RoadmapTopic } from '../types';

// Роадмап по математике (профиль).

function normalizeTopicTitle(title: string): string {
  return title.trim().replace(/[.\s]+$/g, '');
}

const mathUniversalLinks: RoadmapTopic['links'] = [
  {
    title: 'ЕГЭ-Студия — теория + задачи по всем заданиям',
    url: 'https://ege-study.ru/ru/ege/materialy/matematika/',
  },
  { title: 'Школково — задачи + теория по всем темам', url: 'https://shkolkovo.net' },
  {
    title: 'Экзамер — теория по каждому заданию',
    url: 'https://examer.ru/ege_po_matematike/teoriya/',
  },
  { title: 'Учусь.Онлайн — видеокурсы по каждому номеру', url: 'https://uchus.online/' },
  {
    title: 'time4math — задачники по каждому заданию (PDF)',
    url: 'https://time4math.ru/egeprof',
  },
  {
    title: 'Трушин — задачи из реальных ЕГЭ + видеоразборы',
    url: 'https://trushinbv.ru/shkolnikam/podgotovka-k-ege/matematika',
  },
];

const mathTopicLinks: Record<string, RoadmapTopic['links']> = {
  [normalizeTopicTitle(
    'Свойства треугольников (медианы, высоты, биссектрисы).'
  )]: [
    { title: 'Школково — планиметрия: теория и задачи', url: 'https://shkolkovo.net/catalog' },
    { title: 'Трушин — задачи из реальных ЕГЭ', url: 'https://trushinbv.ru/shkolnikam/podgotovka-k-ege/matematika' },
    { title: 'Экзамер — теория', url: 'https://examer.ru/ege_po_matematike/teoriya/' },
  ],
  [normalizeTopicTitle(
    'Четырехугольники (параллелограмм, ромб, трапеция).'
  )]: [
    { title: 'Экзамер — планиметрия: четырёхугольники', url: 'https://examer.ru/ege_po_matematike/teoriya/' },
    { title: 'Школково — планиметрия: теория и задачи', url: 'https://shkolkovo.net/catalog' },
  ],
  [normalizeTopicTitle(
    'Окружности: вписанные и центральные углы, касательные.'
  )]: [
    { title: 'Экзамер — задачи на окружности', url: 'https://examer.ru/ege_po_matematike/teoriya/' },
    { title: 'Школково — планиметрия: теория и задачи', url: 'https://shkolkovo.net/catalog' },
  ],
  [normalizeTopicTitle(
    'Векторы: координаты, длина вектора, сумма и скалярное произведение.'
  )]: [
    { title: 'Учусь.Онлайн — задачи по векторам', url: 'https://uchus.online/tasks/bank/266' },
    { title: 'Школково — векторы: теория', url: 'https://3.shkolkovo.online/theory/151?SubjectId=1' },
    { title: 'Трушин — задачи из реальных ЕГЭ', url: 'https://trushinbv.ru/shkolnikam/podgotovka-k-ege/matematika' },
  ],

  [normalizeTopicTitle(
    'Объемы и площади поверхностей простейших тел (куб, призма, пирамида).'
  )]: [
    { title: 'Трушин — задачи из реальных ЕГЭ', url: 'https://trushinbv.ru/shkolnikam/podgotovka-k-ege/matematika' },
    { title: 'time4math — задание 03 (задачник)', url: 'https://time4math.ru/egeprof' },
    { title: 'Школково — задачи + теория', url: 'https://shkolkovo.net/catalog' },
  ],
  [normalizeTopicTitle('Комбинации тел (вписанный шар, цилиндр в призме).')]: [
    { title: 'Экзамер — стереометрия: комбинация тел', url: 'https://examer.ru/ege_po_matematike/teoriya/' },
    { title: 'Школково — задачи + теория', url: 'https://shkolkovo.net/catalog' },
  ],

  [normalizeTopicTitle('Классическое определение вероятности (P = m/n).')]: [
    { title: 'GodEGE — теория вероятностей', url: 'https://godege.ru/8bit/matematika-ege/teoriya-veroyatnostej-ege/' },
    { title: 'ЕГЭ-Студия — теория + задачи', url: 'https://ege-study.ru/ru/ege/materialy/matematika/' },
  ],
  [normalizeTopicTitle(
    'Операции над вероятностями: сумма и произведение событий.'
  )]: [
    { title: 'ЕГЭ-Студия — теория + задачи', url: 'https://ege-study.ru/ru/ege/materialy/matematika/' },
    { title: 'Экзамер — начала теории вероятностей', url: 'https://examer.ru/ege_po_matematike/teoriya/' },
  ],
  [normalizeTopicTitle(
    'Условная вероятность и дерево событий (задание 5).'
  )]: [
    { title: 'ЕГЭ-Студия — мини-курс по заданию 5', url: 'https://ege-study.ru/ru/ege/materialy/matematika/' },
    { title: 'time4math — задание 05 (задачник)', url: 'https://time4math.ru/egeprof' },
  ],

  [normalizeTopicTitle('Линейные, квадратные и рациональные уравнения.')]: [
    { title: 'Экзамер — простейшие уравнения', url: 'https://examer.ru/ege_po_matematike/teoriya/' },
    { title: 'Трушин — задачи из реальных ЕГЭ', url: 'https://trushinbv.ru/shkolnikam/podgotovka-k-ege/matematika' },
    { title: 'time4math — задание 06 (задачник)', url: 'https://time4math.ru/egeprof' },
  ],
  [normalizeTopicTitle('Иррациональные уравнения (с корнями).')]: [
    { title: 'Экзамер — теория', url: 'https://examer.ru/ege_po_matematike/teoriya/' },
    { title: 'Школково — задачи + теория', url: 'https://shkolkovo.net/catalog' },
  ],
  [normalizeTopicTitle(
    'Показательные и простейшие логарифмические уравнения.'
  )]: [
    { title: 'Экзамер — логарифмические и показательные уравнения', url: 'https://examer.ru/ege_po_matematike/teoriya/' },
    { title: 'ЕГЭ-Студия — теория + задачи', url: 'https://ege-study.ru/ru/ege/materialy/matematika/' },
  ],
  [normalizeTopicTitle(
    'Преобразование выражений: формулы сокращенного умножения, свойства степеней и логарифмов.'
  )]: [
    { title: 'Справочник формул', url: 'http://xn--c1aaeb3jc.xn--p1ai/' },
    { title: 'Экзамер — логарифмические выражения и преобразования', url: 'https://examer.ru/ege_po_matematike/teoriya/' },
  ],

  [normalizeTopicTitle(
    'Геометрический смысл производной: касательная и угол наклона.'
  )]: [
    { title: 'Экзамер — геометрический смысл', url: 'https://examer.ru/ege_po_matematike/teoriya/issledovanie_funkcii' },
    { title: 'ЕГЭ-Студия — теория + задачи', url: 'https://ege-study.ru/ru/ege/materialy/matematika/' },
  ],
  [normalizeTopicTitle('Физический смысл производной (скорость и ускорение).')]: [
    { title: 'Экзамер — физический смысл', url: 'https://examer.ru/ege_po_matematike/teoriya/issledovanie_funkcii' },
    { title: 'ЕГЭ-Студия — теория + задачи', url: 'https://ege-study.ru/ru/ege/materialy/matematika/' },
  ],
  [normalizeTopicTitle(
    'Исследование функций: точки максимума/минимума, промежутки возрастания/убывания.'
  )]: [
    { title: 'Экзамер — исследование функции', url: 'https://examer.ru/ege_po_matematike/teoriya/issledovanie_funkcii' },
    { title: 'Учусь.Онлайн — курс/задачи', url: 'https://uchus.online/' },
    { title: 'time4math — задание 12 (задачник)', url: 'https://time4math.ru/egeprof' },
  ],
  [normalizeTopicTitle(
    'Алгоритм нахождения наибольшего и наименьшего значения функции на отрезке.'
  )]: [
    { title: 'ЕГЭ-Студия — теория + задачи', url: 'https://ege-study.ru/ru/ege/materialy/matematika/' },
    { title: 'Экзамер — исследование функции', url: 'https://examer.ru/ege_po_matematike/teoriya/issledovanie_funkcii' },
  ],

  [normalizeTopicTitle(
    'Текстовые задачи: на движение (по воде, навстречу), на работу, на смеси и сплавы.'
  )]: [
    { title: 'Экзамер — задачи на движение и работу', url: 'https://examer.ru/ege_po_matematike/teoriya/' },
    { title: 'time4math — задание 10 (задачник)', url: 'https://time4math.ru/egeprof' },
  ],
  [normalizeTopicTitle(
    'Чтение графиков функций: прямая, парабола, гипербола, логарифмическая и показательная функции. Определение коэффициентов (k, b, a, c).'
  )]: [
    { title: 'Экзамер — теория', url: 'https://examer.ru/ege_po_matematike/teoriya/' },
    { title: 'Школково — задачи + теория', url: 'https://shkolkovo.net/catalog' },
    { title: 'time4math — задание 11 (задачник)', url: 'https://time4math.ru/egeprof' },
  ],

  [normalizeTopicTitle(
    'Тригонометрический круг: синус, косинус, тангенс основных углов.'
  )]: [
    { title: 'ЕГЭ-Студия — тригонометрический круг', url: 'https://ege-study.ru/trigonometriya/' },
    { title: 'Справочник формул — тригонометрия', url: 'http://xn--c1aaeb3jc.xn--p1ai/' },
  ],
  [normalizeTopicTitle(
    'Тригонометрические формулы: двойной угол, основное тождество.'
  )]: [
    { title: 'ЕГЭ-Студия — тригонометрия', url: 'https://ege-study.ru/trigonometriya/' },
    { title: 'Экзамер — тригонометрические уравнения', url: 'https://examer.ru/ege_po_matematike/teoriya/trigonometricheskie_uravneniya' },
  ],
  [normalizeTopicTitle(
    'Методы решения уравнений: замена переменной, разложение на множители.'
  )]: [
    { title: 'Экзамер — тригонометрические уравнения', url: 'https://examer.ru/ege_po_matematike/teoriya/trigonometricheskie_uravneniya' },
    { title: 'ЕГЭ-Студия — тригонометрия', url: 'https://ege-study.ru/trigonometriya/' },
    { title: 'Учусь.Онлайн — курс/задачи', url: 'https://uchus.online/' },
  ],
  [normalizeTopicTitle('Методы отбора корней на промежутке.')]: [
    { title: 'Экзамер — тригонометрические уравнения', url: 'https://examer.ru/ege_po_matematike/teoriya/trigonometricheskie_uravneniya' },
    { title: 'ЕГЭ-Студия — тригонометрия', url: 'https://ege-study.ru/trigonometriya/' },
    { title: 'Учусь.Онлайн — курс/задачи', url: 'https://uchus.online/' },
  ],

  [normalizeTopicTitle(
    'Неравенства (15): метод интервалов, метод рационализации (для логарифмов и степеней), ОДЗ.'
  )]: [
    { title: 'ЕГЭ-Студия — метод интервалов', url: 'https://ege-study.ru/ru/ege/materialy/matematika/metod-intervalov/' },
    { title: 'YouClever — метод интервалов', url: 'https://youclever.org/book/metod-intervalov-1/' },
    { title: 'Школково — рациональные неравенства', url: 'https://shkolkovo.net/catalog/reshenie_neravenstv/racionalnye_metodom_intervalov' },
    { title: 'Экзамер — метод интервалов', url: 'https://examer.ru/ege_po_matematike/teoriya/metod_intervalov' },
  ],
  [normalizeTopicTitle(
    'Экономические задачи (16): аннуитетные платежи (равные доли), дифференцированные платежи, задачи на оптимизацию (выбор наилучшего варианта).'
  )]: [
    { title: 'Трушин — экономические задачи', url: 'https://trushinbv.ru/shkolnikam/podgotovka-k-ege/matematika' },
    { title: 'time4math — задание 16 (задачник)', url: 'https://time4math.ru/egeprof' },
  ],

  [normalizeTopicTitle(
    'Параметры (17): графический метод (плоскость xOy или xOa), аналитический метод (свойства квадратичной функции, симметрия).'
  )]: [
    { title: 'Учусь.Онлайн — курс по параметрам', url: 'https://uchus.online/' },
    { title: 'EGE Turbo — разборы (19)', url: 'https://egeturbo.ru/ege/math/tasks/19' },
  ],
  [normalizeTopicTitle(
    'Числа и их свойства (19): делимость, остатки, работа с последовательностями. Пункты (а) и (б) — часто решаются простым подбором примера.'
  )]: [
    { title: 'YouClever — теория чисел', url: 'https://youclever.org/book/19-ege-math-teoriya-chisel/' },
    {
      title: 'ЕГЭ-Студия — числа и их свойства (задание 19)',
      url: 'https://ege-study.ru/ru/ege/materialy/matematika/zadanie-19-profilnogo-ege-po-matematike-chisla-i-ix-svojstva/',
    },
    { title: 'Экзамер — задание 19', url: 'https://examer.ru/ege_po_matematike/zadanie_19/' },
    { title: 'mathm.ru — сортировка задач (19)', url: 'https://www.mathm.ru/zad/ege/zad19eget.html' },
    { title: 'EGE Turbo — разборы (19)', url: 'https://egeturbo.ru/ege/math/tasks/19' },
  ],

  [normalizeTopicTitle(
    'Стереометрия (14): метод координат (векторный метод в пространстве), углы между скрещивающимися прямыми, расстояния от точки до плоскости.'
  )]: [
    { title: 'Sigma Center — метод координат', url: 'https://sigma-center.ru/method_koordinat' },
    {
      title: 'ЕГЭ-Студия — метод координат в пространстве',
      url: 'https://ege-study.ru/ru/ege/materialy/matematika/vektory-v-prostranstve-i-metod-koordinat/',
    },
    { title: '4ege — стереометрия 14 (коорд.-векторный метод)', url: 'https://4ege.ru/matematika/60504-reshenie-zadach-14-ege-po-matematike-koordinatno-vektornym-metodom.html' },
  ],
  [normalizeTopicTitle(
    'Планиметрия (18): сложные свойства окружностей, теоремы Менелая и Чевы, подобие треугольников.'
  )]: [
    { title: 'Школково — задачи + теория', url: 'https://shkolkovo.net/catalog' },
    { title: 'Трушин — задачи из реальных ЕГЭ', url: 'https://trushinbv.ru/shkolnikam/podgotovka-k-ege/matematika' },
    { title: 'ЕГЭ-Студия — теория + задачи', url: 'https://ege-study.ru/ru/ege/materialy/matematika/' },
  ],
};

function buildMathTopics(params: { sectionId: number; titles: string[] }): RoadmapTopic[] {
  const topics = buildTopics({
    sectionId: params.sectionId,
    items: params.titles.map((title) => ({ title })),
    defaultDescription: defaultTopicDescription,
  });
  return topics.map((topic) => {
    const links = mathTopicLinks[normalizeTopicTitle(topic.title)] ?? [];
    return { ...topic, links };
  });
}

export const mathRoadmap: Record<RoadmapTier, RoadmapPhase[]> = {
  base: [
    {
      id: 'phase-1',
      title: 'Раздел 1: Планиметрия и векторы (Задания 1, 2)',
      description: 'Уровень: Порог и база (40+ баллов).',
      topics: buildMathTopics({
        sectionId: 1,
        titles: [
          'Свойства треугольников (медианы, высоты, биссектрисы).',
          'Четырехугольники (параллелограмм, ромб, трапеция).',
          'Окружности: вписанные и центральные углы, касательные.',
          'Векторы: координаты, длина вектора, сумма и скалярное произведение.',
        ],
      }),
    },
    {
      id: 'phase-2',
      title: 'Раздел 2: Стереометрия: начало (Задание 3)',
      description: 'База пространственных формул и первых задач.',
      topics: buildMathTopics({
        sectionId: 2,
        titles: [
          'Объемы и площади поверхностей простейших тел (куб, призма, пирамида).',
          'Комбинации тел (вписанный шар, цилиндр в призме).',
        ],
      }),
    },
    {
      id: 'phase-3',
      title: 'Раздел 3: Теория вероятностей (Задания 4, 5)',
      description: 'Вероятность и дерево событий для первой части.',
      topics: buildMathTopics({
        sectionId: 3,
        titles: [
          'Классическое определение вероятности (P = m/n).',
          'Операции над вероятностями: сумма и произведение событий.',
          'Условная вероятность и дерево событий (задание 5).',
        ],
      }),
    },
    {
      id: 'phase-4',
      title: 'Раздел 4: Основы алгебры (Задания 6, 7)',
      description: 'Алгебраическая база для уверенного старта.',
      topics: buildMathTopics({
        sectionId: 4,
        titles: [
          'Линейные, квадратные и рациональные уравнения.',
          'Иррациональные уравнения (с корнями).',
          'Показательные и простейшие логарифмические уравнения.',
          'Преобразование выражений: формулы сокращенного умножения, свойства степеней и логарифмов.',
        ],
      }),
    },
    {
      id: 'phase-base-universal',
      title: 'Универсальные ресурсы (по всему ЕГЭ)',
      description: 'Общие сайты и задачники — пригодятся в любой теме.',
      topics: [
        {
          id: 'topic-base-universal-1',
          title: 'Подборка ресурсов',
          description: 'Общая теория, практика и видео по профилю.',
          links: mathUniversalLinks,
        },
      ],
    },
  ],
  standard: [
    {
      id: 'phase-5',
      title: 'Раздел 5: Начала анализа (Задания 8, 9, 12)',
      description:
        'Уровень: Уверенный средний (60+ баллов). Цель: вся первая часть + задание 13.',
      topics: buildMathTopics({
        sectionId: 5,
        titles: [
          'Геометрический смысл производной: касательная и угол наклона.',
          'Физический смысл производной (скорость и ускорение).',
          'Исследование функций: точки максимума/минимума, промежутки возрастания/убывания.',
          'Алгоритм нахождения наибольшего и наименьшего значения функции на отрезке.',
        ],
      }),
    },
    {
      id: 'phase-6',
      title: 'Раздел 6: Прикладная математика и функции (Задания 10, 11)',
      description: 'Прикладные задачи и чтение графиков.',
      topics: buildMathTopics({
        sectionId: 6,
        titles: [
          'Текстовые задачи: на движение (по воде, навстречу), на работу, на смеси и сплавы.',
          'Чтение графиков функций: прямая, парабола, гипербола, логарифмическая и показательная функции. Определение коэффициентов (k, b, a, c).',
        ],
      }),
    },
    {
      id: 'phase-7',
      title: 'Раздел 7: Тригонометрия и уравнения (Задание 13)',
      description: 'Тригонометрия и методы решения уравнений.',
      topics: buildMathTopics({
        sectionId: 7,
        titles: [
          'Тригонометрический круг: синус, косинус, тангенс основных углов.',
          'Тригонометрические формулы: двойной угол, основное тождество.',
          'Методы решения уравнений: замена переменной, разложение на множители.',
          'Методы отбора корней на промежутке.',
        ],
      }),
    },
    {
      id: 'phase-standard-universal',
      title: 'Универсальные ресурсы (по всему ЕГЭ)',
      description: 'Общие сайты и задачники — пригодятся в любой теме.',
      topics: [
        {
          id: 'topic-standard-universal-1',
          title: 'Подборка ресурсов',
          description: 'Общая теория, практика и видео по профилю.',
          links: mathUniversalLinks,
        },
      ],
    },
  ],
  hard: [
    {
      id: 'phase-8',
      title: 'Раздел 8: Сложная алгебра (Задания 15, 16)',
      description:
        'Уровень: Высокий результат (80+ баллов). Цель: повышенная сложность и параметры.',
      topics: buildMathTopics({
        sectionId: 8,
        titles: [
          'Неравенства (15): метод интервалов, метод рационализации (для логарифмов и степеней), ОДЗ.',
          'Экономические задачи (16): аннуитетные платежи (равные доли), дифференцированные платежи, задачи на оптимизацию (выбор наилучшего варианта).',
        ],
      }),
    },
    {
      id: 'phase-9',
      title: 'Раздел 9: Параметры и логика (Задания 17, 19)',
      description: 'Задачи с параметрами и число-логические блоки.',
      topics: buildMathTopics({
        sectionId: 9,
        titles: [
          'Параметры (17): графический метод (плоскость xOy или xOa), аналитический метод (свойства квадратичной функции, симметрия).',
          'Числа и их свойства (19): делимость, остатки, работа с последовательностями. Пункты (а) и (б) — часто решаются простым подбором примера.',
        ],
      }),
    },
    {
      id: 'phase-10',
      title: 'Раздел 10: Углубленная геометрия (Задания 14, 18)',
      description: 'Стереометрия и сложная планиметрия.',
      topics: buildMathTopics({
        sectionId: 10,
        titles: [
          'Стереометрия (14): метод координат (векторный метод в пространстве), углы между скрещивающимися прямыми, расстояния от точки до плоскости.',
          'Планиметрия (18): сложные свойства окружностей, теоремы Менелая и Чевы, подобие треугольников.',
        ],
      }),
    },
    {
      id: 'phase-hard-universal',
      title: 'Универсальные ресурсы (по всему ЕГЭ)',
      description: 'Общие сайты и задачники — пригодятся в любой теме.',
      topics: [
        {
          id: 'topic-hard-universal-1',
          title: 'Подборка ресурсов',
          description: 'Общая теория, практика и видео по профилю.',
          links: mathUniversalLinks,
        },
      ],
    },
  ],
};
