const theme=document.querySelector('#theme');
try{if(localStorage.getItem('oromo-theme')==='dark')document.body.classList.add('dark');}catch{}
theme?.addEventListener('click',()=>{document.body.classList.toggle('dark');try{localStorage.setItem('oromo-theme',document.body.classList.contains('dark')?'dark':'light');}catch{}});
document.querySelector('#search')?.addEventListener('input',e=>{const q=e.target.value.trim().toLowerCase();let count=0;document.querySelectorAll('[data-search]').forEach(el=>{el.hidden=!el.dataset.search.includes(q);if(!el.hidden)count++;});document.querySelector('#result-count').textContent=`${count} document${count===1?'':'s'} found`;});
document.querySelectorAll('[data-filter]').forEach(b=>b.addEventListener('click',()=>{document.querySelectorAll('[data-filter]').forEach(x=>x.setAttribute('aria-pressed',String(x===b)));document.querySelectorAll('[data-status]').forEach(x=>x.hidden=b.dataset.filter!=='All'&&x.dataset.status!==b.dataset.filter);}));
