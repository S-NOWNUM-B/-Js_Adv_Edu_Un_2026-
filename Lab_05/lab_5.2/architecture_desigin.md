# Дизайн модульной архитектуры: Shop Dashbord

- Core (core.mjs): Логика управления корзиной и пользователями
- Utils (utils.mjs): Хелперы для расчётов
- Advanced Feature (advanced_feature.mjs): Модуль аналитики. Загружается только при нажатии на кнопку "Show Stats"
- Lazy Components (lazy_component.mjs): Модуль отзывов: Загружается, когда пользователь доскроллил до низа страницы