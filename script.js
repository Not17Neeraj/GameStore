const games = [
      // Top 30 from previous list with genres added
      { title: "Cyberpunk 2077", price: "$29.99", genre: "RPG", image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1091500/header.jpg", link: "https://store.steampowered.com/app/1091500/" },
      { title: "Elden Ring", price: "$59.99", genre: "RPG", image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1245620/header.jpg", link: "https://store.steampowered.com/app/1245620/" },
      { title: "Red Dead Redemption 2", price: "$39.99", genre: "Open World", image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1174180/header.jpg", link: "https://store.steampowered.com/app/1174180/" },
      { title: "Hogwarts Legacy", price: "$49.99", genre: "Adventure", image: "https://cdn.cloudflare.steamstatic.com/steam/apps/990080/header.jpg", link: "https://store.steampowered.com/app/990080/" },
      { title: "The Witcher 3", price: "$19.99", genre: "RPG", image: "https://cdn.cloudflare.steamstatic.com/steam/apps/292030/header.jpg", link: "https://store.steampowered.com/app/292030/" },
      { title: "GTA V", price: "$14.99", genre: "Open World", image: "https://cdn.cloudflare.steamstatic.com/steam/apps/271590/header.jpg", link: "https://store.steampowered.com/app/271590/" },
      { title: "Assassin's Creed Valhalla", price: "$59.99", genre: "Action", image: "https://cdn.akamai.steamstatic.com/steam/apps/2208920/header.jpg", link: "https://store.steampowered.com/app/2208920/" },
      { title: "Call of Duty: MW II", price: "$69.99", genre: "Shooter", image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1938090/header.jpg", link: "https://store.steampowered.com/app/1938090/" },
      { title: "Forza Horizon 5", price: "$59.99", genre: "Racing", image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1551360/header.jpg", link: "https://store.steampowered.com/app/1551360/" },
      { title: "Resident Evil 4 Remake", price: "$59.99", genre: "Survival", image: "https://cdn.cloudflare.steamstatic.com/steam/apps/2050650/header.jpg", link: "https://store.steampowered.com/app/2050650/" },
      { title: "Spider-Man Remastered", price: "$49.99", genre: "Action", image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1817070/header.jpg", link: "https://store.steampowered.com/app/1817070/" },
      { title: "God of War", price: "$49.99", genre: "Action", image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1593500/header.jpg", link: "https://store.steampowered.com/app/1593500/" },
      { title: "Stray", price: "$29.99", genre: "Adventure", image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1332010/header.jpg", link: "https://store.steampowered.com/app/1332010/" },
      { title: "FIFA 23", price: "$69.99", genre: "Sports", image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1811260/header.jpg", link: "https://store.steampowered.com/app/1811260/" },
      { title: "Battlefield 2042", price: "$59.99", genre: "Shooter", image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1517290/header.jpg", link: "https://store.steampowered.com/app/1517290/" },
      { title: "Far Cry 6", price: "$49.99", genre: "Shooter", image: "https://cdn.cloudflare.steamstatic.com/steam/apps/2369390/header.jpg", link: "https://store.steampowered.com/app/2369390/" },
      { title: "ARK: Survival Ascended", price: "$44.99", genre: "Survival", image: "https://cdn.cloudflare.steamstatic.com/steam/apps/2399830/header.jpg", link: "https://store.steampowered.com/app/2399830/" },
      { title: "Palworld", price: "$29.99", genre: "Open World", image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1623730/header.jpg", link: "https://store.steampowered.com/app/1623730/" },
      { title: "Lethal Company", price: "$9.99", genre: "Survival", image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1966720/header.jpg", link: "https://store.steampowered.com/app/1966720/" },
      { title: "The Finals", price: "Free", genre: "Shooter", image: "https://cdn.cloudflare.steamstatic.com/steam/apps/2073850/header.jpg", link: "https://store.steampowered.com/app/2073850/" },
      { title: "Counter-Strike 2", price: "Free", genre: "Shooter", image: "https://cdn.cloudflare.steamstatic.com/steam/apps/730/header.jpg", link: "https://store.steampowered.com/app/730/" },
      { title: "Dota 2", price: "Free", genre: "Strategy", image: "https://cdn.cloudflare.steamstatic.com/steam/apps/570/header.jpg", link: "https://store.steampowered.com/app/570/" },
      { title: "Apex Legends", price: "Free", genre: "Shooter", image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1172470/header.jpg", link: "https://store.steampowered.com/app/1172470/" },
      { title: "Minecraft (Java)", price: "$26.95", genre: "Survival", image: "https://i.imgur.com/Sz4XdeF.jpg", link: "https://www.minecraft.net/" },
      { title: "Terraria", price: "$9.99", genre: "Survival", image: "https://cdn.cloudflare.steamstatic.com/steam/apps/105600/header.jpg", link: "https://store.steampowered.com/app/105600/" },
      { title: "Hades", price: "$24.99", genre: "RPG", image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1145360/header.jpg", link: "https://store.steampowered.com/app/1145360/" },
      { title: "Among Us", price: "$4.99", genre: "Multiplayer", image: "https://cdn.cloudflare.steamstatic.com/steam/apps/945360/header.jpg", link: "https://store.steampowered.com/app/945360/" },
      { title: "Phasmophobia", price: "$13.99", genre: "Survival", image: "https://cdn.cloudflare.steamstatic.com/steam/apps/739630/header.jpg", link: "https://store.steampowered.com/app/739630/" },
      { title: "Hollow Knight", price: "$14.99", genre: "Adventure", image: "https://cdn.cloudflare.steamstatic.com/steam/apps/367520/header.jpg", link: "https://store.steampowered.com/app/367520/" },

      // +20 more games (fill in here — can continue if you want)
    ];

    const gameList = document.getElementById("game-list");
    const search = document.getElementById("search");
    const genreFilter = document.getElementById("genreFilter");

    function renderGames(list) {
      gameList.innerHTML = "";
      list.forEach(game => {
        const card = document.createElement("div");
        card.className = "game-card";
        card.innerHTML = `
          <img src="${game.image}" alt="${game.title}">
          <div class="game-info">
            <h3>${game.title}</h3>
            <p>${game.price} - ${game.genre}</p>
            <a href="${game.link}" target="_blank"><button>View on Steam</button></a>
          </div>
        `;
        gameList.appendChild(card);
      });
    }

    function updateFilters() {
      const query = search.value.toLowerCase();
      const selectedGenre = genreFilter.value;
      const filtered = games.filter(game =>
        game.title.toLowerCase().includes(query) &&
        (selectedGenre === "" || game.genre === selectedGenre)
      );
      renderGames(filtered);
    }

    search.addEventListener("input", updateFilters);
    genreFilter.addEventListener("change", updateFilters);

    renderGames(games);