# Site pessoal — Ramon Soares

Código e publicação do portfólio em um único repositório público.

Site: https://ramon-soares.github.io/ramon-personal-website-public/

## Desenvolvimento local

Requisitos: Node.js 24 e npm.

```sh
npm ci
npm run dev
```

Abra http://localhost:8080/. Para conferir a versão de produção:

```sh
npm run build
npm run preview
```

O preview usa o caminho `/ramon-personal-website-public/`.

## Onde editar

| Conteúdo | Arquivo |
| --- | --- |
| Apresentação e links principais | `src/components/Hero.tsx` |
| Cabeçalho e navegação | `src/components/Header.tsx` |
| Experiência profissional e formação | `src/components/Experience.tsx` |
| Habilidades | `src/components/Skills.tsx` |
| Cores, fontes e estilos | `tailwind.config.ts` e `src/index.css` |
| Título e metadados | `index.html` |

## Publicação no GitHub Pages

Na migração inicial, em **Settings → Pages → Build and deployment → Source**,
selecione **GitHub Actions**. A configuração anterior publica pela branch
`gh-pages`; esta troca é necessária para ativar o novo workflow.

Depois de enviar o workflow para a `main`, cada push nessa branch instala as
dependências, compila o site e publica apenas o conteúdo de `dist/`. Acompanhe
o resultado na aba **Actions**, no workflow **Deploy to GitHub Pages**.
Também é possível executá-lo manualmente em **Run workflow** na branch `main`.
Pull requests verificam o build sem publicar.

Não é necessário criar tokens pessoais ou configurar secrets para esse deploy.
O workflow usa as permissões do `GITHUB_TOKEN` fornecido pelo GitHub.

`node_modules/` e `dist/` são gerados e não devem ser versionados. O arquivo
`package-lock.json` fixa as dependências instaladas por `npm ci`.

O caminho de produção está definido em `vite.config.ts`; o roteador usa esse
mesmo caminho por meio de `import.meta.env.BASE_URL`. Se o repositório for
renomeado, ajuste o `base` no Vite e o endereço documentado aqui.

## Consolidação dos repositórios

Este repositório público é a fonte de código e de publicação do site. Ele já
contém as atualizações posteriores à versão privada `ramon-personal-website`,
incluindo a experiência como Analista de Dados Sênior.
O build e o deploy não acessam o repositório privado nem dependem do Lovable.

A branch `gh-pages` antiga pode ser mantida como referência; ela deixa de ser
a fonte de publicação quando o Pages passa a usar GitHub Actions.
