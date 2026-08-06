const campaigns = [
  {
    image: "assets/images/hero-namo.png",
    alt: "PM Surya Ghar: Muft Bijli Yojana",
  },
  {
    image: "assets/images/hero-namo-again.jpg",
    alt: "Namo Again 2029 solar campaign",
  },
  {
    image: "assets/images/hero-pm-surya-ghar.png",
    alt: "PM Surya Ghar solar campaign",
  },
];

const projects = [
  ["project-01.jpg", "Shri Bishan Chand Sharma", "Happy Consumer Kota"],
  ["project-02.jpg", "5 kw Shiv Nagar Police line", "Project Under PM Surya Ghar"],
  ["project-03.jpg", "5 Kw Shagaun Villa Kota", "Project Under PM Surya Ghar"],
  ["project-04.jpeg", "5 KW Behind Holy family Hospital Borkheda", "Project Under PM Surya Ghar"],
  ["project-05.jpeg", "5 KW Shagun Villa Kota", "Project Under PM Surya Ghar Scheme"],
  ["project-06.jpg", "6 KW Gopal Vihar Kota", "Project Under PM Surya Ghar Scheme"],
  ["project-07.jpg", "5 Kw Roteda Road Railway Station Kota", "Project Under PM Surya Ghar Scheme"],
  ["project-08.jpeg", "5 KW", "Project Under PM Surya Ghar Scheme"],
  ["project-09.jpeg", "5 KW", "Project Under PM Surya Ghar Scheme"],
  ["project-10.jpg", "5 Kw Babu Lal Sahu Vigyan Nagar Kota", "Project Under PM Surya Ghar Scheme"],
  ["project-11.jpg", "5 KW Nomana Khan Borkehda", "Project Under PM Surya Ghar Scheme"],
  ["project-12.jpeg", "5 KW Pramod Sharma Baran", "Project Under PM Surya Ghar Scheme"],
  ["project-13.jpeg", "3.5 Kw Purushottam Nama Baran Raj", "Project Under PM Surya Ghar Scheme"],
  ["project-14.jpeg", "5 KW Shagun Villa Kota", "Under PM Surya Ghar Scheme"],
  ["project-15.jpg", "5KW under PM Surya Ghar Yojana", "Thegda Road, Kota"],
  ["project-16.jpg", "3KW under PM Surya Ghar Yojana", "Ajay Ahuja Nagar, Kota"],
  ["project-17.jpg", "5KW under PM Surya Ghar Yojana", "Vasant Vihar, Kota"],
  ["project-18.jpg", "5 KW PM Surya Ghar Scheme", "Lokesh Kumar Meena, Silicon City, Khunadi, Kota Raj."],
  ["project-19.jpg", "5 KW PM Surya Ghar Scheme", "BC Meena, Parshavnath City, Khunadi, Kota Raj."],
  ["project-20.jpeg", "5 KW PM Surya Ghar Scheme", "Om Prakash Khatri, Borkheda New Pragati School, Kota Raj."],
  ["project-21.jpg", "5 KW PM Surya Ghar Scheme", "Rajeev Choudhary, Parshavnath City, Khunadi, Kota Raj."],
  ["project-22.jpg", "6 KW PM Surya Ghar Scheme", "Nand Kishore, Shri Ram Colony, Borkheda, Kota Rajasthan"],
  ["project-23.jpg", "8 KW PM Surya Ghar Scheme", "Subash Chand Meena, Vaishali Nagar Sogaria, Kota Rajasthan"],
  ["project-24.jpg", "5 kw PM Surya Ghar Scheme", "Sumit Hawa, New Colony Bundi Rajasthan"],
  ["project-25.jpg", "5 KW PM Surya Ghar", "Sukhwant Singh, Ranjeet Colony Station, Kota Raj."],
  ["project-26.jpg", "10KW Solar Power Plant", "Borkheda, Kota"],
  ["project-27.jpg", "10KW Industrial Solar Power Plant", "Prem Nagar, Kota"],
  ["project-28.jpg", "15KW Solar Plant", "Landmark, Near Allen Sankalp, Kota"],
  ["project-29.jpg", "30 KW Baran Rajasthan", ""],
  ["project-30.jpg", "5KW Under PM Surya Ghar Scheme, Kota", ""],
  ["project-31.jpg", "5 KW Under PM Surya Ghar Scheme", ""],
  ["project-32.jpg", "15 KW BPCL PETROL PUMP KOTA", ""],
  ["project-33.jpg", "5KW On-Grid Under PM Surya Ghar, Khunadi Kota", "Adani Bifacial 535 Watt panel"],
  ["project-34.jpg", "5 KW Installation", ""],
  ["project-35.jpg", "8KW", ""],
  ["project-36.jpg", "Bifacial Modules", ""],
  ["project-37.jpg", "Structure Pre GI as per MNRE guidelines", ""],
  ["project-38.jpg", "8KW Gopal Vihar Kota Rajasthan", ""],
].map(([file, title, description]) => ({
  image: `assets/images/projects/${file}`,
  title,
  description,
}));

const campaignImage = document.querySelector("#campaign-image");
const campaignDots = document.querySelector("#campaign-dots");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
let campaignIndex = 0;
let campaignTimer;

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
let projectIndex = 0;

function renderProject() {
  const project = projects[projectIndex];
  projectImage.src = project.image;
  projectImage.alt = project.description ? `${project.title}. ${project.description}` : project.title;
  projectTitle.textContent = project.title;
  projectDescription.textContent = project.description;
  projectCounter.textContent = `${projectIndex + 1}/${projects.length}`;
}

document.querySelector("#project-previous").addEventListener("click", () => {
  projectIndex = (projectIndex - 1 + projects.length) % projects.length;
  renderProject();
});

document.querySelector("#project-next").addEventListener("click", () => {
  projectIndex = (projectIndex + 1) % projects.length;
  renderProject();
});

document.addEventListener("keydown", (event) => {
  const carousel = document.querySelector(".project-carousel");
  if (!carousel.contains(document.activeElement)) return;

  if (event.key === "ArrowLeft") {
    document.querySelector("#project-previous").click();
  } else if (event.key === "ArrowRight") {
    document.querySelector("#project-next").click();
  }
});

document.querySelector("#solar-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const data = new FormData(form);
  const message = [
    "Hello Third Eye Tradezone, I would like to apply for rooftop solar.",
    "",
    `Name: ${data.get("name")}`,
    `Phone: ${data.get("phone")}`,
    `Solar Plant Capacity: ${data.get("capacity") || "Not specified"} kW`,
    `House Address: ${data.get("address") || "Not specified"}`,
  ].join("\n");

  document.querySelector("#form-status").textContent = "Opening WhatsApp…";
  window.open(`https://wa.me/919828275532?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
});

document.querySelector("#copyright-year").textContent = new Date().getFullYear();

renderCampaign();
restartCampaignTimer();
renderProject();
