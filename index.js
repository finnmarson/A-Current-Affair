const contentSections = [
  {
    title: "Introduction",
    badge: "Policy Overview",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fa57.foxnews.com%2Fstatic.foxnews.com%2Ffoxnews.com%2Fcontent%2Fuploads%2F2023%2F06%2F1200%2F675%2Fkid-new-2.png%3Fve%3D1%26tl%3D1&f=1&nofb=1&ipt=06ccef760c54c8a56f9b4f9beacc5f9b800f61ccf46d8bfa9169adc6395b8591",
    description: `<p>How the social media ban will affect the youth of Australia.</p>
      <p>Australia is set to implement a controversial ban on social media for constituents under 16, with the aim to protect children from online bullying, cybercrime, and inappropriate content. This law will require companies to verify the age of their users with either AI age verification scans, similar to Apple’s FaceID® and Google’s Face Unlock™, or with a photo of their government issued ID. This law was put into place by Michelle Rowland of the Australian Labor Party in 2024, and goes into effect on December 10, 2025.</p>`,
  },
  {
    title: "Privacy Concerns",
    badge: "Data Risks",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.wallpapersden.com%2Fimage%2Fdownload%2Fanonymous-hacker-working_bGllZ2mUmZqaraWkpJRobWllrWdpZWU.jpg&f=1&nofb=1&ipt=75f4566bd2b089548a6f6e6966ffc5e44481f4bd266d7d4febc4aae5fbc30b16",
    description: `<p>Privacy is a serious concern in the social media ban, especially as companies turn to third party software, like K-ID which Discord, Quora, and Another Axiom use for facial age verification. Discord was recently a target of a data breach which leaked over 700,000 photo IDs uploaded for verification, and 2.1 million age verification selfies, processed by K-ID¹.</p>
      <p>Other concerns include governments abusing the collected IDs to associate people with their online activities, removing the ability for an individual to access the internet anonymously, in situations where they may fall under scrutiny or criminal investigation for their use for example; Whistleblowers, especially of government policies² or of large companies³; people in marginalized communities (LGBTQ, Aboriginal/Native, Immigrants, Disabled); or those in countries where internet is heavily censored⁴ or controlled⁵. These concerns are heightened by the increasing rise in authoritarian governments worldwide and the introduction of invasive Digital ID policies in places like the UK, Australia and the USA, which will be used for a vast array of services like Medicare, Banking, Age and Identity verification for online purchases. These authoritarian policies leverage biometric data, like fingerprints, facial scans, vocal pattern analysis or iris scans.</p>`,
  },
  {
    title: "Social Effects",
    badge: "Gen Z & Gen Alpha",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmagazine.libarts.colostate.edu%2Fwp-content%2Fuploads%2Fsites%2F28%2F2019%2F04%2FiPhone-with-collection-of-social-media-apps.jpg&f=1&nofb=1&ipt=ceae098210333d17070663682664c1b80f1319861e49698b90a21aa7bb2bdc89",
    description: `<p>Another pressing issue plaguing the social media ban is the social impact on Gen Z. Gen Z are by far the most tech literate generation and use their phones especially for news access, current affairs, entertainment, and socialization. The Covid-19 Pandemic drastically affected the social lives of Gen Z, mostly by pushing them to social media like TikTok, Instagram, Snapchat, Discord, etc. The social media ban for under 16s would cut off vast amounts of younger teens from socialization they may have had before.</p>
      <p>Gen Z often consumes news through social media, from international organizations like the Guardian, Al Jazeera, The BBC, CNBC, ABC, etc. These services often host short form content about pressing current events which are more appealing to a younger audience in comparison to an often wordy and difficult to comprehend article.</p>
      <p>Other issues arise such as services like Github/Git, Steam, and even VPN providers like Proton, Mullvad, and Private Internet Access getting roped up in the ban even though none of these services are algorithmic social media like Instagram or TikTok. This sets a precedent for the government to restrict access to even more services.</p>`,
  },
  {
    title: "Conclusion",
    badge: "Final Thoughts",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcampusguard.com%2Fwp-content%2Fuploads%2FTeen-Phone-scaled.jpeg&f=1&nofb=1&ipt=88f00eaef120e3fd7c91c80e50953227db19471b9b184a4d2f4d00de7911d176",
    description: `<p>To conclude, the under 16 social media ban is well-intentioned but the implementation poses serious concerns over the wellbeing of Gen-Z and to a lesser extent, Gen-Alpha — and the implementation of the age verification features which have already been proven unsafe overseas⁷ which pose risks to personal safety, and from which arise ethical concerns of government overreach — tying an identity to online activity.</p>`,
  },
];

document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".container");

  contentSections.forEach((item, index) => {
    const section = document.createElement("section");
    section.className = "section";
    section.style.transitionDelay = `${index * 0.1}s`;
    section.innerHTML = `
      <div class="image-container">
        <img src="${item.image}" alt="${item.title}">
      </div>
      <div class="badge">${item.badge}</div>
      <h1 class="title">${item.title}</h1>
      <div class="beam-content">
        ${item.description}
      </div>
    `;
    container.appendChild(section);
  });

  // Reveal on scroll
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("visible");
      });
    },
    { threshold: 0.1 },
  );

  document.querySelectorAll(".section").forEach((el) => observer.observe(el));
});

// --- Scroll Tracer Logic ---
const tracerLine = document.querySelector(".tracer-line");

window.addEventListener("scroll", () => {
  const scrollPercent =
    window.scrollY / (document.body.scrollHeight - window.innerHeight);
  tracerLine.style.height = `${scrollPercent * 100}%`;
});
