# SNIPPET ID: SNIPPET_01
- Pattern Family: Creational
- Specific Pattern Name: Singleton
- Evidence: `if (DatabaseConnection._instance) { return DatabaseConnection._instance; }`
- Reasoning: Этот сниппет отностится к порождающим паттернамб так как он контролирует процесс создания объекта. Он гарантируетб что у класса есть только один экземпляр, предотвращая создание новых через проверку статического свойства `_instance`.

### Snippet ID: SNIPPET_02
- Pattern Family: Behavior
- Specific Pattern Name: Observer (Pub/Sub)
- Evidence: `subscribe(event, callback)`, `publish(event, data)`
- Reasoning: Паттерн поведенческий, так как он управляет связью между объектами. Он позволяет "подписчикам" реагировать на события "издателя" без прямой зависимости между ними.

### Snippet ID: SNIPPET_03
- Pattern Family: Structural
- Specific Pattern Name: Facade
- Evidence: `class UserSession { constructor() { this._auth = ... this._repo = ... } login(token) { ... } }`
- Reasoning:Это структурный паттернб так как он организует композицию нескольких подсистем в один упрощёный интерфейс. Он скрывает сложность внутренних вызово за одинм методом

### Snippet ID: SNIPPET_04
- Pattern Family: Creational
- Specific Pattern Name: Factory Method
- Evidence: `function createNotifier(type) { switch (type) { ... } }`
- Reasoning: паттерн порождающий. Он делегирует логику создания конкретных объектов специальной функции, позволяя клиенту не знать точные классы создаваемых объектов

### Snippet ID: SNIPPET_05
- Pattern Family: Structural
- Specific Pattern Name: Decorator
- Evidence: `class SeverityLogger { constructor(logger, level) { this._logger = logger; ... } }`
- Reasoning:Структурный паттерн, который динамически добавляет новую функциональность (уровни важности) существующему объекту логгера, не изменяя его исходный код

### Snippet ID: SNIPPET_06
- Pattern Family: Creational 
- Specific Pattern Name: Prototype
- Evidence: `const car = vehiclePrototype.clone();`
- Reasoning: Порождающий паттерн, использующий существующий объект как прототип для создания новых экземпляров через клонирование, вместо создания через конструктор с нуля

### Snippet ID: SNIPPET_07
- Pattern Family: Behavioral
- Specific Pattern Name: Chain of Responsibility
- Evidence: `if (ticket.priority <= this.level) { ... } else if (this.next) {this.next.handle(ticket); }`
- Reasoning: Поведенческий паттерн. Он передает запрос (тикет) по цепочке обработчиков, пока один из них не возьмет на себя ответственность за его выполнение

### Snippet ID: SNIPPET_08
- Pattern Family: Behavioral
- Specific Pattern Name: Command
- Evidence: `execute() { this.editor.write(this.chars); }`, `undo() { ... }`
- Reasoning: Поведенческий паттерн, инкапсулирующий действие (запись текста) в объект. Это позволяет сохранять историю действий для реализации функций отмены (undo)

### Snippet ID: SNIPPET_09
- Pattern Family: Structural
- Specific Pattern Name: Flyweight
- Evidence: `const key = ... if(!this.types[key]) { this._types[key] = new TreeType(...) }`
- Reasoning: Структурный паттерн для оптимизации памяти. Он разделяет общее состояние (intrinsic) и уникальное (extrinsic), кэшируя повторяющиеся данные

### Snippet ID: SNIPPET_010
- Pattern Family: Behavioral
- Specific Pattern Name: Mediator
- Evidence: `this.room.send(this, message, toname);`, `class CatRoom { send(...) { ... } }`
- Reasoning: Поведенческий паттерн, выступающий центральным узлом связи. Объекты User не общаются напрямую, а делают это через объект ChatRoom