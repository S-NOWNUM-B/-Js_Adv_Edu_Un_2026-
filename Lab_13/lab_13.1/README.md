# Lab 13.1: Higher-Order Components - withTheme

## Обзор
В данной лабораторній работе реализован паттерн **Higher-Order Component (HOC)** для создания системы инъекции тем. HOC `withTheme` оборачивает компоненты и передаёт им текущую тему через React Context, устраняя необходимость prop drilling.

## Цель работы
На практике освоить паттерн HOC для создания reusable-компонентов с поддержкой темизации, понять принципы работы React Context и компонентной композиции.

## Структура файлов
- `index.html` — точка входа, подключение приложения
- `src/context/ThemeContext.jsx` — контекст темы и провайдер (ThemeProvider)
- `src/hocs/withTheme.jsx` — HOC реализации: `withTheme` и `withStyles`
- `src/components/ThemedComponents.jsx` — темизированные компоненты (Button, Card, Text, Input, ThemeSwitcher)
- `src/App.jsx` — демо-приложение с переключением тем

## Ключевые компоненты

### ThemeContext и ThemeProvider
- Создаёт React Context для хранения темы
- Предоставляет `theme`, `isDark`, `toggleTheme` через провайдер
- Определяет светлую и тёмную темы с полной палитрой цветов, отступов, типографики и скруглений

### withTheme HOC
- Фабричная функция, принимающая компонент и возвращающая обёрнутый компонент
- Подписывается на ThemeContext через Consumer
- Инжектит `theme`, `isDark`, `toggleTheme` как пропсы
- Поддерживает `displayName` для удобной отладки

### ThemedComponents
- **ThemedButton** — кнопка с 4 вариантами (primary, secondary, outline, ghost), адаптируется к теме
- **ThemedCard** — карточка с опциональной тенью (elevated)
- **ThemedText** — текстовый компонент с вариантами (title, subtitle, body, caption)
- **ThemedInput** — поле ввода с лейблом и отображением ошибки
- **ThemeSwitcher** — кнопка переключения темы

## Архитектурные преимущества
- Избегание prop drilling через Context + HOC
- Полная темизация всех UI-компонентов из одного источника
- Компонуемость: HOC можно применять к любым компонентам
- Разделение логики темизации и бизнес-логики компонентов

---
*Исполнитель: Мамаев Станислав*
*Дата: 06.04.2026*
