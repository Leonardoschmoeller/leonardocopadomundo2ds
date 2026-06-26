const timelineData = [
  { year: 1930, host: 'Uruguai' },
  { year: 1934, host: 'Itália' },
  { year: 1938, host: 'França' },
  { year: 1950, host: 'Brasil' },
  { year: 1954, host: 'Suíça' },
  { year: 1958, host: 'Suécia' },
  { year: 1962, host: 'Chile' },
  { year: 1966, host: 'Inglaterra' },
  { year: 1970, host: 'México' },
  { year: 1974, host: 'Alemanha Ocidental' },
  { year: 1978, host: 'Argentina' },
  { year: 1982, host: 'Espanha' },
  { year: 1986, host: 'México' },
  { year: 1990, host: 'Itália' },
  { year: 1994, host: 'Estados Unidos' },
  { year: 1998, host: 'França' },
  { year: 2002, host: 'Coreia do Sul / Japão' },
  { year: 2006, host: 'Alemanha' },
  { year: 2010, host: 'África do Sul' },
  { year: 2014, host: 'Brasil' },
  { year: 2018, host: 'Rússia' },
  { year: 2022, host: 'Catar' }
];

const worldCupData = {
  1930: {
    year: 1930,
    host: 'Uruguai',
    title: 'Primeira edição da Copa do Mundo',
    champion: 'Uruguai',
    runnerUp: 'Argentina',
    matchScore: '4–2',
    fouls: '94',
    yellowCards: '45',
    redCards: '2',
    topScorer: 'Guillermo Stábile (Argentina) - 8 gols',
    scorerImage: 'https://via.placeholder.com/800x520?text=Guillermo+St%C3%A1bile',
    momentImage: 'https://via.placeholder.com/800x520?text=Uruguai+1930'
  },
  1934: {
    year: 1934,
    host: 'Itália',
    title: 'Primeira Copa na Itália',
    champion: 'Itália',
    runnerUp: 'Tchecoslováquia',
    matchScore: '2–1',
    fouls: '102',
    yellowCards: '48',
    redCards: '3',
    topScorer: 'Oldřich Nejedlý (Tchecoslováquia) - 5 gols',
    scorerImage: 'https://via.placeholder.com/800x520?text=Oldr%C3%ADch+Nejedl%C3%BD',
    momentImage: 'https://via.placeholder.com/800x520?text=It%C3%A1lia+1934'
  },
  1938: {
    year: 1938,
    host: 'França',
    title: 'Itália conquista o bicampeonato',
    champion: 'Itália',
    runnerUp: 'Hungria',
    matchScore: '4–2',
    fouls: '110',
    yellowCards: '50',
    redCards: '2',
    topScorer: 'Leônidas (Brasil) - 7 gols',
    scorerImage: 'https://via.placeholder.com/800x520?text=Le%C3%B4nidas',
    momentImage: 'https://via.placeholder.com/800x520?text=It%C3%A1lia+1938'
  },
  1950: {
    year: 1950,
    host: 'Brasil',
    title: 'O Maracanazo',
    champion: 'Uruguai',
    runnerUp: 'Brasil',
    matchScore: '2–1',
    fouls: '115',
    yellowCards: '62',
    redCards: '3',
    topScorer: 'Ademir (Brasil) - 8 gols',
    scorerImage: 'https://via.placeholder.com/800x520?text=Ademir',
    momentImage: 'https://via.placeholder.com/800x520?text=Uruguai+1950'
  },
  1954: {
    year: 1954,
    host: 'Suíça',
    title: 'A vitória milagrosa',
    champion: 'Alemanha Ocidental',
    runnerUp: 'Hungria',
    matchScore: '3–2',
    fouls: '117',
    yellowCards: '54',
    redCards: '5',
    topScorer: 'Sándor Kocsis (Hungria) - 11 gols',
    scorerImage: 'https://via.placeholder.com/800x520?text=S%C3%A1ndor+Kocsis',
    momentImage: 'https://via.placeholder.com/800x520?text=Alemanha+1954'
  },
  1958: {
    year: 1958,
    host: 'Suécia',
    title: 'A primeira Copa do Pelé',
    champion: 'Brasil',
    runnerUp: 'Suécia',
    matchScore: '5–2',
    fouls: '88',
    yellowCards: '34',
    redCards: '1',
    topScorer: 'Just Fontaine (França) - 13 gols',
    scorerImage: 'https://via.placeholder.com/800x520?text=Just+Fontaine',
    momentImage: 'https://via.placeholder.com/800x520?text=Brasil+1958'
  },
  1962: {
    year: 1962,
    host: 'Chile',
    title: 'O bicampeonato brasileiro',
    champion: 'Brasil',
    runnerUp: 'Tchecoslováquia',
    matchScore: '3–1',
    fouls: '90',
    yellowCards: '36',
    redCards: '1',
    topScorer: 'Garrincha (Brasil) - 4 gols',
    scorerImage: 'https://via.placeholder.com/800x520?text=Garrincha',
    momentImage: 'https://via.placeholder.com/800x520?text=Brasil+1962'
  },
  1966: {
    year: 1966,
    host: 'Inglaterra',
    title: 'A Copa em casa da Inglaterra',
    champion: 'Inglaterra',
    runnerUp: 'Alemanha Ocidental',
    matchScore: '4–2',
    fouls: '96',
    yellowCards: '28',
    redCards: '1',
    topScorer: 'Eusébio (Portugal) - 9 gols',
    scorerImage: 'https://via.placeholder.com/800x520?text=Eus%C3%A9bio',
    momentImage: 'https://via.placeholder.com/800x520?text=Inglaterra+1966'
  },
  1970: {
    year: 1970,
    host: 'México',
    title: 'Brasil tetracampeão com futebol arte',
    champion: 'Brasil',
    runnerUp: 'Itália',
    matchScore: '4–1',
    fouls: '98',
    yellowCards: '28',
    redCards: '1',
    topScorer: 'Gerd Müller (Alemanha Ocidental) - 10 gols',
    scorerImage: 'https://via.placeholder.com/800x520?text=Gerd+M%C3%BCller',
    momentImage: 'https://via.placeholder.com/800x520?text=Brasil+1970'
  },
  1974: {
    year: 1974,
    host: 'Alemanha Ocidental',
    title: 'A final histórica Alemanha x Holanda',
    champion: 'Alemanha Ocidental',
    runnerUp: 'Países Baixos',
    matchScore: '2–1',
    fouls: '102',
    yellowCards: '42',
    redCards: '1',
    topScorer: 'Grzegorz Lato (Polônia) - 7 gols',
    scorerImage: 'https://via.placeholder.com/800x520?text=Grzegorz+Lato',
    momentImage: 'https://via.placeholder.com/800x520?text=Alemanha+1974'
  },
  1978: {
    year: 1978,
    host: 'Argentina',
    title: 'Argentina conquista o primeiro título',
    champion: 'Argentina',
    runnerUp: 'Países Baixos',
    matchScore: '3–1',
    fouls: '104',
    yellowCards: '38',
    redCards: '2',
    topScorer: 'Mario Kempes (Argentina) - 6 gols',
    scorerImage: 'https://via.placeholder.com/800x520?text=Mario+Kempes',
    momentImage: 'https://via.placeholder.com/800x520?text=Argentina+1978'
  },
  1982: {
    year: 1982,
    host: 'Espanha',
    title: 'A Copa da Itália e do craque Rossi',
    champion: 'Itália',
    runnerUp: 'Alemanha Ocidental',
    matchScore: '3–1',
    fouls: '106',
    yellowCards: '40',
    redCards: '2',
    topScorer: 'Paolo Rossi (Itália) - 6 gols',
    scorerImage: 'https://via.placeholder.com/800x520?text=Paolo+Rossi',
    momentImage: 'https://via.placeholder.com/800x520?text=It%C3%A1lia+1982'
  },
  1986: {
    year: 1986,
    host: 'México',
    title: 'A Copa de Maradona',
    champion: 'Argentina',
    runnerUp: 'Alemanha Ocidental',
    matchScore: '3–2',
    fouls: '120',
    yellowCards: '44',
    redCards: '1',
    topScorer: 'Gary Lineker (Inglaterra) - 6 gols',
    scorerImage: 'https://via.placeholder.com/800x520?text=Gary+Lineker',
    momentImage: 'https://via.placeholder.com/800x520?text=Argentina+1986'
  },
  1990: {
    year: 1990,
    host: 'Itália',
    title: 'A final dos alemães e argentinos',
    champion: 'Alemanha Ocidental',
    runnerUp: 'Argentina',
    matchScore: '1–0',
    fouls: '118',
    yellowCards: '43',
    redCards: '2',
    topScorer: 'Salvatore Schillaci (Itália) - 6 gols',
    scorerImage: 'https://via.placeholder.com/800x520?text=Salvatore+Schillaci',
    momentImage: 'https://via.placeholder.com/800x520?text=It%C3%A1lia+1990'
  },
  1994: {
    year: 1994,
    host: 'Estados Unidos',
    title: 'A final dos pênaltis',
    champion: 'Brasil',
    runnerUp: 'Itália',
    matchScore: '0–0 (3–2 pen.)',
    fouls: '120',
    yellowCards: '48',
    redCards: '2',
    topScorer: 'Oleg Salenko (Rússia) - 6 gols',
    scorerImage: 'https://via.placeholder.com/800x520?text=Oleg+Salenko',
    momentImage: 'https://via.placeholder.com/800x520?text=Brasil+1994'
  },
  1998: {
    year: 1998,
    host: 'França',
    title: 'A Copa da França',
    champion: 'França',
    runnerUp: 'Brasil',
    matchScore: '3–0',
    fouls: '112',
    yellowCards: '39',
    redCards: '1',
    topScorer: 'Davor Šuker (Croácia) - 6 gols',
    scorerImage: 'https://via.placeholder.com/800x520?text=Davor+%C5%A0uker',
    momentImage: 'https://via.placeholder.com/800x520?text=Fran%C3%A7a+1998'
  },
  2002: {
    year: 2002,
    host: 'Coreia do Sul / Japão',
    title: 'O pentacampeonato brasileiro',
    champion: 'Brasil',
    runnerUp: 'Alemanha',
    matchScore: '2–0',
    fouls: '108',
    yellowCards: '36',
    redCards: '2',
    topScorer: 'Ronaldo (Brasil) - 8 gols',
    scorerImage: 'https://via.placeholder.com/800x520?text=Ronaldo',
    momentImage: 'https://via.placeholder.com/800x520?text=Brasil+2002'
  },
  2006: {
    year: 2006,
    host: 'Alemanha',
    title: 'A final dos cartões e de Zidane',
    champion: 'Itália',
    runnerUp: 'França',
    matchScore: '1–1 (5–3 pen.)',
    fouls: '114',
    yellowCards: '77',
    redCards: '4',
    topScorer: 'Miroslav Klose (Alemanha) - 5 gols',
    scorerImage: 'https://via.placeholder.com/800x520?text=Miroslav+Klose',
    momentImage: 'https://via.placeholder.com/800x520?text=It%C3%A1lia+2006'
  },
  2010: {
    year: 2010,
    host: 'África do Sul',
    title: 'A Copa da posse espanhola',
    champion: 'Espanha',
    runnerUp: 'Países Baixos',
    matchScore: '1–0 (a.e.t.)',
    fouls: '102',
    yellowCards: '38',
    redCards: '1',
    topScorer: 'Thomas Müller (Alemanha) - 5 gols',
    scorerImage: 'https://via.placeholder.com/800x520?text=Thomas+M%C3%BCller',
    momentImage: 'https://via.placeholder.com/800x520?text=Espanha+2010'
  },
  2014: {
    year: 2014,
    host: 'Brasil',
    title: 'A vitória alemã no Maracanã',
    champion: 'Alemanha',
    runnerUp: 'Argentina',
    matchScore: '1–0 (a.e.t.)',
    fouls: '105',
    yellowCards: '28',
    redCards: '1',
    topScorer: 'James Rodríguez (Colômbia) - 6 gols',
    scorerImage: 'https://via.placeholder.com/800x520?text=James+Rodr%C3%ADguez',
    momentImage: 'https://via.placeholder.com/800x520?text=Alemanha+2014'
  },
  2018: {
    year: 2018,
    host: 'Rússia',
    title: 'France campeã no futebol moderno',
    champion: 'França',
    runnerUp: 'Croácia',
    matchScore: '4–2',
    fouls: '121',
    yellowCards: '55',
    redCards: '4',
    topScorer: 'Harry Kane (Inglaterra) - 6 gols',
    scorerImage: 'https://via.placeholder.com/800x520?text=Harry+Kane',
    momentImage: 'https://via.placeholder.com/800x520?text=Fran%C3%A7a+2018'
  },
  2022: {
    year: 2022,
    host: 'Catar',
    title: 'Primeira Copa no Oriente Médio',
    champion: 'Argentina',
    runnerUp: 'França',
    matchScore: '3–3 (4–2 pen.)',
    fouls: '142',
    yellowCards: '104',
    redCards: '8',
    topScorer: 'Kylian Mbappé (França) - 8 gols',
    scorerImage: 'https://via.placeholder.com/800x520?text=Kylian+Mbapp%C3%A9',
    momentImage: 'https://via.placeholder.com/800x520?text=Argentina+2022'
  }
};

function createTimelineCard(item) {
  const link = document.createElement('a');
  link.href = `detalhes.html?ano=${item.year}`;
  link.className = 'field-card';
  link.setAttribute('aria-label', `Ver detalhes da Copa de ${item.year} no ${item.host}`);

  link.innerHTML = `
    <div class="field-lines"></div>
    <div class="field-content">
      <div class="year">${item.year}</div>
      <div class="host">${item.host}</div>
    </div>
  `;

  attachConfettiClick(link);
  return link;
}

function createConfettiBurst(x, y) {
  const colors = ['#22c55e', '#38bdf8', '#facc15', '#f97316', '#fb7185', '#a855f7'];
  const count = 18;

  for (let i = 0; i < count; i += 1) {
    const piece = document.createElement('span');
    piece.className = 'confetti-piece';
    const angle = Math.random() * Math.PI * 2;
    const distance = 70 + Math.random() * 50;
    const dx = Math.cos(angle) * distance;
    const dy = Math.sin(angle) * distance * 0.8 - 20;
    const rotation = Math.random() * 720 - 360;
    const size = 6 + Math.random() * 8;

    piece.style.left = `${x}px`;
    piece.style.top = `${y}px`;
    piece.style.width = `${size}px`;
    piece.style.height = `${Math.max(4, size * 0.4)}px`;
    piece.style.background = colors[Math.floor(Math.random() * colors.length)];
    piece.style.setProperty('--tx', `${dx.toFixed(1)}px`);
    piece.style.setProperty('--ty', `${dy.toFixed(1)}px`);
    piece.style.setProperty('--rdeg', `${rotation.toFixed(1)}deg`);
    piece.style.animationDelay = `${Math.random() * 0.05}s`;

    document.body.appendChild(piece);
    piece.addEventListener('animationend', () => piece.remove());
  }
}

function attachConfettiClick(element) {
  element.addEventListener('click', event => {
    if (event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) {
      return;
    }

    createConfettiBurst(event.clientX, event.clientY);
    event.preventDefault();

    const href = element.href;
    setTimeout(() => {
      window.location.href = href;
    }, 180);
  });
}

function renderTimelineGrid() {
  const grid = document.querySelector('.timeline-grid');
  if (!grid) return;
  timelineData.forEach(item => grid.appendChild(createTimelineCard(item)));
}

function getSelectedYear() {
  const query = new URLSearchParams(window.location.search);
  return query.has('ano') ? Number(query.get('ano')) : null;
}

function loadWorldCupDetails() {
  const year = getSelectedYear();
  const content = document.querySelector('.details-container');
  if (!content) return;

  const data = worldCupData[year];
  const titleElement = document.getElementById('cup-title');
  const yearElement = document.getElementById('cup-year');
  const hostElement = document.getElementById('cup-host');
  const championElement = document.getElementById('champion-name');
  const runnerupElement = document.getElementById('runnerup-name');
  const matchScoreElement = document.getElementById('match-score');
  const foulsElement = document.getElementById('fouls');
  const yellowElement = document.getElementById('yellow-cards');
  const redElement = document.getElementById('red-cards');
  const topScorerElement = document.getElementById('top-scorer');
  const scorerImage = document.getElementById('scorer-image');
  const momentImage = document.getElementById('moment-image');

  if (!data) {
    yearElement.textContent = year || '---';
    hostElement.textContent = 'Dados não encontrados';
    titleElement.textContent = 'Escolha uma edição válida na página inicial.';
    championElement.textContent = '—';
    runnerupElement.textContent = '—';
    matchScoreElement.textContent = '—';
    foulsElement.textContent = '—';
    yellowElement.textContent = '—';
    redElement.textContent = '—';
    topScorerElement.textContent = '—';
    scorerImage.src = 'https://via.placeholder.com/800x520?text=Dado+indispon%C3%ADvel';
    momentImage.src = 'https://via.placeholder.com/800x520?text=Dado+indispon%C3%ADvel';
    return;
  }

  yearElement.textContent = data.year;
  hostElement.textContent = data.host;
  titleElement.textContent = data.title;
  championElement.textContent = data.champion;
  runnerupElement.textContent = data.runnerUp;
  matchScoreElement.textContent = data.matchScore;
  foulsElement.textContent = data.fouls;
  yellowElement.textContent = data.yellowCards;
  redElement.textContent = data.redCards;
  topScorerElement.textContent = data.topScorer;
  scorerImage.src = data.scorerImage;
  momentImage.src = data.momentImage;

  // populate flag section if present
  const champFlagName = document.getElementById('champion-flag-name');
  const runnerFlagName = document.getElementById('runnerup-flag-name');
  const champFlagImg = document.getElementById('champion-flag');
  const runnerFlagImg = document.getElementById('runnerup-flag');
  if (champFlagName) champFlagName.textContent = data.champion;
  if (runnerFlagName) runnerFlagName.textContent = data.runnerUp;
  if (champFlagImg) champFlagImg.src = `https://via.placeholder.com/360x240?text=${encodeURIComponent(data.champion)}`;
  if (runnerFlagImg) runnerFlagImg.src = `https://via.placeholder.com/360x240?text=${encodeURIComponent(data.runnerUp)}`;
}

function initPage() {
  renderTimelineGrid();
  loadWorldCupDetails();
}



document.addEventListener('DOMContentLoaded', initPage);
