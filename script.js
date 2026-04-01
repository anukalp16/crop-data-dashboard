
const API_URL = "https://api.data.gov.in/resource/35985678-0d79-46b4-9ed6-6f13308a1d24?api-key=579b464db66ec23bdd0000010c83107aaa09426d5bc46c7d722a7c57&limit=1000&format=json";

let allCrops = [];


const cardContainer  = document.getElementById("cardContainer");



async function loadData() {

  
  cardContainer.innerHTML = "<p class='message'>⏳ Loading data...</p>";

  try {
   
    const response = await fetch(API_URL);

    
    const data = await response.json();

    
    allCrops = data.records;

    
    showCards(allCrops);

  } catch (error) {
    cardContainer.innerHTML = "<p class='message'>❌ Failed to load data. Check your internet.</p>";
  }

}



function showCards(crops) {

 
  if (crops.length === 0) {
    cardContainer.innerHTML = "<p class='message'>🔍 No crops available.</p>";
    return;
  }

 
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


loadData();