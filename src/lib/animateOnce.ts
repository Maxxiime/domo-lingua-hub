export function animateOnce(selector='[data-animate-once]'){
  const seen = new WeakSet<Element>();
  const run=(el:Element)=>{
    if(seen.has(el)) return;
    seen.add(el);
    el.addEventListener('animationend',()=>{
      const cl=(el as HTMLElement).classList;
      [...cl].filter(c=>c.startsWith('animate-')||c.includes('animate-in')).forEach(c=>cl.remove(c));
      (el as HTMLElement).setAttribute('data-animated','true');
    },{once:true});
  };
  document.querySelectorAll(selector).forEach(run);
  const mo=new MutationObserver(m=>m.forEach(x=>{
    x.addedNodes.forEach(n=>{
      if(n instanceof HTMLElement){
        if(n.matches(selector)) run(n);
        n.querySelectorAll?.(selector).forEach(run);
      }
    });
  }));
  mo.observe(document.documentElement,{subtree:true,childList:true});
  return ()=>mo.disconnect();
}
