/* Optional extension point for the hosted analyzer. The static demo keeps
   all input local and leaves the source easy to replace with a real service. */
window.CVImproveAnalyzer = {
  countWords: function (text) { return (text || '').trim().split(/\s+/).filter(Boolean).length; },
  hasEvidence: function (text) { return /\b(increased|reduced|grew|built|led|saved|launched)\b/i.test(text || ''); }
};