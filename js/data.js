// ====================================================
//  FANCLUB — Mock Data (data.js)
// ====================================================

const DATA = {

  homeMatches: {
    featured: {
      homeTeam: 'ENGLAND',    homeColor: '#ffffff', homeShort: 'ENG',
      awayTeam: 'SPAIN',      awayColor: '#c60b1e', awayShort: 'ESP',
      competition: 'World Cup 2026', competitionIcon: '🏆',
      date: 'Sat, 21 JUN  –  20:00 PM',
      image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=700&h=320&fit=crop'
    },
    matchWeek: [
      {
        home: 'Brazil', away: 'Argentina',
        comp: 'World Cup', compColor: '#22c55e',
        date: 'Today, 17 Jun', time: '20:00 PM',
        image: 'https://images.unsplash.com/photo-1553778263-73a83bab9b0c?w=320&h=200&fit=crop',
        color: '#00379b'
      },
      {
        home: 'Arsenal', away: 'Liverpool',
        comp: 'Premier League', compColor: '#3D195B',
        date: 'Tomorrow, 18 Jun', time: '20:00 PM',
        image: 'https://images.unsplash.com/photo-1529900748604-07564a03e7a6?w=320&h=200&fit=crop',
        color: '#7B0000'
      },
      {
        home: 'England', away: 'Portugal',
        comp: 'World Cup', compColor: '#22c55e',
        date: 'Wed, 19 Jun', time: '20:00 PM',
        image: 'https://images.unsplash.com/photo-1553778263-73a83bab9b0c?w=320&h=200&fit=crop',
        color: '#7B0000'
      },
      {
        home: 'PSG', away: 'Bayern',
        comp: 'UCL', compColor: '#0047AB',
        date: 'Thu, 20 Jun', time: '21:00 PM',
        image: 'https://images.unsplash.com/photo-1529900748604-07564a03e7a6?w=320&h=200&fit=crop',
        color: '#003A6B'
      }
    ],
    liveScores: [
      { home: 'Brazil',   homeId: 'brazil-nt',  away: 'Argentina', awayId: null,      homeScore: 1, awayScore: 0, minute: 67, comp: 'WC QF' },
      { home: 'Morocco',  homeId: null,         away: 'Croatia',   awayId: null,      homeScore: 1, awayScore: 0, minute: 58, comp: 'WC' },
      { home: 'Arsenal',  homeId: 'arsenal',    away: 'Chelsea',   awayId: 'chelsea', homeScore: 2, awayScore: 1, minute: 67, comp: 'PL' },
      { home: 'PSG',      homeId: 'psg',        away: 'Bayern',    awayId: 'bayern',  homeScore: 0, awayScore: 2, minute: 78, comp: 'UCL' }
    ],
    highlights: [
      {
        home: 'BRAZIL', away: 'ECUADOR',
        comp: 'World Cup', duration: '02:47', color: '#009c3b',
        image: 'https://images.unsplash.com/photo-1529900748604-07564a03e7a6?w=320&h=220&fit=crop'
      },
      {
        home: 'FRANCE', away: 'POLAND',
        comp: 'World Cup', duration: '01:53', color: '#002395',
        image: 'https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=320&h=220&fit=crop'
      },
      {
        home: 'ENGLAND', away: 'IRAN',
        comp: 'World Cup', duration: '03:12', color: '#012169',
        image: 'https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?w=320&h=220&fit=crop'
      }
    ],
    previews: [
      {
        home: 'SPAIN', away: 'ITALY',
        comp: 'World Cup', duration: '02:15', color: '#c60b1e',
        image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=320&h=220&fit=crop'
      },
      {
        home: 'ARGENTINA', away: 'CHILE',
        comp: 'World Cup', duration: '02:00', color: '#74acdf',
        image: 'https://images.unsplash.com/photo-1521537634581-0dced2fee2ef?w=320&h=220&fit=crop'
      },
      {
        home: 'GERMANY', away: 'SWITZERLAND',
        comp: 'World Cup', duration: '01:45', color: '#000000',
        image: 'https://images.unsplash.com/photo-1553778263-73a83bab9b0c?w=320&h=220&fit=crop'
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
      topCommunityIds: ['arsenal-fc-official', 'north-london-forever', 'arsenal-lagos-chapter', 'arsenal-mumbai-reds'],
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
      topCommunityIds: ['the-kop', 'kopites-worldwide', 'kopites-kuala-lumpur'],
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
      topCommunityIds: ['red-devils-united', 'stretford-end', 'united-bangkok-army', 'red-devils-jakarta'],
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
      topCommunityIds: ['chelsea-blues', 'stamford-bridge-faithful', 'chelsea-fans-mumbai', 'blues-tokyo'],
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
        { opponent: 'Dortmund', opponentId: 'dortmund', home: false, date: 'Sat, Jun 21', comp: 'Bundesliga' }
      ]
    },
    {
      id: 'stuttgart',
      name: 'Stuttgart',
      fullName: 'VfB Stuttgart',
      shortName: 'VFB',
      league: 'Bundesliga',
      country: 'Germany',
      founded: 1893,
      stadium: 'MHPArena',
      city: 'Stuttgart',
      color: '#E31E2D',
      bgGradient: 'linear-gradient(135deg,#E31E2D,#8B0000)',
      followers: '420K',
      fanScore: 8.1,
      ranking: 12,
      description: 'VfB Stuttgart is a German professional football club. Winners of 5 Bundesliga titles, they are one of Germany\'s most historic clubs.',
      topCommunityIds: ['vfb-ultras', 'stuttgart-fans-asia'],
      activeCountries: [
        { country: 'Germany', flag: '🇩🇪', pct: 52 },
        { country: 'Turkey', flag: '🇹🇷', pct: 14 },
        { country: 'Japan', flag: '🇯🇵', pct: 8 },
        { country: 'Austria', flag: '🇦🇹', pct: 7 },
        { country: 'USA', flag: '🇺🇸', pct: 5 }
      ],
      recentForm: ['W','W','W','L','W'],
      upcomingMatches: [
        { opponent: 'Bayern Munich', opponentId: 'bayern', home: false, date: 'Sat, Jun 21', comp: 'Bundesliga' },
        { opponent: 'Dortmund', opponentId: 'dortmund', home: true, date: 'Fri, Jun 27', comp: 'Bundesliga' },
        { opponent: 'Leverkusen', opponentId: null, home: false, date: 'Sat, Jul 5', comp: 'Bundesliga' }
      ]
    },
    {
      id: 'atletico',
      name: 'Atletico Madrid',
      fullName: 'Club Atlético de Madrid',
      shortName: 'ATM',
      league: 'La Liga',
      country: 'Spain',
      founded: 1903,
      stadium: 'Metropolitano',
      city: 'Madrid',
      color: '#CE3524',
      bgGradient: 'linear-gradient(135deg,#CE3524,#1B2B6B)',
      followers: '1.9M',
      fanScore: 8.8,
      ranking: 8,
      description: 'Atlético de Madrid are the underdogs of Madrid who punch above their weight. Known for their intense defending and passionate Colchoneros fan base.',
      topCommunityIds: ['colchoneros-union', 'atletico-latam'],
      activeCountries: [
        { country: 'Spain', flag: '🇪🇸', pct: 38 },
        { country: 'Argentina', flag: '🇦🇷', pct: 16 },
        { country: 'Mexico', flag: '🇲🇽', pct: 12 },
        { country: 'Colombia', flag: '🇨🇴', pct: 9 },
        { country: 'Brazil', flag: '🇧🇷', pct: 7 }
      ],
      recentForm: ['W','D','W','W','D'],
      upcomingMatches: [
        { opponent: 'Real Madrid', opponentId: 'real-madrid', home: false, date: 'Sun, Jun 22', comp: 'La Liga' },
        { opponent: 'Barcelona', opponentId: 'barcelona', home: true, date: 'Sat, Jun 28', comp: 'La Liga' },
        { opponent: 'Sevilla', opponentId: null, home: false, date: 'Sun, Jul 6', comp: 'La Liga' }
      ]
    },
    {
      id: 'ac-milan',
      name: 'AC Milan',
      fullName: 'AC Milan',
      shortName: 'MIL',
      league: 'Serie A',
      country: 'Italy',
      founded: 1899,
      stadium: 'San Siro',
      city: 'Milan',
      color: '#FB090B',
      bgGradient: 'linear-gradient(135deg,#FB090B,#1A1A1A)',
      followers: '2.4M',
      fanScore: 8.7,
      ranking: 9,
      description: 'AC Milan are one of the world\'s most iconic football clubs. 7x European Cup winners, the Rossoneri are synonymous with style, prestige, and football greatness.',
      topCommunityIds: ['rossoneri-milan', 'milan-fans-singapore'],
      activeCountries: [
        { country: 'Italy', flag: '🇮🇹', pct: 33 },
        { country: 'Brazil', flag: '🇧🇷', pct: 12 },
        { country: 'Japan', flag: '🇯🇵', pct: 10 },
        { country: 'Indonesia', flag: '🇮🇩', pct: 9 },
        { country: 'USA', flag: '🇺🇸', pct: 8 }
      ],
      recentForm: ['W','W','D','W','L'],
      upcomingMatches: [
        { opponent: 'Juventus', opponentId: 'juventus', home: true, date: 'Sun, Jun 22', comp: 'Serie A' },
        { opponent: 'Inter Milan', opponentId: null, home: false, date: 'Sat, Jun 28', comp: 'Serie A Derby' },
        { opponent: 'Napoli', opponentId: null, home: true, date: 'Sun, Jul 6', comp: 'Serie A' }
      ]
    },
    {
      id: 'juventus',
      name: 'Juventus',
      fullName: 'Juventus FC',
      shortName: 'JUV',
      league: 'Serie A',
      country: 'Italy',
      founded: 1897,
      stadium: 'Allianz Stadium',
      city: 'Turin',
      color: '#000000',
      bgGradient: 'linear-gradient(135deg,#2a2a2a,#4a4a4a)',
      followers: '3.2M',
      fanScore: 8.5,
      ranking: 10,
      description: 'Juventus FC — La Vecchia Signora. Italy\'s most successful club with 36 Serie A titles. The Old Lady of Italian football commands a global following.',
      topCommunityIds: ['bianconeri-official', 'juve-fans-dubai'],
      activeCountries: [
        { country: 'Italy', flag: '🇮🇹', pct: 29 },
        { country: 'UAE', flag: '🇦🇪', pct: 13 },
        { country: 'Brazil', flag: '🇧🇷', pct: 11 },
        { country: 'Argentina', flag: '🇦🇷', pct: 9 },
        { country: 'France', flag: '🇫🇷', pct: 7 }
      ],
      recentForm: ['D','W','W','D','W'],
      upcomingMatches: [
        { opponent: 'AC Milan', opponentId: 'ac-milan', home: false, date: 'Sun, Jun 22', comp: 'Serie A' },
        { opponent: 'Napoli', opponentId: null, home: true, date: 'Sat, Jun 28', comp: 'Serie A' },
        { opponent: 'Inter Milan', opponentId: null, home: false, date: 'Sun, Jul 6', comp: 'Serie A' }
      ]
    },
    {
      id: 'dortmund',
      name: 'Dortmund',
      fullName: 'Borussia Dortmund',
      shortName: 'BVB',
      league: 'Bundesliga',
      country: 'Germany',
      founded: 1909,
      stadium: 'Signal Iduna Park',
      city: 'Dortmund',
      color: '#FDE122',
      bgGradient: 'linear-gradient(135deg,#FDE122,#c8a800)',
      followers: '1.7M',
      fanScore: 8.6,
      ranking: 11,
      description: 'Borussia Dortmund — BVB. Home of the famous Yellow Wall, the largest standing terrace in European football. Die Schwarzgelben are a European giant with the most passionate support.',
      topCommunityIds: ['yellow-wall-bvb', 'bvb-fans-worldwide'],
      activeCountries: [
        { country: 'Germany', flag: '🇩🇪', pct: 44 },
        { country: 'Poland', flag: '🇵🇱', pct: 12 },
        { country: 'Japan', flag: '🇯🇵', pct: 9 },
        { country: 'UK', flag: '🇬🇧', pct: 7 },
        { country: 'USA', flag: '🇺🇸', pct: 6 }
      ],
      recentForm: ['W','L','W','W','D'],
      upcomingMatches: [
        { opponent: 'Bayern Munich', opponentId: 'bayern', home: true, date: 'Sat, Jun 21', comp: 'Bundesliga' },
        { opponent: 'Stuttgart', opponentId: 'stuttgart', home: false, date: 'Fri, Jun 27', comp: 'Bundesliga' },
        { opponent: 'Leipzig', opponentId: null, home: true, date: 'Sat, Jul 5', comp: 'Bundesliga' }
      ]
    },

    // ── National Teams — World Cup 2026 ──
    {
      id: 'england-nt', name: 'England', fullName: 'England National Team',
      shortName: 'ENG', league: 'International', country: 'England',
      founded: 1863, stadium: 'Wembley Stadium', city: 'London',
      color: '#ffffff', bgGradient: 'linear-gradient(135deg,#012169,#C8102E)',
      followers: '8.2M', fanScore: 9.1, ranking: 4,
      description: 'The Three Lions. England\'s national football team and one of the most followed sides at the 2026 World Cup. It\'s coming home.',
      topCommunityIds: ['three-lions-2026', 'arsenal-lagos-chapter', 'kopites-kuala-lumpur'],
      activeCountries: [
        { country: 'England', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', pct: 48 },
        { country: 'Nigeria', flag: '🇳🇬', pct: 14 },
        { country: 'India', flag: '🇮🇳', pct: 9 },
        { country: 'USA', flag: '🇺🇸', pct: 8 },
        { country: 'Australia', flag: '🇦🇺', pct: 5 }
      ],
      recentForm: ['W','W','D','W','W'],
      upcomingMatches: [
        { opponent: 'Portugal', opponentId: null, home: false, date: 'Wed, Jun 19', comp: 'World Cup' },
        { opponent: 'Spain', opponentId: 'spain-nt', home: false, date: 'Sat, Jun 21', comp: 'World Cup SF' },
        { opponent: 'TBD', opponentId: null, home: false, date: 'Sat, Jun 28', comp: 'World Cup Final' }
      ]
    },
    {
      id: 'spain-nt', name: 'Spain', fullName: 'Spain National Team',
      shortName: 'ESP', league: 'International', country: 'Spain',
      founded: 1913, stadium: 'Santiago Bernabéu', city: 'Madrid',
      color: '#c60b1e', bgGradient: 'linear-gradient(135deg,#c60b1e,#f1bf00)',
      followers: '6.7M', fanScore: 8.9, ranking: 2,
      description: 'La Roja. European Champions and World Cup 2026 favourites. Spain\'s tiki-taka evolution under the new generation.',
      topCommunityIds: ['spain-roja-fans', 'colchoneros-union', 'cules-worldwide'],
      activeCountries: [
        { country: 'Spain', flag: '🇪🇸', pct: 44 },
        { country: 'Mexico', flag: '🇲🇽', pct: 16 },
        { country: 'Argentina', flag: '🇦🇷', pct: 10 },
        { country: 'USA', flag: '🇺🇸', pct: 8 },
        { country: 'Colombia', flag: '🇨🇴', pct: 6 }
      ],
      recentForm: ['W','W','W','D','W'],
      upcomingMatches: [
        { opponent: 'Italy', opponentId: null, home: false, date: 'Mon, Jun 18', comp: 'World Cup' },
        { opponent: 'England', opponentId: 'england-nt', home: false, date: 'Sat, Jun 21', comp: 'World Cup SF' },
        { opponent: 'TBD', opponentId: null, home: false, date: 'Sat, Jun 28', comp: 'World Cup Final' }
      ]
    },
    {
      id: 'germany-nt', name: 'Germany', fullName: 'Germany National Team',
      shortName: 'GER', league: 'International', country: 'Germany',
      founded: 1900, stadium: 'Allianz Arena', city: 'Munich',
      color: '#000000', bgGradient: 'linear-gradient(135deg,#1a1a1a,#3a3a3a)',
      followers: '5.9M', fanScore: 8.7, ranking: 5,
      description: 'Die Mannschaft. Four-time World Champions and perpetual contenders. Germany\'s golden generation returns to the world stage.',
      topCommunityIds: ['die-mannschaft-fans', 'yellow-wall-bvb', 'mia-san-mia'],
      activeCountries: [
        { country: 'Germany', flag: '🇩🇪', pct: 51 },
        { country: 'Turkey', flag: '🇹🇷', pct: 13 },
        { country: 'Poland', flag: '🇵🇱', pct: 8 },
        { country: 'Austria', flag: '🇦🇹', pct: 7 },
        { country: 'USA', flag: '🇺🇸', pct: 5 }
      ],
      recentForm: ['W','D','W','W','L'],
      upcomingMatches: [
        { opponent: 'France', opponentId: 'france-nt', home: false, date: 'Tomorrow, Jun 18', comp: 'World Cup QF' },
        { opponent: 'TBD', opponentId: null, home: false, date: 'Wed, Jun 25', comp: 'World Cup SF' },
        { opponent: 'TBD', opponentId: null, home: false, date: 'Sat, Jun 28', comp: 'World Cup Final' }
      ]
    },
    {
      id: 'brazil-nt', name: 'Brazil', fullName: 'Brazil National Team',
      shortName: 'BRA', league: 'International', country: 'Brazil',
      founded: 1914, stadium: 'Maracanã', city: 'Rio de Janeiro',
      color: '#009c3b', bgGradient: 'linear-gradient(135deg,#009c3b,#FEDD00)',
      followers: '12.4M', fanScore: 9.4, ranking: 1,
      description: 'A Seleção. Five-time World Champions and the most loved football nation on earth. Brazil 2026 — the Samba is back.',
      topCommunityIds: ['selecao-brasil-2026', 'bvb-sao-paulo', 'rossoneri-milan'],
      activeCountries: [
        { country: 'Brazil', flag: '🇧🇷', pct: 39 },
        { country: 'USA', flag: '🇺🇸', pct: 12 },
        { country: 'Japan', flag: '🇯🇵', pct: 9 },
        { country: 'Portugal', flag: '🇵🇹', pct: 7 },
        { country: 'Argentina', flag: '🇦🇷', pct: 6 }
      ],
      recentForm: ['W','W','W','W','D'],
      upcomingMatches: [
        { opponent: 'Argentina', opponentId: null, home: false, date: 'Today, Jun 17', comp: 'World Cup QF' },
        { opponent: 'TBD', opponentId: null, home: false, date: 'Fri, Jun 21', comp: 'World Cup SF' },
        { opponent: 'TBD', opponentId: null, home: false, date: 'Sat, Jun 28', comp: 'World Cup Final' }
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
    { id: 'mes-que-un-club', name: 'Més que un club', teamId: 'barcelona', members: 89234, activity: 'High', category: 'Official', color: '#004D98', lastActivity: '7m ago', description: 'More than a club. The official Barcelona supporter community.', posts: 2345 },
    { id: 'hala-madrid', name: 'Hala Madrid!', teamId: 'real-madrid', members: 78234, activity: 'High', category: 'Official', color: '#7B68EE', lastActivity: '2m ago', description: 'The official Real Madrid global fan community.', posts: 3456 },
    { id: 'parisians-psg', name: 'Parisians PSG', teamId: 'psg', members: 456789, activity: 'High', category: 'Official', color: '#004170', lastActivity: '12m ago', description: 'Paris Saint-Germain supporters. Paris est magique!', posts: 2123 },
    { id: 'paris-est-magique', name: 'Paris est Magique', teamId: 'psg', members: 123456, activity: 'High', category: 'Unofficial', color: '#004170', lastActivity: '20m ago', description: 'The magic of Paris, on and off the pitch.', posts: 934 },
    { id: 'fc-bayern-fans', name: 'FC Bayern Fan Club', teamId: 'bayern', members: 345678, activity: 'High', category: 'Official', color: '#DC052D', lastActivity: '20m ago', description: 'FC Bayern München supporter community. Mia san Mia!', posts: 1789 },
    { id: 'mia-san-mia', name: 'Mia San Mia', teamId: 'bayern', members: 98765, activity: 'Medium', category: 'Unofficial', color: '#DC052D', lastActivity: '35m ago', description: 'We are who we are. True Bayern fans.', posts: 623 },
    { id: 'tactical-analysis', name: 'Tactical Analysis', teamId: null, members: 234567, activity: 'Medium', category: 'Analysis', color: '#0F766E', lastActivity: '1h ago', description: 'Deep dive tactics, formations, and football intelligence.', posts: 1234 },

    // ── Local / Regional Chapters — FanClub USP ──
    { id: 'chelsea-fans-mumbai', name: 'Chelsea Fans Mumbai 🇮🇳', teamId: 'chelsea', members: 4821, activity: 'High', category: 'Local Chapter', color: '#034694', lastActivity: '18m ago', description: 'Mumbai\'s biggest Chelsea supporter group. We watch every game together at our local pub in Bandra. Join us for matchday meetups!', posts: 312 },
    { id: 'united-bangkok-army', name: 'United Bangkok\'s Army 🇹🇭', teamId: 'man-utd', members: 8934, activity: 'Very High', category: 'Local Chapter', color: '#DA291C', lastActivity: '4m ago', description: 'Manchester United\'s most passionate supporter group in Southeast Asia. Based in Bangkok with 20+ meetup spots across the city.', posts: 891 },
    { id: 'arsenal-lagos-chapter', name: 'Arsenal Lagos Chapter 🇳🇬', teamId: 'arsenal', members: 11203, activity: 'Very High', category: 'Local Chapter', color: '#EF0107', lastActivity: '2m ago', description: 'The Gunners\' largest African chapter. Lagos loves Arsenal. Sunday matches bring 300+ fans to our viewing parties in Victoria Island.', posts: 1203 },
    { id: 'arsenal-mumbai-reds', name: 'Arsenal Mumbai Reds 🇮🇳', teamId: 'arsenal', members: 3456, activity: 'High', category: 'Local Chapter', color: '#EF0107', lastActivity: '25m ago', description: 'Arsenal fans across Mumbai and Pune. Early morning kick-offs, late night celebrations — we\'re always there for The Gunners.', posts: 234 },
    { id: 'kopites-kuala-lumpur', name: 'Kopites Kuala Lumpur 🇲🇾', teamId: 'liverpool', members: 6712, activity: 'High', category: 'Local Chapter', color: '#C8102E', lastActivity: '11m ago', description: 'YNWA from Malaysia! KL\'s premier Liverpool supporter club with weekly watch parties across Bangsar and KLCC.', posts: 567 },
    { id: 'red-devils-jakarta', name: 'Red Devils Jakarta 🇮🇩', teamId: 'man-utd', members: 15234, activity: 'Very High', category: 'Local Chapter', color: '#DA291C', lastActivity: '1m ago', description: 'Indonesia\'s biggest Man United chapter. 15,000+ members across Jakarta, Surabaya, and Bandung. Largest Man United group in Southeast Asia.', posts: 2341 },
    { id: 'blues-tokyo', name: 'Blues Tokyo 🇯🇵', teamId: 'chelsea', members: 3201, activity: 'High', category: 'Local Chapter', color: '#034694', lastActivity: '30m ago', description: 'Chelsea FC Japan supporters based in Tokyo. Monthly meetups in Shibuya. English & Japanese welcome. Come On You Blues!', posts: 189 },
    { id: 'real-madrid-jakarta', name: 'Hala Madrid Jakarta 🇮🇩', teamId: 'real-madrid', members: 22450, activity: 'Very High', category: 'Local Chapter', color: '#7B68EE', lastActivity: '5m ago', description: 'Jakarta\'s Real Madrid family. The biggest Madridista community in Southeast Asia with over 22,000 members city-wide.', posts: 3102 },
    { id: 'barca-nairobi', name: 'Barça Fans Nairobi 🇰🇪', teamId: 'barcelona', members: 7823, activity: 'High', category: 'Local Chapter', color: '#004D98', lastActivity: '22m ago', description: 'Més que un club — in Kenya! Nairobi\'s passionate Barça community. UCL nights are legendary at our Westlands venue.', posts: 623 },
    { id: 'psg-fans-seoul', name: 'PSG Supporters Seoul 🇰🇷', teamId: 'psg', members: 5102, activity: 'High', category: 'Local Chapter', color: '#004170', lastActivity: '40m ago', description: 'Korean PSG fans united. Based in Seoul with monthly events and a growing community of 5,000+ passionate supporters.', posts: 401 },
    { id: 'bavarian-expats-dubai', name: 'Bayern Dubai Stammtisch 🇦🇪', teamId: 'bayern', members: 2890, activity: 'Medium', category: 'Local Chapter', color: '#DC052D', lastActivity: '2h ago', description: 'German expats and Bayern fans in Dubai. Stammtisch every matchday — Prost and Mia San Mia from the Gulf!', posts: 156 },

    // ── New team communities ──
    { id: 'vfb-ultras', name: 'VfB Stuttgart Ultras 🔴', teamId: 'stuttgart', members: 18923, activity: 'Very High', category: 'Ultras', color: '#E31E2D', lastActivity: '8m ago', description: 'The Stuttgart faithful. Die Roten through and through. Cannstatter Kurve is our home, MHPArena our fortress.', posts: 1823 },
    { id: 'stuttgart-fans-asia', name: 'Stuttgart Fans Asia 🌏', teamId: 'stuttgart', members: 1203, activity: 'Medium', category: 'Local Chapter', color: '#E31E2D', lastActivity: '3h ago', description: 'Supporting VfB Stuttgart from across Asia — Japan, South Korea, and beyond. Watanabe and Endo made us famous here!', posts: 89 },
    { id: 'colchoneros-union', name: 'Colchoneros Unión 🔴🔵', teamId: 'atletico', members: 89432, activity: 'Very High', category: 'Official', color: '#CE3524', lastActivity: '6m ago', description: 'Atlético de Madrid\'s main supporter union. Passion, grit, and never giving up. Cholismo lives here.', posts: 4231 },
    { id: 'atletico-latam', name: 'Atlético LATAM 🌎', teamId: 'atletico', members: 34567, activity: 'High', category: 'Regional', color: '#CE3524', lastActivity: '45m ago', description: 'Latin American Atlético fans from Mexico City to Buenos Aires. The Colchoneros spirit burns across the Americas.', posts: 1567 },
    { id: 'rossoneri-milan', name: 'Rossoneri Milan Fans ⚫🔴', teamId: 'ac-milan', members: 234890, activity: 'Very High', category: 'Official', color: '#FB090B', lastActivity: '3m ago', description: 'AC Milan\'s global supporter community. Forever Rossoneri. San Siro is the cathedral of football.', posts: 5432 },
    { id: 'milan-fans-singapore', name: 'Milan Fans Singapore 🇸🇬', teamId: 'ac-milan', members: 2341, activity: 'Medium', category: 'Local Chapter', color: '#FB090B', lastActivity: '1h ago', description: 'AC Milan supporters in the Lion City. Monthly meetups in Clarke Quay. All Singapore-based Rossoneri welcome!', posts: 145 },
    { id: 'bianconeri-official', name: 'Bianconeri Official ⚪⚫', teamId: 'juventus', members: 456789, activity: 'Very High', category: 'Official', color: '#454545', lastActivity: '2m ago', description: 'The official Juventus FC fan community. La Vecchia Signora supporters worldwide. Fino alla fine.', posts: 8901 },
    { id: 'juve-fans-dubai', name: 'Juve Fans Dubai 🇦🇪', teamId: 'juventus', members: 4102, activity: 'High', category: 'Local Chapter', color: '#454545', lastActivity: '55m ago', description: 'Juventus supporters in Dubai and the UAE. Italian expats and Juve lovers welcome. Forza Juve from the Middle East!', posts: 312 },
    { id: 'yellow-wall-bvb', name: 'The Yellow Wall 🟡⚫', teamId: 'dortmund', members: 187234, activity: 'Very High', category: 'Official', color: '#FDE122', lastActivity: '7m ago', description: 'Borussia Dortmund\'s main fan community. 81,365 capacity, the largest standing terrace in Europe. Echte Liebe.', posts: 6234 },
    { id: 'bvb-fans-worldwide', name: 'BVB Fans Worldwide 🌍', teamId: 'dortmund', members: 67891, activity: 'High', category: 'Global', color: '#FDE122', lastActivity: '19m ago', description: 'Supporting BVB from every corner of the world. Yellow and Black runs in our veins no matter where we are.', posts: 2341 },
    { id: 'bvb-sao-paulo', name: 'BVB São Paulo 🇧🇷', teamId: 'dortmund', members: 3892, activity: 'Medium', category: 'Local Chapter', color: '#FDE122', lastActivity: '2h ago', description: 'Brazilian Borussia fans in São Paulo. German football meets Brazilian passion. Echte Liebe from Brazil!', posts: 198 },

    // ── World Cup 2026 Communities ──
    { id: 'three-lions-2026', name: 'Three Lions 2026 🏴󠁧󠁢󠁥󠁮󠁧󠁿', teamId: null, members: 892341, activity: 'Very High', category: 'World Cup', color: '#012169', lastActivity: '1m ago', description: 'England\'s World Cup 2026 official fan community. It\'s coming home! Live match threads, fan meetups across USA & Mexico, and post-match reactions.', posts: 12834 },
    { id: 'selecao-brasil-2026', name: 'Seleção 2026 🇧🇷', teamId: null, members: 2341892, activity: 'Very High', category: 'World Cup', color: '#009c3b', lastActivity: '30s ago', description: 'A maior torcida do mundo. Brazil\'s WC 2026 fan community — the largest national supporter group on FanClub. Vai Brasil!', posts: 45231 },
    { id: 'albiceleste-fans', name: 'Albiceleste 🇦🇷', teamId: null, members: 1789234, activity: 'Very High', category: 'World Cup', color: '#74acdf', lastActivity: '2m ago', description: 'Argentina 2026 — defending champions! Messi\'s legacy continues. The largest Albiceleste community on FanClub.', posts: 38921 },
    { id: 'les-bleus-2026', name: 'Les Bleus 🇫🇷', teamId: null, members: 934521, activity: 'Very High', category: 'World Cup', color: '#002395', lastActivity: '5m ago', description: 'France 2026 fan community. Allez les Bleus! Live match threads, squad analysis, and the biggest French football discussions.', posts: 18923 },
    { id: 'die-mannschaft-fans', name: 'Die Mannschaft 🇩🇪', teamId: null, members: 678234, activity: 'High', category: 'World Cup', color: '#000000', lastActivity: '12m ago', description: 'German national team supporters for World Cup 2026. Auf geht\'s Deutschland! Match threads, lineup debates, and fan meetups.', posts: 9821 },
    { id: 'tri-fans-2026', name: 'Tri Fans Mexico 🇲🇽', teamId: null, members: 1234567, activity: 'Very High', category: 'World Cup', color: '#006847', lastActivity: '3m ago', description: 'El Tri en casa! Mexico 2026 — home World Cup edition. The biggest Mexican football community on FanClub, with local meetups across CDMX and beyond.', posts: 28341 },
    { id: 'spain-roja-fans', name: 'La Roja 🇪🇸', teamId: null, members: 823451, activity: 'Very High', category: 'World Cup', color: '#c60b1e', lastActivity: '7m ago', description: 'Spain\'s WC 2026 fan community. Defending European Champions taking on the world. Vamos España!', posts: 15234 },
    { id: 'usa-soccer-nation', name: 'USA Soccer Nation 🇺🇸', teamId: null, members: 567892, activity: 'High', category: 'World Cup', color: '#002868', lastActivity: '20m ago', description: 'US Men\'s National Team fan hub for World Cup 2026. Home tournament, huge stakes. The soccer revolution is here — Let\'s go USA!', posts: 8921 },
    { id: 'atlas-lions', name: 'Atlas Lions 🇲🇦', teamId: null, members: 423891, activity: 'Very High', category: 'World Cup', color: '#c1121f', lastActivity: '9m ago', description: 'Morocco 2026 fan community. The African dream continues! Atlas Lions are back and ready to shock the world again.', posts: 11234 },
    { id: 'wc-2026-general', name: 'World Cup 2026 Central 🌍', teamId: null, members: 4231567, activity: 'Very High', category: 'World Cup', color: '#1a1a2e', lastActivity: '10s ago', description: 'The main World Cup 2026 community. All matches, all teams, all fans. The biggest football event in history — USA, Canada & Mexico hosting 48 teams.', posts: 98234 }
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
      image: 'https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?w=600&h=350&fit=crop',
      thumb: 'https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?w=80&h=80&fit=crop',
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
      image: 'https://images.unsplash.com/photo-1522778526097-ce0a22cdbec6?w=600&h=350&fit=crop',
      thumb: 'https://images.unsplash.com/photo-1522778526097-ce0a22cdbec6?w=80&h=80&fit=crop',
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
      image: 'https://images.unsplash.com/photo-1551958425-d6f73800d376?w=600&h=350&fit=crop',
      thumb: 'https://images.unsplash.com/photo-1551958425-d6f73800d376?w=80&h=80&fit=crop',
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
      image: 'https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=600&h=350&fit=crop',
      thumb: 'https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=80&h=80&fit=crop',
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
    // WC LIVE
    {
      id: 'fix-wc-1',
      homeTeamId: 'brazil-nt',
      awayTeamId: 'arsenal',  // placeholder — will show as generic if no team
      homeScore: 1,
      awayScore: 0,
      minute: 67,
      isLive: true,
      status: 'LIVE',
      competition: 'World Cup QF — Brazil vs Argentina',
      competitionShort: 'WC',
      date: 'Today',
      time: '20:00',
      stadium: 'SoFi Stadium, Los Angeles',
      atmosphereRating: 9.8,
      communityBuzz: 24830
    },
    {
      id: 'fix-wc-2',
      homeTeamId: 'england-nt',
      awayTeamId: 'spain-nt',
      homeScore: 0,
      awayScore: 0,
      minute: 34,
      isLive: true,
      status: 'LIVE',
      competition: 'World Cup SF — England vs Spain',
      competitionShort: 'WC',
      date: 'Today',
      time: '20:00',
      stadium: 'MetLife Stadium, New York',
      atmosphereRating: 9.6,
      communityBuzz: 31204
    },
    // CLUB LIVE
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
  ],

  conversations: [
    {
      id: 'conv-1', type: 'group', name: 'Arsenal Match Day 🔴',
      avatar: null, teamId: 'arsenal', color: '#EF0107',
      lastMessage: 'Saka is unreal today 🔥', lastTime: '2m ago', unread: 5,
      messages: [
        { id: 'm1', sender: 'KopiteLad', text: 'Anyone watching the Arsenal game?', time: '14:30', isMe: false },
        { id: 'm2', sender: 'Me', text: 'Yeah! This is going to be massive 🔥', time: '14:31', isMe: true },
        { id: 'm3', sender: 'Santiago R.', text: 'Saka starting again, lets go!', time: '14:35', isMe: false },
        { id: 'm4', sender: 'Arsenal_Alex', text: 'The atmosphere at the Emirates is electric today', time: '14:44', isMe: false },
        { id: 'm5', sender: 'Me', text: 'Fully agree, biggest match of the season', time: '14:45', isMe: true },
        { id: 'm6', sender: 'Arsenal_Alex', text: 'Saka is unreal today 🔥', time: '14:58', isMe: false }
      ]
    },
    {
      id: 'conv-2', type: 'dm', name: 'Santiago R.',
      avatar: null, teamId: 'real-madrid', color: '#7B68EE',
      lastMessage: 'Hala Madrid! See you at the watchalong', lastTime: '15m ago', unread: 1,
      messages: [
        { id: 'm1', sender: 'Santiago R.', text: 'Bro did you see that Bellingham goal?!', time: '13:10', isMe: false },
        { id: 'm2', sender: 'Me', text: 'Insane finish honestly. World class', time: '13:12', isMe: true },
        { id: 'm3', sender: 'Santiago R.', text: 'Real Madrid are just built different', time: '13:15', isMe: false },
        { id: 'm4', sender: 'Me', text: 'Fair play, that squad depth is unreal', time: '13:18', isMe: true },
        { id: 'm5', sender: 'Santiago R.', text: 'Hala Madrid! See you at the watchalong', time: '13:45', isMe: false }
      ]
    },
    {
      id: 'conv-3', type: 'community', name: 'UCL Weekly 🏆',
      avatar: null, teamId: null, color: '#1E3A8A',
      lastMessage: 'Quarter-final draw is absolutely insane!', lastTime: '1h ago', unread: 23,
      messages: [
        { id: 'm1', sender: 'UCL_Reporter', text: 'Quarter-final draw just announced!', time: '11:00', isMe: false },
        { id: 'm2', sender: 'CuleLoco', text: 'Barcelona vs Chelsea 🔥🔥🔥', time: '11:02', isMe: false },
        { id: 'm3', sender: 'Me', text: 'Real Madrid vs Arsenal is the tie of the round', time: '11:04', isMe: true },
        { id: 'm4', sender: 'BayernHero', text: 'PSG vs Bayern again... classic', time: '11:05', isMe: false },
        { id: 'm5', sender: 'KopiteLad', text: 'Quarter-final draw is absolutely insane!', time: '11:08', isMe: false }
      ]
    },
    {
      id: 'conv-4', type: 'dm', name: 'Arsenal_Alex',
      avatar: null, teamId: 'arsenal', color: '#EF0107',
      lastMessage: 'Arteta is doing something special', lastTime: '2h ago', unread: 0,
      messages: [
        { id: 'm1', sender: 'Arsenal_Alex', text: 'Did you read the Arteta interview?', time: '09:30', isMe: false },
        { id: 'm2', sender: 'Me', text: 'Not yet, what did he say?', time: '09:32', isMe: true },
        { id: 'm3', sender: 'Arsenal_Alex', text: 'About the UCL preparations. Squad is ready', time: '09:35', isMe: false },
        { id: 'm4', sender: 'Arsenal_Alex', text: 'Arteta is doing something special', time: '09:36', isMe: false }
      ]
    },
    {
      id: 'conv-5', type: 'group', name: 'Transfer Window Chat 💰',
      avatar: null, teamId: null, color: '#7C3AED',
      lastMessage: 'That €80M deal is basically confirmed now', lastTime: '3h ago', unread: 0,
      messages: [
        { id: 'm1', sender: 'TransferGuru', text: 'Big news incoming on the Arsenal deal', time: '08:00', isMe: false },
        { id: 'm2', sender: 'Me', text: 'The €80M midfielder? Heard good things', time: '08:05', isMe: true },
        { id: 'm3', sender: 'TransferGuru', text: 'Personal terms agreed apparently', time: '08:10', isMe: false },
        { id: 'm4', sender: 'James M.', text: 'That €80M deal is basically confirmed now', time: '08:45', isMe: false }
      ]
    }
  ],

  watchalongs: [
    {
      id: 'wa-1',
      homeTeam: 'Arsenal', awayTeam: 'Bayern Munich',
      competition: 'UCL Quarter-Final', competitionColor: '#1E3A8A',
      date: 'Wed, Jun 11 · 20:00',
      result: '2–1', homeWin: true,
      viewers: 4821, peakViewers: 6234,
      atmosphereRating: 9.4,
      communityId: 'arsenal-fc-official',
      color: '#EF0107',
      highlights: ['Saka 23\'', 'Havertz 67\'', 'Kane 71\'']
    },
    {
      id: 'wa-2',
      homeTeam: 'Real Madrid', awayTeam: 'Chelsea',
      competition: 'UCL Semi-Final', competitionColor: '#1E3A8A',
      date: 'Tue, Jun 4 · 20:00',
      result: '3–0', homeWin: true,
      viewers: 12843, peakViewers: 18921,
      atmosphereRating: 9.8,
      communityId: 'los-blancos',
      color: '#7B68EE',
      highlights: ['Bellingham 12\'', 'Vinícius 45\'', 'Bellingham 89\'']
    },
    {
      id: 'wa-3',
      homeTeam: 'Liverpool', awayTeam: 'PSG',
      competition: 'UCL Quarter-Final', competitionColor: '#1E3A8A',
      date: 'Wed, May 28 · 20:00',
      result: '1–1', homeWin: false,
      viewers: 7654, peakViewers: 9102,
      atmosphereRating: 8.6,
      communityId: 'the-kop',
      color: '#C8102E',
      highlights: ['Salah 34\'', 'Mbappé 78\'']
    }
  ]

};
