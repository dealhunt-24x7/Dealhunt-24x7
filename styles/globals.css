/* Reset + base */
* { box-sizing: border-box; margin:0; padding:0; }
body { font-family: Arial,sans-serif; background:#f7f7f8; color:#202225; }

/* Top Navbar */
.top-navbar {
  display: flex; justify-content: space-between; align-items: center; gap:.75rem;
  padding:.6rem 1rem; background-color:#0d6efd; color:#fff; flex-wrap: wrap;
}
.brand-name { font-size:1.3rem; font-weight:800; color:#ffd700; } /* colorful */
.tagline { font-size:0.85rem; color:#fff; font-style:italic; }

.searchbar { flex:1; text-align:center; }
.searchbar input {
  width:min(90%, 520px); padding:.5rem .7rem; font-size:1rem; border-radius:8px; border:none; outline:none;
}

.top-right { display:flex; align-items:center; gap:.5rem; position:relative; }
.profile-icon { width:32px; height:32px; border-radius:50%; object-fit:cover; }
.topbtn { background:transparent; border:none; color:#fff; font-size:1.2rem; cursor:pointer; }

/* 3 Dots Side Panel */
.dots-panel {
  position: fixed; top:0; right:-250px; width:250px; height:100vh; background:#fff; box-shadow:-2px 0 8px rgba(0,0,0,.2);
  transition: right .3s ease; z-index:1000; padding:1rem;
  display:flex; flex-direction:column; gap:.5rem;
}
.dots-panel.open { right:0; }
.dots-panel .close-btn {
  align-self:flex-end; font-size:1.5rem; background:none; border:none; cursor:pointer;
}
.dots-menu-item { padding:.6rem .8rem; border-bottom:1px solid #eee; cursor:pointer; }

/* Categories */
.categories-slider {
  display:flex; overflow-x:auto; gap:1rem; padding:.75rem 1rem; scroll-snap-type:x proximity;
}
.category-item {
  display:flex; flex-direction:column; align-items:center; justify-content:center;
  min-width:100px; background:#fff; border-radius:12px; padding:.5rem; box-shadow:0 1px 3px rgba(0,0,0,.08);
  cursor:pointer; transition:transform .2s ease, box-shadow .2s ease; scroll-snap-align:start;
}
.category-item:hover { transform:translateY(-2px); box-shadow:0 4px 12px rgba(0,0,0,.12); }
.category-icon { width:44px; height:44px; object-fit:contain; margin-bottom:.3rem; }
.category-text { font-size:.9rem; font-weight:600; text-align:center; }

/* Deal of the Day */
.deal-slider { padding:1rem; }
.deal-slider h2 { margin:.25rem 0 .75rem; }
.deal-items { display:flex; overflow-x:hidden;
