// ============================================
// Людмила Краусе — Premium Landing Page
// Inter + Playfair Display | Turquoise #00D7C8 | RU/DE | Dark Theme
// ============================================

const translations = {
    ru: {
        logo: 'Мила Краузе',
        title: 'Людмила Краусе — Художник, преподаватель, арт-терапевт',
        nav_about: 'Обо мне',
        nav_services: 'Услуги',
        nav_video: 'Видео',
        nav_gallery: 'Галерея',
        nav_testimonials: 'Отзывы',
        nav_faq: 'FAQ',
        nav_contact: 'Контакты',
        btn_contact: 'Связаться',
        hero_badge: 'Художник с 20-летним стажем',
        hero_title: 'Раскрываю талант каждого ребёнка через творчество',
        hero_text: 'Художественные занятия для детей, арт-терапия, нейрографика и консультации по астрогенетике. Работаю в Ойскирхене и онлайн с русско- и украиноязычными семьями в Германии и за рубежом.',
        badge_1: 'Индивидуальный подход',
        badge_2: 'Онлайн и офлайн',
        badge_3: 'Для детей и взрослых',
        btn_cta: 'Записаться на занятие',
        btn_secondary: 'Посмотреть урок',
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
        stat_students: 'учеников прошли обучение',
        stat_satisfaction: 'довольных клиентов',
        stat_reviews: 'положительных отзывов',
        stat_2: 'лет — возраст учеников',
        stat_3: 'направления искусства',
        stat_4: 'языки консультаций',
        gallery_label: 'Портфолио',
        gallery_title: 'Галерея',
        gallery_subtitle: 'Фрагменты работ и ученических проектов в разных техниках',
        gallery_tab_personal: 'Личная',
        gallery_tab_students: 'Ученики',
        gallery_tab_neuro: 'Нейрографика',
        work_1: 'Работа 1',
        work_2: 'Работа 2',
        work_3: 'Работа 3',
        work_4: 'Работа 4',
        work_5: 'Работа 5',
        work_6: 'Работа 6',
        video_label: 'Демонстрация',
        video_title: 'Посмотрите, как проходят онлайн-уроки',
        video_subtitle: 'Погрузитесь в атмосферу творческого процесса и увидьте, как дети раскрывают свой потенциал',
        video_duration: '2:45',
        video_info_title: 'Онлайн-урок рисования для детей',
        video_info_desc: 'Занятие проходит в уютной и дружелюбной атмосфере. Каждый ребёнок получает индивидуальное внимание и поддержку.',
        testimonials_label: 'Отзывы',
        testimonials_title: 'Что говорят родители и ученики',
        testimonials_subtitle: 'Истории семей, которые открыли для себя мир творчества',
        review_1_text: 'Моя дочь занимается с Милой уже полгода. За это время она научилась рисовать акварелью и стала намного увереннее в себе. Индивидуальный подход — это не просто слова, а реальная практика.',
        review_1_name: 'Анна К.',
        review_1_role: 'Мама ученицы, 8 лет',
        review_2_text: 'Арт-терапия помогла моему сыну справиться со стрессом после переезда. Мила создаёт невероятно тёплую атмосферу, где ребёнок чувствует себя в безопасности.',
        review_2_name: 'Ольга М.',
        review_2_role: 'Мама ученика, 10 лет',
        review_3_text: 'Нейрографика онлайн — это просто волшебство. После нескольких занятий я смогла разобраться в сложной жизненной ситуации и найти выход. Рекомендую всем!',
        review_3_name: 'Ирина В.',
        review_3_role: 'Взрослая ученица',
        faq_label: 'Вопросы и ответы',
        faq_title: 'Часто задаваемые вопросы',
        faq_subtitle: 'Всё, что нужно знать перед первым занятием',
        faq_1_q: 'С какого возраста можно начинать занятия?',
        faq_1_a: 'Я работаю с детьми от 5 лет. Для самых маленьких разработана специальная программа, которая помогает развивать мелкую моторику, цветовосприятие и воображение через игровые техники.',
        faq_2_q: 'Нужен ли опыт рисования?',
        faq_2_a: 'Нет, опыт не требуется. Я работаю с детьми любого уровня подготовки — от тех, кто впервые берёт кисть, до юных художников, готовящих портфолио.',
        faq_3_q: 'Как проходят онлайн-занятия?',
        faq_3_a: 'Онлайн-уроки проходят через Zoom или Google Meet. Я показываю техники на камеру, даю обратную связь в реальном времени и помогаю на каждом этапе работы. Всё, что нужно — бумага, карандаши и стабильный интернет.',
        faq_4_q: 'Что нужно принести на первое занятие?',
        faq_4_a: 'На первое занятие ничего не нужно — все материалы предоставляются. После консультации я подскажу, что приобрести для домашних занятий.',
        faq_5_q: 'Сколько длится один урок?',
        faq_5_a: 'Стандартный урок длится 60 минут. Для детей 5–7 лет рекомендую 45-минутные занятия, чтобы сохранить концентрацию и интерес.',
        contact_label: 'Контакты',
        contact_title: 'Свяжитесь со мной',
        contact_subtitle: 'Запишитесь на пробное занятие, задайте вопрос или узнайте больше об услугах',
        contact_info_title: 'Контакты',
        contact_info_text: 'Пишите или звоните — отвечу в удобное для вас время.',
        form_title: 'Записаться на занятие',
        form_text: 'Напишите мне в Telegram или WhatsApp, и мы договоримся о времени и формате.',
        form_note: 'Занятия проходят в Ойскирхене или онлайн. Первое знакомство — возможно в формате консультации, чтобы выбрать подходящий формат.',
        btn_telegram: 'Написать в Telegram',
        btn_whatsapp: 'Написать в WhatsApp',
        footer_text: '© 2026 Людмила Краусе. Все права защищены.',
        footer_desc: 'Художник, преподаватель и арт-терапевт с 20-летним опытом. Помогаю детям и взрослым раскрыть творческий потенциал.',
        footer_nav_title: 'Навигация',
        footer_contact_title: 'Контакты',
        footer_location: 'Ойскирхен, Германия',
        gallery_more: 'Больше работ',
        moreworks_title: 'Все работы — Людмила Краузе',
        moreworks_heading: 'Все работы',
        moreworks_subtitle: 'Полная коллекция работ и ученических проектов',
        moreworks_empty: 'Пока нет загруженных работ'
    },
    de: {
        logo: 'Mila Krause',
        title: 'Ljudmila Krause — Künstlerin, Lehrerin, Kunsttherapeutin',
        nav_about: 'Über mich',
        nav_services: 'Leistungen',
        nav_video: 'Video',
        nav_gallery: 'Galerie',
        nav_testimonials: 'Bewertungen',
        nav_faq: 'FAQ',
        nav_contact: 'Kontakt',
        btn_contact: 'Kontakt',
        hero_badge: 'Künstlerin mit 20 Jahren Erfahrung',
        hero_title: 'Ich entfalte das Talent jedes Kindes durch Kreativität',
        hero_text: 'Kunstunterricht für Kinder, Kunsttherapie, Neurographik und Astro-Genetik-Beratung. Ich arbeite in Euskirchen und online mit russisch- und ukrainischsprachigen Familien in Deutschland und im Ausland.',
        badge_1: 'Individueller Ansatz',
        badge_2: 'Online und Offline',
        badge_3: 'Für Kinder und Erwachsene',
        btn_cta: 'Termin vereinbaren',
        btn_secondary: 'Unterricht ansehen',
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
        stat_students: 'Schüler haben Unterricht genommen',
        stat_satisfaction: 'zufriedene Kunden',
        stat_reviews: 'positive Bewertungen',
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
        video_label: 'Demonstration',
        video_title: 'Sehen Sie, wie Online-Unterricht abläuft',
        video_subtitle: 'Tauchen Sie ein in die Atmosphäre des kreativen Prozesses und sehen Sie, wie Kinder ihr Potenzial entfalten',
        video_duration: '2:45',
        video_info_title: 'Online-Zeichenunterricht für Kinder',
        video_info_desc: 'Der Unterricht findet in einer gemütlichen und freundlichen Atmosphäre statt. Jedes Kind erhält individuelle Aufmerksamkeit und Unterstützung.',
        testimonials_label: 'Bewertungen',
        testimonials_title: 'Was Eltern und Schüler sagen',
        testimonials_subtitle: 'Geschichten von Familien, die die Welt der Kreativität für sich entdeckt haben',
        review_1_text: 'Meine Tochter lernt jetzt seit einem halben Jahr bei Mila. In dieser Zeit hat sie gelernt, mit Aquarell zu malen, und ist viel selbstbewusster geworden. Individueller Ansatz ist nicht nur ein Wort, sondern echte Praxis.',
        review_1_name: 'Anna K.',
        review_1_role: 'Mutter einer Schülerin, 8 Jahre',
        review_2_text: 'Kunsttherapie hat meinem Sohn geholfen, mit dem Stress nach dem Umzug fertigzuwerden. Mila schafft eine unglaublich warme Atmosphäre, in der sich das Kind sicher fühlt.',
        review_2_name: 'Olga M.',
        review_2_role: 'Mutter eines Schülers, 10 Jahre',
        review_3_text: 'Neurographik online ist einfach Magie. Nach einigen Sitzungen konnte ich eine komplizierte Lebenssituation verstehen und einen Ausweg finden. Ich empfehle es allen!',
        review_3_name: 'Irina W.',
        review_3_role: 'Erwachsene Schülerin',
        faq_label: 'Fragen und Antworten',
        faq_title: 'Häufig gestellte Fragen',
        faq_subtitle: 'Alles, was Sie vor der ersten Stunde wissen müssen',
        faq_1_q: 'Ab welchem Alter kann man mit dem Unterricht beginnen?',
        faq_1_a: 'Ich arbeite mit Kindern ab 5 Jahren. Für die Kleinsten wurde ein spezielles Programm entwickelt, das durch spielerische Techniken die Feinmotorik, das Farbempfinden und die Fantasie fördert.',
        faq_2_q: 'Ist Zeichenerfahrung erforderlich?',
        faq_2_a: 'Nein, Erfahrung ist nicht erforderlich. Ich arbeite mit Kindern jeden Vorbereitungsstands — von denen, die zum ersten Mal einen Pinsel halten, bis zu jungen Künstlern, die ein Portfolio vorbereiten.',
        faq_3_q: 'Wie laufen Online-Stunden ab?',
        faq_3_a: 'Online-Unterricht findet über Zoom oder Google Meet statt. Ich zeige Techniken vor der Kamera, gebe Echtzeit-Feedback und helfe bei jedem Arbeitsschritt. Alles, was Sie brauchen, ist Papier, Bleistifte und stabiles Internet.',
        faq_4_q: 'Was muss ich zur ersten Stunde mitbringen?',
        faq_4_a: 'Zur ersten Stunde müssen Sie nichts mitbringen — alle Materialien werden gestellt. Nach der Beratung gebe ich Tipps, was für das Üben zu Hause gekauft werden sollte.',
        faq_5_q: 'Wie lange dauert eine Stunde?',
        faq_5_a: 'Eine Standardstunde dauert 60 Minuten. Für Kinder von 5–7 Jahren empfehle ich 45-minütige Einheiten, um Konzentration und Interesse zu bewahren.',
        contact_label: 'Kontakt',
        contact_title: 'Kontaktieren Sie mich',
        contact_subtitle: 'Vereinbaren Sie eine Probestunde, stellen Sie eine Frage oder erfahren Sie mehr über meine Leistungen',
        contact_info_title: 'Kontakt',
        contact_info_text: 'Schreiben oder rufen Sie an — ich antworte zu einer Zeit, die Ihnen passt.',
        form_title: 'Termin vereinbaren',
        form_text: 'Schreiben Sie mir auf Telegram oder WhatsApp, und wir vereinbaren Zeit und Format.',
        form_note: 'Der Unterricht findet in Euskirchen oder online statt. Das erste Kennenlernen kann als Beratung erfolgen, um das passende Format zu wählen.',
        btn_telegram: 'Auf Telegram schreiben',
        btn_whatsapp: 'Auf WhatsApp schreiben',
        footer_text: '© 2026 Ljudmila Krause. Alle Rechte vorbehalten.',
        footer_desc: 'Künstlerin, Lehrerin und Kunsttherapeutin mit 20 Jahren Erfahrung. Ich helfe Kindern und Erwachsenen, ihr kreatives Potenzial zu entfalten.',
        footer_nav_title: 'Navigation',
        footer_contact_title: 'Kontakt',
        footer_location: 'Euskirchen, Deutschland',
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

const STATIC_FILES = {
    personal: [
        { name: '1s.jpg', wide: true },
        { name: '2.jpg', wide: false },
        { name: '3.jpg', wide: false },
        { name: '4.jpg', wide: false },
        { name: '5.jpg', wide: false },
        { name: '6s.jpg', wide: true }
    ],
    students: [
        { name: '11s.jpg', wide: true },
        { name: '22.jpg', wide: false },
        { name: '33.jpg', wide: false },
        { name: '44.jpg', wide: false },
        { name: '55.jpg', wide: false },
        { name: '66s.jpg', wide: true }
    ],
    neuro: [
        { name: '111s.jpg', wide: true },
        { name: '222.jpg', wide: false },
        { name: '333.jpg', wide: false },
        { name: '444.jpg', wide: false },
        { name: '555.jpg', wide: false },
        { name: '666s.jpg', wide: true }
    ]
};

const STATIC_ABOUT_PHOTO = 'images/main.jpg';

// ============================================
// IndexedDB
// ============================================
function openDB() {
    return new Promise((resolve, reject) => {
        if (db && db.name === DB_NAME) { resolve(db); return; }
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

function fileToBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
}

// ============================================
// Render Gallery (main page)
// ============================================
async function renderGallery() {
    const grid = document.getElementById('galleryGrid');
    const tabsWrap = document.getElementById('galleryTabsWrap');
    const moreWrap = document.getElementById('galleryMoreWrap');
    if (!grid) return;
    grid.innerHTML = '';
    if (moreWrap) moreWrap.innerHTML = '';

    if (tabsWrap) {
        const t = translations[currentLang];
        tabsWrap.innerHTML = `
            <div class="gallery-tabs">
                <button class="gallery-tab active" data-category="personal">${t.gallery_tab_personal || '🎨 Личная'}</button>
                <button class="gallery-tab" data-category="students">${t.gallery_tab_students || '👨‍🎓 Ученики'}</button>
                <button class="gallery-tab" data-category="neuro">${t.gallery_tab_neuro || '✏️ Нейрографика'}</button>
            </div>
        `;
        tabsWrap.querySelectorAll('.gallery-tab').forEach(tab => {
            tab.addEventListener('click', async function() {
                tabsWrap.querySelectorAll('.gallery-tab').forEach(t => t.classList.remove('active'));
                this.classList.add('active');
                const gridEl = document.getElementById('galleryGrid');
                if (gridEl) {
                    gridEl.classList.add('switching');
                    await new Promise(r => setTimeout(r, 250));
                    currentGalleryCategory = this.dataset.category;
                    await renderGalleryItems();
                    gridEl.classList.remove('switching');
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

    const staticItems = STATIC_FILES[currentGalleryCategory] || [];
    const hasStatic = staticItems.length > 0;

    if (items.length === 0 && hasStatic) {
        staticItems.forEach((file, index) => {
            const div = document.createElement('div');
            div.className = 'gallery-item' + (file.wide ? ' gallery-item-wide' : '');
            const img = document.createElement('img');
            img.src = `images/${file.name}`;
            img.alt = `Работа ${index + 1}`;
            img.style.width = '100%';
            img.style.height = '100%';
            img.style.objectFit = 'cover';
            img.style.display = 'block';
            img.style.borderRadius = 'inherit';
            img.onerror = function() {
                this.parentElement.innerHTML = `
                    <div class="gallery-placeholder">
                        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">
                            <rect x="3" y="3" width="18" height="18" rx="2"/>
                            <circle cx="8.5" cy="8.5" r="1.5"/>
                            <path d="M21 15l-5-5L5 21"/>
                        </svg>
                        <span>${translations[currentLang]['work_' + (index + 1)] || 'Работа ' + (index + 1)}</span>
                    </div>
                `;
            };
            div.appendChild(img);
            grid.appendChild(div);
        });
        if (!IS_MOREWORKS && hasStatic && moreWrap) {
            const btn = document.createElement('a');
            btn.className = 'btn btn-primary gallery-more-btn';
            btn.href = GALLERY_MORE_URL;
            btn.textContent = translations[currentLang].gallery_more || 'Больше работ';
            moreWrap.appendChild(btn);
        }
        return;
    }

    if (items.length > 0) {
        items.forEach((item) => {
            const div = document.createElement('div');
            div.className = 'gallery-item' + (item.wide ? ' gallery-item-wide' : '');
            const alt = currentLang === 'ru' ? (item.alt_ru || '') : (item.alt_de || '');
            if (item.data) {
                const img = document.createElement('img');
                img.src = item.data;
                img.alt = alt;
                img.style.width = '100%';
                img.style.height = '100%';
                img.style.objectFit = 'cover';
                img.style.display = 'block';
                img.style.borderRadius = 'inherit';
                img.onerror = function() {
                    this.parentElement.innerHTML = `
                        <div class="gallery-placeholder">
                            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">
                                <rect x="3" y="3" width="18" height="18" rx="2"/>
                                <circle cx="8.5" cy="8.5" r="1.5"/>
                                <path d="M21 15l-5-5L5 21"/>
                            </svg>
                            <span>${alt}</span>
                        </div>
                    `;
                };
                div.appendChild(img);
            } else {
                div.innerHTML = `
                    <div class="gallery-placeholder">
                        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">
                            <rect x="3" y="3" width="18" height="18" rx="2"/>
                            <circle cx="8.5" cy="8.5" r="1.5"/>
                            <path d="M21 15l-5-5L5 21"/>
                        </svg>
                        <span>${alt}</span>
                    </div>
                `;
            }
            grid.appendChild(div);
        });

        if (!IS_MOREWORKS && moreWrap) {
            const btn = document.createElement('a');
            btn.className = 'btn btn-primary gallery-more-btn';
            btn.href = GALLERY_MORE_URL;
            btn.textContent = translations[currentLang].gallery_more || 'Больше работ';
            moreWrap.appendChild(btn);
        }
        return;
    }

    const defaults = [
        { wide: true }, { wide: false }, { wide: false },
        { wide: false }, { wide: false }, { wide: true }
    ];
    defaults.forEach((item, index) => {
        const div = document.createElement('div');
        div.className = 'gallery-item' + (item.wide ? ' gallery-item-wide' : '');
        const alt = translations[currentLang]['work_' + (index + 1)] || ('Work ' + (index + 1));
        div.innerHTML = `
            <div class="gallery-placeholder">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">
                    <rect x="3" y="3" width="18" height="18" rx="2"/>
                    <circle cx="8.5" cy="8.5" r="1.5"/>
                    <path d="M21 15l-5-5L5 21"/>
                </svg>
                <span>${alt}</span>
            </div>
        `;
        grid.appendChild(div);
    });
}

// ============================================
// Render About Photo
// ============================================
async function renderAboutPhoto() {
    const frame = document.getElementById('aboutFrame');
    if (!frame) return;

    let photo = null;
    if (db) {
        try { photo = await getAboutPhoto(); } catch(e) { console.warn('About photo load error:', e); }
    }
    const t = translations[currentLang];
    const alt = currentLang === 'ru' ? 'Фото художника' : 'Foto der Künstlerin';

    if (photo && photo.data) {
        const img = document.createElement('img');
        img.src = photo.data;
        img.alt = alt;
        img.style.width = '100%';
        img.style.height = '100%';
        img.style.objectFit = 'cover';
        img.style.display = 'block';
        img.style.borderRadius = 'inherit';
        img.onerror = function() {
            this.parentElement.innerHTML = `
                <div class="about-placeholder">
                    <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                        <circle cx="12" cy="7" r="4"/>
                    </svg>
                    <span data-i18n="photo_placeholder">${t.photo_placeholder}</span>
                </div>
            `;
        };
        frame.innerHTML = '';
        frame.appendChild(img);
        return;
    }

    const img = document.createElement('img');
    img.src = STATIC_ABOUT_PHOTO;
    img.alt = alt;
    img.style.width = '100%';
    img.style.height = '100%';
    img.style.objectFit = 'cover';
    img.style.display = 'block';
    img.style.borderRadius = 'inherit';
    img.onerror = function() {
        this.parentElement.innerHTML = `
            <div class="about-placeholder">
                <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                    <circle cx="12" cy="7" r="4"/>
                </svg>
                <span data-i18n="photo_placeholder">${t.photo_placeholder}</span>
            </div>
        `;
    };
    frame.innerHTML = '';
    frame.appendChild(img);
}

// ============================================
// Render More Works
// ============================================
async function renderMoreWorks() {
    const grid = document.getElementById('moreworksGrid');
    const empty = document.getElementById('moreworksEmpty');
    const tabsWrap = document.getElementById('moreworksTabsWrap');
    if (!grid) return;
    grid.innerHTML = '';

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
                const gridEl = document.getElementById('moreworksGrid');
                if (gridEl) {
                    gridEl.classList.add('switching');
                    await new Promise(r => setTimeout(r, 250));
                    currentGalleryCategory = this.dataset.category;
                    await renderMoreWorksItems();
                    gridEl.classList.remove('switching');
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

    const staticItems = STATIC_FILES[currentGalleryCategory] || [];

    if (items.length === 0 && staticItems.length > 0) {
        if (empty) empty.classList.remove('show');
        staticItems.forEach((file, idx) => {
            const div = document.createElement('div');
            div.className = 'moreworks-item';
            const alt = translations[currentLang]['work_' + (idx + 1)] || ('Работа ' + (idx + 1));
            const img = document.createElement('img');
            img.src = `images/${file.name}`;
            img.alt = alt;
            img.loading = 'lazy';
            img.style.width = '100%';
            img.style.aspectRatio = '1';
            img.style.objectFit = 'cover';
            img.onerror = function() {
                this.parentElement.innerHTML = `
                    <div class="moreworks-placeholder" style="padding:40px;text-align:center;color:var(--gray-400);">
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" style="opacity:0.5;">
                            <rect x="3" y="3" width="18" height="18" rx="2"/>
                            <circle cx="8.5" cy="8.5" r="1.5"/>
                            <path d="M21 15l-5-5L5 21"/>
                        </svg>
                    </div>
                    <div class="moreworks-caption">
                        <span class="moreworks-num">#${idx + 1}</span>
                        <span class="moreworks-name">${alt}</span>
                    </div>
                `;
            };
            div.appendChild(img);
            const caption = document.createElement('div');
            caption.className = 'moreworks-caption';
            caption.innerHTML = `
                <span class="moreworks-num">#${idx + 1}</span>
                <span class="moreworks-name">${alt}</span>
            `;
            div.appendChild(caption);
            grid.appendChild(div);
        });
        return;
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
            const img = document.createElement('img');
            img.src = item.data;
            img.alt = alt;
            img.loading = 'lazy';
            img.style.width = '100%';
            img.style.aspectRatio = '1';
            img.style.objectFit = 'cover';
            img.onerror = function() {
                this.parentElement.innerHTML = `
                    <div class="moreworks-placeholder" style="padding:40px;text-align:center;color:var(--gray-400);">
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" style="opacity:0.5;">
                            <rect x="3" y="3" width="18" height="18" rx="2"/>
                            <circle cx="8.5" cy="8.5" r="1.5"/>
                            <path d="M21 15l-5-5L5 21"/>
                        </svg>
                    </div>
                    <div class="moreworks-caption">
                        <span class="moreworks-num">#${idx + 1}</span>
                        <span class="moreworks-name">${alt}</span>
                    </div>
                `;
            };
            div.appendChild(img);
            const caption = document.createElement('div');
            caption.className = 'moreworks-caption';
            caption.innerHTML = `
                <span class="moreworks-num">#${idx + 1}</span>
                <span class="moreworks-name">${alt}</span>
            `;
            div.appendChild(caption);
        } else {
            div.innerHTML = `
                <div class="moreworks-placeholder" style="padding:40px;text-align:center;color:var(--gray-400);">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" style="opacity:0.5;">
                        <rect x="3" y="3" width="18" height="18" rx="2"/>
                        <circle cx="8.5" cy="8.5" r="1.5"/>
                        <path d="M21 15l-5-5L5 21"/>
                    </svg>
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
// Animated Counters
// ============================================
function animateCounter(el) {
    const target = parseInt(el.dataset.count, 10);
    const suffix = el.dataset.suffix || '';
    const duration = 2000;
    const start = performance.now();

    function update(now) {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = Math.round(eased * target);
        el.textContent = current + suffix;
        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }
    requestAnimationFrame(update);
}

// ============================================
// Scroll Animations (Intersection Observer)
// ============================================
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Trigger counter animation if it's a stat number
                const counter = entry.target.querySelector('.stat-number[data-count]');
                if (counter && !counter.dataset.animated) {
                    counter.dataset.animated = 'true';
                    animateCounter(counter);
                }
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('[data-animate]').forEach(el => {
        observer.observe(el);
    });
}

// ============================================
// FAQ Accordion
// ============================================
function initFAQ() {
    document.querySelectorAll('.faq-question').forEach(btn => {
        btn.addEventListener('click', () => {
            const item = btn.closest('.faq-item');
            const isOpen = item.classList.contains('open');

            // Close all others
            document.querySelectorAll('.faq-item.open').forEach(openItem => {
                if (openItem !== item) openItem.classList.remove('open');
            });

            // Toggle current
            item.classList.toggle('open', !isOpen);
        });
    });
}

// ============================================
// Video Play Button
// ============================================
function initVideoPlayer() {
    const playBtn = document.getElementById('videoPlayBtn');
    const preview = document.getElementById('videoPreview');
    if (!playBtn || !preview) return;

    const handler = () => {
        // Replace preview with embedded video (placeholder behavior)
        // In production, replace with actual video embed
        alert(currentLang === 'ru' 
            ? 'Видео будет доступно после загрузки. Здесь можно встроить YouTube/Vimeo плеер.' 
            : 'Video wird nach dem Upload verfügbar sein. Hier kann ein YouTube/Vimeo-Player eingebettet werden.');
    };

    playBtn.addEventListener('click', handler);
    preview.addEventListener('click', (e) => {
        if (e.target !== playBtn && !playBtn.contains(e.target)) {
            handler();
        }
    });
}

// ============================================
// Translations, Theme, etc.
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

function toggleTheme() {
    document.body.classList.toggle('dark-theme');
    const isDark = document.body.classList.contains('dark-theme');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

function initTheme() {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark') document.body.classList.add('dark-theme');
}

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
        initScrollAnimations();
        initFAQ();
        initVideoPlayer();
    }

    const savedLang = localStorage.getItem('lang');
    if (savedLang && savedLang !== currentLang) {
        setLanguage(savedLang, false);
    }

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

    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }

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

    if (header) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 20) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

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
