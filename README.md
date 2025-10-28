## Проект тарифов (Next.js)

Страница тарифов с таймером скидки.

### Функциональность

-   Фиксированный баннер вверху с таймером на `COUNTDOWN_SECONDS` секунд (по умолчанию 120).
-   Последние `WARNING_THRESHOLD_SECONDS` секунд (по умолчанию 30) подсвечиваются красным и мерцают.
-   Тарифы загружаются с `https://t-core.fit-hub.pro/Test/GetTariffs`.
-   Скидка рассчитывается по разнице `price` и `full_price`.
-   По умолчанию выбран тариф с `is_best: true` (если есть).
-   Кнопка покупки мигает; для покупки требуется отметка чекбокса.
-   При окончании таймера скидка исчезает: скрывается бейдж скидки и зачёркнутая цена, основной ценой становится `full_price`.

### Быстрый старт

```bash
npm install
npm run dev
```

Откройте `http://localhost:3000` в браузере.

### Структура и важные файлы

-   `src/components/discount-context/discount-context.tsx` — контекст таймера скидки (`remainingSeconds`, `discountActive`).
-   `src/components/header-banner/header-banner.tsx` — баннер с отображением таймера.
-   `src/components/tariffs/components/tariff-card/tariff-card.tsx` — карточка тарифа; показывает скидку только если `discountActive`.
-   `src/constants/ui.ts` — `COUNTDOWN_SECONDS` и `WARNING_THRESHOLD_SECONDS`.

### Настройки

Измените значения в `src/constants/ui.ts`, чтобы изменить длительность таймера и порог предупреждения.
