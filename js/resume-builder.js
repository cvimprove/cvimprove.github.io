window.CVImproveBuilder = {
  save: function (data) { try { localStorage.setItem('cvimprove-draft', JSON.stringify(data || {})); } catch (error) {} },
  load: function () { try { return JSON.parse(localStorage.getItem('cvimprove-draft') || '{}'); } catch (error) { return {}; } }
};