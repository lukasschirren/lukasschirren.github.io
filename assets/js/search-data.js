// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-talks",
          title: "Talks",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/talks/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-blog",
          title: "Blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "post-mapping-traffic-camera-blind-spots-near-imperial-college-london",
      
        title: "Mapping Traffic Camera Blind Spots Near Imperial College London",
      
      description: "Using open data, I visualized traffic camera blind spots in Kensington, exploring urban surveillance coverage.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/Traffic-cam-blind-spots/";
        
      },
    },{id: "post-a-website-to-visualise-the-results-from-my-master-thesis",
      
        title: "A website to visualise the results from my master thesis",
      
      description: "Thesis topic was spatial-temporal optimisation for green hydrogen production",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/Hydrogen-in-Laos/";
        
      },
    },{id: "post-episode-7-navigating-global-energy-shifts-energy-futures-lab-imperial-college-london",
      
        title: 'Episode 7 - Navigating Global Energy Shifts | Energy Futures Lab | Imperial... <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.open("https://www.imperial.ac.uk/energy-futures-lab/energy-futures-podcast/episode-7---navigating-global-energy-shifts/", "_blank");
        
      },
    },{id: "news-summer-school-on-electricity-markets-and-advanced-power-transmission-at-scut-in-guangzhou-china",
          title: 'Summer School on electricity markets and advanced power transmission at SCUT in Guangzhou,...',
          description: "",
          section: "News",},{id: "news-completed-my-master-s-degree-with-distinction",
          title: 'Completed my master’s degree with distinction.',
          description: "",
          section: "News",},{id: "news-started-working-as-a-research-associate-with-prof-adam-hawkes",
          title: 'Started working as a Research Associate with Prof Adam Hawkes.',
          description: "",
          section: "News",},{id: "news-a-visit-to-laos-to-present-my-research",
          title: 'A visit to Laos to present my research',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/20250201/";
            },},{id: "news-attended-the-3rd-annual-ukrainian-energy-transition-forum-in-london",
          title: 'Attended the 3rd Annual Ukrainian Energy Transition Forum in London.',
          description: "",
          section: "News",},{id: "news-presented-at-the-international-energy-workshop-2025-in-japan",
          title: 'Presented at the International Energy Workshop 2025 in Japan',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/20250610/";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
