# **Архітектура та Теорія Agentic IDE: Правила, Команди та Навички**

## **Фундаментальне дослідження для першої сесії воркшопу**

### **Вступ: Парадигмальний зсув від "Copilot" до "Agentic Engineering"**

Сучасна індустрія розробки програмного забезпечення переживає тектонічний зсув, який можна порівняти за значущістю з переходом від командного рядка до графічних інтерфейсів або від водоспадної моделі (Waterfall) до гнучких методологій (Agile). Ми є свідками завершення епохи "Copilot" (2частина 2021 – 2023 роки), яка характеризувалася використанням stateless (безстанове збереження) автодоповнення коду та реактивною генерацією окремих функцій, і вступу в еру **Agentic IDE** (2024 рік – сьогодення).1 Ця нова епоха визначається появою систем, здатних до автономного мислення, багатоетапного планування, використання інструментів (tool use) та підтримки довготривалої пам'яті (persistent memory).

Для учасників воркшопу "Правила, команди та навички для Agentic IDE" критично важливо розуміти, що Agentic IDE — це не просто текстовий редактор з чат-ботом на бічній панелі. Це оркестроване середовище, де штучний інтелект функціонує як "Tech Lead in a Box" (технічний лід у коробці) або повноцінний колаборативний партнер.1 Традиційні асистенти, такі як ранні версії GitHub Copilot, чудово справлялися з локальними фрагментами коду, але зазнавали невдачі, коли зміни вимагали скоординованого редагування маршрутів, сервісів, тестів та документації. Агентні системи, натомість, орієнтовані на подолання цього розриву шляхом узгодження змін коду з експліцитними специфікаціями та багатофайловими планами.1

У цьому звіті, що слугує теоретичним фундаментом для першої сесії воркшопу, ми детально розглянемо архітектуру автономії, механізми керування контекстом через правила (.cursorrules, CLAUDE.md), когнітивну архітектуру "Банку Пам'яті" (Memory Bank) та навички оркестрації намірів (Intent Orchestration). Ми переходимо від "Імперативної розробки" (написання циклів та синтаксису) до "Розробки, керованої намірами" (Intent-Driven Development), де розробник стає архітектором рішень, а агент — виконавцем.2

## ---

**Частина I: Теоретичний каркас Agentic IDE**

### **1.1 Визначення та класифікація Agentic IDE**

Щоб ефективно викладати навички роботи з сучасними інструментами, необхідно чітко розмежувати поняття. Agentic IDE відрізняється від класичних редакторів коду наявністю **агентності** (agency). Якщо традиційні LLM (Large Language Models) є реактивними — вони відповідають на позицію курсору або дискретний запит (prompt), то агентні системи є проактивними та цілеспрямованими.

Агентні системи в середовищі розробки володіють здатністю до циклу OODA (Observe, Orient, Decide, Act — Спостерігати, Орієнтуватися, Вирішувати, Діяти):

* **Сприйняття (Perceive):** Агент може "читати" файлову систему, аналізувати помилки лінтера, переглядати логи терміналу та навіть розуміти візуальний стан інтерфейсу.  
* **Планування (Plan):** Агент здатен декомпозувати високорівневий намір ("Рефакторинг сервісу аутентифікації") на послідовність атомарних кроків.  
* **Дія (Act):** Виконання термінальних команд, створення файлів, модифікація коду в декількох директоріях одночасно.  
* **Рефлексія (Reflect):** Аналіз результату дії (наприклад, "тест не пройшов") та самокорекція без втручання людини.2

Інструменти, такі як **Kiro**, **Cursor** (особливо в режимі Agent/Composer) та **Claude Code** (CLI), є взірцями цього зсуву. Вони підтримують безперервний цикл виконання та валідації, діючи як автономні агенти, здатні міркувати та адаптуватися в середовищі розробки.2

#### **Таблиця 1.1: Еволюція інструментів розробки**

| Характеристика | Ера Copilot (2021-2023) | Ера Agentic IDE (2024+) |
| :---- | :---- | :---- |
| **Основна функція** | Автодоповнення (Autocomplete) | Оркестрація намірів (Intent Orchestration) |
| **Пам'ять** | Stateless (забуває після закриття вкладки) | Persistent (Memory Bank, Checkpoints) |
| **Область дії** | Окремий файл / Функція | Весь проект / Багатофайлові зміни |
| **Взаємодія** | Реактивна (Prompt \-\> Response) | Проактивна (Goal \-\> Plan \-\> Action \-\> Review) |
| **Інструменти** | VS Code \+ Copilot Extension | Cursor, Windsurf, Claude Code, Kiro |

### **1.2 Архітектура Автономії: Три стовпи**

Теоретична модель Agentic IDE, яку необхідно засвоїти на першій сесії, спирається на три фундаментальні стовпи. Без розуміння цих компонентів робота з агентом перетворюється на хаотичне "промптування".

1. **Контекст (Context):** Це "Модель Світу" для проекту. Агент повинен знати не лише синтаксис мови, але й специфіку архітектури вашого проекту. Технічна реалізація включає індексацію кодової бази (RAG), файли правил (.cursorrules, CLAUDE.md), відкриті вкладки та git diffs. Контекст — це те, що перетворює загальну LLM на спеціалізованого члена вашої команди.5  
2. **Інструменти (Tools):** Це ефектори, за допомогою яких агент змінює світ. Сюди входять операції вводу/виводу файлової системи, виконання команд терміналу, браузерний контроль та використання **MCP (Model Context Protocol)** серверів. Агент без інструментів — це лише консультант; агент з інструментами — це інженер.3  
3. **Пам'ять (Memory):** Це забезпечення безперервності стану. Оскільки LLM мають обмежене вікно контексту і є stateless за своєю природою, критично важливою стає зовнішня пам'ять. Реалізація включає патерни "Memory Bank" (activeContext.md), історію розмов та чекпоінти.8

### **1.3 Роль Model Context Protocol (MCP)**

Важливим теоретичним компонентом для першої сесії є **Model Context Protocol (MCP)**. Це відкритий стандарт, який уніфікує спосіб підключення AI-агентів до зовнішніх даних та інструментів. В Agentic IDE агент не обмежується лише кодовою базою. Через MCP він може надсилати запити до бази даних PostgreSQL, перевіряти тікети в Jira або Linear, або отримувати актуальну документацію з веб\-ресурсів.7

Це розширює дискусію про "Правила" та "Навички": сучасний розробник повинен вміти не лише писати код, але й конфігурувати ці з'єднання, фактично розширюючи сенсорний та дієвий діапазон агента. Наприклад, налаштування сервера MCP для доступу до GitHub дозволяє агенту автоматично створювати Pull Request, аналізувати історію комітів та розуміти контекст задачі без необхідності ручного копіювання інформації.10

### **1.4 Інтерфейс майбутнього: Від Chat UI до Agentic Canvas**

Традиційний інтерфейс чату ("Chat UI") все частіше розглядається як застаріла або "лінива" абстракція.11 Майбутня модель взаємодії, яку ми бачимо в режимі **Composer** у Cursor або термінальному інтерфейсі **Claude Code**, діє як полотно (canvas), де людина керує потоком змін, а не веде діалог у форматі "пінг-понг".

У режимі Composer (або Agent mode) користувач описує бажаний результат, а IDE переходить у режим планування та виконання, відображаючи проміжні кроки ("думки") та конкретні зміни у файлах (diffs) у реальному часі. Це змінює динаміку з "запитання-відповідь" на "команда-виконання-ревізія".12 Розуміння цієї різниці є ключовим для переходу від ментальної моделі "пошуку інформації" до ментальної моделі "делегування завдань".

## ---

**Частина II: Керування Контекстом та Правила (.cursorrules та CLAUDE.md)**

Найважливішою навичкою в Agentic Engineering є **Керування Контекстом (Context Governance)**. LLM без контексту — це узагальнена енциклопедія; LLM з курованим контекстом — це старший інженер вашої конкретної команди. Цей розділ детально описує механізми примусового надання цього контексту через файли конфігурації.

### **2.1 Філософія "Правил" (Rules)**

Файли правил — зокрема .cursorrules для Cursor та CLAUDE.md для Claude Code — слугують ін'єкцією мислення "Системи 2" для штучного інтелекту.5 Це не просто бібліотеки промптів; це **поведінкові конфігурації**, що зберігаються між сесіями. Вони діють як механізм обмеження, звужуючи латентний простір моделі до специфічного розподілу ймовірностей, що відповідає стандартам кодування вашого проекту.

Правила дозволяють уникнути "синдрому чистого аркуша", коли агенту потрібно щоразу пояснювати базові речі (наприклад, "ми використовуємо TypeScript, а не JavaScript"). Вони перетворюють неявні знання команди (tribal knowledge) на явні інструкції для AI.

#### **2.1.1 Ієрархія Правил**

Для теоретичної частини воркшопу критично важливо встановити порядок пріоритетності правил. Конфлікти між правилами вирішуються через ієрархію специфічності 7:

1. **Інструкції конкретної сесії/агента (Highest Priority):** Промпт, введений користувачем у поточному чаті, або інструкції, специфічні для конкретного запуску агента.  
2. **Правила директорії/агента:** Наприклад, файл .cursorrules, розташований у підпапці frontend/, буде мати пріоритет над кореневим файлом для файлів у цій папці. Також сюди відносяться специфічні файли на кшталт .claude/rules/\*.md.  
3. **Правила кореня проекту:** Головний файл .cursorrules або CLAUDE.md у корені репозиторію. Це основне джерело правди для проекту.  
4. **Глобальні/Користувацькі правила (Lowest Priority):** Файли на кшталт \~/.claude/CLAUDE.md або глобальні налаштування Cursor "Rules for AI".

*Інсайт:* Поширеною помилкою при впровадженні Agentic IDE є розміщення архітектурних обмежень конкретного проекту в глобальних налаштуваннях. Це призводить до галюцинацій при перемиканні між репозиторіями (наприклад, агент намагається використовувати Tailwind у проекті з CSS Modules). Найкраща практика ("Best Practice") — чітко розділяти глобальні правила, що стосуються *персони* (наприклад, "будь лаконічним", "не вибачайся"), та проектні правила, що стосуються *архітектури*.15

### **2.2 Глибокий аналіз: Структура та Стратегія .cursorrules**

Файл .cursorrules є інструкцією рівня репозиторію для Cursor. Його правильне налаштування може підвищити ефективність роботи агента на порядок.

#### **2.2.1 Анатомія високоефективного правила**

Файл правил не повинен бути "потоком свідомості". Він вимагає структурованої інженерії. Патерн **"Persona-Context-Constraint"** (Персона-Контекст-Обмеження) є високоефективним підходом до написання правил 16:

* **Персона (Persona):** "Ти — Старший QA-інженер, що спеціалізується на Playwright". Це налаштовує модель на доступ до специфічних кластерів навчальних даних (наприклад, пріоритет крайових випадків над "щасливими шляхами").  
* **Контекст (Context):** "Цей проект використовує Next.js 14 App Router". Це запобігає генерації застарілого коду (наприклад, використання getStaticProps замість Server Components).  
* **Обмеження (Constraint):** "Ніколи не використовуй тип any; завжди визначай інтерфейси. Використовуй функціональні компоненти замість класових". Це забезпечує дотримання стандартів якості.18

#### **2.2.2 Техніки оптимізації**

* **Лаконічність:** Великі файли правил "розмивають" увагу моделі. Правила мають бути сфокусованими та дієвими. Принцип "Менше — це більше" є ключовим; рекомендується тримати файл у межах 300–500 рядків для забезпечення високого рівня дотримання інструкцій.5  
* **Форматування:** Хоча Markdown є стандартом, використання **XML-тегів** (наприклад, \<critical\_rules\>...\</critical\_rules\>) всередині markdown допомагає потужнішим моделям (таким як Claude 3.5 Sonnet) більш суворо парсити інструкції та відокремлювати їх від загального тексту.19  
* **Анти-патерни:** Уникайте загальних порад на кшталт "Пиши хороший код". Замість цього використовуйте конкретні директиви: "Використовуй const замість let", "Всі запити до БД повинні проходити через шар services/".18

#### **2.2.3 Приклади доменно-специфічних правил**

Для слайдів воркшопу доцільно використати контрастні приклади для різних ролей:

**Для Архітектора / Технічного Ліда:**

* *Фокус:* Структура проекту, патерни проектування, заборонені залежності.  
* *Правило:* "Віддавай перевагу композиції над наслідуванням. Усі схеми бази даних повинні бути визначені в db/schema.ts з використанням Drizzle ORM. Не створюй нові файли в корені проекту без дозволу".17

**Для DevOps Інженера:**

* *Фокус:* Ідемпотентність, безпека, стан інфраструктури (IaC).  
* *Правило:* "Не хардкодь секрети. Використовуй змінні оточення. Завжди використовуй віддалені бекенди (S3/GCS) для Terraform state. Усі модулі Terraform повинні мати фіксовані версії провайдерів".20

**Для QA Інженера:**

* *Фокус:* Ізоляція тестів, фікстури (fixtures), доступність (accessibility).  
* *Правило:* "Використовуй фікстури Playwright для налаштування оточення. Кожен UI компонент повинен мати відповідний файл .spec.ts. Забезпеч відповідність WCAG використовуючи бібліотеку @axe-core".22

### **2.3 Глибокий аналіз: CLAUDE.md та Контекст CLI**

Якщо .cursorrules керує поведінкою в IDE, то CLAUDE.md керує поведінкою Agentic CLI (Claude Code).

#### **2.3.1 Механізм затягування контексту (Context Pull)**

Коли Claude Code ініціалізується (/init), він читає CLAUDE.md для розуміння середовища. На відміну від Cursor, який постійно індексує кодову базу у фоновому режимі (embeddings), Claude Code значною мірою покладається на цей файл для отримання "початкових знань" (bootstrap knowledge).6

Це робить CLAUDE.md ідеальним місцем для документування:

* **Команд збірки:** npm run build або cargo build. Агент *буде* намагатися запустити їх для перевірки своєї роботи.  
* **Команд тестування:** npm test \-- \--watch.  
* **Стайлгайду:** "Використовуй відступи у 2 пробіли".  
* **Етикету репозиторію:** Правила іменування гілок, стратегії злиття (merge vs rebase).6

#### **2.3.2 Архітектурне індексування**

Для великих кодових баз ефективним патерном є генерація агентом індексних файлів: general\_index.md (список усіх файлів та їх призначення) та detailed\_index.md (сигнатури функцій та класів). Потім ці файли реферуються в CLAUDE.md за допомогою синтаксису @ (наприклад, "Звернись до @detailed\_index.md для отримання сигнатур API"). Це дає агенту "мапу" території без необхідності завантажувати вміст кожного файлу в контекстне вікно, що економить токени і покращує точність.24

*Інсайт:* CLAUDE.md діє як "шпаргалка" для агента. Якщо агент часто галюцинує команду збірки або намагається запустити yarn у проекті з npm, явне документування правильної команди в CLAUDE.md розриває цикл помилок.2

#### **2.3.3 Шаблони для CLAUDE.md**

Існують спеціалізовані шаблони для різних типів проектів, які можна адаптувати під потреби команди. Наприклад, шаблон для веб\-розробки буде включати інструкції щодо координації фронтенду та бекенду, патерни API та стратегії тестування, тоді як шаблон для High Performance Computing (HPC) фокусуватиметься на профілюванні, бенчмаркінгу та оптимізації.25

## ---

**Частина III: Когнітивна Архітектура "Банку Пам'яті" (Memory Bank)**

Найзначнішим теоретичним внеском для першої сесії є концепція **Банку Пам'яті (Memory Bank)**. Цей патерн вирішує фундаментальне обмеження LLM: **statelessness** (відсутність стану). Коли сесія чату завершується або вікно контексту переповнюється, "мозок" агента перезавантажується. Банк Пам'яті екстерналізує цю пам'ять у файлову систему, перетворюючи саму кодову базу на машину станів зі збереженням (persistent state machine).8

### **3.1 Проблема: Амнезія в розробці**

У традиційних робочих процесах з Copilot розробник змушений постійно пояснювати цілі проекту заново. "Ми мігруємо на TypeScript", "Пам'ятай, ми використовуємо патерн Service Repository". Це неефективно, втомлює і призводить до помилок, коли агент забуває попередні інструкції. Банк Пам'яті гарантує, що *стан проекту* відокремлений від *стану сесії чату*.26 Це дозволяє агенту "згадати" архітектурні рішення, прийняті тиждень тому, просто прочитавши відповідний файл.

### **3.2 Архітектура Банку Пам'яті**

Банк Пам'яті складається зі стандартизованого набору Markdown-файлів, які зазвичай зберігаються в директорії .cursor/memory або memory-bank/. Ці файли утворюють ієрархію стабільності проти волатильності (stability vs volatility).27

#### **Таблиця 3.1: Основні файли Банку Пам'яті**

| Файл | Волатильність | Призначення | Когнітивний аналог |
| :---- | :---- | :---- | :---- |
| **projectbrief.md** | Низька | "Полярна зірка". Високорівневі цілі, скоуп (обсяг робіт) та основні вимоги. | Довгострокові цілі / Місія |
| **productContext.md** | Низька/Середня | Користувацькі історії (User Stories), UX цілі, "Чому ми це будуємо". | Семантична пам'ять (Доменні знання) |
| **systemPatterns.md** | Середня | Архітектурні рішення, вибір стеку, патерни дизайну (наприклад, "Ми використовуємо Atomic Design"). | Процедурна пам'ять (Навички) |
| **techContext.md** | Середня | Версії залежностей, налаштування середовища, обмеження. | Декларативна пам'ять (Факти) |
| **activeContext.md** | Висока | Над чим працюємо *прямо зараз*. Фокус поточної сесії. | **Робоча пам'ять (Working Memory)** |
| **progress.md** | Висока | Чек-лист виконаних та запланованих завдань. Статус проекту. | Епізодична пам'ять (Історія) |

### **3.3 Цикл Оновлення: Протокол "Plan/Act"**

Навчання навичці роботи з Банком Пам'яті передбачає впровадження суворої дисципліни (або налаштування агента для її примусового виконання). Це цикл **Read-Verify-Execute-Update** (Читати-Перевірити-Виконати-Оновити) 30:

1. **Читання (Read):** На початку сесії агент *повинен* прочитати activeContext.md та progress.md, щоб зрозуміти поточний стан справ.  
2. **Верифікація (Verify):** Агент перевіряє, чи відповідає запитуване завдання глобальним цілям, описаним у projectbrief.md.  
3. **Планування (Plan):** Перед написанням коду агент оновлює activeContext.md, записуючи туди запропонований план. Наприклад: "Я планую модифікувати auth.ts для додавання MFA, використовуючи бібліотеку otplib".  
4. **Виконання (Execute):** Агент виконує задачу кодування.  
5. **Оновлення (Update):** Після завершення агент переміщує пункт у progress.md до статусу "Виконано" (Done) та очищує або оновлює activeContext.md для наступного завдання.

*Інсайт:* Цей робочий процес перетворює Agentic IDE на сутність, що зберігає стан (stateful entity). Навіть якщо розробник залишить проект на тиждень, він (або агент) може відновити роботу миттєво, просто прочитавши activeContext.md. Це також полегшує онбординг нових членів команди — як людей, так і штучних агентів.31

### **3.4 Реалізація: Ручна проти Автоматизованої**

Існує кілька підходів до впровадження Банку Пам'яті:

* **Ручний (Manual):** Розробник явно просить агента: "Онови банк пам'яті нашим останнім рішенням щодо схеми БД". Це вимагає дисципліни, але дає повний контроль.32  
* **Автоматизований (Rule-Based):** Запис у .cursorrules може примусити до такої поведінки: "Перед кожною відповіддю перевіряй activeContext.md. Після кожної зміни файлу пропонуй оновлення progress.md".28  
* **Автоматизований (MCP):** Просунуті реалізації використовують MCP-сервер (наприклад, roo-code-memory-bank-mcp-server), щоб програмно керувати цими файлами. Це дозволяє агенту читати та писати в банк пам'яті як в базу даних, запобігаючи випадковому видаленню власної пам'яті або галюцинаціям щодо вмісту файлів.34

### **3.5 Приклад структури файлів activeContext.md та productContext.md**

Хоча у досліджених матеріалах немає повного шаблону, на основі описів та найкращих практик 27 можна реконструювати структуру:

**activeContext.md Template:**

# **Current Focus**

\[Короткий опис того, над чим ведеться робота прямо зараз, наприклад: "Реалізація компоненту логіну"\]

## **Recent Changes**

* \[Дата/Час\] Додано валідацію форми в LoginForm.tsx  
* \[Дата/Час\] Створено хук useAuth

## **Current Strategy**

## **Next Steps**

* \[ \] Інтегрувати API endpoint /login  
* \[ \] Додати обробку помилок

**productContext.md Template:**

# **Product Context**

## **Why this project exists**

\[Бізнес-цілі, наприклад: "Спростити управління задачами для малих команд"\]

## **User Experience Goals**

* Швидкість завантаження \< 1с  
* Мобільна адаптивність  
* Інтуїтивний інтерфейс (Material Design)

## **User Stories / Core Features**

* Як користувач, я хочу створювати задачі, щоб планувати свій день.  
* Як менеджер, я хочу бачити прогрес команди.

## ---

**Частина IV: Навички Оркестрації та Робочі Процеси (Workflows)**

Теорія повинна трансформуватися в дію. Цей розділ визначає робочі процеси (Workflows), які використовують Правила та Пам'ять для досягнення інженерних результатів.

### **4.1 "Vibe Coding" проти Інженерного Процесу**

Термін "Vibe Coding" (популяризований у 2025 році) стосується вільного промптування агента для створення додатків "з нуля" без глибокого занурення в код.35 Хоча це потужно для прототипування, професійна інженерія вимагає суворого процесу, який часто називають **Spec-Driven Development** (Розробка на основі специфікацій) або **Intent-Driven Development**.

#### **4.1.1 Пайплайн PRD-to-Code (Від вимог до коду)**

Це "Золотий Шлях" для Agentic IDE. Він мінімізує галюцинації та максимізує відповідність бізнес-логіці.37

1. **PRD (Product Requirements Document):** Розробник пише детальний Markdown-файл, що описує функцію. Він повинен бути експліцитним щодо обмежень (наприклад, "Затримка має бути \<200мс", "Використовувати тільки існуючі компоненти UI"). Документ повинен мати чітку структуру: Вступ, Проблема, Огляд Рішення, Історії Користувачів, Технічні Вимоги, Критерії Прийняття.38  
2. **Планування (Planning/RFC):** Розробник просить агента: "Проаналізуй @feature-specs.md. Створи покроковий план реалізації в @activeContext.md". На цьому етапі агент може створити RFC (Request for Comments) — документ з пропозицією технічної реалізації.  
3. **Ревізія (Review):** Розробник переглядає план. *Критичний крок:* Людина затверджує *логіку* до того, як AI напише *синтаксис*. Це економить час на налагодження концептуальних помилок.  
4. **Виконання (Iterative Execution):** Агент реалізує план крок за кроком. "Реалізуй Крок 1: Схема бази даних".  
5. **Верифікація (Verification):** "Запусти тести. Якщо вони впали, виправ їх". Агент перевіряє код на відповідність Критеріям Прийняття з PRD.

*Інсайт:* Цей робочий процес змінює розподіл часу розробника. Менше часу витрачається на друкування коду; більше часу витрачається на **Специфікацію** та **Ревізію**. PRD фактично стає "промптом" для системи.38

### **4.2 Майстерність Команд: CLI проти Composer**

Воркшоп повинен розрізняти інтерфейси та навички роботи з ними:

* **Cursor Composer (Ctrl+I / Cmd+I):** Інтерфейс для багатофайлового редагування. Найкраще підходить для задач типу "Рефакторинг всього модуля" або "Створи нову фічу, зачіпаючи фронтенд і бекенд". Composer "бачить" увесь контекст і застосовує редагування транзакційно (всі файли змінюються одночасно).19  
* **Claude Code (CLI):** Інтерфейс командного рядка. Найкраще підходить для "Глибокої роботи" (Deep Work) та системного адміністрування. Він перевершує графічні інтерфейси у завданнях, що вимагають використання інструментів (Tool Use), наприклад: "Запусти сервер, слідкуй за логами і виправляй будь-які помилки, що виникають". Це агентний цикл, який живе в терміналі.6

**Навичка ланцюжкового виконання команд:** Здатність поєднувати команди в логічні ланцюжки. Наприклад, у Claude Code: /init (ініціалізація пам'яті) $\\rightarrow$ /plan (генерація архітектури) $\\rightarrow$ /act (виконання).42 У Cursor: @Codebase (пошук по всіх файлах) $\\rightarrow$ "Save this context to a new file" (збереження контексту).

### **4.3 Просунутий Workflow: "Пильне" Дерево Проекту (Watchful Project Tree)**

Для підтримки високої точності у великих проектах важливою навичкою є керування "Контекстом Файлового Дерева". Інструменти на кшталт **Cursor Watchful Headers** автоматизують це, додаючи заголовки до файлів (наприклад, \# File: src/utils/auth.py) та підтримуючи актуальну структуру дерева в .cursorrules. Це допомагає агенту розуміти, де саме в ієрархії знаходиться файл, запобігаючи створенню дублікатів файлів у неправильних директоріях або втраті контексту шляхів.43

Це вирішує проблему "сліпоти" агента, коли він бачить вміст файлу, але не розуміє його розташування відносно інших модулів. Утиліта автоматично оновлює дерево проекту в правилах, дозволяючи агенту бачити структуру навіть тих файлів, які не відкриті в редакторі.

## ---

**Частина V: Стратегії Реалізації та Рольові Моделі**

У цьому розділі ми розглянемо, як застосовувати теорію на практиці для різних ролей у команді розробки, використовуючи приклади правил та робочих процесів.

### **5.1 Рольові Моделі Агентів**

Agentic IDE дозволяє створювати спеціалізованих агентів, змінюючи їхні правила (System Prompts). Ось як це виглядає для ключових ролей:

#### **5.1.1 QA Engineer (Інженер з якості)**

Агент, налаштований на роль QA, фокусується на тестуванні, автоматизації та виявленні дефектів.

* **Правила (.cursorrules):**  
  * "Ти — експерт з автоматизації тестування Playwright/Cypress".  
  * "Завжди пиши тести для 'unhappy path' (негативні сценарії)".  
  * "Використовуй Page Object Model".  
  * "Перевіряй доступність (Accessibility) за допомогою axe-core".22  
* **Workflow:** Розробник надає реалізовану фічу, агент аналізує код і генерує план тестування в test-plan.md, після затвердження — пише автотести.

#### **5.1.2 DevOps Engineer (Інженер з інфраструктури)**

Агент фокусується на Infrastructure as Code (IaC), CI/CD та хмарних сервісах.

* **Правила (.cursorrules):**  
  * "Ти — експерт з Terraform та Kubernetes".  
  * "Ніколи не хардкодь IP-адреси або секрети".  
  * "Використовуй змінні для всіх конфігурованих значень".  
  * "Завжди перевіряй валідність YAML файлів перед пропозицією змін".20  
* **Workflow:** "Проаналізуй main.tf і запропонуй рефакторинг для використання модулів", "Згенеруй Helm chart для цього мікросервісу".

#### **5.1.3 Architect / Tech Lead**

Агент виступає в ролі охоронця архітектури та якості коду.

* **Правила (.cursorrules):**  
  * "Фокусуйся на чистоті коду, SOLID принципах та патернах проектування".  
  * "Заборонено пряме звернення до БД з контролерів, використовуй сервісний шар".  
  * "Вимагай типізацію (TypeScript) для всіх нових функцій".17  
* **Workflow:** Використовується для рев'ю коду ("Review this PR against our.cursorrules") або планування нових модулів.

### **5.2 Практична реалізація для Воркшопу (Session 1\)**

Воркшоп повинен надати учасникам конкретні артефакти, які вони можуть використати одразу.

#### **5.2.1 Візуалізація Концепцій**

Для слайдів sli.dev рекомендується використати такі візуалізації:

1. **Спектр Агентності:** Діаграма прогресу: *Autocomplete (Copilot)* $\\rightarrow$ *Chat (ChatGPT)* $\\rightarrow$ *Context-Aware (Cursor)* $\\rightarrow$ *Agentic Loop (Claude Code/Kiro)*.  
2. **Піраміда Правил:** Візуалізація ієрархії: Глобальні Правила (основа) $\\rightarrow$ Проектні Правила (.cursorrules) $\\rightarrow$ Банк Пам'яті (вершина).  
3. **Цикл Робочого Процесу:** Кругова діаграма: *Spec (PRD)* $\\rightarrow$ *Plan (Memory)* $\\rightarrow$ *Act (Code)* $\\rightarrow$ *Verify (Test)* $\\rightarrow$ *Reflect (Update Memory)*.

#### **5.2.2 "Hello World" для Agentic Rules**

Учасники повинні створити свій перший файл .cursorrules. Шаблон "Senior Dev" є ідеальним педагогічним інструментом.

**Приклад структури шаблону:**

1. **Визначення ролі:** "Ти — Senior \[Language\] Engineer".  
2. **Поведінкові обмеження:** "Думай крок за кроком. Не галюцинуй API, яких не існує. Якщо не впевнений — запитай".  
3. **Технологічний стек:** "Next.js, Tailwind, Supabase".  
4. **Протокол Пам'яті:** "Завжди перевіряй activeContext.md перед початком роботи".

### **5.3 Навичка "Винесення" (Takeaway Skill)**

Головна навичка, яку слід прищепити на Сесії 1 — це "Усвідомлення Контексту" (Context Awareness). Розробник, що використовує Agentic IDE, повинен постійно запитувати себе: "Чи знає агент те, що знаю я?"  
Якщо відповідь "ні", рішенням є не "промптувати сильніше" (prompt harder), а системно виправити розрив у контексті:

1. Оновити **Правило** (Системне виправлення).  
2. Оновити **Банк Пам'яті** (Виправлення стану).  
3. Покращити **Специфікацію/PRD** (Виправлення наміру).

## ---

**Висновок: Нова Дисципліна Розробки**

Перехід до Agentic IDE представляє собою фундаментальну зміну в дисципліні програмної інженерії. Вона вимагає зміщення фокусу з запам'ятовування синтаксису на майстерність керування контекстом. "Правила" (.cursorrules) стають новим "Конфігом Лінтера". "Банки Пам'яті" стають новою "Живою Документацією". "Команди/Воркфлоу" стають новим "Процесом Збірки".

Опанувавши ці три елементи — Правила, Команди та Навички — розробники не просто пишуть код швидше; вони проектують системи, здатні писати код самостійно під суворим стратегічним керівництвом людини. Цей теоретичний фундамент готує ґрунт для практичних вправ у наступних сесіях воркшопу, де учасники будуть власноруч будувати та налаштовувати своїх цифрових колег.

## ---

**Додатки: Практичні матеріали для слайдів**

### **Додаток A: Шаблон "Золотого Правила"**

*Базова точка для створення .cursorrules.*

# **Role**

You are a Senior \[Language\] Engineer. You focus on clean, idiomatic code and architectural integrity.

# **Context**

* Stack:  
* Style: \[List preferences, e.g., Functional vs OOP, strict typing\]

# **Workflow Constraints**

1. ALWAYS read memory-bank/activeContext.md before starting any task.  
2. Plan your changes step-by-step in the chat before executing code.  
3. If you change a file structure or dependencies, update memory-bank/techContext.md.  
4. Never break the build. Run tests after every significant change.  
5. Use consistent naming conventions as defined in existing files.

### **Додаток B: Структура директорії Банку Пам'яті**

.cursor/ (or root)  
└── memory/  
├── projectbrief.md (The "Why" and "What" \- High Level)  
├── productContext.md (User Stories, UX Requirements)  
├── systemPatterns.md (The "How" \- Architecture, Design Patterns)  
├── techContext.md (Stack, Dependencies, Constraints)  
├── activeContext.md (The "Now" \- Current Task, Recent Decisions)  
└── progress.md (The "Status" \- Roadmap Checklist)

### **Додаток C: Шпаргалка ключових команд (Key Commands Cheat Sheet)**

#### **Таблиця 6.1: Основні команди Agentic IDE**

| Команда | Інструмент | Функція | Коли використовувати |
| :---- | :---- | :---- | :---- |
| **/init** | Claude Code | Ініціалізація пам'яті та конфігурації агента. | На початку роботи з новим проектом. |
| **Cmd+I** (Ctrl+I) | Cursor | Відкриття Composer для багатофайлових редагувань. | Для реалізації фіч, рефакторингу, складних змін. |
| **@Codebase** | Cursor | Контекстний пошук по всьому репозиторію. | Коли потрібно відповісти на питання про весь проект. |
| **/plan** | Agentic (General) | Запуск режиму "Thinking" для створення специфікації. | Перед початком кодування складної задачі. |
| **/act** | Claude Code | Виконання запланованих дій (термінал, код). | Після затвердження плану. |
| **@Web** | Cursor | Пошук інформації в інтернеті. | Для пошуку документації нових бібліотек. |

---

**Кінець звіту**

#### **Works cited**

1. What Is Kiro? Agentic AI IDE Definition & Workflow Explained \- Skywork.ai, accessed January 11, 2026, [https://skywork.ai/blog/kiro-agentic-ai-ide/](https://skywork.ai/blog/kiro-agentic-ai-ide/)  
2. Kiro AI: Agentic IDE by AWS \- Ernest Chiang, accessed January 11, 2026, [https://www.ernestchiang.com/en/notes/ai/kiro/](https://www.ernestchiang.com/en/notes/ai/kiro/)  
3. Agentic IDEs: Next Frontier in Intelligent Coding \- The New Stack, accessed January 11, 2026, [https://thenewstack.io/agentic-ides-next-frontier-in-intelligent-coding/](https://thenewstack.io/agentic-ides-next-frontier-in-intelligent-coding/)  
4. Kiro: Agentic AI development from prototype to production, accessed January 11, 2026, [https://kiro.dev/](https://kiro.dev/)  
5. Rules | Cursor Docs, accessed January 11, 2026, [https://cursor.com/docs/context/rules](https://cursor.com/docs/context/rules)  
6. Claude Code: Best practices for agentic coding \- Anthropic, accessed January 11, 2026, [https://www.anthropic.com/engineering/claude-code-best-practices](https://www.anthropic.com/engineering/claude-code-best-practices)  
7. Your first custom instructions \- GitHub Docs, accessed January 11, 2026, [https://docs.github.com/en/copilot/tutorials/customization-library/custom-instructions/your-first-custom-instructions](https://docs.github.com/en/copilot/tutorials/customization-library/custom-instructions/your-first-custom-instructions)  
8. Memory Bank System | Agentic Coding Handbook \- tweag.github.io, accessed January 11, 2026, [https://tweag.github.io/agentic-coding-handbook/WORKFLOW\_MEMORY\_BANK/](https://tweag.github.io/agentic-coding-handbook/WORKFLOW_MEMORY_BANK/)  
9. Claude Code overview \- Claude Code Docs, accessed January 11, 2026, [https://code.claude.com/docs/en/overview](https://code.claude.com/docs/en/overview)  
10. Adding repository custom instructions for GitHub Copilot, accessed January 11, 2026, [https://docs.github.com/copilot/customizing-copilot/adding-custom-instructions-for-github-copilot](https://docs.github.com/copilot/customizing-copilot/adding-custom-instructions-for-github-copilot)  
11. Andrej Karpathy: Software in the era of AI \[video\] \- Hacker News, accessed January 11, 2026, [https://news.ycombinator.com/item?id=44314423](https://news.ycombinator.com/item?id=44314423)  
12. Example Clients \- Model Context Protocol, accessed January 11, 2026, [https://modelcontextprotocol.io/clients](https://modelcontextprotocol.io/clients)  
13. MCP Clients \- Compare AI Tools Supporting Model Context Protocol \- FastMCP, accessed January 11, 2026, [https://fastmcp.me/Home/Clients](https://fastmcp.me/Home/Clients)  
14. Manage Claude's memory \- Claude Code Docs, accessed January 11, 2026, [https://code.claude.com/docs/en/memory](https://code.claude.com/docs/en/memory)  
15. Writing a good CLAUDE.md | HumanLayer Blog, accessed January 11, 2026, [https://www.humanlayer.dev/blog/writing-a-good-claude-md](https://www.humanlayer.dev/blog/writing-a-good-claude-md)  
16. awesome-cursorrules/rules/qa-bug-report-cursorrules-prompt-file/.cursorrules at main · PatrickJS/awesome-cursorrules \- GitHub, accessed January 11, 2026, [https://github.com/PatrickJS/awesome-cursorrules/blob/main/rules/qa-bug-report-cursorrules-prompt-file/.cursorrules](https://github.com/PatrickJS/awesome-cursorrules/blob/main/rules/qa-bug-report-cursorrules-prompt-file/.cursorrules)  
17. Comprehensive .cursorrules template : r/cursor \- Reddit, accessed January 11, 2026, [https://www.reddit.com/r/cursor/comments/1igj1h1/comprehensive\_cursorrules\_template/](https://www.reddit.com/r/cursor/comments/1igj1h1/comprehensive_cursorrules_template/)  
18. A Comprehensive Guide to Using .cursorrules for Optimized AI-assisted Programming, accessed January 11, 2026, [https://cursorrules.org/blog/comprehensive-guide-cursorrules-optimized-ai-programming](https://cursorrules.org/blog/comprehensive-guide-cursorrules-optimized-ai-programming)  
19. Best Practices: .cursorrules \- How To \- Cursor \- Community Forum, accessed January 11, 2026, [https://forum.cursor.com/t/best-practices-cursorrules/41775](https://forum.cursor.com/t/best-practices-cursorrules/41775)  
20. Rules for Terraform | Cursor Directory, accessed January 11, 2026, [https://cursor.directory/rules/terraform](https://cursor.directory/rules/terraform)  
21. Advanced Tips and Tricks for Cursor IDE | by Rajesh Sood | Medium, accessed January 11, 2026, [https://medium.com/@soodrajesh/advanced-tips-and-tricks-for-cursor-ide-7dc236ff9870](https://medium.com/@soodrajesh/advanced-tips-and-tricks-for-cursor-ide-7dc236ff9870)  
22. awesome-cursorrules/rules/playwright-accessibility-testing-cursorrules-prompt-file/.cursorrules at main · PatrickJS/awesome-cursorrules \- GitHub, accessed January 11, 2026, [https://github.com/PatrickJS/awesome-cursorrules/blob/main/rules/playwright-accessibility-testing-cursorrules-prompt-file/.cursorrules](https://github.com/PatrickJS/awesome-cursorrules/blob/main/rules/playwright-accessibility-testing-cursorrules-prompt-file/.cursorrules)  
23. Rules for Testing | Cursor Directory, accessed January 11, 2026, [https://cursor.directory/rules/testing](https://cursor.directory/rules/testing)  
24. Highly effective CLAUDE.md for large codebasees : r/ClaudeAI \- Reddit, accessed January 11, 2026, [https://www.reddit.com/r/ClaudeAI/comments/1mgfy4t/highly\_effective\_claudemd\_for\_large\_codebasees/](https://www.reddit.com/r/ClaudeAI/comments/1mgfy4t/highly_effective_claudemd_for_large_codebasees/)  
25. CLAUDE MD Templates · ruvnet/claude-flow Wiki \- GitHub, accessed January 11, 2026, [https://github.com/ruvnet/claude-flow/wiki/CLAUDE-MD-Templates](https://github.com/ruvnet/claude-flow/wiki/CLAUDE-MD-Templates)  
26. Advanced Cursor: Use the Memory bank to eliminate hallucination \- Medium, accessed January 11, 2026, [https://medium.com/codetodeploy/advanced-cursor-use-the-memory-bank-to-eliminate-hallucination-affd3fbeefa3](https://medium.com/codetodeploy/advanced-cursor-use-the-memory-bank-to-eliminate-hallucination-affd3fbeefa3)  
27. Cline Memory Bank, accessed January 11, 2026, [https://docs.cline.bot/prompting/cline-memory-bank](https://docs.cline.bot/prompting/cline-memory-bank)  
28. vanzan01/cursor-memory-bank: A modular, documentation-driven framework using Cursor custom modes (VAN, PLAN, CREATIVE, IMPLEMENT) to provide persistent memory and guide AI through a structured development workflow with visual process maps. \- GitHub, accessed January 11, 2026, [https://github.com/vanzan01/cursor-memory-bank](https://github.com/vanzan01/cursor-memory-bank)  
29. Cursor Memory Bank \- GitHub Gist, accessed January 11, 2026, [https://gist.github.com/ipenywis/1bdb541c3a612dbac4a14e1e3f4341ab](https://gist.github.com/ipenywis/1bdb541c3a612dbac4a14e1e3f4341ab)  
30. Memory Bank: How to Make Cline an AI Agent That Never Forgets, accessed January 11, 2026, [https://cline.bot/blog/memory-bank-how-to-make-cline-an-ai-agent-that-never-forgets](https://cline.bot/blog/memory-bank-how-to-make-cline-an-ai-agent-that-never-forgets)  
31. Unlocking AI's Perfect Memory: A Deep Dive into hoppo-chan's Memory Bank MCP Server, accessed January 11, 2026, [https://skywork.ai/skypage/en/unlocking-ai-memory-hoppo-chan/1979022414958600192](https://skywork.ai/skypage/en/unlocking-ai-memory-hoppo-chan/1979022414958600192)  
32. Are memory banks worth it? : r/RooCode \- Reddit, accessed January 11, 2026, [https://www.reddit.com/r/RooCode/comments/1l9u1s3/are\_memory\_banks\_worth\_it/](https://www.reddit.com/r/RooCode/comments/1l9u1s3/are_memory_banks_worth_it/)  
33. How to Supercharge AI Coding with Cursor Rules and Memory Banks | Lullabot, accessed January 11, 2026, [https://www.lullabot.com/articles/supercharge-your-ai-coding-cursor-rules-and-memory-banks](https://www.lullabot.com/articles/supercharge-your-ai-coding-cursor-rules-and-memory-banks)  
34. IncomeStreamSurfer/roo-code-memory-bank-mcp-server \- GitHub, accessed January 11, 2026, [https://github.com/IncomeStreamSurfer/roo-code-memory-bank-mcp-server](https://github.com/IncomeStreamSurfer/roo-code-memory-bank-mcp-server)  
35. Claude Code makes vibe coding apps a reality, software engineers say days of coding jobs are over, accessed January 11, 2026, [https://www.indiatoday.in/technology/news/story/claude-code-makes-vibe-coding-apps-a-reality-software-engineers-say-days-of-coding-jobs-are-over-2847459-2026-01-06](https://www.indiatoday.in/technology/news/story/claude-code-makes-vibe-coding-apps-a-reality-software-engineers-say-days-of-coding-jobs-are-over-2847459-2026-01-06)  
36. Building Personalized Agents with ADK, MCP, and Memory Bank | Google Codelabs, accessed January 11, 2026, [https://codelabs.developers.google.com/codelabs/christmas-card/instructions](https://codelabs.developers.google.com/codelabs/christmas-card/instructions)  
37. Level Up Your AI Coding: PRD to RFC Workflow with Cursor for Structured Project Development \- Reddit, accessed January 11, 2026, [https://www.reddit.com/r/cursor/comments/1j1nn6s/level\_up\_your\_ai\_coding\_prd\_to\_rfc\_workflow\_with/](https://www.reddit.com/r/cursor/comments/1j1nn6s/level_up_your_ai_coding_prd_to_rfc_workflow_with/)  
38. Resources / Best Practices for Using PRDs with Cursor \- ChatPRD, accessed January 11, 2026, [https://www.chatprd.ai/resources/PRD-for-Cursor](https://www.chatprd.ai/resources/PRD-for-Cursor)  
39. 10x Productivity with Cursor Rules, Context & Automation \- Vatsal Shah, accessed January 11, 2026, [https://vatsalshah.in/blog/cursor-coding-rules-guide](https://vatsalshah.in/blog/cursor-coding-rules-guide)  
40. Cursor Tips \- DEV Community, accessed January 11, 2026, [https://dev.to/heymarkkop/cursor-tips-10f8](https://dev.to/heymarkkop/cursor-tips-10f8)  
41. Claude Code: What It Is, How It's Different, and Why Non-Technical People Should Use It, accessed January 11, 2026, [https://www.producttalk.org/claude-code-what-it-is-and-how-its-different/](https://www.producttalk.org/claude-code-what-it-is-and-how-its-different/)  
42. Common workflows \- Claude Code Docs, accessed January 11, 2026, [https://code.claude.com/docs/en/common-workflows](https://code.claude.com/docs/en/common-workflows)  
43. PatrickJS/awesome-cursorrules: Configuration files that enhance Cursor AI editor experience with custom rules and behaviors \- GitHub, accessed January 11, 2026, [https://github.com/PatrickJS/awesome-cursorrules](https://github.com/PatrickJS/awesome-cursorrules)  
44. Enhancing Test Automation with AI: Standardization and Efficiency through CursorRules | by Tuğkan Boz | Medium, accessed January 11, 2026, [https://medium.com/@tugkan.boz/enhancing-test-automation-with-ai-standardization-and-efficiency-through-cursorrules-fda45bbbb202](https://medium.com/@tugkan.boz/enhancing-test-automation-with-ai-standardization-and-efficiency-through-cursorrules-fda45bbbb202)  
45. Rules for devops \- Cursor Directory, accessed January 11, 2026, [https://cursor.directory/rules/devops](https://cursor.directory/rules/devops)