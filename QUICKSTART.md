# 🚀 GUIA RÁPIDO DE INÍCIO - DOUGLAS CEL

Bem-vindo! Este é o guia rápido para começar com a landing page da Douglas Cel.

## ⚡ 5 Minutos para Começar

### 1️⃣ Clone ou Baixe o Projeto

```bash
git clone https://github.com/czwv8wsgmz-lgtm/douglas-cel-landing.git
cd douglas-cel-landing
```

### 2️⃣ Configure as Variáveis de Ambiente

```bash
# Copie o arquivo de exemplo
cp .env.example .env

# Abra o arquivo .env e preencha com seus dados
# (Use um editor de texto como VS Code, Notepad++, etc)
```

### 3️⃣ Escolha Sua Integração

**Opção A: Formspree (⭐ Recomendado - Mais Fácil)**

1. Acesse [formspree.io](https://formspree.io)
2. Crie uma conta
3. Crie um novo formulário
4. Copie seu ID (ex: `f/abc123`)
5. Coloque no arquivo `.env`:
   ```
   FORMSPREE_ID=f/abc123
   ```

**Opção B: Google Apps Script (Mais Controle)**

Veja detalhes completos em [GOOGLE_SHEETS.md](./GOOGLE_SHEETS.md)

### 4️⃣ Teste Localmente

```bash
# Abra o arquivo index.html no navegador
# Ou use um servidor local:

# Se tem Python 3:
python -m http.server 8000

# Se tem Node.js:
npx http-server
```

Depois acesse: `http://localhost:8000`

### 5️⃣ Preencha e Teste o Formulário

1. Abra a landing page
2. Preencha todos os campos
3. Clique em "Enviar Meu Interesse"
4. Você deve ver uma mensagem de sucesso

✅ **Pronto! Seu primeiro lead foi capturado!**

---

## 📁 Estrutura do Projeto

```
douglas-cel-landing/
├── index.html          ← Página principal (HTML)
├── style.css           ← Estilos (CSS)
├── script.js           ← Lógica do formulário (JavaScript)
├── .env.example        ← Modelo de variáveis de ambiente
├── .env                ← Suas configurações reais (NÃO commitar!)
├── .gitignore          ← Arquivos a ignorar no Git
├── GOOGLE_SHEETS.md    ← Guia completo de integração
└── README.md           ← Documentação completa
```

---

## 🔧 Arquivos Importantes

### `index.html`
- Contém a estrutura da landing page
- Formulário com campos

### `style.css`
- Estilos visuais
- Design responsivo

### `script.js`
- Lógica do formulário
- Integração com Formspree/Google Apps Script
- Validações

### `.env`
- **NUNCA commitar este arquivo!**
- Armazena suas chaves secretas
- Cada pessoa tem suas próprias configurações

---

## 🌐 Deploy (Colocar Online)

### Opção 1: GitHub Pages (Gratuito)

1. Va para **Settings** → **Pages**
2. Selecione **Deploy from a branch**
3. Escolha a branch `main`
4. Salve
5. Em poucos minutos, seu site estará em: `https://seu-usuario.github.io/douglas-cel-landing`

### Opção 2: Netlify (Gratuito)

1. Acesse [netlify.com](https://netlify.com)
2. Clique em **"New site from Git"**
3. Conecte seu repositório GitHub
4. Deploy automático!

### Opção 3: Seu próprio domínio

1. Hospede em um servidor (ex: Hostinger, GoDaddy)
2. Coloque os arquivos no servidor
3. Configure seu domínio

---

## 📊 Monitorar Seus Leads

### Se usar Formspree:
- Acesse [formspree.io](https://formspree.io)
- Dashboard mostra todos os leads
- Receba emails automaticamente

### Se usar Google Sheets:
- Acesse seu Google Sheets
- Veja todos os dados em tempo real
- Compartilhe com sua equipe

### Compartilhar com Equipe:

1. Abra o Google Sheets
2. Clique em **"Compartilhar"**
3. Adicione os emails da equipe
4. Pronto!

---

## ✅ Checklist de Configuração

- [ ] Criei conta no Formspree/Google
- [ ] Obtive meu ID/URL de integração
- [ ] Copiei o arquivo `.env.example` para `.env`
- [ ] Preenchi as variáveis no `.env`
- [ ] Testei o formulário localmente
- [ ] Vi o primeiro lead sendo capturado
- [ ] Fiz deploy online
- [ ] Testei o formulário online
- [ ] Compartilhei com minha equipe

---

## 🐛 Algo Não Funcionou?

### Formulário não envia?

1. Abra **DevTools** (F12 no navegador)
2. Vá para **Console**
3. Preencha o formulário novamente
4. Procure por mensagens de erro em vermelho
5. Verifique se seu ID/URL está correto em `.env`

### Verificar Configuração:

```javascript
// Cole no Console do DevTools:
console.log('FORMSPREE_ID:', process.env.FORMSPREE_ID);
```

### Ajuda Adicional:

- Leia [GOOGLE_SHEETS.md](./GOOGLE_SHEETS.md) para mais detalhes
- Veja [README.md](./README.md) para documentação completa
- Entre em contato com a equipe

---

## 📱 Customize para Seu Negócio

### Mudar Cores:

Abra `style.css` e procure por:
```css
--primary-color: #007bff;
--secondary-color: #6c757d;
```

Substitua pelos cores que quiser!

### Mudar Textos:

Abra `index.html` e edite:
- Título da página
- Descrição
- Botões
- Etc

### Adicionar Campos:

1. Abra `index.html`
2. Adicione um novo `<input>` ou `<select>`
3. Adicione a validação em `script.js`
4. Pronto!

---

## 🚀 Próximos Passos

1. ✅ Faça a configuração inicial
2. ✅ Teste o formulário
3. ✅ Customize as cores e textos
4. ✅ Faça deploy online
5. ✅ Compartilhe a URL com sua equipe
6. ✅ Comece a capturar leads!

---

## 📞 Suporte Rápido

| Problema | Solução |
|----------|---------|
| Não tenho ID do Formspree | Crie conta em formspree.io |
| Formulário não envia | Verifique o ID no `.env` |
| Não vejo leads no Sheets | Verifique a URL do Google Apps Script |
| Dúvida sobre integração | Leia GOOGLE_SHEETS.md |
| Quero customizar | Edite index.html e style.css |

---

## 🎉 Sucesso!

Se chegou até aqui, parabéns! 🎊

Agora é hora de:
- Começar a capturar leads
- Acompanhar o crescimento
- Responder aos clientes
- Vender mais! 💰

**Boa sorte! 🚀**

---

**Desenvolvido com ❤️ para Douglas Cel** | v1.0 | 2024