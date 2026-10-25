# bsoliveira.com

Portfolio pessoal de Bryan S. Oliveira, desenvolvedor frontend.

🌐 **[www.bsoliveira.com](https://www.bsoliveira.com)**

## Stack

- [Next.js](https://nextjs.org/) (App Router, export estático)
- [React](https://react.dev/) + TypeScript
- [Tailwind CSS](https://tailwindcss.com/)
- [react-icons](https://react-icons.github.io/react-icons/) e [react-typed](https://github.com/ssbeefeater/react-typed)

## Rodando localmente

Requer Node 24 (veja [.nvmrc](.nvmrc)).

```bash
npm ci
npm run dev     # http://localhost:3000
npm run lint
npm run build   # gera o site estático em out/
```

## Estrutura

```
src/app/
├── layout.tsx        # HTML base, fonte e metadata
├── page.tsx          # página única com as seções
├── globals.css
└── _components/      # navbar, header, about, ...
public/               # imagens
```

## Deploy

O deploy é feito pela [Vercel](https://vercel.com/): cada push na `main` publica o site, e cada PR ganha um preview.
O [CI](.github/workflows/ci.yml) roda lint e build em todo PR.
