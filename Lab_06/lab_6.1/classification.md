# SNIPPET ID: SNIPPET_01
- Pattern Family: Creational
- Specific Pattern Name: Singleton
- Evidence: `if (DatabaseConnection._instance) { return DatabaseConnection._instance; }`
- Reasoning: Этот сниппет отностится к порождающим паттернамб так как он контролирует процесс создания объекта. Он гарантируетб что у класса есть только один экземпляр, предотвращая создание новых через проверку статического свойства `_instance`.

### Snippet ID: SNIPPET_02
- Pattern Family: Behavior
- Specific Pattern NAme: Observer (Pub/Sub)
- Evidence: `subscribe(event, callback)`, `publish(event, data)`
