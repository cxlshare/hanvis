/* Basic interactivity for the enhanced site.
   - mobile menu
   - appointment form handling (client-side + optional fetch to API)
*/
document.addEventListener('DOMContentLoaded', function(){
  // Mobile menu toggle
  const hamb = document.querySelector('.hamburger');
  const nav = document.querySelector('.main-nav');
  if(hamb && nav){
    hamb.addEventListener('click', ()=>{
      if(nav.style.display === 'flex') nav.style.display = '';
      else nav.style.display = 'flex';
    });
  }

  // Form handling: optional fetch to endpoint. Replace `FORM_ENDPOINT` with your Formspree or backend URL.
  const form = document.getElementById('appointment-form');
  const statusEl = document.getElementById('form-status');
  const FORM_ENDPOINT = ''; // e.g. 'https://formspree.io/f/xxxxx' or your endpoint

  if(form){
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      statusEl.textContent = 'Sending...';
      const data = new FormData(form);
      const json = Object.fromEntries(data.entries());

      // If endpoint not set, just simulate success and show mailto fallback
      if(!FORM_ENDPOINT){
        statusEl.textContent = 'Form ready. No endpoint configured — opening mail client as fallback.';
        const subject = encodeURIComponent('Appointment request from ' + (json.name || 'Patient'));
        const body = encodeURIComponent('Name: ' + (json.name||'') + '\nPhone: ' + (json.phone||'') + '\nDate: ' + (json.date||'') + '\nMessage: ' + (json.message||''));
        window.location.href = 'mailto:info@smilecareclinic.com?subject=' + subject + '&body=' + body;
        return;
      }

      try{
        const res = await fetch(FORM_ENDPOINT, {
          method: 'POST',
          headers: {'Content-Type':'application/json'},
          body: JSON.stringify(json)
        });
        if(res.ok){
          statusEl.textContent = 'Request sent — we will contact you soon.';
          form.reset();
        } else {
          const text = await res.text();
          statusEl.textContent = 'Error: ' + (text || res.statusText);
        }
      }catch(err){
        statusEl.textContent = 'Network error: ' + err.message;
      }
    });
  }

  // Quick call button
  const callBtn = document.getElementById('book-call');
  if(callBtn) callBtn.addEventListener('click', ()=>{
    window.location.href = 'tel:+919876543210';
  });
});
