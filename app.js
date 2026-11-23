/* AI Biotech Watch: draws data/ledger.json. Every figure is computed in ledger/build.py. */
(function () {
  "use strict";
  var T = {
    en: {
      title: "AI Biotech Watch", subtitle: "Does AI make better medicines? The evidence so far, updated daily. Failures are logged like progress; where data are thin, we say so.",
      loading: "Loading…", failed: "Could not load data/ledger.json.", skip: "Skip to content",
      gsPh: "Search companies, tickers, drugs, signals, terms", gsCo: "Companies", gsTr: "Trials", gsSig: "Signals", gsDeals: "Deals", gsTerms: "Glossary", gsAll: "See all {n} matching trials", gsNone: "Nothing found for “{q}”.", gsTrialsN: "{n} trials",
      nav: { today: "Today", signals: "Signals", trials: "Trials", calendar: "Calendar", more: "More" },
      subs: { all: "All trials", stopped: "Stopped", changes: "Changes", companies: "Companies", dates: "Dates ahead", deals: "Deals", longevity: "Longevity", reading: "Reading", method: "Method", glossary: "Glossary" },
      tSignals: "Latest signals", tChanges: "Registry changes", tDue: "Due in the next 30 days", seeAll: "See all", noSignals: "No material signals in the last scan.", noChanges: "No changes recorded yet.", noDue: "Nothing due in the next 30 days.",
      overdue: "{n} active Phase 2 or Phase 3 trials are past their listed result date with no update.", scanOf: "scan of {d}",
      trials: "Trials", sponsors: "Companies behind them", core: "Trials of those drugs", coreDrugs: "Drugs from an AI platform, in human trials", stoppedN: "Of those trials, stopped early", results: "With results posted", p3: "Live in Phase 3 or 2/3", new90: "Registered in 90 days", tilesH: "Drugs designed or found by an AI platform",
      originLine: "AI drug companies run {n} trials in all. {a} test a drug the company says came from its own AI platform, and only those are counted above. {b} test a drug it bought in or repurposed, {p} one found with a partner, and for {d} the company does not say.", snip: "from a search summary, page not opened", origin: "Origin", allOrigins: "All origins", dOrigin: "Where the drug came from", pDrugs: "Drugs", og: { platform: "Own platform", partner: "With a partner", acquired: "Bought in or repurposed", not_stated: "Not stated" }, sortBy: "Sort", sorts: { "-updated": "Newest update", "-phase": "Latest phase first", "phase": "Earliest phase first", "company": "Company A–Z", "drug": "Drug A–Z" }, pProxyA: "Listed through", pProxyB: "",
      apprH: "Approved so far", apprNone: "No drug from an AI drug company tracked here has been approved by a major regulator.", apprAi: "From AI drug companies: none yet.", pApproved: "Approved drugs", profPartly: "some details not re-checked",
      verdictH: "Does AI change the odds? Unproven.", verdictP: "{n} of the {t} completed randomised Phase 2 trials of AI-platform drugs needed before a matched comparison means anything. A completed trial is not a successful one: the registry does not say whether a trial met its endpoint.",
      phaseH: "Trials by phase, drugs from an AI platform", active: "Active", completed: "Completed", stopped: "Stopped", unknown: "Unknown", total: "Total",
      company: "Company", ticker: "Ticker", basis: "Basis", furthest: "Furthest phase", ai: "AI drug company", computational: "Computational, contested", year: "1 year", mcap: "Market cap", pe: "P/E",
      allPhases: "All phases", allCompanies: "All companies", search: "Search drug, condition, company or ticker", listedOnly: "Listed companies only", clear: "Clear filters", noMatch: "Nothing matches these filters.", showMore: "Show {n} more", shown: "{a} of {b}",
      trial: "Trial", drug: "Drug", condition: "Condition", phase: "Phase", status: "Status", updated: "Updated", why: "Reason given", readout: "Due", n: "Enrolled", date: "Date", change: "Change", event: "Event", source: "Source",
      dTitle: "Title", dRand: "Randomised", yes: "yes", no: "no", dFirst: "First registered", dPrim: "Primary completion", dWhy: "Why stopped", dRun: "Run by", details: "Details",
      stoppedNote: "Terminated, withdrawn or suspended trials, with the reason the sponsor gave the registry. Failures rarely get a press release; this is where they show.",
      changesNote: "Changes detected between daily snapshots of the registry since {d}. Down moves are logged the same way as up moves.",
      ev: { registered: "New trial registered", status: "Status", phase: "Phase", results_posted: "Results posted", date_moved: "Result date moved" },
      calNote: "Results due from active Phase 2 and Phase 3 trials (the sponsors' own estimates, which often slip) and regulator decisions a company has disclosed.", regDecision: "Regulator decision", stripLab: "Next 12 months: one dot per trial result due, squares for regulator decisions",
      dealsNote: "Pharma-AI partnerships with the cash paid upfront beside the headline figure. Figures are from the linked source; headlines are never added up.", deal: "Deal", headline: "Headline, up to", upfront: "Upfront", share: "Upfront share", undisclosed: "not disclosed", moreThan: "more than ",
      sigNote: "A daily scan of trial registries, filings, preprints, regulators and company news. Each item gets two separate scores.", sigLast: "Last scan: {d}", sigChecked: "Sources checked", weekly: "Weekly summary", evidence: "Evidence", market: "Market", soWhat: "So what", changes: "Changes my view if", second: "2nd order", single: "single source", company_src: "company claim", independent_src: "independent source", conf: "confidence", followups: "Follow-ups", watching: "Waiting on", watchH: "Watch list", wAdded: "added by the daily scan, {d}", role: "Role", listing: "Listing", via: "via", priv: "private", none: "Nothing yet.",
      ty: { human_data: "Human data", trial: "Trial start or stop", regulatory: "Regulatory", benchmark: "Benchmark or replication", deal: "Licence or deal", funding: "Funding or M&A", capex: "Capex or compute", tool: "Tool release", other: "Other" },
      dir: { positive: "positive", negative: "negative", neutral: "neutral" }, confv: { high: "high", medium: "medium", low: "low" },
      roles: { lab: "AI lab", pharma: "Pharma", platform: "AI drug platform", compute: "Compute", tools: "Lab tools", cro: "Research contractor" },
      srcs: { registry: "trial registry", sec_search: "SEC filing search", sec_company: "company 8-Ks", preprints: "preprints", arxiv: "arXiv", regulators: "regulators", newsrooms: "company newsrooms", model_hubs: "model hubs", news_search: "news search" },
      longNote: "Ageing has no approved indication and no accepted endpoint, so real events are rare. These are the milestones worth checking a few times a year.", now: "Where it stands", signal: "What would count", asOf: "as of",
      st: { none: "Does not exist", in_progress: "In progress", stalled: "Stalled", failed: "Failed" },
      readNote: "The short list to follow. Headlines refresh daily; news sources are filtered to AI and ageing.", noFeed: "No feed: open the site.",
      methodH: "What is counted", methodP: [
        "A trial is listed here when it is an interventional drug or biologic trial on ClinicalTrials.gov and its lead sponsor is a company on the list, or it tests a listed asset that such a company discovered and another sponsor now runs.",
        "The headline numbers count drug by drug. A trial is counted when two things hold: the company describes its discovery platform as AI or machine learning, and it says this particular drug was found or designed by that platform. Each drug's origin is recorded with a source: own platform, found with a partner, bought in or repurposed, or not stated. Drugs a company bought in, or old compounds its AI picked for a new use, are listed but not counted.",
        "Companies whose platform is physics-based or structure-based computation are listed separately as contested and kept out of the headline counts. Both judgements rest on what companies say about themselves and should be read that way.",
        "Not captured: AI-origin drugs licensed to large pharma and not on the asset list, trials registered only outside ClinicalTrials.gov (many Chinese trials), and whether a completed trial succeeded.",
        "Market data in the company panel is delayed, comes from the source named there, and is context only: this site draws no link between a signal and a price."],
      rubricH: "Grading a single claim", rubricP: "Score each 0 to 2. Below 6 of 14, treat it as hype.",
      rubric: ["Evidence level: lab or animal, uncontrolled human, randomised human.", "Endpoint: biomarker, surrogate, clinical outcome.", "Size and pre-registration.", "Independence: company release, peer-reviewed, replicated by others.", "Comparator: none, placebo, standard of care.", "The target has human genetic support.", "The AI contribution is specific and checkable, and negative data are disclosed."],
      glossNote: "Plain-language meanings of the terms used on this site. Dotted terms anywhere on the page open the same explanation.",
      pClose: "Close", pOverview: "Overview", pAi: "AI link", pLead: "Most advanced programme", pMarket: "Market data", pMarketNote: "Delayed; as of {d}. Context only, not a signal.", pPrice: "Last close", p1m: "1 month", p3m: "3 months", pYtd: "Year to date", pCash: "Cash and equivalents", pCashInv: "Cash and investments", pRunway: "Cash runway", quarters: "{n} quarters", lossMaking: "n/a (loss-making)", pEps: "Earnings per share, 12 months", pFin: "Financials", pFinNote: "From the company's SEC filings, period to {d}. Twelve-month figures add the last fiscal year and the year to date.", pRange: "52-week range", pSince: "range since listing, {d}", pNoPe: "not available", pFy: "based on the last fiscal year's earnings, converted to US dollars.", pRev: "Revenue, 12 months", pRd: "R&D, 12 months",
      pLedger: "Tracked here", pTrials: "{n} trials, {s} stopped early", pNoTrials: "No trials tracked for this company.", pNext: "Results due", pStopped: "Stopped trials", pSignals: "Signals", pDeals: "Deals", pChanges: "Registry changes", pLinks: "Links", pCt: "All trials on ClinicalTrials.gov", pSec: "SEC filings", pHk: "HKEX page", pSee: "See its trials", pPrivate: "Not listed", pSrc: "Profile source",
      newLab: "new",
      footer: "Descriptive information only; not medical or investment advice, a research report or a recommendation on any investment product. The publisher may hold positions in the companies named. Trial data: ClinicalTrials.gov.", generated: "Data generated {d}"
    },
    zh: {
      title: "AI 制药观察", subtitle: "AI 能做出更好的药吗？每日更新的证据。失败和进展同样记录；数据不足时，直说尚无定论。",
      loading: "加载中…", failed: "无法加载 data/ledger.json。", skip: "跳到正文",
      gsPh: "搜索公司、代码、药物、信号、术语", gsCo: "公司", gsTr: "试验", gsSig: "信号", gsDeals: "交易", gsTerms: "术语", gsAll: "查看全部 {n} 项匹配的试验", gsNone: "没有找到“{q}”。", gsTrialsN: "{n} 项试验",
      nav: { today: "今日", signals: "信号", trials: "试验", calendar: "日历", more: "更多" },
      subs: { all: "全部试验", stopped: "已终止", changes: "变动", companies: "公司", dates: "未来日期", deals: "交易", longevity: "长寿", reading: "阅读", method: "方法", glossary: "术语" },
      tSignals: "最新信号", tChanges: "登记库变动", tDue: "未来 30 天到期", seeAll: "查看全部", noSignals: "最近一次扫描没有重要信号。", noChanges: "暂无变动记录。", noDue: "未来 30 天没有到期事件。",
      overdue: "{n} 项进行中的二期或三期试验已过登记的结果日期，尚无更新。", scanOf: "{d} 扫描",
      trials: "试验", sponsors: "涉及的公司", core: "这些药物的试验", coreDrugs: "来自 AI 平台、已进入人体试验的药物", stoppedN: "其中提前终止的试验", results: "已公布结果", p3: "三期或 2/3 期（未终止）", new90: "近 90 天新登记", tilesH: "由 AI 平台设计或发现的药物",
      originLine: "AI 制药公司共开展 {n} 项试验。其中 {a} 项测试的是公司称出自其自有 AI 平台的药物，上方只统计这一部分。另有 {b} 项测试外购或老药新用的药物，{p} 项为与合作方共同发现，{d} 项公司未说明来源。", snip: "依据搜索摘要，未打开原页面", origin: "来源", allOrigins: "全部来源", dOrigin: "药物来源", pDrugs: "药物", og: { platform: "自有平台", partner: "与合作方共同", acquired: "外购或老药新用", not_stated: "未说明" }, sortBy: "排序", sorts: { "-updated": "最近更新", "-phase": "分期从晚到早", "phase": "分期从早到晚", "company": "公司 A–Z", "drug": "药物 A–Z" }, pProxyA: "通过", pProxyB: "上市",
      apprH: "已获批的药物", apprNone: "本站收录的 AI 制药公司的药物尚无一款获主要监管机构批准。", apprAi: "来自 AI 制药公司：尚无。", pApproved: "已获批药物", profPartly: "部分细节未重新核对",
      verdictH: "AI 是否改变了成功率？尚无定论。", verdictP: "做匹配比较至少需要 {t} 项 AI 平台药物的已完成随机二期试验，目前只有 {n} 项。“已完成”不等于“成功”：登记库不记录试验是否达到终点。",
      phaseH: "各期试验数（来自 AI 平台的药物）", active: "进行中", completed: "已完成", stopped: "已终止", unknown: "不详", total: "合计",
      company: "公司", ticker: "代码", basis: "依据", furthest: "最远分期", ai: "AI 制药公司", computational: "计算驱动，有争议", year: "一年", mcap: "市值", pe: "市盈率",
      allPhases: "全部分期", allCompanies: "全部公司", search: "搜索药物、适应症、公司或代码", listedOnly: "只看上市公司", clear: "清除筛选", noMatch: "没有符合筛选条件的内容。", showMore: "再显示 {n} 条", shown: "{a} / {b}",
      trial: "试验", drug: "药物", condition: "适应症", phase: "分期", status: "状态", updated: "更新", why: "申办方给出的原因", readout: "到期", n: "入组人数", date: "日期", change: "变动", event: "事件", source: "来源",
      dTitle: "标题", dRand: "随机对照", yes: "是", no: "否", dFirst: "首次登记", dPrim: "主要完成日期", dWhy: "终止原因", dRun: "开展方", details: "详情",
      stoppedNote: "被终止、撤回或暂停的试验，以及申办方在登记库填写的原因。失败很少发新闻稿，这里能看到。",
      changesNote: "自 {d} 起，每日登记库快照之间检测到的变动。下行与上行同样记录。",
      ev: { registered: "新试验登记", status: "状态", phase: "分期", results_posted: "公布结果", date_moved: "结果日期变更" },
      calNote: "进行中的二期和三期试验的结果到期日（申办方自行估计，经常推迟），以及公司已披露的监管决定日期。", regDecision: "监管决定", stripLab: "未来 12 个月：每个圆点为一项试验结果到期，方块为监管决定",
      dealsNote: "药企与 AI 公司的合作：首付款与总额并列。数字来自所链接的来源；总额从不相加。", deal: "交易", headline: "总额上限", upfront: "首付款", share: "首付款占比", undisclosed: "未披露", moreThan: "超过 ",
      sigNote: "每日扫描试验登记库、监管文件、预印本、监管机构和公司新闻。每个条目有两个独立评分。", sigLast: "最近一次扫描：{d}", sigChecked: "已检查的来源", weekly: "每周总结", evidence: "证据", market: "市场", soWhat: "意义", changes: "何种情况会改变判断", second: "二阶", single: "单一来源", company_src: "公司说法", independent_src: "独立来源", conf: "置信度", followups: "后续跟进", watching: "等待结果", watchH: "关注名单", wAdded: "每日扫描于 {d} 添加", role: "角色", listing: "上市", via: "通过", priv: "未上市", none: "暂无。",
      ty: { human_data: "人体数据", trial: "试验启动或终止", regulatory: "监管", benchmark: "基准或重复验证", deal: "授权或交易", funding: "融资或并购", capex: "资本开支或算力", tool: "工具发布", other: "其他" },
      dir: { positive: "正面", negative: "负面", neutral: "中性" }, confv: { high: "高", medium: "中", low: "低" },
      roles: { lab: "AI 实验室", pharma: "药企", platform: "AI 药物平台", compute: "算力", tools: "实验室工具", cro: "研究外包" },
      srcs: { registry: "试验登记库", sec_search: "SEC 文件检索", sec_company: "公司 8-K", preprints: "预印本", arxiv: "arXiv", regulators: "监管机构", newsrooms: "公司新闻页", model_hubs: "模型平台", news_search: "新闻搜索" },
      longNote: "衰老没有获批适应症，也没有公认终点，真正的事件很少。以下是每年值得查看几次的里程碑。", now: "现状", signal: "什么才算信号", asOf: "截至",
      st: { none: "尚不存在", in_progress: "进行中", stalled: "停滞", failed: "失败" },
      readNote: "值得跟踪的短名单。标题每日刷新；新闻类来源只保留与 AI 和衰老相关的标题。", noFeed: "无订阅源，请直接访问网站。",
      methodH: "收录口径", methodP: [
        "收录条件：ClinicalTrials.gov 上的干预性药物或生物制品试验，且牵头申办方在公司名单内；或试验的药物在资产名单内，由名单内公司发现、现由其他申办方开展。",
        "主要数字按药物逐一统计。一项试验要同时满足两点才计入：公司自称其药物发现平台由 AI 或机器学习驱动；并且公司表示这一具体药物由该平台发现或设计。每种药物的来源都附有出处：自有平台、与合作方共同发现、外购或老药新用、未说明。公司外购的药物，或由 AI 为已有化合物挑出新用途的，只列出、不计入。",
        "平台以物理或结构计算为主的公司单列为“有争议”，不计入主要统计。这两项判断都依据公司对自身的说法，请据此理解。",
        "未覆盖：授权给大型药企且不在资产名单内的 AI 来源药物；只在 ClinicalTrials.gov 以外登记的试验（许多中国试验）；已完成试验是否成功。",
        "公司面板中的行情数据有延迟，来源见面板内说明，仅作背景：本站不在信号与股价之间建立任何联系。"],
      rubricH: "如何评估单项声明", rubricP: "每项 0 到 2 分。14 分中低于 6 分，按炒作对待。",
      rubric: ["证据级别：体外或动物，无对照人体，随机人体。", "终点：生物标志物，替代终点，临床结局。", "样本量与预先登记。", "独立性：公司新闻稿，同行评议，他人重复验证。", "对照：无，安慰剂，标准治疗。", "靶点有人类遗传学证据支持。", "AI 的贡献具体且可核查，并披露阴性数据。"],
      glossNote: "本站所用术语的通俗解释。页面上带虚线的术语点开后是同样的说明。",
      pClose: "关闭", pOverview: "概况", pAi: "与 AI 的关系", pLead: "进展最快的项目", pMarket: "行情数据", pMarketNote: "有延迟；截至 {d}。仅作背景，不是信号。", pPrice: "最新收盘", p1m: "1 个月", p3m: "3 个月", pYtd: "年初至今", pCash: "现金及等价物", pCashInv: "现金及投资", pRunway: "现金可支撑", quarters: "{n} 个季度", lossMaking: "不适用（亏损）", pEps: "每股收益（12 个月）", pFin: "财务数据", pFinNote: "来自公司向 SEC 提交的文件，截至 {d}。12 个月数据为上一财年加本年至今。", pRange: "52 周区间", pSince: "上市以来区间（自 {d}）", pNoPe: "暂无", pFy: "按上一财年收益计算，并折算为美元。", pRev: "营收（12 个月）", pRd: "研发投入（12 个月）",
      pLedger: "本站记录", pTrials: "{n} 项试验，{s} 项提前终止", pNoTrials: "未跟踪该公司的试验。", pNext: "即将到期的结果", pStopped: "已终止的试验", pSignals: "信号", pDeals: "交易", pChanges: "登记库变动", pLinks: "链接", pCt: "ClinicalTrials.gov 上的全部试验", pSec: "SEC 文件", pHk: "港交所页面", pSee: "查看其试验", pPrivate: "未上市", pSrc: "概况来源",
      newLab: "新",
      footer: "仅为描述性信息，不构成医疗或投资建议、研究报告或对任何投资产品的推荐。发布者可能持有文中所述公司的头寸。试验数据来自 ClinicalTrials.gov。", generated: "数据生成于 {d}"
    }
  };
  var PH_ZH = { "Early Phase 1": "早期一期", "Phase 1": "一期", "Phase 1/2": "1/2 期", "Phase 2": "二期", "Phase 2/3": "2/3 期", "Phase 3": "三期", "Phase 4": "四期", "N/A": "不适用" };
  var ST_ZH = { RECRUITING: "招募中", NOT_YET_RECRUITING: "尚未招募", ACTIVE_NOT_RECRUITING: "进行中，不再招募", ENROLLING_BY_INVITATION: "邀请入组", COMPLETED: "已完成", TERMINATED: "已终止", WITHDRAWN: "已撤回", SUSPENDED: "已暂停", UNKNOWN: "状态不详" };
  var VIEWS = { today: [], signals: [], trials: ["all", "stopped", "changes", "companies"], calendar: ["dates", "deals"], more: ["longevity", "reading", "method", "glossary"] };
  var ALIAS = { overview: "today", stopped: "trials/stopped", changes: "trials/changes", companies: "trials/companies", readouts: "calendar", dates: "calendar", deals: "calendar/deals", longevity: "more/longevity", reading: "more/reading", method: "more/method", glossary: "more/glossary" };
  var lang = "en", D = null, S = {}, seen = null, opener = null, PAGE = 60, DEF = "", panelPushed = false;
  function store(k, v) { try { if (v === undefined) return localStorage.getItem(k); localStorage.setItem(k, v); } catch (e) { return null; } }
  lang = store("ledger-lang") || ((navigator.language || "").indexOf("zh") === 0 ? "zh" : "en");
  seen = store("ledger-seen");

  // ---- helpers ----
  function t(k) { return T[lang][k]; }
  function f(k, o) { var s = t(k); for (var x in o) s = s.replace("{" + x + "}", o[x]); return s; }
  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }
  function link(u, text) { return '<a href="' + (/^https?:\/\//.test(u || "") ? esc(u) : "#") + '" target="_blank" rel="noopener">' + esc(text) + "</a>"; }
  function nct(id) { return link("https://clinicaltrials.gov/study/" + id, id); }
  function L(o, k) { return o[k + "_" + lang] || o[k + "_en"] || ""; }
  function coName(c) { return lang === "zh" && c.name_zh ? c.name_zh : c.name; }
  function co(key, label) { var c = D.companies[key]; if (!c) return esc(label || key); return '<button type="button" class="co" data-co="' + esc(key) + '">' + esc(label || coName(c)) + "</button>"; }
  function tk(x) { return x ? (D.companies[x] ? '<button type="button" class="tk" data-co="' + esc(x) + '">' + esc(x) + "</button>" : '<span class="tk">' + esc(x) + "</span>") : ""; }
  function term(key, label) { return '<button type="button" class="term" data-g="' + key + '">' + esc(label) + "</button>"; }
  function pill(cls, text) { return '<span class="pill ' + esc(cls) + '">' + esc(text) + "</span>"; }
  function phase(p) { return lang === "zh" ? (PH_ZH[p] || p) : p; }
  function status(s) { return lang === "zh" ? (ST_ZH[s] || s) : String(s || "").toLowerCase().replace(/_/g, " "); }
  function dirPill(d) { return pill(d === "positive" ? "up" : d === "negative" ? "down" : "", t("dir")[d]); }
  function usd(n) { if (n == null) return ""; var a = Math.abs(n); return (n < 0 ? "−" : "") + "$" + (a >= 1e12 ? (a / 1e12).toFixed(2) + "T" : a >= 1e9 ? (a / 1e9).toFixed(a >= 1e10 ? 0 : 1) + "B" : (a / 1e6).toFixed(a >= 1e8 ? 0 : 1) + "M"); }
  function dealUsd(n) { return n >= 1e9 ? "$" + (n / 1e9).toFixed(2).replace(/\.?0+$/, "") + "B" : "$" + (n / 1e6).toFixed(1).replace(/\.0$/, "") + "M"; }
  function pct(x) { return x == null ? "–" : (x > 0 ? "+" : x < 0 ? "−" : "") + Math.abs(x * 100).toFixed(1) + "%"; }
  function score(n) { var o = ""; for (var i = 1; i <= 3; i++) o += '<i class="' + (i <= n ? "on" : "") + '"></i>'; return '<span class="score">' + o + "<b>" + n + "/3</b></span>"; }
  function isNew(stamp) { if (!seen || !stamp || !D) return false; var d = stamp.slice(0, 10), sd = seen.slice(0, 10); return d > sd || (d === sd && D.generated_at > seen); }
  function newDot() { return '<span class="dot" role="img" aria-label="' + esc(t("newLab")) + '" title="' + esc(t("newLab")) + '"></span>'; }
  function fold(s) { s = String(s || "").trim().toLowerCase(); return s.normalize ? s.normalize("NFD").replace(/[\u0300-\u036f]/g, "") : s; }
  function money(x) { return Number(x).toFixed(2); }
  var CAD_ZH = { "several a week": "每周数篇", "daily": "每日", "weekly": "每周", "yearly, April": "每年 4 月", "yearly, October": "每年 10 月" };
  function srcStatus(v) { return lang !== "zh" ? v : String(v).replace(/^ok, (\d+) new/, "正常，新增 $1 条").replace(/\((\d+) over the cap, not listed\)/, "（另有 $1 条超出上限未列出）").replace(/unreachable/g, "无法访问"); }
  function spark(arr, w, h) {
    if (!arr || arr.length < 2) return "";
    var lo = Math.min.apply(null, arr), hi = Math.max.apply(null, arr), span = hi - lo || 1, n = arr.length - 1;
    var pts = arr.map(function (v, i) { return (i / n * (w - 4) + 2).toFixed(1) + "," + (h - 2 - (v - lo) / span * (h - 4)).toFixed(1); });
    var last = pts[pts.length - 1].split(",");
    return '<svg class="spark" width="' + w + '" height="' + h + '" viewBox="0 0 ' + w + " " + h + '" role="img" aria-label="' + esc(t("year")) + '"><polyline points="' + pts.join(" ") + '"/><circle cx="' + last[0] + '" cy="' + last[1] + '" r="1.8"/></svg>';
  }

  // ---- URL state ----
  function parse() {
    function dec(s) { try { return decodeURIComponent(s); } catch (e) { return s; } }
    var h = location.hash.replace(/^#/, ""), qi = h.indexOf("?"), path = dec(qi < 0 ? h : h.slice(0, qi)).toLowerCase(), q = qi < 0 ? "" : h.slice(qi + 1);
    if (ALIAS[path]) path = ALIAS[path];
    var p = path.split("/"), view = VIEWS[p[0]] ? p[0] : "today", subs = VIEWS[view], sub = subs.indexOf(p[1]) >= 0 ? p[1] : (subs[0] || "");
    var o = { view: view, sub: sub, q: "", phase: "", status: "", company: "", origin: "", listed: "", sort: "", co: "", n: PAGE };
    q.split("&").forEach(function (kv) { var i = kv.indexOf("="); if (i > 0 && kv.slice(0, i) in o) o[kv.slice(0, i)] = dec(kv.slice(i + 1).replace(/\+/g, " ")); });
    return o;
  }
  function hashOf(o) {
    var q = ["q", "phase", "status", "company", "origin", "listed", "sort", "co"].filter(function (k) { return o[k]; }).map(function (k) { return k + "=" + encodeURIComponent(o[k]).replace(/%20/g, "+"); });
    return "#" + o.view + (o.sub && o.sub !== VIEWS[o.view][0] ? "/" + o.sub : "") + (q.length ? "?" + q.join("&") : "");
  }
  function go(change, push) {
    var o = {}; for (var k in S) o[k] = S[k];
    for (k in change) o[k] = change[k];
    var h = hashOf(o);
    if (push) location.hash = h; else { var open = S.open; history.replaceState(null, "", h); S = parse(); S.n = o.n || PAGE; S.open = open; }
  }
  function href(view, sub, extra) { var o = { view: view, sub: sub || "" }; for (var k in extra || {}) o[k] = extra[k]; return hashOf(o); }

  // ---- tables ----
  function sorted(rows, cols) {
    var so = S.sort || DEF, key = so.replace(/^-/, ""), desc = so.charAt(0) === "-", c = cols.filter(function (x) { return x.key === key; })[0];
    if (!c || !c.val) return rows;
    return rows.slice().sort(function (a, b) { var x = c.val(a), y = c.val(b); if (x == null) x = desc ? -Infinity : Infinity; if (y == null) y = desc ? -Infinity : Infinity; return (x < y ? -1 : x > y ? 1 : 0) * (desc ? -1 : 1); });
  }
  function thead(cols) {
    var so = S.sort || DEF, key = so.replace(/^-/, ""), desc = so.charAt(0) === "-";
    return "<thead><tr>" + cols.map(function (c) {
      var lab = c.term ? term(c.term, c.label) : esc(c.label);
      if (!c.val) return '<th scope="col"' + (c.num ? ' class="n"' : "") + ">" + lab + "</th>";
      return '<th scope="col"' + (c.num ? ' class="n"' : "") + (key === c.key ? ' aria-sort="' + (desc ? "descending" : "ascending") + '"' : "") + '><button type="button" class="sort" data-sort="' + c.key + '">' + esc(c.label) + "</button>" + (c.term ? " " + term(c.term, "?") : "") + "</th>";
    }).join("") + "</tr></thead>";
  }
  function tbody(rows, cols, opt) {
    opt = opt || {};
    if (!rows.length) return '<tbody><tr><td class="empty" colspan="' + cols.length + '">' + esc(t("noMatch")) + ' <button type="button" class="btn" data-clear="1">' + esc(t("clear")) + "</button></td></tr></tbody>";
    var shown = opt.page ? rows.slice(0, S.n) : rows;
    var h = shown.map(function (r) {
      return "<tr" + (opt.isNew && opt.isNew(r) ? ' class="new"' : "") + ">" + cols.map(function (c, i) {
        return "<td" + (c.cls || c.num ? ' class="' + (c.cls || "") + (c.num ? " n" : "") + '"' : "") + (i && !c.nolabel ? ' data-l="' + esc(c.label) + '"' : "") + ">" + c.cell(r) + "</td>";
      }).join("") + "</tr>" + (opt.detail && S.open === opt.id(r) ? '<tr class="detail"><td colspan="' + cols.length + '">' + opt.detail(r) + "</td></tr>" : "");
    }).join("");
    if (opt.page && rows.length > S.n) h += '<tr><td class="empty" colspan="' + cols.length + '"><button type="button" class="btn" data-more="1">' + esc(f("showMore", { n: Math.min(PAGE, rows.length - S.n) })) + "</button></td></tr>";
    return "<tbody>" + h + "</tbody>";
  }
  function table(id, rows, cols, opt) { return '<div class="scroll"><table class="rc" id="' + id + '">' + thead(cols) + tbody(sorted(rows, cols), cols, opt) + "</table></div>"; }

  function trialCols(extra) {
    return [
      { key: "nct", label: t("trial"), cls: "d", nolabel: 1, cell: function (x) { return '<button type="button" class="exp" data-open="' + x.nct + '" aria-expanded="' + (S.open === x.nct) + '" aria-label="' + esc(t("details")) + '">' + (S.open === x.nct ? "▾" : "▸") + "</button>" + nct(x.nct); } },
      { key: "drug", label: t("drug"), cls: "lead", nolabel: 1, val: function (x) { return (x.interventions[0] || "").toLowerCase(); }, cell: function (x) { return esc((x.interventions || []).slice(0, 2).join(", ") || x.title); } },
      { key: "company", label: t("company"), val: function (x) { return (D.companies[x.co] ? D.companies[x.co].name : x.lead_sponsor).toLowerCase(); }, cell: function (x) { return (x.via === "sponsor" ? co(x.co) : esc(x.lead_sponsor)) + " " + tk(x.ticker); } },
      { key: "condition", label: t("condition"), cell: function (x) { return esc((x.conditions || []).slice(0, 2).join("; ")); } },
      { key: "phase", label: t("phase"), term: "phase", val: function (x) { return x.phase_rank; }, cell: function (x) { return esc(phase(x.phase)); } },
      { key: "status", label: t("status"), term: "status", val: function (x) { return x.status; }, cell: function (x) { return pill(x.bucket, status(x.status)); } },
      { key: "origin", label: t("origin"), term: "origin", val: function (x) { return x.origin; }, cell: function (x) { return pill(x.origin === "platform" ? "active" : "", t("og")[x.origin] || x.origin); } }
    ].concat(extra);
  }
  function trialDetail(x) {
    function row(k, v) { return v == null || v === "" ? "" : "<dt>" + esc(k) + "</dt><dd>" + esc(v) + "</dd>"; }
    var dr = x.drug_id ? D.drugMap[x.drug_id] : null;
    var org = "<dt>" + esc(t("dOrigin")) + "</dt><dd>" + esc(t("og")[x.origin] || x.origin) + (dr && L(dr, "ai_role") ? ": " + esc(L(dr, "ai_role")) : "") + (dr && dr.source ? " " + link(dr.source.url, dr.source.publisher || t("source")) : "") + (dr && dr.checked === "snippet" ? " (" + esc(t("snip")) + ")" : "") + "</dd>";
    return "<dl>" + org + row(t("dTitle"), x.title) + row(t("condition"), (x.conditions || []).join("; ")) + row(t("drug"), (x.interventions || []).join(", ")) + row(t("dRun"), x.lead_sponsor) +
      row(t("n"), x.enrollment) + row(t("dRand"), x.randomised ? t("yes") : t("no")) + row(t("dFirst"), x.first_posted) + row(t("dPrim"), x.primary_completion) + row(t("updated"), x.last_update) + row(t("dWhy"), x.why_stopped) + "</dl>";
  }
  function trialRows(base) {
    var q = fold(S.q), st = S.sub === "stopped" ? "" : S.status;
    return base.filter(function (x) { return (!S.listed || x.ticker) && (!S.phase || x.phase === S.phase) && (!st || x.bucket === st) && (!S.company || x.co === S.company) && (!S.origin || x.origin === S.origin) && (!q || x.search.indexOf(q) >= 0); });
  }
  function filters(base, withStatus) {
    function opts(list, cur, all) { return '<option value="">' + esc(all) + "</option>" + list.map(function (o) { return '<option value="' + esc(o[0]) + '"' + (o[0] === cur ? " selected" : "") + ">" + esc(o[1]) + "</option>"; }).join(""); }
    var ph = {}, cs = {}; base.forEach(function (x) { ph[x.phase] = x.phase_rank; cs[x.co] = 1; });
    var phases = Object.keys(ph).sort(function (a, b) { return ph[a] - ph[b]; }).map(function (p) { return [p, phase(p)]; });
    var cos = Object.keys(cs).map(function (k) { return [k, D.companies[k] ? coName(D.companies[k]) : k]; }).sort(function (a, b) { return a[1] < b[1] ? -1 : 1; });
    var chips = !withStatus ? "" : '<span class="chips" role="group" aria-label="' + esc(t("status")) + '">' + ["active", "completed", "stopped"].map(function (b) {
      return '<button type="button" class="chip" data-status="' + b + '" aria-pressed="' + (S.status === b) + '">' + esc(t(b)) + " " + base.filter(function (x) { return x.bucket === b; }).length + "</button>"; }).join("") + "</span>";
    var so = S.sort || DEF;
    return '<div class="filters"><input id="f-q" type="search" placeholder="' + esc(t("search")) + '" aria-label="' + esc(t("search")) + '" value="' + esc(S.q) + '"><select id="f-company" aria-label="' + esc(t("company")) + '">' + opts(cos, S.company, t("allCompanies")) +
      '</select><select id="f-phase" aria-label="' + esc(t("phase")) + '">' + opts(phases, S.phase, t("allPhases")) + '</select><select id="f-origin" aria-label="' + esc(t("origin")) + '">' + opts(["platform", "partner", "acquired", "not_stated"].map(function (o) { return [o, t("og")[o]]; }), S.origin, t("allOrigins")) + "</select>" + chips +
      '<label class="chk"><input type="checkbox" id="f-listed"' + (S.listed ? " checked" : "") + "> " + esc(t("listedOnly")) + '</label><select id="f-sort" class="only-phone" aria-label="' + esc(t("sortBy")) + '">' + Object.keys(t("sorts")).map(function (k) { return '<option value="' + k + '"' + (k === so ? " selected" : "") + ">" + esc(t("sortBy")) + ": " + esc(t("sorts")[k]) + "</option>"; }).join("") + '</select><button type="button" class="btn" id="f-clear" data-clear="1" hidden>' + esc(t("clear")) + '</button></div><p class="muted small" id="count"></p>';
  }

  // ---- views ----
  function subnav() {
    var subs = VIEWS[S.view]; if (!subs.length) return "";
    return '<section><nav class="subnav" aria-label="' + esc(t("nav")[S.view]) + '">' + subs.map(function (s) { return '<a href="' + href(S.view, s) + '"' + (s === S.sub ? ' aria-current="true"' : "") + ">" + esc(t("subs")[s]) + "</a>"; }).join("") + "</nav></section>";
  }
  function sigCard(i, compact) {
    var names = (i.names || []).map(function (n) { return tk(n.ticker) + " " + pill("", t("dir")[n.direction]) + (n.order === "second" ? " " + term("second_order", t("second")) : ""); }).join(" &nbsp; ");
    var head = '<p class="muted small">' + (isNew(i.run) ? newDot() : "") + esc(i.date) + " · " + esc(t("ty")[i.type] || i.type) + " · " + dirPill(i.direction) + "</p><h3>" + link(i.url, L(i, "title")) + "</h3>" +
      '<p class="scores"><span>' + term("evidence", t("evidence")) + " " + score(i.evidence) + "</span><span>" + term("market", t("market")) + " " + score(i.market) + "</span>" + (compact ? "<span>" + (i.names || []).map(function (n) { return tk(n.ticker); }).join(" ") + "</span>" : "") + "</p>";
    if (compact) return head;
    return '<div class="card sig">' + head + '<p class="muted small">' + esc(t("conf")) + ": " + esc(t("confv")[i.confidence] || i.confidence) + " · " + esc(t(i.source_kind + "_src")) + (i.single_source ? " · " + esc(t("single")) : "") + "</p>" +
      (names ? "<p>" + names + "</p>" : "") + "<p><b>" + esc(t("soWhat")) + ":</b> " + esc(L(i, "so_what")) + '</p><p class="muted small"><b>' + esc(t("changes")) + ":</b> " + esc(L(i, "changes_view")) + "</p></div>";
  }
  function evLine(e) {
    var what = t("ev")[e.type] || e.type, detail = e.type === "registered" ? phase(e.to) : e.type === "results_posted" ? "" : e.type === "status" ? status(e.from) + " → " + status(e.to) : e.type === "phase" ? phase(e.from) + " → " + phase(e.to) : e.from + " → " + e.to;
    return pill(e.direction, what) + " " + esc(detail);
  }
  function byNct(id) { return D.trialMap[id]; }
  function funnel() {
    var P = D.stats.by_phase_core, keys = Object.keys(P).filter(function (p) { return P[p].total; }), max = Math.max.apply(null, keys.map(function (p) { return P[p].total; }));
    var rows = keys.map(function (p) {
      var r = P[p], segs = ["active", "completed", "stopped", "unknown"].map(function (b) { return r[b] ? '<i class="seg-' + b + '" style="flex:' + r[b] + '" title="' + esc(t(b)) + ": " + r[b] + '">' + r[b] + "</i>" : ""; }).join("");
      return '<span class="lab">' + esc(phase(p)) + '</span><span class="stack" style="width:' + (100 * r.total / max).toFixed(1) + '%">' + segs + '</span><span class="tot">' + r.total + "</span>";
    }).join("");
    return '<div class="funnel">' + rows + '</div><p class="legend">' + ["active", "completed", "stopped", "unknown"].map(function (b) { return '<span><i class="seg-' + b + '"></i>' + esc(t(b)) + "</span>"; }).join("") + "</p>";
  }
  var V = {
    today: function () {
      var tb = D.today_block, s = D.stats;
      var sig = tb.signal_ids.map(function (id) { return D.sigMap[id]; }).filter(Boolean), ev = tb.event_ids.map(function (id) { return D.evMap[id]; }).filter(Boolean), due = tb.due_30d.map(byNct).filter(Boolean);
      function blk(title, more, body, empty) { return '<div class="blk"><div class="row"><h2>' + title + '</h2><a class="more" href="' + more + '">' + esc(t("seeAll")) + " →</a></div>" + (body ? "<ul>" + body + "</ul>" : '<p class="muted">' + esc(empty) + "</p>") + "</div>"; }
      var b1 = blk(esc(t("tSignals")) + ' <span class="muted small">' + esc(f("scanOf", { d: tb.signals_run || "–" })) + "</span>", href("signals"), sig.map(function (i) { return "<li>" + sigCard(i, true) + "</li>"; }).join(""), t("noSignals"));
      var b2 = blk(esc(t("tChanges")), href("trials", "changes"), ev.map(function (e) { return "<li>" + (isNew(e.detected) ? newDot() : "") + '<span class="muted small">' + esc(e.date) + "</span> " + co(byNct(e.nct) ? byNct(e.nct).co : e.sponsor_id) + "<br>" + evLine(e) + ' <span class="small">' + nct(e.nct) + "</span></li>"; }).join(""), t("noChanges"));
      var b3 = blk(esc(t("tDue")) + (tb.due_30d_n > due.length ? ' <span class="muted small">' + tb.due_30d_n + "</span>" : ""), href("calendar"), due.map(function (x) { return '<li><span class="muted small">' + esc(x.primary_completion) + "</span> " + co(x.co) + " " + tk(x.ticker) + "<br>" + esc((x.interventions || [])[0] || "") + " · " + esc(phase(x.phase)) + ' <span class="small">' + nct(x.nct) + "</span></li>"; }).join("") +
        (tb.overdue.length ? '<li class="muted small">' + esc(f("overdue", { n: tb.overdue.length })) + "</li>" : ""), t("noDue"));
      var tiles = [[s.core_drugs, "coreDrugs"], [s.core_trials, "core"], [s.core_sponsors, "sponsors"], [s.core_phase3_live, "p3"], [s.core_stopped, "stoppedN"], [s.core_with_results, "results"]];
      var bo = s.by_origin || {};
      var pc = Math.min(100, 100 * s.phase2_completed_randomised / s.phase2_threshold);
      return '<section class="today">' + b1 + b2 + b3 + "</section>" +
        "<section><h2>" + esc(t("tilesH")) + '</h2><div class="tiles">' + tiles.map(function (x) { return '<div class="tile"><b>' + x[0] + "</b><span>" + esc(t(x[1])) + "</span></div>"; }).join("") + '</div><p class="note" style="margin-top:10px">' + esc(f("originLine", { n: s.ai_company_trials, a: bo.platform, b: bo.acquired, p: bo.partner, d: bo.not_stated })) + ' <a href="' + href("more", "method") + '">' + esc(t("subs").method) + "</a></p></section>" +
        "<section><h2>" + esc(t("phaseH")) + "</h2>" + funnel() + "</section>" +
        '<section class="verdict"><h2>' + esc(t("verdictH")) + '</h2><div class="meter"><i style="width:' + pc + '%"></i></div><p class="note">' + esc(f("verdictP", { n: s.phase2_completed_randomised, t: s.phase2_threshold })) + "</p><h3>" + esc(t("apprH")) + '</h3><p class="note">' + esc((D.approvals || []).some(function (a) { return a.tier === "ai"; }) ? "" : t("apprAi")) + "</p>" +
        ((D.approvals || []).length ? '<ul class="plain">' + D.approvals.map(function (a) { return "<li><b>" + esc(a.drug) + "</b> · " + esc(a.regulator) + " " + esc(a.date) + " · " + co(a.co) + " " + tk(a.co) + " · " + esc(t(a.tier)) + "<br>" + esc(L(a, "text")) + ' <span class="small">' + link(a.source.url, a.source.publisher) + "</span></li>"; }).join("") + "</ul>" : "") + "</section>";
    },
    signals: function () {
      var st = D.signals_state || {}, items = D.signals || [];
      var head = '<p class="disc">' + esc(D.disclaimer[lang]) + '</p><p class="note">' + esc(t("sigNote")) + "</p>" +
        '<p class="muted small">' + esc(f("sigLast", { d: st.last_date || "–" })) + (st.weekly ? ' · <a href="weekly.html">' + esc(t("weekly")) + " " + esc(st.weekly) + "</a>" : "") + "</p>";
      var fu = (st.followups || []).length ? "<section><h2>" + esc(t("followups")) + '</h2><ul class="plain">' + st.followups.map(function (x) { return "<li>" + esc(L(x, "text")) + "</li>"; }).join("") + "</ul></section>" : "";
      var op = (D.open || []).length ? "<section><h2>" + esc(t("watching")) + '</h2><ul class="plain">' + D.open.map(function (o) { return "<li>" + esc(o.due || "") + " " + esc(L(o, "text")) + "</li>"; }).join("") + "</ul></section>" : "";
      var src = st.sources ? "<section><h2>" + esc(t("sigChecked")) + '</h2><p class="muted small">' + Object.keys(st.sources).map(function (k) { return esc(t("srcs")[k] || k) + ": " + esc(srcStatus(st.sources[k])); }).join(" · ") + "</p></section>" : "";
      var cols = [{ key: "c", label: t("company"), nolabel: 1, cls: "lead", cell: function (c) { return co(c.ticker || c.id, lang === "zh" && c.name_zh ? c.name_zh : c.name); } },
        { key: "r", label: t("role"), cell: function (c) { return esc(t("roles")[c.role] || c.role) + (c.added_by === "scanner" ? ' <span class="muted small">· ' + esc(f("wAdded", { d: c.added })) + "</span>" : ""); } },
        { key: "l", label: t("listing"), cell: function (c) { return c.ticker ? tk(c.ticker) : c.proxy ? esc(t("via")) + " " + tk(c.proxy) : esc(t("priv")); } }];
      return "<section>" + head + (items.length ? '<div class="sigs">' + items.map(function (i) { return sigCard(i); }).join("") + "</div>" : '<p class="muted">' + esc(t("none")) + "</p>") + "</section>" + fu + op + src +
        "<section><h2>" + esc(t("watchH")) + "</h2>" + table("t-watch", D.watchlist || [], cols) + "</section>";
    },
    trials: function () {
      if (S.sub === "changes") {
        var cols = [{ key: "date", label: t("date"), cls: "d", nolabel: 1, val: function (e) { return e.date; }, cell: function (e) { return esc(e.date); } },
          { key: "company", label: t("company"), cls: "lead", nolabel: 1, cell: function (e) { return co(byNct(e.nct) ? byNct(e.nct).co : e.sponsor_id); } },
          { key: "change", label: t("change"), nolabel: 1, cell: function (e) { return evLine(e) + (e.why_stopped ? '<br><span class="muted small">' + esc(e.why_stopped) + "</span>" : ""); } },
          { key: "nct", label: t("trial"), cls: "d", cell: function (e) { return nct(e.nct); } }];
        DEF = "-date";
        return subnav() + '<section><p class="note">' + esc(f("changesNote", { d: D.baseline || "" })) + "</p>" + (D.events.length ? table("t-main", D.events, cols, { isNew: function (e) { return isNew(e.detected); } }) : '<p class="muted">' + esc(t("noChanges")) + "</p>") + "</section>";
      }
      if (S.sub === "companies") {
        var cs = Object.keys(D.companies).map(function (k) { return D.companies[k]; }).filter(function (c) { return c.trials && (!S.listed || c.ticker); });
        var ccols = [{ key: "name", label: t("company"), cls: "lead", nolabel: 1, val: function (c) { return c.name.toLowerCase(); }, cell: function (c) { return co(c.key); } },
          { key: "tk", label: t("ticker"), cell: function (c) { return tk(c.ticker); } },
          { key: "spark", label: t("year"), cell: function (c) { return c.quote ? spark(c.quote.spark, 84, 20) : ""; } },
          { key: "basis", label: t("basis"), term: "ai_native", cell: function (c) { return c.tier ? esc(t(c.tier)) : esc(t("roles")[c.role] || ""); } },
          { key: "trials", label: t("trials"), num: 1, val: function (c) { return c.trials; }, cell: function (c) { return c.trials; } },
          { key: "stopped", label: t("stopped"), num: 1, val: function (c) { return c.stopped; }, cell: function (c) { return c.stopped; } },
          { key: "furthest", label: t("furthest"), cell: function (c) { return esc(c.furthest ? phase(c.furthest) : ""); } },
          { key: "mcap", label: t("mcap"), num: 1, val: function (c) { return c.quote ? c.quote.mcap_usd : null; }, cell: function (c) { return c.quote && c.quote.mcap_usd ? usd(c.quote.mcap_usd) : ""; } }];
        if (!D.prices_shown) ccols = ccols.filter(function (c) { return c.key !== "spark" && c.key !== "mcap"; });
        DEF = "-trials";
        return subnav() + '<section><div class="filters"><label class="chk"><input type="checkbox" id="f-listed"' + (S.listed ? " checked" : "") + "> " + esc(t("listedOnly")) + "</label></div>" + table("t-main", cs, ccols) + "</section>";
      }
      var stop = S.sub === "stopped", base = stop ? D.trials.filter(function (x) { return x.bucket === "stopped"; }) : D.trials;
      var colsT = trialCols(stop ? [{ key: "why", label: t("why"), cell: function (x) { return esc(x.why_stopped || ""); } }] : [{ key: "updated", label: t("updated"), cls: "d", val: function (x) { return x.last_update; }, cell: function (x) { return esc(x.last_update); } }]);
      DEF = "-updated";
      V._cur = { base: base, cols: colsT, opt: { page: 1, detail: trialDetail, id: function (x) { return x.nct; } } };
      return subnav() + "<section>" + (stop ? '<p class="note">' + esc(t("stoppedNote")) + "</p>" : "") + filters(base, !stop) + table("t-main", trialRows(base), colsT, V._cur.opt) + "</section>";
    },
    calendar: function () {
      if (S.sub === "deals") {
        var dc = [{ key: "date", label: t("date"), cls: "d", nolabel: 1, val: function (d) { return d.date; }, cell: function (d) { return esc(d.date) + (d.date_approx ? "*" : ""); } },
          { key: "deal", label: t("deal"), cls: "lead", nolabel: 1, cell: function (d) { return esc(d.ai) + " – " + esc(d.pharma) + '<br><span class="muted small" style="font-weight:400">' + esc(L(d, "note")) + "</span>"; } },
          { key: "tk", label: t("ticker"), cell: function (d) { return (d.tickers || []).map(tk).join(" "); } },
          { key: "headline", label: t("headline"), term: "headline", num: 1, val: function (d) { return d.headline_usd; }, cell: function (d) { return d.headline_usd == null ? esc(t("undisclosed")) : (d.headline_more_than ? esc(t("moreThan")) : "") + dealUsd(d.headline_usd); } },
          { key: "upfront", label: t("upfront"), term: "upfront", num: 1, val: function (d) { return d.upfront_usd; }, cell: function (d) { return d.upfront_usd == null ? esc(t("undisclosed")) : dealUsd(d.upfront_usd); } },
          { key: "share", label: t("share"), num: 1, val: function (d) { return d.upfront_share; }, cell: function (d) { return d.upfront_share == null ? "" : '<span class="share"><i style="width:' + Math.max(1, d.upfront_share * 100).toFixed(1) + '%"></i></span>' + (d.upfront_share * 100).toFixed(1) + "%"; } },
          { key: "src", label: t("source"), cell: function (d) { return link(d.source.url, d.source.publisher); } }];
        DEF = "-date";
        return subnav() + '<section><p class="note">' + esc(t("dealsNote")) + "</p>" + table("t-main", D.deals || [], dc) + "</section>";
      }
      var rows = D.trials.filter(function (x) { return (!S.listed || x.ticker) && x.bucket === "active" && x.phase_rank >= 3 && x.primary_completion && x.primary_completion >= D.today; })
        .map(function (x) { return { sort: x.primary_completion, when: x.primary_completion, x: x }; });
      (D.catalysts || []).forEach(function (c) { if (c.sort >= D.today) rows.push({ sort: c.sort, when: c.when, c: c }); });
      rows.sort(function (a, b) { return a.sort < b.sort ? -1 : a.sort > b.sort ? 1 : 0; });
      var cc = [{ key: "due", label: t("readout"), term: "primary_completion", cls: "d", nolabel: 1, cell: function (r) { return esc(r.when); } },
        { key: "ev", label: t("event"), cls: "lead", nolabel: 1, cell: function (r) { return r.c ? pill("active", t("regDecision")) + " " + esc(L(r.c, "title")) + '<br><span class="muted small" style="font-weight:400">' + esc(L(r.c, "note")) + "</span>" : esc((r.x.interventions || []).slice(0, 2).join(", ")) + " · " + esc(phase(r.x.phase)) + '<br><span class="muted small" style="font-weight:400">' + esc((r.x.conditions || []).slice(0, 2).join("; ")) + "</span>"; } },
        { key: "co", label: t("company"), cell: function (r) { return r.c ? (r.c.tickers || []).map(tk).join(" ") : (r.x.via === "sponsor" ? co(r.x.co) : esc(r.x.lead_sponsor)) + " " + tk(r.x.ticker); } },
        { key: "n", label: t("n"), num: 1, cell: function (r) { return r.x && r.x.enrollment != null ? r.x.enrollment : ""; } },
        { key: "src", label: t("source"), cls: "d", cell: function (r) { return r.c ? link(r.c.source.url, r.c.source.publisher) : nct(r.x.nct); } }];
      var W = 720, t0 = new Date(D.today + "T00:00:00Z").getTime(), yr = 365 * 864e5, lanes = {}, marks = "";
      rows.forEach(function (r) {
        var x = (new Date(r.sort + "T00:00:00Z").getTime() - t0) / yr; if (x > 1) return;
        var px = 10 + x * (W - 20), slot = Math.round(px / 7); lanes[slot] = (lanes[slot] || 0) + 1; var y = 50 - lanes[slot] * 8;
        marks += r.c ? '<rect class="reg" x="' + (px - 3.5).toFixed(1) + '" y="' + (y - 3.5) + '" width="7" height="7"><title>' + esc(r.when + " " + L(r.c, "title")) + "</title></rect>" : '<circle cx="' + px.toFixed(1) + '" cy="' + y + '" r="3"><title>' + esc(r.when + " " + (r.x.interventions[0] || "") + " · " + r.x.phase) + "</title></circle>";
      });
      var ticks = "", d0 = new Date(t0);
      for (var m = 1; m <= 12; m += 2) { var d = new Date(Date.UTC(d0.getUTCFullYear(), d0.getUTCMonth() + m, 1)), px2 = 10 + (d.getTime() - t0) / yr * (W - 20); if (px2 > W - 10) break; ticks += '<line x1="' + px2.toFixed(1) + '" y1="54" x2="' + px2.toFixed(1) + '" y2="58"/><text x="' + px2.toFixed(1) + '" y="70" text-anchor="' + (px2 > W - 40 ? "end" : "middle") + '">' + d.toISOString().slice(0, 7) + "</text>"; }
      var strip = '<div class="strip"><svg viewBox="0 0 ' + W + ' 74" role="img" aria-label="' + esc(t("stripLab")) + '"><line x1="10" y1="54" x2="' + (W - 10) + '" y2="54"/>' + ticks + marks + '</svg><p class="muted small" style="margin:2px 0 6px">' + esc(t("stripLab")) + "</p></div>";
      return subnav() + '<section><p class="note">' + esc(t("calNote")) + '</p><div class="filters"><label class="chk"><input type="checkbox" id="f-listed"' + (S.listed ? " checked" : "") + "> " + esc(t("listedOnly")) + "</label></div>" + strip + table("t-main", rows, cc) + "</section>";
    },
    more: function () {
      if (S.sub === "reading") return subnav() + '<section><p class="note">' + esc(t("readNote")) + '</p><div class="cards">' + D.reading.map(function (r) {
        var h = D.headlines[r.id] || [];
        return '<div class="card"><h3>' + link(r.url, r.name) + '</h3><p class="muted small">' + esc(lang === "zh" ? (CAD_ZH[r.cadence] || r.cadence) : r.cadence) + "</p><p>" + esc(L(r, "why")) + "</p>" +
          (h.length ? '<ul class="small">' + h.map(function (i) { return "<li>" + link(i.url, i.title) + ' <span class="muted">' + esc(i.date || "") + "</span></li>"; }).join("") + "</ul>" : (r.feed ? "" : '<p class="muted small">' + esc(t("noFeed")) + "</p>")) + "</div>";
      }).join("") + "</div></section>";
      if (S.sub === "method") return subnav() + "<section><h2>" + esc(t("methodH")) + "</h2>" + t("methodP").map(function (p) { return '<p class="note">' + esc(p) + "</p>"; }).join("") +
        (D.assets || []).map(function (a) { return '<p class="note"><b>' + esc(a.name) + ":</b> " + esc(L(a, "note")) + " " + link(a.source, t("source")) + "</p>"; }).join("") +
        "</section><section><h2>" + esc(t("rubricH")) + '</h2><p class="note">' + esc(t("rubricP")) + '</p><ol class="rubric">' + t("rubric").map(function (r) { return "<li>" + esc(r) + "</li>"; }).join("") + "</ol></section>";
      if (S.sub === "glossary") return subnav() + '<section><p class="note">' + esc(t("glossNote")) + '</p><dl class="gloss">' + (D.glossary || []).map(function (g) { return "<dt>" + esc(L(g, "term")) + "</dt><dd>" + esc(L(g, "def")) + "</dd>"; }).join("") + "</dl></section>";
      return subnav() + '<section><p class="note">' + esc(t("longNote")) + '</p><div class="cards">' + D.longevity.map(function (m) {
        return '<div class="card"><h3>' + esc(L(m, "title")) + "</h3>" + pill(m.status, t("st")[m.status] || m.status) + "<p><b>" + esc(t("now")) + ":</b> " + esc(L(m, "state")) + "</p><p><b>" + esc(t("signal")) + ":</b> " + esc(L(m, "signal")) +
          '</p><p class="muted small">' + link(m.source, t("source")) + " · " + esc(t("asOf")) + " " + esc(m.as_of) + "</p></div>";
      }).join("") + "</div></section>";
    }
  };

  // ---- company panel ----
  function panelHtml(c) {
    var q = c.quote, p = c.profile, rows = D.trials.filter(function (x) { return x.co === c.key; });
    var listing = c.ticker ? tk(c.ticker) + (c.market ? ' <span class="muted small">' + esc(c.market) + "</span>" : "") : c.proxy ? esc(t("pProxyA")) + " " + tk(c.proxy) + " " + esc(t("pProxyB")) : '<span class="muted small">' + esc(t("pPrivate")) + "</span>";
    var h = '<div class="phead"><div><h2 id="panel-title">' + esc(coName(c)) + '</h2><p class="small">' + listing + " · " + esc(c.tier ? t(c.tier) : (t("roles")[c.role] || "")) + (p && p.hq ? " · " + esc(p.hq) : "") + '</p></div><button type="button" class="btn" id="panel-close">' + esc(t("pClose")) + " ×</button></div>";
    if (p) h += "<h3>" + esc(t("pOverview")) + "</h3><p>" + esc(L(p, "what")) + "</p>" + (L(p, "ai") ? '<p><b class="small">' + esc(t("pAi")) + ":</b> " + esc(L(p, "ai")) + "</p>" : "") + (L(p, "lead") ? '<p><b class="small">' + esc(t("pLead")) + ":</b> " + esc(L(p, "lead")) + "</p>" : "") +
      '<p class="muted small">' + [p.founded ? p.founded : "", p.listed || "", link(p.source.url, t("pSrc") + ": " + p.source.publisher), t("asOf") + " " + p.as_of, p.checked === "partly" ? esc(t("profPartly")) : ""].filter(Boolean).join(" · ") + "</p>";
    function kv(k, v, g) { return v == null || v === "" ? "" : "<div><span>" + (g ? term(g, k) : esc(k)) + "</span><b>" + v + "</b></div>"; }
    if (q && q.price != null) {
      var cur = q.currency === "USD" ? "$" : q.currency === "HKD" ? "HK$" : (q.currency || "") + " ";
      h += "<h3>" + esc(t("pMarket")) + '</h3><div class="mkt"><div class="row" style="margin:0"><div><span class="muted small">' + esc(t("pPrice")) + '</span><br><span class="px">' + esc(cur) + money(q.price) + "</span></div>" + spark(q.spark, 200, 48) + "</div>" +
        (q.pos52 != null ? '<div class="range" role="img" aria-label="' + esc(t("year")) + '"><i style="left:' + (100 * q.pos52).toFixed(1) + '%"></i></div><div class="rl"><span>' + esc(cur) + money(q.lo52) + "</span><span>" + term("range52", q.range_since ? f("pSince", { d: q.range_since }) : t("pRange")) + "</span><span>" + esc(cur) + money(q.hi52) + "</span></div>" : "") +
        '<div class="kv">' + kv(t("mcap"), q.mcap_usd ? (q.currency !== "USD" ? "US" : "") + usd(q.mcap_usd) : "", "mcap") + kv(t("pe") + (q.pe_fiscal_year ? " *" : ""), q.pe != null ? q.pe.toFixed(1) : (q.loss_making ? esc(t("lossMaking")) : esc(t("pNoPe"))), "pe") +
        kv(t("p1m"), q.chg_1m == null ? "" : pct(q.chg_1m)) + kv(t("p3m"), q.chg_3m == null ? "" : pct(q.chg_3m)) + kv(t("pYtd"), q.chg_ytd == null ? "" : pct(q.chg_ytd)) +
        '</div><p class="muted small" style="margin:10px 0 0">' + esc(f("pMarketNote", { d: q.as_of })) + (q.source ? " " + esc(q.source) + "." : "") + (q.pe_fiscal_year ? " * " + esc(t("pFy")) : "") + "</p></div>";
    }
    if (q && (q.eps_ttm != null || q.revenue_ttm_usd != null || q.rd_ttm_usd != null || q.cash_usd != null)) {
      h += "<h3>" + esc(t("pFin")) + '</h3><div class="mkt"><div class="kv" style="margin:0">' + kv(t("pRev"), q.revenue_ttm_usd != null ? usd(q.revenue_ttm_usd) : "") + kv(t("pRd"), q.rd_ttm_usd != null ? usd(q.rd_ttm_usd) : "") +
        kv(t("pEps"), q.eps_ttm != null ? (q.eps_ttm < 0 ? "−$" : "$") + Math.abs(q.eps_ttm).toFixed(2) : "") + kv(q.cash_incl_inv ? t("pCashInv") : t("pCash"), q.cash_usd != null ? usd(q.cash_usd) : "") +
        '</div><p class="muted small" style="margin:10px 0 0">' + esc(f("pFinNote", { d: q.fundamentals_as_of || q.cash_as_of || "" })) + "</p></div>";
    }
    h += "<h3>" + esc(t("pLedger")) + "</h3>";
    if (!rows.length) h += '<p class="muted">' + esc(t("pNoTrials")) + "</p>";
    else {
      var max = Math.max.apply(null, Object.keys(c.by_phase).map(function (k) { return c.by_phase[k].total; }));
      h += "<p>" + esc(f("pTrials", { n: c.trials, s: c.stopped })) + ' · <a href="' + href("trials", "all", { company: c.key }) + '" data-close="1">' + esc(t("pSee")) + '</a></p><div class="funnel" style="border:0;padding:0;background:none">' + Object.keys(c.by_phase).map(function (k) {
        var r = c.by_phase[k]; return '<span class="lab">' + esc(phase(k)) + '</span><span class="stack" style="width:' + (100 * r.total / max).toFixed(1) + '%">' + ["active", "completed", "stopped", "unknown"].map(function (b) { return r[b] ? '<i class="seg-' + b + '" style="flex:' + r[b] + '" title="' + esc(t(b)) + '">' + r[b] + "</i>" : ""; }).join("") + '</span><span class="tot">' + r.total + "</span>"; }).join("") + "</div>";
      var due = rows.filter(function (x) { return x.bucket === "active" && x.phase_rank >= 3 && x.primary_completion >= D.today; }).sort(function (a, b) { return a.primary_completion < b.primary_completion ? -1 : 1; }).slice(0, 5);
      if (due.length) h += "<h3>" + term("primary_completion", t("pNext")) + "</h3><ul>" + due.map(function (x) { return '<li><span class="muted small">' + esc(x.primary_completion) + "</span> " + esc(x.interventions[0] || "") + " · " + esc(phase(x.phase)) + " · " + esc((x.conditions || [])[0] || "") + ' <span class="small">' + nct(x.nct) + "</span></li>"; }).join("") + "</ul>";
      var st = rows.filter(function (x) { return x.bucket === "stopped"; });
      if (st.length) h += "<h3>" + esc(t("pStopped")) + "</h3><ul>" + st.map(function (x) { return "<li>" + esc(x.interventions[0] || "") + " · " + esc(phase(x.phase)) + " · " + pill("stopped", status(x.status)) + ' <span class="small">' + nct(x.nct) + "</span>" + (x.why_stopped ? '<br><span class="muted small">' + esc(x.why_stopped) + "</span>" : "") + "</li>"; }).join("") + "</ul>";
    }
    var mine = (D.drugs || []).filter(function (d) { return c.sponsor_ids.indexOf(d.sponsor_id) >= 0; });
    if (mine.length) h += "<h3>" + esc(t("pDrugs")) + "</h3><ul>" + mine.map(function (d) { return "<li><b>" + esc(d.drug) + "</b> " + pill(d.origin === "platform" ? "active" : "", t("og")[d.origin] || d.origin) + (L(d, "ai_role") ? "<br>" + esc(L(d, "ai_role")) : "") + (d.source ? ' <span class="small">' + link(d.source.url, d.source.publisher || t("source")) + (d.checked === "snippet" ? " (" + esc(t("snip")) + ")" : "") + "</span>" : "") + "</li>"; }).join("") + "</ul>";
    var ap = (D.approvals || []).filter(function (a) { return a.co === c.key; });
    if (ap.length) h += "<h3>" + esc(t("pApproved")) + "</h3><ul>" + ap.map(function (a) { return "<li><b>" + esc(a.drug) + "</b> · " + esc(a.regulator) + " " + esc(a.date) + "<br>" + esc(L(a, "text")) + ' <span class="small">' + link(a.source.url, a.source.publisher) + "</span></li>"; }).join("") + "</ul>";
    var sg = (D.signals || []).filter(function (i) { return (i.names || []).some(function (n) { return n.ticker === c.ticker || (c.proxy && n.ticker === c.proxy); }) && (c.ticker || i.title_en.indexOf(c.name.split(" ")[0]) >= 0); });
    if (sg.length) h += "<h3>" + esc(t("pSignals")) + "</h3><ul>" + sg.slice(0, 6).map(function (i) { return '<li><span class="muted small">' + esc(i.date) + " · " + esc(t("ty")[i.type]) + "</span><br>" + link(i.url, L(i, "title")) + "<br>" + esc(t("evidence")) + " " + score(i.evidence) + " &nbsp; " + esc(t("market")) + " " + score(i.market) + "</li>"; }).join("") + "</ul>";
    var dl = (D.deals || []).filter(function (d) { return c.ticker && (d.tickers || []).indexOf(c.ticker) >= 0 || d.ai === c.name || d.pharma === c.name; });
    if (dl.length) h += "<h3>" + esc(t("pDeals")) + "</h3><ul>" + dl.map(function (d) { return '<li><span class="muted small">' + esc(d.date) + "</span> " + esc(d.ai) + " – " + esc(d.pharma) + "<br>" + (d.upfront_usd == null ? esc(t("undisclosed")) : esc(t("upfront")) + " " + dealUsd(d.upfront_usd) + " · " + esc(t("headline")) + " " + (d.headline_more_than ? esc(t("moreThan")) : "") + dealUsd(d.headline_usd)) + ' <span class="small">' + link(d.source.url, d.source.publisher) + "</span></li>"; }).join("") + "</ul>";
    var ev = D.events.filter(function (e) { return byNct(e.nct) && byNct(e.nct).co === c.key; });
    if (ev.length) h += "<h3>" + esc(t("pChanges")) + "</h3><ul>" + ev.slice(0, 6).map(function (e) { return '<li><span class="muted small">' + esc(e.date) + "</span> " + evLine(e) + ' <span class="small">' + nct(e.nct) + "</span></li>"; }).join("") + "</ul>";
    var links = [];
    if (rows.length) links.push(link("https://clinicaltrials.gov/search?spons=" + encodeURIComponent(c.name.replace(/\s*\(.*/, "")), t("pCt")));
    if (c.ticker && c.market === "US") links.push(link("https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=" + encodeURIComponent(c.ticker) + "&type=&dateb=&owner=include&count=40", t("pSec")));
    if (c.ticker && c.market === "HK") links.push(link("https://www.hkex.com.hk/Market-Data/Securities-Prices/Equities/Equities-Quote?sym=" + parseInt(c.ticker, 10), t("pHk")));
    if (links.length) h += "<h3>" + esc(t("pLinks")) + "</h3><p>" + links.join(" · ") + "</p>";
    return h;
  }
  function drawPanel() {
    if (S.co && D && !D.companies[S.co]) go({ co: "" });       // an unknown key in a link is dropped
    var el = document.getElementById("panel"), bd = document.getElementById("backdrop"), c = S.co && D ? D.companies[S.co] : null;
    if (!c) { if (!el.hidden) { el.hidden = true; bd.hidden = true; document.body.style.overflow = ""; if (opener && document.contains(opener)) opener.focus(); opener = null; } return; }
    el.innerHTML = panelHtml(c); el.hidden = false; bd.hidden = false; document.body.style.overflow = "hidden"; el.scrollTop = 0;
    document.getElementById("panel-close").focus();
  }
  function closePanel() {
    if (!S.co) return;
    if (panelPushed) { panelPushed = false; history.back(); } else { go({ co: "" }); chrome(); drawPanel(); }
  }

  // ---- glossary popover ----
  function showPop(btn) {
    var g = (D.glossary || []).filter(function (x) { return x.key === btn.getAttribute("data-g"); })[0], pop = document.getElementById("pop");
    if (!g) return;
    pop.innerHTML = "<b>" + esc(L(g, "term")) + "</b>" + esc(L(g, "def")); pop.hidden = false;
    var r = btn.getBoundingClientRect(), w = pop.offsetWidth, hgt = pop.offsetHeight, x = Math.max(12, Math.min(window.innerWidth - w - 12, r.left)), y = r.bottom + 6;
    if (y + hgt > window.innerHeight - 8) y = Math.max(8, r.top - hgt - 6);
    pop.style.left = x + "px"; pop.style.top = y + "px"; pop._for = btn;
  }
  function hidePop() { var p = document.getElementById("pop"); p.hidden = true; p._for = null; }

  // ---- site-wide search ----
  function gsHide() { var r = document.getElementById("gs-res"); r.hidden = true; document.getElementById("gs").setAttribute("aria-expanded", "false"); }
  function gsRun(raw) {
    var q = fold(raw), box = document.getElementById("gs-res");
    if (!D || q.length < 2) return gsHide();
    function has(s) { return fold(s).indexOf(q) >= 0; }
    var h = "";
    var cos = Object.keys(D.companies).map(function (k) { return D.companies[k]; }).filter(function (c) { return has([c.name, c.name_zh, c.ticker, c.key].join(" ")); })
      .sort(function (a, b) { return (fold(b.ticker) === q) - (fold(a.ticker) === q) || b.trials - a.trials; });
    if (cos.length) h += "<h4>" + esc(t("gsCo")) + "</h4>" + cos.slice(0, 6).map(function (c) {
      return '<button type="button" class="gs-item" data-co="' + esc(c.key) + '">' + esc(coName(c)) + (c.ticker ? ' <span class="tk">' + esc(c.ticker) + "</span>" : "") + "<small>" + esc(c.tier ? t(c.tier) : (t("roles")[c.role] || "")) + (c.trials ? " · " + esc(f("gsTrialsN", { n: c.trials })) : "") + "</small></button>"; }).join("");
    var tr = D.trials.filter(function (x) { return x.search.indexOf(q) >= 0; });
    if (tr.length) h += "<h4>" + esc(t("gsTr")) + "</h4>" + tr.slice(0, 5).map(function (x) {
      return '<a class="gs-item" href="' + href("trials", "all", { q: x.nct }) + '">' + esc((x.interventions || []).slice(0, 2).join(", ") || x.title) + " · " + esc(phase(x.phase)) + "<small>" + esc(D.companies[x.co] ? coName(D.companies[x.co]) : x.lead_sponsor) + " · " + esc((x.conditions || [])[0] || "") + " · " + esc(x.nct) + "</small></a>"; }).join("") +
      (tr.length > 5 ? '<a class="gs-item" href="' + href("trials", "all", { q: raw.trim() }) + '">' + esc(f("gsAll", { n: tr.length })) + " →</a>" : "");
    var sg = (D.signals || []).filter(function (i) { return has([i.title_en, i.title_zh, i.so_what_en, i.so_what_zh, (i.names || []).map(function (n) { return n.ticker; }).join(" ")].join(" ")); });
    if (sg.length) h += "<h4>" + esc(t("gsSig")) + "</h4>" + sg.slice(0, 4).map(function (i) { return '<a class="gs-item" href="' + href("signals") + '">' + esc(L(i, "title")) + "<small>" + esc(i.date) + " · " + esc(t("ty")[i.type] || i.type) + "</small></a>"; }).join("");
    var dl = (D.deals || []).filter(function (d) { return has([d.ai, d.pharma, (d.tickers || []).join(" ")].join(" ")); });
    if (dl.length) h += "<h4>" + esc(t("gsDeals")) + "</h4>" + dl.slice(0, 4).map(function (d) { return '<a class="gs-item" href="' + href("calendar", "deals") + '">' + esc(d.ai) + " – " + esc(d.pharma) + "<small>" + esc(d.date) + (d.upfront_usd != null ? " · " + esc(t("upfront")) + " " + dealUsd(d.upfront_usd) : "") + "</small></a>"; }).join("");
    var gl = (D.glossary || []).filter(function (g) { return has(g.term_en + " " + g.term_zh); });
    if (gl.length) h += "<h4>" + esc(t("gsTerms")) + "</h4>" + gl.slice(0, 3).map(function (g) { return '<a class="gs-item" href="' + href("more", "glossary") + '">' + esc(L(g, "term")) + "<small>" + esc(L(g, "def")) + "</small></a>"; }).join("");
    box.innerHTML = h || '<p class="gs-none">' + esc(f("gsNone", { q: raw.trim() })) + "</p>";
    box.hidden = false; document.getElementById("gs").setAttribute("aria-expanded", "true");
  }

  // ---- render ----
  function chrome() {
    document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
    document.title = t("nav")[S.view] + (S.sub ? " · " + t("subs")[S.sub] : "") + " · " + t("title");
    Array.prototype.forEach.call(document.querySelectorAll("[data-t]"), function (el) { el.textContent = t(el.getAttribute("data-t")); });
    var lb = document.getElementById("lang"); lb.textContent = lang === "zh" ? "English" : "中文"; lb.setAttribute("lang", lang === "zh" ? "en" : "zh-CN"); lb.setAttribute("aria-label", lang === "zh" ? "Switch to English" : "切换到中文");
    var gs = document.getElementById("gs"); gs.placeholder = t("gsPh"); gs.setAttribute("aria-label", t("gsPh"));
    document.getElementById("nav").setAttribute("aria-label", lang === "zh" ? "栏目" : "Sections");
    var fresh = { signals: D && (D.signals || []).some(function (i) { return isNew(i.run); }), trials: D && D.events.some(function (e) { return isNew(e.detected); }) };
    document.getElementById("nav").innerHTML = Object.keys(VIEWS).map(function (k) { return '<a href="#' + k + '"' + (k === S.view ? ' aria-current="page"' : "") + ">" + esc(t("nav")[k]) + (fresh[k] ? '<span class="badge" title="' + esc(t("newLab")) + '"></span>' : "") + "</a>"; }).join("");
  }
  function count() {
    var c = document.getElementById("count"), b = document.getElementById("f-clear");
    if (c && V._cur) c.textContent = f("shown", { a: trialRows(V._cur.base).length, b: V._cur.base.length });
    if (b) b.hidden = !(S.q || S.phase || (S.status && S.sub !== "stopped") || S.company || S.origin || S.listed);
  }
  function render(keepScroll) {
    chrome();
    if (!D) return;
    V._cur = null; DEF = "";
    document.getElementById("main").innerHTML = V[S.view]();
    document.getElementById("stamp").textContent = f("generated", { d: D.generated_at });
    count(); drawPanel();
    if (!keepScroll) window.scrollTo(0, 0);
  }
  function redrawBody() {   // filters and sort change the table body only, so focus stays in the search box
    var tb = document.getElementById("t-main");
    if (!tb || !V._cur) return render(true);
    var tmp = document.createElement("table"); tmp.innerHTML = thead(V._cur.cols) + tbody(sorted(trialRows(V._cur.base), V._cur.cols), V._cur.cols, V._cur.opt);
    tb.replaceChild(tmp.tHead, tb.tHead); tb.replaceChild(tmp.tBodies[0], tb.tBodies[0]); count();
  }
  var timer = null;
  var gsTimer = null;
  document.addEventListener("input", function (e) {
    if (e.target.id === "gs") { clearTimeout(gsTimer); var gv = e.target.value; gsTimer = setTimeout(function () { gsRun(gv); }, 120); return; }
    if (e.target.id !== "f-q") return;
    clearTimeout(timer); var v = e.target.value;
    timer = setTimeout(function () { go({ q: v.trim(), n: PAGE }); redrawBody(); }, 150);
  });
  document.addEventListener("change", function (e) {
    var id = e.target.id;
    if (id === "f-company") { go({ company: e.target.value, n: PAGE }); render(true); }
    else if (id === "f-phase") { go({ phase: e.target.value, n: PAGE }); render(true); }
    else if (id === "f-origin") { go({ origin: e.target.value, n: PAGE }); render(true); }
    else if (id === "f-sort") { go({ sort: e.target.value === DEF ? "" : e.target.value }); redrawBody(); }
    else if (id === "f-listed") { go({ listed: e.target.checked ? "1" : "", n: PAGE }); render(true); }
    else return;
    var el = document.getElementById(id); if (el) el.focus();
  });
  document.addEventListener("click", function (e) {
    if (!document.getElementById("gs-res").hidden && !(e.target.closest && e.target.closest(".gs"))) gsHide();
    if (e.target.closest && e.target.closest("#gs-res .gs-item")) setTimeout(gsHide, 0);
    if (e.target.classList && e.target.classList.contains("skip")) { e.preventDefault(); document.getElementById("main").focus(); return; }
    var el = e.target.closest ? e.target.closest("[data-co],[data-g],[data-sort],[data-status],[data-clear],[data-more],[data-open],[data-close],#panel-close,#backdrop,#lang") : null;
    var pop = document.getElementById("pop");
    if (!pop.hidden && (!el || !el.hasAttribute("data-g") || pop._for === el)) { var same = el && pop._for === el; hidePop(); if (same) return; }
    if (!el) return;
    if (el.id === "lang") { lang = lang === "zh" ? "en" : "zh"; store("ledger-lang", lang); render(true); return; }
    if (el.id === "panel-close" || el.id === "backdrop") return closePanel();
    if (el.hasAttribute("data-close")) return;
    if (el.hasAttribute("data-g")) { e.preventDefault(); return showPop(el); }
    if (el.hasAttribute("data-co")) {
      if (!S.co) { opener = el; panelPushed = true; return go({ co: el.getAttribute("data-co") }, true); }
      go({ co: el.getAttribute("data-co") }); return drawPanel();      // moving between companies replaces, so Back still closes
    }
    function refocus(sel) { var x = document.querySelector(sel); if (x) x.focus(); }
    if (el.hasAttribute("data-sort")) { var k = el.getAttribute("data-sort"), cs = S.sort || DEF, ns = cs === "-" + k ? k : "-" + k, def = DEF; go({ sort: ns === def ? "" : ns }); if (V._cur) redrawBody(); else render(true); return refocus('[data-sort="' + k + '"]'); }
    if (el.hasAttribute("data-status")) { var b = el.getAttribute("data-status"); go({ status: S.status === b ? "" : b, n: PAGE }); render(true); return refocus('[data-status="' + b + '"]'); }
    if (el.hasAttribute("data-clear")) { go({ q: "", phase: "", status: "", company: "", origin: "", listed: "", n: PAGE }); render(true); return refocus("#f-q"); }
    if (el.hasAttribute("data-more")) { S.n += PAGE; return redrawBody(); }
    if (el.hasAttribute("data-open")) { var id = el.getAttribute("data-open"); S.open = S.open === id ? null : id; redrawBody(); var again = document.querySelector('[data-open="' + id + '"]'); if (again) again.focus(); }
  });
  document.addEventListener("keydown", function (e) {
    if (e.target.id === "gs" && e.key === "Enter") { var first = document.querySelector("#gs-res .gs-item"); if (first) { e.preventDefault(); first.click(); } return; }
    if (e.target.id === "gs" && e.key === "ArrowDown") { var f1 = document.querySelector("#gs-res .gs-item"); if (f1) { e.preventDefault(); f1.focus(); } return; }
    if (e.key === "Escape") { if (!document.getElementById("gs-res").hidden) { gsHide(); return document.getElementById("gs").focus(); } if (!document.getElementById("pop").hidden) return hidePop(); if (S.co) closePanel(); }
    if (e.key === "Tab" && S.co && !document.getElementById("panel").hidden) {   // keep focus inside the open panel
      var p = document.getElementById("panel"), fs = p.querySelectorAll("a[href],button"), first = fs[0], last = fs[fs.length - 1];
      if (!first) return;
      if (!p.contains(document.activeElement)) { e.preventDefault(); first.focus(); }
      else if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });
  window.addEventListener("hashchange", function () {
    var prev = S, open = S.open; S = parse(); if (!S.co) panelPushed = false; gsHide();
    if (prev.view === S.view && prev.sub === S.sub) { S.n = prev.n; S.open = open; if (prev.co !== S.co && hashOf({ view: prev.view, sub: prev.sub, q: prev.q, phase: prev.phase, status: prev.status, company: prev.company, listed: prev.listed, sort: prev.sort }) === hashOf({ view: S.view, sub: S.sub, q: S.q, phase: S.phase, status: S.status, company: S.company, listed: S.listed, sort: S.sort })) { chrome(); return drawPanel(); } return render(true); }
    render(false);
  });
  window.addEventListener("scroll", function () { if (!document.getElementById("pop").hidden) hidePop(); }, true);
  document.addEventListener("focusin", function (e) { if (e.target.id === "gs" && e.target.value.trim().length >= 2) gsRun(e.target.value); });
  window.addEventListener("pagehide", function () { if (D) store("ledger-seen", D.generated_at); });
  S = parse(); chrome0();
  function chrome0() { Array.prototype.forEach.call(document.querySelectorAll("[data-t]"), function (el) { el.textContent = t(el.getAttribute("data-t")); }); }
  function get(url) { return fetch(url, { cache: "no-cache" }).then(function (r) { if (!r.ok) throw new Error(r.status); return r.json(); }); }
  get("data/ledger.json").catch(function () { return get("../data/ledger.json"); }).then(function (d) {
    D = d; D.trialMap = {}; D.sigMap = {}; D.evMap = {}; D.drugMap = {};
    (d.drugs || []).forEach(function (x) { D.drugMap[x.sponsor_id + ":" + x.drug] = x; });
    d.trials.forEach(function (x) { D.trialMap[x.nct] = x; }); (d.signals || []).forEach(function (x) { D.sigMap[x.id] = x; }); d.events.forEach(function (x) { D.evMap[x.id] = x; });
    render(true);
  }).catch(function (e) { document.getElementById("main").innerHTML = '<p class="muted">' + esc(t("failed")) + "</p>"; if (window.console) console.error(e); });
})();
