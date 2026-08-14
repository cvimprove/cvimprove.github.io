window.CVImproveJobMatcher = {
  overlap: function (resume, job) {
    var left = new Set((resume || '').toLowerCase().match(/[a-z]{4,}/g) || []);
    var right = new Set((job || '').toLowerCase().match(/[a-z]{4,}/g) || []);
    return Math.round((Array.from(left).filter(function (word) { return right.has(word); }).length / Math.max(right.size, 1)) * 100);
  }
};