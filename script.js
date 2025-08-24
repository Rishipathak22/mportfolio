const words = [
      "Building clean, fast websites.",
      "Front‑end focused, back‑end ready.",
      "Open to roles in Dubai.",
    ];
    let i=0;
    function cycle(){
      const el = document.getElementById('type');
      el.style.opacity = 0;
      setTimeout(()=>{ el.textContent = words[i = (i+1)%words.length]; el.style.opacity = 1;}, 250);
    }
    setInterval(cycle, 2600);

    // Theme toggle with localStorage
    const modeBtn = document.getElementById('mode');
    const saved = localStorage.getItem('theme');
    if(saved === 'light'){ document.documentElement.classList.add('light'); }
    modeBtn.addEventListener('click', ()=>{
      document.documentElement.classList.toggle('light');
      localStorage.setItem('theme', document.documentElement.classList.contains('light')? 'light':'dark');
    });

    // Current year
    document.getElementById('year').textContent = new Date().getFullYear();

    // Smooth scroll (basic)
    document.querySelectorAll('a[href^="#"]').forEach(a=>{
      a.addEventListener('click', e=>{
        const id = a.getAttribute('href').slice(1);
        const target = document.getElementById(id);
        if(target){ e.preventDefault(); target.scrollIntoView({behavior:'smooth', block:'start'}); }
      });
    });


