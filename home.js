function getMinPrice(shop){ const nums = shop.services.map(s=> s[1]||0); const vals = nums.filter(n=>n>0); return vals.length? Math.min(...vals):0; }
function render(list){
  const container = document.getElementById('shopList'); container.innerHTML='';
  list.forEach((s,i)=>{
    const img = s.images && s.images[0] ? s.images[0] : 'images/logo.png';
    const min = getMinPrice(s);
    const div = document.createElement('div'); div.className='shop-card';
    div.innerHTML = `<img class="shop-banner" src="${img}" alt="${s.name}"><div class="shop-body"><div class="shop-info"><h3>${s.name}</h3><p>${s.type} • ${s.location} • ⭐ ${s.rating}</p><p>${s.about}</p><p>From ₹${min}</p></div><div class="actions"><button class="btn" onclick="viewShop(${s.id})">View Details</button></div></div>`;
    container.appendChild(div);
  });
}
function applyFilters(){
  const q = (document.getElementById('searchInput').value||'').toLowerCase();
  const type = document.getElementById('typeFilter').value; const sort = document.getElementById('sortFilter').value;
  let filtered = SHOPS.filter(s=>{ const nameMatch = s.name.toLowerCase().includes(q); const svcMatch = s.services.some(x=> x[0].toLowerCase().includes(q)); const typeMatch = type? s.type===type : true; return (nameMatch||svcMatch) && typeMatch; });
  if(sort==='priceLow') filtered.sort((a,b)=> getMinPrice(a)-getMinPrice(b));
  if(sort==='priceHigh') filtered.sort((a,b)=> getMinPrice(b)-getMinPrice(a)); render(filtered);
}
function viewShop(id){ location.href='shop.html?id='+id; }
function logout(){ localStorage.removeItem('sabarCurrent'); location.href='login.html'; }
document.addEventListener('DOMContentLoaded', ()=>{
  const cur = localStorage.getItem('sabarCurrent'); const users = JSON.parse(localStorage.getItem('sabarUsers')||'{}'); if(!cur){ location.href='login.html'; return;}
  document.getElementById('welcome').innerText = 'Welcome, ' + (users[cur]?.name || 'User');
  render(SHOPS);
  document.getElementById('searchInput').addEventListener('input', applyFilters);
  document.getElementById('typeFilter').addEventListener('change', applyFilters);
  document.getElementById('sortFilter').addEventListener('change', applyFilters);
});
