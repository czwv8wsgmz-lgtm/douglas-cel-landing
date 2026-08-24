/* ===========================
   DOUGLAS CEL - JAVASCRIPT
   Funcionalidades interativas e integração com Google Sheets
   =========================== */

// ===========================
// MENU MOBILE - HAMBURGER
// ===========================

document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle menu
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            
            // Animar hamburger
            hamburger.style.transform = navMenu.classList.contains('active') ? 'rotate(90deg)' : 'rotate(0)';
        });
    }

    // Fechar menu ao clicar em um link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            if (hamburger) {
                hamburger.style.transform = 'rotate(0)';
            }
        });
    });
});

// ===========================
// SCROLL SUAVE PARA FORMULÁRIO
// ===========================

function scrollToForm() {
    const formSection = document.getElementById('formulario');
    if (formSection) {
        formSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// ===========================
// FORMATAÇÃO DE TELEFONE
// ===========================

function formatPhoneNumber(value) {
    // Remove tudo que não é número
    let cleaned = value.replace(/\D/g, '');
    
    // Limita a 11 dígitos
    cleaned = cleaned.substring(0, 11);
    
    // Aplica formato (XX) XXXXX-XXXX
    if (cleaned.length <= 2) {
        return cleaned;
    } else if (cleaned.length <= 7) {
        return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2)}`;
    } else {
        return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2, 7)}-${cleaned.slice(7)}`;
    }
}

// Aplicar formatação ao campo de telefone
const phoneInput = document.getElementById('telefone');
if (phoneInput) {
    phoneInput.addEventListener('input', function() {
        this.value = formatPhoneNumber(this.value);
    });
}

// ===========================
// VALIDAÇÃO DE EMAIL
// ===========================

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// ===========================
// ENVIO DO FORMULÁRIO
// ===========================

const leadForm = document.getElementById('leadForm');
const formMessage = document.getElementById('formMessage');

if (leadForm) {
    leadForm.addEventListener('submit', async function(e) {
        e.preventDefault();

        // Validações
        const nome = document.getElementById('nome').value.trim();
        const email = document.getElementById('email').value.trim();
        const telefone = document.getElementById('telefone').value.trim();
        const privacidade = document.getElementById('privacidade').checked;

        // Validar campos obrigatórios
        if (!nome || !email || !telefone) {
            showFormMessage('Por favor, preencha todos os campos obrigatórios!', 'error');
            return;
        }

        // Validar email
        if (!isValidEmail(email)) {
            showFormMessage('Por favor, insira um email válido!', 'error');
            return;
        }

        // Validar privacidade
        if (!privacidade) {
            showFormMessage('Você precisa concordar com a política de privacidade!', 'error');
            return;
        }

        // Coletar dados do formulário
        const formData = {
            nome: nome,
            email: email,
            telefone: telefone,
            celularDesejado: document.getElementById('celularDesejado').value.trim(),
            celularUsado: document.getElementById('celularUsado').value.trim(),
            parcelas: document.getElementById('parcelas').value,
            dataEnvio: new Date().toLocaleString('pt-BR'),
            origem: 'Landing Page Douglas Cel'
        };

        // Enviar para Google Sheets
        await enviarParaGoogleSheets(formData);
    });
}

function showFormMessage(message, type) {
    formMessage.textContent = message;
    formMessage.className = `form-message ${type}`;
    
    // Auto-remover mensagem após 5 segundos
    setTimeout(() => {
        formMessage.className = 'form-message';
        formMessage.textContent = '';
    }, 5000);
}

// ===========================
// INTEGRAÇÃO COM GOOGLE SHEETS
// ===========================

async function enviarParaGoogleSheets(dados) {
    try {
        // Desabilitar botão enquanto processa
        const submitBtn = leadForm.querySelector('.submit-button');
        const textoBotaoOriginal = submitBtn.textContent;
        submitBtn.disabled = true;
        submitBtn.textContent = 'Enviando...';

        // Usar Google Forms como alternativa ou Google Apps Script
        // IMPORTANTE: Você precisa criar um Google Apps Script vinculado ao Google Sheets
        
        // Opção 1: Usando Google Apps Script (recomendado)
        const scriptURL = 'https://script.google.com/macros/d/YOUR_SCRIPT_ID/userfunctionbyname';
        
        // Opção 2: Usando Formspree (alternativa gratuita mais fácil)
        // Descomente a linha abaixo e comente as outras opções
        await enviarViaFormspree(dados);
        
        // Opção 3: Usando Sheety ou similares
        // await enviarViaSheety(dados);

        // Limpar formulário
        leadForm.reset();
        showFormMessage('✓ Obrigado! Sua mensagem foi recebida. Nossa equipe entrará em contato em breve!', 'success');

    } catch (error) {
        console.error('Erro ao enviar formulário:', error);
        showFormMessage('Erro ao enviar. Tente novamente ou contate-nos via WhatsApp.', 'error');
    } finally {
        // Reabilitar botão
        const submitBtn = leadForm.querySelector('.submit-button');
        submitBtn.disabled = false;
        submitBtn.textContent = textoBotaoOriginal;
    }
}

// ===========================
// ENVIO VIA FORMSPREE (Gratuito e Fácil)
// ===========================

async function enviarViaFormspree(dados) {
    // IMPORTANTE: Criar uma conta em formspree.io e obter o ID do formulário
    const formspreeID = 'YOUR_FORMSPREE_ID'; // Substituir com seu ID
    
    const payload = {
        nome: dados.nome,
        email: dados.email,
        telefone: dados.telefone,
        celularDesejado: dados.celularDesejado || 'Não informado',
        celularUsado: dados.celularUsado || 'Não informado',
        parcelas: dados.parcelas || 'Não informado',
        dataEnvio: dados.dataEnvio,
        origem: dados.origem
    };

    const response = await fetch(`https://formspree.io/f/${formspreeID}`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    });

    if (!response.ok) {
        throw new Error('Erro na resposta do servidor');
    }

    return response.json();
}

// ===========================
// ALTERNATIVA: ENVIO VIA GOOGLE APPS SCRIPT
// ===========================

async function enviarViaGoogleAppsScript(dados) {
    // Script criado no Google Apps Script e deployado como Web App
    const scriptURL = 'https://script.google.com/macros/d/YOUR_SCRIPT_ID/userfunctionbyname';
    
    try {
        const response = await fetch(scriptURL, {
            method: 'POST',
            body: JSON.stringify(dados),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const result = await response.json();
        
        if (result.status === 'sucesso') {
            return result;
        } else {
            throw new Error(result.mensagem || 'Erro ao enviar dados');
        }
    } catch (error) {
        console.error('Erro na requisição:', error);
        throw error;
    }
}

// ===========================
// ALTERNATIVA: ENVIO VIA SHEETY
// ===========================

async function enviarViaSheety(dados) {
    // Usar Sheety.co para conectar ao Google Sheets
    const sheetyURL = 'https://api.sheety.co/YOUR_PROJECT_ID/douglasCel/leads';
    
    const response = await fetch(sheetyURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer YOUR_SHEETY_TOKEN'
        },
        body: JSON.stringify({
            lead: dados
        })
    });

    if (!response.ok) {
        throw new Error('Erro ao enviar para Sheety');
    }

    return response.json();
}

// ===========================
// ANIMAÇÕES AO SCROLL
// ===========================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observar cards e elementos
document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll(
        '.benefit-card, .step, .testimonial-card, .form-wrapper'
    );
    
    elements.forEach(element => {
        observer.observe(element);
    });
});

// ===========================
// CONTADOR DE CARACTERES
// ===========================

function initCharacterCounter() {
    const inputs = ['celularDesejado', 'celularUsado'];
    const maxChars = 50;

    inputs.forEach(inputId => {
        const input = document.getElementById(inputId);
        if (input) {
            input.addEventListener('input', function() {
                if (this.value.length > maxChars) {
                    this.value = this.value.substring(0, maxChars);
                }
            });
        }
    });
}

initCharacterCounter();

// ===========================
// ANALYTICS E RASTREAMENTO
// ===========================

// Rastrear cliques nos botões CTA
function trackEvent(eventName, eventData = {}) {
    // Se você usar Google Analytics, descomente:
    // gtag('event', eventName, eventData);
    
    // Log local para debug
    console.log(`Event: ${eventName}`, eventData);
}

const ctaButton = document.querySelector('.cta-button');
if (ctaButton) {
    ctaButton.addEventListener('click', function() {
        trackEvent('cta_click', {
            button: 'Começar Agora',
            section: 'hero'
        });
    });
}

// Rastrear envio de formulário
if (leadForm) {
    leadForm.addEventListener('submit', function() {
        trackEvent('form_submit', {
            form: 'lead_capture',
            timestamp: new Date().toISOString()
        });
    });
}

// ===========================
// DETECÇÃO DE DISPOSITIVO
// ===========================

function detectDevice() {
    const userAgent = navigator.userAgent.toLowerCase();
    
    const isMobile = /iphone|ipad|android|mobile/.test(userAgent);
    const isTablet = /ipad|android(?!.*mobile)/.test(userAgent);
    const isDesktop = !isMobile && !isTablet;
    
    return {
        isMobile: iseMobile,
        isTablet: isTablet,
        isDesktop: isDesktop,
        userAgent: userAgent
    };
}

// ===========================
// ARMAZENAMENTO LOCAL (OPCIONAL)
// ===========================

function salvarDadosLocais(dados) {
    try {
        localStorage.setItem('douglasCelDados', JSON.stringify(dados));
    } catch (error) {
        console.log('Erro ao salvar dados locais:', error);
    }
}

function obterDadosLocais() {
    try {
        const dados = localStorage.getItem('douglasCelDados');
        return dados ? JSON.parse(dados) : null;
    } catch (error) {
        console.log('Erro ao obter dados locais:', error);
        return null;
    }
}

// Pré-preencher formulário se houver dados salvos
function prePreencher() {
    const dadosSalvos = obterDadosLocais();
    if (dadosSalvos) {
        Object.keys(dadosSalvos).forEach(chave => {
            const input = document.getElementById(chave);
            if (input && dadosSalvos[chave]) {
                input.value = dadosSalvos[chave];
            }
        });
    }
}

// Chamar ao carregar
document.addEventListener('DOMContentLoaded', prePreencher);

// ===========================
// SUAVIZAÇÃO DE SCROLL
// ===========================

// Já configurado no CSS com scroll-behavior: smooth

// ===========================
// VALIDAÇÃO EM TEMPO REAL
// ===========================

function setupRealtimeValidation() {
    const emailInput = document.getElementById('email');
    if (emailInput) {
        emailInput.addEventListener('blur', function() {
            if (this.value && !isValidEmail(this.value)) {
                this.style.borderColor = '#dc3545';
            } else {
                this.style.borderColor = '#0066cc';
            }
        });
    }
}

document.addEventListener('DOMContentLoaded', setupRealtimeValidation);

// ===========================
// NOTIFICAÇÕES DE SUPORTE
// ===========================

// WhatsApp direto
function abrirWhatsApp() {
    const numero = '5511999999999'; // Substituir com número real
    const mensagem = 'Olá! Tenho interesse em conhecer os celulares da Douglas Cel.';
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank');
}

// ===========================
// INICIALIZAÇÃO GERAL
// ===========================

console.log('✓ Douglas Cel - Landing Page carregada com sucesso!');

// Verificar se todos os elementos críticos estão presentes
window.addEventListener('load', function() {
    console.log('✓ Página totalmente carregada');
    console.log('Dispositivo:', detectDevice());
});