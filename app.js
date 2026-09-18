(() => {
  const view = document.getElementById("view");
  const backBtn = document.getElementById("backBtn");
  let filter = "dessert";

  function recipeById(id) {
    return RECIPES.find((r) => r.id === id);
  }

  function homeHash(nextFilter) {
    return !nextFilter || nextFilter === "all" ? "#/" : `#/${nextFilter}`;
  }

  function goHome() {
    history.pushState({}, "", homeHash(filter));
    render();
  }

  function goRecipe(id) {
    history.pushState({}, "", `#/recipe/${id}`);
    render();
  }

  function currentRoute() {
    const hash = location.hash.replace(/^#/, "") || "/";
    const parts = hash.split("/").filter(Boolean);
    if (parts[0] === "recipe" && parts[1]) return { page: "recipe", id: parts[1] };
    if (parts[0] && CATEGORIES.some((cat) => cat.id === parts[0])) {
      return { page: "home", filter: parts[0] };
    }
    return { page: "home", filter: parts[0] ? filter : "dessert" };
  }

  function renderHome() {
    backBtn.hidden = true;
    const list = filter === "all" ? RECIPES : RECIPES.filter((r) => r.category === filter);
    view.innerHTML = `
      <section class="hero-copy">
        <h1>Tap a food to cook it</h1>
        <p>Chocolate cake and Dad's Dessert are in Dessert. Grown-up help for heat and knives.</p>
      </section>
      <div class="cats" role="tablist" aria-label="Meal type"></div>
      <div class="grid" id="grid"></div>
    `;
    const cats = view.querySelector(".cats");
    CATEGORIES.forEach((cat) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.textContent = cat.label;
      btn.className = cat.id === filter ? "on" : "";
      btn.addEventListener("click", () => {
        filter = cat.id;
        history.pushState({}, "", homeHash(filter));
        renderHome();
      });
      cats.append(btn);
    });
    const grid = document.getElementById("grid");
    list.forEach((recipe) => {
      const card = document.createElement("button");
      card.type = "button";
      card.className = "card";
      card.innerHTML = `
        <img src="${recipe.photo}" alt="${recipe.photoAlt}" />
        <div class="meta">
          <h2>${recipe.name}</h2>
          <span>${recipe.category} · ${recipe.time}</span>
        </div>
      `;
      card.addEventListener("click", () => goRecipe(recipe.id));
      grid.append(card);
    });
  }

  function renderRecipe(id) {
    const recipe = recipeById(id);
    if (!recipe) {
      goHome();
      return;
    }
    backBtn.hidden = false;
    view.innerHTML = `
      <article class="recipe">
        <img class="hero" src="${recipe.photo}" alt="${recipe.photoAlt}" />
        <p class="kicker">${recipe.category}</p>
        <h1>${recipe.name}</h1>
        <div class="facts">
          <b>${recipe.time}</b>
          <b>Serves ${recipe.servings}</b>
          <b>Ages 4–10</b>
        </div>
        <p class="why">${recipe.why}</p>
        <p class="helper">${recipe.helper}</p>
        <h2>You need</h2>
        <ul>${recipe.ingredients.map((item) => `<li>${item}</li>`).join("")}</ul>
        <h2>Do this</h2>
        <ol>${recipe.steps.map((step) => `<li>${step}</li>`).join("")}</ol>
      </article>
    `;
  }

  function render() {
    const route = currentRoute();
    if (route.page === "recipe") renderRecipe(route.id);
    else {
      if (route.filter) filter = route.filter;
      renderHome();
    }
    window.scrollTo(0, 0);
  }

  backBtn.addEventListener("click", goHome);
  window.addEventListener("popstate", render);
  window.addEventListener("hashchange", render);
  render();
})();
