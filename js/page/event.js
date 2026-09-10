// data-cpt="event" archive（イベント一覧）: フィルタ＋ページネーション
document.addEventListener('DOMContentLoaded', () => {
  const grid = document.getElementById('eventGrid');
  if (!grid) return; // 詳細ページには存在しないため何もしない
  const PER_PAGE = 9; // 1ページあたりの表示件数
  const cards = Array.from(grid.querySelectorAll('.event-card'));
  const pagination = document.getElementById('eventPagination');
  let activeType = 'all';
  let activeCat = 'all';
  let activeTarget = 'all';
  let currentPage = 1;
  // data 属性はカンマ区切りの多値。「すべて」はどの絞り込みにもヒットさせる
  function matchesValue(raw, active) {
    if (active === 'all') return true;
    if (!raw) return false;
    const values = raw.split(',').map(v => v.trim());
    return values.includes('すべて') || values.includes(active);
  }
  function matchesFilter(card) {
    return matchesValue(card.dataset.type, activeType)
      && matchesValue(card.dataset.category, activeCat)
      && matchesValue(card.dataset.target, activeTarget);
  }
  // 表示するページ番号を組み立てる（多ページ時は前後1ページ＋先頭・末尾）
  function pageItems(totalPages) {
    if (totalPages <= 7) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }
    const items = [];
    let prev = 0;
    for (let i = 1; i <= totalPages; i++) {
      if (i === 1 || i === totalPages || Math.abs(i - currentPage) <= 1) {
        if (prev && i - prev > 1) items.push('…');
        items.push(i);
        prev = i;
      }
    }
    return items;
  }
  function renderPagination(totalPages) {
    pagination.innerHTML = '';
    // 1ページに収まる場合はページネーションを表示しない
    pagination.hidden = totalPages <= 1;
    if (pagination.hidden) return;
    const addNav = (label, srLabel, page, disabled) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'pagination__item' + (disabled ? ' pagination__item--disabled' : '');
      btn.textContent = label;
      btn.setAttribute('aria-label', srLabel);
      if (disabled) btn.disabled = true;
      else btn.addEventListener('click', () => goToPage(page));
      pagination.appendChild(btn);
    };
    addNav('‹', '前のページ', currentPage - 1, currentPage === 1);
    pageItems(totalPages).forEach(item => {
      if (item === '…') {
        const span = document.createElement('span');
        span.className = 'pagination__ellipsis';
        span.textContent = '…';
        pagination.appendChild(span);
        return;
      }
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'pagination__item' + (item === currentPage ? ' active' : '');
      btn.textContent = item;
      btn.setAttribute('aria-label', item + 'ページ目');
      if (item === currentPage) btn.setAttribute('aria-current', 'page');
      btn.addEventListener('click', () => goToPage(item));
      pagination.appendChild(btn);
    });
    addNav('›', '次のページ', currentPage + 1, currentPage === totalPages);
  }
  function render() {
    const matched = cards.filter(matchesFilter);
    const totalPages = Math.max(1, Math.ceil(matched.length / PER_PAGE));
    if (currentPage > totalPages) currentPage = totalPages;
    const start = (currentPage - 1) * PER_PAGE;
    const visible = matched.slice(start, start + PER_PAGE);
    cards.forEach(card => { card.style.display = 'none'; });
    visible.forEach(card => { card.style.display = ''; });
    renderPagination(totalPages);
  }
  function goToPage(page) {
    currentPage = page;
    render();
    grid.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  function filterCards() {
    currentPage = 1; // フィルタ変更時は1ページ目に戻す
    render();
  }
  document.querySelectorAll('[data-filter-type]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('[data-filter-type]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeType = btn.dataset.filterType;
      filterCards();
    });
  });
  document.querySelectorAll('[data-filter-cat]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('[data-filter-cat]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeCat = btn.dataset.filterCat;
      filterCards();
    });
  });
  document.querySelectorAll('[data-filter-target]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('[data-filter-target]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeTarget = btn.dataset.filterTarget;
      filterCards();
    });
  });
  render();
});
