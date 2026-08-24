# 🚀 Douglas Cel - Landing Page Moderna e Responsiva

Uma landing page profissional, moderna e totalmente responsiva para a empresa **Douglas Cel**, especializada em venda de celulares novos com parcelamento facilitado, aceita de celulares usados como entrada, nota fiscal e garantia.

## ✨ Características Principais

### 🎨 Design
- **Paleta de cores**: Azul e Branco (corporativo e moderno)
- **Totalmente responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- **Interface intuitiva**: Navegação clara e amigável
- **Animações suaves**: Efeitos visuais que melhoram a experiência do usuário
- **Performance otimizada**: Carregamento rápido e eficiente

### 📱 Seções da Página

1. **Navbar Fixa**: Menu de navegação sticky com menu mobile responsivo
2. **Hero Section**: Apresentação impactante com CTA (Call-to-Action)
3. **Benefícios**: 6 cards destacando os diferenciais da empresa
4. **Como Funciona**: Passo a passo visual do processo de compra
5. **Depoimentos**: Testimoniais de clientes satisfeitos
6. **Formulário de Leads**: Captura de dados com validação em tempo real
7. **Footer**: Informações de contato e links rápidos

### 🔧 Funcionalidades

- ✅ Formulário de leads com validação completa
- ✅ Integração com Google Sheets (via Formspree ou Google Apps Script)
- ✅ Formatação automática de telefone
- ✅ Menu mobile responsivo (hamburger menu)
- ✅ Animações ao scroll
- ✅ Rastreamento de eventos (Analytics ready)
- ✅ Armazenamento local de dados (localStorage)
- ✅ Detecção de dispositivo
- ✅ WhatsApp direto integrado

## 📁 Estrutura de Arquivos

```
douglas-cel-landing/
├── index.html          # Página HTML principal
├── styles.css          # Estilos CSS (totalmente responsivo)
├── script.js           # Funcionalidades JavaScript
├── README.md           # Este arquivo
└── GOOGLE_SHEETS.md    # Guia de configuração Google Sheets
```

## 🚀 Como Usar

### 1. **Clone ou Download do Repositório**

```bash
git clone https://github.com/czwv8wsgmz-lgtm/douglas-cel-landing.git
cd douglas-cel-landing
```

### 2. **Abra a Página**

Simplesmente abra o arquivo `index.html` em seu navegador:
- Clique duplo no arquivo `index.html`, ou
- Use um servidor local (recomendado):

```bash
# Se tiver Python instalado:
python -m http.server 8000

# Se tiver Node.js e http-server instalado:
http-server

# Acesse: http://localhost:8000
```

### 3. **Configure a Integração com Google Sheets**

Existem 3 opções gratuitas de integração:

#### **Opção 1: Formspree (Recomendado - Mais Fácil)**

1. Acesse [formspree.io](https://formspree.io)
2. Crie uma conta gratuita
3. Crie um novo formulário
4. Copie o ID do formulário
5. No arquivo `script.js`, encontre a linha:
   ```javascript
   const formspreeID = 'YOUR_FORMSPREE_ID';
   ```
6. Substitua `'YOUR_FORMSPREE_ID'` pelo seu ID real

#### **Opção 2: Google Apps Script + Google Sheets**

Veja o arquivo detalhado: [GOOGLE_SHEETS.md](./GOOGLE_SHEETS.md)

#### **Opção 3: Sheety**

1. Acesse [sheety.co](https://sheety.co)
2. Conecte ao seu Google Sheets
3. Copie a URL da API
4. Configure no `script.js`

## 📝 Campos do Formulário

O formulário captura os seguintes dados:

| Campo | Tipo | Obrigatório | Descrição |
|-------|------|-----------|-----------|
| Nome Completo | Texto | Sim | Nome do cliente |
| Email | Email | Sim | Email válido |
| Telefone/WhatsApp | Tel | Sim | Número com formatação automática |
| Celular Desejado | Texto | Não | Modelo do celular que quer comprar |
| Celular Usado | Texto | Não | Modelo para troca |
| Parcelas | Select | Não | Preferência de parcelamento |
| Política de Privacidade | Checkbox | Sim | Consentimento necessário |

## 🎯 Personalizações

### Alterar Cores Principais

No arquivo `styles.css`, procure por `:root` e altere as cores:

```css
:root {
    --primary-blue: #0066cc;    /* Azul principal */
    --dark-blue: #004499;       /* Azul escuro */
    --light-blue: #e6f2ff;      /* Azul claro */
    --white: #ffffff;
    --gray-light: #f5f5f5;
    --gray-dark: #333333;
    --text-gray: #666666;
    --success-green: #28a745;
}
```

### Alterar Contatos e Informações

No arquivo `index.html`, procure por:
- Email: `contato@douglascel.com`
- Telefone: `(11) 9999-9999`
- WhatsApp: `5511999999999`

Substitua pelos dados reais da empresa.

### Adicionar Logo

Na seção `<nav>`, altere:

```html
<div class="logo">
    <h1>Douglas Cel</h1>
</div>
```

Para incluir uma imagem:

```html
<div class="logo">
    <img src="logo.png" alt="Douglas Cel" style="height: 40px;">
</div>
```

## 📊 Integração com Google Sheets - Resumo Rápido

A landing page foi desenvolvida com suporte nativo para armazenar todos os leads em Google Sheets. Os dados são capturados automaticamente e organizados para a equipe de vendas:

### Dados Capturados:
- Nome, Email, Telefone
- Modelo de celular desejado
- Celular usado para troca
- Preferência de parcelamento
- Data/Hora do envio
- Origem (Landing Page)

Para configuração detalhada, veja [GOOGLE_SHEETS.md](./GOOGLE_SHEETS.md)

## 🔐 Segurança e Privacidade

- ✅ Validação de dados no client-side
- ✅ HTTPS ready (recomendado)
- ✅ Sem armazenamento de senhas
- ✅ Política de privacidade obrigatória no formulário
- ✅ Conformidade com LGPD (Lei Geral de Proteção de Dados)

## 📱 Responsividade

A página foi testada e é totalmente responsiva em:

- ✅ Desktop (1920px+)
- ✅ Laptop (1024px - 1919px)
- ✅ Tablet (768px - 1023px)
- ✅ Mobile (320px - 767px)

## 🎓 Tecnologias Utilizadas

- **HTML5**: Marcação semântica moderna
- **CSS3**: Layouts responsivos com Grid e Flexbox
- **JavaScript (ES6+)**: Funcionalidades interativas
- **Google Fonts**: Tipografia (Poppins)
- **Formspree/Google Sheets**: Captura de leads
- **LocalStorage**: Armazenamento de dados local

## 🚀 Deployment (Publicar Online)

### Opção 1: GitHub Pages (Gratuito)

```bash
# Push para branch gh-pages
git push origin main
```

Acesse: `https://czwv8wsgmz-lgtm.github.io/douglas-cel-landing/`

### Opção 2: Netlify (Gratuito)

1. Acesse [netlify.com](https://netlify.com)
2. Conecte seu repositório GitHub
3. Deploy automático!

### Opção 3: Vercel (Gratuito)

1. Acesse [vercel.com](https://vercel.com)
2. Importe seu projeto
3. Deploy em 1 clique

## 🐛 Troubleshooting

### Formulário não envia dados?

1. Verifique o console do navegador (F12 → Console)
2. Verifique se o ID do Formspree está correto
3. Verifique a conexão com internet
4. Tente recarregar a página

### Estilos não carregam?

1. Verifique se `styles.css` está no mesmo diretório
2. Limpe o cache do navegador (Ctrl+Shift+Delete)
3. Verifique a URL relativa dos arquivos

### Menu mobile não funciona?

1. Verifique se `script.js` está incluído no HTML
2. Abra o console para ver erros
3. Teste em navegador diferente

## 📞 Suporte e Contato

Para dúvidas sobre a landing page:
- 📧 Email: [seu-email@douglascel.com]
- 💬 WhatsApp: [(11) 9999-9999]
- 🐙 GitHub: [czwv8wsgmz-lgtm](https://github.com/czwv8wsgmz-lgtm)

## 📄 Licença

Este projeto é de uso livre para a empresa Douglas Cel.

---

## 🎉 Próximos Passos

1. ✅ Configurar Google Sheets (veja [GOOGLE_SHEETS.md](./GOOGLE_SHEETS.md))
2. ✅ Alterar contatos e informações da empresa
3. ✅ Testar formulário em desktop e mobile
4. ✅ Publicar online (GitHub Pages, Netlify ou Vercel)
5. ✅ Monitorar leads e otimizar conversão

## 📊 Estatísticas e Monitoramento

A página já está preparada para Google Analytics. Para ativar:

1. Crie uma conta em [analytics.google.com](https://analytics.google.com)
2. Adicione o código de rastreamento ao `<head>` do HTML
3. Os eventos já estão sendo capturados automaticamente

---

**Desenvolvido com ❤️ para Douglas Cel** | Versão 1.0 | 2024