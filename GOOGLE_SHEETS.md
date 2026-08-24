# 📊 Guia Completo: Integração com Google Sheets

Este guia detalha como configurar a landing page Douglas Cel para capturar e armazenar leads em Google Sheets de forma automática.

## 🎯 Visão Geral

Existem **3 formas gratuitas** de integrar a landing page com Google Sheets:

1. **Formspree** (⭐ Recomendado - Mais fácil)
2. **Google Apps Script** (Mais controle)
3. **Sheety** (Alternativa moderna)

---

## 📝 Opção 1: Formspree (Recomendado) ⭐

### Por que escolher Formspree?
- ✅ Extremamente fácil de configurar
- ✅ Gratuito (até 50 envios/mês)
- ✅ Integração direta com Gmail ou redirecionamento de emails
- ✅ Não requer backend
- ✅ Suporte excelente

### Passo a Passo

#### 1. Criar Conta no Formspree

1. Acesse [formspree.io](https://formspree.io)
2. Clique em **"Sign Up"** ou **"Get Started"**
3. Crie uma conta com seu email
4. Confirme o email

#### 2. Criar um Novo Formulário

1. No dashboard do Formspree, clique em **"New Form"**
2. Escolha um nome (ex: `douglas-cel-leads`)
3. Selecione o plano **Free**
4. Você receberá um **Form ID** (ex: `f/abc123def456`)

#### 3. Configurar Destinatário de Emails

1. Vá para as **Configurações** do formulário
2. Em **"Notifications"**, adicione o email onde os leads serão enviados
3. Você pode adicionar múltiplos emails
4. Salve as configurações

#### 4. Obter o ID do Formulário

Seu URL será algo como:
```
https://formspree.io/f/xyzabc123
```

O **ID do formulário** é: `xyzabc123`

#### 5. Atualizar script.js

No arquivo `script.js`, encontre a função `enviarViaFormspree`:

```javascript
async function enviarViaFormspree(dados) {
    // IMPORTANTE: Criar uma conta em formspree.io e obter o ID do formulário
    const formspreeID = 'YOUR_FORMSPREE_ID'; // ← Substitua aqui
```

Substitua `YOUR_FORMSPREE_ID` pelo seu ID real. Por exemplo:

```javascript
const formspreeID = 'xyzabc123';
```

#### 6. Testar

1. Abra a landing page
2. Preencha o formulário
3. Clique em **"Enviar Meu Interesse"**
4. Você deve receber um email com os dados

✅ **Pronto!** O Formspree agora captura todos os seus leads.

### Integração com Google Sheets via Formspree

Para salvar os emails do Formspree diretamente no Google Sheets:

1. Use **Zapier.com** (1.000 ações grátis/mês)
   - Conecte Formspree → Google Sheets
   - Configure automação

2. Ou use **Make.com** (alternativa ao Zapier)

3. Ou simplesmente exporte os emails do Formspree para Excel

---

## 🔧 Opção 2: Google Apps Script (Mais Controle)

### Por que escolher Google Apps Script?
- ✅ Controle total sobre os dados
- ✅ Dados salvos diretamente no Google Sheets
- ✅ Gratuito
- ✅ Integração 100% Google

### Passo a Passo

#### 1. Criar Google Sheets

1. Acesse [sheets.google.com](https://sheets.google.com)
2. Clique em **"Criar uma nova planilha"**
3. Nomeie como **"Douglas Cel - Leads"**
4. Na primeira linha, adicione as colunas:
   ```
   Data | Nome | Email | Telefone | Celular Desejado | Celular Usado | Parcelas | Origem
   ```

#### 2. Criar Google Apps Script

1. No Google Sheets, vá para **Extensões** → **Apps Script**
2. Delete o código padrão
3. Cole o código abaixo:

```javascript
function doPost(e) {
  try {
    // Obter dados do formulário
    const dados = JSON.parse(e.postData.contents);
    
    // Abrir a planilha ativa
    const sheet = SpreadsheetApp.getActiveSheet();
    
    // Adicionar nova linha com os dados
    sheet.appendRow([
      dados.dataEnvio,
      dados.nome,
      dados.email,
      dados.telefone,
      dados.celularDesejado || 'Não informado',
      dados.celularUsado || 'Não informado',
      dados.parcelas || 'Não informado',
      dados.origem
    ]);
    
    // Retornar sucesso
    return ContentService.createTextOutput(JSON.stringify({
      status: 'sucesso',
      mensagem: 'Dados recebidos com sucesso!'
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    // Retornar erro
    return ContentService.createTextOutput(JSON.stringify({
      status: 'erro',
      mensagem: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}
```

#### 3. Deploy como Web App

1. Clique em **"Deploy"** (canto superior direito)
2. Selecione **"New deployment"**
3. Escolha tipo **"Web app"**
4. Em "Execute as", selecione **sua conta Google**
5. Em "Who has access", selecione **"Anyone"**
6. Clique em **"Deploy"**
7. Copie a URL gerada (ex: `https://script.google.com/macros/d/ABC123.../userfunctionbyname`)

#### 4. Atualizar script.js

No arquivo `script.js`, encontre a função `enviarViaGoogleAppsScript`:

```javascript
async function enviarViaGoogleAppsScript(dados) {
    const scriptURL = 'https://script.google.com/macros/d/YOUR_SCRIPT_ID/userfunctionbyname'; // ← Substitua
```

Substitua `YOUR_SCRIPT_ID` pela URL completa que você copiou.

#### 5. Ativar a Opção

No arquivo `script.js`, na função `enviarParaGoogleSheets`, descomente a linha:

```javascript
// Trocar de:
await enviarViaFormspree(dados);

// Para:
await enviarViaGoogleAppsScript(dados);
```

#### 6. Testar

1. Abra a landing page
2. Preencha e envie o formulário
3. Verifique se os dados aparecem no Google Sheets

✅ **Pronto!** Seus leads estão sendo salvos em tempo real no Google Sheets!

---

## 🌐 Opção 3: Sheety (Alternativa Moderna)

### Por que escolher Sheety?
- ✅ Interface moderna
- ✅ API REST simples
- ✅ Gratuito (até 5 planilhas)
- ✅ Sincronização automática

### Passo a Passo

#### 1. Criar Conta no Sheety

1. Acesse [sheety.co](https://sheety.co)
2. Clique em **"Sign Up"**
3. Autentique com sua conta Google
4. Selecione um Google Sheets existente ou crie um novo

#### 2. Configurar Sheety

1. No Sheety, selecione sua planilha
2. Copie a **URL da API** fornecida (ex: `https://api.sheety.co/YOUR_ID/douglasCel/leads`)

#### 3. Gerar Token (Opcional mas Recomendado)

1. Na seção de Configurações, gere um **Bearer Token**
2. Copie o token

#### 4. Atualizar script.js

No arquivo `script.js`, encontre a função `enviarViaSheety`:

```javascript
async function enviarViaSheety(dados) {
    const sheetyURL = 'https://api.sheety.co/YOUR_PROJECT_ID/douglasCel/leads'; // ← Substitua URL
    
    const response = await fetch(sheetyURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer YOUR_SHEETY_TOKEN' // ← Substitua token
        },
```

Substitua:
- `YOUR_PROJECT_ID`: Seu ID do projeto Sheety
- `YOUR_SHEETY_TOKEN`: Seu token de autenticação

#### 5. Ativar a Opção

No arquivo `script.js`, na função `enviarParaGoogleSheets`, descomente:

```javascript
await enviarViaSheety(dados);
```

#### 6. Testar

1. Preencha e envie o formulário
2. Verifique os dados no Google Sheets

✅ **Pronto!** Dados salvos via Sheety!

---

## 📊 Configuração Recomendada: Formspree + Zapier

### Melhor integração completa:

1. **Formspree** captura o formulário
2. **Zapier** automatiza para Google Sheets
3. **Google Sheets** armazena os dados

### Passos:

1. Configure Formspree (veja acima)
2. Acesse [zapier.com](https://zapier.com)
3. Crie um novo **Zap**
4. **Trigger**: Formspree (New Email)
5. **Action**: Google Sheets (Create Spreadsheet Row)
6. Mapeie os campos
7. Ative o Zap

✅ Leads automáticos em Google Sheets!

---

## 🔍 Monitorar Leads

### Via Formspree:
- Dashboard mostra todos os envios
- Emails recebidos na caixa de entrada

### Via Google Sheets:
- Visualize todos os dados em tempo real
- Crie gráficos e análises
- Compartilhe com a equipe

### Compartilhar Google Sheets:

1. Abra o Google Sheets
2. Clique em **"Compartilhar"** (canto superior direito)
3. Adicione emails da equipe
4. Defina permissões (Visualizar/Editar/Comentar)

---

## 🚨 Troubleshooting

### Formulário não envia dados?

**1. Verificar o Console**
- Abra DevTools (F12)
- Vá para **Console**
- Preencha o formulário
- Procure por mensagens de erro

**2. Verificar o ID do Formspree**
- O ID está correto?
- Exemplo correto: `f/abc123def456`
- Não use a URL completa, apenas o ID

**3. Verificar Conexão**
- Teste em conexão diferente
- Limpe cache do navegador
- Teste em navegador diferente

### Google Apps Script não recebe dados?

**1. Verifique a URL do Web App**
- Está correto?
- Termina com `/userfunctionbyname`?

**2. Verifique Permissões**
- Script está deployado como "Anyone"?
- Precisa estar público para funcionar

**3. Verifique o Código**
- Abra Apps Script
- Clique em **"Executar"**
- Verifique se há erros

---

## 📈 Próximos Passos

1. ✅ Configure integração (Formspree recomendado)
2. ✅ Teste o formulário
3. ✅ Compartilhe Google Sheets com equipe
4. ✅ Configure automações (Zapier)
5. ✅ Crie análises de leads

---

## 📞 Suporte

Se tiver dúvidas:

- **Formspree**: help.formspree.io
- **Google Apps Script**: developers.google.com/apps-script
- **Sheety**: sheety.co/support
- **Zapier**: zapier.com/help

---

**Desenvolvido com ❤️ para Douglas Cel** | Versão 1.0 | 2024