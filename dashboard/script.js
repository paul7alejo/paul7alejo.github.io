(function () {
  var S = window.SITE;
  if (!S) return;

  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text !== undefined) n.textContent = text;
    return n;
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

  var rows = document.getElementById("project-rows");
  S.projects.forEach(function (p) {
    var tr = el("tr");
    var td1 = el("td", null, p.name); td1.setAttribute("data-label", "Project");
    var td2 = el("td", null, p.stack); td2.setAttribute("data-label", "Built with");
    var td3 = el("td", null, p.state); td3.setAttribute("data-label", "State");
    var td4 = el("td"); td4.setAttribute("data-label", "Evidence");
    td4.appendChild(document.createTextNode(p.evidence));
    if (p.url) {
      td4.appendChild(document.createTextNode(" "));
      var a = el("a", null, "View the repository");
      a.href = p.url;
      td4.appendChild(a);
    }
    [td1, td2, td3, td4].forEach(function (t) { tr.appendChild(t); });
    rows.appendChild(tr);
  });
})();
