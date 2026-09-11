// 固定ページ: network（地域との繋がり）専用JS
document.addEventListener('DOMContentLoaded', () => {
  // 会員一覧タブ切り替え
  document.querySelectorAll('#member-tabs .tab').forEach((tab) => {
    tab.addEventListener('click', () => {
      document
        .querySelectorAll('#member-tabs .tab')
        .forEach((t) => t.classList.remove('active'));
      tab.classList.add('active');
      const category = tab.dataset.category;
      document
        .querySelectorAll('#member-list .member-grid')
        .forEach((grid) => {
          grid.style.display =
            grid.dataset.category === category ? '' : 'none';
        });
    });
  });
  // 会員募集フォームタブ切り替え
  document
    .querySelectorAll('#join-tabs .member-tab-join')
    .forEach((tab) => {
      tab.addEventListener('click', () => {
        document
          .querySelectorAll('#join-tabs .member-tab-join')
          .forEach((t) => t.classList.remove('active'));
        tab.classList.add('active');
        const target = tab.dataset.target;
        document.querySelectorAll('.member-form-join').forEach((form) => {
          form.classList.toggle('active', form.id === target);
        });
      });
    });
});
