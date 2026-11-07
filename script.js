(function () {
  var S = window.SITE;
  if (!S) return;

  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text !== undefined) n.textContent = text;
    return n;
  }
  function link(text, href) {
    var a = el("a", null, text);
    a.href = href;
    return a;
  }

  document.getElementById("gh-link").href = S.github;
  document.getElementById("updated").textContent = S.updated;

  var statusText = { reached: "reached", progress: "in progress", next: "next", destination: "destination" };
  var hops = document.getElementById("hops");
  S.hops.forEach(function (h, i) {
    var li = el("li", h.status);
    li.style.setProperty("--i", i);
    li.appendChild(el("span", "host", h.host));
    li.appendChild(el("span", "note", h.note));
    li.appendChild(el("span", "status", statusText[h.status] || h.status));
    hops.appendChild(li);
  });

  var now = document.getElementById("now-list");
  S.now.forEach(function (n) {
    now.appendChild(el("dt", null, n.label));
    now.appendChild(el("dd", null, n.text));
  });

  var days = Math.ceil((new Date(S.exam.date) - new Date()) / 86400000);
  var c = document.getElementById("countdown");
  if (days > 0) {
    c.appendChild(el("strong", null, days + (days === 1 ? " day" : " days")));
    c.appendChild(document.createTextNode(" until the " + S.exam.name + " exam, " + S.exam.label + "."));
  } else {
    c.textContent = S.exam.name + " exam: " + S.exam.label + ".";
  }

  var list = document.getElementById("project-list");
  S.projects.forEach(function (p) {
    var art = el("article", "project");
    art.appendChild(el("h3", null, p.name));
    art.appendChild(el("p", "tagline", p.tagline));
    var dl = el("dl", "facts");
    [["Built with", p.stack], ["State", p.state], ["Evidence", p.evidence]].forEach(function (f) {
      dl.appendChild(el("dt", null, f[0]));
      dl.appendChild(el("dd", null, f[1]));
    });
    art.appendChild(dl);
    var links = el("p", "links");
    if (p.url) links.appendChild(link("View the repository", p.url));
    if (p.diagram) links.appendChild(link("Read the architecture notes", p.diagram));
    art.appendChild(links);
    list.appendChild(art);
  });

  var rows = document.getElementById("control-rows");
  S.controls.forEach(function (k) {
    var tr = el("tr", k.status);
    var td1 = el("td", null, k.name); td1.setAttribute("data-label", "Control");
    var td2 = el("td", null, k.detail); td2.setAttribute("data-label", "What it does");
    var td3 = el("td"); td3.setAttribute("data-label", "Status");
    var chip = el("span", "chip " + k.status);
    if (k.status === "built") chip.appendChild(el("span", "tick", "✓")).setAttribute("aria-hidden", "true");
    chip.appendChild(document.createTextNode(k.when));
    td3.appendChild(chip);
    [td1, td2, td3].forEach(function (t) { tr.appendChild(t); });
    rows.appendChild(tr);
  });
})();
