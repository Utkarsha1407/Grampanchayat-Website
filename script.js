
// Data constants
const STATS = [
  { icon: "fa-university", label: "ग्रामपंचायत", value: "आरळा" },
  { icon: "fa-calendar-check", label: "स्थापना", value: "०४/०५/१९५५" },
  { icon: "fa-map", label: "क्षेत्रफळ", value: "६४२ हेक्टर" },
  { icon: "fa-users", label: "लोकसंख्या", value: "४५९३" },
  { icon: "fa-male", label: "पुरुष", value: "२२६८" },
  { icon: "fa-female", label: "स्त्री", value: "२३२५" },
  { icon: "fa-home", label: "कुटुंब", value: "१४४९" },
  { icon: "fa-id-card", label: "मतदार", value: "४४९७" },
  { icon: "fa-leaf", label: "बागायत क्षेत्र", value: "४३० हे" },
  { icon: "fa-bolt", label: "लाईट पोल", value: "२९५" },
  { icon: "fa-school", label: "शाळा", value: "०९" },
  { icon: "fa-tint", label: "नळ जोडणी", value: "९४५" }
];

const OFFICERS = [
  { role: "सरपंच", name: "सौ. बाळूबाई प्रकाश धामणकर", image:"https://grampanchayataarala.in/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-15-at-5.19.53-PM.jpeg"  },
  { role: "उपसरपंच", name: "श्री. लक्ष्मण नारायण पाटील", image: "https://grampanchayataarala.in/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-15-at-5.21.44-PM.jpeg" },
  { role: "ग्रामविकास अधिकारी", name: "श्री. अभिजीत आप्पा पाटील", image: "https://grampanchayataarala.in/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-15-at-5.23.09-PM.jpeg" }
];

const SERVICES = [
  { 
    title: "पाणीपुरवठा सेवा", 
    desc: "गावातील स्वच्छ पाणीपुरवठ्याची व्यवस्था आणि नियमित देखभाल.",
    icon: "fa-faucet-drip",
    color: "blue"
  },
  { 
    title: "कचरा व्यवस्थापन", 
    desc: "नियमित कचरा संकलन आणि गाव स्वच्छता मोहीम.",
    icon: "fa-trash-alt",
    color: "green"
  },
  { 
    title: "शिक्षण सेवा", 
    desc: "शाळा सुविधा सुधारणे आणि शैक्षणिक उपक्रम राबवणे.",
    icon: "fa-graduation-cap",
    color: "orange"
  },
  { 
    title: "आरोग्य सेवा", 
    desc: "प्राथमिक आरोग्य केंद्र सुविधा आणि लसीकरण मोहीम.",
    icon: "fa-heartbeat",
    color: "red"
  },
  { 
    title: "नोंदणी सेवा", 
    desc: "जन्म, मृत्यू आणि विवाह यांची अधिकृत नोंदणी.",
    icon: "fa-file-invoice",
    color: "indigo"
  },
  { 
    title: "दिवाबत्ती सोय", 
    desc: "गावातील रस्ते आणि गल्ल्यांमध्ये स्ट्रीट लाईटची सोय.",
    icon: "fa-lightbulb",
    color: "yellow"
  }
];

// Rendering functions
function renderApp() {
  const statsContainer = document.getElementById('stats-container');
  const officersContainer = document.getElementById('officers-container');
  const servicesContainer = document.getElementById('services-container');

  // Render Stats
  statsContainer.innerHTML = STATS.map(s => `
    <div class="text-center p-6 border border-indigo-800 rounded-2xl hover:bg-indigo-800 transition-all">
      <i class="fas ${s.icon} text-3xl text-orange-400 mb-4"></i>
      <p class="text-xs uppercase font-bold opacity-70 tracking-widest">${s.label}</p>
      <p class="text-xl font-bold mt-1">${s.value}</p>
    </div>
  `).join('');

  // Render Officers
  officersContainer.innerHTML = OFFICERS.map(o => `
    <div class="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 group card-hover">
      <div class="h-96 relative">
        <img src="${o.image}" alt="${o.name}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
        <div class="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white">
          <span class="text-xs font-bold uppercase tracking-widest text-black">${o.role}</span>
          <h4 class="text-2xl font-bold mt-1">${o.name}</h4>
        </div>
      </div>
    </div>
  `).join('');

  // Render Services
  servicesContainer.innerHTML = SERVICES.map(ser => `
    <div class="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all card-hover flex flex-col items-center text-center">
      <div class="w-20 h-20 rounded-2xl bg-${ser.color}-50 flex items-center justify-center mb-6">
        <i class="fas ${ser.icon} text-3xl text-${ser.color}-600"></i>
      </div>
      <h4 class="text-xl font-bold text-indigo-900 mb-3">${ser.title}</h4>
      <p class="text-gray-500 text-sm leading-relaxed">${ser.desc}</p>
    </div>
  `).join('');
}

// Mobile Menu Logic
const menuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

// Smooth Scroll for mobile links
mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => mobileMenu.classList.add('hidden'));
});

// Initialize
document.addEventListener('DOMContentLoaded', renderApp);
