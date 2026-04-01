import { buildTopics } from '../builders';
import { defaultTopicDescription } from '../types';
import type { RoadmapPhase, RoadmapTier } from '../types';

// Роадмап по русскому языку (ЕГЭ).

export const russianRoadmap: Record<RoadmapTier, RoadmapPhase[]> = {
  base: [
    {
      id: 'phase-1',
      title: 'Раздел 1: Работа с текстом и культура речи',
      description:
        'Уровень: Порог и база (40+). Быстрые задания 1–7 + старт сочинения.',
      topics: buildTopics({
        sectionId: 1,
        defaultDescription: defaultTopicDescription,
        items: [
          {
            title:
              'Подбор частей речи (союзы, частицы) для связи предложений.',
            links: [
              {
                title: 'Экзамер — средства связи в тексте',
                url: 'https://examer.ru/ege_po_russkomu_yaziku/teoriya/sredstva_svyazi_v_tekste',
              },
              {
                title: 'RusTutors — задание 1',
                url: 'https://rustutors.ru/egeteoriya/1134-zadanie-1.html',
              },
              { title: 'EGE Turbo — задание 1', url: 'https://egeturbo.ru/ege/rus/tasks/1' },
              {
                title: 'NeoFamily — задание 1 (подбор средств связи)',
                url: 'https://neofamily.ru/russkiy-yazyk/smart-directory/678',
              },
            ],
          },
          {
            title: 'Стилистический анализ текста.',
            links: [
              {
                title: 'Экзамер — средства связи в тексте',
                url: 'https://examer.ru/ege_po_russkomu_yaziku/teoriya/sredstva_svyazi_v_tekste',
              },
              {
                title: 'Легион — стилистика (копилка)',
                url: 'https://www.legionr.ru/company/kopilka/127924/',
              },
            ],
          },
          {
            title: 'Орфоэпический минимум (словарь ударений).',
            links: [
              {
                title: 'RusTutors — задание 4 (ударения)',
                url: 'https://rustutors.ru/egeteoriya/1137-zadanie-4.html',
              },
              {
                title: 'Skysmart — орфоэпический словарь для ЕГЭ',
                url: 'https://skysmart.ru/articles/russian/orfoepicheskij-slovar-dlya-ege',
              },
              {
                title: '4ege — орфоэпический словник ЕГЭ (2026)',
                url: 'https://4ege.ru/russkiy/71318-slovnik-orfoepicheskij-ege.html',
              },
              {
                title: 'ФИПИ — орфоэпический словник (PDF)',
                url: 'https://doc.fipi.ru/navigator-podgotovki/navigator-ege/2023/ru-slovnik-orfoepicheskij.pdf',
              },
              {
                title: 'Obrazavr — онлайн-тренажёр по ударениям (задание 4)',
                url: 'https://obrazavr.ru/trenazhyory/ege/russkij-yazyk-ege/fonetika-i-orfoepiya/zadanie-4-postanovka-udareniya/',
              },
              {
                title: 'Экзамер — орфоэпические нормы',
                url: 'https://examer.ru/ege_po_russkomu_yaziku/teoriya/orfoepicheskie_normy',
              },
            ],
          },
          {
            title: 'Различение паронимов (эффектный/эффективный, надеть/одеть).',
            links: [
              { title: 'RusTutors — задание 5 (паронимы)', url: 'https://rustutors.ru/egeteoriya/1138-zadanie-5.html' },
              {
                title: 'RusTutors — словарь паронимов со значениями',
                url: 'https://rustutors.ru/egeteoriya/1414-paronimy-egje.html',
              },
              {
                title: 'ParonymOnline — словарь (ФИПИ) + примеры',
                url: 'https://paronymonline.ru/ege.html',
              },
              {
                title: 'ЕГЭ-Студия — задание 5 (паронимы)',
                url: 'https://ege-study.ru/ru/ege/materialy/russkij-yazyk/zadanie-5/',
              },
              {
                title: 'NeoFamily — паронимы',
                url: 'https://neofamily.ru/russkiy-yazyk/smart-directory/85',
              },
              {
                title: 'СдамГИА — практика по паронимам',
                url: 'https://rus-ege.sdamgia.ru/test?theme=203',
              },
            ],
          },
          {
            title:
              'Исправление плеоназмов и тавтологий (лексические нормы).',
            links: [
              { title: 'Экзамер — теория (лексические нормы)', url: 'https://examer.ru/ege_po_russkomu_yaziku/teoriya/' },
              {
                title: 'EGE Turbo — практика (задание 6)',
                url: 'https://egeturbo.ru/ege/rus/tasks',
              },
            ],
          },
          {
            title: 'Образование форм имен существительных и числительных.',
            links: [
              {
                title: 'Экзамер — морфологические нормы',
                url: 'https://examer.ru/ege_po_russkomu_yaziku/teoriya/',
              },
              {
                title: 'RusTutors — теория/практика (задание 7)',
                url: 'https://rustutors.ru/egeteoriya/',
              },
            ],
          },
        ],
      }),
    },
    {
      id: 'phase-2',
      title: 'Раздел 2: Сочинение (Задание 27) — структура',
      description: 'База: научиться быстро формулировать проблему.',
      topics: buildTopics({
        sectionId: 2,
        defaultDescription: defaultTopicDescription,
        items: [
          {
            title: 'Формулировка проблемы.',
            description:
              'Как найти главную мысль автора и задать к ней правильный вопрос.',
            links: [
              {
                title: 'RusTutors — сочинение (задание 27)',
                url: 'https://rustutors.ru/egeteoriya/1160-sochinenie.html',
              },
              {
                title: 'GodEGE — как писать сочинение ЕГЭ',
                url: 'https://godege.ru/8bit/russkiy-ege/kak-pisat-sochineniya-ege/',
              },
              {
                title: 'РУДН Unikum — сочинение: задание 27',
                url: 'https://unikum.rudn.ru/blog/sochinenie-zadanie-27-iz-ege-po-russkomu',
              },
              {
                title: 'Maximum — сочинение на ЕГЭ по русскому',
                url: 'https://blog.maximumtest.ru/post/sochinenie-na-ege-po-russkomu-yazyku.html',
              },
            ],
          },
        ],
      }),
    },
  ],
  standard: [
    {
      id: 'phase-3',
      title: 'Раздел 3: Орфография (Задания 9–15)',
      description:
        'Уровень: Уверенный средний (60+). Орфография — самый объёмный блок.',
      topics: buildTopics({
        sectionId: 3,
        defaultDescription: defaultTopicDescription,
        items: [
          {
            title:
              'Правописание корней и приставок: чередующиеся гласные, ПРЕ-/ПРИ-, Ъ и Ь (задания 9–10).',
            links: [
              { title: 'RusTutors — задание 9', url: 'https://rustutors.ru/egeteoriya/1142-zadanie-9.html' },
              {
                title: 'Умскул — орфография: задания 9–15',
                url: 'https://umschool.net/library/russkij-yazyk/orfografiya-na-ege-zadaniya-9-15/',
              },
              {
                title: 'Maximum — орфография на ЕГЭ',
                url: 'https://blog.maximumtest.ru/post/orfografiya-na-ege-po-russkomu-yazyku.html',
              },
              {
                title: 'EGE Turbo — практика (задания 9–10)',
                url: 'https://egeturbo.ru/ege/rus/tasks',
              },
              {
                title: 'Maximum — правописание корней (задание 9)',
                url: 'https://maximumtest.ru/uchebnik/11-klass/russky-yazyk/pravopisaniye-korney--zadaniye-9-yege',
              },
            ],
          },
          {
            title:
              'Правописание суффиксов и личных окончаний глаголов (задания 11–12).',
            links: [
              {
                title: 'Умскул — орфография: задания 9–15',
                url: 'https://umschool.net/library/russkij-yazyk/orfografiya-na-ege-zadaniya-9-15/',
              },
              {
                title: 'Maximum — орфография на ЕГЭ',
                url: 'https://blog.maximumtest.ru/post/orfografiya-na-ege-po-russkomu-yazyku.html',
              },
              {
                title: 'EGE Turbo — практика (задание 12)',
                url: 'https://egeturbo.ru/ege/rus/tasks',
              },
            ],
          },
          {
            title:
              'Слитное и раздельное написание НЕ (задание 13) и Н/НН (задание 15).',
            links: [
              { title: 'RusTutors — задание 15 (Н/НН)', url: 'https://rustutors.ru/egeteoriya/1147-zadanie-15.html' },
              { title: 'EGE Turbo — задание 15', url: 'https://egeturbo.ru/ege/rus/tasks/15' },
              { title: 'NeoFamily — Н/НН', url: 'https://neofamily.ru/russkiy-yazyk/smart-directory/677' },
              {
                title: 'Умскул — орфография: задания 9–15',
                url: 'https://umschool.net/library/russkij-yazyk/orfografiya-na-ege-zadaniya-9-15/',
              },
            ],
          },
        ],
      }),
    },
    {
      id: 'phase-4',
      title: 'Раздел 4: Пунктуация (Задания 16–21)',
      description:
        'Пунктуация: закрепить правила и научиться быстро видеть конструкции.',
      topics: buildTopics({
        sectionId: 4,
        defaultDescription: defaultTopicDescription,
        items: [
          {
            title:
              'Запятые в простом и сложном предложении (задания 16, 19, 20).',
            links: [
              { title: 'RusTutors — задание 16', url: 'https://rustutors.ru/egeteoriya/1149-zadanie-16.html' },
              {
                title: 'Умскул — пунктуация: задания 16–21',
                url: 'https://umschool.net/library/russkij-yazyk/punktuacziya-na-ege-zadaniya-16-21/',
              },
              {
                title: 'Skysmart — правила пунктуации для ЕГЭ',
                url: 'https://skysmart.ru/articles/russian/vse-pravila-punktuacii-dlya-ege',
              },
              {
                title: 'Webium — пунктуация в ЕГЭ по русскому',
                url: 'https://webium.ru/media/punktuaciya-v-ege-po-russkomu-yazyku/',
              },
            ],
          },
          {
            title:
              'Обособленные члены предложения: причастные и деепричастные обороты (задания 17–18).',
            links: [
              {
                title: 'Школково — причастие и деепричастие',
                url: 'https://russkij.shkolkovo.net/catalog/obosoblennye_chleny_predlozheniya/prichastie_i_deeprichastie',
              },
              {
                title: 'Умскул — пунктуация: задания 16–21',
                url: 'https://umschool.net/library/russkij-yazyk/punktuacziya-na-ege-zadaniya-16-21/',
              },
              {
                title: 'Skysmart — правила пунктуации для ЕГЭ',
                url: 'https://skysmart.ru/articles/russian/vse-pravila-punktuacii-dlya-ege',
              },
            ],
          },
          {
            title: 'Вводные слова и обращения.',
            links: [
              {
                title: 'Skysmart — правила пунктуации для ЕГЭ',
                url: 'https://skysmart.ru/articles/russian/vse-pravila-punktuacii-dlya-ege',
              },
              {
                title: 'NeoFamily — вводные слова и обращения',
                url: 'https://neofamily.ru/russkiy-yazyk/smart-directory/108',
              },
            ],
          },
        ],
      }),
    },
  ],
  hard: [
    {
      id: 'phase-5',
      title: 'Раздел 5: Глубокий анализ и сложные нормы',
      description:
        'Уровень: Высокий результат (80+). Сложные задания и глубокий анализ текста.',
      topics: buildTopics({
        sectionId: 5,
        defaultDescription: defaultTopicDescription,
        items: [
          {
            title:
              'Синтаксические нормы (задание 8): причастный оборот, косвенная речь, связь подлежащего и сказуемого.',
            links: [
              { title: 'RusTutors — задание 8', url: 'https://rustutors.ru/egeteoriya/1141-zadanie-8.html' },
              { title: 'ЕГЭ-Студия — задание 8', url: 'https://ege-study.ru/ru/ege/materialy/russkij-yazyk/zadanie-8/' },
              { title: 'EGE Turbo — задание 8', url: 'https://egeturbo.ru/ege/rus/tasks/8' },
              {
                title: 'RusTutors — практика с ответами (задание 8)',
                url: 'https://rustutors.ru/egeteoriya/egepraktika/1848-zadanie-8-egje-praktika-s-otvetami.html',
              },
              {
                title: '100points — как решать задание 8',
                url: 'https://100points.ru/wiki/russian/sintaksicheskie-normy-kak-reshat-zadanie-8/',
              },
              {
                title: 'GodEGE — задание 8 (синтаксические нормы)',
                url: 'https://godege.ru/8bit/russkiy-ege/8-zadanie-ege-po-russkomu-yazyku-2023-goda-sintaksicheskie-normy-na-ege/',
              },
            ],
          },
          {
            title: 'Типы речи (задания 22–26).',
            links: [
              { title: 'Экзамер — теория', url: 'https://examer.ru/ege_po_russkomu_yaziku/teoriya/' },
            ],
          },
          {
            title:
              'Средства связи и тропы (задания 22–26): метафора, эпитет, парцелляция, анафора.',
            links: [
              { title: 'RusTutors — задание 26', url: 'https://rustutors.ru/egeteoriya/1159-zadanie-26.html' },
              {
                title: '4ege — шпаргалка по средствам выразительности',
                url: 'https://4ege.ru/russkiy/60172-jazykovye-sredstva-vyrazitelnosti-zadanie-22.html',
              },
              { title: 'NeoFamily — средства выразительности', url: 'https://neofamily.ru/russkiy-yazyk/smart-directory/90' },
              { title: 'EGE Turbo — задание 22', url: 'https://egeturbo.ru/ege/rus/tasks/22' },
              { title: 'Сотка — средства выразительности', url: 'https://sotkaonline.ru/blog/ege/средства-языковой-выразительности/' },
              {
                title: 'Obrazavr — теория (задание 22)',
                url: 'https://obrazavr.ru/courses-ege/russkij-yazyk-ege/izobrazitelno-vyrazitelnye-sredstva/zadanie-22/zadanie-22-teoriya/',
              },
            ],
          },
          {
            title:
              'Пунктуационный анализ (задание 21): тире, двоеточие, все правила.',
            links: [
              { title: 'RusTutors — задание 21', url: 'https://rustutors.ru/egeteoriya/1154-zadanie-21.html' },
              { title: 'EGE Turbo — задание 21', url: 'https://egeturbo.ru/ege/rus/tasks/21' },
              { title: 'GodEGE — задание 21', url: 'https://godege.ru/8bit/russkiy-ege/21-zadanie-v-ege-po-russkomu-yazyku/' },
              { title: 'NeoFamily — вводные слова и обращения', url: 'https://neofamily.ru/russkiy-yazyk/smart-directory/108' },
            ],
          },
        ],
      }),
    },
    {
      id: 'phase-6',
      title: 'Раздел 6: Сочинение на максимум',
      description:
        'К2–К4: научиться писать комментарий, позицию автора и свою позицию без “воды”.',
      topics: buildTopics({
        sectionId: 6,
        defaultDescription: defaultTopicDescription,
        items: [
          {
            title:
              'Комментарий к проблеме (К2): два примера, пояснение, смысловая связь.',
            links: [
              {
                title: 'RusTutors — комментарий в сочинении',
                url: 'https://rustutors.ru/egeteoriya/1206-kommentariy-ege-2019.html',
              },
              {
                title: 'RusTutors — примеры комментария (К2)',
                url: 'https://rustutors.ru/egeteoriya/1665-primery-kommentarija-v-sochinenii-egje-po-russkomu-jazyku.html',
              },
              {
                title: '4ege — пишем комментарий',
                url: 'https://4ege.ru/russkiy/6212-pishem-kommentariy-k-probleme.html',
              },
              {
                title: 'RusTutors — сочинение (задание 27)',
                url: 'https://rustutors.ru/egeteoriya/1160-sochinenie.html',
              },
            ],
          },
          {
            title: 'Авторская позиция и своя позиция (К3–К4).',
            links: [
              {
                title:
                  'Propostuplenie — шаблоны и примеры (задание 27)',
                url: 'https://propostuplenie.ru/article/zadaniye-27-v-yege-po-russkomu-shablony-gotovye-primery-iz-literatury-i-maksimalnoye-kolichestvo-oshibok',
              },
              {
                title: '1sept — методика/материалы',
                url: 'https://urok.1sept.ru/articles/705047',
              },
              {
                title: 'GodEGE — как писать сочинение ЕГЭ',
                url: 'https://godege.ru/8bit/russkiy-ege/kak-pisat-sochineniya-ege/',
              },
              {
                title: 'Maximum — сочинение на ЕГЭ по русскому',
                url: 'https://blog.maximumtest.ru/post/sochinenie-na-ege-po-russkomu-yazyku.html',
              },
            ],
          },
        ],
      }),
    },
  ],
};
