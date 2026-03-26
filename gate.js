(function(){
  var k='_hcp_auth';
  if(sessionStorage.getItem(k)==='1')return;
  var p=btoa('champion');
  var o=document.createElement('div');
  o.id='pw-gate';
  o.style.cssText='position:fixed;inset:0;z-index:99999;background:#0f172a;display:flex;align-items:center;justify-content:center;flex-direction:column;font-family:-apple-system,BlinkMacSystemFont,sans-serif;';
  o.innerHTML='<div style="text-align:center;color:#e2e8f0;"><h2 style="margin-bottom:1rem;font-size:1.5rem;">Enter Password</h2><input id="pw-input" type="password" placeholder="Password" style="padding:0.75rem 1.25rem;font-size:1rem;border-radius:8px;border:1px solid #334155;background:#1e293b;color:#e2e8f0;outline:none;width:260px;text-align:center;" /><br><button id="pw-btn" style="margin-top:0.75rem;padding:0.6rem 2rem;font-size:0.9rem;font-weight:700;border-radius:8px;border:none;background:#3b82f6;color:#fff;cursor:pointer;">Enter</button><div id="pw-err" style="margin-top:0.75rem;color:#ef4444;font-size:0.85rem;min-height:1.2em;"></div></div>';
  document.body.appendChild(o);
  document.body.style.overflow='hidden';
  var inp=document.getElementById('pw-input');
  var btn=document.getElementById('pw-btn');
  var err=document.getElementById('pw-err');
  function check(){
    if(btoa(inp.value)===p){
      sessionStorage.setItem(k,'1');
      o.remove();
      document.body.style.overflow='';
    } else {
      err.textContent='Wrong password';
      inp.style.animation='shake 0.4s';
      setTimeout(function(){inp.style.animation='';},400);
    }
  }
  btn.addEventListener('click',check);
  inp.addEventListener('keydown',function(e){if(e.key==='Enter')check();});
  inp.focus();
  var s=document.createElement('style');
  s.textContent='@keyframes shake{0%,100%{transform:translateX(0)}25%{transform:translateX(-8px)}75%{transform:translateX(8px)}}';
  document.head.appendChild(s);
})();
