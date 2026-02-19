# GoF Pattern Mapping (Class vs. Object)

1. SNIPPET_01 (Singleton): Object
2. SNIPPET_02 (Observer): Object
3. SNIPPET_03 (Facade): Object
4. SNIPPET_04 (Factory Method): Class
5. SNIPPET_05 (Decorator): Object
6. SNIPPET_06 (Prototype): Object
7. SNIPPET_07 (Chain of Responsibility): Object
8. SNIPPET_08 (Command): Object
9. SNIPPET_09 (Flyweight): Object
10. SNIPPET_10 (Mediator): Object

### Explanations:
- SNIPPET_04 (Factory Method): Относится к уровню Class, так как создание объекта завязано на наследовании или переключении логики внутри метода класса/функции, определяющей, какой подкласс инстанцировать.
- SNIPPET_01 (Singleton): Относится к уровню Object, так как паттерн оперирует конкретным экземпляром объекта в памяти, обеспечивая его уникальность.
- SNIPPET_05 (Decorator): Уровень Object, потому что мы динамически "оборачиваем" один объект другим во время выполнения, создавая композицию.
- SNIPPET_09 (Flyweight): Уровень Object, так как паттерн фокусируется на совместном использовании ресурсов между множеством объектов.
- SNIPPET_08 (Command): Уровень Object, так как каждое действие превращается в отдельный объект, который можно хранить и передавать.