(() => {
  const path = location.pathname;
  document.querySelectorAll('[data-nav]').forEach(a => {
    const target = a.getAttribute('href');
    if (target !== '/' && path.startsWith(target)) a.classList.add('active');
    if (target === '/' && path === '/') a.classList.add('active');
  });

  const updatesRoot = document.getElementById('recent-updates');
  if (!updatesRoot || !Array.isArray(window.PORTFOLIO_UPDATES)) return;

  const escapeHTML = (value = '') => String(value).replace(/[&<>'"]/g, ch => ({
    '&':'&amp;', '<':'&lt;', '>':'&gt;', "'":'&#39;', '"':'&quot;'
  })[ch]);

  updatesRoot.innerHTML = window.PORTFOLIO_UPDATES.slice(0, 3).map(update => {
    const tone = ['purple','yellow','orange','red'].includes(update.tone) ? update.tone : 'purple';
    const image = update.image ? `
      <div class="update-image"><img src="${escapeHTML(update.image)}" alt="" loading="lazy"></div>` : '';
    return `
      <a class="update-card tone-${tone}" href="${escapeHTML(update.href)}">
        ${image}
        <div class="update-body">
          <div class="update-meta"><span class="update-type">${escapeHTML(update.type)}</span><span class="update-date">${escapeHTML(update.date)}</span></div>
          <h3>${escapeHTML(update.title)}</h3>
          <p>${escapeHTML(update.summary)}</p>
          <div class="update-arrow">Open update →</div>
        </div>
      </a>`;
  }).join('');
})();
