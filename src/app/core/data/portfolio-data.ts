import {
  AboutContent,
  EducationItem,
  ExperienceItem,
  Profile,
  ProjectItem,
  SkillGroup,
  Stat,
} from '../models/portfolio.model';

export const PROFILE: Profile = {
  name: 'Rishav Kumar',
  title: 'Senior Mobile Architect',
  tagline: 'Building enterprise-grade hybrid mobile apps for 13+ years — Ionic, Angular, Capacitor, Flutter.',
  location: 'Greater Noida, UP · Delhi NCR, India',
  email: 'rishav.kumar.frontend@gmail.com',
  phone: '+91 87960 88027',
  whatsappNumber: '918796088027',
  linkedinUrl: 'https://www.linkedin.com/in/rishav-kumar-b3a692143/',
  summary:
    'Senior Hybrid Mobile Application Architect with 13+ years of software development experience and 8+ years specialising in Ionic Framework (v4-8) and Angular (8-17). Proven expertise in building enterprise-grade cross-platform mobile applications for iOS and Android with deep knowledge of Capacitor, Cordova, SQLite, REST APIs, Firebase, biometric authentication, and offline-first architecture. Recently expanded into Real Estate Sales & Business Development, successfully closing high-value residential property transactions while continuing to lead teams and deliver results across both technology and customer-facing business domains.',
};

export const STATS: Stat[] = [
  { value: '13+', label: 'Years Experience' },
  { value: '8+', label: 'Years Ionic / Angular' },
  { value: '20+', label: 'Apps Delivered' },
  { value: '5+', label: 'Enterprise Clients' },
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: 'Frameworks',
    skills: ['Ionic 4–8', 'Angular 8–17', 'Flutter', 'React Native'],
  },
  {
    category: 'Languages',
    skills: ['TypeScript', 'JavaScript', 'Dart', 'HTML5 / CSS3'],
  },
  {
    category: 'Mobile & Native',
    skills: ['Capacitor', 'Cordova', 'SQLite', 'Biometric Auth', 'FCM / APNs', 'Geofencing'],
  },
  {
    category: 'Tools & Platforms',
    skills: ['Firebase', 'REST APIs', 'Git', 'Android Studio', 'Xcode', 'Figma', 'VS Code'],
  },
  {
    category: 'Methodologies',
    skills: ['Agile / Scrum', 'Offline-First Architecture', 'VAPT Security Hardening'],
  },
  {
    category: 'Sales & Business',
    skills: [
      'Real Estate Sales',
      'Lead Generation',
      'Client Acquisition',
      'Negotiation',
      'CRM',
      'Property Consulting',
      'Deal Closing',
    ],
  },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    role: 'Sales Consultant — Real Estate',
    company: 'Independent Sales Professional / Channel Partner',
    location: 'Delhi NCR',
    period: '2025 — Present',
    current: true,
    points: [
      'Transitioned into real estate sales while continuing freelance technology consulting, focusing on residential and plotted developments across NCR and Uttar Pradesh.',
      'Magic India, Saharanpur: closed 2 residential plot sales with a total ticket size of ₹18 Lakhs each.',
      'Trivor Builders, Noida Extension: sold 10 low-rise premium flats with an average ticket size of ₹70 Lakhs, managing complete customer acquisition, site visits, negotiations, and deal closure.',
      'Noecase, Greater Noida Sector 17C: closed 1 residential plot with a ticket size of ₹36 Lakhs.',
      'Built strong expertise in CRM, lead generation, sales presentations, negotiations, objection handling, documentation, and end-to-end deal closure.',
    ],
  },
  {
    role: 'Consultant — Ionic Angular Developer',
    company: 'Oneteam Infotech Pvt Ltd',
    location: 'Delhi NCR',
    period: 'Aug 2025 — Oct 2025',
    points: [
      'Developed BOG Shield 2.0 (Ionic 8 + Angular) for client Holcim — geofencing, zone tours, risk monitoring, offline SQLite, Firebase, APNs/FCM push notifications, and Figma-based UI.',
      'Implemented offline-first architecture using Ionic Storage + SQLite, ensuring zero data loss in low-connectivity zones.',
    ],
  },
  {
    role: 'Mobile Architect — Ionic Developer',
    company: 'RST Solutions / Progressix',
    location: 'Delhi NCR',
    period: 'Apr 2024 — May 2025',
    points: [
      'Architected and delivered 4 enterprise apps (mTrac, WorkOrder, QuickQuotes, Explosives) for Martin Marietta USA using Ionic 7–8 + Angular with biometric login, offline sync, and FCM/APNs notifications.',
      'Built 3 Flutter/Dart apps (OMR Test, Online Classes, Kheti Bari — React Native) for Progressix; the OMR app supported offline test-taking with automatic sync on reconnect.',
      'Designed hierarchy-based breadcrumb navigation, media upload/delete flows, and Chart.js weather dashboards.',
    ],
  },
  {
    role: 'Senior Mobile Application Developer (Mobile Architect)',
    company: 'VHR Solutions — Deputed to Infosys',
    location: 'Delhi NCR',
    period: 'Jul 2021 — Apr 2024',
    points: [
      'Led development of ICEGATE — a high-stakes import/export application for Indian Income Tax offices — for 2+ years on the payroll of Infosys, using Ionic 5 + Angular.',
      'Implemented enterprise-grade security: VAPT testing, SSL certificate validation, root-device detection, screenshot prevention, and app permission hardening.',
      'Delivered dynamic dashboards, role-based access, FCM messaging, and image/file upload features serving thousands of government users.',
    ],
  },
  {
    role: 'Assistant Project Lead / Frontend Developer',
    company: 'Troubleshooters Services & Cloud18 Infotech',
    location: 'Delhi NCR',
    period: 'Dec 2020 — Jun 2021',
    points: [
      'Led development of the TS Client App (an Urban Clap-style clone) with RazorPay payment gateway, geolocation, OTP autofill, and service booking flows using Ionic 5 + Angular.',
      'Delivered multiple hybrid mobile apps for hotel management, school ERP, and other product-based clients at Cloud18.',
    ],
  },
  {
    role: 'Hybrid App Developer / E-Learning Developer',
    company: 'BSC Academy & Digimonk Pvt Ltd',
    location: 'Delhi NCR',
    period: 'Jul 2019 — Nov 2020',
    points: [
      'Built a live-streaming class app for BSC Academy (Ionic 4 + Angular) with YouTube integration, GPS, SQLite, and IMEI-based device tracking.',
      'Developed e-learning activities and hybrid apps combining HTML5, Flash ActionScript 3.0, and Ionic.',
    ],
  },
  {
    role: 'Flash / Mobile Developer → Multimedia Programmer',
    company: 'Trimurti Publication, Dhariwal Enterprises, Endeavour Systems Pvt Ltd',
    location: 'Delhi NCR',
    period: 'May 2011 — Jun 2019',
    points: [
      '8 years of foundational experience: 2D game development (ActionScript 3.0), e-learning content, website maintenance, and early hybrid Android app development.',
      'Developed internal tools at Endeavour: the ESPL HR app, an internal chat system (ESIM), a mail system, and a DJB complaint app with offline sync.',
    ],
  },
];

export const EDUCATION: EducationItem[] = [
  { degree: 'BCA', institution: 'MDU Rohtak', year: '2015' },
  { degree: '12th — CBSE Board', institution: '', year: '2011' },
  { degree: '10th — ICSE Board', institution: '', year: '2009' },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'bog-shield',
    name: 'BOG Shield 2.0',
    client: 'Holcim · via Oneteam Infotech',
    stack: ['Ionic 8', 'Angular', 'SQLite', 'Firebase'],
    description:
      'Geofencing-based tour management app with offline support, risk monitoring, and push notifications, built for a global cement company.',
    imageKey: 'bogShield',
  },
  {
    id: 'icegate',
    name: 'ICEGATE',
    client: 'Infosys / Indian Income Tax · via VHR Solutions',
    stack: ['Ionic 5', 'Angular', 'Cordova', 'VAPT Security'],
    description:
      'Import/export enterprise application for government offices with VAPT security hardening, FCM messaging, and dynamic role-based dashboards.',
    imageKey: 'icegate',
  },
  {
    id: 'work-order',
    name: 'Martin Marietta App Suite',
    client: 'Martin Marietta, USA · via RST Solutions',
    stack: ['Ionic 7–8', 'Capacitor', 'Biometric Auth'],
    description:
      'A suite of 4 enterprise apps — mTrac, WorkOrder, QuickQuotes, and Explosives — for offline-capable work order management with biometric login, media uploads, hierarchy navigation, and crew assignment.',
    imageKey: 'workOrder',
  },
  {
    id: 'omr-test-app',
    name: 'OMR Test App',
    client: 'Progressix',
    stack: ['Flutter', 'Dart'],
    description:
      'Online OMR-based test application supporting offline test-taking with automatic sync once the device reconnects.',
    imageKey: 'omrTestApp',
  },
  {
    id: 'kheti-bari',
    name: 'Kheti Bari',
    client: 'Progressix',
    stack: ['Flutter', 'Dart'],
    description:
      'An agriculture app for farmers — video and text-based guides, usage tips, and a query-handling flow for farmer questions.',
    imageKey: 'khetiBari',
  },
  {
    id: 'online-class-test',
    name: 'Online Class & Test App',
    client: 'Progressix',
    stack: ['Flutter', 'Dart'],
    description:
      'Live classes, online tests, recorded-class playback, and PDF study material organised by subject, chapter, and topic.',
    imageKey: 'onlineClassTest',
  },
  {
    id: 'ts-client-app',
    name: 'TS Client App',
    client: 'Troubleshooters Pvt Ltd (Urban Clap-style clone, Greater Kailash)',
    stack: ['Ionic 5', 'Angular', 'Cordova', 'RazorPay'],
    description:
      'Hybrid mobile app for on-demand home services with RazorPay payment gateway integration, geolocation, OTP autofill, and end-to-end service booking flows.',
    imageKey: 'tsClientApp',
  },
  {
    id: 'hotel-school-erp',
    name: 'Hotel & School ERP Suite',
    client: 'Cloud18 Infotech',
    stack: ['Ionic', 'Angular', 'Cordova'],
    description:
      'Multiple hybrid mobile applications built for hotel management, school ERP, and other product-based clients.',
    imageKey: 'hotelSchoolErp',
  },
  {
    id: 'elearning-platforms',
    name: 'E-Learning Platforms',
    client: 'BSC Academy & Digimonk',
    stack: ['Ionic 4–5', 'Angular', 'Cordova', 'SQLite'],
    description:
      'Live-streaming class apps with YouTube integration, GPS and IMEI-based device tracking, plus e-learning activities combining HTML5, Flash ActionScript 3.0, and Ionic.',
    imageKey: 'elearningPlatforms',
  },
  {
    id: 'coaching-suite',
    name: 'Coaching Suite',
    client: '8 Coaching Apps',
    stack: ['Ionic 7', 'Angular', 'Custom Video Player'],
    description:
      'A suite of 8 coaching apps with live and recorded classes, a custom video player, online quizzes, a PDF viewer, and FCM notifications.',
    imageKey: 'coachingSuite',
  },
];

export const ABOUT: AboutContent = {
  intro:
    'Versatile and accomplished Hybrid Mobile Application Developer with 13+ years of experience, including 8+ years specialising in Ionic and Angular.',
  paragraphs: [
    'I architect and deliver scalable, high-performance applications across platforms using Ionic, Angular, Capacitor, Flutter, and React Native. Over the years I have led development for enterprise clients including Infosys (for the Indian Income Tax department), Martin Marietta USA, and Holcim — building everything from government-grade security-hardened apps to offline-first field service tools.',
    'My core strength is hybrid, offline-first mobile architecture: biometric authentication, SQLite-based local storage, geofencing, push notifications, and VAPT security hardening for apps used by thousands of enterprise and government users.',
    'In 2025 I expanded into Real Estate Sales & Business Development, closing high-value residential property transactions across NCR and Uttar Pradesh — building on the same relationship-driven, detail-oriented approach that has defined my engineering career.',
    'I enjoy working in Agile teams, leading development initiatives end-to-end, and translating complex technical requirements into client-centric mobile and web solutions.',
  ],
  workPreference: ['Remote', 'Hybrid', 'On-site (NCR)'],
};
