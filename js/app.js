// ====================================================
//  FANCLUB — App Logic (app.js)
//  Routing · Pages · Interactions · State
// ====================================================

// ======= SVG ICONS =======
const SVG = {
  home:       `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
  homeFill:   `<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
  explore:    `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>`,
  exploreFill:`<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" fill="#000" opacity="0.3"/></svg>`,
  live:       `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><line x1="12" y1="20" x2="12.01" y2="20" stroke-width="3"/></svg>`,
  liveFill:   `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><line x1="12" y1="20" x2="12.01" y2="20" stroke-width="4"/></svg>`,
  reward:     `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 12 20 22 4 22 4 12"/><rect x="2" y="7" width="20" height="5"/><path d="M12 22V7"/><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/></svg>`,
  rewardFill: `<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 12 20 22 4 22 4 12"/><rect x="2" y="7" width="20" height="5"/><path d="M12 22V7"/><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/></svg>`,
  profile:    `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
  profileFill:`<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
  search:     `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`,
  bell:       `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>`,
  back:       `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>`,
  heart:      `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`,
  heartFill:  `<svg width="18" height="18" viewBox="0 0 24 24" fill="#ef4444" stroke="#ef4444" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`,
  comment:    `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`,
  share:      `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>`,
  check:      `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><polyline points="20 6 9 17 4 12"/></svg>`,
  fire:       `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>`,
  users:      `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
  pin:        `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
  plus:       `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>`,
  star:       `<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="1"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
  zap:        `<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="1"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
  ticket:     `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.5)" stroke-width="1.5" stroke-linecap="round"><path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/><path d="M13 5v2"/><path d="M13 17v2"/><path d="M13 11v2"/></svg>`,
  trophy:     `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.5)" stroke-width="1.5" stroke-linecap="round"><polyline points="8 21 12 17 16 21"/><line x1="12" y1="17" x2="12" y2="11"/><path d="M7 4H4a2 2 0 0 0-2 2 5 5 0 0 0 5 5"/><path d="M17 4h3a2 2 0 0 1 2 2 5 5 0 0 1-5 5"/><rect x="7" y="4" width="10" height="7" rx="2"/></svg>`,
  edit2:      `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>`
};

// ======= STATE =======
const STATE = {
  page: 'home',
  pageHistory: [], // stack of {page, params} for proper back navigation
  params: {},
  followedTeams: new Set(['arsenal', 'liverpool']),
  joinedCommunities: new Set(['arsenal-fc-official', 'the-kop']),
  likedPosts: new Set(),
  posts: null, // will init from DATA
  exploreTab: 'standings',
  exploreSearch: '',
  fixtureFilter: 'all',
  profileTab: 'posts',
  communityTab: 'feed',
  articleLiked: false
};

// ======= INIT STATE =======
function initState() {
  STATE.posts = DATA.posts.map(p => ({ ...p, likes: p.likes }));
  try {
    const saved = JSON.parse(localStorage.getItem('fc_state') || '{}');
    if (saved.followedTeams)    STATE.followedTeams    = new Set(saved.followedTeams);
    if (saved.joinedCommunities) STATE.joinedCommunities = new Set(saved.joinedCommunities);
    if (saved.likedPosts)        STATE.likedPosts        = new Set(saved.likedPosts);
  } catch(e) {}
}

function saveState() {
  try {
    localStorage.setItem('fc_state', JSON.stringify({
      followedTeams: [...STATE.followedTeams],
      joinedCommunities: [...STATE.joinedCommunities],
      likedPosts: [...STATE.likedPosts]
    }));
  } catch(e) {}
}

// ======= HELPERS =======
function fmtNum(n) {
  if (typeof n === 'string') return n;
  if (n >= 1000000) return (n / 1000000).toFixed(1) + 'M';
  if (n >= 1000)    return (n / 1000).toFixed(1) + 'K';
  return String(n);
}

function getTeam(id) { return DATA.teams.find(t => t.id === id); }
function getCommunity(id) { return DATA.communities.find(c => c.id === id); }
function getPost(id) { return STATE.posts.find(p => p.id === id); }

function crest(teamId, size = 40) {
  const t = getTeam(teamId);
  if (!t) return `<div style="width:${size}px;height:${size}px;border-radius:50%;background:#333;flex-shrink:0;"></div>`;
  const fs = Math.round(size * 0.3);
  return `<div class="crest-circle" style="width:${size}px;height:${size}px;background:${t.bgGradient};font-size:${fs}px;">${t.shortName}</div>`;
}

function avatar(name, size = 36, color = null) {
  const initials = name.split(' ').map(w => w[0] || '').join('').substring(0, 2).toUpperCase();
  const palette = ['#22c55e','#3b82f6','#8b5cf6','#ef4444','#f59e0b','#06b6d4','#ec4899','#14b8a6'];
  const bg = color || palette[name.charCodeAt(0) % palette.length];
  const fs = Math.round(size * 0.36);
  return `<div class="avatar-circle" style="width:${size}px;height:${size}px;background:${bg};font-size:${fs}px;">${initials}</div>`;
}

// ======= NAVIGATION =======
function navigate(page, params = {}, resetHistory = false) {
  if (resetHistory) {
    STATE.pageHistory = [];
  } else {
    // Push current page onto the history stack before navigating away
    STATE.pageHistory.push({ page: STATE.page, params: { ...STATE.params } });
  }
  STATE.page = page;
  STATE.params = params;
  performTransition();
}

function goBack() {
  if (STATE.pageHistory.length > 0) {
    // Pop the last page from the stack and restore it
    const prev = STATE.pageHistory.pop();
    STATE.page = prev.page;
    STATE.params = { ...prev.params };
  } else {
    STATE.page = 'home';
    STATE.params = {};
    STATE.pageHistory = [];
  }
  performTransition();
}

function performTransition() {
  const container = document.getElementById('page-container');
  container.style.transition = 'opacity 0.12s ease, transform 0.12s ease';
  container.style.opacity = '0';
  container.style.transform = 'translateY(6px)';

  setTimeout(() => {
    renderPage();
    updateNav();
    renderHeader();
    container.scrollTop = 0;

    container.style.transition = 'none';
    container.style.opacity = '0';
    container.style.transform = 'translateY(-6px)';

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        container.style.transition = 'opacity 0.2s ease, transform 0.2s ease';
        container.style.opacity = '1';
        container.style.transform = 'translateY(0)';
      });
    });
  }, 130);
}

function updateNav() {
  const mainPages = ['home', 'explore', 'live', 'reward', 'profile'];
  document.querySelectorAll('.nav-item').forEach(btn => {
    const isActive = btn.dataset.page === STATE.page ||
      (btn.dataset.page === 'home' && !mainPages.includes(STATE.page));
    btn.classList.toggle('active', isActive);
  });
}

// ======= HEADER =======
function renderHeader() {
  const el = document.getElementById('app-header');
  const subPages = ['club', 'community', 'article'];
  if (subPages.includes(STATE.page)) {
    let title = '';
    if (STATE.page === 'club') {
      const t = getTeam(STATE.params.teamId);
      title = t ? t.name : 'Club';
    } else if (STATE.page === 'community') {
      const c = getCommunity(STATE.params.communityId);
      title = c ? c.name : 'Community';
      if (title.length > 22) title = title.substring(0, 20) + '…';
    } else if (STATE.page === 'article') {
      title = 'Article';
    }
    el.innerHTML = `
      <div class="header-back-bar">
        <button class="btn-icon-ghost" onclick="goBack()" aria-label="Go back">${SVG.back}</button>
        <span class="header-back-title">${title}</span>
        <button class="btn-icon-ghost" style="opacity:0;pointer-events:none">${SVG.back}</button>
      </div>`;
  } else {
    el.innerHTML = `
      <div class="header-logo" onclick="navigate('home',{},true)" style="cursor:pointer">
        <span class="logo-wordmark">FANCLUB</span>
      </div>
      <div class="header-actions">
        <button class="btn-icon-ghost" onclick="navigate('explore',{},true)" aria-label="Search">${SVG.search}</button>
        <button class="btn-icon-ghost" style="position:relative" aria-label="Notifications">
          ${SVG.bell}
          <span class="notif-badge">3</span>
        </button>
      </div>`;
  }
}

// ======= NAV ICONS =======
function renderNavIcons() {
  const icons = {
    home:    [SVG.home,    SVG.homeFill],
    explore: [SVG.explore, SVG.exploreFill],
    live:    [SVG.live,    SVG.liveFill],
    reward:  [SVG.reward,  SVG.rewardFill],
    profile: [SVG.profile, SVG.profileFill]
  };
  Object.entries(icons).forEach(([page, [off, on]]) => {
    const el = document.getElementById(`nav-icon-${page}`);
    if (el) el.innerHTML = off; // Start with inactive
  });
}

// ======= ROUTE =======
function renderPage() {
  const container = document.getElementById('page-container');
  switch (STATE.page) {
    case 'home':      renderHome(container); break;
    case 'explore':   renderExplore(container); break;
    case 'live':      renderLive(container); break;
    case 'reward':    renderReward(container); break;
    case 'profile':   renderProfile(container); break;
    case 'club':      renderClub(container); break;
    case 'community': renderCommunity(container); break;
    case 'article':   renderArticle(container); break;
    default:          renderHome(container);
  }
}

// ==========================================
//  HOME PAGE (v2 — match-sports design)
// ==========================================
function renderHome(container) {
  const hm = DATA.homeMatches;
  const f = hm.featured;

  // ── Featured Hero Match ──
  const heroHTML = `
    <div class="featured-hero" onclick="navigate('live',{},true)">
      <div class="hero-bg" style="background-image:url('${f.image}');"></div>
      <div class="hero-split-left" style="background:linear-gradient(135deg,${f.homeColor}DD 0%,${f.homeColor}55 50%,transparent 100%)"></div>
      <div class="hero-split-right" style="background:linear-gradient(315deg,${f.awayColor}CC 0%,${f.awayColor}44 50%,transparent 100%)"></div>
      <div class="hero-content">
        <div class="hero-comp-row">
          <span class="hero-comp-badge">${f.competitionIcon} ${f.competition}</span>
        </div>
        <div class="hero-teams-row">
          <div class="hero-team">
            <div class="crest-circle" style="width:44px;height:44px;background:${f.homeColor}55;border:2px solid ${f.homeColor}88;font-size:12px;font-weight:800">${f.homeShort}</div>
            <div class="hero-team-name">${f.homeTeam}</div>
          </div>
          <div class="hero-date-chip"><span>${f.date}</span></div>
          <div class="hero-team hero-team-right">
            <div class="crest-circle" style="width:44px;height:44px;background:${f.awayColor}44;border:2px solid ${f.awayColor}77;font-size:12px;font-weight:800">${f.awayShort}</div>
            <div class="hero-team-name">${f.awayTeam}</div>
          </div>
        </div>
      </div>
    </div>`;

  // ── Match this Week ──
  const matchWeekHTML = `
    <div class="section-header">
      <span class="section-title">Match this Week</span>
      <button class="see-all" onclick="navigate('live',{},true)">See All</button>
    </div>
    <div class="home-h-scroll">
      ${hm.matchWeek.map(m => `
        <div class="mw-card" style="background-image:url('${m.image}')" onclick="navigate('live',{},true)">
          <div class="mw-overlay" style="background:linear-gradient(to top,${m.color}F0 0%,${m.color}88 40%,transparent 100%)"></div>
          <div class="mw-comp" style="background:${m.compColor}">${m.comp}</div>
          <div class="mw-body">
            <div class="mw-teams">${m.home} <span class="mw-vs">VS</span> ${m.away}</div>
            <div class="mw-time">${m.date} · ${m.time}</div>
          </div>
        </div>`).join('')}
    </div>`;

  // ── Live Scores ──
  const liveScoresHTML = `
    <div class="section-header">
      <span class="section-title">Live Scores</span>
      <button class="see-all" onclick="navigate('live',{},true)">See All</button>
    </div>
    <div class="home-h-scroll">
      ${hm.liveScores.map(s => `
        <div class="lsc-card" onclick="navigate('live',{},true)">
          <div class="lsc-top"><span class="lsc-live">LIVE</span><span class="lsc-comp-tag">${s.comp}</span></div>
          <div class="lsc-body">
            <div class="lsc-side">
              ${s.homeId ? crest(s.homeId, 30) : `<div class="crest-circle" style="width:30px;height:30px;font-size:8px;background:#333;flex-shrink:0">${(s.home.substring(0,3)).toUpperCase()}</div>`}
              <span class="lsc-name">${s.home}</span>
            </div>
            <div class="lsc-center">
              <div class="lsc-scoreline">${s.homeScore} <span class="lsc-colon">:</span> ${s.awayScore}</div>
              <div class="lsc-mins">${s.minute} mins</div>
            </div>
            <div class="lsc-side lsc-side-r">
              ${s.awayId ? crest(s.awayId, 30) : `<div class="crest-circle" style="width:30px;height:30px;font-size:8px;background:#333;flex-shrink:0">${(s.away.substring(0,3)).toUpperCase()}</div>`}
              <span class="lsc-name">${s.away}</span>
            </div>
          </div>
        </div>`).join('')}
    </div>`;

  // ── Match Highlights ──
  const highlightsHTML = `
    <div class="section-header">
      <span class="section-title">Match Highlight</span>
      <button class="see-all" onclick="showToast('Highlights coming soon!')">See All</button>
    </div>
    <div class="home-h-scroll">
      ${hm.highlights.map(h => `
        <div class="hl-card" style="background-image:url('${h.image}')" onclick="showToast('🎬 Video player coming soon!')">
          <div class="hl-overlay" style="background:linear-gradient(to top,rgba(0,0,0,0.88) 0%,${h.color}66 100%)"></div>
          <div class="hl-body">
            <span class="hl-comp">${h.comp}</span>
            <div class="hl-teams">${h.home}<br><span style="opacity:0.6;font-size:10px">VS</span> ${h.away}</div>
          </div>
          <div class="hl-duration">${h.duration}</div>
        </div>`).join('')}
    </div>`;

  // ── Match Preview ──
  const previewsHTML = `
    <div class="section-header">
      <span class="section-title">Match Preview</span>
      <button class="see-all" onclick="navigate('live',{},true)">See All</button>
    </div>
    <div class="home-h-scroll">
      ${hm.previews.map(p => `
        <div class="hl-card" style="background-image:url('${p.image}')" onclick="navigate('live',{},true)">
          <div class="hl-overlay" style="background:linear-gradient(to top,rgba(0,0,0,0.88) 0%,${p.color}66 100%)"></div>
          <div class="hl-body">
            <span class="hl-comp">${p.comp}</span>
            <div class="hl-teams">${p.home}<br><span style="opacity:0.6;font-size:10px">VS</span> ${p.away}</div>
          </div>
          <div class="hl-duration">${p.duration}</div>
        </div>`).join('')}
    </div>
    <div style="height:16px"></div>`;

  container.innerHTML = `
    <div class="home-page">
      ${heroHTML}
      ${matchWeekHTML}
      ${liveScoresHTML}
      ${highlightsHTML}
      ${previewsHTML}
      <button class="fab" id="fab-create" aria-label="Create post">${SVG.plus}</button>
    </div>
  `;
}

function postCardHTML(p) {
  const community = getCommunity(p.communityId);
  const liked = STATE.likedPosts.has(p.id);
  const team = p.teamId ? getTeam(p.teamId) : null;
  const authorBg = p.authorColor || '#22c55e';

  return `
    <div class="post-card" data-post-id="${p.id}">
      <div class="post-header">
        ${avatar(p.authorName, 36, authorBg)}
        <div class="post-author-info">
          <div class="post-author-name">${p.authorName}</div>
          <div class="post-meta">
            ${community ? `<span class="post-community-tag">${SVG.fire} ${community.name.length > 18 ? community.name.substring(0,16)+'…' : community.name}</span>` : ''}
            ${p.timestamp}
          </div>
        </div>
        ${team ? crest(team.id, 28) : ''}
      </div>
      <div class="post-body" onclick="navigate('article',{postId:'${p.id}'})">
        ${p.title ? `<div class="post-title">${p.title}</div>` : ''}
        <div class="post-excerpt">${p.excerpt}</div>
      </div>
      ${p.image ? `
        <img class="post-image" src="${p.image}" alt="${p.title}" loading="lazy"
          onclick="navigate('article',{postId:'${p.id}'})"
          onerror="this.style.display='none'">
      ` : ''}
      <div class="post-footer">
        <button class="post-action ${liked ? 'liked' : ''}" onclick="toggleLike('${p.id}',this)">
          ${liked ? SVG.heartFill : SVG.heart}
          <span class="like-count">${fmtNum(liked ? p.likes + 1 : p.likes)}</span>
        </button>
        <button class="post-action" onclick="navigate('article',{postId:'${p.id}'})">
          ${SVG.comment}
          <span>${fmtNum(p.comments)}</span>
        </button>
        <div class="post-action-spacer"></div>
        <button class="post-action" onclick="showToast('Copied link to clipboard!')">
          ${SVG.share}
        </button>
      </div>
    </div>
  `;
}

// ==========================================
//  EXPLORE PAGE
// ==========================================
function renderExplore(container) {
  container.innerHTML = `
    <div class="explore-page">
      <div class="search-bar-wrap">
        <div class="search-bar">
          ${SVG.search}
          <input type="search" id="explore-search" placeholder="Search teams, players, communities…"
            value="${STATE.exploreSearch}" autocomplete="off" spellcheck="false"
            aria-label="Search">
        </div>
      </div>
      <div class="tabs-row">
        <button class="tab-pill ${STATE.exploreTab==='standings'?'active':''}" onclick="setExploreTab('standings')">Standings</button>
        <button class="tab-pill ${STATE.exploreTab==='news'?'active':''}" onclick="setExploreTab('news')">News Update</button>
        <button class="tab-pill ${STATE.exploreTab==='teams'?'active':''}" onclick="setExploreTab('teams')">Teams</button>
        <button class="tab-pill ${STATE.exploreTab==='communities'?'active':''}" onclick="setExploreTab('communities')">Communities</button>
      </div>
      <div id="explore-content"></div>
    </div>
  `;

  const searchInput = document.getElementById('explore-search');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      STATE.exploreSearch = e.target.value;
      renderExploreContent();
    });
    searchInput.addEventListener('focus', () => {
      if (STATE.exploreTab === 'standings' && !STATE.exploreSearch) {
        setExploreTab('teams');
      }
    });
  }

  renderExploreContent();
}

function setExploreTab(tab) {
  STATE.exploreTab = tab;
  document.querySelectorAll('.tab-pill').forEach(el => {
    el.classList.toggle('active', el.textContent.toLowerCase().replace(' ', '') === tab ||
      (tab === 'standings' && el.textContent === 'Standings') ||
      (tab === 'news' && el.textContent === 'News Update') ||
      (tab === 'teams' && el.textContent === 'Teams') ||
      (tab === 'communities' && el.textContent === 'Communities'));
  });
  renderExploreContent();
}

function renderExploreContent() {
  const el = document.getElementById('explore-content');
  if (!el) return;
  const q = STATE.exploreSearch.toLowerCase().trim();

  if (q) {
    renderSearchResults(el, q);
    return;
  }

  switch (STATE.exploreTab) {
    case 'standings':   el.innerHTML = standingsHTML(); break;
    case 'news':        el.innerHTML = exploreNewsHTML(); break;
    case 'teams':       el.innerHTML = exploreTeamsHTML(); break;
    case 'communities': el.innerHTML = exploreCommunitiesHTML(); break;
  }
}

function renderSearchResults(el, q) {
  const teams = DATA.teams.filter(t =>
    t.name.toLowerCase().includes(q) || t.fullName.toLowerCase().includes(q) || t.city.toLowerCase().includes(q));
  const communities = DATA.communities.filter(c =>
    c.name.toLowerCase().includes(q) || c.category.toLowerCase().includes(q));
  const posts = STATE.posts.filter(p =>
    p.title.toLowerCase().includes(q) || p.excerpt.toLowerCase().includes(q) || p.authorName.toLowerCase().includes(q));

  let html = '';

  if (teams.length) {
    html += `<div class="section-header"><span class="section-title">Clubs</span></div><div style="padding:0 16px">`;
    html += teams.map(t => `
      <div class="result-item" onclick="navigate('club',{teamId:'${t.id}'})">
        ${crest(t.id, 40)}
        <div class="result-info">
          <div class="result-name">${t.name}</div>
          <div class="result-meta">${t.league} · ${fmtNum(parseInt(t.followers))} followers</div>
        </div>
        <div class="result-action">
          <button class="btn-follow ${STATE.followedTeams.has(t.id)?'following':'not-following'}"
            onclick="event.stopPropagation();toggleFollow('${t.id}',this)">
            ${STATE.followedTeams.has(t.id) ? 'Following' : '+ Follow'}
          </button>
        </div>
      </div>`).join('');
    html += '</div>';
  }

  if (communities.length) {
    html += `<div class="section-header"><span class="section-title">Communities</span></div><div style="padding:0 16px">`;
    html += communities.slice(0, 5).map(c => `
      <div class="result-item" onclick="navigate('community',{communityId:'${c.id}'})">
        <div class="crest-circle" style="width:40px;height:40px;background:${c.color};font-size:13px;">${SVG.users}</div>
        <div class="result-info">
          <div class="result-name">${c.name}</div>
          <div class="result-meta">${fmtNum(c.members)} members · ${c.activity} activity</div>
        </div>
        <div class="result-action">
          <button class="btn-join ${STATE.joinedCommunities.has(c.id)?'joined':'not-joined'}"
            onclick="event.stopPropagation();toggleJoin('${c.id}',this)">
            ${STATE.joinedCommunities.has(c.id) ? 'Joined' : 'Join'}
          </button>
        </div>
      </div>`).join('');
    html += '</div>';
  }

  if (posts.length) {
    html += `<div class="section-header"><span class="section-title">Posts</span></div><div style="padding:0 16px 16px">`;
    html += posts.slice(0, 4).map(p => `
      <div class="result-item" onclick="navigate('article',{postId:'${p.id}'})">
        ${p.thumb ? `<img src="${p.thumb}" style="width:48px;height:48px;border-radius:8px;object-fit:cover;flex-shrink:0" alt="" onerror="this.style.display='none'">` : `<div style="width:48px;height:48px;border-radius:8px;background:#2a2a2a;flex-shrink:0;display:flex;align-items:center;justify-content:center;color:#52525b;">${SVG.fire}</div>`}
        <div class="result-info">
          <div class="result-name" style="font-size:13px;white-space:normal;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;">${p.title}</div>
          <div class="result-meta">${p.authorName} · ${p.timestamp}</div>
        </div>
      </div>`).join('');
    html += '</div>';
  }

  if (!teams.length && !communities.length && !posts.length) {
    html = `<div style="text-align:center;padding:48px 16px;color:#52525b">
      <div style="font-size:40px;margin-bottom:12px">🔍</div>
      <div style="font-size:15px;font-weight:600;color:#a1a1aa;margin-bottom:6px">No results for "${STATE.exploreSearch}"</div>
      <div style="font-size:13px">Try searching for a team, community, or player</div>
    </div>`;
  }

  el.innerHTML = html;
}

function standingsHTML() {
  const rows = DATA.standings.table.map(row => `
    <tr>
      <td class="zone-${row.zone}">${row.pos}</td>
      <td>
        <div style="display:flex;align-items:center;gap:8px">
          ${row.teamId ? crest(row.teamId, 22) : `<div style="width:22px;height:22px;border-radius:50%;background:#333;flex-shrink:0;"></div>`}
          <span class="standings-team-name" onclick="${row.teamId ? `navigate('club',{teamId:'${row.teamId}'})` : ''}" style="${row.teamId ? 'cursor:pointer;color:#22c55e' : ''}">${row.name}</span>
        </div>
      </td>
      <td>${row.p}</td>
      <td>${row.w}</td>
      <td>${row.d}</td>
      <td>${row.l}</td>
      <td>${row.gf}/${row.ga}</td>
      <td>${row.gd > 0 ? '+' : ''}${row.gd}</td>
      <td class="points">${row.pts}</td>
    </tr>
  `).join('');

  return `
    <div style="background:#1e1e1e;margin:0 16px;border-radius:16px;border:1px solid #2a2a2a;overflow:hidden;margin-bottom:12px">
      <div style="padding:12px 16px 4px;display:flex;align-items:center;justify-content:space-between">
        <span style="font-family:'Space Grotesk',sans-serif;font-size:15px;font-weight:700;color:#f5f5f5">${DATA.standings.competition}</span>
        <span style="font-size:12px;color:#52525b">${DATA.standings.season}</span>
      </div>
      <div class="standings-table-wrap">
        <table class="standings-table">
          <thead>
            <tr>
              <th></th><th style="text-align:left;padding-left:8px">Team</th>
              <th>P</th><th>W</th><th>D</th><th>L</th>
              <th>GF/GA</th><th>GD</th><th>PTS</th>
            </tr>
          </thead>
          <tbody>${rows}</tbody>
        </table>
      </div>
      <div class="standings-key">
        <div class="key-item"><div class="key-dot" style="background:#22c55e"></div>UEFA Champions League</div>
        <div class="key-item"><div class="key-dot" style="background:#3b82f6"></div>UEFA Europa League</div>
        <div class="key-item"><div class="key-dot" style="background:#ef4444"></div>Relegation</div>
      </div>
    </div>
    <button class="see-more-btn" onclick="showToast('Full standings coming soon!')">See More</button>
    <div class="section-header"><span class="section-title">🔥 Trending Communities</span></div>
    <div class="trending-section">
      <div class="trending-grid">
        ${DATA.communities.slice(0, 6).map(c => `
          <div class="trending-community-card" onclick="navigate('community',{communityId:'${c.id}'})">
            <div class="tc-accent-bar" style="background:${c.color}"></div>
            <div class="tc-name">${c.name}</div>
            <div class="tc-members">${fmtNum(c.members)} members</div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function exploreNewsHTML() {
  return `
    <div style="background:#1e1e1e;margin:0 16px 16px;border-radius:16px;border:1px solid #2a2a2a;overflow:hidden">
      <div class="section-header"><span class="section-title">📰 Trending News</span><button class="see-all" onclick="showToast('Full news feed coming soon!')">See All</button></div>
      ${DATA.posts.filter(p => p.image).slice(0, 6).map(p => `
        <div class="news-card" onclick="navigate('article',{postId:'${p.id}'})">
          <img class="news-thumb" src="${p.thumb}" alt="${p.title}" loading="lazy" onerror="this.style.display='none'">
          <div class="news-content">
            <div class="news-title">${p.title}</div>
            <div style="display:flex;align-items:center;gap:12px">
              <div class="news-stats">
                <div class="news-stat">${SVG.heart} ${fmtNum(p.likes)}</div>
                <div class="news-stat">${SVG.comment} ${fmtNum(p.comments)}</div>
              </div>
            </div>
            <div class="news-timestamp">${p.timeDisplay}</div>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

function exploreTeamsHTML() {
  return `
    <div style="padding:0 16px 16px">
      ${DATA.teams.map(t => `
        <div class="result-item" onclick="navigate('club',{teamId:'${t.id}'})">
          ${crest(t.id, 44)}
          <div class="result-info">
            <div class="result-name">${t.fullName}</div>
            <div class="result-meta">${t.league} · ${fmtNum(t.followers)} followers</div>
          </div>
          <button class="btn-follow ${STATE.followedTeams.has(t.id)?'following':'not-following'}"
            onclick="event.stopPropagation();toggleFollow('${t.id}',this)">
            ${STATE.followedTeams.has(t.id) ? 'Following' : '+ Follow'}
          </button>
        </div>
      `).join('')}
    </div>
  `;
}

function exploreCommunitiesHTML() {
  return `
    <div style="padding:0 16px 16px">
      ${DATA.communities.map(c => `
        <div class="result-item" onclick="navigate('community',{communityId:'${c.id}'})">
          <div class="crest-circle" style="width:44px;height:44px;background:${c.color};font-size:18px;">
            ${SVG.users}
          </div>
          <div class="result-info">
            <div class="result-name">${c.name}</div>
            <div class="result-meta">${fmtNum(c.members)} members · ${c.activity}</div>
          </div>
          <button class="btn-join ${STATE.joinedCommunities.has(c.id)?'joined':'not-joined'}"
            onclick="event.stopPropagation();toggleJoin('${c.id}',this)">
            ${STATE.joinedCommunities.has(c.id) ? 'Joined' : 'Join'}
          </button>
        </div>
      `).join('')}
    </div>
  `;
}

// ==========================================
//  LIVE PAGE
// ==========================================
function renderLive(container) {
  const liveFixtures = DATA.fixtures.filter(f => f.isLive);
  const upcoming = DATA.fixtures.filter(f => !f.isLive);

  function matchHTML(f) {
    const home = getTeam(f.homeTeamId);
    const away = getTeam(f.awayTeamId);
    if (!home || !away) return '';
    const isLive = f.isLive;
    const atm = f.atmosphereRating;

    return `
      <div class="match-card">
        <div class="match-card-header">
          <span class="match-competition">${f.competition}</span>
          ${isLive
            ? `<div class="live-badge"><div class="live-dot"></div>${f.status === 'HT' ? 'HT' : f.minute + "'"}</div>`
            : `<span class="match-status-badge upcoming">${f.date} · ${f.time}</span>`}
        </div>
        <div class="match-main">
          <div class="match-team">
            ${crest(f.homeTeamId, 44)}
            <span class="match-team-name">${home.name}</span>
          </div>
          <div class="match-center">
            ${isLive
              ? `<div class="match-score">${f.homeScore} – ${f.awayScore}</div>
                 <div class="match-minute">${f.status === 'HT' ? 'Half Time' : f.minute + "'"}</div>`
              : `<div class="match-score upcoming-score">vs</div>
                 <div class="match-time-label">${f.time}</div>`}
          </div>
          <div class="match-team">
            ${crest(f.awayTeamId, 44)}
            <span class="match-team-name">${away.name}</span>
          </div>
        </div>
        <div class="match-footer">
          <div class="match-stadium">
            ${SVG.pin} ${f.stadium}
          </div>
          <div style="display:flex;align-items:center;gap:10px">
            ${isLive && atm ? `
              <div class="atmosphere-meter">
                <span class="atm-label">ATM</span>
                <div class="atm-bar"><div class="atm-fill" style="width:${atm*10}%"></div></div>
                <span class="atm-value">${atm}</span>
              </div>` : ''}
            <div class="community-buzz">
              ${SVG.fire} ${fmtNum(f.communityBuzz)}
            </div>
          </div>
        </div>
      </div>
    `;
  }

  container.innerHTML = `
    <div class="live-page">
      <div class="filter-row">
        <button class="filter-chip ${STATE.fixtureFilter==='all'?'active':''}" onclick="setFixtureFilter('all')">All</button>
        <button class="filter-chip ${STATE.fixtureFilter==='following'?'active':''}" onclick="setFixtureFilter('following')">Following</button>
        <button class="filter-chip ${STATE.fixtureFilter==='live'?'active':''}" onclick="setFixtureFilter('live')">🔴 Live Now</button>
      </div>

      ${liveFixtures.length ? `
        <div class="date-divider">🔴 LIVE NOW</div>
        ${liveFixtures.filter(f => STATE.fixtureFilter === 'live' || STATE.fixtureFilter === 'all' || 
          (STATE.fixtureFilter === 'following' && (STATE.followedTeams.has(f.homeTeamId) || STATE.followedTeams.has(f.awayTeamId))))
          .map(matchHTML).join('')}
      ` : ''}

      <div class="date-divider">UPCOMING</div>
      ${upcoming.filter(f => STATE.fixtureFilter === 'all' || STATE.fixtureFilter === 'live' ? false :
        (STATE.fixtureFilter === 'following' ? STATE.followedTeams.has(f.homeTeamId) || STATE.followedTeams.has(f.awayTeamId) : true))
        .length === 0 && STATE.fixtureFilter !== 'live'
        ? upcoming.map(matchHTML).join('')
        : upcoming.filter(f =>
            STATE.fixtureFilter === 'live' ? false :
            STATE.fixtureFilter === 'following' ? STATE.followedTeams.has(f.homeTeamId) || STATE.followedTeams.has(f.awayTeamId) : true
          ).map(matchHTML).join('')}
      
      ${STATE.fixtureFilter === 'live' && !liveFixtures.length ? `
        <div style="text-align:center;padding:48px 16px;color:#52525b">
          <div style="font-size:40px;margin-bottom:12px">📡</div>
          <div style="font-size:15px;font-weight:600;color:#a1a1aa;margin-bottom:6px">No live matches right now</div>
          <div style="font-size:13px">Check back during match time</div>
        </div>` : ''}
    </div>
  `;
}

function setFixtureFilter(filter) {
  STATE.fixtureFilter = filter;
  renderPage();
}

// Pin icon shortcut
const SVG2 = { pin: SVG.pin };

// ==========================================
//  REWARD PAGE
// ==========================================
function renderReward(container) {
  const rankBadge = (r) => r === 1 ? '🏆' : r === 2 ? '🥈' : r === 3 ? '🥉' : `#${r}`;
  const rankClass = (r) => r === 1 ? 'top1' : r === 2 ? 'top2' : r === 3 ? 'top3' : '';

  container.innerHTML = `
    <div class="reward-page">
      <div class="section-header">
        <span class="section-title">Your Points</span>
      </div>

      <div class="points-hero-card">
        <div class="points-label">Your Points</div>
        <div class="points-value">${DATA.currentUser.fanPoints.toLocaleString()}</div>
        <div class="points-subtitle">Redeem your points to get amazing rewards</div>
        <button class="collect-btn" onclick="collectPoints(this)">Collect Points</button>
      </div>

      <div class="gifts-section">
        <div class="section-header" style="padding:16px 0 10px">
          <span class="section-title">Available Gifts</span>
          <button class="see-all" onclick="showToast('Gift store coming soon!')">See All</button>
        </div>
        <div class="gifts-grid">
          ${DATA.gifts.map(g => `
            <div class="gift-card" style="background:linear-gradient(135deg,${g.color},${g.color2})"
              onclick="showToast('Redeemed! ${g.count} ${g.type} ${g.subtype}')">
              <div>
                <div class="gift-count">${g.count}</div>
                <div class="gift-type">${g.type}</div>
                <div class="gift-type-sub">${g.subtype}</div>
              </div>
              <div class="gift-icon-bg">${g.type === 'Ticket' || g.type === 'VIP' ? SVG.ticket : SVG.trophy}</div>
            </div>
          `).join('')}
        </div>
      </div>

      <div class="reward-leaderboard">
        <div class="section-header" style="padding:8px 0 10px">
          <span class="section-title">🏆 Global Leaderboard</span>
          <button class="see-all" onclick="navigate('profile')">My Rank</button>
        </div>
        ${DATA.leaderboard.map(u => `
          <div class="leaderboard-item">
            <div class="lb-rank ${rankClass(u.rank)}">${rankBadge(u.rank)}</div>
            ${avatar(u.name, 36, u.color)}
            <div class="lb-info">
              <div class="lb-name">${u.name}</div>
              <div class="lb-meta">${u.teamId ? getTeam(u.teamId)?.name || 'Global Fan' : 'Global Fan'}</div>
            </div>
            <div class="lb-points">${fmtNum(u.fanPoints)} pts</div>
          </div>
        `).join('')}
        <!-- Current user highlight -->
        <div class="leaderboard-item" style="background:rgba(34,197,94,0.05);border-radius:12px;margin:8px -4px 0;padding:12px 4px;border:1px solid rgba(34,197,94,0.15)">
          <div class="lb-rank" style="color:#22c55e">#${DATA.currentUser.ranking}</div>
          ${avatar('John Elmersson', 36, '#22c55e')}
          <div class="lb-info">
            <div class="lb-name">You (John Elmersson)</div>
            <div class="lb-meta">Arsenal FC</div>
          </div>
          <div class="lb-points">${fmtNum(DATA.currentUser.fanPoints)} pts</div>
        </div>
      </div>
    </div>
  `;
}

function collectPoints() {
  DATA.currentUser.fanPoints += 50;
  showToast('🎉 +50 points collected!');
  // Update display
  const val = document.querySelector('.points-value');
  if (val) {
    val.textContent = DATA.currentUser.fanPoints.toLocaleString();
    val.style.transform = 'scale(1.15)';
    val.style.transition = 'transform 0.2s ease';
    setTimeout(() => { val.style.transform = 'scale(1)'; }, 200);
  }
}

// ==========================================
//  PROFILE PAGE
// ==========================================
function renderProfile(container) {
  const u = DATA.currentUser;
  const progressPct = Math.round((u.fanPoints / u.nextTierPoints) * 100);
  const followedTeamsList = DATA.teams.filter(t => STATE.followedTeams.has(t.id));
  const joinedCommList = DATA.communities.filter(c => STATE.joinedCommunities.has(c.id));
  const myPosts = STATE.posts.slice(0, 4);

  let tabContent = '';
  if (STATE.profileTab === 'posts') {
    tabContent = myPosts.length
      ? myPosts.map(p => postCardHTML(p)).join('')
      : `<div style="text-align:center;padding:32px 0;color:#52525b">No posts yet. Share your first thought!</div>`;
  } else if (STATE.profileTab === 'teams') {
    tabContent = followedTeamsList.length
      ? followedTeamsList.map(t => `
          <div class="profile-team-card" onclick="navigate('club',{teamId:'${t.id}'})">
            ${crest(t.id, 44)}
            <div class="profile-team-info">
              <div class="profile-team-name">${t.fullName}</div>
              <div class="profile-team-meta">${t.league} · ${fmtNum(t.followers)} followers</div>
            </div>
            <button class="btn-follow following" onclick="event.stopPropagation();toggleFollow('${t.id}',this)">Following</button>
          </div>`).join('')
      : `<div style="text-align:center;padding:32px 0;color:#52525b">Follow some teams to see them here!</div>`;
  } else if (STATE.profileTab === 'communities') {
    tabContent = joinedCommList.length
      ? joinedCommList.map(c => `
          <div class="profile-community-card" onclick="navigate('community',{communityId:'${c.id}'})">
            <div class="crest-circle" style="width:44px;height:44px;background:${c.color};font-size:18px;">${SVG.users}</div>
            <div class="profile-community-info">
              <div class="profile-community-name">${c.name}</div>
              <div class="profile-community-meta">${fmtNum(c.members)} members · ${c.activity}</div>
            </div>
          </div>`).join('')
      : `<div style="text-align:center;padding:32px 0;color:#52525b">Join some communities to see them here!</div>`;
  } else if (STATE.profileTab === 'ranking') {
    tabContent = `
      <div style="background:#1e1e1e;border:1px solid #2a2a2a;border-radius:16px;padding:20px;text-align:center;margin-bottom:16px">
        <div style="font-family:'Space Grotesk',sans-serif;font-size:48px;font-weight:700;color:#22c55e;margin-bottom:4px">#${u.ranking}</div>
        <div style="font-size:14px;color:#a1a1aa">Global Fan Ranking</div>
        <div style="font-size:12px;color:#52525b;margin-top:4px">out of ${fmtNum(u.totalUsers)} fans</div>
        <div style="margin-top:16px;height:6px;background:#2a2a2a;border-radius:3px;overflow:hidden">
          <div style="height:100%;width:${Math.round((1 - u.ranking/u.totalUsers)*100)}%;background:linear-gradient(90deg,#22c55e,#a3e635);border-radius:3px"></div>
        </div>
        <div style="font-size:12px;color:#52525b;margin-top:6px">Top ${Math.round((u.ranking/u.totalUsers)*100)}% of all fans</div>
      </div>
      ${DATA.leaderboard.slice(0, 5).map(l => `
        <div class="leaderboard-item">
          <div class="lb-rank ${l.rank<=3?'top'+l.rank:''}">${l.rank===1?'🏆':l.rank===2?'🥈':l.rank===3?'🥉':'#'+l.rank}</div>
          ${avatar(l.name, 36, l.color)}
          <div class="lb-info"><div class="lb-name">${l.name}</div></div>
          <div class="lb-points">${fmtNum(l.fanPoints)} pts</div>
        </div>`).join('')}
    `;
  }

  container.innerHTML = `
    <div class="profile-page">
      <div class="profile-cover">
        <div class="profile-cover-overlay"></div>
      </div>
      <div class="profile-info-section">
        <div class="profile-avatar-wrap">
          <div class="profile-avatar-ring">
            <div class="profile-avatar-inner">JE</div>
          </div>
          <button class="profile-edit-btn" onclick="showToast('Profile editing coming soon!')">${SVG.edit2} Edit Profile</button>
        </div>
        <div class="profile-name">${u.name}</div>
        <div class="profile-username">${u.username}</div>
        <div class="profile-tier-badge">${SVG.star} ${u.tier}</div>
        <div class="profile-bio">${u.bio}</div>
        <div class="profile-stats">
          <div class="profile-stat">
            <div class="profile-stat-value">${u.postsCount}</div>
            <div class="profile-stat-label">Posts</div>
          </div>
          <div class="profile-stat">
            <div class="profile-stat-value">${fmtNum(u.followers)}</div>
            <div class="profile-stat-label">Followers</div>
          </div>
          <div class="profile-stat">
            <div class="profile-stat-value">${u.following}</div>
            <div class="profile-stat-label">Following</div>
          </div>
          <div class="profile-stat">
            <div class="profile-stat-value" style="color:#22c55e">${fmtNum(u.fanPoints)}</div>
            <div class="profile-stat-label">Fan Pts</div>
          </div>
        </div>
      </div>

      <div class="fan-points-bar">
        <div class="fan-points-row">
          <span class="fan-points-label">Fan Points:</span>
          <span class="fan-points-value">${u.fanPoints.toLocaleString()}</span>
        </div>
        <div class="fan-points-progress">
          <div class="fan-points-fill" style="width:${progressPct}%"></div>
        </div>
        <div class="fan-points-next">
          <span>${u.tier} Tier</span>
          <span>${u.fanPoints.toLocaleString()} / ${u.nextTierPoints.toLocaleString()} pts to next tier</span>
        </div>
      </div>

      <div class="profile-tabs">
        <div class="profile-tab-row">
          <button class="profile-tab ${STATE.profileTab==='posts'?'active':''}" onclick="setProfileTab('posts')">Posts</button>
          <button class="profile-tab ${STATE.profileTab==='teams'?'active':''}" onclick="setProfileTab('teams')">Teams</button>
          <button class="profile-tab ${STATE.profileTab==='communities'?'active':''}" onclick="setProfileTab('communities')">Communities</button>
          <button class="profile-tab ${STATE.profileTab==='ranking'?'active':''}" onclick="setProfileTab('ranking')">Ranking</button>
        </div>
        <div id="profile-tab-content">${tabContent}</div>
      </div>
    </div>
  `;
}

function setProfileTab(tab) {
  STATE.profileTab = tab;
  document.querySelectorAll('.profile-tab').forEach(el => {
    el.classList.toggle('active', el.textContent.toLowerCase() === tab ||
      (tab === 'communities' && el.textContent === 'Communities') ||
      (tab === 'ranking' && el.textContent === 'Ranking'));
  });
  const content = document.getElementById('profile-tab-content');
  if (!content) return;
  // Re-render just the tab content area
  const u = DATA.currentUser;
  const followedTeamsList = DATA.teams.filter(t => STATE.followedTeams.has(t.id));
  const joinedCommList = DATA.communities.filter(c => STATE.joinedCommunities.has(c.id));
  const myPosts = STATE.posts.slice(0, 4);

  let tabContent = '';
  if (tab === 'posts') {
    tabContent = myPosts.map(p => postCardHTML(p)).join('') || `<div style="text-align:center;padding:32px 0;color:#52525b">No posts yet.</div>`;
  } else if (tab === 'teams') {
    tabContent = followedTeamsList.length
      ? followedTeamsList.map(t => `<div class="profile-team-card" onclick="navigate('club',{teamId:'${t.id}'})">
          ${crest(t.id,44)}<div class="profile-team-info"><div class="profile-team-name">${t.fullName}</div><div class="profile-team-meta">${t.league}</div></div>
          <button class="btn-follow following" onclick="event.stopPropagation();toggleFollow('${t.id}',this)">Following</button></div>`).join('')
      : `<div style="text-align:center;padding:32px 0;color:#52525b">No followed teams yet.</div>`;
  } else if (tab === 'communities') {
    tabContent = joinedCommList.length
      ? joinedCommList.map(c => `<div class="profile-community-card" onclick="navigate('community',{communityId:'${c.id}'})">
          <div class="crest-circle" style="width:44px;height:44px;background:${c.color};font-size:18px;">${SVG.users}</div>
          <div class="profile-community-info"><div class="profile-community-name">${c.name}</div><div class="profile-community-meta">${fmtNum(c.members)} members</div></div></div>`).join('')
      : `<div style="text-align:center;padding:32px 0;color:#52525b">No joined communities yet.</div>`;
  } else if (tab === 'ranking') {
    tabContent = `<div style="background:#1e1e1e;border:1px solid #2a2a2a;border-radius:16px;padding:20px;text-align:center;margin-bottom:16px">
      <div style="font-family:'Space Grotesk',sans-serif;font-size:48px;font-weight:700;color:#22c55e">#${u.ranking}</div>
      <div style="font-size:14px;color:#a1a1aa">Global Fan Ranking</div>
      <div style="margin-top:12px;height:6px;background:#2a2a2a;border-radius:3px;overflow:hidden">
        <div style="height:100%;width:${Math.round((1-u.ranking/u.totalUsers)*100)}%;background:linear-gradient(90deg,#22c55e,#a3e635);border-radius:3px"></div>
      </div></div>`;
  }
  content.innerHTML = tabContent;
}

// ==========================================
//  CLUB PAGE
// ==========================================
function renderClub(container) {
  const team = getTeam(STATE.params.teamId);
  if (!team) { container.innerHTML = '<div style="padding:20px;color:#a1a1aa">Club not found</div>'; return; }

  const isFollowed = STATE.followedTeams.has(team.id);
  const communities = team.topCommunityIds.map(id => getCommunity(id)).filter(Boolean);

  container.innerHTML = `
    <div class="club-page">
      <div class="club-hero" style="background:${team.bgGradient}">
        <div class="club-hero-overlay"></div>
        <div class="club-hero-content">
          <div class="club-hero-crest">${crest(team.id, 60)}</div>
          <div class="club-hero-info">
            <div class="club-hero-name">${team.fullName}</div>
            <div class="club-hero-meta">${team.league} · Est. ${team.founded} · ${team.city}</div>
          </div>
          <button class="btn-follow ${isFollowed?'following':'not-following'}" id="club-follow-btn"
            onclick="toggleFollow('${team.id}', this)">
            ${isFollowed ? 'Following' : '+ Follow'}
          </button>
        </div>
      </div>

      <div class="club-quick-stats">
        <div class="club-stat-card">
          <div class="club-stat-value">${team.followers}</div>
          <div class="club-stat-label">Followers</div>
        </div>
        <div class="club-stat-card">
          <div class="club-stat-value">${team.fanScore}</div>
          <div class="club-stat-label">Fan Score</div>
        </div>
        <div class="club-stat-card">
          <div class="club-stat-value">#${team.ranking}</div>
          <div class="club-stat-label">FanClub Rank</div>
        </div>
      </div>

      <div class="club-section">
        <div class="club-section-title">Recent Form</div>
        <div class="form-badges">
          ${team.recentForm.map(r => `<div class="form-badge ${r}">${r}</div>`).join('')}
        </div>
      </div>

      <div class="club-section">
        <div class="club-section-title">Upcoming Fixtures</div>
        ${team.upcomingMatches.map(m => `
          <div class="mini-fixture">
            <div class="mini-fixture-teams">
              ${crest(team.id, 28)}
              <span class="mini-fixture-vs">vs</span>
              ${m.opponentId ? crest(m.opponentId, 28) : `<div style="width:28px;height:28px;border-radius:50%;background:#333;flex-shrink:0"></div>`}
              <span class="mini-fixture-team-name">${m.opponent}</span>
            </div>
            <div class="mini-fixture-info">
              <div class="mini-fixture-date">${m.date}</div>
              <div class="mini-fixture-comp">${m.comp}</div>
            </div>
          </div>`).join('')}
      </div>

      <div class="club-section">
        <div class="club-section-title">Top Communities</div>
        ${communities.map(c => `
          <div class="club-community-card" onclick="navigate('community',{communityId:'${c.id}'})">
            <div class="crest-circle" style="width:40px;height:40px;background:${c.color};font-size:16px;">${SVG.users}</div>
            <div class="club-community-info">
              <div class="club-community-name">${c.name}</div>
              <div class="club-community-meta">${fmtNum(c.members)} members · ${c.activity} activity</div>
            </div>
            <button class="btn-join ${STATE.joinedCommunities.has(c.id)?'joined':'not-joined'}"
              onclick="event.stopPropagation();toggleJoin('${c.id}',this)">
              ${STATE.joinedCommunities.has(c.id) ? 'Joined' : 'Join'}
            </button>
          </div>`).join('')}
      </div>

      <div class="club-section">
        <div class="club-section-title">Most Active Countries</div>
        ${team.activeCountries.map(c => `
          <div class="country-bar-item">
            <div class="country-name">${c.flag} ${c.country}</div>
            <div class="country-bar"><div class="country-bar-fill" style="width:${c.pct}%"></div></div>
            <div class="country-pct">${c.pct}%</div>
          </div>`).join('')}
      </div>

      <div class="club-section">
        <div class="club-section-title">About ${team.fullName}</div>
        <p style="font-size:14px;color:#a1a1aa;line-height:1.6">${team.description}</p>
      </div>
    </div>
  `;
}

// ==========================================
//  COMMUNITY PAGE
// ==========================================
function renderCommunity(container) {
  const community = getCommunity(STATE.params.communityId);
  if (!community) { container.innerHTML = '<div style="padding:20px;color:#a1a1aa">Community not found</div>'; return; }

  const isJoined = STATE.joinedCommunities.has(community.id);
  const communityPosts = STATE.posts.filter(p => p.communityId === community.id);
  const team = community.teamId ? getTeam(community.teamId) : null;
  const memberCount = isJoined ? community.members + 1 : community.members;

  let tabContent = '';
  if (STATE.communityTab === 'feed') {
    tabContent = communityPosts.length
      ? `<div class="community-feed">${communityPosts.map(p => postCardHTML(p)).join('')}</div>`
      : `<div style="text-align:center;padding:32px 16px;color:#52525b">
          <div style="font-size:32px;margin-bottom:10px">💬</div>
          <div style="font-size:14px;color:#a1a1aa">No posts yet in this community</div>
        </div>`;
  } else if (STATE.communityTab === 'leaderboard') {
    tabContent = `<div class="leaderboard-section" style="padding-top:12px">
      ${DATA.leaderboard.slice(0, 8).map(u => `
        <div class="leaderboard-item">
          <div class="lb-rank ${u.rank<=3?'top'+u.rank:''}">${u.rank===1?'🏆':u.rank===2?'🥈':u.rank===3?'🥉':'#'+u.rank}</div>
          ${avatar(u.name, 36, u.color)}
          <div class="lb-info"><div class="lb-name">${u.name}</div><div class="lb-meta">${fmtNum(u.fanPoints)} total points</div></div>
          <div class="lb-points">${fmtNum(u.fanPoints)}</div>
        </div>`).join('')}
    </div>`;
  } else if (STATE.communityTab === 'about') {
    tabContent = `<div style="padding:16px">
      <div style="background:#1e1e1e;border:1px solid #2a2a2a;border-radius:16px;padding:16px;margin-bottom:12px">
        <div style="font-size:14px;color:#a1a1aa;line-height:1.6">${community.description}</div>
      </div>
      <div style="background:#1e1e1e;border:1px solid #2a2a2a;border-radius:16px;padding:16px">
        <div class="club-section-title" style="margin-bottom:12px">Community Stats</div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
          <div style="text-align:center;padding:12px;background:#272727;border-radius:12px">
            <div style="font-family:'Space Grotesk',sans-serif;font-size:22px;font-weight:700;color:#22c55e">${fmtNum(community.members)}</div>
            <div style="font-size:12px;color:#52525b">Members</div>
          </div>
          <div style="text-align:center;padding:12px;background:#272727;border-radius:12px">
            <div style="font-family:'Space Grotesk',sans-serif;font-size:22px;font-weight:700;color:#22c55e">${fmtNum(community.posts)}</div>
            <div style="font-size:12px;color:#52525b">Posts</div>
          </div>
        </div>
      </div>
    </div>`;
  }

  container.innerHTML = `
    <div class="community-page">
      <div class="community-hero">
        <div class="community-hero-bg" style="background:linear-gradient(135deg,${community.color}33,#1a1a1a)"></div>
        <div class="community-hero-overlay"></div>
        <div class="community-hero-content">
          <div class="crest-circle" style="width:52px;height:52px;background:${community.color};font-size:20px;flex-shrink:0;">${SVG.users}</div>
          <div>
            <div class="community-hero-name">${community.name}</div>
          </div>
        </div>
      </div>

      <div class="community-meta-row">
        <div class="community-meta-item">${SVG.users} ${fmtNum(memberCount)} members</div>
        <div class="community-meta-item">
          <div class="activity-indicator"><div class="activity-dot"></div><span>${community.activity} Activity</span></div>
        </div>
        <div class="community-meta-item" style="background:#1e1e1e;border:1px solid #333;padding:3px 10px;border-radius:10px;font-size:11px;font-weight:600;color:#a1a1aa">${community.category}</div>
        <div style="margin-left:auto">
          <button class="btn-join ${isJoined?'joined':'not-joined'}" id="comm-join-btn"
            onclick="toggleJoin('${community.id}',this,true)">
            ${isJoined ? '✓ Joined' : '+ Join'}
          </button>
        </div>
      </div>

      <div class="community-tabs">
        <div class="tabs-row" style="padding:8px 0">
          <button class="tab-pill ${STATE.communityTab==='feed'?'active':''}" onclick="setCommunityTab('feed')">Feed</button>
          <button class="tab-pill ${STATE.communityTab==='leaderboard'?'active':''}" onclick="setCommunityTab('leaderboard')">Leaderboard</button>
          <button class="tab-pill ${STATE.communityTab==='about'?'active':''}" onclick="setCommunityTab('about')">About</button>
        </div>
      </div>

      <div id="community-tab-content">${tabContent}</div>
    </div>
  `;
}

function setCommunityTab(tab) {
  STATE.communityTab = tab;
  document.querySelectorAll('.community-tabs .tab-pill').forEach(el => {
    el.classList.toggle('active',
      el.textContent === 'Feed' && tab === 'feed' ||
      el.textContent === 'Leaderboard' && tab === 'leaderboard' ||
      el.textContent === 'About' && tab === 'about');
  });
  const el = document.getElementById('community-tab-content');
  if (!el) return;
  const community = getCommunity(STATE.params.communityId);
  if (!community) return;
  const communityPosts = STATE.posts.filter(p => p.communityId === community.id);
  const isJoined = STATE.joinedCommunities.has(community.id);

  if (tab === 'feed') {
    el.innerHTML = communityPosts.length
      ? `<div class="community-feed">${communityPosts.map(p => postCardHTML(p)).join('')}</div>`
      : `<div style="text-align:center;padding:32px 16px;color:#52525b"><div style="font-size:32px;margin-bottom:10px">💬</div><div style="font-size:14px;color:#a1a1aa">No posts yet</div></div>`;
  } else if (tab === 'leaderboard') {
    el.innerHTML = `<div class="leaderboard-section" style="padding-top:12px">
      ${DATA.leaderboard.slice(0,8).map(u => `<div class="leaderboard-item">
        <div class="lb-rank ${u.rank<=3?'top'+u.rank:''}">${u.rank===1?'🏆':u.rank===2?'🥈':u.rank===3?'🥉':'#'+u.rank}</div>
        ${avatar(u.name,36,u.color)}<div class="lb-info"><div class="lb-name">${u.name}</div></div>
        <div class="lb-points">${fmtNum(u.fanPoints)}</div></div>`).join('')}
    </div>`;
  } else if (tab === 'about') {
    el.innerHTML = `<div style="padding:16px">
      <div style="background:#1e1e1e;border:1px solid #2a2a2a;border-radius:16px;padding:16px">
        <div style="font-size:14px;color:#a1a1aa;line-height:1.6">${community.description}</div>
      </div>
    </div>`;
  }
}

// ==========================================
//  ARTICLE PAGE
// ==========================================
function renderArticle(container) {
  const post = getPost(STATE.params.postId);
  if (!post) { container.innerHTML = '<div style="padding:20px;color:#a1a1aa">Article not found</div>'; return; }

  const liked = STATE.likedPosts.has(post.id);
  const community = getCommunity(post.communityId);
  const team = post.teamId ? getTeam(post.teamId) : null;

  const bodyHTML = Array.isArray(post.content)
    ? post.content.map(para => `<p>${para}</p>`).join('')
    : `<p>${post.content}</p>`;

  container.innerHTML = `
    <div class="article-page">
      ${post.image
        ? `<img class="article-hero" src="${post.image}" alt="${post.title}" onerror="this.outerHTML='<div class=\\'article-hero-placeholder\\'></div>'">`
        : `<div class="article-hero-placeholder"><div style="color:#52525b">⚽</div></div>`}
      <div class="article-content">
        ${community ? `<div class="article-category">${SVG.fire} ${community.name}</div>` : ''}
        <h1 class="article-title">${post.title}</h1>
        <div class="article-meta">
          ${avatar(post.authorName, 32, post.authorColor)}
          <div>
            <div style="font-size:13px;font-weight:600;color:#f5f5f5">${post.authorName}</div>
            <div class="article-meta-timestamp">${post.timeDisplay || post.timestamp}</div>
          </div>
        </div>
        <div class="article-body">${bodyHTML}</div>
        <div class="article-actions">
          <button class="article-action-btn ${liked?'liked':''}" id="article-like-btn"
            onclick="toggleArticleLike('${post.id}',this)">
            ${liked ? SVG.heartFill : SVG.heart}
            <span id="article-like-count">${fmtNum(liked ? post.likes+1 : post.likes)}</span>
          </button>
          <button class="article-action-btn">
            ${SVG.comment}
            <span>${fmtNum(post.comments)}</span>
          </button>
          <button class="article-action-btn" onclick="showToast('Copied link to clipboard!')">
            ${SVG.share}
            <span>Share</span>
          </button>
        </div>

        ${community ? `
          <div style="margin-top:20px;padding:16px;background:#1e1e1e;border:1px solid #2a2a2a;border-radius:16px">
            <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px">
              <div style="font-family:'Space Grotesk',sans-serif;font-size:14px;font-weight:700;color:#f5f5f5">${community.name}</div>
              <button class="btn-join ${STATE.joinedCommunities.has(community.id)?'joined':'not-joined'}"
                onclick="toggleJoin('${community.id}',this)">
                ${STATE.joinedCommunities.has(community.id) ? 'Joined' : 'Join'}
              </button>
            </div>
            <div style="font-size:13px;color:#a1a1aa">${fmtNum(community.members)} members · ${community.activity} activity</div>
            <button style="margin-top:12px;width:100%;padding:12px;background:#272727;border:1px solid #333;border-radius:12px;color:#f5f5f5;font-size:14px;font-weight:600;transition:all 0.2s"
              onclick="navigate('community',{communityId:'${community.id}'})">
              View Community →
            </button>
          </div>` : ''}
      </div>
    </div>
  `;
}

function toggleArticleLike(postId, btn) {
  const post = getPost(postId);
  if (!post) return;
  const liked = STATE.likedPosts.has(postId);
  if (liked) {
    STATE.likedPosts.delete(postId);
    btn.classList.remove('liked');
    btn.innerHTML = `${SVG.heart}<span>${fmtNum(post.likes)}</span>`;
  } else {
    STATE.likedPosts.add(postId);
    btn.classList.add('liked');
    btn.innerHTML = `${SVG.heartFill}<span>${fmtNum(post.likes + 1)}</span>`;
    btn.style.transform = 'scale(1.08)';
    btn.style.transition = 'transform 0.15s ease';
    setTimeout(() => { btn.style.transform = 'scale(1)'; }, 150);
  }
  saveState();
}

// ==========================================
//  INTERACTIONS
// ==========================================
function toggleLike(postId, btn) {
  const post = getPost(postId);
  if (!post) return;
  const wasLiked = STATE.likedPosts.has(postId);

  if (wasLiked) {
    STATE.likedPosts.delete(postId);
    btn.classList.remove('liked');
    btn.innerHTML = `${SVG.heart}<span class="like-count">${fmtNum(post.likes)}</span>`;
  } else {
    STATE.likedPosts.add(postId);
    btn.classList.add('liked');
    btn.innerHTML = `${SVG.heartFill}<span class="like-count">${fmtNum(post.likes + 1)}</span>`;
    btn.style.transform = 'scale(1.2)';
    btn.style.transition = 'transform 0.15s cubic-bezier(0.34,1.56,0.64,1)';
    setTimeout(() => { btn.style.transform = 'scale(1)'; }, 200);
  }
  saveState();
}

function toggleFollow(teamId, btn) {
  const team = getTeam(teamId);
  if (!team) return;
  const isFollowed = STATE.followedTeams.has(teamId);

  if (isFollowed) {
    STATE.followedTeams.delete(teamId);
    btn.className = 'btn-follow not-following';
    btn.textContent = '+ Follow';
    showToast(`Unfollowed ${team.name}`);
  } else {
    STATE.followedTeams.add(teamId);
    btn.className = 'btn-follow following';
    btn.textContent = 'Following';
    showToast(`✓ Now following ${team.name}`);
    btn.style.transform = 'scale(1.1)';
    btn.style.transition = 'transform 0.15s ease';
    setTimeout(() => { btn.style.transform = 'scale(1)'; }, 150);
  }
  saveState();
  DATA.currentUser.following = STATE.followedTeams.size * 12; // mock
}

function toggleJoin(communityId, btn, updateCount = false) {
  const community = getCommunity(communityId);
  if (!community) return;
  const isJoined = STATE.joinedCommunities.has(communityId);

  if (isJoined) {
    STATE.joinedCommunities.delete(communityId);
    btn.className = 'btn-join not-joined';
    btn.textContent = 'Join';
    showToast(`Left ${community.name}`);
  } else {
    STATE.joinedCommunities.add(communityId);
    btn.className = 'btn-join joined';
    btn.textContent = '✓ Joined';
    showToast(`✓ Joined ${community.name}!`);
    btn.style.transform = 'scale(1.1)';
    btn.style.transition = 'transform 0.15s ease';
    setTimeout(() => { btn.style.transform = 'scale(1)'; }, 150);
  }
  saveState();

  if (updateCount) {
    const metaEl = document.querySelector('.community-meta-item');
    if (metaEl) {
      const newCount = isJoined ? community.members : community.members + 1;
      metaEl.innerHTML = `${SVG.users} ${fmtNum(newCount)} members`;
    }
  }
}

// ======= TOAST =======
function showToast(message) {
  const existing = document.querySelector('.toast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <div class="toast-icon">${SVG.check}</div>
    <div class="toast-text">${message}</div>
  `;

  // Insert into phone device
  const app = document.querySelector('.app-shell') || document.body;
  app.appendChild(toast);

  setTimeout(() => toast.remove(), 2600);
}

// ======= CREATE POST MODAL =======
function openCreatePost() {
  const modal = document.getElementById('create-post-modal');
  const composerAvatar = document.getElementById('composer-avatar');
  if (composerAvatar) composerAvatar.innerHTML = avatar('John Elmersson', 36, '#22c55e');
  if (modal) {
    modal.classList.remove('hidden');
    const textarea = document.getElementById('post-textarea');
    if (textarea) setTimeout(() => textarea.focus(), 100);
  }
}

function closeCreatePost() {
  const modal = document.getElementById('create-post-modal');
  if (modal) modal.classList.add('hidden');
}

function submitPost() {
  const textarea = document.getElementById('post-textarea');
  const text = textarea ? textarea.value.trim() : '';
  if (!text) { showToast('Write something first!'); return; }

  const activeTagBtn = document.querySelector('.tag-chip.active');
  const communityId = activeTagBtn ? activeTagBtn.dataset.community : 'arsenal-fc-official';
  const community = getCommunity(communityId);

  const newPost = {
    id: 'post-new-' + Date.now(),
    communityId: communityId,
    teamId: community?.teamId || null,
    authorName: 'John Elmersson',
    authorColor: '#22c55e',
    title: text.length > 60 ? text.substring(0, 57) + '…' : text,
    excerpt: text,
    content: [text],
    image: null,
    thumb: null,
    likes: 0,
    comments: 0,
    shares: 0,
    timestamp: 'just now',
    timeDisplay: 'Today, just now',
    tags: []
  };

  STATE.posts.unshift(newPost);
  DATA.currentUser.postsCount++;

  closeCreatePost();
  showToast('🚀 Post shared!');

  if (STATE.page === 'home') {
    navigate('home');
  }
}

// ======= EVENT DELEGATION =======
function setupEvents() {
  // Bottom nav — always resets history stack so Back doesn't go back to a different main section
  document.getElementById('bottom-nav').addEventListener('click', (e) => {
    const btn = e.target.closest('.nav-item');
    if (btn && btn.dataset.page) {
      navigate(btn.dataset.page, {}, true); // resetHistory = true
    }
  });

  // FAB (create post)
  document.addEventListener('click', (e) => {
    if (e.target.closest('#fab-create')) openCreatePost();
    if (e.target.closest('#close-modal-btn')) closeCreatePost();
    if (e.target.closest('#submit-post-btn')) submitPost();
    if (e.target.closest('#create-post-modal') && !e.target.closest('#modal-sheet')) closeCreatePost();
  });

  // Tag chip toggle in modal
  document.addEventListener('click', (e) => {
    const chip = e.target.closest('.tag-chip');
    if (chip && chip.closest('#create-post-modal')) {
      document.querySelectorAll('#create-post-modal .tag-chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
    }
  });
}

// ======= BOOT =======
function boot() {
  initState();
  renderNavIcons();
  renderHeader();
  renderPage();
  updateNav();
  setupEvents();

  // Update nav icons on active state
  function refreshNavIcons() {
    const icons = {
      home:    [SVG.home,    SVG.homeFill],
      explore: [SVG.explore, SVG.exploreFill],
      live:    [SVG.live,    SVG.liveFill],
      reward:  [SVG.reward,  SVG.rewardFill],
      profile: [SVG.profile, SVG.profileFill]
    };
    const mainPages = ['home','explore','live','reward','profile'];
    const activePage = mainPages.includes(STATE.page) ? STATE.page : 'home';
    Object.entries(icons).forEach(([page, [off, on]]) => {
      const el = document.getElementById(`nav-icon-${page}`);
      if (el) el.innerHTML = page === activePage ? on : off;
    });
  }

  // Override navigate to also refresh icons
  const origNavigate = navigate;
  window._navigate = navigate;
  // Already global, just call refreshNavIcons after nav
  const origUpdateNav = updateNav;
  window.updateNav = function() {
    origUpdateNav();
    refreshNavIcons();
  };
  refreshNavIcons();

  console.log('%c⚽ FanClub loaded', 'color:#22c55e;font-weight:bold;font-size:14px');
}

// Start the app
boot();
