// ============================================
// Людмила Краусе — Художник, преподаватель
// Montserrat | Бирюзовый + цвета | RU/DE | Тёмная тема
// Фото хранятся в IndexedDB, 3 категории галереи
// ============================================

const translations = {
    ru: {
        logo: 'Мила Краузе',
        title: 'Людмила Краусе — Художник, преподаватель, арт-терапевт',
        nav_about: 'Обо мне',
        nav_services: 'Услуги',
        nav_gallery: 'Галерея',
        nav_contact: 'Контакты',
        btn_contact: 'Связаться',
        hero_badge: 'Художник с 20-летним стажем',
        hero_title: 'Раскрываю талант каждого ребёнка через творчество',
        hero_text: 'Художественные занятия для детей, арт-терапия, нейрографика и консультации по астрогенетике. Работаю в Ойскирхене и онлайн с русско- и украиноязычными семьями в Германии и за рубежом.',
        badge_1: 'Индивидуальный подход',
        badge_2: 'Онлайн и офлайн',
        badge_3: 'Для детей и взрослых',
        btn_cta: 'Записаться на занятие',
        services_label: 'Услуги',
        services_title: 'Чем я занимаюсь',
        services_subtitle: 'Уроки рисования, терапевтические практики и консультации для детей и взрослых',
        tag_kids: '5–15 лет',
        tag_teens: 'от 10 лет',
        tag_all: 'для всех',
        tag_online: 'онлайн',
        tag_consult: 'консультация',
        tag_individual: 'индивидуально',
        service_1_title: 'Рисование для детей',
        service_1_desc: 'Занятия для детей от 5 до 15 лет. Карандаш, акварель, акрил и развитие творческого мышления.',
        service_2_title: 'Масляная живопись',
        service_2_desc: 'Серьёзные занятия для подростков на холсте маслом. Техника, цвет, композиция.',
        service_3_title: 'Арт-терапия',
        service_3_desc: 'Снятие стресса и эмоциональная гармонизация через творчество. Для детей и взрослых.',
        service_4_title: 'Нейрографика онлайн',
        service_4_desc: 'Практика, которая помогает проработать запросы и найти решения через рисунок. Доступно дистанционно.',
        service_5_title: 'Астрогенетика',
        service_5_desc: 'Раскрытие планетарного потенциала ребёнка по дате рождения. Понимание сильных сторон и талантов.',
        service_6_title: 'Световые карты',
        service_6_desc: 'Индивидуальные световые карты для поддержки гармонии, намерений и внутреннего баланса.',
        about_label: 'Обо мне',
        about_title: 'Творчество как путь к себе',
        about_p1: 'Я художник с 20-летним стажем. Верю, что каждый ребёнок талантлив по-своему, и моя задача — помочь этот талант раскрыть. Учу детей рисовать карандашом, акрилом, маслом на холсте, развиваю творческое мышление и уверенность в себе.',
        about_p2: 'Помимо изобразительного искусства, я провожу арт-терапевтические занятия и нейрографику для детей и взрослых, помогаю снять стресс через творчество. Для родителей раскрываю планетарный потенциал детей по дате рождения.',
        quote: '«Каждый ребёнок талантлив по-своему, и я готова помочь раскрыть его потенциал.»',
        float_years: 'лет опыта',
        photo_placeholder: 'Фото художника',
        stat_1: 'лет творческого опыта',
        stat_2: 'лет — возраст учеников',
        stat_3: 'направления искусства',
        stat_4: 'языки консультаций',
        gallery_label: 'Портфолио',
        gallery_title: 'Галерея',
        gallery_subtitle: 'Фрагменты работ и ученических проектов в разных техниках',
        // Категории галереи
        gallery_tab_personal: 'Личная',
        gallery_tab_students: 'Ученики',
        gallery_tab_neuro: 'Нейрографика',
        work_1: 'Работа 1',
        work_2: 'Работа 2',
        work_3: 'Работа 3',
        work_4: 'Работа 4',
        work_5: 'Работа 5',
        work_6: 'Работа 6',
        contact_label: 'Контакты',
        contact_title: 'Свяжитесь со мной',
        contact_subtitle: 'Запишитесь на пробное занятие, задайте вопрос или узнайте больше об услугах',
        contact_info_title: 'Контакты',
        contact_info_text: 'Пишите или звоните — отвечу в удобное для вас время.',
        form_title: 'Записаться на занятие',
        form_text: 'Напишите мне в Telegram или WhatsApp, и мы договоримся о времени и формате.',
        form_note: 'Занятия проходят в Ойскирхене или онлайн. Первое знакомство — возможно в формате консультации, чтобы выбрать подходящий формат.',
        footer_text: '© 2026 Людмила Краусе. Все права защищены.',
        gallery_more: 'Больше работ',
        moreworks_title: 'Все работы — Людмила Краусе',
        moreworks_heading: 'Все работы',
        moreworks_subtitle: 'Полная коллекция работ и ученических проектов',
        moreworks_empty: 'Пока нет загруженных работ'
    },
    de: {
        logo: 'Mila Krause',
        title: 'Ljudmila Krause — Künstlerin, Lehrerin, Kunsttherapeutin',
        nav_about: 'Über mich',
        nav_services: 'Leistungen',
        nav_gallery: 'Galerie',
        nav_contact: 'Kontakt',
        btn_contact: 'Kontakt',
        hero_badge: 'Künstlerin mit 20 Jahren Erfahrung',
        hero_title: 'Ich entfalte das Talent jedes Kindes durch Kreativität',
        hero_text: 'Kunstunterricht für Kinder, Kunsttherapie, Neurographik und Astro-Genetik-Beratung. Ich arbeite in Euskirchen und online mit russisch- und ukrainischsprachigen Familien in Deutschland und im Ausland.',
        badge_1: 'Individueller Ansatz',
        badge_2: 'Online und Offline',
        badge_3: 'Für Kinder und Erwachsene',
        btn_cta: 'Termin vereinbaren',
        services_label: 'Leistungen',
        services_title: 'Was ich anbiete',
        services_subtitle: 'Zeichenunterricht, therapeutische Praktiken und Beratungen für Kinder und Erwachsene',
        tag_kids: '5–15 Jahre',
        tag_teens: 'ab 10 Jahren',
        tag_all: 'für alle',
        tag_online: 'online',
        tag_consult: 'Beratung',
        tag_individual: 'individuell',
        service_1_title: 'Zeichnen für Kinder',
        service_1_desc: 'Unterricht für Kinder von 5 bis 15 Jahren. Bleistift, Aquarell, Acryl und Entwicklung des kreativen Denkens.',
        service_2_title: 'Ölmalerei',
        service_2_desc: 'Intensiver Unterricht für Jugendliche auf Leinwand mit Ölfarben. Technik, Farbe, Komposition.',
        service_3_title: 'Kunsttherapie',
        service_3_desc: 'Stressabbau und emotionale Harmonisierung durch Kreativität. Für Kinder und Erwachsene.',
        service_4_title: 'Neurographik Online',
        service_4_desc: 'Eine Praxis, die hilft, Anliegen zu bearbeiten und Lösungen durch Zeichnen zu finden. Fern verfügbar.',
        service_5_title: 'Astro-Genetik',
        service_5_desc: 'Enthüllung des planetaren Potenzials eines Kindes anhand des Geburtsdatums. Verständnis von Stärken und Talenten.',
        service_6_title: 'Lichtkarten',
        service_6_desc: 'Individuelle Lichtkarten zur Unterstützung von Harmonie, Absichten und innerem Gleichgewicht.',
        about_label: 'Über mich',
        about_title: 'Kreativität als Weg zu sich selbst',
        about_p1: 'Ich bin Künstlerin mit 20 Jahren Erfahrung. Ich glaube, dass jedes Kind auf seine Weise talentiert ist, und meine Aufgabe ist es, dieses Talent zu entfalten. Ich lehre Kinder, mit Bleistift, Acryl und Öl auf Leinwand zu malen, und entwickle kreatives Denken und Selbstvertrauen.',
        about_p2: 'Neben der bildenden Kunst biete ich Kunsttherapie und Neurographik für Kinder und Erwachsene an, helfe beim Stressabbau durch Kreativität. Für Eltern enthülle ich das planetare Potenzial der Kinder anhand des Geburtsdatums.',
        quote: '"Jedes Kind ist auf seine Weise talentiert, und ich bin bereit, sein Potenzial zu entfalten."',
        float_years: 'Jahre Erfahrung',
        photo_placeholder: 'Foto der Künstlerin',
        stat_1: 'Jahre kreative Erfahrung',
        stat_2: 'Jahre — Altersgruppe der Schüler',
        stat_3: 'Kunstrichtungen',
        stat_4: 'Beratungssprachen',
        gallery_label: 'Portfolio',
        gallery_title: 'Galerie',
        gallery_subtitle: 'Ausschnitte aus Werken und Schülerprojekten in verschiedenen Techniken',
        gallery_tab_personal: 'Persönlich',
        gallery_tab_students: 'Schüler',
        gallery_tab_neuro: 'Neurographik',
        work_1: 'Werk 1',
        work_2: 'Werk 2',
        work_3: 'Werk 3',
        work_4: 'Werk 4',
        work_5: 'Werk 5',
        work_6: 'Werk 6',
        contact_label: 'Kontakt',
        contact_title: 'Kontaktieren Sie mich',
        contact_subtitle: 'Vereinbaren Sie eine Probestunde, stellen Sie eine Frage oder erfahren Sie mehr über meine Leistungen',
        contact_info_title: 'Kontakt',
        contact_info_text: 'Schreiben oder rufen Sie an — ich antworte zu einer Zeit, die Ihnen passt.',
        form_title: 'Termin vereinbaren',
        form_text: 'Schreiben Sie mir auf Telegram oder WhatsApp, und wir vereinbaren Zeit und Format.',
        form_note: 'Der Unterricht findet in Euskirchen oder online statt. Das erste Kennenlernen kann als Beratung erfolgen, um das passende Format zu wählen.',
        footer_text: '© 2026 Ljudmila Krause. Alle Rechte vorbehalten.',
        gallery_more: 'Mehr Werke',
        moreworks_title: 'Alle Werke — Ljudmila Krause',
        moreworks_heading: 'Alle Werke',
        moreworks_subtitle: 'Die komplette Sammlung von Werken und Schülerprojekten',
        moreworks_empty: 'Noch keine Werke hochgeladen'
    }
};

let currentLang = 'ru';
let db = null;
let currentGalleryCategory = 'personal';

const GALLERY_MORE_URL = 'moreworks.html';
const DB_NAME = 'MilaKrauseDB';
const DB_VERSION = 2;
const IS_MOREWORKS = location.pathname.includes('moreworks');

// ============================================
// IndexedDB
// ============================================
function openDB() {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open(DB_NAME, DB_VERSION);
        request.onerror = () => reject(request.error);
        request.onsuccess = () => { db = request.result; resolve(db); };
        request.onupgradeneeded = (e) => {
            const database = e.target.result;
            if (!database.objectStoreNames.contains('photos')) {
                database.createObjectStore('photos');
            }
        };
    });
}

function dbGet(key) {
    return new Promise((resolve, reject) => {
        const tx = db.transaction('photos', 'readonly');
        const store = tx.objectStore('photos');
        const req = store.get(key);
        req.onsuccess = () => resolve(req.result);
        req.onerror = () => reject(req.error);
    });
}

function dbSet(key, value) {
    return new Promise((resolve, reject) => {
        const tx = db.transaction('photos', 'readwrite');
        const store = tx.objectStore('photos');
        const req = store.put(value, key);
        req.onsuccess = () => resolve();
        req.onerror = () => reject(req.error);
    });
}

function dbDelete(key) {
    return new Promise((resolve, reject) => {
        const tx = db.transaction('photos', 'readwrite');
        const store = tx.objectStore('photos');
        const req = store.delete(key);
        req.onsuccess = () => resolve();
        req.onerror = () => reject(req.error);
    });
}

async function getGallery(category) {
    const key = 'gallery_' + category;
    const data = await dbGet(key);
    return Array.isArray(data) ? data : [];
}

async function setGallery(category, items) {
    const key = 'gallery_' + category;
    await dbSet(key, items);
}

async function getAboutPhoto() {
    return await dbGet('about_photo') || null;
}

async function setAboutPhoto(data) {
    await dbSet('about_photo', data);
}

async function deleteAboutPhoto() {
    await dbDelete('about_photo');
}

// ============================================
// File to Base64
// ============================================
function fileToBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
}

// ============================================
// Render — главная страница
// ============================================
async function renderGallery() {
    const grid = document.getElementById('galleryGrid');
    const tabsWrap = document.getElementById('galleryTabsWrap');
    const moreWrap = document.getElementById('galleryMoreWrap');
    if (!grid) return;
    grid.innerHTML = '';
    if (moreWrap) moreWrap.innerHTML = '';

    // Рендерим табы
    if (tabsWrap) {
        const t = translations[currentLang];
        tabsWrap.innerHTML = `
            <div class="gallery-tabs">
                <button class="gallery-tab active" data-category="personal">${t.gallery_tab_personal || '🎨 Личная'}</button>
                <button class="gallery-tab" data-category="students">${t.gallery_tab_students || '👨‍🎓 Ученики'}</button>
                <button class="gallery-tab" data-category="neuro">${t.gallery_tab_neuro || '✏️ Нейрографика'}</button>
            </div>
        `;
        // События для табов
        tabsWrap.querySelectorAll('.gallery-tab').forEach(tab => {
            tab.addEventListener('click', async function() {
                tabsWrap.querySelectorAll('.gallery-tab').forEach(t => t.classList.remove('active'));
                this.classList.add('active');
                const grid = document.getElementById('galleryGrid');
                if (grid) {
                    grid.classList.add('switching');
                    await new Promise(r => setTimeout(r, 250));
                    currentGalleryCategory = this.dataset.category;
                    await renderGalleryItems();
                    grid.classList.remove('switching');
                } else {
                    currentGalleryCategory = this.dataset.category;
                    await renderGalleryItems();
                }
            });
        });
    }

    await renderGalleryItems();
}

async function renderGalleryItems() {
    const grid = document.getElementById('galleryGrid');
    const moreWrap = document.getElementById('galleryMoreWrap');
    if (!grid) return;
    grid.innerHTML = '';
    if (moreWrap) moreWrap.innerHTML = '';

    let items = [];
    if (db) {
        try { items = await getGallery(currentGalleryCategory); } catch(e) { console.warn('Gallery load error:', e); }
    }
    const t = translations[currentLang];

    // Если нет фото — показываем плейсхолдеры
    if (items.length === 0) {
        const defaults = [
            { id: 'p1', wide: true },
            { id: 'p2', wide: false },
            { id: 'p3', wide: false },
            { id: 'p4', wide: false },
            { id: 'p5', wide: false },
            { id: 'p6', wide: true },
        ];
        defaults.forEach((item, index) => {
            const div = document.createElement('div');
            div.className = 'gallery-item' + (item.wide ? ' gallery-item-wide' : '');
            const alt = t['work_' + (index + 1)] || ('Work ' + (index + 1));
            div.innerHTML = `
                <div class="gallery-placeholder">
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg>
                    <span>${alt}</span>
                </div>
            `;
            grid.appendChild(div);
        });
        return;
    }

    // Показываем все фото (на главной показываем все, на moreworks тоже все)
    const visibleItems = IS_MOREWORKS ? items : items;
    
    visibleItems.forEach((item) => {
        const div = document.createElement('div');
        div.className = 'gallery-item' + (item.wide ? ' gallery-item-wide' : '');
        const alt = currentLang === 'ru' ? (item.alt_ru || '') : (item.alt_de || '');
        if (item.data) {
            div.innerHTML = `<img src="${item.data}" alt="${alt}" style="width:100%;height:100%;object-fit:cover;display:block;border-radius:inherit;" onerror="this.onerror=null;this.parentElement.innerHTML='<div class=\\'gallery-placeholder\\'><svg width=\\'36\\' height=\\'36\\' viewBox=\\'0 0 24 24\\' fill=\\'none\\' stroke=\\'currentColor\\' stroke-width=\\'1\\'><rect x=\\'3\\' y=\\'3\\' width=\\'18\\' height=\\'18\\' rx=\\'2\\'/><circle cx=\\'8.5\\' cy=\\'8.5\\' r=\\'1.5\\'/><path d=\\'M21 15l-5-5L5 21\\'/></svg><span>${alt}</span></div>';">`;
        } else {
            div.innerHTML = `
                <div class="gallery-placeholder">
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg>
                    <span>${alt}</span>
                </div>
            `;
        }
        grid.appendChild(div);
    });

    // Кнопка "Больше работ" — только на главной, если есть фото
    if (!IS_MOREWORKS && items.length > 0 && moreWrap) {
        const btn = document.createElement('a');
        btn.className = 'btn btn-primary gallery-more-btn';
        btn.href = GALLERY_MORE_URL;
        btn.textContent = t.gallery_more || 'Больше работ';
        moreWrap.appendChild(btn);
    }
}

// ============================================
// Render About Photo
// ============================================
async function renderAboutPhoto() {
    const frame = document.getElementById('aboutFrame');
    if (!frame) return;

    let photo = null;
    if (db) {
        try { 
            photo = await getAboutPhoto(); 
        } catch(e) { 
            console.warn('About photo load error:', e); 
        }
    }
    const t = translations[currentLang];
    const alt = currentLang === 'ru' ? 'Фото художника' : 'Foto der Künstlerin';

    if (photo && photo.data && photo.data.length > 100) {
        frame.innerHTML = `<img src="${photo.data}" alt="${alt}" style="width:100%;height:100%;object-fit:cover;display:block;border-radius:inherit;" onerror="this.onerror=null;this.parentElement.innerHTML='<div class=\\'about-placeholder\\'><svg width=\\'56\\' height=\\'56\\' viewBox=\\'0 0 24 24\\' fill=\\'none\\' stroke=\\'currentColor\\' stroke-width=\\'1\\'><path d=\\'M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2\\'/><circle cx=\\'12\\' cy=\\'7\\' r=\\'4\\'/></svg><span data-i18n=\\'photo_placeholder\\'>${t.photo_placeholder}</span></div>';">`;
    } else {
        frame.innerHTML = `
            <div class="about-placeholder">
                <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                <span data-i18n="photo_placeholder">${t.photo_placeholder}</span>
            </div>
        `;
    }
}

// ============================================
// Render — страница всех работ
// ============================================
async function renderMoreWorks() {
    const grid = document.getElementById('moreworksGrid');
    const empty = document.getElementById('moreworksEmpty');
    const tabsWrap = document.getElementById('moreworksTabsWrap');
    if (!grid) return;
    grid.innerHTML = '';

    // Рендерим табы на странице moreworks
    if (tabsWrap) {
        const t = translations[currentLang];
        tabsWrap.innerHTML = `
            <div class="gallery-tabs moreworks-tabs">
                <button class="gallery-tab active" data-category="personal">${t.gallery_tab_personal || '🎨 Личная'}</button>
                <button class="gallery-tab" data-category="students">${t.gallery_tab_students || '👨‍🎓 Ученики'}</button>
                <button class="gallery-tab" data-category="neuro">${t.gallery_tab_neuro || '✏️ Нейрографика'}</button>
            </div>
        `;
        tabsWrap.querySelectorAll('.gallery-tab').forEach(tab => {
            tab.addEventListener('click', async function() {
                tabsWrap.querySelectorAll('.gallery-tab').forEach(t => t.classList.remove('active'));
                this.classList.add('active');
                const grid = document.getElementById('moreworksGrid');
                if (grid) {
                    grid.classList.add('switching');
                    await new Promise(r => setTimeout(r, 250));
                    currentGalleryCategory = this.dataset.category;
                    await renderMoreWorksItems();
                    grid.classList.remove('switching');
                } else {
                    currentGalleryCategory = this.dataset.category;
                    await renderMoreWorksItems();
                }
            });
        });
    }

    await renderMoreWorksItems();
}

async function renderMoreWorksItems() {
    const grid = document.getElementById('moreworksGrid');
    const empty = document.getElementById('moreworksEmpty');
    if (!grid) return;
    grid.innerHTML = '';

    let items = [];
    if (db) {
        try { items = await getGallery(currentGalleryCategory); } catch(e) { console.warn('MoreWorks load error:', e); }
    }

    if (items.length === 0) {
        if (empty) empty.classList.add('show');
        return;
    }
    if (empty) empty.classList.remove('show');

    items.forEach((item, idx) => {
        const div = document.createElement('div');
        div.className = 'moreworks-item';
        const alt = currentLang === 'ru' ? (item.alt_ru || ('Работа ' + (idx + 1))) : (item.alt_de || ('Werk ' + (idx + 1)));
        if (item.data) {
            div.innerHTML = `
                <img src="${item.data}" alt="${alt}" loading="lazy" onerror="this.onerror=null;this.parentElement.innerHTML='<div class=\\'moreworks-placeholder\\' style=\\'padding:40px;text-align:center;color:var(--slate-400);\\'><svg width=\\'40\\' height=\\'40\\' viewBox=\\'0 0 24 24\\' fill=\\'none\\' stroke=\\'currentColor\\' stroke-width=\\'1\\' style=\\'opacity:0.5;\\'><rect x=\\'3\\' y=\\'3\\' width=\\'18\\' height=\\'18\\' rx=\\'2\\'/><circle cx=\\'8.5\\' cy=\\'8.5\\' r=\\'1.5\\'/><path d=\\'M21 15l-5-5L5 21\\'/></svg></div><div class=\\'moreworks-caption\\'><span class=\\'moreworks-num\\'>#${idx + 1}</span><span class=\\'moreworks-name\\'>${alt}</span></div>';">
                <div class="moreworks-caption">
                    <span class="moreworks-num">#${idx + 1}</span>
                    <span class="moreworks-name">${alt}</span>
                </div>
            `;
        } else {
            div.innerHTML = `
                <div class="moreworks-placeholder" style="padding:40px;text-align:center;color:var(--slate-400);">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" style="opacity:0.5;"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg>
                </div>
                <div class="moreworks-caption">
                    <span class="moreworks-num">#${idx + 1}</span>
                    <span class="moreworks-name">${alt}</span>
                </div>
            `;
        }
        grid.appendChild(div);
    });
}

// ============================================
// Translations
// ============================================
function setLanguage(lang, animate = true) {
    currentLang = lang;
    const t = translations[lang];

    if (animate) {
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 0.2s ease';

        setTimeout(() => {
            applyTranslations(t, lang);
            if (IS_MOREWORKS) {
                renderMoreWorks();
            } else {
                renderGallery();
                renderAboutPhoto();
            }
            document.body.style.opacity = '1';
        }, 200);
    } else {
        applyTranslations(t, lang);
        if (IS_MOREWORKS) {
            renderMoreWorks();
        } else {
            renderGallery();
            renderAboutPhoto();
        }
    }
}

function applyTranslations(t, lang) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key]) el.textContent = t[key];
    });
    document.title = t.title;
    document.documentElement.lang = lang;

    const langCurrent = document.getElementById('langCurrent');
    if (langCurrent) langCurrent.textContent = lang.toUpperCase();

    localStorage.setItem('lang', lang);
}

// ============================================
// Theme
// ============================================
function toggleTheme() {
    document.body.classList.toggle('dark-theme');
    const isDark = document.body.classList.contains('dark-theme');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

function initTheme() {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark') document.body.classList.add('dark-theme');
}

// ============================================
// Copy email
// ============================================
function copyEmail(e) {
    e.preventDefault();
    const email = 'ludmilakrause900@gmail.com';
    navigator.clipboard.writeText(email).then(() => {
        const tooltip = document.getElementById('emailTooltip');
        if (tooltip) {
            tooltip.textContent = currentLang === 'ru' ? 'Скопировано!' : 'Kopiert!';
            tooltip.classList.add('show');
            setTimeout(() => tooltip.classList.remove('show'), 2000);
        }
    }).catch(() => {
        const textarea = document.createElement('textarea');
        textarea.value = email;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        const tooltip = document.getElementById('emailTooltip');
        if (tooltip) {
            tooltip.textContent = currentLang === 'ru' ? 'Скопировано!' : 'Kopiert!';
            tooltip.classList.add('show');
            setTimeout(() => tooltip.classList.remove('show'), 2000);
        }
    });
}

// ============================================
// DOM Ready
// ============================================
document.addEventListener('DOMContentLoaded', async function() {
    // Page views counter
    try {
        let views = parseInt(localStorage.getItem('mila_page_views') || '0');
        localStorage.setItem('mila_page_views', (views + 1).toString());
    } catch(e) {}

    initTheme();
    try { await openDB(); } catch(e) { console.warn('IndexedDB недоступен:', e); }

    if (IS_MOREWORKS) {
        await renderMoreWorks();
    } else {
        await renderGallery();
        await renderAboutPhoto();
    }

    const savedLang = localStorage.getItem('lang');
    if (savedLang && savedLang !== currentLang) {
        setLanguage(savedLang, false);
    }

    // Language dropdown
    const langSwitch = document.getElementById('langSwitch');
    const langMenu = document.getElementById('langMenu');

    if (langSwitch && langMenu) {
        langSwitch.addEventListener('click', function(e) {
            e.stopPropagation();
            langSwitch.classList.toggle('open');
            langMenu.classList.toggle('open');
        });

        document.addEventListener('click', function() {
            langSwitch.classList.remove('open');
            langMenu.classList.remove('open');
        });

        langMenu.querySelectorAll('.lang-option').forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.stopPropagation();
                const lang = this.getAttribute('data-lang');
                if (lang !== currentLang) {
                    setLanguage(lang, true);
                }
                langSwitch.classList.remove('open');
                langMenu.classList.remove('open');
            });
        });
    }

    // Theme toggle
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }

    // Mobile menu
    const menuToggle = document.getElementById('menuToggle');
    const nav = document.getElementById('nav');
    const header = document.getElementById('header');

    if (menuToggle && nav) {
        menuToggle.addEventListener('click', function() {
            nav.classList.toggle('open');
            const spans = menuToggle.querySelectorAll('span');
            if (nav.classList.contains('open')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
            } else {
                spans[0].style.transform = '';
                spans[1].style.opacity = '';
                spans[2].style.transform = '';
            }
        });

        nav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('open');
                const spans = menuToggle.querySelectorAll('span');
                spans[0].style.transform = '';
                spans[1].style.opacity = '';
                spans[2].style.transform = '';
            });
        });
    }

    // Header scroll effect
    if (header) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 20) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    // Smooth scroll (только на главной)
    if (!IS_MOREWORKS) {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    const offset = 80;
                    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
                    window.scrollTo({ top: targetPosition, behavior: 'smooth' });
                }
            });
        });

        const heroScroll = document.querySelector('.hero-scroll');
        if (heroScroll) {
            heroScroll.addEventListener('click', () => {
                const services = document.getElementById('services');
                if (services) services.scrollIntoView({ behavior: 'smooth' });
            });
        }
    }
});