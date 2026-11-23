/* AI Drug Ledger: draws data/ledger.json. Every figure is computed in ledger/build.py. */
(function () {
  "use strict";
  var T = {
    en: {
      title: "AI Drug Ledger", subtitle: "Drugs from AI-native companies in human trials: what started, what moved, what stopped. Outcomes, not announcements.",
      loading: "Loading…", failed: "Could not load data/ledger.json.",
      tabs: { overview: "Overview", trials: "Trials", stopped: "Stopped", readouts: "Next readouts", changes: "Changes", longevity: "Longevity", reading: "Reading", method: "Method" },
      trials: "Trials on the ledger", sponsors: "Companies", core: "From AI-native sponsors", stoppedN: "Stopped early", results: "With results posted", p3: "Phase 3 or 2/3 (AI-native)", new90: "Registered in the last 90 days",
      verdictH: "Does AI change the odds? Unproven.", verdictP: "{n} of the {t} completed randomised Phase 2 trials needed before a matched comparison means anything. A completed trial is not a successful one: the registry does not say whether a trial met its endpoint.",
      phaseH: "Trials by phase (AI-native sponsors)", phase: "Phase", active: "Active", completed: "Completed", stopped: "Stopped", unknown: "Unknown", total: "Total",
      sponsorsH: "Companies", company: "Company", basis: "Basis", furthest: "Furthest phase", ai: "AI-native", computational: "Computational, AI label contested",
      all: "All", allPhases: "All phases", allStatus: "All statuses", allCompanies: "All companies", search: "Search drug or condition",
      trial: "Trial", drug: "Drug", condition: "Condition", status: "Status", updated: "Updated", why: "Reason given", readout: "Primary completion", n: "Enrolled",
      stoppedNote: "Terminated, withdrawn or suspended trials, with the reason the sponsor gave the registry. Failures rarely get a press release; this is where they show.",
      readoutNote: "Active Phase 2 and Phase 3 trials by the date their main result is due. Dates are the sponsors' own estimates and often slip.",
      changesNote: "Changes detected between daily snapshots of the registry since {d}. Down moves are logged the same way as up moves.", noChanges: "No changes recorded yet. The log starts from the first snapshot.",
      date: "Date", change: "Change",
      ev: { registered: "New trial registered", status: "Status", phase: "Phase", results_posted: "Results posted", date_moved: "Result date moved" },
      longNote: "Ageing has no approved indication and no accepted endpoint, so real events are rare. These are the milestones worth checking a few times a year.", now: "Where it stands", signal: "What would count", asOf: "as of", source: "Source",
      st: { none: "Does not exist", in_progress: "In progress", stalled: "Stalled", failed: "Failed" },
      readNote: "The short list to follow. Latest headlines are refreshed with the ledger; news sources are filtered to AI and ageing.", noFeed: "No feed: open the site.",
      methodH: "What is counted", methodP: [
        "A trial is on the ledger when it is an interventional drug or biologic trial on ClinicalTrials.gov and its lead sponsor is a company on the list, or it tests a listed asset that such a company discovered and another sponsor now runs.",
        "\"AI-discovered\" is judged by company, not by molecule: a company is AI-native when it describes its discovery platform as AI or machine learning. Companies whose platform is physics-based or structure-based computation are listed separately as contested and kept out of the headline counts. The split is an editorial judgement and should be reviewed company by company.",
        "Not captured: AI-origin drugs licensed to large pharma and not on the asset list, trials registered only outside ClinicalTrials.gov (many Chinese trials), and whether a completed trial succeeded."],
      rubricH: "Grading a single claim", rubricP: "Score each 0 to 2. Below 6 of 14, treat it as hype.",
      rubric: ["Evidence level: lab or animal, uncontrolled human, randomised human.", "Endpoint: biomarker, surrogate, clinical outcome.", "Size and pre-registration.", "Independence: company release, peer-reviewed, replicated by others.", "Comparator: none, placebo, standard of care.", "The target has human genetic support.", "The AI contribution is specific and checkable, and negative data are disclosed."],
      footer: "Descriptive only; not medical or investment advice. Trial data: ClinicalTrials.gov.", generated: "Data generated {d}"
    },
    zh: {
      title: "AI 新药台账", subtitle: "AI 原生公司进入人体试验的药物：哪些启动了，哪些推进了，哪些停了。只记结果，不记公告。",
      loading: "加载中…", failed: "无法加载 data/ledger.json。",
      tabs: { overview: "概览", trials: "试验", stopped: "已终止", readouts: "即将读出", changes: "变动", longevity: "长寿", reading: "阅读", method: "方法" },
      trials: "台账内试验", sponsors: "公司", core: "来自 AI 原生公司", stoppedN: "提前终止", results: "已公布结果", p3: "三期或二/三期（AI 原生）", new90: "近 90 天新登记",
      verdictH: "AI 是否改变了成功率？尚无定论。", verdictP: "做匹配比较至少需要 {t} 项已完成的随机二期试验，目前只有 {n} 项。“已完成”不等于“成功”：登记库不记录试验是否达到终点。",
      phaseH: "各期试验数（AI 原生公司）", phase: "分期", active: "进行中", completed: "已完成", stopped: "已终止", unknown: "不详", total: "合计",
      sponsorsH: "公司", company: "公司", basis: "依据", furthest: "最远分期", ai: "AI 原生", computational: "计算驱动，AI 标签有争议",
      all: "全部", allPhases: "全部分期", allStatus: "全部状态", allCompanies: "全部公司", search: "搜索药物或适应症",
      trial: "试验", drug: "药物", condition: "适应症", status: "状态", updated: "更新", why: "申办方给出的原因", readout: "主要完成日期", n: "入组人数",
      stoppedNote: "被终止、撤回或暂停的试验，以及申办方在登记库填写的原因。失败很少发新闻稿，这里能看到。",
      readoutNote: "进行中的二期和三期试验，按主要结果预计日期排序。日期为申办方自行估计，经常推迟。",
      changesNote: "自 {d} 起，每日登记库快照之间检测到的变动。下行与上行同样记录。", noChanges: "暂无变动记录。记录从首次快照开始。",
      date: "日期", change: "变动",
      ev: { registered: "新试验登记", status: "状态", phase: "分期", results_posted: "公布结果", date_moved: "结果日期变更" },
      longNote: "衰老没有获批适应症，也没有公认终点，真正的事件很少。以下是每年值得查看几次的里程碑。", now: "现状", signal: "什么才算信号", asOf: "截至", source: "来源",
      st: { none: "尚不存在", in_progress: "进行中", stalled: "停滞", failed: "失败" },
      readNote: "值得跟踪的短名单。最新标题随台账刷新；新闻类来源只保留与 AI 和衰老相关的标题。", noFeed: "无订阅源，请直接访问网站。",
      methodH: "收录口径", methodP: [
        "收录条件：ClinicalTrials.gov 上的干预性药物或生物制品试验，且牵头申办方在公司名单内；或试验的药物在资产名单内，由名单内公司发现、现由其他申办方开展。",
        "“AI 发现”按公司而非分子判断：公司自称其发现平台由 AI 或机器学习驱动，即视为 AI 原生。平台以物理或结构计算为主的公司单列为“有争议”，不计入主要统计。这一划分属于编辑判断，应逐家复核。",
        "未覆盖：授权给大型药企且不在资产名单内的 AI 来源药物；只在 ClinicalTrials.gov 以外登记的试验（许多中国试验）；已完成试验是否成功。"],
      rubricH: "如何评估单项声明", rubricP: "每项 0 到 2 分。14 分中低于 6 分，按炒作对待。",
      rubric: ["证据级别：体外或动物，无对照人体，随机人体。", "终点：生物标志物，替代终点，临床结局。", "样本量与预先登记。", "独立性：公司新闻稿，同行评议，他人重复验证。", "对照：无，安慰剂，标准治疗。", "靶点有人类遗传学证据支持。", "AI 的贡献具体且可核查，并披露阴性数据。"],
      footer: "仅作描述，不构成医疗或投资建议。试验数据来自 ClinicalTrials.gov。", generated: "数据生成于 {d}"
    }
  };
  var TABS = ["overview", "trials", "stopped", "readouts", "changes", "longevity", "reading", "method"];
  var lang = "en", D = null, F = { phase: "", bucket: "", sponsor: "", q: "" };
  try { lang = localStorage.getItem("ledger-lang") || ((navigator.language || "").indexOf("zh") === 0 ? "zh" : "en"); } catch (e) { lang = (navigator.language || "").indexOf("zh") === 0 ? "zh" : "en"; }
  function t(k) { return T[lang][k]; }
  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }
  function safeUrl(u) { return /^https?:\/\//.test(u || "") ? esc(u) : "#"; }
  function link(u, text) { return '<a href="' + safeUrl(u) + '" target="_blank" rel="noopener">' + esc(text) + "</a>"; }
  function nct(id) { return link("https://clinicaltrials.gov/study/" + id, id); }
  function spName(id) { var s = D.sponsorMap[id]; return s ? (lang === "zh" && s.name_zh ? s.name_zh : s.name) : id; }
  function who(x) { return x.via === "sponsor" ? spName(x.sponsor_id) : x.lead_sponsor + " (" + (lang === "zh" ? "源自 " : "from ") + spName(x.sponsor_id) + ")"; }
  function pill(cls, text) { return '<span class="pill ' + esc(cls) + '">' + esc(text) + "</span>"; }
  function statusText(s) { return String(s || "").toLowerCase().replace(/_/g, " "); }
  function tab() { var h = location.hash.replace("#", ""); return TABS.indexOf(h) >= 0 ? h : "overview"; }
  function table(head, rows) {
    return '<div class="scroll"><table><thead><tr>' + head.map(function (h) { return "<th" + (h[1] ? ' class="n"' : "") + ">" + esc(h[0]) + "</th>"; }).join("") +
      "</tr></thead><tbody>" + rows.join("") + "</tbody></table></div>";
  }
  function trialRow(x, extra) {
    return "<tr><td class=\"d\">" + nct(x.nct) + "</td><td>" + esc(who(x)) + "</td><td>" + esc((x.interventions || []).join(", ")) +
      "</td><td>" + esc((x.conditions || []).slice(0, 2).join("; ")) + "</td><td>" + esc(x.phase) + "</td><td>" + pill(x.bucket, statusText(x.status)) + "</td>" + extra + "</tr>";
  }
  var V = {
    overview: function () {
      var s = D.stats, P = s.by_phase_core, tiles = [[s.core_trials, "core"], [s.sponsors, "sponsors"], [s.phase3, "p3"], [s.stopped, "stoppedN"], [s.with_results, "results"], [s.new_90d, "new90"]];
      var rows = Object.keys(P).filter(function (p) { return P[p].total; }).map(function (p) {
        var r = P[p]; return "<tr><td>" + esc(p) + '</td><td class="n">' + r.active + '</td><td class="n">' + r.completed + '</td><td class="n">' + r.stopped + '</td><td class="n">' + r.unknown + '</td><td class="n">' + r.total + "</td></tr>";
      });
      var pct = Math.min(100, 100 * s.phase2_completed_randomised / s.phase2_threshold);
      var sp = D.sponsors.filter(function (x) { return x.trials; }).map(function (x) {
        return "<tr><td>" + esc(spName(x.id)) + "</td><td>" + esc(x.country) + "</td><td>" + esc(t(x.tier)) + '</td><td class="n">' + x.trials + '</td><td class="n">' + x.stopped + "</td><td>" + esc(x.furthest || "") + "</td></tr>";
      });
      return '<section><div class="tiles">' + tiles.map(function (x) { return '<div class="tile"><b>' + x[0] + "</b><span>" + esc(t(x[1])) + "</span></div>"; }).join("") + "</div></section>" +
        '<section class="verdict"><h2>' + esc(t("verdictH")) + '</h2><div class="meter"><i style="width:' + pct + '%"></i></div><p class="note">' +
        esc(t("verdictP").replace("{n}", s.phase2_completed_randomised).replace("{t}", s.phase2_threshold)) + "</p></section>" +
        "<section><h2>" + esc(t("phaseH")) + "</h2>" + table([[t("phase")], [t("active"), 1], [t("completed"), 1], [t("stopped"), 1], [t("unknown"), 1], [t("total"), 1]], rows) + "</section>" +
        "<section><h2>" + esc(t("sponsorsH")) + "</h2>" + table([[t("company")], [""], [t("basis")], [t("trials"), 1], [t("stopped"), 1], [t("furthest")]], sp) + "</section>";
    },
    trials: function () {
      function opts(list, cur, all) { return '<option value="">' + esc(all) + "</option>" + list.map(function (o) { return '<option value="' + esc(o[0]) + '"' + (o[0] === cur ? " selected" : "") + ">" + esc(o[1]) + "</option>"; }).join(""); }
      var phases = Object.keys(D.stats.by_phase_all).filter(function (p) { return D.stats.by_phase_all[p].total; }).map(function (p) { return [p, p]; });
      var sps = D.sponsors.filter(function (x) { return x.trials; }).map(function (x) { return [x.id, spName(x.id)]; });
      var q = F.q.toLowerCase();
      var rows = D.trials.filter(function (x) {
        return (!F.phase || x.phase === F.phase) && (!F.bucket || x.bucket === F.bucket) && (!F.sponsor || x.sponsor_id === F.sponsor) &&
          (!q || ((x.interventions || []).join(" ") + " " + (x.conditions || []).join(" ") + " " + x.title + " " + x.nct).toLowerCase().indexOf(q) >= 0);
      });
      return '<section><div class="filters"><select id="f-sponsor">' + opts(sps, F.sponsor, t("allCompanies")) + '</select><select id="f-phase">' + opts(phases, F.phase, t("allPhases")) +
        '</select><select id="f-bucket">' + opts([["active", t("active")], ["completed", t("completed")], ["stopped", t("stopped")]], F.bucket, t("allStatus")) +
        '</select><input id="f-q" type="search" placeholder="' + esc(t("search")) + '" value="' + esc(F.q) + '"></div><p class="muted small">' + rows.length + " / " + D.trials.length + "</p>" +
        table([[t("trial")], [t("company")], [t("drug")], [t("condition")], [t("phase")], [t("status")], [t("updated")]], rows.map(function (x) { return trialRow(x, '<td class="d">' + esc(x.last_update) + "</td>"); })) + "</section>";
    },
    stopped: function () {
      var rows = D.trials.filter(function (x) { return x.bucket === "stopped"; });
      return '<section><p class="note">' + esc(t("stoppedNote")) + "</p>" + table([[t("trial")], [t("company")], [t("drug")], [t("condition")], [t("phase")], [t("status")], [t("why")]],
        rows.map(function (x) { return trialRow(x, "<td>" + esc(x.why_stopped || "") + "</td>"); })) + "</section>";
    },
    readouts: function () {
      var ok = { "Phase 2": 1, "Phase 2/3": 1, "Phase 3": 1 };
      var rows = D.trials.filter(function (x) { return x.bucket === "active" && ok[x.phase] && x.primary_completion && x.primary_completion >= D.today; })
        .sort(function (a, b) { return a.primary_completion < b.primary_completion ? -1 : 1; });
      return '<section><p class="note">' + esc(t("readoutNote")) + "</p>" + table([[t("readout")], [t("trial")], [t("company")], [t("drug")], [t("condition")], [t("phase")], [t("n"), 1]],
        rows.map(function (x) { return '<tr><td class="d">' + esc(x.primary_completion) + '</td><td class="d">' + nct(x.nct) + "</td><td>" + esc(who(x)) + "</td><td>" + esc((x.interventions || []).join(", ")) + "</td><td>" + esc((x.conditions || []).slice(0, 2).join("; ")) + "</td><td>" + esc(x.phase) + '</td><td class="n">' + esc(x.enrollment == null ? "" : x.enrollment) + "</td></tr>"; })) + "</section>";
    },
    changes: function () {
      var note = '<p class="note">' + esc(t("changesNote").replace("{d}", D.baseline || "")) + "</p>";
      if (!D.events.length) return "<section>" + note + '<p class="muted">' + esc(t("noChanges")) + "</p></section>";
      return "<section>" + note + table([[t("date")], [t("trial")], [t("company")], [t("change")]], D.events.map(function (e) {
        var what = t("ev")[e.type] || e.type, detail = e.type === "registered" ? e.to : e.type === "results_posted" ? "" : statusText(e.from) + " → " + statusText(e.to);
        return '<tr><td class="d">' + esc(e.date) + '</td><td class="d">' + nct(e.nct) + "</td><td>" + esc(spName(e.sponsor_id)) + "</td><td>" + pill(e.direction, what) + " " + esc(detail) + (e.why_stopped ? '<br><span class="muted small">' + esc(e.why_stopped) + "</span>" : "") + "</td></tr>";
      })) + "</section>";
    },
    longevity: function () {
      return '<section><p class="note">' + esc(t("longNote")) + '</p><div class="cards">' + D.longevity.map(function (m) {
        return '<div class="card"><h3>' + esc(m["title_" + lang]) + "</h3>" + pill(m.status, t("st")[m.status] || m.status) + "<p><b>" + esc(t("now")) + ":</b> " + esc(m["state_" + lang]) + "</p><p><b>" + esc(t("signal")) + ":</b> " + esc(m["signal_" + lang]) +
          '</p><p class="muted small">' + link(m.source, t("source")) + " · " + esc(t("asOf")) + " " + esc(m.as_of) + "</p></div>";
      }).join("") + "</div></section>";
    },
    reading: function () {
      return '<section><p class="note">' + esc(t("readNote")) + '</p><div class="cards">' + D.reading.map(function (r) {
        var h = D.headlines[r.id] || [];
        return '<div class="card"><h3>' + link(r.url, r.name) + '</h3><p class="muted small">' + esc(r.cadence) + "</p><p>" + esc(r["why_" + lang]) + "</p>" +
          (h.length ? "<ul class=\"small\">" + h.map(function (i) { return "<li>" + link(i.url, i.title) + ' <span class="muted">' + esc(i.date || "") + "</span></li>"; }).join("") + "</ul>" : (r.feed ? "" : '<p class="muted small">' + esc(t("noFeed")) + "</p>")) + "</div>";
      }).join("") + "</div></section>";
    },
    method: function () {
      return "<section><h2>" + esc(t("methodH")) + "</h2>" + t("methodP").map(function (p) { return '<p class="note">' + esc(p) + "</p>"; }).join("") +
        (D.assets || []).map(function (a) { return '<p class="note"><b>' + esc(a.name) + ":</b> " + esc(a["note_" + lang]) + " " + link(a.source, t("source")) + "</p>"; }).join("") +
        "</section><section><h2>" + esc(t("rubricH")) + '</h2><p class="note">' + esc(t("rubricP")) + '</p><ol class="rubric">' + t("rubric").map(function (r) { return "<li>" + esc(r) + "</li>"; }).join("") + "</ol></section>";
    }
  };
  function chrome() {
    document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
    document.title = T.en.title + " · " + T.zh.title;
    Array.prototype.forEach.call(document.querySelectorAll("[data-t]"), function (el) { el.textContent = t(el.getAttribute("data-t")); });
    document.getElementById("lang").textContent = lang === "zh" ? "English" : "中文";
    var cur = tab();
    document.getElementById("tabs").innerHTML = TABS.map(function (k) { return '<a href="#' + k + '"' + (k === cur ? ' aria-current="page"' : "") + ">" + esc(t("tabs")[k]) + "</a>"; }).join("");
  }
  function render() {
    chrome();
    if (!D) return;
    document.getElementById("main").innerHTML = V[tab()]();
    document.getElementById("stamp").textContent = t("generated").replace("{d}", D.generated_at);
    ["sponsor", "phase", "bucket"].forEach(function (k) {
      var el = document.getElementById("f-" + k);
      if (el) el.onchange = function () { F[k] = el.value; render(); };
    });
    var q = document.getElementById("f-q");
    if (q) q.onchange = function () { F.q = q.value; render(); };
  }
  document.getElementById("lang").onclick = function () {
    lang = lang === "zh" ? "en" : "zh";
    try { localStorage.setItem("ledger-lang", lang); } catch (e) { /* private window */ }
    render();
  };
  window.addEventListener("hashchange", render);
  chrome();
  function get(url) { return fetch(url, { cache: "no-cache" }).then(function (r) { if (!r.ok) throw new Error(r.status); return r.json(); }); }
  get("data/ledger.json").catch(function () { return get("../data/ledger.json"); }).then(function (d) {
    D = d; D.sponsorMap = {}; d.sponsors.forEach(function (s) { D.sponsorMap[s.id] = s; });
    render();
  }).catch(function () { document.getElementById("main").innerHTML = '<p class="muted">' + esc(t("failed")) + "</p>"; });
})();
