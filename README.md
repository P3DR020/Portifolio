# Portfólio

Site estático de página única, sem framework e sem build.

## Rodando localmente

O JavaScript usa ES modules, então é preciso um servidor local:

```bash
python3 -m http.server 5500
```

Depois abra `http://localhost:5500`. No VS Code, a extensão Live Server faz o mesmo com um clique.

## Personalizando

1. `index.html` — nome, textos, links, experiências e projetos.
2. `assets/img/perfil.svg` — troque pela sua foto (ajuste o `src` se mudar a extensão).
3. `css/tokens.css` — cores e fontes. Mudar `--accent` muda a identidade do site inteiro.
4. `js/main.js` — a lista `ROLES` com os cargos que giram no hero.

## Publicando

**GitHub Pages:** suba o repositório e ative Pages em Settings → Pages, apontando para a branch `main`.

**Netlify / Vercel:** arraste a pasta. Não há comando de build; o diretório de publicação é a raiz.
