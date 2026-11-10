// Gentle Nutrition Stage 1: local-only interactions. No tracking, checkout or data collection.
const menuToggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('#main-nav');
if(menuToggle&&nav){
 menuToggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuToggle.setAttribute('aria-expanded',String(open));});
 nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{nav.classList.remove('open');menuToggle.setAttribute('aria-expanded','false');}));
 document.addEventListener('keydown',event=>{if(event.key==='Escape'&&nav.classList.contains('open')){nav.classList.remove('open');menuToggle.setAttribute('aria-expanded','false');menuToggle.focus();}});
}
document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
const current=location.pathname.split('/').pop()||'index.html';
document.querySelectorAll('#main-nav a').forEach(a=>{if(a.getAttribute('href')===current)a.setAttribute('aria-current','page');});
const search=document.querySelector('#product-search');
if(search){const cards=[...document.querySelectorAll('#products-list .product-card')];const count=document.querySelector('#results-count');const empty=document.querySelector('#empty-results');search.addEventListener('input',()=>{const q=search.value.trim().toLowerCase();let visible=0;cards.forEach(card=>{const match=card.textContent.toLowerCase().includes(q);card.hidden=!match;if(match)visible++;});count.textContent=`${visible} result${visible===1?'':'s'} found`;empty.hidden=visible!==0;});}
const products={
 guide:{name:'Gentle Nutrition Guide',price:'£9.99',description:'An introduction to the Gentle Nutrition philosophy and everyday practice. Full contents pending review.',format:'73-page PDF.',delivery:'After payment you’ll receive your download link.'},
 challenge:{name:'30-Day Challenge',price:'£29.99',description:'A guided programme with a PDF and 16 cards. Full contents pending review.',format:'44-page PDF and 16 cards.',delivery:'After payment you’ll receive your download link.'},
 lunchboxes:{name:'School Lunch Boxes Guide',price:'£9.99',description:'Practical packed-lunch ideas for parents and carers. Full contents pending review.',format:'12-page PDF.',delivery:'After payment you’ll receive your download link.'},
 constructors:{name:'Constructors',price:'Free',description:'Five meal-building PDFs: smoothies, soups, bowls, sauces for bowls and chia pudding. Ukrainian language pending verification.',format:'Digital guides.',delivery:'Download instantly — no payment needed.'}
};
const detailName=document.querySelector('#detail-name');
if(detailName){const id=new URLSearchParams(location.search).get('id');const item=products[id];if(!item){detailName.textContent='Product not found';document.querySelector('#detail-description').textContent='Please select a product from the catalogue.';document.querySelector('.wide-btn').hidden=true;}else{detailName.textContent=item.name;document.querySelector('#detail-price').textContent=item.price;document.querySelector('#detail-description').textContent=item.description;document.querySelector('#detail-format').textContent=item.format;document.querySelector('#detail-delivery').textContent=id==='lunchboxes'?'Not yet published — purchase unavailable.':item.delivery;document.querySelector('#detail-cover').innerHTML='<div class="cover cover-large"><img class="product-cover-image" src="assets/'+id+'.webp" alt="'+item.name+' cover"></div>';document.title=item.name+' | Gentle Nutrition Demo';if(id==='constructors')document.querySelector('.wide-btn').textContent='Demo — download coming soon';}}
