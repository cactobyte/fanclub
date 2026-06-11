// ====================================================
//  FANCLUB — Mock Data (data.js)
// ====================================================

const DATA = {

  homeMatches: {
    featured: {
      homeTeam: 'INTER MILAN',  homeColor: '#003399', homeShort: 'INT',
      awayTeam: 'REAL MADRID',  awayColor: '#FEBE10', awayShort: 'RMA',
      competition: 'UCL',  competitionIcon: '🏆',
      date: 'Wed, 15 SEP  –  22:00 PM',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=700&h=320&fit=crop'
    },
    matchWeek: [
      {
        home: 'Sampdoria', away: 'Inter Milan',
        comp: 'Serie A', compColor: '#0066CC',
        date: 'Tomorrow, 12 Sep', time: '08:00 PM',
        image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=320&h=200&fit=crop',
        color: '#1E0080'
      },
      {
        home: 'Real Madrid', away: 'Osasuna',
        comp: 'La Liga', compColor: '#EE1C27',
        date: 'Tomorrow, 12 Sep', time: '10:00 PM',
        image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=320&h=200&fit=crop',
        color: '#0A1F44'
      },
      {
        home: 'Arsenal', away: 'Liverpool',
        comp: 'PL', compColor: '#3D195B',
        date: 'Wed, 13 Sep', time: '07:30 PM',
        image: 'https://images.unsplash.com/photo-1553778263-73a83bab9b0c?w=320&h=200&fit=crop',
        color: '#7B0000'
      },
      {
        home: 'PSG', away: 'Bayern',
        comp: 'UCL', compColor: '#1B318E',
        date: 'Thu, 14 Sep', time: '21:00 PM',
        image: 'https://images.unsplash.com/photo-1547347298-4074fc3086f0?w=320&h=200&fit=crop',
        color: '#003A6B'
      }
    ],
    liveScores: [
      { home: 'Leeds United', homeId: null,      away: 'Liverpool',  awayId: 'liverpool', homeScore: 0, awayScore: 2, minute: 85, comp: 'PL' },
      { home: 'Espanyol',     homeId: null,      away: 'Atl. Madrid',awayId: null,        homeScore: 1, awayScore: 0, minute: 72, comp: 'LL' },
      { home: 'PSG',          homeId: 'psg',     away: 'Bayern',     awayId: 'bayern',    homeScore: 0, awayScore: 2, minute: 78, comp: 'UCL' },
      { home: 'Arsenal',      homeId: 'arsenal', away: 'Chelsea',    awayId: 'chelsea',   homeScore: 2, awayScore: 1, minute: 67, comp: 'PL' }
    ],
    highlights: [
      {
        home: 'MAN. UNITED', away: 'NEWCASTLE',
        comp: 'PL', duration: '02:31', color: '#9B1FBA',
        image: 'https://images.unsplash.com/photo-1540747913346-19212a729eed?w=320&h=220&fit=crop'
      },
      {
        home: 'ATL. MADRID', away: 'VILLARREAL',
        comp: 'La Liga', duration: '01:45', color: '#C8102E',
        image: 'https://images.unsplash.com/photo-1565974498891-5d5e7a1bfe25?w=320&h=220&fit=crop'
      },
      {
        home: 'DORTMUND', away: 'LEIPZIG',
        comp: 'BL', duration: '03:10', color: '#FDE113',
        image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=320&h=220&fit=crop'
      }
    ],
    previews: [
      {
        home: 'BARCELONA', away: 'BAYERN MÜNCHEN',
        comp: 'UCL', duration: '02:20', color: '#004D98',
        image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=320&h=220&fit=crop'
      },
      {
        home: 'AC MILAN', away: 'FIORENTINA',
        comp: 'Serie A', duration: '01:58', color: '#AD2026',
        image: 'https://images.unsplash.com/photo-1577223625816-7546f13df25d?w=320&h=220&fit=crop'
      },
      {
        home: 'MAN CITY', away: 'CHELSEA',
        comp: 'PL', duration: '02:05', color: '#6CAADE',
        image: 'https://images.unsplash.com/photo-1521537634581-0dced2fee2ef?w=320&h=220&fit=crop'
      }
    ]
  },

  currentUser: {
    id: 'user-current',
    name: 'John Elmersson',
    username: '@john_fanclub',
    tier: 'Basic',
    fanPoints: 1240,
    nextTierPoints: 2500,
    ranking: 847,
    totalUsers: 12500,
    followers: 234,
    following: 89,
    postsCount: 42,
    bio: '⚽ Football fanatic. Arsenal & England supporter. UCL obsessed.',
    joinedDate: 'March 2024'
  },

  teams: [
    {
      id: 'arsenal',
      name: 'Arsenal',
      fullName: 'Arsenal FC',
      shortName: 'ARS',
      league: 'Premier League',
      country: 'England',
      founded: 1886,
      stadium: 'Emirates Stadium',
      city: 'London',
      color: '#EF0107',
      bgGradient: 'linear-gradient(135deg,#EF0107,#8B0000)',
      followers: '2.3M',
      fanScore: 9.2,
      ranking: 3,
      description: 'Arsenal Football Club is a professional football club based in Islington, North London. Known as The Gunners, they are one of England\'s most successful clubs.',
      topCommunityIds: ['arsenal-fc-official', 'north-london-forever', 'invincibles-tribute'],
      activeCountries: [
        { country: 'England', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', pct: 35 },
        { country: 'Nigeria', flag: '🇳🇬', pct: 18 },
        { country: 'India', flag: '🇮🇳', pct: 12 },
        { country: 'USA', flag: '🇺🇸', pct: 9 },
        { country: 'Germany', flag: '🇩🇪', pct: 6 }
      ],
      recentForm: ['W','W','D','L','W'],
      upcomingMatches: [
        { opponent: 'Real Madrid', opponentId: 'real-madrid', home: false, date: 'Wed, Jun 11', comp: 'UCL QF' },
        { opponent: 'Liverpool', opponentId: 'liverpool', home: true, date: 'Sun, Jun 15', comp: 'Premier League' },
        { opponent: 'Chelsea', opponentId: 'chelsea', home: false, date: 'Sat, Jun 21', comp: 'Premier League' }
      ]
    },
    {
      id: 'liverpool',
      name: 'Liverpool',
      fullName: 'Liverpool FC',
      shortName: 'LIV',
      league: 'Premier League',
      country: 'England',
      founded: 1892,
      stadium: 'Anfield',
      city: 'Liverpool',
      color: '#C8102E',
      bgGradient: 'linear-gradient(135deg,#C8102E,#7A0000)',
      followers: '3.1M',
      fanScore: 9.7,
      ranking: 1,
      description: 'Liverpool FC is one of England\'s most successful football clubs. Nicknamed The Reds, they are renowned for their passionate supporters and iconic Anfield atmosphere.',
      topCommunityIds: ['the-kop', 'kopites-worldwide'],
      activeCountries: [
        { country: 'England', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', pct: 28 },
        { country: 'Ireland', flag: '🇮🇪', pct: 14 },
        { country: 'Nigeria', flag: '🇳🇬', pct: 11 },
        { country: 'Australia', flag: '🇦🇺', pct: 9 },
        { country: 'Egypt', flag: '🇪🇬', pct: 8 }
      ],
      recentForm: ['W','W','W','W','D'],
      upcomingMatches: [
        { opponent: 'Man United', opponentId: 'man-utd', home: true, date: 'Tomorrow', comp: 'Premier League' },
        { opponent: 'Arsenal', opponentId: 'arsenal', home: false, date: 'Sun, Jun 15', comp: 'Premier League' },
        { opponent: 'PSG', opponentId: 'psg', home: true, date: 'Wed, Jun 18', comp: 'UCL QF' }
      ]
    },
    {
      id: 'man-utd',
      name: 'Man United',
      fullName: 'Manchester United',
      shortName: 'MUN',
      league: 'Premier League',
      country: 'England',
      founded: 1878,
      stadium: 'Old Trafford',
      city: 'Manchester',
      color: '#DA291C',
      bgGradient: 'linear-gradient(135deg,#DA291C,#8B0000)',
      followers: '4.2M',
      fanScore: 8.9,
      ranking: 2,
      description: 'Manchester United is one of the most widely supported football clubs in the world. Based at Old Trafford — The Theatre of Dreams.',
      topCommunityIds: ['red-devils-united', 'stretford-end'],
      activeCountries: [
        { country: 'England', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', pct: 22 },
        { country: 'China', flag: '🇨🇳', pct: 19 },
        { country: 'India', flag: '🇮🇳', pct: 14 },
        { country: 'Malaysia', flag: '🇲🇾', pct: 8 },
        { country: 'Nigeria', flag: '🇳🇬', pct: 7 }
      ],
      recentForm: ['L','D','W','D','L'],
      upcomingMatches: [
        { opponent: 'Liverpool', opponentId: 'liverpool', home: false, date: 'Tomorrow', comp: 'Premier League' },
        { opponent: 'PSG', opponentId: 'psg', home: true, date: 'Sat, Jun 14', comp: 'UCL QF' },
        { opponent: 'Bayern Munich', opponentId: 'bayern', home: false, date: 'Tue, Jun 17', comp: 'Friendly' }
      ]
    },
    {
      id: 'chelsea',
      name: 'Chelsea',
      fullName: 'Chelsea FC',
      shortName: 'CHE',
      league: 'Premier League',
      country: 'England',
      founded: 1905,
      stadium: 'Stamford Bridge',
      city: 'London',
      color: '#034694',
      bgGradient: 'linear-gradient(135deg,#034694,#011F3F)',
      followers: '1.8M',
      fanScore: 8.4,
      ranking: 5,
      description: 'Chelsea FC is an English professional football club based in Fulham, West London. Nicknamed The Blues, they play at Stamford Bridge.',
      topCommunityIds: ['chelsea-blues', 'stamford-bridge-faithful'],
      activeCountries: [
        { country: 'England', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', pct: 31 },
        { country: 'USA', flag: '🇺🇸', pct: 12 },
        { country: 'Japan', flag: '🇯🇵', pct: 10 },
        { country: 'Brazil', flag: '🇧🇷', pct: 8 },
        { country: 'China', flag: '🇨🇳', pct: 7 }
      ],
      recentForm: ['W','W','W','D','W'],
      upcomingMatches: [
        { opponent: 'Arsenal', opponentId: 'arsenal', home: false, date: 'Today', comp: 'Premier League' },
        { opponent: 'Barcelona', opponentId: 'barcelona', home: true, date: 'Thu, Jun 12', comp: 'UCL QF' },
        { opponent: 'Arsenal', opponentId: 'arsenal', home: true, date: 'Sat, Jun 21', comp: 'Premier League' }
      ]
    },
    {
      id: 'barcelona',
      name: 'Barcelona',
      fullName: 'FC Barcelona',
      shortName: 'BAR',
      league: 'La Liga',
      country: 'Spain',
      founded: 1899,
      stadium: 'Camp Nou',
      city: 'Barcelona',
      color: '#004D98',
      bgGradient: 'linear-gradient(135deg,#004D98,#A50044)',
      followers: '5.6M',
      fanScore: 9.5,
      ranking: 4,
      description: 'FC Barcelona is a professional football club based in Barcelona, Catalonia, Spain. Nicknamed Barça — Més que un club (More than a club).',
      topCommunityIds: ['cules-worldwide', 'mes-que-un-club'],
      activeCountries: [
        { country: 'Spain', flag: '🇪🇸', pct: 29 },
        { country: 'Argentina', flag: '🇦🇷', pct: 16 },
        { country: 'Brazil', flag: '🇧🇷', pct: 11 },
        { country: 'India', flag: '🇮🇳', pct: 9 },
        { country: 'Indonesia', flag: '🇮🇩', pct: 7 }
      ],
      recentForm: ['W','D','W','W','W'],
      upcomingMatches: [
        { opponent: 'Chelsea', opponentId: 'chelsea', home: false, date: 'Thu, Jun 12', comp: 'UCL QF' },
        { opponent: 'Real Madrid', opponentId: 'real-madrid', home: true, date: 'Today', comp: 'La Liga' },
        { opponent: 'Atletico', opponentId: null, home: false, date: 'Sun, Jun 22', comp: 'La Liga' }
      ]
    },
    {
      id: 'real-madrid',
      name: 'Real Madrid',
      fullName: 'Real Madrid CF',
      shortName: 'RMA',
      league: 'La Liga',
      country: 'Spain',
      founded: 1902,
      stadium: 'Santiago Bernabéu',
      city: 'Madrid',
      color: '#7B68EE',
      bgGradient: 'linear-gradient(135deg,#1a1a3a,#6b61d6)',
      followers: '6.8M',
      fanScore: 9.8,
      ranking: 1,
      description: 'Real Madrid CF is a Spanish professional football club based in Madrid. The most successful club in UEFA Champions League history.',
      topCommunityIds: ['los-blancos', 'hala-madrid'],
      activeCountries: [
        { country: 'Spain', flag: '🇪🇸', pct: 24 },
        { country: 'Brazil', flag: '🇧🇷', pct: 14 },
        { country: 'Mexico', flag: '🇲🇽', pct: 10 },
        { country: 'India', flag: '🇮🇳', pct: 9 },
        { country: 'Indonesia', flag: '🇮🇩', pct: 8 }
      ],
      recentForm: ['W','W','W','W','W'],
      upcomingMatches: [
        { opponent: 'Arsenal', opponentId: 'arsenal', home: true, date: 'Wed, Jun 11', comp: 'UCL QF' },
        { opponent: 'Barcelona', opponentId: 'barcelona', home: false, date: 'Today', comp: 'La Liga' },
        { opponent: 'Sevilla', opponentId: null, home: true, date: 'Sat, Jun 20', comp: 'La Liga' }
      ]
    },
    {
      id: 'psg',
      name: 'PSG',
      fullName: 'Paris Saint-Germain',
      shortName: 'PSG',
      league: 'Ligue 1',
      country: 'France',
      founded: 1970,
      stadium: 'Parc des Princes',
      city: 'Paris',
      color: '#004170',
      bgGradient: 'linear-gradient(135deg,#004170,#DA291C)',
      followers: '3.8M',
      fanScore: 9.1,
      ranking: 6,
      description: 'Paris Saint-Germain FC is a French professional football club based in Paris. One of the richest and most followed clubs in the world.',
      topCommunityIds: ['parisians-psg', 'paris-est-magique'],
      activeCountries: [
        { country: 'France', flag: '🇫🇷', pct: 32 },
        { country: 'Brazil', flag: '🇧🇷', pct: 13 },
        { country: 'Japan', flag: '🇯🇵', pct: 11 },
        { country: 'Algeria', flag: '🇩🇿', pct: 9 },
        { country: 'USA', flag: '🇺🇸', pct: 7 }
      ],
      recentForm: ['W','W','D','W','W'],
      upcomingMatches: [
        { opponent: 'Bayern Munich', opponentId: 'bayern', home: true, date: 'Today', comp: 'UCL QF' },
        { opponent: 'Man United', opponentId: 'man-utd', home: false, date: 'Sat, Jun 14', comp: 'UCL QF' },
        { opponent: 'Liverpool', opponentId: 'liverpool', home: false, date: 'Wed, Jun 18', comp: 'UCL QF' }
      ]
    },
    {
      id: 'bayern',
      name: 'Bayern Munich',
      fullName: 'FC Bayern München',
      shortName: 'FCB',
      league: 'Bundesliga',
      country: 'Germany',
      founded: 1900,
      stadium: 'Allianz Arena',
      city: 'Munich',
      color: '#DC052D',
      bgGradient: 'linear-gradient(135deg,#DC052D,#8B0000)',
      followers: '2.9M',
      fanScore: 9.3,
      ranking: 7,
      description: 'FC Bayern München is a German professional football club based in Munich. The most successful club in Bundesliga history.',
      topCommunityIds: ['fc-bayern-fans', 'mia-san-mia'],
      activeCountries: [
        { country: 'Germany', flag: '🇩🇪', pct: 38 },
        { country: 'Austria', flag: '🇦🇹', pct: 11 },
        { country: 'Poland', flag: '🇵🇱', pct: 8 },
        { country: 'USA', flag: '🇺🇸', pct: 7 },
        { country: 'China', flag: '🇨🇳', pct: 6 }
      ],
      recentForm: ['W','W','W','D','W'],
      upcomingMatches: [
        { opponent: 'PSG', opponentId: 'psg', home: false, date: 'Today', comp: 'UCL QF' },
        { opponent: 'Man United', opponentId: 'man-utd', home: true, date: 'Tue, Jun 17', comp: 'Friendly' },
        { opponent: 'Dortmund', opponentId: null, home: false, date: 'Sat, Jun 21', comp: 'Bundesliga' }
      ]
    }
  ],

  communities: [
    { id: 'arsenal-fc-official', name: 'Arsenal FC Official Fan Club', teamId: 'arsenal', members: 234567, activity: 'Very High', category: 'Official', color: '#EF0107', lastActivity: '2m ago', description: 'The official fan community for Arsenal FC supporters worldwide. Match discussions, news, and more.', posts: 1247 },
    { id: 'north-london-forever', name: 'North London Forever', teamId: 'arsenal', members: 89234, activity: 'High', category: 'Unofficial', color: '#EF0107', lastActivity: '5m ago', description: 'The best Arsenal fan community. We live and breathe the Gunners!', posts: 892 },
    { id: 'invincibles-tribute', name: 'The Invincibles Tribute', teamId: 'arsenal', members: 45123, activity: 'Medium', category: 'Tribute', color: '#EF0107', lastActivity: '1h ago', description: 'Celebrating the greatest unbeaten season in Premier League history.', posts: 445 },
    { id: 'the-kop', name: 'The Kop', teamId: 'liverpool', members: 412890, activity: 'Very High', category: 'Official', color: '#C8102E', lastActivity: '1m ago', description: 'Home of the most passionate Liverpool supporters. YNWA!', posts: 2341 },
    { id: 'kopites-worldwide', name: 'Kopites Worldwide', teamId: 'liverpool', members: 178234, activity: 'High', category: 'Global', color: '#C8102E', lastActivity: '8m ago', description: 'Liverpool fans from every corner of the globe. You\'ll Never Walk Alone.', posts: 1089 },
    { id: 'red-devils-united', name: 'Red Devils United', teamId: 'man-utd', members: 567123, activity: 'Very High', category: 'Official', color: '#DA291C', lastActivity: '3m ago', description: 'Manchester United fan community. The Theatre of Dreams lives here.', posts: 3124 },
    { id: 'stretford-end', name: 'Stretford End', teamId: 'man-utd', members: 234567, activity: 'High', category: 'Unofficial', color: '#DA291C', lastActivity: '15m ago', description: 'Old Trafford faithful. Glory glory Man United!', posts: 1567 },
    { id: 'chelsea-blues', name: 'Chelsea Blues', teamId: 'chelsea', members: 189234, activity: 'High', category: 'Official', color: '#034694', lastActivity: '10m ago', description: 'Official Chelsea FC supporter community. Come On You Blues!', posts: 1023 },
    { id: 'stamford-bridge-faithful', name: 'Stamford Bridge Faithful', teamId: 'chelsea', members: 78234, activity: 'Medium', category: 'Unofficial', color: '#034694', lastActivity: '45m ago', description: 'True blue Chelsea supporters from day one.', posts: 567 },
    { id: 'cules-worldwide', name: 'Cules Worldwide', teamId: 'barcelona', members: 892345, activity: 'Very High', category: 'Global', color: '#004D98', lastActivity: '1m ago', description: 'FC Barcelona supporters from around the world. Més que un club!', posts: 4567 },
    { id: 'mes-que-un-club', name: 'Més que un club', teamId: 'barcelona', members: 345678, activity: 'High', category: 'Official', color: '#004D98', lastActivity: '7m ago', description: 'More than a club. The official Barcelona supporter community.', posts: 2345 },
    { id: 'los-blancos', name: 'Los Blancos', teamId: 'real-madrid', members: 1234567, activity: 'Very High', category: 'Global', color: '#7B68EE', lastActivity: '30s ago', description: 'Real Madrid supporters worldwide. Hala Madrid!', posts: 6789 },
    { id: 'hala-madrid', name: 'Hala Madrid!', teamId: 'real-madrid', members: 567890, activity: 'Very High', category: 'Official', color: '#7B68EE', lastActivity: '2m ago', description: 'The official Real Madrid global fan community.', posts: 3456 },
    { id: 'parisians-psg', name: 'Parisians PSG', teamId: 'psg', members: 456789, activity: 'High', category: 'Official', color: '#004170', lastActivity: '12m ago', description: 'Paris Saint-Germain supporters. Paris est magique!', posts: 2123 },
    { id: 'paris-est-magique', name: 'Paris est Magique', teamId: 'psg', members: 123456, activity: 'High', category: 'Unofficial', color: '#004170', lastActivity: '20m ago', description: 'The magic of Paris, on and off the pitch.', posts: 934 },
    { id: 'fc-bayern-fans', name: 'FC Bayern Fan Club', teamId: 'bayern', members: 345678, activity: 'High', category: 'Official', color: '#DC052D', lastActivity: '20m ago', description: 'FC Bayern München supporter community. Mia san Mia!', posts: 1789 },
    { id: 'mia-san-mia', name: 'Mia San Mia', teamId: 'bayern', members: 98765, activity: 'Medium', category: 'Unofficial', color: '#DC052D', lastActivity: '35m ago', description: 'We are who we are. True Bayern fans.', posts: 623 },
    { id: 'ucl-weekly', name: 'UCL Weekly', teamId: null, members: 789234, activity: 'Very High', category: 'Competition', color: '#1E3A8A', lastActivity: '5m ago', description: 'Champions League news, predictions, and match reactions.', posts: 4321 },
    { id: 'transfer-rumours', name: 'Transfer Rumours HQ', teamId: null, members: 1123456, activity: 'Very High', category: 'News', color: '#7C3AED', lastActivity: '1m ago', description: 'The latest transfer news, rumours, and gossip from around Europe.', posts: 8234 },
    { id: 'tactical-analysis', name: 'Tactical Analysis', teamId: null, members: 234567, activity: 'Medium', category: 'Analysis', color: '#0F766E', lastActivity: '1h ago', description: 'Deep dive tactics, formations, and football intelligence.', posts: 1234 }
  ],

  posts: [
    {
      id: 'post-1',
      communityId: 'los-blancos',
      teamId: 'real-madrid',
      authorName: 'Santiago Ramos',
      authorColor: '#7B68EE',
      title: 'Real Madrid Are Still Confident In Signing Mbappé This Summer',
      excerpt: 'The Blancos continue to make the World Cup-winning forward a top transfer target, but fresh terms could yet be agreed at Parc des Princes.',
      content: [
        'Real Madrid remain confident that Kylian Mbappé can be signed this summer, Goal has learned, but an extended stay at Paris Saint-Germain for the World Cup winner is not being ruled out.',
        'Discussions between the parties regarding fresh terms for the 22-year-old forward are ongoing, with PSG eager to keep a prized asset who will hit free agency in 2024.',
        'The Blancos continue to lead the race for the Frenchman\'s signature, with Mbappé himself keen on a move to the Spanish capital. However, PSG\'s willingness to offer a lucrative contract extension has complicated the situation.',
        'Sources close to the player indicate that while Real Madrid remains the preferred destination, the player is taking his time to ensure the best possible outcome for his career.'
      ],
      image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&h=350&fit=crop',
      thumb: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=80&h=80&fit=crop',
      likes: 1247,
      comments: 89,
      shares: 234,
      timestamp: '2h ago',
      timeDisplay: 'Today, 10:12 AM',
      tags: ['Transfer', 'Real Madrid', 'Mbappé'],
      pinned: true
    },
    {
      id: 'post-2',
      communityId: 'transfer-rumours',
      teamId: null,
      authorName: 'James Mitchell',
      authorColor: '#7C3AED',
      title: 'Sergio Agüero Gives "Honest" Verdict On Situation After Signing',
      excerpt: 'The former Man City striker shares his thoughts on the current transfer market and what clubs should be targeting this summer.',
      content: [
        'Sergio Agüero has given an "honest" assessment of the current transfer landscape, speaking candidly about his expectations for the upcoming window.',
        'The Argentine legend, who retired due to a heart condition in 2021, believes this summer will see some of the biggest transfers in recent history.',
        '"Football has changed. The money involved now is astronomical," Agüero told reporters. "But the quality of players available is equally impressive."',
        'When asked about specific targets, the former Manchester City striker was characteristically forthright in his opinions, naming several clubs he believes will be active in the market.'
      ],
      image: 'https://images.unsplash.com/photo-1553778263-73a83bab9b0c?w=600&h=350&fit=crop',
      thumb: 'https://images.unsplash.com/photo-1553778263-73a83bab9b0c?w=80&h=80&fit=crop',
      likes: 892,
      comments: 67,
      shares: 123,
      timestamp: '3h ago',
      timeDisplay: 'Today, 9:45 AM',
      tags: ['Transfer', 'News', 'Aguero']
    },
    {
      id: 'post-3',
      communityId: 'arsenal-fc-official',
      teamId: 'arsenal',
      authorName: 'Arsenal_Fan_Alex',
      authorColor: '#EF0107',
      title: 'Saka is literally unplayable this season 🔥',
      excerpt: 'Man has been absolutely sensational. Best player in the PL this year hands down. The way he dribbles past defenders makes it look so easy.',
      content: [
        'I\'ve been watching Arsenal for 20 years and Bukayo Saka is genuinely one of the best players we\'ve ever produced.',
        'The vision, the pace, the finishing... at just 22 years old he already has it all. His defensive contribution too often goes unnoticed but he tracks back and wins tackles like a proper midfielder.',
        'What makes him so dangerous is his unpredictability. Defenders simply don\'t know whether he\'s going to cut inside onto his left or take it on with his right.',
        'Compare him to any winger in European football right now — he\'s top 3, no argument. What do you guys think?'
      ],
      image: null,
      thumb: null,
      likes: 2341,
      comments: 234,
      shares: 89,
      timestamp: '45m ago',
      timeDisplay: 'Today, 12:15 PM',
      tags: ['Arsenal', 'Saka', 'Discussion']
    },
    {
      id: 'post-4',
      communityId: 'the-kop',
      teamId: 'liverpool',
      authorName: 'KopiteLad',
      authorColor: '#C8102E',
      title: 'YNWA 🔴 What a night at Anfield last night!',
      excerpt: 'The atmosphere was electric! 50,000 people singing You\'ll Never Walk Alone gave me proper chills. This is why we love football.',
      content: [
        'Genuinely one of the best nights I\'ve had at Anfield in 15 years of going.',
        'The atmosphere before kick-off was something else. The whole ground erupted when the team walked out and You\'ll Never Walk Alone echoed around the stadium — it never gets old.',
        'Liverpool were brilliant on the night. Salah was exceptional, Van Dijk was a colossus, and the whole team played with an intensity that was breathtaking.',
        'Moments like this are why we are the most passionate fans in the world. YNWA 🔴'
      ],
      image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=600&h=350&fit=crop',
      thumb: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=80&h=80&fit=crop',
      likes: 4521,
      comments: 312,
      shares: 567,
      timestamp: '1h ago',
      timeDisplay: 'Today, 11:30 AM',
      tags: ['Liverpool', 'Anfield', 'Atmosphere'],
      pinned: true
    },
    {
      id: 'post-5',
      communityId: 'ucl-weekly',
      teamId: null,
      authorName: 'UCL_Reporter',
      authorColor: '#1E3A8A',
      title: 'Champions League Quarter-Final Draw Results 🏆',
      excerpt: 'The draw has been made. Some blockbuster ties await — Real Madrid vs Arsenal is the pick of the round!',
      content: [
        'The UEFA Champions League quarter-final draw was conducted at the House of European Football in Nyon, Switzerland.',
        'The headline tie is undoubtedly Real Madrid vs Arsenal — a rematch of their 2006 final and a clash of two of Europe\'s most storied clubs.',
        'Bayern Munich will face PSG in what promises to be a tactical masterclass, while Chelsea take on Barcelona in a thrilling London vs Catalonia showdown.',
        'The ties will be played over two legs across 11th and 18th June, with the semi-final draw to follow immediately after.'
      ],
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=350&fit=crop',
      thumb: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=80&h=80&fit=crop',
      likes: 3421,
      comments: 445,
      shares: 891,
      timestamp: '4h ago',
      timeDisplay: 'Today, 8:30 AM',
      tags: ['UCL', 'Draw', 'Champions League'],
      pinned: true
    },
    {
      id: 'post-6',
      communityId: 'red-devils-united',
      teamId: 'man-utd',
      authorName: 'OldTraffordDave',
      authorColor: '#DA291C',
      title: 'Ratcliffe\'s rebuilding plan — what do you make of it so far?',
      excerpt: 'INEOS have been making serious moves. New staff, new training ground, squad overhaul incoming. Your honest thoughts?',
      content: [
        'Since INEOS took over, I\'ve been cautiously optimistic. Yes, the season has been difficult, but the structural changes being made are necessary for long-term success.',
        'The new training ground plans, the restructuring of the scouting department, the appointment of senior football staff with real credentials — these are all the right moves.',
        'What worries me is the timeline. We need to compete next season. Can Ratcliffe and INEOS accelerate their rebuilding plan while also being competitive in the Premier League?',
        'What are your thoughts? Feeling optimistic or still skeptical?'
      ],
      image: null,
      thumb: null,
      likes: 1876,
      comments: 567,
      shares: 234,
      timestamp: '6h ago',
      timeDisplay: 'Today, 6:45 AM',
      tags: ['Man United', 'INEOS', 'Future']
    },
    {
      id: 'post-7',
      communityId: 'cules-worldwide',
      teamId: 'barcelona',
      authorName: 'CuleLoco',
      authorColor: '#004D98',
      title: 'Lamine Yamal at 16 years old 🤯 We\'re witnessing history',
      excerpt: 'The kid is already playing at a generational level. Can\'t wait to see where he is at 21. Messi comparisons might actually be justified.',
      content: [
        'I genuinely cannot believe this kid is 16 years old. His calmness on the ball, his decision making under pressure, his direct dribbling — it\'s extraordinary.',
        'He reminds me of early Messi but with his own unique style. Where Messi was more of a dribbler, Yamal seems to have an even better understanding of when to pass and when to go alone.',
        'The scary thing? He\'s only going to get better. His physical development, his tactical understanding — all of it will improve over the next 3-4 years.',
        'Culers, we are witnessing something special. Cherish every game. 💙❤️'
      ],
      image: 'https://images.unsplash.com/photo-1547347298-4074fc3086f0?w=600&h=350&fit=crop',
      thumb: 'https://images.unsplash.com/photo-1547347298-4074fc3086f0?w=80&h=80&fit=crop',
      likes: 6234,
      comments: 892,
      shares: 1234,
      timestamp: '30m ago',
      timeDisplay: 'Today, 12:30 PM',
      tags: ['Barcelona', 'Yamal', 'Wonderkid'],
      pinned: true
    },
    {
      id: 'post-8',
      communityId: 'transfer-rumours',
      teamId: null,
      authorName: 'TransferGuru',
      authorColor: '#7C3AED',
      title: 'Arsenal in advanced talks for €80M midfielder — exclusive 🚨',
      excerpt: 'Gunners look to bolster their midfield depth ahead of a crucial Champions League campaign next season.',
      content: [
        'Arsenal are in advanced talks with a top European club over the signing of a key midfielder. The deal is expected to be worth in the region of €80 million.',
        'The North London club have identified the position as a priority after their Champions League exit and are prepared to back Arteta significantly in the transfer window.',
        'Multiple sources confirm that personal terms have already been agreed with the player, and the fee negotiation between clubs is at an advanced stage.',
        'An official announcement is expected within the next fortnight if talks continue positively.'
      ],
      image: 'https://images.unsplash.com/photo-1540747913346-19212a729eed?w=600&h=350&fit=crop',
      thumb: 'https://images.unsplash.com/photo-1540747913346-19212a729eed?w=80&h=80&fit=crop',
      likes: 2134,
      comments: 321,
      shares: 445,
      timestamp: '2h ago',
      timeDisplay: 'Today, 10:45 AM',
      tags: ['Arsenal', 'Transfer', 'Exclusive']
    },
    {
      id: 'post-9',
      communityId: 'los-blancos',
      teamId: 'real-madrid',
      authorName: 'MadridMagic',
      authorColor: '#7B68EE',
      title: 'Bellingham vs Pedri — who\'s better right now? 🤔',
      excerpt: 'Two of Europe\'s brightest young talents. Both generational. But in a straight head-to-head, who gets your vote?',
      content: [
        'This is the debate of the generation. Bellingham — goals, leadership, press resistance, athleticism. Pedri — creativity, vision, technical brilliance, composure.',
        'Bellingham is the complete midfielder in the modern mold. He can do everything — score, assist, defend, lead. His mental strength is extraordinary for someone his age.',
        'Pedri, on the other hand, is perhaps the best pure technical midfielder we\'ve seen since Iniesta. His ability to find space and play through the press is masterful.',
        'For me, it depends on what you value more. Drop your verdict below!'
      ],
      image: null,
      thumb: null,
      likes: 4321,
      comments: 1234,
      shares: 567,
      timestamp: '1h ago',
      timeDisplay: 'Today, 11:00 AM',
      tags: ['Bellingham', 'Pedri', 'Debate']
    },
    {
      id: 'post-10',
      communityId: 'fc-bayern-fans',
      teamId: 'bayern',
      authorName: 'Bayern_Official',
      authorColor: '#DC052D',
      title: 'Harry Kane breaks Bayern\'s all-time seasonal scoring record 🏆',
      excerpt: 'The England captain has shattered records at the Allianz Arena. In just his debut Bundesliga season — extraordinary.',
      content: [
        'Harry Kane has broken the record for most goals scored by a player in a single Bundesliga season. The England captain surpassed Gerd Müller\'s legendary record, set over 50 years ago.',
        'Kane reached the milestone in Bayern\'s 4-1 victory over Wolfsburg, scoring a hat-trick to bring his tally to 41 league goals — a number that seemed impossible at the start of the season.',
        'The 30-year-old striker, who joined Bayern from Tottenham in a €100m deal, has silenced all doubters who questioned whether he could adapt to a new league.',
        'Mia san Mia — and Harry Kane is now one of us. 🔴'
      ],
      image: 'https://images.unsplash.com/photo-1565974498891-5d5e7a1bfe25?w=600&h=350&fit=crop',
      thumb: 'https://images.unsplash.com/photo-1565974498891-5d5e7a1bfe25?w=80&h=80&fit=crop',
      likes: 5234,
      comments: 567,
      shares: 891,
      timestamp: '3h ago',
      timeDisplay: 'Today, 9:30 AM',
      tags: ['Bayern', 'Kane', 'Record'],
      pinned: true
    }
  ],

  fixtures: [
    // LIVE
    {
      id: 'fix-live-1',
      homeTeamId: 'arsenal',
      awayTeamId: 'chelsea',
      homeScore: 2,
      awayScore: 1,
      minute: 67,
      isLive: true,
      status: 'LIVE',
      competition: 'Premier League',
      competitionShort: 'PL',
      date: 'Today',
      time: '15:00',
      stadium: 'Emirates Stadium',
      atmosphereRating: 9.2,
      communityBuzz: 4521
    },
    {
      id: 'fix-live-2',
      homeTeamId: 'barcelona',
      awayTeamId: 'real-madrid',
      homeScore: 1,
      awayScore: 1,
      minute: 45,
      isLive: true,
      status: 'HT',
      competition: 'La Liga',
      competitionShort: 'LL',
      date: 'Today',
      time: '18:00',
      stadium: 'Camp Nou',
      atmosphereRating: 9.9,
      communityBuzz: 12345
    },
    {
      id: 'fix-live-3',
      homeTeamId: 'psg',
      awayTeamId: 'bayern',
      homeScore: 0,
      awayScore: 2,
      minute: 78,
      isLive: true,
      status: 'LIVE',
      competition: 'UCL Quarter-Final',
      competitionShort: 'UCL',
      date: 'Today',
      time: '20:00',
      stadium: 'Parc des Princes',
      atmosphereRating: 8.7,
      communityBuzz: 8932
    },
    // UPCOMING
    {
      id: 'fix-1',
      homeTeamId: 'liverpool',
      awayTeamId: 'man-utd',
      homeScore: null,
      awayScore: null,
      isLive: false,
      status: 'UPCOMING',
      competition: 'Premier League',
      competitionShort: 'PL',
      date: 'Tomorrow',
      time: '17:30',
      stadium: 'Anfield',
      atmosphereRating: null,
      communityBuzz: 6789
    },
    {
      id: 'fix-2',
      homeTeamId: 'real-madrid',
      awayTeamId: 'arsenal',
      homeScore: null,
      awayScore: null,
      isLive: false,
      status: 'UPCOMING',
      competition: 'UCL Quarter-Final',
      competitionShort: 'UCL',
      date: 'Wed, Jun 11',
      time: '20:00',
      stadium: 'Santiago Bernabéu',
      atmosphereRating: null,
      communityBuzz: 9876
    },
    {
      id: 'fix-3',
      homeTeamId: 'chelsea',
      awayTeamId: 'barcelona',
      homeScore: null,
      awayScore: null,
      isLive: false,
      status: 'UPCOMING',
      competition: 'UCL Quarter-Final',
      competitionShort: 'UCL',
      date: 'Thu, Jun 12',
      time: '20:00',
      stadium: 'Stamford Bridge',
      atmosphereRating: null,
      communityBuzz: 7654
    },
    {
      id: 'fix-4',
      homeTeamId: 'man-utd',
      awayTeamId: 'psg',
      homeScore: null,
      awayScore: null,
      isLive: false,
      status: 'UPCOMING',
      competition: 'UCL Quarter-Final',
      competitionShort: 'UCL',
      date: 'Sat, Jun 14',
      time: '15:00',
      stadium: 'Old Trafford',
      atmosphereRating: null,
      communityBuzz: 8901
    },
    {
      id: 'fix-5',
      homeTeamId: 'arsenal',
      awayTeamId: 'liverpool',
      homeScore: null,
      awayScore: null,
      isLive: false,
      status: 'UPCOMING',
      competition: 'Premier League',
      competitionShort: 'PL',
      date: 'Sun, Jun 15',
      time: '16:30',
      stadium: 'Emirates Stadium',
      atmosphereRating: null,
      communityBuzz: 11234
    },
    {
      id: 'fix-6',
      homeTeamId: 'bayern',
      awayTeamId: 'chelsea',
      homeScore: null,
      awayScore: null,
      isLive: false,
      status: 'UPCOMING',
      competition: 'UCL Quarter-Final',
      competitionShort: 'UCL',
      date: 'Tue, Jun 17',
      time: '20:00',
      stadium: 'Allianz Arena',
      atmosphereRating: null,
      communityBuzz: 5432
    }
  ],

  standings: {
    competition: 'Premier League',
    season: '2024/25',
    table: [
      { pos: 1, teamId: 'chelsea',     name: 'Chelsea',    p: 11, w: 8, d: 2, l: 1, gf: 27, ga: 4,  gd: 23,  pts: 26, zone: 'ucl' },
      { pos: 2, teamId: null,          name: 'Man. City',  p: 11, w: 7, d: 2, l: 2, gf: 22, ga: 6,  gd: 16,  pts: 23, zone: 'ucl' },
      { pos: 3, teamId: null,          name: 'West Ham.',  p: 11, w: 7, d: 2, l: 2, gf: 23, ga: 13, gd: 10,  pts: 23, zone: 'ucl' },
      { pos: 4, teamId: 'liverpool',   name: 'Liverpool',  p: 11, w: 6, d: 4, l: 1, gf: 31, ga: 11, gd: 20,  pts: 22, zone: 'ucl' },
      { pos: 5, teamId: 'arsenal',     name: 'Arsenal',    p: 11, w: 6, d: 2, l: 3, gf: 13, ga: 13, gd: 0,   pts: 20, zone: 'europa' },
      { pos: 6, teamId: 'man-utd',     name: 'Man. Unit..', p: 11, w: 5, d: 2, l: 4, gf: 19, ga: 17, gd: 2,  pts: 17, zone: 'europa' },
      { pos: 7, teamId: null,          name: 'Brighton &..', p: 11, w: 4, d: 5, l: 2, gf: 12, ga: 12, gd: 0, pts: 17, zone: 'none' },
      { pos: 8, teamId: null,          name: 'Wolverha..', p: 11, w: 5, d: 1, l: 5, gf: 11, ga: 12, gd: -1,  pts: 16, zone: 'relegation' }
    ]
  },

  leaderboard: [
    { id: 'lb-1', name: 'Santiago R.',  fanPoints: 8921, rank: 1,  teamId: 'real-madrid', color: '#7B68EE' },
    { id: 'lb-2', name: 'James M.',     fanPoints: 7234, rank: 2,  teamId: 'liverpool',   color: '#C8102E' },
    { id: 'lb-3', name: 'Arsenal_Alex', fanPoints: 6891, rank: 3,  teamId: 'arsenal',     color: '#EF0107' },
    { id: 'lb-4', name: 'KopiteLad',    fanPoints: 5432, rank: 4,  teamId: 'liverpool',   color: '#C8102E' },
    { id: 'lb-5', name: 'UCL_Reporter', fanPoints: 4987, rank: 5,  teamId: null,          color: '#1E3A8A' },
    { id: 'lb-6', name: 'CuleLoco',     fanPoints: 4321, rank: 6,  teamId: 'barcelona',   color: '#004D98' },
    { id: 'lb-7', name: 'BayernHero',   fanPoints: 3789, rank: 7,  teamId: 'bayern',      color: '#DC052D' },
    { id: 'lb-8', name: 'ParisFan99',   fanPoints: 3102, rank: 8,  teamId: 'psg',         color: '#004170' },
    { id: 'lb-9', name: 'BlueIsTheCol', fanPoints: 2876, rank: 9,  teamId: 'chelsea',     color: '#034694' },
    { id: 'lb-10', name: 'RedDevil_D',  fanPoints: 2345, rank: 10, teamId: 'man-utd',     color: '#DA291C' }
  ],

  gifts: [
    { id: 'gift-1', count: 1, type: 'Ticket', subtype: 'Streaming', color: '#F59E0B', color2: '#D97706' },
    { id: 'gift-2', count: 3, type: 'Ticket', subtype: 'Streaming', color: '#EC4899', color2: '#BE185D' },
    { id: 'gift-3', count: 2, type: 'Voucher', subtype: 'Merchandise', color: '#8B5CF6', color2: '#6D28D9' },
    { id: 'gift-4', count: 1, type: 'VIP', subtype: 'Match Day', color: '#10B981', color2: '#059669' }
  ]

};
