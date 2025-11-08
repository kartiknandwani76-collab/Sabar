document.addEventListener('DOMContentLoaded', ()=>{
  const params = new URLSearchParams(location.search); const shop = params.get('shop')||''; const price = params.get('price')||''; const service = params.get('service')||'';
  document.getElementById('bookingShop').innerText = shop + (service? ' - ' + service : '');
  document.getElementById('bookingPrice').innerText = 'Price: ₹' + price;
  
  // Handle service location selection
  const serviceLocation = document.getElementById('serviceLocation');
  const addressInput = document.getElementById('custAddress');
  
  serviceLocation.addEventListener('change', ()=> {
    if(serviceLocation.value === 'home') {
      addressInput.style.display = 'block';
      addressInput.required = true;
      // Add home service charge
      const homePrice = parseInt(price) + 50;
      document.getElementById('bookingPrice').innerText = 'Price: ₹' + homePrice + ' (includes ₹50 home visit charge)';
    } else {
      addressInput.style.display = 'none';
      addressInput.required = false;
      document.getElementById('bookingPrice').innerText = 'Price: ₹' + price;
    }
  });
  const slotSelect = document.getElementById('timeSlot');
  const slots = ['09:00 AM','10:00 AM','11:30 AM','01:00 PM','03:00 PM','05:00 PM','06:30 PM'];
  slots.forEach(s=> slotSelect.innerHTML += `<option value="${s}">${s}</option>`);
  document.getElementById('confirmBtn').addEventListener('click', ()=>{
    const location = document.getElementById('serviceLocation').value;
    const address = document.getElementById('custAddress').value;
    const finalPrice = location === 'home' ? parseInt(price) + 50 : price;
    
    if(!location) {
      return document.getElementById('msg').innerText='Please select service location';
    }
    
    if(location === 'home' && !address) {
      return document.getElementById('msg').innerText='Please enter your address for home service';
    }
    
    const data = {
      shop, 
      service, 
      price: finalPrice,
      name: document.getElementById('custName').value, 
      phone: document.getElementById('custPhone').value, 
      date: document.getElementById('custDate').value, 
      time: slotSelect.value,
      serviceLocation: location,
      address: location === 'home' ? address : '',
      created: new Date().toISOString()
    };
    
    if(!data.name||!data.phone||!data.date) {
      return document.getElementById('msg').innerText='Fill required fields';
    }
    
    const arr = JSON.parse(localStorage.getItem('sabarBookings')||'[]'); 
    arr.push(data); 
    localStorage.setItem('sabarBookings', JSON.stringify(arr));
    location.href='confirmation.html';
  });
  document.getElementById('waBtn').addEventListener('click', ()=>{
    const location = document.getElementById('serviceLocation').value;
    const address = document.getElementById('custAddress').value;
    const finalPrice = location === 'home' ? parseInt(price) + 50 : price;
    
    const text = `Hi, I want to book at ${shop} (Service: ${service || ''})
Location: ${location === 'home' ? 'At Home' : 'At Station'}
${location === 'home' ? 'Address: ' + address + '\n' : ''}Price: ₹${finalPrice}${location === 'home' ? ' (includes ₹50 home visit charge)' : ''}`;
    
    window.open('https://wa.me/?text='+encodeURIComponent(text),'_blank');
  });
});
