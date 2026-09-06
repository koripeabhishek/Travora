const form=document.getElementById("tripForm");
const result=document.getElementById("result");

const baseCosts={
  "Kerala":4200,
  "Goa":4500,
  "Rajasthan":3900,
  "Himachal Pradesh":4300,
  "Karnataka":3600
};

form.addEventListener("submit",(e)=>{
  e.preventDefault();
  const destination=document.getElementById("destination").value;
  const days=Math.max(1,Number(document.getElementById("days").value)||1);
  const people=Math.max(1,Number(document.getElementById("people").value)||1);
  const budget=Math.max(1000,Number(document.getElementById("budget").value)||1000);
  const estimate=baseCosts[destination]*days*people;
  const status=budget>=estimate
    ? "Your budget covers this starting estimate. You can now adjust the trip style."
    : "This budget is below the starting estimate. Try fewer days, fewer travellers, or a lower-cost travel style.";
  result.hidden=false;
  result.innerHTML=`<h3>${destination} · ${days} days · ${people} traveller${people>1?"s":""}</h3>
  <p>Estimated starting cost: <strong>₹${estimate.toLocaleString("en-IN")}</strong></p>
  <p>${status}</p>`;
  result.scrollIntoView({behavior:"smooth",block:"nearest"});
});

document.querySelector(".menu").addEventListener("click",()=>{
  const nav=document.querySelector(".site-header nav");
  nav.style.display=nav.style.display==="flex"?"none":"flex";
});
