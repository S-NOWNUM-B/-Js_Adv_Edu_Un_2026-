# Decision Journal

1. Реализованные сценарии: 01 (Singleton) и 02 (Adapter). Выбрал их, так как они наглядно показывают решение классических проблем: уникальность настроек и совместимость старого кода
2. Ключевые улики для остальных:
   - 03: "Independent components" и "Notification" -> Observer
   - 04: "Step-by-step construction" и "Different representations" -> Builder
   - 05: "Undo / Redo" -> Command
   - 06: "50,000 full objects" и "Memory usage" -> Flyweight
3. Урок: Дизайн-паттерны — это не просто "умные слова", а проверенные способы решения проблем производительности (как Flyweight) и чистоты кода (как Adapter)