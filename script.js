const translations = {
    en: {
      "nav-features": "Features",
      "nav-platforms": "Platforms",
      "nav-download": "Download",

      "hero-title": "Listen to Spotify without ads",
      "hero-subtitle": "Spot-X is a universal ad blocker for the Spotify desktop application on Windows, Linux, and Mac",
      "btn-download": "Download for free",
      "btn-learn-more": "Learn more",

      "features-title": "Spot-X Features",
      "feature1-title": "Ad Blocking",
      "feature1-desc": "Completely removes all ad breaks from your music stream",
      "feature2-title": "Cross-platform",
      "feature2-desc": "Works on all major operating systems — Windows, Linux, and Mac",
      "feature3-title": "Easy Installation",
      "feature3-desc": "Simple installation process without complex settings",
      "feature4-title": "Completely Free",
      "feature4-desc": "No payments or subscriptions — use absolutely free",

      "platforms-title": "Supported Platforms",
      "platform1-title": "Windows",
      "platform1-desc": "Compatible with Windows 10 and 11",
      "platform2-title": "macOS",
      "platform2-desc": "Works on all current versions",
      "platform3-title": "Linux",
      "platform3-desc": "Support for popular distributions",

      "download-title": "Download Spot-X",
      "download-desc": "Choose the version for your operating system",
      "download-windows": "Windows",
      "download-macos": "macOS",
      "download-linux": "Linux",
      "github-link": "Source code on GitHub",

      "how-works-title": "How it works",
      "step1-title": "Download",
      "step1-desc": "Get Spot-X for your operating system",
      "step2-title": "Install",
      "step2-desc": "Follow the simple installation instructions",
      "step3-title": "Enjoy",
      "step3-desc": "Listen to music on Spotify without ads",

      "footer-product": "Product",
      "footer-disclaimer": "Spot-X is not affiliated with Spotify AB.",
      "footer-description": "A versatile ad-blocker designed for the Spotify desktop application"
    },
    ru: {
      "nav-features": "Возможности",
      "nav-platforms": "Платформы",
      "nav-download": "Скачать",
      
      "hero-title": "Слушайте музыку в Spotify без рекламы",
      "hero-subtitle": "Spot-X — универсальный блокировщик рекламы для десктопного приложения Spotify на Windows, Linux и Mac",
      "btn-download": "Скачать бесплатно",
      "btn-learn-more": "Узнать больше",

      "features-title": "Возможности Spot-X",
      "feature1-title": "Блокировка рекламы",
      "feature1-desc": "Полностью убирает все рекламные вставки из потока музыки",
      "feature2-title": "Кроссплатформенность",
      "feature2-desc": "Работает на всех основных операционных системах — Windows, Linux и Mac",
      "feature3-title": "Легкая установка",
      "feature3-desc": "Простой процесс установки без сложных настроек",
      "feature4-title": "Полностью бесплатно",
      "feature4-desc": "Никаких платежей или подписок — используйте абсолютно бесплатно",

      "platforms-title": "Поддерживаемые платформы",
      "platform1-title": "Windows",
      "platform1-desc": "Совместимо с Windows 10 и 11",
      "platform2-title": "macOS",
      "platform2-desc": "Работает на всех актуальных версиях",
      "platform3-title": "Linux",
      "platform3-desc": "Поддержка популярных дистрибутивов",

      "download-title": "Скачать Spot-X",
      "download-desc": "Выберите версию для вашей операционной системы",
      "download-windows": "Windows",
      "download-macos": "macOS",
      "download-linux": "Linux",
      "github-link": "Исходный код на GitHub",

      "how-works-title": "Как это работает",
      "step1-title": "Скачайте",
      "step1-desc": "Загрузите Spot-X для вашей операционной системы",
      "step2-title": "Установите",
      "step2-desc": "Следуйте простым инструкциям по установке",
      "step3-title": "Наслаждайтесь",
      "step3-desc": "Слушайте музыку в Spotify без рекламы",

      "footer-product": "Продукт",
      "footer-disclaimer": "Spot-X не связан со Spotify AB.",
      "footer-description": "Универсальный блокировщик рекламы для десктопного приложения Spotify"
    }
  };
  
  function initializeI18n() {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
      const key = element.getAttribute('data-i18n');
      if (element.tagName === 'INPUT' && (element.type === 'submit' || element.type === 'button')) {
        element.value = translations.en[key];
      } else {
        element.textContent = translations.en[key];
      }
    });
    
    document.documentElement.lang = 'en';
  }
  
  function addLanguageSwitcher() {
    const languageSwitcher = document.createElement('div');
    languageSwitcher.className = 'language-switcher';
    
    const enButton = document.createElement('button');
    enButton.textContent = 'EN';
    enButton.className = 'lang-btn active';
    enButton.setAttribute('data-lang', 'en');
    
    const ruButton = document.createElement('button');
    ruButton.textContent = 'RU';
    ruButton.className = 'lang-btn';
    ruButton.setAttribute('data-lang', 'ru');
    
    languageSwitcher.appendChild(enButton);
    languageSwitcher.appendChild(ruButton);
    
    const navContent = document.querySelector('.nav-content');
    navContent.appendChild(languageSwitcher);
    
    enButton.addEventListener('click', () => switchLanguage('en'));
    ruButton.addEventListener('click', () => switchLanguage('ru'));
  }
  
  function switchLanguage(lang) {
    document.querySelectorAll('.lang-btn').forEach(btn => {
      if (btn.getAttribute('data-lang') === lang) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
    
    document.documentElement.lang = lang;

    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
      const key = element.getAttribute('data-i18n');
      if (translations[lang] && translations[lang][key]) {
        if (element.tagName === 'INPUT' && (element.type === 'submit' || element.type === 'button')) {
          element.value = translations[lang][key];
        } else {
          element.textContent = translations[lang][key];
        }
      }
    });
  }
  
  function addSmoothScrolling() {
    const smoothScrollOptions = {
      speed: 800,
      easing: 'easeInOutQuint',
      offset: 80
    };
    
    let scrolling = false;
    
    const easings = {
      easeInOutQuint: function(t) {
        return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * (--t) * t * t * t * t;
      }
    };
    
    function smoothScroll(targetElement, options) {
      if (scrolling) return;
      scrolling = true;
      
      const startPosition = window.pageYOffset;
      const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - options.offset;
      const distance = targetPosition - startPosition;
      let startTime = null;
      
      function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / options.speed, 1);
        const easing = easings[options.easing](progress);
        
        window.scrollTo(0, startPosition + distance * easing);
        
        if (timeElapsed < options.speed) {
          requestAnimationFrame(animation);
        } else {
          scrolling = false;
        }
      }
      
      requestAnimationFrame(animation);
    }
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          smoothScroll(targetElement, smoothScrollOptions);
        }
      });
    });
  }
  

  function prepareElementsForI18n() {
    document.querySelectorAll('.nav-links li a').forEach((link, index) => {
      const key = `nav-${link.getAttribute('href').substring(1)}`;
      link.setAttribute('data-i18n', key);
    });
    
    document.querySelector('.hero-content h1').setAttribute('data-i18n', 'hero-title');
    document.querySelector('.hero-content p').setAttribute('data-i18n', 'hero-subtitle');
    document.querySelector('.btn-primary').setAttribute('data-i18n', 'btn-download');
    document.querySelector('.btn-secondary').setAttribute('data-i18n', 'btn-learn-more');
    
    document.querySelector('#features h2').setAttribute('data-i18n', 'features-title');
    
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards[0].querySelector('h3').setAttribute('data-i18n', 'feature1-title');
    featureCards[0].querySelector('p').setAttribute('data-i18n', 'feature1-desc');
    featureCards[1].querySelector('h3').setAttribute('data-i18n', 'feature2-title');
    featureCards[1].querySelector('p').setAttribute('data-i18n', 'feature2-desc');
    featureCards[2].querySelector('h3').setAttribute('data-i18n', 'feature3-title');
    featureCards[2].querySelector('p').setAttribute('data-i18n', 'feature3-desc');
    featureCards[3].querySelector('h3').setAttribute('data-i18n', 'feature4-title');
    featureCards[3].querySelector('p').setAttribute('data-i18n', 'feature4-desc');
    
    document.querySelector('#platforms h2').setAttribute('data-i18n', 'platforms-title');
    
    const platformCards = document.querySelectorAll('.platform-card');
    platformCards[0].querySelector('h3').setAttribute('data-i18n', 'platform1-title');
    platformCards[0].querySelector('p').setAttribute('data-i18n', 'platform1-desc');
    platformCards[1].querySelector('h3').setAttribute('data-i18n', 'platform2-title');
    platformCards[1].querySelector('p').setAttribute('data-i18n', 'platform2-desc');
    platformCards[2].querySelector('h3').setAttribute('data-i18n', 'platform3-title');
    platformCards[2].querySelector('p').setAttribute('data-i18n', 'platform3-desc');
    
    document.querySelector('#download h2').setAttribute('data-i18n', 'download-title');
    document.querySelector('.download-description').setAttribute('data-i18n', 'download-desc');
    
    const downloadOptions = document.querySelectorAll('.download-option');
    downloadOptions[0].querySelector('h3').setAttribute('data-i18n', 'download-windows');
    downloadOptions[1].querySelector('h3').setAttribute('data-i18n', 'download-macos');
    downloadOptions[2].querySelector('h3').setAttribute('data-i18n', 'download-linux');
    
    document.querySelector('.github-link a span').setAttribute('data-i18n', 'github-link');
    

    document.querySelector('.how-it-works h2').setAttribute('data-i18n', 'how-works-title');
    
    const steps = document.querySelectorAll('.step');
    steps[0].querySelector('h3').setAttribute('data-i18n', 'step1-title');
    steps[0].querySelector('p').setAttribute('data-i18n', 'step1-desc');
    steps[1].querySelector('h3').setAttribute('data-i18n', 'step2-title');
    steps[1].querySelector('p').setAttribute('data-i18n', 'step2-desc');
    steps[2].querySelector('h3').setAttribute('data-i18n', 'step3-title');
    steps[2].querySelector('p').setAttribute('data-i18n', 'step3-desc');

    document.querySelector('.footer-links-column h3').setAttribute('data-i18n', 'footer-product');
    document.querySelector('.footer-bottom p').setAttribute('data-i18n', 'footer-disclaimer');
    document.querySelector('.footer-logo p').setAttribute('data-i18n', 'footer-description');
  }

  function addLanguageSwitcherStyles() {
    const style = document.createElement('style');
    style.textContent = `
      .language-switcher {
        display: flex;
        margin-left: 20px;
        align-items: center;
      }
      
      .lang-btn {
        background: none;
        border: none;
        color: #999;
        cursor: pointer;
        font-size: 14px;
        font-weight: 600;
        padding: 5px 8px;
        margin: 0 2px;
        border-radius: 4px;
        transition: all 0.3s ease;
      }
      
      .lang-btn.active {
        color: #1DB954;
        background: rgba(29, 185, 84, 0.1);
      }
      
      .lang-btn:hover:not(.active) {
        color: #777;
        background: rgba(0, 0, 0, 0.05);
      }
      
      @media (max-width: 768px) {
        .language-switcher {
          position: absolute;
          top: 15px;
          right: 60px;
        }
      }
    `;
    document.head.appendChild(style);
  }
  
  document.addEventListener('DOMContentLoaded', function() {
      const menuToggle = document.getElementById('menuToggle');
      const navLinks = document.querySelector('.nav-links');
     
      if (menuToggle) {
          menuToggle.addEventListener('click', function() {
              navLinks.classList.toggle('active');
              menuToggle.classList.toggle('active');
          });
      }

      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
          anchor.addEventListener('click', function(e) {
              e.preventDefault();

              if (navLinks.classList.contains('active')) {
                  navLinks.classList.remove('active');
                  menuToggle.classList.remove('active');
              }
             
              const targetId = this.getAttribute('href');
              const targetElement = document.querySelector(targetId);
             
              if (targetElement) {
                  window.scrollTo({
                      top: targetElement.offsetTop - 80,
                      behavior: 'smooth'
                  });
              }
          });
      });
  
      prepareElementsForI18n();
      addLanguageSwitcherStyles();
      addLanguageSwitcher();
      initializeI18n();
      
      addSmoothScrolling();
  });
