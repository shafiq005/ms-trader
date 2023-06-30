const routes = {
  "/" : "/index.html",
  "/sitemap" : "/sitemap.xml",
};

const hdlc = async () =>{
  const path = window.location.pathname;
  const route = routes[path] || routes[404];
  const html = await fetch(route).then((data) => data.text());
  document.getElementById("mnpg").innerHTML = html;
};

window.onpopstate = hdlc;