const campaigns = [
  {
    image: "assets/images/hero-namo-hd.png",
    alt: "PM Surya Ghar: Muft Bijli Yojana",
  },
  {
    image: "assets/images/hero-namo-again-hd.jpg",
    alt: "Namo Again 2029 solar campaign",
  },
  {
    image: "assets/images/hero-pm-surya-ghar-hd.png",
    alt: "PM Surya Ghar solar campaign",
  },
];

const projects = window.PROJECTS_CONFIG.map((project) => ({
  ...project,
  image: `assets/images/projects/${project.image}`,
}));

const hindiTranslations = new Map([
  ["Projects", "परियोजनाएँ"],
  ["PM Surya Ghar", "पीएम सूर्य घर"],
  ["Resources", "संसाधन"],
  ["Contact", "संपर्क"],
  ["Call now", "अभी कॉल करें"],
  ["Rooftop solar experts in Kota", "कोटा में रूफटॉप सोलर विशेषज्ञ"],
  ["Smart solar for a", "स्मार्ट सोलर से"],
  ["brighter tomorrow.", "उज्ज्वल कल बनाएँ।"],
  ["Professional rooftop solar systems for homes and businesses, with end-to-end support for installation, subsidy, financing, and commissioning.", "घरों और व्यवसायों के लिए पेशेवर रूफटॉप सोलर सिस्टम—इंस्टॉलेशन, सब्सिडी, फाइनेंस और कमीशनिंग की पूरी सहायता के साथ।"],
  ["Get a solar estimate", "सोलर अनुमान पाएँ"],
  ["Talk to an expert", "विशेषज्ञ से बात करें"],
  ["Clean energy", "स्वच्छ ऊर्जा"],
  ["Built for your roof", "आपकी छत के लिए तैयार"],
  ["Authorized Distributor", "अधिकृत वितरक"],
  ["Kota Division", "कोटा डिवीजन"],
  ["Projects completed", "परियोजनाएँ पूरी कीं"],
  ["Subsidy up to 3 kW+", "3 kW+ पर अधिकतम सब्सिडी"],
  ["Concessional loan ROI", "रियायती ऋण ब्याज दर"],
  ["2 service areas", "2 सेवा क्षेत्र"],
  ["Kota and Baran", "कोटा और बारां"],
  ["Government initiative", "सरकारी पहल"],
  ["Make the most of PM Surya Ghar: Muft Bijli Yojna", "पीएम सूर्य घर: मुफ्त बिजली योजना का पूरा लाभ उठाएँ"],
  ["Move to rooftop solar with guidance on eligibility, subsidy documentation, bank finance, installation, and DISCOM commissioning.", "पात्रता, सब्सिडी दस्तावेज़, बैंक फाइनेंस, इंस्टॉलेशन और डिस्कॉम कमीशनिंग के मार्गदर्शन के साथ रूफटॉप सोलर अपनाएँ।"],
  ["Visit the national portal", "राष्ट्रीय पोर्टल देखें"],
  ["PM Surya Ghar Yojana", "पीएम सूर्य घर योजना"],
  ["A simpler path to affordable rooftop solar.", "किफायती रूफटॉप सोलर का आसान रास्ता।"],
  ["The scheme supports residential households in adopting grid-connected rooftop solar through direct subsidy transfers and accessible bank finance. We help customers navigate the process from survey to commissioning.", "यह योजना सीधे सब्सिडी हस्तांतरण और सुलभ बैंक फाइनेंस के माध्यम से घरों को ग्रिड-कनेक्टेड रूफटॉप सोलर अपनाने में मदद करती है। हम सर्वे से कमीशनिंग तक पूरी प्रक्रिया में सहायता करते हैं।"],
  ["Site survey and system recommendation", "साइट सर्वे और सिस्टम सुझाव"],
  ["Portal application and documentation", "पोर्टल आवेदन और दस्तावेज़"],
  ["Installation, inspection, and commissioning", "इंस्टॉलेशन, निरीक्षण और कमीशनिंग"],
  ["Direct subsidy", "सीधी सब्सिडी"],
  ["Financial support is transferred directly to the eligible consumer's bank account after commissioning.", "कमीशनिंग के बाद वित्तीय सहायता सीधे पात्र उपभोक्ता के बैंक खाते में भेजी जाती है।"],
  ["₹30,000 for 1 kW", "1 kW के लिए ₹30,000"],
  ["₹60,000 for 2 kW", "2 kW के लिए ₹60,000"],
  ["₹78,000 for 3 kW and above", "3 kW और अधिक के लिए ₹78,000"],
  ["Accessible finance", "सुलभ फाइनेंस"],
  ["Concessional bank loans make the initial investment easier to manage for residential customers.", "रियायती बैंक ऋण घरेलू ग्राहकों के लिए शुरुआती निवेश को आसान बनाते हैं।"],
  ["Rates starting near 7%", "ब्याज दर लगभग 7% से शुरू"],
  ["Up to ₹2 lakh for projects up to 3 kW", "3 kW तक की परियोजना के लिए ₹2 लाख तक"],
  ["Up to ₹6 lakh for projects up to 10 kW", "10 kW तक की परियोजना के लिए ₹6 लाख तक"],
  ["End-to-end support", "शुरू से अंत तक सहायता"],
  ["One experienced team coordinates the technical and administrative work throughout your project.", "एक अनुभवी टीम आपकी पूरी परियोजना के तकनीकी और प्रशासनिक काम का समन्वय करती है।"],
  ["System design and quality installation", "सिस्टम डिज़ाइन और गुणवत्तापूर्ण इंस्टॉलेशन"],
  ["DISCOM inspection assistance", "डिस्कॉम निरीक्षण में सहायता"],
  ["Commissioning and subsidy guidance", "कमीशनिंग और सब्सिडी मार्गदर्शन"],
  ["Work on the ground", "हमारा काम"],
  ["Solar projects across Rajasthan", "राजस्थान भर में सोलर परियोजनाएँ"],
  ["Explore residential and commercial systems installed for customers across Kota, Baran, Bundi, and nearby areas.", "कोटा, बारां, बूंदी और आसपास के क्षेत्रों में लगाए गए घरेलू और व्यावसायिक सिस्टम देखें।"],
  ["Featured installation", "प्रमुख इंस्टॉलेशन"],
  ["View full size", "पूरा आकार देखें"],
  ["View full-size project image", "परियोजना की पूरी तस्वीर देखें"],
  ["Close full-size image", "पूरी तस्वीर बंद करें"],
  ["Previous project", "पिछली परियोजना"],
  ["Next project", "अगली परियोजना"],
  ["Project Under PM Surya Ghar", "पीएम सूर्य घर के अंतर्गत परियोजना"],
  ["Project Under PM Surya Ghar Scheme", "पीएम सूर्य घर योजना के अंतर्गत परियोजना"],
  ["Under PM Surya Ghar Scheme", "पीएम सूर्य घर योजना के अंतर्गत"],
  ["Helpful resources", "उपयोगी संसाधन"],
  ["Everything you need to get started", "शुरुआत के लिए आपकी हर ज़रूरत"],
  ["Quick access to applications, subsidy details, vendor information, and careers.", "आवेदन, सब्सिडी विवरण, विक्रेता जानकारी और करियर तक त्वरित पहुँच।"],
  ["Apply for rooftop solar", "रूफटॉप सोलर के लिए आवेदन करें"],
  ["Subsidy structure", "सब्सिडी संरचना"],
  ["Empanelled vendor", "सूचीबद्ध विक्रेता"],
  ["Join our team", "हमारी टीम से जुड़ें"],
  ["Let's talk solar", "आइए सोलर पर बात करें"],
  ["Ready to make your own electricity?", "अपनी बिजली खुद बनाने के लिए तैयार हैं?"],
  ["Share a few details and our team will help you understand the right plant size, subsidy, and next steps.", "कुछ जानकारी साझा करें और हमारी टीम सही प्लांट क्षमता, सब्सिडी और अगले कदम समझने में आपकी मदद करेगी।"],
  ["Owner", "मालिक"],
  ["Primary phone", "मुख्य फोन"],
  ["Alternate phone", "वैकल्पिक फोन"],
  ["Email", "ईमेल"],
  ["Head office", "मुख्य कार्यालय"],
  ["Free consultation", "निःशुल्क परामर्श"],
  ["Apply for solar", "सोलर के लिए आवेदन करें"],
  ["We'll open WhatsApp with your details so you can contact our team directly.", "आपकी जानकारी के साथ WhatsApp खुलेगा ताकि आप हमारी टीम से सीधे संपर्क कर सकें।"],
  ["Your name", "आपका नाम"],
  ["Phone number", "फोन नंबर"],
  ["Plant capacity", "प्लांट क्षमता"],
  ["House address", "घर का पता"],
  ["Send via WhatsApp", "WhatsApp से भेजें"],
  ["Visit our head office", "हमारे मुख्य कार्यालय आएँ"],
  ["Find us in Kota", "कोटा में हमें खोजें"],
  ["Open in Google Maps", "Google Maps में खोलें"],
  ["Clean energy for Kota", "कोटा के लिए स्वच्छ ऊर्जा"],
  ["All rights reserved.", "सर्वाधिकार सुरक्षित।"],
  ["Call a solar expert", "सोलर विशेषज्ञ को कॉल करें"],
  ["Full name", "पूरा नाम"],
  ["Area, city", "क्षेत्र, शहर"],
  ["Opening WhatsApp…", "WhatsApp खुल रहा है…"],
]);

const normalizeText = (value) => value.trim().replace(/\s+/g, " ");
const translateText = (value) => {
  if (currentLanguage !== "hi") return value;
  return hindiTranslations.get(normalizeText(value)) || value;
};
let currentLanguage = "en";

const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector("#site-nav");

function closeNavigation() {
  navToggle.setAttribute("aria-expanded", "false");
  siteNav.dataset.open = "false";
  document.body.classList.remove("nav-open");
}

navToggle.addEventListener("click", () => {
  const willOpen = navToggle.getAttribute("aria-expanded") !== "true";
  navToggle.setAttribute("aria-expanded", String(willOpen));
  siteNav.dataset.open = String(willOpen);
  document.body.classList.toggle("nav-open", willOpen);
});

siteNav.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeNavigation));

window.addEventListener("resize", () => {
  if (window.innerWidth > 820) closeNavigation();
});

const campaignImage = document.querySelector("#campaign-image");
const campaignDots = document.querySelector("#campaign-dots");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const brandLink = document.querySelector(".brand");
let campaignIndex = 0;
let campaignTimer;

brandLink.addEventListener("click", (event) => {
  event.preventDefault();
  window.scrollTo({ top: 0, behavior: reducedMotion ? "auto" : "smooth" });
  window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}`);
});

function renderCampaign() {
  const campaign = campaigns[campaignIndex];
  campaignImage.src = campaign.image;
  campaignImage.alt = campaign.alt;

  campaignDots.querySelectorAll("button").forEach((dot, index) => {
    dot.setAttribute("aria-current", String(index === campaignIndex));
  });
}

function restartCampaignTimer() {
  window.clearInterval(campaignTimer);
  if (!reducedMotion) {
    campaignTimer = window.setInterval(() => {
      campaignIndex = (campaignIndex + 1) % campaigns.length;
      renderCampaign();
    }, 6500);
  }
}

campaigns.forEach((campaign, index) => {
  const dot = document.createElement("button");
  dot.type = "button";
  dot.setAttribute("aria-label", `Show campaign slide ${index + 1}: ${campaign.alt}`);
  dot.addEventListener("click", () => {
    campaignIndex = index;
    renderCampaign();
    restartCampaignTimer();
  });
  campaignDots.append(dot);
});

document.querySelector("#campaign-previous").addEventListener("click", () => {
  campaignIndex = (campaignIndex - 1 + campaigns.length) % campaigns.length;
  renderCampaign();
  restartCampaignTimer();
});

document.querySelector("#campaign-next").addEventListener("click", () => {
  campaignIndex = (campaignIndex + 1) % campaigns.length;
  renderCampaign();
  restartCampaignTimer();
});

const projectImage = document.querySelector("#project-image");
const projectTitle = document.querySelector("#project-title");
const projectDescription = document.querySelector("#project-description");
const projectCounter = document.querySelector("#project-counter");
const projectImageButton = document.querySelector("#project-image-button");
const projectLightbox = document.querySelector("#project-lightbox");
const lightboxImage = document.querySelector("#lightbox-image");
const lightboxTitle = document.querySelector("#lightbox-title");
const lightboxDescription = document.querySelector("#lightbox-description");
let projectIndex = 0;

function renderProject() {
  const project = projects[projectIndex];
  projectImage.src = project.image;
  projectImage.alt = project.description ? `${project.title}. ${project.description}` : project.title;
  projectTitle.textContent = translateText(project.title);
  projectDescription.textContent = translateText(project.description);
  projectCounter.textContent = `${projectIndex + 1}/${projects.length}`;
}

function renderLightboxProject() {
  const project = projects[projectIndex];
  lightboxImage.src = project.image;
  lightboxImage.alt = projectImage.alt;
  lightboxTitle.textContent = translateText(project.title);
  lightboxDescription.textContent = translateText(project.description);
}

function moveProject(offset) {
  projectIndex = (projectIndex + offset + projects.length) % projects.length;
  renderProject();
  if (projectLightbox.open) renderLightboxProject();
}

function openProjectLightbox() {
  renderLightboxProject();
  projectLightbox.showModal();
  document.body.classList.add("lightbox-open");
}

function closeProjectLightbox() {
  projectLightbox.close();
}

projectImageButton.addEventListener("click", openProjectLightbox);
document.querySelector("#lightbox-close").addEventListener("click", closeProjectLightbox);

projectLightbox.addEventListener("click", (event) => {
  if (event.target === projectLightbox) closeProjectLightbox();
});

projectLightbox.addEventListener("close", () => {
  document.body.classList.remove("lightbox-open");
  projectImageButton.focus();
});

document.querySelector("#project-previous").addEventListener("click", () => {
  moveProject(-1);
});

document.querySelector("#project-next").addEventListener("click", () => {
  moveProject(1);
});

document.querySelector("#lightbox-previous").addEventListener("click", () => moveProject(-1));
document.querySelector("#lightbox-next").addEventListener("click", () => moveProject(1));

document.addEventListener("keydown", (event) => {
  if (projectLightbox.open) {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      moveProject(-1);
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      moveProject(1);
    }
    return;
  }

  const carousel = document.querySelector(".project-carousel");
  if (!carousel.contains(document.activeElement)) return;

  if (event.key === "ArrowLeft") {
    document.querySelector("#project-previous").click();
  } else if (event.key === "ArrowRight") {
    document.querySelector("#project-next").click();
  }
});

const phoneInput = document.querySelector("[name=phone]");

phoneInput.addEventListener("input", () => {
  let digits = phoneInput.value.replace(/\D/g, "");
  if (digits.length > 10 && digits.startsWith("91")) digits = digits.slice(2);
  digits = digits.slice(0, 10);
  phoneInput.value = digits.length > 5 ? `${digits.slice(0, 5)} ${digits.slice(5)}` : digits;
});

document.querySelector("#solar-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const data = new FormData(form);
  const message = currentLanguage === "hi"
    ? [
        "नमस्ते Third Eye Tradezone, मैं रूफटॉप सोलर के लिए आवेदन करना चाहता/चाहती हूँ।",
        "",
        `नाम: ${data.get("name")}`,
        `फोन: +91 ${data.get("phone")}`,
        `सोलर प्लांट क्षमता: ${data.get("capacity") || "नहीं बताया"} kW`,
        `घर का पता: ${data.get("address") || "नहीं बताया"}`,
      ].join("\n")
    : [
        "Hello Third Eye Tradezone, I would like to apply for rooftop solar.",
        "",
        `Name: ${data.get("name")}`,
        `Phone: +91 ${data.get("phone")}`,
        `Solar Plant Capacity: ${data.get("capacity") || "Not specified"} kW`,
        `House Address: ${data.get("address") || "Not specified"}`,
      ].join("\n");

  document.querySelector("#form-status").textContent = translateText("Opening WhatsApp…");
  window.open(`https://wa.me/919828275532?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
});

document.querySelector("#copyright-year").textContent = new Date().getFullYear();

renderCampaign();
restartCampaignTimer();
renderProject();

const translationNodes = [];
const textWalker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
  acceptNode(node) {
    const parent = node.parentElement;
    if (!parent || parent.closest("script, style, [data-no-translate]")) return NodeFilter.FILTER_REJECT;
    return hindiTranslations.has(normalizeText(node.nodeValue))
      ? NodeFilter.FILTER_ACCEPT
      : NodeFilter.FILTER_REJECT;
  },
});

while (textWalker.nextNode()) {
  const node = textWalker.currentNode;
  translationNodes.push({ node, english: normalizeText(node.nodeValue) });
}

const translatedAttributes = [];
document.querySelectorAll("[placeholder], [title], [aria-label]").forEach((element) => {
  ["placeholder", "title", "aria-label"].forEach((attribute) => {
    const english = element.getAttribute(attribute);
    if (english && hindiTranslations.has(normalizeText(english))) {
      translatedAttributes.push({ element, attribute, english });
    }
  });
});

function applyLanguage(language, persist = true) {
  currentLanguage = language === "hi" ? "hi" : "en";
  document.documentElement.lang = currentLanguage;

  translationNodes.forEach(({ node, english }) => {
    node.nodeValue = currentLanguage === "hi" ? hindiTranslations.get(english) : english;
  });

  translatedAttributes.forEach(({ element, attribute, english }) => {
    element.setAttribute(attribute, currentLanguage === "hi" ? hindiTranslations.get(normalizeText(english)) : english);
  });

  document.querySelectorAll("[data-language]").forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.language === currentLanguage));
  });

  renderProject();
  if (persist) localStorage.setItem("site-language", currentLanguage);
}

document.querySelectorAll("[data-language]").forEach((button) => {
  button.addEventListener("click", () => applyLanguage(button.dataset.language));
});

applyLanguage(localStorage.getItem("site-language") === "hi" ? "hi" : "en", false);
