window.CVImproveBlog = {
  readingTime: function (text) { return Math.max(1, Math.ceil((text || '').split(/\s+/).length / 200)); }
};