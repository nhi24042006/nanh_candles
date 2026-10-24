const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
let cart=[];
const fmt=n=>n.toLocaleString('en-US')+' đ';
function toast(t){const e=$('#toast');e.textContent=t;e.classList.add('on');clearTimeout(toast.t);toast.t=setTimeout(()=>e.classList.remove('on'),1800)}
function render(f=''){
  let n=0;
  $$('#grid .card').forEach(c=>{const ok=c.dataset.n.toLowerCase().includes(f.toLowerCase());c.hidden=!ok;if(ok)n++});
  $('#none').hidden=n>0;
}
function show(id){
  if(!$('main>section#'+id))id='home';
  $$('main>section').forEach(s=>s.classList.toggle('on',s.id===id));
  $$('nav a').forEach(a=>a.classList.toggle('on',a.dataset.p===id));
  scrollTo(0,0);
  if(id==='giohang')renderCart();
  if(id==='lichsu')renderHist();
}
function goSub(id){
  location.hash='#about';show('about');
  setTimeout(()=>$('#'+id).scrollIntoView({behavior:'smooth'}),50);
}
addEventListener('hashchange',()=>show(location.hash.slice(1)||'home'));
$$('.band[data-s]').forEach(b=>b.onclick=()=>$('#'+b.dataset.s).scrollIntoView({behavior:'smooth'}));
$$('[data-go]').forEach(a=>a.onclick=()=>goSub(a.dataset.go));
$('#grid').onclick=e=>{const c=e.target.closest('.card');if(c)openDetail(c)};
$('#cart').onclick=()=>{location.hash='#giohang'};
$('#sb').onclick=()=>{const q=$('#q');const open=q.style.display==='block';q.style.display=open?'none':'block';if(!open){q.focus();location.hash='#products'}};
$('#q').oninput=e=>{location.hash='#products';render(e.target.value)};
/* ===== Đăng nhập / Đăng ký (demo, lưu trong trình duyệt) ===== */
const dlg=$('#auth');let mode='login',cur=null;
const get=k=>{try{return JSON.parse(localStorage.getItem(k))}catch(e){return null}};
const set=(k,v)=>{try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}};
cur=get('nanhCur');
function upd(){const ul=t('Đăng nhập / Đăng ký');$('#user').title=cur?cur.name:ul;$('#user').setAttribute('aria-label',cur?cur.name:ul);$('#user').textContent=cur?cur.name[0].toUpperCase():'👤';if($('#lichsu.on'))renderHist()}
function setMode(m){mode=m;$$('.tabs button').forEach(b=>b.classList.toggle('on',b.dataset.m===m));$$('.reg').forEach(e=>e.hidden=m!=='register');$('#authBtn').textContent=t(m==='login'?'Đăng nhập':'Đăng ký');$('#msg').textContent=''}
$$('.tabs button').forEach(b=>b.onclick=()=>setMode(b.dataset.m));
$('#x').onclick=()=>dlg.close();
$('#user').onclick=()=>{if(cur){location.hash='#lichsu'}else{setMode('login');dlg.showModal()}};
$('#af').onsubmit=e=>{
  e.preventDefault();
  const email=$('#ae').value.trim().toLowerCase(),pw=$('#ap').value,us=get('nanhUsers')||[],err=t=>$('#msg').textContent=t;
  if(mode==='register'){
    const name=$('#an').value.trim();
    if(!name)return err(t('Vui lòng nhập họ và tên.'));
    if(pw!==$('#ap2').value)return err(t('Mật khẩu nhập lại chưa khớp.'));
    if(us.some(u=>u.email===email))return err(t('Email này đã được đăng ký.'));
    cur={name,email,pw};us.push(cur);set('nanhUsers',us);
  }else{
    const u=us.find(u=>u.email===email&&u.pw===pw);
    if(!u)return err(t('Email hoặc mật khẩu chưa đúng.'));
    cur=u;
  }
  set('nanhCur',cur);upd();dlg.close();$('#af').reset();toast(t('Xin chào '+cur.name+'!'));
};
upd();
render();

/* ===== Về Nành: bấm vào thanh mới hiện nội dung ===== */
$$('#menu .band[data-s]').forEach(b=>{
  const box=$('#'+b.dataset.s+' .wrap');
  if(!box)return;
  box.hidden=true;
  b.after(box);
  b.setAttribute('aria-expanded','false');
  b.onclick=()=>{
    const open=box.hidden;
    $$('#menu .wrap').forEach(w=>w.hidden=true);
    $$('#menu .band').forEach(x=>x.setAttribute('aria-expanded','false'));
    box.hidden=!open;
    b.setAttribute('aria-expanded',String(open));
    if(open)b.scrollIntoView({behavior:'smooth'});
  };
});
function goSub(id){
  location.hash='#about';show('about');
  setTimeout(()=>{const b=$('#menu .band[data-s="'+id+'"]');if(b&&b.getAttribute('aria-expanded')!=='true')b.click()},50);
}

/* ===== Chi tiết sản phẩm ===== */
const pd=$('#pd');let pdCard=null,pdQ=1;
function openDetail(c){
  pdCard=c;pdQ=1;
  const im=c.querySelector('.img');
  $('#pdImg').style.background=im.style.background;
  $('#pdImg').innerHTML=im.innerHTML;
  $('#pdQty').textContent=1;
  fillDetail();
  pd.showModal();
}
function fillDetail(){
  if(!pdCard)return;
  const c=pdCard;
  $('#pdName').textContent=t(c.dataset.n);
  $('#pdPrice').textContent=c.querySelector('.p').textContent;
  $('#pdSold').textContent=t('Đã bán '+c.dataset.sold);
  $('#pdDesc').textContent=I18N.desc(c.dataset.n,c.dataset.d||'');
}
$('#pdMinus').onclick=()=>{pdQ=Math.max(1,pdQ-1);$('#pdQty').textContent=pdQ};
$('#pdPlus').onclick=()=>{pdQ++;$('#pdQty').textContent=pdQ};
$('#pdClose').onclick=()=>pd.close();
pd.onclick=e=>{if(e.target===pd)pd.close()};
$('#pdAdd').onclick=()=>{addToCart(pdCard,pdQ);toast(t('Đã thêm '+pdQ+' × '+pdCard.dataset.n+' vào giỏ'));pd.close()};
$('#pdBuy').onclick=()=>{addToCart(pdCard,pdQ);pd.close();location.hash='#giohang'};

/* ===== Giỏ hàng / Đặt hàng / Lịch sử mua hàng ===== */
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const total=()=>cart.reduce((a,x)=>a+x.p*x.q,0);
function saveCart(){set('nanhCart',cart);$('#count').textContent=cart.reduce((a,x)=>a+x.q,0)}
function addToCart(c,q){
  const n=c.dataset.n,it=cart.find(x=>x.n===n);
  if(it){it.q+=q}else{
    const im=c.querySelector('.img img');
    cart.push({n,p:+c.dataset.p,q,img:im?im.getAttribute('src'):'',bg:c.querySelector('.img').style.background});
  }
  saveCart();
}
function renderCart(){
  const box=$('#cartList');
  if(!cart.length){box.innerHTML='<p class="empty">'+t('Giỏ hàng đang trống.')+' <a href="#products">'+t('Xem sản phẩm')+'</a></p>';$('#checkout').hidden=true;return}
  box.innerHTML=cart.map((x,i)=>`<div class="ci"><div class="th" style="background:${esc(x.bg||'#3d2218')}">${x.img?`<img src="${esc(x.img)}" alt="" onerror="this.remove()">`:''}</div><div class="ci-n"><b>${esc(t(x.n))}</b><span>${fmt(x.p)}</span></div><div class="qty"><button type="button" data-i="${i}" data-d="-1" aria-label="${t('Giảm')}">−</button><span>${x.q}</span><button type="button" data-i="${i}" data-d="1" aria-label="${t('Tăng')}">+</button></div><div class="ci-t">${fmt(x.p*x.q)}</div><button type="button" class="rm" data-rm="${i}" aria-label="${t('Xóa')}">✕</button></div>`).join('');
  $('#cartTotal').textContent=fmt(total());
  $('#checkout').hidden=false;
  if(cur&&!$('#co [name=name]').value)$('#co [name=name]').value=cur.name;
}
$('#cartList').onclick=e=>{
  const d=e.target.closest('[data-d]'),r=e.target.closest('[data-rm]');
  if(d){const it=cart[+d.dataset.i];it.q=Math.max(1,it.q+ +d.dataset.d)}
  else if(r){cart.splice(+r.dataset.rm,1)}
  else return;
  saveCart();renderCart();
};
$('#co').onsubmit=e=>{
  e.preventDefault();
  if(!cart.length)return;
  if(!cur){toast(t('Vui lòng đăng nhập để đặt hàng'));setMode('login');dlg.showModal();return}
  const f=new FormData(e.target);
  const o={id:'NC'+Date.now().toString().slice(-8),email:cur.email,date:new Date().toISOString(),
    items:cart.map(x=>({n:x.n,p:x.p,q:x.q})),total:total(),
    name:f.get('name'),phone:f.get('phone'),addr:f.get('addr'),note:f.get('note'),pay:f.get('pay'),status:'Đang xử lý'};
  const os=get('nanhOrders')||[];os.push(o);set('nanhOrders',os);
  cart=[];saveCart();e.target.reset();
  toast(t('Đặt hàng thành công! Mã đơn '+o.id));
  location.hash='#lichsu';
};
function renderHist(){
  const box=$('#histList');
  if(!cur){box.innerHTML='<p class="empty">'+t('Vui lòng đăng nhập để xem lịch sử mua hàng.')+'</p><button type="button" class="btn buy" id="hLogin" style="width:auto">'+t('Đăng nhập')+'</button>';return}
  const os=(get('nanhOrders')||[]).filter(o=>o.email===cur.email).reverse();
  let html='<div class="hello">'+t('Xin chào,')+' <b>'+esc(cur.name)+'</b> <button type="button" class="back" id="hOut">'+t('Đăng xuất')+'</button></div>';
  if(!os.length)html+='<p class="empty">'+t('Bạn chưa có đơn hàng nào.')+' <a href="#products">'+t('Mua sắm ngay')+'</a></p>';
  html+=os.map(o=>`<article class="order"><div class="oh"><b>${t('Mã đơn')} ${esc(o.id)}</b><span>${new Date(o.date).toLocaleString(I18N.lang==='en'?'en-US':'vi-VN')}</span><em${o.status==='Đã hủy'?' class="cx"':''}>${esc(t(o.status))}</em></div>${o.items.map(x=>`<div class="oi"><span>${esc(t(x.n))} × ${x.q}</span><span>${fmt(x.p*x.q)}</span></div>`).join('')}<div class="oi tot"><span>${t('Tổng cộng')}</span><span>${fmt(o.total)}</span></div><p class="od">${t('Giao tới:')} ${esc(o.name)} · ${esc(o.phone)} · ${esc(o.addr)}<br>${t(o.pay==='bank'?'Chuyển khoản ngân hàng':'Thanh toán khi nhận hàng')}${o.note?'<br>'+t('Ghi chú:')+' '+esc(o.note):''}</p>${o.status==='Đang xử lý'?`<button type="button" class="cancel" data-cancel="${esc(o.id)}">${t('Hủy đơn hàng')}</button>`:''}</article>`).join('');
  box.innerHTML=html;
}
$('#histList').onclick=e=>{
  if(e.target.id==='hLogin'){setMode('login');dlg.showModal()}
  const cb=e.target.closest('[data-cancel]');
  if(cb){
    if(!confirm(t('Bạn có chắc muốn hủy đơn hàng này?')))return;
    const os=get('nanhOrders')||[],o=os.find(x=>x.id===cb.dataset.cancel&&cur&&x.email===cur.email);
    if(o&&o.status==='Đang xử lý'){o.status='Đã hủy';set('nanhOrders',os);renderHist();toast(t('Đã hủy đơn hàng'))}
  }
  if(e.target.id==='hOut'){cur=null;set('nanhCur',null);upd();toast(t('Đã đăng xuất'))}
};
cart=get('nanhCart')||[];saveCart();
show(location.hash.slice(1)||'home');

/* ===== Bộ sưu tập: bấm vào hũ để xem nhiều ảnh ===== */
function goCollection(){
  location.hash='#products';show('products');
  setTimeout(()=>$('#collection').scrollIntoView({behavior:'smooth'}),80);
}
$$('[data-col]').forEach(a=>a.onclick=e=>{e.preventDefault();goCollection()});
const gl=$('#gl');let glImgs=[],glI=0,glName='',glBg='',glCard=null,glQ=1;
function openGallery(c){
  glImgs=(c.dataset.imgs||'').split(',').map(s=>s.trim()).filter(Boolean);
  /* Ảnh đầu tiên luôn là ảnh bìa đang thấy trên thẻ, để bấm vào không bị đổi sang ảnh khác */
  const cover=c.querySelector('.img img');
  if(cover){
    const cs=cover.getAttribute('src');
    glImgs=glImgs.filter(x=>decodeURI(x)!==decodeURI(cs));
    glImgs.unshift(cs);
  }
  glCard=c;glQ=1;$('#glQty').textContent=1;glName=c.dataset.n;glBg=c.querySelector('.img').style.background;
  fillGl();
  $('#glThumbs').innerHTML=glImgs.map((s,i)=>`<button type="button" data-i="${i}" aria-label="${i+1}/${glImgs.length}"><img src="${esc(s)}" alt="" onerror="this.remove()"></button>`).join('');
  const multi=glImgs.length>1;
  $('#glPrev').hidden=$('#glNext').hidden=!multi;
  glShow(0);gl.showModal();
}
function fillGl(){
  if(!glCard)return;
  const c=glCard;
  $('#glTitle').textContent=t(c.dataset.n);
  $('#glPrice').textContent=fmt(+c.dataset.p||0);
  $('#glSold').textContent=t('Đã bán '+(c.dataset.sold||0));
  $('#glDesc').textContent=I18N.desc(c.dataset.n,c.dataset.d||'');
}
function glShow(i){
  if(!glImgs.length)return;
  glI=(i+glImgs.length)%glImgs.length;
  const im=$('#glImg');
  im.style.visibility='visible';
  im.onerror=()=>{im.style.visibility='hidden'};
  im.src=glImgs[glI];
  im.alt=t(glName)+' '+(glI+1);
  $('#glCount').textContent=(glI+1)+' / '+glImgs.length;
  $$('#glThumbs button').forEach((b,k)=>{
    b.classList.toggle('on',k===glI);
    if(k===glI)b.scrollIntoView({block:'nearest',inline:'nearest'});
  });
}
$('#colGrid').onclick=e=>{const c=e.target.closest('.card.col');if(c)openGallery(c)};
$('#colGrid').onkeydown=e=>{
  if(e.key!=='Enter'&&e.key!==' ')return;
  const c=e.target.closest('.card.col');if(c){e.preventDefault();openGallery(c)}
};
$('#glPrev').onclick=()=>glShow(glI-1);
$('#glNext').onclick=()=>glShow(glI+1);
$('#glThumbs').onclick=e=>{const b=e.target.closest('button[data-i]');if(b)glShow(+b.dataset.i)};
$('#glMinus').onclick=()=>{glQ=Math.max(1,glQ-1);$('#glQty').textContent=glQ};
$('#glPlus').onclick=()=>{glQ++;$('#glQty').textContent=glQ};
$('#glAdd').onclick=()=>{addToCart(glCard,glQ);toast(t('Đã thêm '+glQ+' × '+glCard.dataset.n+' vào giỏ'));gl.close()};
$('#glBuy').onclick=()=>{addToCart(glCard,glQ);gl.close();location.hash='#giohang'};
$('#glClose').onclick=()=>gl.close();
gl.onclick=e=>{if(e.target===gl)gl.close()};
gl.addEventListener('keydown',e=>{
  if(e.key==='ArrowLeft')glShow(glI-1);
  else if(e.key==='ArrowRight')glShow(glI+1);
});
let glX=null;
$('#glMain').addEventListener('touchstart',e=>{glX=e.touches[0].clientX},{passive:true});
$('#glMain').addEventListener('touchend',e=>{
  if(glX===null)return;
  const d=e.changedTouches[0].clientX-glX;glX=null;
  if(Math.abs(d)>40)glShow(glI+(d<0?1:-1));
},{passive:true});

/* ===== Chuyển ngôn ngữ Việt / Anh ===== */
function refreshLang(){
  upd();
  setMode(mode);
  if(pd.open)fillDetail();
  if(gl.open)fillGl();
  if($('#giohang.on'))renderCart();
  if($('#lichsu.on'))renderHist();
}
$$('.flag').forEach(b=>b.onclick=()=>I18N.setLang(b.dataset.l,refreshLang));
I18N.setLang(I18N.lang,refreshLang);
