document.addEventListener('DOMContentLoaded',()=>{console.log('RAMKAM INFORMATION SYSTEMS loaded');document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',e=>{const el=document.querySelector(a.getAttribute('href'));if(el){e.preventDefault();el.scrollIntoView({behavior:'smooth'})}}));});
const productGrid=document.getElementById('product-grid');
if(productGrid){
  for(let i=1;i<=65;i++){
    const n=String(i).padStart(2,'0');
    const card=document.createElement('article');
    card.className='product-card';
    card.innerHTML=`<img src="product-images/product-${n}.jpg" alt="RAMKAM product ${i}" loading="lazy"><div class="pcopy"><strong>PRODUCT ${n}</strong><small>RAMKAM INFORMATION SYSTEMS</small></div>`;
    productGrid.appendChild(card);
  }
}
