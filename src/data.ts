import { Activity, Testimonial, Program, Project, GalleryItem } from './types';

export const ACTIVITIES: Activity[] = [
  {
    id: 'activity-1',
    category: 'health',
    date: 'Oct 15, 2023',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC6xEVr_lxB7h1r_n11ETiNoOX1ZefK10p5Jz7nFxfrKEPBAkX2hrTCxufuiGxHbeg-cV12zBF557uS7YpOAt-b9SFo208nHV4wDtHxA5Kfi0APBFwr8IPktSadDVYMo9dPwWh0aWkSin54p0_mBRKWhrz_aqf6xxSzkw_8x4z4nWMn_6cv7-YdZEZxHumIA0dHTJZ_Fxj5pH7DX9s_dyVFdTfYb3VI1DBzBn7TOySUn4FHc47rH6oABm99dt5WJs9n0Pk4skg0MHo_',
    title: 'Free Rural Medical Camp',
    titleHi: 'निःशुल्क ग्रामीण चिकित्सा शिविर',
    summary: 'Our recent medical camp in rural Maharashtra provided free checkups and medicines to over 500 villagers.',
    summaryHi: 'ग्रामीण महाराष्ट्र में हमारे हालिया चिकित्सा शिविर ने 500 से अधिक ग्रामीणों को मुफ्त जांच और दवाएं प्रदान कीं।',
    content: `We successfully organized a comprehensive Free Medical Camp in a remote village in Maharashtra. Over 500 patients, including children and elderly individuals, received general consultations, specialized eye check-ups, and pediatric guidance. 

Free essential medicines were distributed, and 45 patients were diagnosed with cataract conditions requiring surgical intervention, which our foundation has committed to funding completely in partnership with District Eye Hospitals.`,
    contentHi: `हमने महाराष्ट्र के एक सुदूर गाँव में एक व्यापक निःशुल्क चिकित्सा शिविर का सफलतापूर्वक आयोजन किया। बच्चों और बुजुर्गों सहित 500 से अधिक मरीजों ने सामान्य परामर्श, विशेष नेत्र जांच और बाल चिकित्सा मार्गदर्शन प्राप्त किया।

मुफ्त आवश्यक दवाएं वितरित की गईं, और 45 रोगियों में मोतियाबिंद की स्थिति का निदान किया गया, जिसके लिए हमारी संस्था ने जिला नेत्र अस्पतालों के साथ साझेदारी में पूरी तरह से वित्तपोषित करने का वादा किया है।`
  },
  {
    id: 'activity-2',
    category: 'education',
    date: 'Sep 28, 2023',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCsNgIP_3_bnyJeVRmZKt_EzfIUq2u4IJdii_c4i-IKikRBBgMte3NT7rzzQ4geMP4h_jWETFkKlJ9b-nLEWEwsAh8PXgNfKJGGb-ord4ISEa4NhvbBt_mUCIzcjxKidgurI4GVeX7vf3XdslBAMnU21MhFvogOU88ZBTB0eTKFIapOaitlVBqKz9s9jdde_uDTp5NNaCz5dW7ptLKC9e9PXbXB_Hr-0DNGbnLjGjoqr1rZ5iTF4WZ_O1bpE7gyZvZm4AmoMhkrt0yT',
    title: 'School Supplies Distribution',
    titleHi: 'स्कूल सामग्री वितरण',
    summary: 'Equipping 200 underprivileged students with backpacks, books, and stationery for the new academic year.',
    summaryHi: '200 वंचित छात्रों को नए शैक्षणिक वर्ष के लिए स्कूल बैग, किताबें और स्टेशनरी से लैस करना।',
    content: `To prevent dropout rates in government primary schools, HM Care Foundation launched the "Back to School" drive. We distributed high-quality school bags, note-books, geometry sets, drawing materials, and water bottles to over 200 children.

By removing the financial burden of academic materials, families are encouraged to keep their children in school, fostering continuous learning and hope for a brighter future.`,
    contentHi: `सरकारी प्राथमिक विद्यालयों में स्कूल छोड़ने की दर को रोकने के लिए, एचएम केयर फाउंडेशन ने "बैक टू स्कूल" अभियान शुरू किया। हमने 200 से अधिक बच्चों को उच्च गुणवत्ता वाले स्कूल बैग, नोटबुक, ज्योमेट्री सेट, ड्राइंग सामग्री और पानी की बोतलें वितरित कीं।

शैक्षणिक सामग्री के वित्तीय बोझ को हटाकर, परिवारों को अपने बच्चों को स्कूल में रखने के लिए प्रोत्साहित किया जाता है, जिससे निरंतर सीखने और उज्जवल भविष्य की आशा को बढ़ावा मिलता है।`
  },
  {
    id: 'activity-3',
    category: 'empowerment',
    date: 'Sep 10, 2023',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAMdaFuhcZ8pYa9ffCvTnoFZS56-A8DH5KefsWHXcFmdmTqRUmNSqPprH6Mb9AFhOa-vUhi_Q4Yslkh6lyWJkNEAOWS-yXq1kFd_xJB5RzLQkGpu1783YXrFTLbSNRS-5LvEaA3GK40wvZdUQCjwhuvqRvu4-bBzolOKcLcQ47goqDYXGM7BXrXXkVC0D6g4C8IV0Jf_hI61sjR0ZxcnYKbq8PqRpCT0RQB36hauhyVgj-2d5rni0LSYplWidrMNol2mTZ-bxxUMFNM',
    title: "Women's Skill Workshop",
    titleHi: 'महिला कौशल कार्यशाला',
    summary: 'A two-week vocational training program focused on tailoring and local crafts for empowering women.',
    summaryHi: 'महिलाओं को सशक्त बनाने के लिए सिलाई और स्थानीय शिल्प पर केंद्रित दो सप्ताह का व्यावसायिक प्रशिक्षण कार्यक्रम।',
    content: `Empowering a woman empowers an entire household. Our latest two-week intensive vocational workshop enrolled 35 women from low-income groups. They received certified training in basic and advanced tailoring, textile designing, and local handicrafts.

Each graduate was gifted a mechanical sewing machine through donor contributions, enabling them to launch small home-based micro-businesses and secure a reliable livelihood immediately.`,
    contentHi: `एक महिला को सशक्त बनाने से पूरा परिवार सशक्त होता है। हमारी हालिया दो सप्ताह की गहन व्यावसायिक कार्यशाला में कम आय वाले समूहों की 35 महिलाओं ने भाग लिया। उन्होंने बुनियादी और उन्नत सिलाई, कपड़ा डिजाइनिंग और स्थानीय हस्तशिल्प में प्रमाणित प्रशिक्षण प्राप्त किया।

प्रत्येक स्नातक को दाता योगदान के माध्यम से एक सिलाई मशीन उपहार में दी गई, जिससे वे तुरंत छोटे घरेलू सूक्ष्म व्यवसाय शुरू करने और एक विश्वसनीय आजीविका सुरक्षित करने में सक्षम हो सकें।`
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    quote: "The scholarship provided by HM Care Foundation changed my life. I am now the first in my family to attend college and pursue my dream of becoming a teacher.",
    quoteHi: "एचएम केयर फाउंडेशन द्वारा दी गई छात्रवृत्ति ने मेरा जीवन बदल दिया। अब मैं अपने परिवार में कॉलेज जाने वाली और शिक्षिका बनने के अपने सपने को पूरा करने वाली पहली व्यक्ति हूँ।",
    name: "Anjali Desai",
    role: "Student Beneficiary",
    roleHi: "छात्र लाभार्थी",
    avatarLetter: "A"
  },
  {
    id: 't-2',
    quote: "Volunteering at the health camps has been an incredibly fulfilling experience. Seeing the direct impact of our work on the community's health is truly inspiring.",
    quoteHi: "स्वास्थ्य शिविरों में स्वयंसेवा करना एक अविश्वसनीय रूप से संतोषजनक अनुभव रहा है। समुदाय के स्वास्थ्य पर हमारे काम का सीधा प्रभाव देखना वास्तव में प्रेरणादायक है।",
    name: "Rahul Verma",
    role: "Medical Volunteer",
    roleHi: "चिकित्सा स्वयंसेवक",
    avatarLetter: "R"
  }
];

export const PROGRAMS: Program[] = [
  {
    id: 'prog-health',
    title: 'Healthcare Initiatives',
    titleHi: 'स्वास्थ्य पहल',
    icon: 'medical_services',
    color: 'border-primary text-primary',
    tagline: 'Delivering clinical aid and preventive healthcare to underserved doors.',
    taglineHi: 'वंचितों के दरवाजे तक नैदानिक सहायता और निवारक स्वास्थ्य सेवा पहुँचाना।',
    description: 'We organize mobile medical vans, free multi-specialty health camps, pediatric checkups, and diagnostic screenings in rural and slum communities. We also distribute essential medicines and arrange surgical sponsorships.',
    descriptionHi: 'हम ग्रामीण और झुग्गी-झोंपड़ी वाले समुदायों में मोबाइल मेडिकल वैन, मुफ्त बहु-विशिष्ट स्वास्थ्य शिविर, बाल चिकित्सा जांच और नैदानिक जांच का आयोजन करते हैं। हम आवश्यक दवाएं भी वितरित करते हैं और सर्जरी प्रायोजन की व्यवस्था करते हैं।',
    impactMetric: '100+',
    impactMetricLabel: 'Health Camps Conducted',
    impactMetricLabelHi: 'आयोजित स्वास्थ्य शिविर',
    initiatives: [
      'Mobile Health Vans for remote areas',
      'Free general and specialty diagnostics',
      'Child nutrition and prenatal screening',
      'Collaborative cataract and general surgeries'
    ],
    initiativesHi: [
      'सुदूर क्षेत्रों के लिए मोबाइल स्वास्थ्य वैन',
      'निःशुल्क सामान्य और विशिष्ट निदान',
      'बाल पोषण और प्रसव पूर्व जांच',
      'सहयोगात्मक मोतियाबिंद और सामान्य सर्जरी'
    ]
  },
  {
    id: 'prog-education',
    title: 'Education & Literacy',
    titleHi: 'शिक्षा और साक्षरता',
    icon: 'school',
    color: 'border-secondary text-secondary',
    tagline: 'Nurturing young minds through financial assistance and resources.',
    taglineHi: 'वित्तीय सहायता और संसाधनों के माध्यम से युवा दिमागों का पोषण करना।',
    description: 'Our primary goal is to minimize school dropouts by providing academic scholarships, study kits, digital tools, and infrastructure aid to rural and public educational facilities.',
    descriptionHi: 'हमारा प्राथमिक लक्ष्य ग्रामीण और सार्वजनिक शैक्षणिक सुविधाओं को शैक्षणिक छात्रवृत्तियां, अध्ययन किट, डिजिटल उपकरण और बुनियादी ढांचा सहायता प्रदान करके स्कूल छोड़ने की दर को कम करना है।',
    impactMetric: '5k+',
    impactMetricLabel: 'Students Enabled',
    impactMetricLabelHi: 'विद्यार्थी सशक्त हुए',
    initiatives: [
      'Merit-cum-Need scholarships',
      'Distribution of free books & study bags',
      'Sponsoring local digital class equipment',
      'Remedial teaching in evening centers'
    ],
    initiativesHi: [
      'योग्यता और आवश्यकता-आधारित छात्रवृत्ति',
      'मुफ्त किताबों और अध्ययन बैगों का वितरण',
      'स्थानीय डिजिटल कक्षा उपकरणों को प्रायोजित करना',
      'शाम के केंद्रों में उपचारात्मक शिक्षण'
    ]
  },
  {
    id: 'prog-empowerment',
    title: 'Livelihood & Women Empowerment',
    titleHi: 'आजीविका और महिला अधिकारिता',
    icon: 'group',
    color: 'border-tertiary text-tertiary',
    tagline: 'Fostering independence through skilled vocational training.',
    taglineHi: 'कुशल व्यावसायिक प्रशिक्षण के माध्यम से स्वतंत्रता को बढ़ावा देना।',
    description: 'We conduct certified skill workshops for women, youth, and farmers to foster sustainable livelihoods. Our programs include tailoring, computer literacy, food processing, and micro-business management.',
    descriptionHi: 'हम स्थायी आजीविका को बढ़ावा देने के लिए महिलाओं, युवाओं और किसानों के लिए प्रमाणित कौशल कार्यशालाएं आयोजित करते हैं। हमारे कार्यक्रमों में सिलाई, कंप्यूटर साक्षरता, खाद्य प्रसंस्करण और सूक्ष्म व्यवसाय प्रबंधन शामिल हैं।',
    impactMetric: '1.2k+',
    impactMetricLabel: 'Women Financially Independent',
    impactMetricLabelHi: 'महिलाएं आर्थिक रूप से स्वतंत्र हुईं',
    initiatives: [
      'Vocational tailoring & craft programs',
      'Digital literacy & workplace preparation',
      'Interest-free micro-finance groups',
      'Handmade crafts market linkages'
    ],
    initiativesHi: [
      'व्यावसायिक सिलाई और शिल्प कार्यक्रम',
      'डिजिटल साक्षरता और कार्यस्थल की तैयारी',
      'ब्याज मुक्त सूक्ष्म वित्त समूह',
      'हस्तनिर्मित शिल्प बाजार संपर्क'
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'proj-1',
    title: 'Rural Eye-Sight Recovery Program',
    titleHi: 'ग्रामीण दृष्टि सुधार कार्यक्रम',
    category: 'Healthcare',
    description: 'Sponsoring diagnostic camps and cataract operations to restore clear vision for low-income village elders.',
    descriptionHi: 'कम आय वाले ग्रामीण बुजुर्गों के लिए स्पष्ट दृष्टि बहाल करने के लिए नैदानिक शिविरों और मोतियाबिंद के ऑपरेशनों को प्रायोजित करना।',
    image: 'https://images.unsplash.com/photo-1579684389782-64d84b5e901d?auto=format&fit=crop&q=80&w=600',
    raised: 14500,
    goal: 20000,
    donorCount: 182
  },
  {
    id: 'proj-2',
    title: 'Smart Classrooms for Village Schools',
    titleHi: 'ग्रामीण स्कूलों के लिए स्मार्ट कक्षाएं',
    category: 'Education',
    description: 'Deploying digital projectors, smart tablets, and software to remote rural high schools to equalize access.',
    descriptionHi: 'समान पहुंच सुनिश्चित करने के लिए सुदूर ग्रामीण हाई स्कूलों में डिजिटल प्रोजेक्टर, स्मार्ट टैबलेट और सॉफ्टवेयर उपलब्ध कराना।',
    image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=600',
    raised: 8200,
    goal: 12000,
    donorCount: 94
  },
  {
    id: 'proj-3',
    title: 'Sewing Machines & Micro-Business Setup',
    titleHi: 'सिलाई मशीनें और सूक्ष्म व्यवसाय सेटअप',
    category: 'Empowerment',
    description: 'Distributing professional sewing machines to our certified workshop graduates to launch tailor boutiques.',
    descriptionHi: 'सिलाई बुटीक शुरू करने के लिए हमारे प्रमाणित कार्यशाला स्नातकों को व्यावसायिक सिलाई मशीनें वितरित करना।',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=600',
    raised: 6100,
    goal: 10000,
    donorCount: 75
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g-1',
    title: 'Doctors offering screening at camp',
    category: 'health',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC6xEVr_lxB7h1r_n11ETiNoOX1ZefK10p5Jz7nFxfrKEPBAkX2hrTCxufuiGxHbeg-cV12zBF557uS7YpOAt-b9SFo208nHV4wDtHxA5Kfi0APBFwr8IPktSadDVYMo9dPwWh0aWkSin54p0_mBRKWhrz_aqf6xxSzkw_8x4z4nWMn_6cv7-YdZEZxHumIA0dHTJZ_Fxj5pH7DX9s_dyVFdTfYb3VI1DBzBn7TOySUn4FHc47rH6oABm99dt5WJs9n0Pk4skg0MHo_'
  },
  {
    id: 'g-2',
    title: 'School children receiving fresh stationery',
    category: 'education',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCsNgIP_3_bnyJeVRmZKt_EzfIUq2u4IJdii_c4i-IKikRBBgMte3NT7rzzQ4geMP4h_jWETFkKlJ9b-nLEWEwsAh8PXgNfKJGGb-ord4ISEa4NhvbBt_mUCIzcjxKidgurI4GVeX7vf3XdslBAMnU21MhFvogOU88ZBTB0eTKFIapOaitlVBqKz9s9jdde_uDTp5NNaCz5dW7ptLKC9e9PXbXB_Hr-0DNGbnLjGjoqr1rZ5iTF4WZ_O1bpE7gyZvZm4AmoMhkrt0yT'
  },
  {
    id: 'g-3',
    title: 'Women learning tailoring in our classroom',
    category: 'empowerment',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAMdaFuhcZ8pYa9ffCvTnoFZS56-A8DH5KefsWHXcFmdmTqRUmNSqPprH6Mb9AFhOa-vUhi_Q4Yslkh6lyWJkNEAOWS-yXq1kFd_xJB5RzLQkGpu1783YXrFTLbSNRS-5LvEaA3GK40wvZdUQCjwhuvqRvu4-bBzolOKcLcQ47goqDYXGM7BXrXXkVC0D6g4C8IV0Jf_hI61sjR0ZxcnYKbq8PqRpCT0RQB36hauhyVgj-2d5rni0LSYplWidrMNol2mTZ-bxxUMFNM'
  },
  {
    id: 'g-4',
    title: 'Mobile Healthcare check-up session',
    category: 'health',
    image: 'https://images.unsplash.com/photo-1516841273335-e39b37888115?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'g-5',
    title: 'Kids reading in a rural supported library',
    category: 'education',
    image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'g-6',
    title: 'A volunteer engaging in community play',
    category: 'community',
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=600'
  }
];

export const TRANSLATIONS = {
  en: {
    title: 'HM Care Foundation',
    slogan: 'Empowering Communities, Transforming Lives',
    heroTag: 'Join us in our mission to create sustainable change, provide essential healthcare, and ensure quality education for communities in need.',
    donateNow: 'Donate Now',
    volunteer: 'Volunteer',
    welcomeTitle: 'Welcome to HM Care Foundation',
    welcomeDesc: 'We are a dedicated non-profit organization committed to bringing sustainable change through healthcare, education, and community empowerment initiatives. With a heart for service and a reach across underserved regions, we strive to build a future where every individual has the opportunity to thrive.',
    ourMission: 'Our Mission',
    ourMissionDesc: 'To bridge the gap through targeted community interventions, providing essential health services, quality education, and empowerment programs to underserved populations, ensuring fundamental rights for all.',
    ourVision: 'Our Vision',
    ourVisionDesc: 'We envision a world where every individual, regardless of their background, has access to fundamental rights—health, education, and opportunity—allowing them to lead dignified and self-reliant lives.',
    beneficiaries: 'Beneficiaries Reached',
    students: 'Students Supported',
    healthCamps: 'Health Camps Organized',
    latestActivities: 'Latest Activities',
    readMore: 'Read More',
    voicesOfImpact: 'Voices of Impact',
    joinCommunity: 'Join Our Community',
    joinCommunityDesc: 'Subscribe to our newsletter to receive updates on our latest projects, events, and stories of change.',
    emailPlaceholder: 'Enter your email address',
    subscribe: 'Subscribe',
    footerDesc: 'Dedicated to bringing sustainable change through healthcare, education, and community empowerment initiatives.',
    quickLinks: 'Quick Links',
    legal: 'Legal',
    allRightsReserved: '© 2024 HM Care Foundation. All rights reserved.',
    home: 'Home',
    aboutUs: 'About Us',
    programs: 'Programs',
    projects: 'Projects',
    gallery: 'Gallery',
    contactUs: 'Contact Us',
    newsEvents: 'News & Events',
    documents: 'Documents',
    privacyPolicy: 'Privacy Policy',
    termsOfService: 'Terms of Service',
    langSelect: 'Hindi/English',
    successSubscribe: 'Thank you for subscribing! We will send you updates soon.',
    loading: 'Loading...'
  },
  hi: {
    title: 'एचएम केयर फाउंडेशन',
    slogan: 'सशक्त समुदाय, रूपांतरित जीवन',
    heroTag: 'सतत बदलाव लाने, आवश्यक स्वास्थ्य सेवा प्रदान करने और जरूरतमंद समुदायों के लिए गुणवत्तापूर्ण शिक्षा सुनिश्चित करने के हमारे मिशन में शामिल हों।',
    donateNow: 'अभी दान करें',
    volunteer: 'स्वयंसेवक बनें',
    welcomeTitle: 'एचएम केयर फाउंडेशन में आपका स्वागत है',
    welcomeDesc: 'हम स्वास्थ्य सेवा, शिक्षा और सामुदायिक सशक्तिकरण पहलों के माध्यम से सतत परिवर्तन लाने के लिए प्रतिबद्ध एक समर्पित गैर-लाभकारी संगठन हैं। सेवा की भावना और वंचित क्षेत्रों तक पहुंच के साथ, हम एक ऐसे भविष्य का निर्माण करने का प्रयास करते हैं जहां हर व्यक्ति को आगे बढ़ने का अवसर मिले।',
    ourMission: 'हमारा मिशन',
    ourMissionDesc: 'वंचित आबादी को आवश्यक स्वास्थ्य सेवाएं, गुणवत्तापूर्ण शिक्षा और सशक्तिकरण कार्यक्रम प्रदान करके, सभी के लिए मौलिक अधिकार सुनिश्चित करते हुए लक्षित सामुदायिक हस्तक्षेपों के माध्यम से अंतर को पाटना।',
    ourVision: 'हमारा विजन',
    ourVisionDesc: 'हम एक ऐसी दुनिया की कल्पना करते हैं जहां प्रत्येक व्यक्ति, चाहे उनकी पृष्ठभूमि कुछ भी हो, के पास मौलिक अधिकार - स्वास्थ्य, शिक्षा और अवसर - हों, जिससे वे गरिमापूर्ण और आत्मनिर्भर जीवन जी सकें।',
    beneficiaries: 'लाभार्थी लाभांवित',
    students: 'छात्र समर्थित',
    healthCamps: 'स्वास्थ्य शिविर आयोजित',
    latestActivities: 'नवीनतम गतिविधियां',
    readMore: 'और पढ़ें',
    voicesOfImpact: 'प्रभाव की आवाजें',
    joinCommunity: 'हमारे समुदाय से जुड़ें',
    joinCommunityDesc: 'हमारी नवीनतम परियोजनाओं, कार्यक्रमों और बदलाव की कहानियों पर अपडेट प्राप्त करने के लिए हमारे न्यूज़लेटर की सदस्यता लें।',
    emailPlaceholder: 'अपना ईमेल पता दर्ज करें',
    subscribe: 'सदस्यता लें',
    footerDesc: 'स्वास्थ्य सेवा, शिक्षा और सामुदायिक सशक्तिकरण पहलों के माध्यम से सतत परिवर्तन लाने के लिए समर्पित।',
    quickLinks: 'त्वरित लिंक',
    legal: 'कानूनी',
    allRightsReserved: '© 2024 एचएम केयर फाउंडेशन। सर्वाधिकार सुरक्षित।',
    home: 'होम',
    aboutUs: 'हमारे बारे में',
    programs: 'कार्यक्रम',
    projects: 'परियोजनाएं',
    gallery: 'गैलरी',
    contactUs: 'संपर्क करें',
    newsEvents: 'समाचार और कार्यक्रम',
    documents: 'दस्तावेज',
    privacyPolicy: 'गोपनीयता नीति',
    termsOfService: 'सेवा की शर्तें',
    langSelect: 'हिंदी/अंग्रेजी',
    successSubscribe: 'सदस्यता लेने के लिए धन्यवाद! हम आपको जल्द ही अपडेट भेजेंगे।',
    loading: 'लोड हो रहा है...'
  }
};
