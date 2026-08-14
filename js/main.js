(function () {
  'use strict';

  var page = document.body.dataset.page || 'home';
  var content = document.getElementById('page-content');
  var header = document.getElementById('site-header');
  var footer = document.getElementById('site-footer');

  function icon(name) {
    var icons = {
      arrow: '↗', check: '✓', search: '⌕', menu: '☰', close: '×',
      file: '▤', shield: '◈', target: '◎', sparkle: '✦', clock: '◷'
    };
    return icons[name] || '';
  }

  function button(label, href, kind) {
    return '<a class="btn btn-' + (kind || 'primary') + '" href="' + href + '">' + label + '</a>';
  }

  function renderHeader() {
    header.className = 'site-header';
    header.innerHTML = '<div class="container nav-row">' +
      '<a class="brand" href="index.html"><span class="brand-mark"><span>C</span></span><span>CV<span class="brand-accent">Improve</span></span></a>' +
      '<nav class="nav-links" aria-label="Main navigation">' +
      '<a href="analyze.html">Tools</a><a href="templates.html">Templates</a><a href="resume-tips.html">Career notes</a><a href="about.html">About</a></nav>' +
      '<a class="nav-cta" href="analyze.html">Try the toolkit ' + icon('arrow') + '</a>' +
      '<button class="menu-button" type="button" aria-expanded="false" aria-label="Open navigation">' + icon('menu') + '</button></div>' +
      '<div class="container mobile-nav"><a href="analyze.html">Tools</a><a href="templates.html">Templates</a><a href="resume-tips.html">Career notes</a><a href="about.html">About</a><a href="analyze.html">Try the toolkit ' + icon('arrow') + '</a></div>';
    var menuButton = header.querySelector('.menu-button');
    var mobileNav = header.querySelector('.mobile-nav');
    menuButton.addEventListener('click', function () {
      var open = mobileNav.classList.toggle('open');
      menuButton.setAttribute('aria-expanded', String(open));
      menuButton.innerHTML = open ? icon('close') : icon('menu');
    });
  }

  function renderFooter() {
    footer.className = 'footer';
    footer.innerHTML = '<div class="container footer-main">' +
      '<div><a class="brand" href="index.html"><span class="brand-mark"><span>C</span></span><span>CVImprove</span></a><p class="footer-copy">A clearer path from resume draft to interview-ready application.</p></div>' +
      '<div class="footer-col"><h3>Toolkit</h3><a href="analyze.html">Resume analyzer</a><a href="ats-checker.html">ATS checker</a><a href="job-match.html">Job matcher</a><a href="resume-builder.html">Resume builder</a></div>' +
      '<div class="footer-col"><h3>Learn</h3><a href="templates.html">Templates</a><a href="resume-tips.html">Resume tips</a><a href="blog.html">Field notes</a><a href="faq.html">FAQ</a></div>' +
      '<div class="footer-col"><h3>Company</h3><a href="about.html">About</a><a href="contact.html">Contact</a><a href="privacy-policy.html">Privacy</a><a href="terms.html">Terms</a></div></div>' +
      '<div class="container footer-bottom"><span>© 2026 CVImprove. Made for thoughtful applications.</span><span>Not career advice. A practical second pair of eyes.</span></div>';
  }

  function home() {
    return '<section class="hero"><div class="container hero-grid"><div class="fade-in"><div class="eyebrow rule-label">Career clarity, one edit at a time</div><h1 class="display text-balance">Your next chapter deserves a <em>clearer</em> first page.</h1><p class="hero-copy">CVImprove helps you turn experience into evidence — then shape it into an application that sounds like you, only sharper.</p><div class="hero-actions">' + button('Start with your resume ' + icon('arrow'), 'analyze.html') + '<a class="btn btn-text" href="templates.html">Browse templates ' + icon('arrow') + '</a></div><div class="audience"><div class="avatar-stack"><span class="avatar">LM</span><span class="avatar">AR</span><span class="avatar">JK</span></div><span>Built for the thoughtful job search</span></div></div>' + heroArt() + '</div></section>' +
      '<section class="section container"><div class="section-heading"><div class="eyebrow">A toolkit with a point of view</div><h2 class="display">Less polishing. More proof.</h2><p>The strongest resume is not the one with the most impressive words. It is the one that makes your contribution impossible to miss.</p></div><div class="tool-grid">' + toolCard('mint', icon('search'), 'Resume analyzer', 'Turn a dense draft into a clear, evidence-led story recruiters can follow.', 'analyze.html', 'Analyze a resume') + toolCard('coral', icon('shield'), 'ATS checker', 'See what parsing software sees — and fix the quiet blockers before you apply.', 'ats-checker.html', 'Run an ATS check') + toolCard('sand', icon('target'), 'Job matcher', 'Compare your proof to a real job description, without keyword stuffing.', 'job-match.html', 'Match a job') + '</div></section>' +
      '<section class="method"><div class="container method-grid section"><div><div class="eyebrow">The CVImprove method</div><h2 class="display">Make the good work easier to see.</h2><p>We bring structure to the parts of a job search that usually feel subjective: what to keep, what to prove, and what to say next.</p>' + button('How we think ' + icon('arrow'), 'about.html', 'outline') + '</div><div class="steps">' + step('01', 'Name the signal', 'Find the moments where your judgment, effort, or outcome changed something.') + step('02', 'Shape the story', 'Give each experience a through-line a busy reader can understand quickly.') + step('03', 'Make the ask', 'Connect your proof to the role so the next conversation feels obvious.') + '</div></div></section>' +
      '<section class="section container"><div class="notes-head"><div class="section-heading"><div class="eyebrow">Field notes</div><h2 class="display">Small edits. Noticeable shift.</h2><p>Practical guidance for the moments when your application is almost there.</p></div><a class="btn btn-text" href="blog.html">Read all field notes ' + icon('arrow') + '</a></div><div class="notes-grid">' + noteCard('01', 'Resume strategy', 'The bullet point test: can a stranger see your contribution?', 'blog.html') + noteCard('02', 'Interview prep', 'Build a story bank before the interview is on your calendar.', 'resume-tips.html') + noteCard('03', 'ATS, demystified', 'What applicant tracking systems actually notice.', 'ats-checker.html') + '</div></section>' +
      '<section class="container section" style="padding-top:0"><div class="cta"><div class="cta-content"><div class="eyebrow">One good next step</div><h2 class="display">Ready to make your experience legible?</h2><p>Bring the draft. We will help you find the through-line.</p>' + button('Open the analyzer ' + icon('arrow'), 'analyze.html', 'outline') + '</div></div></section>';
  }

  function heroArt() {
    return '<div class="hero-art fade-in delay-2"><div class="resume-card"><div class="resume-top"><span><span style="color:var(--coral)">●</span> YOUR RESUME / v2</span><span>JUST NOW</span></div><div class="resume-grid"><div><div class="skeleton strong"></div><div class="skeleton medium"></div><div class="skeleton-block"><div class="skeleton long"></div><div class="skeleton long"></div><div class="skeleton short"></div></div><div class="skeleton-block"><div class="skeleton long"></div><div class="skeleton medium"></div></div></div><div class="score-card"><div class="score-top"><span>Clarity score</span><strong>78</strong></div><div class="score-ring">B+</div><p>Good bones. Your impact is hiding in three places.</p><div class="score-note">' + icon('sparkle') + ' 4 useful edits</div></div></div></div><div class="signal-card drift"><div class="signal-title"><span class="signal-dot">' + icon('check') + '</span> Stronger signal</div><p>“Managed a team” → “Grew a team from 4 to 11.”</p></div></div>';
  }

  function toolCard(tone, toolIcon, title, text, href, label) {
    return '<a class="tool-card ' + tone + '" href="' + href + '"><div><div class="tool-card-top"><span class="tool-icon">' + toolIcon + '</span><span class="arrow">' + icon('arrow') + '</span></div><h3 class="display">' + title + '</h3><p>' + text + '</p></div><span class="card-link">' + label + ' ' + icon('arrow') + '</span></a>';
  }

  function step(num, title, text) {
    return '<div class="step"><span class="step-num">' + num + '</span><div><h3 class="display">' + title + '</h3><p>' + text + '</p></div></div>';
  }

  function noteCard(num, category, title, href) {
    return '<article class="note-card"><div class="note-meta"><span>' + num + ' · ' + category + '</span><span>Read note</span></div><h3 class="display">' + title + '</h3><a class="card-link" href="' + href + '">Read the note ' + icon('arrow') + '</a></article>';
  }

  function toolPage(type) {
    var config = {
      analyze: ['Resume analyzer', 'A second pair of eyes for your resume.', 'Upload your draft or paste the text below. We will help you see the story, the gaps, and the edits with the highest return.', icon('search'), 'Analyze my resume'],
      ats: ['ATS checker', 'Know what gets through before you send it.', 'A clean resume is not the same as a parsable one. Check the quiet technical details that can keep good work out of a recruiter’s view.', icon('shield'), 'Check my resume'],
      match: ['Job matcher', 'Connect your proof to the role.', 'Paste a job description and your resume. Get a grounded view of where you are a clear match — and where to add context.', icon('target'), 'Match my application']
    }[type];
    var secondLabel = type === 'match' ? 'Job description' : 'Your readout';
    return '<div class="page"><div class="container page-grid"><div class="fade-in"><div class="eyebrow">' + config[0] + '</div><h1 class="display">' + config[1] + '</h1><p class="page-intro">' + config[2] + '</p><div class="check-list"><div><strong>' + icon('check') + '</strong><span>Specific guidance, not a mysterious score.</span></div><div><strong>' + icon('check') + '</strong><span>Your information stays in this demo.</span></div><div><strong>' + icon('check') + '</strong><span>A next step you can actually take.</span></div></div></div>' +
      '<div class="workspace fade-in delay-1" data-tool="' + type + '"><div class="workspace-head"><div class="workspace-id"><span class="workspace-icon">' + config[3] + '</span><div><div class="workspace-label">CVImprove workspace</div><div class="workspace-status">Demo mode</div></div></div><span class="workspace-step">Step <span data-step-label>1</span> of ' + (type === 'match' ? '3' : '2') + '</span></div><div class="progress"><div class="progress-item active"><span class="progress-number">1</span><span>Your resume</span></div><div class="progress-item"><span class="progress-number">2</span><span>' + secondLabel + '</span></div>' + (type === 'match' ? '<div class="progress-item"><span class="progress-number">3</span><span>Your match</span></div>' : '') + '</div><div class="tool-stage"><label class="form-label" for="resume-input">Add your resume</label><div class="dropzone"><div><div style="font-size:1.5rem;color:var(--coral);margin-bottom:8px">' + icon('file') + '</div><strong>Drop a PDF here, or paste your text</strong><span>PDF, DOCX, or plain text · demo only</span></div></div><textarea id="resume-input" class="field textarea" placeholder="Or paste your resume text here…"></textarea><div class="form-actions"><span></span><button class="btn btn-primary" type="button" data-next>' + config[4] + ' ' + icon('arrow') + '</button></div></div></div></div></div>';
  }

  function builder() {
    return '<div class="page"><div class="container"><div class="builder-head"><div><div class="eyebrow">Resume builder</div><h1 class="display">Build from the proof up.</h1><p class="page-intro">A quiet workspace for turning your raw experience into a resume with a point of view.</p></div><span class="save-state"><span class="save-dot"></span> Saved locally just now</span></div><div class="builder-grid"><aside class="builder-nav"><div class="builder-nav-label">Your resume</div>' + ['Basics', 'Summary', 'Experience', 'Education', 'Skills'].map(function (x, i) { return '<button class="builder-tab ' + (i === 2 ? 'active' : '') + '" type="button" data-builder-tab="' + x.toLowerCase() + '">' + x + '<span>' + (i === 2 ? '›' : '') + '</span></button>'; }).join('') + '<div class="builder-score">Clarity score<div class="score-bar"><span></span></div></div></aside><section class="builder-form"><div class="builder-form-head"><div><div class="eyebrow">Experience</div><h2 class="display">Tell the useful version.</h2></div><button class="btn btn-text" type="button" data-save>Save draft</button></div><div class="builder-input"><label for="role">Role</label><input id="role" class="field" value="Product designer" /></div><div class="builder-input"><label for="company">Company</label><input id="company" class="field" value="Northstar Studio" /></div><div class="builder-input"><label for="impact">What changed because of your work?</label><textarea id="impact" class="field">Redesigned the onboarding journey and reduced time-to-value by 31%.</textarea></div><div class="form-actions"><span></span><button class="btn btn-primary" type="button" data-save>Save & continue ' + icon('arrow') + '</button></div></section><aside class="preview"><div class="preview-head"><span>Live preview</span><span>' + icon('file') + '</span></div><div class="paper-preview"><div class="paper-line title"></div><div class="paper-line short"></div><div class="paper-line section"></div><div class="paper-line"></div><div class="paper-line short"></div><div class="paper-line"></div><div class="paper-line section"></div><div class="paper-line"></div><div class="paper-line short"></div></div></aside></div></div></div>';
  }

  function templates() {
    return '<div class="page"><div class="container"><div class="templates-head"><div><div class="eyebrow">Resume templates</div><h1 class="display">A good frame for good work.</h1><p class="page-intro">Choose a structure that lets your experience do the talking. Every template is built to be readable, adaptable, and unmistakably yours.</p></div><div class="filter-row" aria-label="Template filters">' + ['All', 'Editorial', 'Classic', 'Minimal', 'Bold'].map(function (x, i) { return '<button class="filter ' + (i === 0 ? 'active' : '') + '" type="button" data-filter="' + x + '">' + x + '</button>'; }).join('') + '</div></div><div class="template-grid">' + templateCard('Editorial', 'The Clear Signal', 'A strong hierarchy for people whose work crosses disciplines.', 'mint') + templateCard('Classic', 'The Quiet Operator', 'Space, restraint, and a confident focus on outcomes.', 'coral') + templateCard('Minimal', 'The Field Note', 'A clean one-page format for a focused next move.', 'sand') + templateCard('Bold', 'The Proof Point', 'A little more energy for work with a visible edge.', 'blue') + '</div></div></div>';
  }

  function templateCard(type, name, text, tone) {
    return '<article class="template-card" data-template-type="' + type + '"><div class="template-sheet ' + tone + '"><div class="mini-paper"><div class="paper-line title"></div><div class="paper-line short"></div><div class="paper-line section"></div><div class="paper-line"></div><div class="paper-line short"></div><div class="paper-line"></div><div class="paper-line section"></div><div class="paper-line short"></div></div><button class="btn btn-primary template-hover" type="button" data-preview="' + name + '">Preview</button></div><div class="template-info"><div><h3 class="display">' + name + '</h3><p>' + text + '</p></div><span class="template-type">' + type + '</span></div></article>';
  }

  var articles = [
    ['Resume strategy', 'Start with the evidence, not the job title.', 'The fastest way to improve a resume is to collect the moments that changed an outcome.', '6 min read'],
    ['Interview prep', 'Build a story bank before you need one.', 'Five stories can carry you through most of a first-round conversation.', '4 min read'],
    ['Clarity', 'The difference between responsibility and contribution.', 'A useful edit turns a list of duties into a reason to keep reading.', '5 min read'],
    ['Job search', 'When a job description feels too broad.', 'Look for the verbs. They tell you what the team is really buying.', '7 min read']
  ];

  function notes(isBlog) {
    return '<div class="page"><div class="container"><div class="notes-head"><div class="section-heading"><div class="eyebrow">' + (isBlog ? 'CVImprove field notes' : 'Resume tips') + '</div><h1 class="display">' + (isBlog ? 'The thinking behind a stronger application.' : 'Useful advice for the in-between moments.') + '</h1><p>' + (isBlog ? 'No hacks. Just clear observations about work, language, and the choices that make an application feel honest.' : 'Short, practical guidance for the parts of a job search no one puts in the job description.') + '</p></div><input class="search" type="search" placeholder="Search notes" aria-label="Search notes" data-note-search /></div><div class="articles" data-articles>' + articles.map(function (a, i) { return '<article class="article ' + (i === 0 ? 'featured' : '') + '" data-article="' + (a[0] + ' ' + a[1]).toLowerCase() + '"><div class="note-meta"><span>' + a[0] + '</span><span>' + a[3] + '</span></div><h2 class="display">' + a[1] + '</h2><p>' + a[2] + '</p><button class="btn btn-text" type="button" data-note>Read the note ' + icon('arrow') + '</button></article>'; }).join('') + '</div><div class="empty" data-empty style="display:none"><h2 class="display">No note by that name.</h2><p>Try a broader search, or browse everything above.</p></div></div></div>';
  }

  function faq() {
    var data = [
      ['Is CVImprove a resume writing service?', 'No. It is a guided toolkit and a thoughtful second pair of eyes. You stay the author; CVImprove helps you make decisions with more confidence.'],
      ['Will the analyzer rewrite my resume for me?', 'It suggests focused edits and explains why they matter. We believe a resume should sound like its owner, not a generic writing model.'],
      ['What is an ATS, really?', 'An applicant tracking system is software companies use to organize applications. It parses structure and language before a person reads your resume.'],
      ['Can I use CVImprove for a career change?', 'Absolutely. Start with the job matcher to find transferable proof, then use the builder to make your new direction legible.'],
      ['Is my information stored?', 'This presentation demo does not send anything anywhere. In a full product, we would be direct about storage, retention, and deletion.']
    ];
    return '<div class="page"><div class="container"><div class="section-heading"><div class="eyebrow">Frequently asked</div><h1 class="display">Good questions deserve straight answers.</h1><p>A few things people ask before they trust a tool with their work.</p></div><div class="faq-list">' + data.map(function (x, i) { return '<div class="faq-item"><button class="faq-question ' + (i === 0 ? 'open' : '') + '" type="button" data-faq><span>' + x[0] + '</span><span>+</span></button><div class="faq-answer" ' + (i ? 'hidden' : '') + '>' + x[1] + '</div></div>'; }).join('') + '</div></div></div>';
  }

  function about() {
    return '<section class="about-hero"><div class="container"><div class="eyebrow">About CVImprove</div><h1 class="display">A job search is easier when your work has a through-line.</h1><p>CVImprove exists for the capable people who know they have something to offer — but keep getting stuck explaining it on one page.</p></div></section><section class="dark-band"><div class="container dark-grid"><div><div class="eyebrow" style="color:#efb29d">Our point of view</div><h2 class="display">Clarity is not a personality trait. It is a practice.</h2></div><div><p>Most career tools ask you to perform certainty. We would rather help you earn it — by looking closely at what you did, what changed, and what you want to do next.</p><p>That means fewer inflated adjectives and more useful questions. Less optimization theater. More evidence that feels true when you say it out loud.</p><p><strong>You do not need a new identity. You need a clearer edit.</strong></p></div></div></section><section class="container about-columns"><div class="section-heading"><div class="eyebrow">The standard</div><h2 class="display">Useful over impressive.</h2><p>Every recommendation should earn its place: clear enough to act on, grounded enough to trust, and flexible enough to sound like you.</p></div><div class="about-note"><div class="eyebrow">A note from us</div><p>Your experience is already the raw material. We help with the edit.</p></div></section>';
  }

  function contact() {
    return '<div class="page"><div class="container contact-grid"><div><div class="eyebrow">Contact</div><h1 class="display">Have a thoughtful question?</h1><p class="page-intro">Tell us where you are in the process. We read every note, even if the answer is simply “start with the evidence.”</p><div class="contact-details"><div><strong>' + icon('search') + '</strong> hello@cvimprove.co</div><div><strong>' + icon('clock') + '</strong> Usually replies within 2 business days</div></div></div><div id="contact-area"><form class="contact-form" data-contact-form><label for="email">Your email<input id="email" type="email" required placeholder="you@example.com" /></label><label for="message">What is on your mind?<textarea id="message" required placeholder="A question, an idea, a stuck point…"></textarea></label><button class="btn btn-primary" type="submit">Send your note ' + icon('arrow') + '</button></form></div></div></div>';
  }

  function legal(kind) {
    var titles = { privacy: ['Privacy policy', 'How we handle the information you choose to share.'], terms: ['Terms of use', 'The straightforward version of the agreement between us.'], cookies: ['Cookie policy', 'A clear note about the small files websites use.'], disclaimer: ['Disclaimer', 'What CVImprove can do — and what it cannot promise.'] };
    var title = titles[kind][0], intro = titles[kind][1];
    return '<div class="page"><div class="container legal-copy"><div class="eyebrow">CVImprove / ' + kind + '</div><h1 class="display">' + title + '</h1><p>' + intro + '</p><div class="legal-sections">' + legalBlock('The short version', 'Use CVImprove as a practical tool, not a substitute for your own judgment. We will be clear about what a feature does and does not do.') + legalBlock('What you can expect', 'We aim for useful, specific guidance. Examples in the product are examples, not guarantees of a job, interview, or outcome. Your work and decisions remain yours.') + legalBlock('Questions', 'If something here feels unclear, please contact us. We would rather answer a direct question than hide behind dense language.') + '<div class="last-updated">Last updated: August 14, 2026</div></div></div></div>';
  }

  function legalBlock(title, text) { return '<section><h2 class="display">' + title + '</h2><p>' + text + '</p></section>'; }

  function bindInteractions() {
    document.querySelectorAll('[data-next]').forEach(function (buttonEl) {
      buttonEl.addEventListener('click', function () {
        var workspace = buttonEl.closest('.workspace'), stage = workspace.querySelector('.tool-stage'), type = workspace.dataset.tool;
        var textarea = workspace.querySelector('textarea');
        if (!workspace.dataset.step || workspace.dataset.step === '1') {
          workspace.dataset.step = '2';
          workspace.querySelector('[data-step-label]').textContent = '2';
          workspace.querySelectorAll('.progress-item')[1].classList.add('active');
          if (type === 'match') {
            stage.innerHTML = '<label class="form-label" for="job-input">Paste the job description</label><textarea id="job-input" class="field textarea" placeholder="Paste the role, responsibilities, and requirements here…"></textarea><div class="form-actions"><button class="btn btn-text" type="button" data-back>Back</button><button class="btn btn-primary" type="button" data-match-result>See my match ' + icon('arrow') + '</button></div>';
          } else {
            stage.innerHTML = '<div class="result"><div class="result-badge">' + icon('check') + '</div><h3 class="display">' + (type === 'ats' ? 'Your resume is ready to parse.' : 'You have a useful starting point.') + '</h3><p>This demo readout is intentionally focused: three changes that create more signal, plus one thing to leave alone.</p><div class="result-list"><div><span>' + icon('sparkle') + '</span>Lead with the outcome, not the activity.</div><div><span>' + icon('sparkle') + '</span>Keep the language that sounds like you.</div><div><span>' + icon('sparkle') + '</span>Make the most relevant evidence easier to find.</div></div><button class="btn btn-outline" type="button" data-reset>Start over</button></div>';
          }
          bindInteractions();
        }
      });
    });
    document.querySelectorAll('[data-back]').forEach(function (el) { el.addEventListener('click', function () { window.location.reload(); }); });
    document.querySelectorAll('[data-match-result]').forEach(function (el) { el.addEventListener('click', function () { var workspace = el.closest('.workspace'); workspace.dataset.step = '3'; workspace.querySelector('[data-step-label]').textContent = '3'; workspace.querySelectorAll('.progress-item')[2].classList.add('active'); workspace.querySelector('.tool-stage').innerHTML = '<div class="result"><div class="result-badge" style="border-radius:50%;background:transparent;border:8px solid var(--coral);color:var(--teal)">81</div><h3 class="display">A promising match.</h3><p>Your clearest proof is already here. Use it earlier in the application.</p><div class="result-list"><div><span>' + icon('check') + '</span>Ownership of cross-functional delivery <small>STRONG</small></div><div><span>' + icon('check') + '</span>Experience with customer research <small>GOOD</small></div><div><span>' + icon('check') + '</span>Evidence of measurable outcomes <small>GOOD</small></div></div><button class="btn btn-outline" type="button" data-reset>Get my edit list</button></div>'; bindInteractions(); }); });
    document.querySelectorAll('[data-reset]').forEach(function (el) { el.addEventListener('click', function () { window.location.reload(); }); });
    document.querySelectorAll('[data-save]').forEach(function (el) { el.addEventListener('click', function () { var state = document.querySelector('.save-state'); if (state) state.innerHTML = '<span class="save-dot"></span> Saved just now'; el.textContent = 'Saved'; }); });
    document.querySelectorAll('[data-builder-tab]').forEach(function (el) { el.addEventListener('click', function () { document.querySelectorAll('[data-builder-tab]').forEach(function (tab) { tab.classList.remove('active'); }); el.classList.add('active'); var label = document.querySelector('.builder-form .eyebrow'); if (label) label.textContent = el.dataset.builderTab; }); });
    document.querySelectorAll('[data-filter]').forEach(function (filter) { filter.addEventListener('click', function () { document.querySelectorAll('[data-filter]').forEach(function (x) { x.classList.remove('active'); }); filter.classList.add('active'); document.querySelectorAll('[data-template-type]').forEach(function (card) { card.style.display = filter.dataset.filter === 'All' || card.dataset.templateType === filter.dataset.filter ? '' : 'none'; }); }); });
    document.querySelectorAll('[data-preview]').forEach(function (el) { el.addEventListener('click', function () { var modal = document.createElement('div'); modal.className = 'modal-backdrop'; modal.innerHTML = '<div class="modal" role="dialog" aria-modal="true"><div class="modal-head"><div><div class="eyebrow">Template preview</div><h2 class="display" style="font-size:2.2rem;margin:9px 0 0">' + el.dataset.preview + '</h2></div><button class="close" type="button" aria-label="Close">' + icon('close') + '</button></div><div class="modal-preview"><div class="mini-paper"><div class="paper-line title"></div><div class="paper-line section"></div><div class="paper-line"></div><div class="paper-line short"></div><div class="paper-line"></div></div></div>' + button('Use this template ' + icon('arrow'), 'resume-builder.html') + '</div>'; document.body.appendChild(modal); modal.querySelector('.close').addEventListener('click', function () { modal.remove(); }); modal.addEventListener('click', function (event) { if (event.target === modal) modal.remove(); }); }); });
    var search = document.querySelector('[data-note-search]');
    if (search) search.addEventListener('input', function () { var query = search.value.toLowerCase(); var count = 0; document.querySelectorAll('[data-article]').forEach(function (article) { var show = article.dataset.article.indexOf(query) !== -1; article.style.display = show ? '' : 'none'; if (show) count += 1; }); var empty = document.querySelector('[data-empty]'); if (empty) empty.style.display = count ? 'none' : 'block'; });
    document.querySelectorAll('[data-faq]').forEach(function (question) { question.addEventListener('click', function () { var answer = question.parentElement.querySelector('.faq-answer'); var open = !answer.hidden; document.querySelectorAll('.faq-answer').forEach(function (x) { x.hidden = true; }); document.querySelectorAll('[data-faq]').forEach(function (x) { x.classList.remove('open'); }); if (!open) { answer.hidden = false; question.classList.add('open'); } }); });
    var contactForm = document.querySelector('[data-contact-form]');
    if (contactForm) contactForm.addEventListener('submit', function (event) { event.preventDefault(); document.getElementById('contact-area').innerHTML = '<div class="success"><div class="success-badge">' + icon('check') + '</div><h2 class="display" style="margin:22px 0 10px;font-size:2.5rem">Note received.</h2><p class="text-muted">Thanks for taking the time to write. We will be in touch soon.</p></div>'; });
  }

  renderHeader();
  renderFooter();
  content.innerHTML = page === 'home' ? home() : page === 'analyze' ? toolPage('analyze') : page === 'ats' ? toolPage('ats') : page === 'match' ? toolPage('match') : page === 'builder' ? builder() : page === 'templates' ? templates() : page === 'tips' ? notes(false) : page === 'blog' ? notes(true) : page === 'faq' ? faq() : page === 'about' ? about() : page === 'contact' ? contact() : legal(page);
  bindInteractions();
})();