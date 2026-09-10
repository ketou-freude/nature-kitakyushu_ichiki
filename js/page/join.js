// 会員タブ切り替え（aria-selected 同期）。現在のマークアップに .member-tab は無いが、
// 将来の拡張用に元モックのスクリプトをそのまま保持する。
(function () {
  var memberTabs = Array.from(document.querySelectorAll('.member-tab'));
  function activateTab(tab) {
    memberTabs.forEach(function (t) {
      t.classList.remove('active');
      t.setAttribute('aria-selected', 'false');
      t.setAttribute('tabindex', '-1');
    });
    document.querySelectorAll('.member-form').forEach(function (f) {
      f.classList.remove('active');
    });
    tab.classList.add('active');
    tab.setAttribute('aria-selected', 'true');
    tab.setAttribute('tabindex', '0');
    document.getElementById(tab.dataset.target).classList.add('active');
  }
  memberTabs.forEach(function (tab, i) {
    tab.setAttribute('tabindex', tab.classList.contains('active') ? '0' : '-1');
    tab.addEventListener('click', function () {
      activateTab(tab);
      tab.focus();
    });
    tab.addEventListener('keydown', function (e) {
      var next;
      if (e.key === 'ArrowRight') next = memberTabs[(i + 1) % memberTabs.length];
      else if (e.key === 'ArrowLeft') next = memberTabs[(i - 1 + memberTabs.length) % memberTabs.length];
      else if (e.key === 'Home') next = memberTabs[0];
      else if (e.key === 'End') next = memberTabs[memberTabs.length - 1];
      if (next) {
        e.preventDefault();
        activateTab(next);
        next.focus();
      }
    });
  });
})();
