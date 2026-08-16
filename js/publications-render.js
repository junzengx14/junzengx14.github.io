/*
  Renders window.PUBLICATIONS into a mount element.

  index.html        -> renderPublications({ onlySelected: true })
  publications.html -> renderPublications({ onlySelected: false })
*/
(function () {
  "use strict";

  function esc(text) {
    return String(text)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function linkHtml(link) {
    var external = /^https?:\/\//i.test(link.href);
    var extra = external ? ' target="_blank" rel="noopener noreferrer"' : "";
    return '<a href="' + esc(link.href) + '"' + extra + ">" + esc(link.label) + "</a>";
  }

  // The title links to the paper's own site if given, else the first link (usually the publisher).
  function primaryHref(pub) {
    if (pub.website) return pub.website;
    if (pub.links && pub.links.length) return pub.links[0].href;
    return "";
  }

  function toggleHtml(id, label, bodyHtml, kind) {
    if (!bodyHtml) return null;
    return {
      button:
        '<a href="#" class="pub-toggle" data-target="' + esc(id) + '">' + esc(label) + "</a>",
      panel:
        '<div class="pub-panel pub-panel-' + kind + '" id="' + esc(id) + '" hidden>' +
        bodyHtml +
        "</div>",
    };
  }

  function pubHtml(pub) {
    var href = primaryHref(pub);
    var external = /^https?:\/\//i.test(href);
    var extra = external ? ' target="_blank" rel="noopener noreferrer"' : "";

    var links = (pub.links || []).map(linkHtml);
    var panels = [];

    // Optional collapsibles — nothing in the data uses these yet, but adding an
    // `abstractHtml` or `bibtex` field to an entry is enough to make them appear.
    var abs = toggleHtml(pub.id + "_abs", "Abstract", pub.abstractHtml, "abstract");
    if (abs) {
      links.push(abs.button);
      panels.push(abs.panel);
    }
    var bib = toggleHtml(
      pub.id + "_bib",
      "BibTeX",
      pub.bibtex ? "<pre>" + esc(pub.bibtex) + "</pre>" : "",
      "bibtex"
    );
    if (bib) {
      links.push(bib.button);
      panels.push(bib.panel);
    }

    var thumb = pub.thumbnail || {};
    var titleTag = href
      ? '<a class="pub-title" href="' + esc(href) + '"' + extra + ">" + esc(pub.title) + "</a>"
      : '<span class="pub-title">' + esc(pub.title) + "</span>";

    return [
      '<article class="row pub-row">',
      '  <div class="col-md-4">',
      '    <div class="paper-thumbnail">',
      href
        ? '      <a href="' + esc(href) + '"' + extra + ">"
        : "      <span>",
      '        <img loading="lazy" src="' + esc(thumb.src || "") + '" alt="' + esc(thumb.alt || pub.title) + '">',
      href ? "      </a>" : "      </span>",
      "    </div>",
      "  </div>",
      '  <div class="col-md-8">',
      '    <div class="paper-info">',
      "      " + titleTag,
      '      <p class="pub-authors">' + (pub.authorsHtml || "") + "</p>",
      pub.noteHtml ? '      <p class="pub-note">' + pub.noteHtml + "</p>" : "",
      '      <p class="pub-venue">' + (pub.venueHtml || "") + "</p>",
      links.length ? '      <p class="pub-links">' + links.join(" / ") + "</p>" : "",
      panels.join("\n"),
      "    </div>",
      "  </div>",
      "</article>",
    ]
      .filter(Boolean)
      .join("\n");
  }

  window.renderPublications = function (options) {
    var opts = options || {};
    var mount = document.getElementById(opts.mountId || "pub-list");
    if (!mount) return;

    var all = Array.isArray(window.PUBLICATIONS) ? window.PUBLICATIONS : [];
    var list = opts.onlySelected ? all.filter(function (p) { return p && p.selected; }) : all;

    mount.innerHTML = list.map(pubHtml).join("\n");

    mount.addEventListener("click", function (event) {
      var trigger = event.target.closest(".pub-toggle");
      if (!trigger) return;
      event.preventDefault();
      var panel = document.getElementById(trigger.getAttribute("data-target"));
      if (panel) panel.hidden = !panel.hidden;
    });
  };
})();
