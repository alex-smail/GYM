This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Tariffs test task

Implements tariffs page per spec:

- Fixed header with 2-minute countdown; last 30s blink in red
- Fetch tariffs from `https://t-core.fit-hub.pro/Test/GetTariffs`
- Compute discount % from `price` vs `full_price`
- Default select `is_best`; desktop badge indicates best offer
- Buy button blinking; requires checkbox; highlights red if unchecked
- When timer ends, discount UI fades out and full price remains

## Getting Started

Install and run:

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).
