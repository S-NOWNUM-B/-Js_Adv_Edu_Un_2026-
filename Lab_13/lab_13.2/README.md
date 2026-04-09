# Lab 13.2: Custom Hooks - useApi, useLocalStorage, useDebounce, useFetch

## Обзор
В данной лабораторній работе реализованы **кастомные React-хуки** для повторного использования stateful-логики: `useApi` для API-запросов, `useLocalStorage` для синхронизации с localStorage, `useDebounce` для оптимизации ввода и `useFetch` с встроенным кешированием.

## Цель работы
Освоить паттерн кастомных хуков для выделения повторяющейся stateful-логики в переиспользуемые функции, понять правила хуков (Rules of Hooks) и паттерны асинхронной работы.

## Структура файлов
- `index.html` — точка входа, подключение приложения
- `src/hooks/useApi.js` — хуки для API: `useApi`, `useMutation`, `usePaginatedApi`
- `src/hooks/useLocalStorage.js` — хук для синхронизации состояния с localStorage
- `src/hooks/useDebounce.js` — хуки debounce: `useDebounce`, `useDebouncedCallback`
- `src/hooks/useFetch.js` — хуки fetch с кешированием: `useFetch`, `useFetchSWR`
- `src/App.jsx` — демо-приложение, демонстрирующее все хуки

## Ключевые компоненты

### useApi
- `useApi(apiFunction, dependencies)` — выполнение асинхронной функции с состояниями loading/error/data
- `useMutation(apiFunction)` — хук для мутаций (POST/PUT/DELETE)
- `usePaginatedApi(apiFunction, pageSize)` — хук для постраничной загрузки с `loadMore` и `hasMore`
- AbortController для отмены запросов при размонтировании или повторном вызове

### useLocalStorage
- Синхронизация React-состояния с localStorage
- Автоматическая сериализация/десериализация JSON
- Обработка изменений localStorage из других вкладок (событие `storage`)
- Методы: `setValue`, `removeValue`

### useDebounce
- `useDebounce(value, delay)` — возвращает отложенное значение
- `useDebouncedCallback(callback, delay)` — возвращает обёрнутую callback-функцию
- Используется для оптимизации поиска и ввода

### useFetch
- Встроенное кеширование в Map с TTL 5 минут
- Отслеживание cache hit/miss
- `useFetchSWR` — stale-while-revalidate паттерн: показывает закешрованные данные пока фоновая валидация
- AbortController для отмены запросов
- Методы: `refetch` (очищает кеш), `clearCache`, `revalidate`

## Архитектурные преимущества
- Полное разделение логики запросов и UI-компонентов
- Автоматическая обработка loading/error состояний
- Кеширование снижает количество сетевых запросов
- Все хуки следуют Rules of Hooks (вызов на верхнем уровне, только из React-функций)
- Компонуемость: хуки могут вызывать другие хуки

---
*Исполнитель: Мамаев Станислав*
*Дата: 06.04.2026*
