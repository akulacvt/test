const songs = [
  {
    id: 1,
    title: "Night Drive",
    artist: "Nova Lane",
    album: "After Dark",
    duration: "4:12",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    cover: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "Midnight City",
    artist: "Neon Coast",
    album: "City Lights",
    duration: "3:46",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    cover: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "Golden Hour",
    artist: "Ava Monroe",
    album: "Sunset Stories",
    duration: "3:21",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
    cover: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    title: "Ocean Eyes",
    artist: "Blue Theory",
    album: "Pacific",
    duration: "4:01",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
    cover: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    title: "Afterglow",
    artist: "Luna Park",
    album: "Signals",
    duration: "3:37",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
    cover: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 6,
    title: "Electric Heart",
    artist: "Mira Sol",
    album: "Voltage",
    duration: "2:59",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3",
    cover: "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 7,
    title: "Velvet",
    artist: "The Satellites",
    album: "Velvet Rooms",
    duration: "3:55",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3",
    cover: "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 8,
    title: "Slow Motion",
    artist: "Kairo",
    album: "Motion",
    duration: "3:11",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3",
    cover: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 9,
    title: "Running Wild",
    artist: "North Avenue",
    album: "Open Roads",
    duration: "4:08",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3",
    cover: "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 10,
    title: "Dream State",
    artist: "Ivy June",
    album: "Lucid",
    duration: "3:28",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3",
    cover: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 11,
    title: "Blue Lights",
    artist: "Atlas Youth",
    album: "Northbound",
    duration: "3:43",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3",
    cover: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 12,
    title: "Last Summer",
    artist: "Paper Planes",
    album: "Polaroids",
    duration: "3:52",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3",
    cover: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=80"
  }
];

const artists = [
  {
    name: "Nova Lane",
    role: "Исполнитель",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Neon Coast",
    role: "Исполнитель",
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Ava Monroe",
    role: "Исполнитель",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Blue Theory",
    role: "Исполнитель",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Luna Park",
    role: "Исполнитель",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Mira Sol",
    role: "Исполнитель",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=80"
  }
];

const browseCategories = [
  ["Новая музыка", "#7b2cbf"],
  ["Поп", "#ff2d55"],
  ["Хип-хоп", "#ff7b00"],
  ["Электроника", "#00a877"],
  ["Рок", "#1f74ff"],
  ["Чарты", "#6a4c93"],
  ["Подкасты", "#0a9396"],
  ["Настроение", "#e5989b"],
  ["Тренировки", "#e9c46a"],
  ["Фокус", "#457b9d"],
  ["Вечеринка", "#d00070"],
  ["Акустика", "#8ab17d"]
];

const STORAGE_KEYS = {
  liked: "myMusicLiked",
  playlists: "myMusicPlaylists",
  history: "myMusicHistory"
};

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

const audio = $("#audioPlayer");
const state = {
  currentSongId: null,
  queue: [...songs.map(s => s.id)],
  queueIndex: 0,
  shuffle: false,
  repeat: false,
  history: loadJSON(STORAGE_KEYS.history, []),
  liked: new Set(loadJSON(STORAGE_KEYS.liked, [])),
  playlists: loadJSON(STORAGE_KEYS.playlists, [
    {
      id: "liked",
      name: "Любимые треки",
      system: true,
      songs: []
    }
  ])
};

function loadJSON(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch {
    return fallback;
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEYS.liked, JSON.stringify([...state.liked]));
  localStorage.setItem(STORAGE_KEYS.playlists, JSON.stringify(state.playlists));
  localStorage.setItem(STORAGE_KEYS.history, JSON.stringify(state.history.slice(0, 30)));
}

function fmtTime(seconds) {
  if (!Number.isFinite(seconds)) return "0:00";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60).toString().padStart(2, "0");
  return `${m}:${s}`;
}

function getSong(id) {
  return songs.find(s => s.id === Number(id));
}

function renderHome() {
  renderCards("#recentGrid", getRecentSongs().slice(0, 6));
  renderArtists();
  renderCards("#albumGrid", songs.slice(0, 6));
  $("#heroArt").style.backgroundImage = `url("${songs[0].cover}")`;
}

function renderCards(selector, list) {
  const el = $(selector);
  el.innerHTML = "";

  if (!list.length) {
    el.innerHTML = `<div class="empty-state"><div><strong>Пока ничего нет</strong><span>Добавь треки в историю прослушивания.</span></div></div>`;
    return;
  }

  list.forEach(song => {
    const card = document.createElement("article");
    card.className = "music-card";
    card.dataset.id = song.id;
    card.innerHTML = `
      <img class="card-cover" src="${song.cover}" alt="${escapeHtml(song.title)}" loading="lazy">
      <button class="card-play" aria-label="Воспроизвести">▶</button>
      <div class="card-title">${escapeHtml(song.title)}</div>
      <div class="card-subtitle">${escapeHtml(song.artist)} · ${escapeHtml(song.album)}</div>
    `;

    card.addEventListener("click", () => playSong(song.id));

    const playButton = card.querySelector(".card-play");
    playButton.addEventListener("click", (event) => {
      event.stopPropagation();
      playSong(song.id);
    });

    el.appendChild(card);
  });
}

function renderArtists() {
  const el = $("#artistGrid");
  el.innerHTML = "";

  artists.forEach(artist => {
    const card = document.createElement("button");
    card.className = "artist-card";
    card.innerHTML = `
      <img class="artist-image" src="${artist.image}" alt="${escapeHtml(artist.name)}" loading="lazy">
      <div class="artist-name">${escapeHtml(artist.name)}</div>
      <div class="artist-role">${escapeHtml(artist.role)}</div>
    `;
    card.addEventListener("click", () => {
      $("#searchInput").value = artist.name;
      showView("search");
      runSearch(artist.name);
    });
    el.appendChild(card);
  });
}

function renderBrowse() {
  const el = $("#browseGrid");
  el.innerHTML = "";

  browseCategories.forEach(([name, color]) => {
    const card = document.createElement("button");
    card.className = "browse-card";
    card.style.background = `linear-gradient(135deg, ${color}, #1b1b1b)`;
    card.innerHTML = `
      <h3>${escapeHtml(name)}</h3>
      <span class="browse-art" style="background:linear-gradient(135deg, rgba(255,255,255,.65), rgba(0,0,0,.45));"></span>
    `;
    card.addEventListener("click", () => {
      $("#searchInput").value = name;
      runSearch(name);
    });
    el.appendChild(card);
  });
}

function getRecentSongs() {
  const recent = state.history.map(id => getSong(id)).filter(Boolean);
  return [...recent, ...songs].filter((song, index, arr) =>
    arr.findIndex(x => x.id === song.id) === index
  );
}

function renderPlaylistList(filter = "") {
  const el = $("#playlistList");
  const q = filter.trim().toLowerCase();

  const visible = state.playlists.filter(p =>
    p.name.toLowerCase().includes(q)
  );

  el.innerHTML = visible.map(playlist => `
    <button class="playlist-item" data-playlist-id="${playlist.id}">
      <img class="playlist-cover" src="${
        playlist.system
          ? (playlist.songs.length ? getSong(playlist.songs[0]).cover : songs[0].cover)
          : (playlist.songs.length ? getSong(playlist.songs[0]).cover : songs[(playlist.id.length % songs.length)].cover)
      }" alt="">
      <span class="playlist-copy">
        <span class="playlist-name">${escapeHtml(playlist.name)}</span>
        <span class="playlist-sub">${playlist.songs.length} треков · плейлист</span>
      </span>
    </button>
  `).join("");

  $$("#playlistList .playlist-item").forEach(btn => {
    btn.addEventListener("click", () => openPlaylist(btn.dataset.playlistId));
  });
}

function openPlaylist(id) {
  showView("library");
  const playlist = state.playlists.find(p => p.id === id);
  if (!playlist) return;

  const content = $("#libraryContent");
  const playlistSongs = playlist.songs.map(getSong).filter(Boolean);

  if (!playlistSongs.length) {
    content.innerHTML = `
      <div class="empty-state">
        <div>
          <strong>${escapeHtml(playlist.name)}</strong>
          <span>В этом плейлисте пока нет треков.</span>
        </div>
      </div>
    `;
    return;
  }

  content.innerHTML = `<div class="results-list" id="playlistResults"></div>`;
  renderResults("#playlistResults", playlistSongs);
}

function renderLibrary(tab = "playlists") {
  const content = $("#libraryContent");

  if (tab === "liked") {
    const likedSongs = songs.filter(s => state.liked.has(s.id));
    if (!likedSongs.length) {
      content.innerHTML = `
        <div class="empty-state">
          <div>
            <strong>Пока нет любимых треков</strong>
            <span>Нажимай ♡ рядом с треком, чтобы добавить его сюда.</span>
          </div>
        </div>
      `;
      return;
    }
    content.innerHTML = `<div class="results-list" id="likedResults"></div>`;
    renderResults("#likedResults", likedSongs);
    return;
  }

  if (tab === "artists") {
    content.innerHTML = `<div class="artist-row" id="libraryArtistGrid"></div>`;
    renderArtistsInto("#libraryArtistGrid");
    return;
  }

  if (tab === "albums") {
    content.innerHTML = `<div class="card-grid" id="libraryAlbumGrid"></div>`;
    renderCards("#libraryAlbumGrid", songs);
    return;
  }

  content.innerHTML = `<div class="playlist-grid" id="libraryPlaylistGrid"></div>`;
  const grid = $("#libraryPlaylistGrid");
  grid.innerHTML = "";

  state.playlists.forEach(playlist => {
    const cover = playlist.songs.length
      ? getSong(playlist.songs[0]).cover
      : songs[(playlist.id.length * 3) % songs.length].cover;

    const card = document.createElement("article");
    card.className = "music-card";
    card.innerHTML = `
      <img class="card-cover" src="${cover}" alt="${escapeHtml(playlist.name)}">
      <div class="card-title">${escapeHtml(playlist.name)}</div>
      <div class="card-subtitle">${playlist.songs.length} треков</div>
    `;
    card.addEventListener("click", () => openPlaylist(playlist.id));
    grid.appendChild(card);
  });
}

function renderArtistsInto(selector) {
  const el = $(selector);
  el.innerHTML = "";

  artists.forEach(artist => {
    const card = document.createElement("button");
    card.className = "artist-card";
    card.innerHTML = `
      <img class="artist-image" src="${artist.image}" alt="${escapeHtml(artist.name)}">
      <div class="artist-name">${escapeHtml(artist.name)}</div>
      <div class="artist-role">${escapeHtml(artist.role)}</div>
    `;
    card.addEventListener("click", () => {
      $("#searchInput").value = artist.name;
      showView("search");
      runSearch(artist.name);
    });
    el.appendChild(card);
  });
}

function renderResults(selector, list) {
  const el = $(selector);
  el.innerHTML = list.map(song => `
    <div class="result-row" data-id="${song.id}">
      <img class="result-cover" src="${song.cover}" alt="">
      <div class="result-main">
        <div class="result-title">${escapeHtml(song.title)}</div>
        <div class="result-artist">${escapeHtml(song.artist)}</div>
      </div>
      <div class="result-album">${escapeHtml(song.album)}</div>
      <div class="result-duration">${song.duration}</div>
      <button class="result-heart" aria-label="Избранное">${state.liked.has(song.id) ? "♥" : "♡"}</button>
    </div>
  `).join("");

  $$(selector + " .result-row").forEach(row => {
    row.addEventListener("click", () => playSong(Number(row.dataset.id)));

    row.querySelector(".result-heart").addEventListener("click", (event) => {
      event.stopPropagation();
      toggleLike(Number(row.dataset.id));
      const song = getSong(Number(row.dataset.id));
      row.querySelector(".result-heart").textContent = state.liked.has(song.id) ? "♥" : "♡";
    });
  });
}

function runSearch(query) {
  const q = query.trim().toLowerCase();

  if (!q) {
    $("#browseBlock").classList.remove("hidden");
    $("#searchResultsBlock").classList.add("hidden");
    $("#searchSummary").textContent = "Найди треки, исполнителей и альбомы.";
    return;
  }

  const results = songs.filter(song =>
    [song.title, song.artist, song.album].some(v => v.toLowerCase().includes(q))
  );

  const artistMatches = artists.filter(a => a.name.toLowerCase().includes(q));
  $("#browseBlock").classList.add("hidden");
  $("#searchResultsBlock").classList.remove("hidden");
  $("#searchSummary").textContent = results.length
    ? `Найдено треков: ${results.length}.`
    : `Ничего не найдено по запросу «${query}».`;

  renderResults("#searchResults", results);

  document.querySelectorAll("#searchResultsBlock .search-artists-block").forEach(el => el.remove());

  if (artistMatches.length) {
    const el = document.createElement("div");
    el.className = "content-section search-artists-block";
    el.innerHTML = `
      <div class="section-head"><h2>Исполнители</h2></div>
      <div class="artist-row search-artists"></div>
    `;
    $("#searchResultsBlock").appendChild(el);
    const row = el.querySelector(".search-artists");
    artistMatches.forEach(artist => {
      const card = document.createElement("button");
      card.className = "artist-card";
      card.innerHTML = `
        <img class="artist-image" src="${artist.image}" alt="${escapeHtml(artist.name)}">
        <div class="artist-name">${escapeHtml(artist.name)}</div>
        <div class="artist-role">${escapeHtml(artist.role)}</div>
      `;
      card.addEventListener("click", () => {
        const match = songs.find(s => s.artist === artist.name);
        if (match) playSong(match.id);
      });
      row.appendChild(card);
    });
  }
}

function showView(view) {
  $$(".view").forEach(el => el.classList.remove("active-view"));
  const target = $(`#${view}View`);
  if (target) target.classList.add("active-view");

  $$(".nav-item").forEach(btn => btn.classList.remove("active"));
  const nav = document.querySelector(`.nav-item[data-view="${view}"]`);
  if (nav) nav.classList.add("active");

  if (view === "search") {
    $("#searchInput").focus();
  }

  if (view === "library") {
    renderLibrary("playlists");
  }
}

function playSong(id, autoplay = true) {
  const song = getSong(id);
  if (!song) return;

  state.currentSongId = song.id;
  state.queueIndex = Math.max(0, state.queue.indexOf(song.id));

  audio.src = song.audio;
  audio.volume = Number($("#volume").value);

  $("#playerCover").src = song.cover;
  $("#playerTitle").textContent = song.title;
  $("#playerArtist").textContent = song.artist;
  $("#duration").textContent = song.duration;
  $("#progress").value = 0;
  $("#currentTime").textContent = "0:00";

  updateLikeButton();

  state.history = [song.id, ...state.history.filter(x => x !== song.id)].slice(0, 30);
  saveState();
  renderPlaylistList($("#librarySearchInput").value || "");
  renderHome();

  if (autoplay) {
    audio.play().then(() => updatePlayButton()).catch(() => {
      updatePlayButton(false);
    });
  }

  document.title = `${song.title} — My Music`;
}

function togglePlay() {
  if (!state.currentSongId) {
    playSong(songs[0].id, true);
    return;
  }

  if (audio.paused) {
    audio.play().then(() => updatePlayButton()).catch(() => {});
  } else {
    audio.pause();
  }
}

function nextSong() {
  if (!state.queue.length) return;

  if (state.shuffle) {
    const candidates = state.queue.filter(id => id !== state.currentSongId);
    const nextId = candidates[Math.floor(Math.random() * candidates.length)] || state.queue[0];
    playSong(nextId);
    return;
  }

  state.queueIndex += 1;
  if (state.queueIndex >= state.queue.length) {
    if (state.repeat) {
      state.queueIndex = 0;
    } else {
      audio.pause();
      state.queueIndex = state.queue.length - 1;
      updatePlayButton(false);
      return;
    }
  }

  playSong(state.queue[state.queueIndex]);
}

function prevSong() {
  if (!state.currentSongId) {
    playSong(songs[0].id);
    return;
  }

  if (audio.currentTime > 3) {
    audio.currentTime = 0;
    return;
  }

  state.queueIndex = Math.max(0, state.queueIndex - 1);
  playSong(state.queue[state.queueIndex]);
}

function toggleLike(id = state.currentSongId) {
  if (!id) return;

  if (state.liked.has(id)) state.liked.delete(id);
  else state.liked.add(id);

  saveState();
  updateLikeButton();

  if (document.querySelector("#libraryView.active-view")) {
    renderLibrary("liked");
  }
}

function updateLikeButton() {
  const liked = state.currentSongId && state.liked.has(state.currentSongId);
  $("#likeBtn").textContent = liked ? "♥" : "♡";
  $("#likeBtn").classList.toggle("liked", Boolean(liked));
}

function updatePlayButton(force = null) {
  const playing = force === null ? !audio.paused : force;
  $("#playBtn").textContent = playing ? "❚❚" : "▶";
}

function updateProgress() {
  if (!Number.isFinite(audio.duration) || audio.duration <= 0) return;
  const percentage = (audio.currentTime / audio.duration) * 100;
  $("#progress").value = percentage;
  $("#currentTime").textContent = fmtTime(audio.currentTime);
  $("#duration").textContent = fmtTime(audio.duration);
}

function createPlaylist() {
  const name = $("#playlistNameInput").value.trim();
  if (!name) return;

  const playlist = {
    id: `${Date.now()}`,
    name,
    system: false,
    songs: []
  };

  state.playlists.push(playlist);
  saveState();
  renderPlaylistList();
  renderLibrary("playlists");
  closeModal();
  openPlaylist(playlist.id);
}

function openModal() {
  $("#modalBackdrop").classList.remove("hidden");
  $("#playlistNameInput").value = "";
  setTimeout(() => $("#playlistNameInput").focus(), 50);
}

function closeModal() {
  $("#modalBackdrop").classList.add("hidden");
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

// Navigation
$$(".nav-item").forEach(btn => {
  btn.addEventListener("click", () => {
    showView(btn.dataset.view);
  });
});

$("[data-view='library']").addEventListener("click", () => showView("library"));

$("#topSearch").addEventListener("click", () => showView("search"));
$("#searchInput").addEventListener("input", (event) => {
  $("#clearSearch").classList.toggle("hidden", !event.target.value);
  showView("search");
  runSearch(event.target.value);
});
$("#clearSearch").addEventListener("click", () => {
  $("#searchInput").value = "";
  $("#clearSearch").classList.add("hidden");
  runSearch("");
  $("#searchInput").focus();
});

$("#librarySearchInput").addEventListener("input", (event) => {
  renderPlaylistList(event.target.value);
});

// Player
$("#playBtn").addEventListener("click", togglePlay);
$("#prevBtn").addEventListener("click", prevSong);
$("#nextBtn").addEventListener("click", nextSong);
$("#likeBtn").addEventListener("click", () => toggleLike());

$("#shuffleBtn").addEventListener("click", () => {
  state.shuffle = !state.shuffle;
  $("#shuffleBtn").classList.toggle("active", state.shuffle);
});

$("#repeatBtn").addEventListener("click", () => {
  state.repeat = !state.repeat;
  $("#repeatBtn").classList.toggle("active", state.repeat);
});

$("#progress").addEventListener("input", (event) => {
  if (!Number.isFinite(audio.duration)) return;
  audio.currentTime = (Number(event.target.value) / 100) * audio.duration;
});

$("#volume").addEventListener("input", (event) => {
  audio.volume = Number(event.target.value);
  localStorage.setItem("myMusicVolume", event.target.value);
});

audio.addEventListener("timeupdate", updateProgress);
audio.addEventListener("loadedmetadata", updateProgress);
audio.addEventListener("play", () => updatePlayButton(true));
audio.addEventListener("pause", () => updatePlayButton(false));
audio.addEventListener("ended", () => {
  if (state.repeat) {
    audio.currentTime = 0;
    audio.play().catch(() => {});
  } else {
    nextSong();
  }
});

$("#playFeaturedBtn").addEventListener("click", () => playSong(songs[0].id));
$("#playerTitle").addEventListener("click", () => {
  if (state.currentSongId) playSong(state.currentSongId);
});
$("#playerArtist").addEventListener("click", () => {
  if (!state.currentSongId) return;
  const song = getSong(state.currentSongId);
  $("#searchInput").value = song.artist;
  showView("search");
  runSearch(song.artist);
});

// Create playlist modal
$("#createPlaylistBtn").addEventListener("click", openModal);
$("#closeModal").addEventListener("click", closeModal);
$("#cancelModal").addEventListener("click", closeModal);
$("#savePlaylist").addEventListener("click", createPlaylist);
$("#playlistNameInput").addEventListener("keydown", (event) => {
  if (event.key === "Enter") createPlaylist();
  if (event.key === "Escape") closeModal();
});
$("#modalBackdrop").addEventListener("click", (event) => {
  if (event.target === $("#modalBackdrop")) closeModal();
});

// Library tabs
$$("[data-library-tab]").forEach(tab => {
  tab.addEventListener("click", () => {
    $$("[data-library-tab]").forEach(x => x.classList.remove("active"));
    tab.classList.add("active");
    renderLibrary(tab.dataset.libraryTab);
  });
});

// Misc controls
$("#queueBtn").addEventListener("click", () => {
  if (!state.currentSongId) return;
  const names = state.queue.map(id => getSong(id)?.title).filter(Boolean);
  alert(`Очередь:\\n\\n${names.join("\\n")}`);
});

$("#settingsBtn").addEventListener("click", () => {
  alert("Этот проект работает локально: данные избранного и плейлистов сохраняются в localStorage браузера.");
});

$("#localFilesBtn").addEventListener("click", () => {
  alert("Для локальной музыки укажи путь к MP3 в массиве songs в script.js, например: assets/audio/my-song.mp3");
});

$("#devicesBtn").addEventListener("click", () => {
  alert("Переключение реальных устройств не реализовано: это локальный плеер браузера.");
});

$("#fullscreenBtn").addEventListener("click", async () => {
  try {
    if (!document.fullscreenElement) await document.documentElement.requestFullscreen();
    else await document.exitFullscreen();
  } catch {}
});

$("#backBtn").addEventListener("click", () => history.back());
$("#forwardBtn").addEventListener("click", () => history.forward());

$$(".show-all").forEach(btn => {
  btn.addEventListener("click", () => {
    const section = btn.dataset.section;
    if (section === "recent") {
      showView("library");
      renderLibrary("playlists");
    } else if (section === "artists") {
      showView("library");
      renderLibrary("artists");
    } else if (section === "albums") {
      showView("library");
      renderLibrary("albums");
    }
  });
});

$("#profileBtn").addEventListener("click", () => {
  alert("Авторизация намеренно отключена. Это личная локальная версия.");
});

// Restore volume
const savedVolume = Number(localStorage.getItem("myMusicVolume"));
if (Number.isFinite(savedVolume) && savedVolume >= 0 && savedVolume <= 1) {
  $("#volume").value = savedVolume;
  audio.volume = savedVolume;
}

// Initial render
renderHome();
renderBrowse();
renderPlaylistList();
audio.volume = Number($("#volume").value);

// Keyboard shortcuts
document.addEventListener("keydown", (event) => {
  const tag = document.activeElement?.tagName;
  if (tag === "INPUT" || tag === "TEXTAREA") return;

  if (event.code === "Space") {
    event.preventDefault();
    togglePlay();
  }

  if (event.code === "ArrowRight") nextSong();
  if (event.code === "ArrowLeft") prevSong();
});
