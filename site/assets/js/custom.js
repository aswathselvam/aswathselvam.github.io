// YouTube: load the player only when the thumbnail is clicked
document.addEventListener('click', function (e) {
  var btn = e.target.closest('.yt-lite');
  if (!btn) return;
  var f = document.createElement('iframe');
  f.src = 'https://www.youtube-nocookie.com/embed/' + btn.dataset.yt + '?autoplay=1&mute=1&loop=1&playlist=' + btn.dataset.yt;
  f.allow = 'autoplay; encrypted-media; picture-in-picture; fullscreen';
  f.allowFullscreen = true;
  f.title = btn.getAttribute('aria-label');
  // YouTube hides its own fullscreen button in small players, so add one
  var fs = document.createElement('button');
  fs.type = 'button';
  fs.className = 'yt-fs';
  fs.setAttribute('aria-label', 'Full screen');
  fs.title = 'Full screen';
  fs.dataset.yt = btn.dataset.yt;
  var parent = btn.parentNode;
  if (getComputedStyle(parent).position === 'static') parent.style.position = 'relative';
  btn.replaceWith(f);
  f.after(fs);
});

document.addEventListener('click', function (e) {
  var fs = e.target.closest('.yt-fs');
  if (!fs) return;
  var f = fs.previousElementSibling;
  var req = f && (f.requestFullscreen || f.webkitRequestFullscreen);
  if (req) req.call(f);
  else window.open('https://www.youtube.com/watch?v=' + fs.dataset.yt, '_blank', 'noopener');
});


// Blog: show an image's title (set in the editor) as a caption under it
document.querySelectorAll('.page__content img[title]').forEach(function (img) {
  if (img.closest('figure')) return;
  var fig = document.createElement('figure');
  fig.className = 'blog-figure';
  var cap = document.createElement('figcaption');
  cap.textContent = img.title;
  // keep a link around the image (if any), but put the caption outside it
  var media = img.parentElement.tagName === 'A' ? img.parentElement : img;
  var para = media.parentElement;
  if (para.tagName === 'P') {
    // place the figure after the paragraph so it isn't inline with the text
    para.after(fig);
    if (!para.textContent.trim() && para.children.length === 1) para.remove();
  } else {
    media.before(fig);
  }
  fig.appendChild(media);
  fig.appendChild(cap);
});

function loadScript(src, onload) {
  var s = document.createElement('script');
  s.src = src;
  s.async = true;
  if (onload) s.onload = onload;
  document.head.appendChild(s);
}

// Math (MathJax): loaded only on pages that contain math.
// Write $$ x^2 $$ inside a sentence for inline math, or on its own line for a centered equation.
(function () {
  var main = document.getElementById('main');
  if (!main || !/\$\$|\\\(|\\\[/.test(main.textContent)) return;
  window.MathJax = {
    tex: { inlineMath: [['\\(', '\\)']], displayMath: [['$$', '$$'], ['\\[', '\\]']] },
    options: { skipHtmlTags: ['script', 'noscript', 'style', 'textarea', 'pre', 'code'] }
  };
  loadScript('https://cdn.jsdelivr.net/npm/mathjax@4.1.3/tex-mml-chtml.js');
})();

// Interactive math (JSXGraph): a ```jsxgraph code block becomes a live board.
// The code gets a ready-made `board` (x and y from -5 to 5, with axes) and `JXG`.
// Change the view with: board.setBoundingBox([xmin, ymax, xmax, ymin]);
(function () {
  var blocks = document.querySelectorAll('pre > code.language-jsxgraph');
  if (!blocks.length) return;
  var css = document.createElement('link');
  css.rel = 'stylesheet';
  css.href = 'https://cdn.jsdelivr.net/npm/jsxgraph@1.14.2/distrib/jsxgraph.css';
  document.head.appendChild(css);
  loadScript('https://cdn.jsdelivr.net/npm/jsxgraph@1.14.2/distrib/jsxgraphcore.js', function () {
    blocks.forEach(function (code, i) {
      var pre = code.parentElement;
      var wrapper = pre.closest('div.highlighter-rouge') || pre;
      var box = document.createElement('div');
      box.id = 'jxgbox-' + i;
      box.className = 'jxgbox interactive-graph';
      wrapper.replaceWith(box);
      var board = JXG.JSXGraph.initBoard(box.id, {
        boundingbox: [-5, 5, 5, -5], axis: true, keepaspectratio: false,
        showCopyright: false, showNavigation: true
      });
      try {
        new Function('board', 'JXG', code.textContent)(board, JXG);
      } catch (err) {
        box.insertAdjacentHTML('afterend', '<p class="interactive-graph__error">Graph error: ' +
          err.message.replace(/</g, '&lt;') + '</p>');
      }
    });
  });
})();
