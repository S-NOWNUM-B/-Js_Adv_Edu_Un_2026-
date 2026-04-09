# AI_report lab_13.1

## 1. Информация о использовании AI
- Инструмент: Copilot / GitHub, Gemini / Google AI Studio
- Дата: 09.04.2026

## 2. Конкретные промпты

### Промпт 1:
"Как реализовать Higher-Order Component (HOC) для инъекции темы в React"

Что получил: Паттерн фабричной функции, принимающей компонент и возвращающей обёрнутый компонент с дополнительными пропсами. Использование Consumer для подписки на контекст.

### Промпт 2:
"Как создать Theme Context с React createContext"

Что получил: Паттерн с createContext, ThemeProvider, useState для хранения состояния темы и toggleTheme функции. Экспорт кастомного хука useTheme для потребления.

### Промпт 3:
"Как спроектировать объект темы с цветами, отступами, типографикой"

Что получил: Структуру темы с colors (primary, secondary, background, surface, text, error...), spacing (xs-sm-md-lg-xl), typography (fontFamily, fontSize), borderRadius. Распространение lightTheme на darkTheme с заменой цветов.

### Промпт 4:
"Как создать theme-aware Button с вариантами стилей"

Что получил: Компонент с базовыми стилями из темы и variant-specific стилями (primary, secondary, outline, ghost). Композиция через spread operator `{...baseStyles, ...variantStyles[variant]}`.

### Промпт 5:
"Как реализовать ThemeSwitcher с иконками и переключением тем"

Что получил: Компонент с Unicode иконками (\u2600 для солнца, \u263D для луны), toggleTheme callback и текстом режима.

## 3. Модификации и проверки
- Создан ThemeContext с createContext и ThemeProvider
- Реализованы lightTheme и darkTheme с полной палитрой цветов, отступов, типографики и скруглений
- Реализован withTheme HOC с Consumer и props proxying
- Создан withStyles HOC для передачи функции стилей
- Созданы темизированные компоненты: ThemedButton, ThemedCard, ThemedText, ThemedInput, ThemeSwitcher
- Все компоненты используют displayName для удобной отладки
- Проверена корректность displayName: исправлены обратные кавычки в template literals

## 4. Что узнал
1. Как проектировать HOC паттерн для повторного использования логики
2. Как использовать React Context для избежания prop drilling
3. Как проксировать пропсы в обёрнутый компонент
4. Как спроектировать расширяемый объект темы
5. Как компонентная композиция упрощает поддержку UI

## 5. Процент использования
5 - 10% (AI помог только с идеями/объяснениями)

# AI_report lab_13.2

## 1. Информация о использовании AI
- Инструмент: Copilot / GitHub, Gemini / Google AI Studio
- Дата: 09.04.2026

## 2. Конкретные промпты

### Промпт 1:
"Как реализовать кастомный хук useApi для API запросов с loading и error"

Что получил: Паттерн с useState для data/loading/error, useCallback для мемоизации функции выполнения, useEffect для запуска. AbortController для отмены при размонтировании.

### Промпт 2:
"Как реализовать useMutation для POST/PUT/DELETE запросов"

Что получил: Хук с mutate функцией, loading и error состояниями, без автоматического вызова — мутация по требованию.

### Промпт 3:
"Как реализовать хук usePaginatedApi с loadMore и hasMore"

Что получил: Паттерн с накоплением данных (setData(prev => [...prev, ...newData])), hasMore по результату меньше pageSize, методы loadMore/reset.

### Промпт 4:
"Как реализовать useLocalStorage с синхронизацией между вкладками"

Что получил: Паттерн с useState и initializer function, запись в localStorage при setValue, слушание события 'storage' для кросс-таб синхронизации.

### Промпт 5:
"Как реализовать useDebounce для задержки обновления значения"

Что получил: Паттерн с setTimeout/clearTimeout в useEffect, зависимость от value и delay. Debounced value обновляется после задержки.

### Промпт 6:
"Как реализовать useFetch с кешированием в Map"

Что получил: Паттерн с глобальным Map кешом, getCachedData/setCachedData, timestamp для проверки актуальности, cacheHit state, refetch с удалением из кеша.

### Промпт 7:
"Как реализовать stale-while-revalidate (SWR) паттерн в React"

Что получил: Обёртку над useFetch с isStale состоянием, таймером по CACHE_DURATION и revalidate функцией.

## 3. Модификации и проверки
- Создан useApi с AbortController, cleanup при размонтировании, refetch
- Реализован useMutation для мутаций по требованию
- Реализован usePaginatedApi с накоплением данных и hasMore логикой
- Создан useLocalStorage с кросс-таб синхронизацией (событие storage)
- Создан useDebounce и useDebouncedCallback с правильной очисткой таймеров
- Реализован useFetch с Map-based кешированием (TTL 5 минут)
- Создан useFetchSWR (stale-while-revalidate) с isStale и revalidate
- Демо-приложение показывает все хуки в действии

## 4. Что узнал
1. Как проектировать кастомные хуки с правилами хуков (top-level, React functions only)
2. Как использовать AbortController для отмены запросов при размонтировании
3. Как синхронизировать React состояние с localStorage и между вкладками
4. Как реализовать debounce для оптимизации частых обновлений
5. Как кешировать fetch результаты в Map с TTL
6. Как работает stale-while-revalidate паттерн для UX

## 5. Процент использования
5 - 10% (AI помог только с идеями/объяснениями)
