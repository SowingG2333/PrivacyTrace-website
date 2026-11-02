(() => {
  'use strict';
  const config = window.PRIVACYTRACE_CONFIG || {};
  if (config.repository) {
    document.querySelectorAll('[data-repo]').forEach(link => { link.href = config.repository; });
    document.querySelectorAll('[data-doc]').forEach(link => {
      link.href = `${config.repository}/blob/main/${link.dataset.doc}`;
    });
  }
  if (config.dataset) {
    document.getElementById('dataset-link').href = config.dataset;
    document.querySelectorAll('[data-dataset]').forEach(link => { link.href = config.dataset; });
  }
  if (config.paper) {
    document.querySelectorAll('[data-paper]').forEach(link => { link.href = config.paper; });
  }
})();
