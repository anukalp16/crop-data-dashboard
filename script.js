const API_URL = "https://api.data.gov.in/resource/35985678-0d79-46b4-9ed6-6f13308a1d24?api-key=579b464db66ec23bdd0000010c83107aaa09426d5bc46c7d722a7c57&limit=1000&format=json";

let allCrops = [];
const cardContainer = document.getElementById("cardContainer");
const searchBox = document.getElementById("searchBox");
const stateDropdown = document.getElementById("stateDropdown");
const sortDropdown = document.getElementById("sortDropdown");
const resultCount = document.getElementById("resultCount");

async function loadData() {
  cardContainer.innerHTML = "<p class='message'>⏳ Loading data...</p>";
  try {
    const response = await fetch(API_URL);
    allCrops = (await response.json()).records;
    fillStateDropdown();
    showCards(allCrops);
  } catch (error) {
    cardContainer.innerHTML = "<p class='message'>❌ Failed to load data. Check your internet.</p>";
  }
}

function fillStateDropdown() {

  
  const allStates = allCrops.map(crop => crop.State);
  const uniqueStates = [...new Set(allStates)].sort();

  uniqueStates.forEach(state => {
    const option = document.createElement("option");
    option.value = state;
    option.textContent = state;
    stateDropdown.appendChild(option);
  });

}

function showCards(crops) {
  if (crops.length === 0) {
    cardContainer.innerHTML = "<p class='message'>🔍 No results found.</p>";
    resultCount.textContent = "";
    return;
  }

  resultCount.textContent = `Showing ${crops.length} results`;

  cardContainer.innerHTML = "";

  crops.forEach(crop => {

    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <h2>${crop.Commodity || "Unknown Crop"}</h2>
      <p class="sub">📍 ${crop.District || ""}, ${crop.Market || ""}</p>

      <div class="prices">
        <div class="price-box">
          <div class="label">Min</div>
          <div class="value min">₹${crop.Min_Price || "—"}</div>
        </div>
        <div class="price-box">
          <div class="label">Modal</div>
          <div class="value modal">₹${crop.Modal_Price || "—"}</div>
        </div>
        <div class="price-box">
          <div class="label">Max</div>
          <div class="value max">₹${crop.Max_Price || "—"}</div>
        </div>
      </div>

      <div class="card-footer">
        <span>🗓 ${crop.Arrival_Date || "N/A"}</span>
        <span class="badge">${crop.State || "India"}</span>
      </div>
    `;

    cardContainer.appendChild(card);

  });

}

function filterAndSort() {

  const searchText    = searchBox.value.toLowerCase();
  const selectedState = stateDropdown.value;
  const sortChoice    = sortDropdown.value;

  let result = allCrops

    .filter(crop => crop.Commodity.toLowerCase().includes(searchText))

    .filter(crop => {
      if (selectedState === "") return true;
      return crop.State === selectedState;
    });

  if (sortChoice === "low") {
    result = result.sort((a, b) => Number(a.Modal_Price) - Number(b.Modal_Price));
  }

  if (sortChoice === "high") {
    result = result.sort((a, b) => Number(b.Modal_Price) - Number(a.Modal_Price));
  }

  showCards(result);

}

searchBox.addEventListener("input", filterAndSort);
stateDropdown.addEventListener("change", filterAndSort);
sortDropdown.addEventListener("change", filterAndSort);

loadData();