function showPage(id){
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.querySelectorAll('.nav-links a, #nav-drawer a').forEach(a=>a.classList.remove('active'));
  const pg = document.getElementById('page-'+id);
  if(pg) pg.classList.add('active');
  const nl = document.getElementById('nav-'+id);
  if(nl) nl.classList.add('active');
  closeMenu();
  window.scrollTo({top:0,behavior:'instant'});
}

function toggleMenu(){
  const h = document.getElementById('hamburger');
  const d = document.getElementById('nav-drawer');
  h.classList.toggle('open');
  d.classList.toggle('open');
}

function closeMenu(){
  document.getElementById('hamburger').classList.remove('open');
  document.getElementById('nav-drawer').classList.remove('open');
}

function handleSubmit(e){
  const btn = e.target;
  btn.textContent = 'Message Sent ✓';
  btn.style.background = '#3d7058';
  btn.disabled = true;
}

// Close drawer when clicking outside
document.addEventListener('click', function(e){
  const drawer = document.getElementById('nav-drawer');
  const nav = document.getElementById('main-nav');
  if(drawer.classList.contains('open') && !nav.contains(e.target) && !drawer.contains(e.target)){
    closeMenu();
  }
});
