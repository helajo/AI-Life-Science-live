/* AI Biotech Watch: draws data/ledger.json. Every figure is computed in ledger/build.py. */
(function () {
  "use strict";
  var T = {
    en: {
      title: "AI Biotech Watch", subtitle: "Does AI make better medicines? The evidence so far, updated daily. Failures are logged like progress; where data are thin, we say so.",
      loading: "Loading…", failed: "Could not load data/ledger.json.", skip: "Skip to content",
      gsPh: "Search companies, tickers, drugs, signals, terms", gsCo: "Companies", gsTr: "Trials", gsSig: "Signals", gsDeals: "Deals", gsTerms: "Glossary", gsAll: "See all {n} matching trials", gsNone: "Nothing found for “{q}”.", gsTrialsN: "{n} trials",
      "sQ": "Do drugs discovered by AI actually work in people yet?", "sLead": "This site counts what happened in human trials. It does not count what companies announced.", "sAnsH": "The answer so far: not proven", "sAnsH2": "The answer so far", "sAns1": "We track {d} drugs that {c} AI drug companies say their own AI platform found or designed. They are being tested in {t} human trials. {s} of those trials were stopped early.", "sMet0": "No fair test has met its main goal yet.", "sMet1": "1 fair test so far has met its main goal.", "sMetN": "{n} fair tests so far have met their main goal.", "sP3no": "No final-stage trial has.", "sP3yes": "Final-stage (Phase 3) trials that met their main goal: {n}.", "sApNo": "No such drug has been approved.", "sApYes": "Drugs of this kind approved so far: {n}.", "sFair": "A “fair test” is a randomised trial: chance decides who gets the drug and who gets a comparison, and the main goal is fixed before the trial starts.", "sAsOf": "Figures as of {d}. Source: ClinicalTrials.gov, the public register of trials.", "sPathH": "From an idea to a pharmacy", "sPathP": "A new drug must climb these steps. Most fall off on the way. The large numbers show where the {d} tracked drugs stand today.", "sSteps": [["Lab", "Tested in cells and animals.", "Not counted here: this site starts when people are involved."], ["Phase 1", "Is it safe? A small group of people takes the drug.", "About half of all drugs move on."], ["Phase 2", "Does it work? The first real test in patients. Most drugs fail here.", "About {r}% move on."], ["Phase 3", "Does it hold up? A large trial in hundreds or thousands of patients.", "A little over half pass."], ["Approved", "A regulator, such as the US FDA, checks the evidence and allows the drug to be sold.", "Most applications that get this far are approved."]], "sDrugs": "drugs", "sNone": "not counted", "sLeft": "{n} more drugs have left the path: every trial of theirs was stopped.", "sPathNote": "Start to finish, fewer than one in ten drugs that enter Phase 1 reach a pharmacy. These are rough industry averages for all drugs, not only AI ones, and they vary a lot by disease. Each drug is placed once, at the furthest step where it has a trial that was not stopped; a combined Phase 1/2 trial counts as Phase 1.", "sStairAria": "Of {d} drugs: {a} in Phase 1, {b} in Phase 2, {c} in Phase 3, {e} approved; {x} had every trial stopped.", "sProofH": "What would count as proof", "sProofP": "These are the milestones we watch. One success is a start. It is not proof that AI improves the odds.", "sNotH": "What does not count", "sNot": [["Funding rounds.", "Money raised shows interest. It does not show that a drug works."], ["Announcements and partnership deals.", "A promise is not a result."], ["Benchmarks.", "A score on a computer test is not a patient getting better."], ["A “completed” trial.", "Completed means finished. It does not mean it succeeded."]], "sReadH": "Where to go next", "sRead": {"today": "The headline numbers, the milestones and what changed since yesterday.", "signals": "Each day’s events, scored separately for evidence and for money moving.", "trials": "Every trial, including each one stopped early, and the companies behind them.", "calendar": "When results are expected, and the deals drugmakers have signed.", "more": "How we count, a glossary of terms, and further reading."}, "sFaqH": "Common questions", "sFaq": [["Is a completed trial a successful trial?", "No. Completed only means the trial finished. The register does not say whether it met its goal. We look that up separately and link the source."], ["What does “discovered by AI” mean here?", "Two things must hold. The company describes its discovery platform as AI or machine learning. And the company says that platform found or designed this particular drug. Drugs it bought in, or old drugs given a new use, are listed but not counted."], ["Why do you list failures?", "Because the answer depends on them. Counting only the wins would make any method look good. Stopped trials and missed goals are recorded the same way as progress."], ["Has any drug from these companies been approved?", "From an AI drug company: {ap}. Approved drugs listed from companies whose computer methods are disputed as “AI”: {other}. Those are shown with that label and are not counted."], ["If a trial meets its goal, is the drug proven?", "No. One trial can meet a narrow goal. A drug usually needs a large Phase 3 trial and a regulator’s approval before doctors can prescribe it."], ["Why is the answer still “not proven”?", "There are too few results. Only {have} of the {need} randomised results needed for a first comparison are in. With so few, luck cannot be ruled out."], ["Where do the numbers come from?", "From ClinicalTrials.gov, checked once a day. Results come from company statements, papers or the register, each with a link. Last update: {d}."], ["What is missing?", "Trials registered only outside ClinicalTrials.gov, which includes many trials in China. Also some AI-discovered drugs that were licensed to large drugmakers."]],
      "sAnsBig": "Not proven yet.", "sMain": "Companies are using AI to invent new drugs, and {d} of those drugs are now being tested in people. It is too early to say whether AI makes better drugs: almost none of the tests that matter have finished.", "sNums": ["drugs being tested in people", "fair tests passed so far", "drugs dropped: every trial was stopped", "drugs approved for sale"], "mpK": "The main point", "mpLine": "{d} drugs that companies say their AI found or designed are being tested in people. Fair tests passed: {m}. Approved for sale: {a}. Milestones reached: {x} of {y}.", "mpNew": "Since your last visit: {s} new signals, {e} trial changes.", "mpNone": "Nothing new since your last visit.", "mpMore": "What does this mean? A two-minute explanation", "msPlain": {"first_p2": "One fair mid-stage test (Phase 2) is passed", "three_p2": "Three fair tests are passed, by at least two different companies", "first_p3": "One large final-stage test (Phase 3) is passed", "first_approval": "One drug is approved for sale", "twenty_readouts": "Twenty fair-test results are in: enough to compare with the usual success rate"}, "sReached": "{x} of {y} reached",
      "plK": "In plain words", "plHide": "hide", "plShow": "show", "pl": {"today": ["What changed lately, and where things stand.", [["Latest signals", "news items the daily scan has scored. A high score means strong evidence or a lot of money moving. It does not mean good news."], ["Registry changes", "edits companies made to their trial records, such as a new stage or a changed status."], ["Due", "the date a company expects a trial’s result. It is the company’s own estimate and often slips."], ["Codes", "NCT followed by numbers is a trial’s ID on the public register. Short capitals such as RXRX are stock symbols. Names such as REC-4881 are a drug’s working name before it gets a brand name."]]], "signals": ["Each card is one piece of news about AI drug-making, read and scored by the daily scan.", [["Evidence, 0 to 3", "how strong the proof is that the science works. 0 is only a claim or money. 3 is a fair test in patients or a regulator’s decision."], ["Market, 0 to 3", "how much money the news could move. It says nothing about whether the drug works."], ["Positive, negative, neutral", "which way the news points for the company or drug named. A “positive” item can still have Evidence 0."], ["So what", "why the item matters. “Changes my view if” names what would show this reading is wrong."]]], "trials/all": ["Every row is one test of one drug in people, taken from the public register ClinicalTrials.gov.", [["Phase", "how far along the drug is. Phase 1 asks whether it is safe, Phase 2 whether it works, Phase 3 whether that holds up in a large group."], ["Status", "“recruiting” means still signing up patients. “Active, not recruiting” means it has its patients and is following them. “Completed” means finished, which is not the same as succeeded."], ["Origin", "where the drug came from. Only “Own platform” drugs, which the company says its AI found or designed, count in the headline numbers."], ["Result", "whether the trial met the goal set before it began, when that is known. Most trials have no result yet."]]], "trials/stopped": ["Trials that ended early or were paused. The reason shown is the company’s own wording.", [["Why trials stop", "money, slow sign-up, weak results or safety. Read the reason given: a stop does not by itself mean the drug harmed anyone."], ["Terminated, withdrawn, suspended", "stopped after starting; cancelled before any patient joined; paused and may restart."]]], "trials/changes": ["A log of the edits companies made to their trial records, newest first.", [["Each line", "says what changed: the stage, the status or an expected date."], ["A later date", "means the result is expected later than before. Delays are common."], ["Steps back", "such as a stop are logged the same way as steps forward."]]], "trials/companies": ["The companies behind the trials. Select a name for a short profile.", [["AI drug company", "describes its drug-discovery platform as AI or machine learning."], ["Computational, contested", "uses heavy computing, but experts disagree on whether to call it AI. Its drugs are listed, not counted."], ["Share-price line and figures", "context for companies listed on a stock exchange. They are not a judgement on the company."]]], "calendar/dates": ["Dates to watch: when trial results are expected and when a regulator is due to decide.", [["Result date", "the company’s own estimate. It often moves later, and passing it with no news is common."], ["Regulator decision", "a government agency, in the US the FDA, rules on whether a drug may be sold."]]], "calendar/deals": ["Partnerships between large drugmakers and AI drug companies.", [["Upfront", "cash actually paid at signing. This is the money that has really changed hands."], ["Headline", "the most that could be paid if every future target is hit, which is rare."], ["A deal", "shows interest. It is not evidence that a drug works."]]], "more/longevity": ["Research on slowing ageing itself. No drug is approved for ageing, so real news is rare.", [["Each card", "is one milestone: where it stands today and what event would count as real progress."]]], "more/reading": ["Outside sources worth following, with their latest headlines. Links open the original site.", []], "more/method": ["How this site decides what to count. Read this if a number surprises you.", []]},
      nav: { start: "Start here", today: "Today", signals: "Signals", trials: "Trials", calendar: "Calendar", more: "More" },
      subs: { all: "All trials", stopped: "Stopped", changes: "Changes", companies: "Companies", dates: "Dates ahead", deals: "Deals", longevity: "Longevity", reading: "Reading", method: "Method", glossary: "Glossary" },
      resH: "Trial results", resNone: "No trial result is on record yet. The daily scan is looking for the results of {n} trials that have finished or passed their result date.", resAll: "All results",
      oc: { met: "Met its main goal", missed: "Missed its main goal", met_safety: "Met its safety goal", missed_safety: "Missed its safety goal", mixed: "Mixed result", unclear: "Reported, main goal not stated" }, resNote: "“Met its main goal” means a goal about benefit, set before the trial began. A trial whose main goal was safety is marked “met its safety goal”: that shows the drug was tolerated, not that it works.", outcome: "Result", allOutcomes: "All results", noOutcome: "No result yet",
      msH: "Milestones to watch", msNote: "What would have to happen before “AI makes better medicines” is more than a claim. These count only drugs from an AI platform, in randomised trials.",
      ms: { first_p2: "A first randomised Phase 2 trial meets its main goal", three_p2: "Three randomised Phase 2 or later trials meet their main goal, from at least two companies", first_p3: "A first Phase 3 trial meets its main goal", first_approval: "A first approval for a drug from an AI drug company", twenty_readouts: "Twenty randomised results are in, enough for a first comparison with the usual success rate" },
      msCo: "{n} of 2 companies", msRate: "{m} of {k} met their goal so far; about 29% of all Phase 2 drugs do", msDone: "reached",
      tSignals: "Latest signals", tChanges: "Registry changes", tDue: "Due in the next 30 days", seeAll: "See all", noSignals: "No material signals in the last scan.", noChanges: "No changes recorded yet.", noDue: "Nothing due in the next 30 days.",
      overdue: "{n} active Phase 2 or Phase 3 trials are past their listed result date with no update.", scanOf: "scan of {d}",
      trials: "Trials", sponsors: "Companies behind them", core: "Trials of those drugs", coreDrugs: "Drugs from an AI platform, in human trials", stoppedN: "Of those trials, stopped early", results: "With results posted", p3: "Live in Phase 3 or 2/3", new90: "Registered in 90 days", tilesH: "Drugs designed or found by an AI platform",
      originLine: "AI drug companies run {n} trials in all. {a} test a drug the company says came from its own AI platform, and only those are counted above. {b} test a drug it bought in or repurposed, {p} one found with a partner, and for {d} the company does not say.", snip: "from a search summary, page not opened", byScan: "classified by the daily scan, {d}", origin: "Origin", allOrigins: "All origins", dOrigin: "Where the drug came from", pDrugs: "Drugs", og: { platform: "Own platform", partner: "With a partner", acquired: "Bought in or repurposed", not_stated: "Not stated" }, sortBy: "Sort", sorts: { "-updated": "Newest update", "-phase": "Latest phase first", "phase": "Earliest phase first", "company": "Company A–Z", "drug": "Drug A–Z" }, pProxyA: "Listed through", pProxyB: "",
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
      pClose: "Close", pOverview: "Overview", pAi: "AI link", pLead: "Most advanced programme", pMarket: "Market data", pMarketNote: "Delayed; as of {d}. Context only, not a signal.", pPrice: "Last close", p1m: "1 month", p3m: "3 months", pYtd: "Year to date", pCash: "Cash and equivalents", pCashInv: "Cash and investments", pRunway: "Cash runway", quarters: "{n} quarters", lossMaking: "n/a (loss-making)", pEps: "Earnings per share, 12 months", pChartYear: "daily closes, past year", pChartNew: "daily closes since listing", pFin: "Financials", pFinNote: "From the company's SEC filings, period to {d}. Twelve-month figures add the last fiscal year and the year to date.", pRange: "52-week range", pSince: "range since listing, {d}", pNoPe: "not available", pFy: "based on the last fiscal year's earnings, converted to US dollars.", pRev: "Revenue, 12 months", pRd: "R&D, 12 months",
      pLedger: "Tracked here", pTrials: "{n} trials, {s} stopped early", pNoTrials: "No trials tracked for this company.", pNext: "Results due", pStopped: "Stopped trials", pSignals: "Signals", pDeals: "Deals", pChanges: "Registry changes", pLinks: "Links", pCt: "All trials on ClinicalTrials.gov", pSec: "SEC filings", pHk: "HKEX page", pSee: "See its trials", pPrivate: "Not listed", pSrc: "Profile source",
      newLab: "new",
      keyH: "How to read the two scores", keyRange: "Each runs from 0 (lowest) to 3. They are kept apart and never added up.", scoreOf: "{k}: {n} of 3", totalOf: "Total",
      evQ: "How far is the science shown?", mkQ: "How much money is moving?",
      evK: ["A claim or money only", "A preprint, or a lab or animal result the company reports itself", "Independent replication, a blind benchmark, or human data with no randomised control", "A randomised Phase 2 or later result, or a regulator's decision"],
      mkK: ["None", "Context only", "Changes estimates or deal comparisons for a listed company", "Likely to move a share price or sector spending"],
      evFoot: "Funding, valuations and acquisitions always score 0; a trial start scores 1 at most.", mkFoot: "A description, not a recommendation. Deals count the cash paid upfront, not the “up to” total.",
      keyHint: "how far the science is shown", keyHint2: "how much money is moving", keyHint3: "Each 0 (lowest) to 3.", keyMore: "What the scores mean",
      stripDot: "Trial result due",
      footer: "Descriptive information only; not medical or investment advice, a research report or a recommendation on any investment product. The publisher may hold positions in the companies named. Trial data: ClinicalTrials.gov.", generated: "Data generated {d}"
    },
    zh: {
      title: "AI 制药观察", subtitle: "AI 能做出更好的药吗？每日更新的证据。失败和进展同样记录；数据不足时，直说尚无定论。",
      loading: "加载中…", failed: "无法加载 data/ledger.json。", skip: "跳到正文",
      gsPh: "搜索公司、代码、药物、信号、术语", gsCo: "公司", gsTr: "试验", gsSig: "信号", gsDeals: "交易", gsTerms: "术语", gsAll: "查看全部 {n} 项匹配的试验", gsNone: "没有找到“{q}”。", gsTrialsN: "{n} 项试验",
      "sQ": "AI 发现的药物，在人身上真的有效吗？", "sLead": "本站统计的是人体试验中实际发生的事，不是公司发布的消息。", "sAnsH": "目前的答案：尚未证明", "sAnsH2": "目前的答案", "sAns1": "本站跟踪 {d} 种药物，来自 {c} 家 AI 制药公司；这些公司表示，药物由其自有 AI 平台发现或设计。这些药物共有 {t} 项人体试验，其中 {s} 项提前终止。", "sMet0": "到目前为止，还没有一项严格的试验达到主要目标。", "sMet1": "到目前为止，有 1 项严格的试验达到了主要目标。", "sMetN": "到目前为止，有 {n} 项严格的试验达到了主要目标。", "sP3no": "还没有一项最后阶段的试验达到目标。", "sP3yes": "达到主要目标的最后阶段（三期）试验：{n} 项。", "sApNo": "也没有一种这样的药物获批。", "sApYes": "已获批的这类药物：{n} 种。", "sFair": "“严格的试验”指随机对照试验：由随机方式决定谁用试验药物、谁进入对照组，主要目标在试验开始前就已确定。", "sAsOf": "数据截至 {d}。来源：ClinicalTrials.gov，即公开的临床试验登记库。", "sPathH": "从设想到药房", "sPathP": "一种新药要走完这几级台阶，大多数会在途中落选。大号数字表示所跟踪的 {d} 种药物目前所在的位置。", "sSteps": [["实验室", "在细胞和动物身上测试。", "本站不统计：本站从人体试验开始。"], ["一期", "是否安全？少数人服用药物。", "所有药物中约一半能进入下一步。"], ["二期", "是否有效？第一次在患者身上真正检验疗效，多数药物在这里失败。", "约 {r}% 能进入下一步。"], ["三期", "结果是否站得住？在数百至数千名患者中进行大规模试验。", "略多于一半通过。"], ["获批上市", "由监管机构（如美国食品药品监督管理局 FDA）审查证据，批准药物上市销售。", "走到这一步的申请大多获批。"]], "sDrugs": "种药物", "sNone": "不统计", "sLeft": "另有 {n} 种药物已离开这条路：它们的每一项试验都已终止。", "sPathNote": "从头到尾算，进入一期的药物中，最终进入药房的不到十分之一。这些是全行业所有药物的粗略平均值，不只针对 AI 药物，而且不同疾病之间差别很大。每种药物只计一次，放在它仍有未终止试验的最高一级台阶上；1/2 期合并试验计入一期。", "sStairAria": "{d} 种药物中：一期 {a} 种，二期 {b} 种，三期 {c} 种，获批 {e} 种；{x} 种的全部试验已终止。", "sProofH": "什么才算证明", "sProofP": "本站关注以下里程碑。一次成功只是开始，不能证明 AI 提高了成功率。", "sNotH": "什么不算", "sNot": [["融资。", "筹到资金说明有人关注，不说明药物有效。"], ["公告与合作交易。", "承诺不是结果。"], ["基准测试。", "计算机测试中的得分，不等于患者病情好转。"], ["“已完成”的试验。", "已完成只表示试验结束，不表示成功。"]], "sReadH": "接下来看什么", "sRead": {"today": "主要数字、里程碑，以及昨天以来的变化。", "signals": "每天的事件，按“证据”和“资金变动”分别评分。", "trials": "全部试验（包括每一项提前终止的试验）及其背后的公司。", "calendar": "预计公布结果的时间，以及药企签署的交易。", "more": "统计方法、术语表和延伸阅读。"}, "sFaqH": "常见问题", "sFaq": [["“已完成”的试验就是成功的试验吗？", "不是。已完成只表示试验结束。登记库不记录试验是否达到目标，本站另行查证并附上来源链接。"], ["这里说的“AI 发现”是什么意思？", "须同时满足两点：公司自称其发现平台由 AI 或机器学习驱动；公司表示这一药物由该平台发现或设计。外购的药物和老药新用的药物会列出，但不计入主要数字。"], ["为什么要列出失败？", "因为答案取决于失败的情况。只统计成功，任何方法看起来都不错。试验终止和未达到目标，与进展同样记录。"], ["这些公司有药物获批吗？", "AI 制药公司的获批药物：{ap} 种。另列有 {other} 种已获批药物，其公司所用的计算方法是否算 AI 存在分歧；这些药物会标注说明，但不计入。"], ["试验达到目标，就说明药物已被证明有效吗？", "不是。单项试验可能只达到了一个较窄的目标。药物通常还要通过大规模三期试验并获得监管机构批准，医生才能开处方。"], ["为什么答案仍是“尚未证明”？", "因为结果太少。做初步比较需要 {need} 项随机试验结果，目前只有 {have} 项。数量这么少，无法排除偶然因素。"], ["数字从哪里来？", "来自 ClinicalTrials.gov，每天核对一次。试验结果来自公司公告、论文或登记库，每项都附链接。最近更新：{d}。"], ["有哪些没有收录？", "只在 ClinicalTrials.gov 以外登记的试验（包括许多中国的试验），以及部分已授权给大型药企的 AI 发现药物。"]], "msPlain": {"first_p2": "有一项严格的中期试验（二期）达到目标", "three_p2": "三项严格的试验达到目标，且来自至少两家公司", "first_p3": "有一项大规模的最后阶段试验（三期）达到目标", "first_approval": "有一种药物获批上市", "twenty_readouts": "已有二十项严格试验的结果，足以与通常的成功率作比较"},
      "sAnsBig": "还没有被证明。", "sMain": "一些公司正在用 AI 研发新药，其中 {d} 种已进入人体试验。AI 能否做出更好的药，现在下结论还太早：真正关键的试验几乎都还没有结束。", "sNums": ["种药物正在人体试验中", "项严格的试验已达到目标", "种药物已出局：全部试验都已终止", "种药物已获批上市"], "mpK": "要点", "mpLine": "有 {d} 种公司称由其 AI 发现或设计的药物正在人体试验中。达到目标的严格试验：{m} 项。已获批上市：{a} 种。已达成的里程碑：{y} 个中的 {x} 个。", "mpNew": "自您上次访问以来：{s} 条新信号，{e} 项试验变动。", "mpNone": "自您上次访问以来没有新内容。", "mpMore": "这是什么意思？两分钟看懂", "sReached": "{y} 个中已达成 {x} 个",
      "plK": "通俗说明", "plHide": "收起", "plShow": "展开", "pl": {"today": ["最近有什么变化，目前进展到哪一步。", [["最新信号", "每日扫描评过分的新闻。分数高表示证据扎实或牵动的资金多，不表示是好消息。"], ["登记库变动", "公司对其试验记录所做的修改，例如进入新阶段或状态改变。"], ["到期", "公司预计公布试验结果的日期。这是公司自己的估计，经常推迟。"], ["各种代码", "NCT 加数字是试验在公开登记库中的编号；RXRX 这类大写字母是股票代码；REC-4881 这类名称是药物取得商品名之前的研发代号。"]]], "signals": ["每张卡片是一条 AI 制药相关的消息，由每日扫描阅读并评分。", [["证据（0 至 3 分）", "科学成立的证明有多扎实。0 分只是说法或资金；3 分是在患者身上做过严格的试验，或监管机构已作出决定。"], ["市场（0 至 3 分）", "这条消息可能牵动多少资金，与药物是否有效无关。"], ["正面、负面、中性", "消息对所涉公司或药物的方向。“正面”的消息，证据分仍可能是 0。"], ["意义", "这条消息为什么重要。后面一行说明出现什么情况会推翻这一判断。"]]], "trials/all": ["每一行是一种药物的一项人体试验，取自公开登记库 ClinicalTrials.gov。", [["分期", "药物走到了哪一步。一期看是否安全，二期看是否有效，三期在大量患者中确认。"], ["状态", "“招募中”表示仍在招募患者；“进行中，不再招募”表示患者已招满，正在随访；“已完成”只表示试验结束，不等于成功。"], ["来源", "药物从哪里来。只有“自有平台”的药物（公司称由其 AI 发现或设计）计入主要数字。"], ["结果", "试验是否达到开始前设定的目标（如已知）。多数试验尚无结果。"]]], "trials/stopped": ["提前结束或暂停的试验。所列原因是公司自己的说法。", [["试验为何停止", "资金、招募缓慢、疗效不佳或安全性问题。请看所列原因：试验停止本身并不说明药物伤害了患者。"], ["已终止、已撤回、已暂停", "分别指：开始后停止；尚无患者入组即取消；暂停，可能恢复。"]]], "trials/changes": ["公司对其试验记录所做修改的清单，最新的在前。", [["每一行", "说明改了什么：分期、状态或预计日期。"], ["日期推后", "表示结果预计比原先更晚公布。推迟很常见。"], ["倒退", "（例如试验停止）与进展同样记录。"]]], "trials/companies": ["这些试验背后的公司。点击名称可查看简介。", [["AI 制药公司", "自称其药物发现平台由 AI 或机器学习驱动。"], ["计算驱动（有争议）", "大量使用计算方法，但是否算 AI 存在分歧。其药物会列出，但不计入。"], ["股价走势线与数字", "仅为上市公司的背景信息，不是对公司的评价。"]]], "calendar/dates": ["值得留意的日期：试验结果预计何时公布，监管机构何时作出决定。", [["结果日期", "公司自己的估计，经常推后；过了日期仍无消息也很常见。"], ["监管决定", "政府药品监管机构（美国为 FDA）决定药物能否上市销售。"]]], "calendar/deals": ["大型药企与 AI 制药公司之间的合作。", [["首付款", "签约时实际支付的现金，是真正已经到手的钱。"], ["总额", "未来所有目标全部达成时最多可支付的金额，这种情况很少见。"], ["一笔交易", "说明有人看好，不是药物有效的证据。"]]], "more/longevity": ["针对延缓衰老本身的研究。目前没有药物获批用于衰老，真正的消息很少。", [["每张卡片", "是一个里程碑：目前的状况，以及什么事件才算真正的进展。"]]], "more/reading": ["值得关注的外部来源及其最新标题。链接会打开原网站。", []], "more/method": ["本站如何决定哪些计入统计。如果某个数字让您意外，请看这里。", []]},
      nav: { start: "入门", today: "今日", signals: "信号", trials: "试验", calendar: "日历", more: "更多" },
      subs: { all: "全部试验", stopped: "已终止", changes: "变动", companies: "公司", dates: "未来日期", deals: "交易", longevity: "长寿", reading: "阅读", method: "方法", glossary: "术语" },
      resH: "试验结果", resNone: "尚无试验结果记录。每日扫描正在查找 {n} 项已完成或已过结果日期的试验的结果。", resAll: "全部结果",
      oc: { met: "达到主要终点", missed: "未达主要终点", met_safety: "达到安全性终点", missed_safety: "未达安全性终点", mixed: "结果不一", unclear: "已公布，未说明是否达到主要终点" }, resNote: "“达到主要终点”指试验开始前设定的、关于疗效的目标。主要目标为安全性的试验标为“达到安全性终点”：这说明药物可耐受，并不说明药物有效。", outcome: "结果", allOutcomes: "全部结果", noOutcome: "暂无结果",
      msH: "值得关注的里程碑", msNote: "要让“AI 能做出更好的药”不只是一种说法，需要发生什么。这里只统计来自 AI 平台的药物的随机对照试验。",
      ms: { first_p2: "首个随机二期试验达到主要终点", three_p2: "三项随机二期或更后期试验达到主要终点，且来自至少两家公司", first_p3: "首个三期试验达到主要终点", first_approval: "AI 制药公司的药物首次获批", twenty_readouts: "已有二十项随机试验结果，足以与通常的成功率做初步比较" },
      msCo: "2 家公司中的 {n} 家", msRate: "目前 {k} 项中 {m} 项达到终点；全部二期药物约 29% 达到", msDone: "已达成",
      tSignals: "最新信号", tChanges: "登记库变动", tDue: "未来 30 天到期", seeAll: "查看全部", noSignals: "最近一次扫描没有重要信号。", noChanges: "暂无变动记录。", noDue: "未来 30 天没有到期事件。",
      overdue: "{n} 项进行中的二期或三期试验已过登记的结果日期，尚无更新。", scanOf: "{d} 扫描",
      trials: "试验", sponsors: "涉及的公司", core: "这些药物的试验", coreDrugs: "来自 AI 平台、已进入人体试验的药物", stoppedN: "其中提前终止的试验", results: "已公布结果", p3: "三期或 2/3 期（未终止）", new90: "近 90 天新登记", tilesH: "由 AI 平台设计或发现的药物",
      originLine: "AI 制药公司共开展 {n} 项试验。其中 {a} 项测试的是公司称出自其自有 AI 平台的药物，上方只统计这一部分。另有 {b} 项测试外购或老药新用的药物，{p} 项为与合作方共同发现，{d} 项公司未说明来源。", snip: "依据搜索摘要，未打开原页面", byScan: "由每日扫描于 {d} 归类", origin: "来源", allOrigins: "全部来源", dOrigin: "药物来源", pDrugs: "药物", og: { platform: "自有平台", partner: "与合作方共同", acquired: "外购或老药新用", not_stated: "未说明" }, sortBy: "排序", sorts: { "-updated": "最近更新", "-phase": "分期从晚到早", "phase": "分期从早到晚", "company": "公司 A–Z", "drug": "药物 A–Z" }, pProxyA: "通过", pProxyB: "上市",
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
      pClose: "关闭", pOverview: "概况", pAi: "与 AI 的关系", pLead: "进展最快的项目", pMarket: "行情数据", pMarketNote: "有延迟；截至 {d}。仅作背景，不是信号。", pPrice: "最新收盘", p1m: "1 个月", p3m: "3 个月", pYtd: "年初至今", pCash: "现金及等价物", pCashInv: "现金及投资", pRunway: "现金可支撑", quarters: "{n} 个季度", lossMaking: "不适用（亏损）", pEps: "每股收益（12 个月）", pChartYear: "过去一年每日收盘价", pChartNew: "上市以来每日收盘价", pFin: "财务数据", pFinNote: "来自公司向 SEC 提交的文件，截至 {d}。12 个月数据为上一财年加本年至今。", pRange: "52 周区间", pSince: "上市以来区间（自 {d}）", pNoPe: "暂无", pFy: "按上一财年收益计算，并折算为美元。", pRev: "营收（12 个月）", pRd: "研发投入（12 个月）",
      pLedger: "本站记录", pTrials: "{n} 项试验，{s} 项提前终止", pNoTrials: "未跟踪该公司的试验。", pNext: "即将到期的结果", pStopped: "已终止的试验", pSignals: "信号", pDeals: "交易", pChanges: "登记库变动", pLinks: "链接", pCt: "ClinicalTrials.gov 上的全部试验", pSec: "SEC 文件", pHk: "港交所页面", pSee: "查看其试验", pPrivate: "未上市", pSrc: "概况来源",
      newLab: "新",
      keyH: "如何读这两个评分", keyRange: "两项各为 0（最低）到 3 分，分开记录，从不相加。", scoreOf: "{k}：{n} / 3", totalOf: "合计",
      evQ: "科学成立的证据有多强？", mkQ: "资金变动有多大？",
      evK: ["只是说法或资金", "预印本，或公司自行公布的体外或动物结果", "独立重复验证、盲测基准，或没有随机对照的人体数据", "随机二期或更后期试验的结果，或监管决定"],
      mkK: ["无", "仅作背景", "会改变某上市公司的预期或交易参照", "可能推动股价或行业支出"],
      evFoot: "融资、估值和并购恒为 0 分；试验启动最多 1 分。", mkFoot: "这是描述，不是建议。交易只计首付款，不计“最高可达”的总额。",
      keyHint: "科学成立的证据有多强", keyHint2: "资金变动有多大", keyHint3: "各为 0（最低）到 3 分。", keyMore: "评分的含义",
      stripDot: "试验结果到期",
      footer: "仅为描述性信息，不构成医疗或投资建议、研究报告或对任何投资产品的推荐。发布者可能持有文中所述公司的头寸。试验数据来自 ClinicalTrials.gov。", generated: "数据生成于 {d}"
    }
  };
  var PH_ZH = { "Early Phase 1": "早期一期", "Phase 1": "一期", "Phase 1/2": "1/2 期", "Phase 2": "二期", "Phase 2/3": "2/3 期", "Phase 3": "三期", "Phase 4": "四期", "N/A": "不适用" };
  var ST_ZH = { RECRUITING: "招募中", NOT_YET_RECRUITING: "尚未招募", ACTIVE_NOT_RECRUITING: "进行中，不再招募", ENROLLING_BY_INVITATION: "邀请入组", COMPLETED: "已完成", TERMINATED: "已终止", WITHDRAWN: "已撤回", SUSPENDED: "已暂停", UNKNOWN: "状态不详" };
  var VIEWS = { start: [], today: [], signals: [], trials: ["all", "stopped", "changes", "companies"], calendar: ["dates", "deals"], more: ["longevity", "reading", "method", "glossary"] };
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
  function ocPill(o, ep) { var k = (o === "met" || o === "missed") && ep === "safety" ? o + "_safety" : o; return '<span class="pill oc oc-' + esc(k) + '">' + esc(t("oc")[k] || o) + "</span>"; }
  function pill(cls, text) { return '<span class="pill ' + esc(cls) + '">' + esc(text) + "</span>"; }
  function phase(p) { return lang === "zh" ? (PH_ZH[p] || p) : p; }
  function status(s) { return lang === "zh" ? (ST_ZH[s] || s) : String(s || "").toLowerCase().replace(/_/g, " "); }
  function dirPill(d) { return pill(d === "positive" ? "up" : d === "negative" ? "down" : "neutral", t("dir")[d]); }
  function ogPill(o) { return pill("og og-" + o, t("og")[o] || o); }
  function usd(n) { if (n == null) return ""; var a = Math.abs(n); return (n < 0 ? "−" : "") + "$" + (a >= 1e12 ? (a / 1e12).toFixed(2) + "T" : a >= 1e9 ? (a / 1e9).toFixed(a >= 1e10 ? 0 : 1) + "B" : (a / 1e6).toFixed(a >= 1e8 ? 0 : 1) + "M"); }
  function dealUsd(n) { return n >= 1e9 ? "$" + (n / 1e9).toFixed(2).replace(/\.?0+$/, "") + "B" : "$" + (n / 1e6).toFixed(1).replace(/\.0$/, "") + "M"; }
  function pct(x) { return x == null ? "–" : (x > 0 ? "+" : x < 0 ? "−" : "") + Math.abs(x * 100).toFixed(1) + "%"; }
  function score(n, kind, bare) {   // kind: "ev" (bars) or "mk" (dots); the two scores never share a shape or a colour
    var o = ""; for (var i = 1; i <= 3; i++) o += '<i class="' + (i <= n ? "on" : "") + '"></i>';
    return '<span class="score score-' + kind + '" role="img" aria-label="' + esc(f("scoreOf", { k: t(kind === "ev" ? "evidence" : "market"), n: n })) + '">' + o + (bare ? "" : "<b>" + n + "/3</b>") + "</span>";
  }
  function scoreKey() {
    function col(kind, name, q, list, foot) {
      return '<div class="skey-col skey-' + kind + '"><h3>' + esc(t(name)) + ' <span>' + esc(t(q)) + "</span></h3><ol>" + t(list).map(function (x, n) { return "<li>" + score(n, kind, true) + "<b>" + n + "</b><span>" + esc(x) + "</span></li>"; }).join("") + '</ol><p class="skey-foot">' + esc(t(foot)) + "</p></div>";
    }
    return '<div class="skey" role="group" aria-label="' + esc(t("keyH")) + '"><p class="skey-h"><b>' + esc(t("keyH")) + "</b> " + esc(t("keyRange")) + "</p>" + col("ev", "evidence", "evQ", "evK", "evFoot") + col("mk", "market", "mkQ", "mkK", "mkFoot") + "</div>";
  }
  function scoreHint() {
    return '<p class="skey-hint"><span>' + score(2, "ev", true) + " <b>" + esc(t("evidence")) + "</b> " + esc(t("keyHint")) + "</span> <span>" + score(2, "mk", true) + " <b>" + esc(t("market")) + "</b> " + esc(t("keyHint2")) + "</span> " + esc(t("keyHint3")) + ' <a href="' + href("signals") + '">' + esc(t("keyMore")) + "</a></p>";
  }
  function isNew(stamp) { if (!seen || !stamp || !D) return false; var d = stamp.slice(0, 10), sd = seen.slice(0, 10); return d > sd || (d === sd && D.generated_at > seen); }
  function newDot() { return '<span class="dot" role="img" aria-label="' + esc(t("newLab")) + '" title="' + esc(t("newLab")) + '"></span>'; }
  function fold(s) { s = String(s || "").trim().toLowerCase(); return s.normalize ? s.normalize("NFD").replace(/[\u0300-\u036f]/g, "") : s; }
  function money(x) { return Number(x).toFixed(2); }
  var CAD_ZH = { "several a week": "每周数篇", "daily": "每日", "weekly": "每周", "yearly, April": "每年 4 月", "yearly, October": "每年 10 月" };
  function srcStatus(v) { return lang !== "zh" ? v : String(v).replace(/^ok, (\d+) new/, "正常，新增 $1 条").replace(/\((\d+) over the cap, not listed\)/, "（另有 $1 条超出上限未列出）").replace(/unreachable/g, "无法访问"); }
  var NAV_IC = { start: '<path d="M6 21V4h11.5l-2.5 4 2.5 4H6"/>', today: '<circle cx="12" cy="14" r="4"/><path d="M12 4v2.5M4.6 8.6l1.8 1.8M19.4 8.6l-1.8 1.8M3 20h18"/>', signals: '<path d="M3 12h4l2.5-6 4 12 2.5-6h5"/>', trials: '<g transform="rotate(-40 12 12)"><rect x="3" y="8" width="18" height="8" rx="4"/><path d="M12 8v8"/></g>', calendar: '<rect x="4" y="5.5" width="16" height="14" rx="2"/><path d="M4 10.5h16M8.5 3.5v4M15.5 3.5v4"/>', more: '<path d="M5 7h14M5 12h14M5 17h9"/>' };
  function icon(inner, vb) { return '<svg viewBox="0 0 ' + (vb || "24 24") + '" aria-hidden="true" focusable="false">' + inner + "</svg>"; }
  var IC_CHEV = icon('<path d="M6 3.5 10.5 8 6 12.5"/>', "16 16"), IC_X = icon('<path d="M4 4l8 8M12 4l-8 8"/>', "16 16"), IC_NONE = icon('<circle cx="11" cy="11" r="6.5"/><path d="m16 16 4.5 4.5M8.5 11h5"/>');
  function spark(arr, w, h) {
    if (!arr || arr.length < 2) return "";
    var lo = Math.min.apply(null, arr), hi = Math.max.apply(null, arr), span = hi - lo || 1, n = arr.length - 1;
    var pts = arr.map(function (v, i) { return (i / n * (w - 4) + 2).toFixed(1) + "," + (h - 2 - (v - lo) / span * (h - 4)).toFixed(1); });
    var last = pts[pts.length - 1].split(",");
    return '<svg class="spark" width="' + w + '" height="' + h + '" viewBox="0 0 ' + w + " " + h + '" role="img" aria-label="' + esc(t("year")) + '"><polyline points="' + pts.join(" ") + '"/><circle cx="' + last[0] + '" cy="' + last[1] + '" r="1.8"/></svg>';
  }

  function chart(arr) {       // the company panel's price line, as wide as its box
    if (!arr || arr.length < 2) return "";
    var W = 400, H = 72, lo = Math.min.apply(null, arr), hi = Math.max.apply(null, arr), span = hi - lo || 1, n = arr.length - 1;
    var pts = arr.map(function (v, i) { return (i / n * W).toFixed(1) + "," + (H - 4 - (v - lo) / span * (H - 8)).toFixed(1); });
    return '<svg class="chart" viewBox="0 0 ' + W + " " + H + '" preserveAspectRatio="none" role="img" aria-label="' + esc(t("year")) + '"><line x1="0" y1="' + (H - 0.5) + '" x2="' + W + '" y2="' + (H - 0.5) + '"/><polyline points="' + pts.join(" ") + '"/></svg>';
  }

  // ---- URL state ----
  function parse() {
    function dec(s) { try { return decodeURIComponent(s); } catch (e) { return s; } }
    var h = location.hash.replace(/^#/, ""), qi = h.indexOf("?"), path = dec(qi < 0 ? h : h.slice(0, qi)).toLowerCase(), q = qi < 0 ? "" : h.slice(qi + 1);
    if (ALIAS[path]) path = ALIAS[path];
    var p = path.split("/"), view = VIEWS[p[0]] ? p[0] : "start", subs = VIEWS[view], sub = subs.indexOf(p[1]) >= 0 ? p[1] : (subs[0] || "");
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
    if (!rows.length) return '<tbody><tr><td class="empty" colspan="' + cols.length + '"><div class="empty-in">' + IC_NONE + "<span>" + esc(t("noMatch")) + '</span> <button type="button" class="btn" data-clear="1">' + IC_X + esc(t("clear")) + "</button></div></td></tr></tbody>";
    var shown = opt.page ? rows.slice(0, S.n) : rows;
    var h = shown.map(function (r) {
      return "<tr" + (opt.isNew && opt.isNew(r) ? ' class="new"' : "") + ">" + cols.map(function (c, i) {
        return "<td" + (c.cls || c.num ? ' class="' + (c.cls || "") + (c.num ? " n" : "") + '"' : "") + (i && !c.nolabel ? ' data-l="' + esc(c.label) + '"' : "") + ">" + c.cell(r) + "</td>";
      }).join("") + "</tr>" + (opt.detail && S.open === opt.id(r) ? '<tr class="detail"><td colspan="' + cols.length + '">' + opt.detail(r) + "</td></tr>" : "");
    }).join("");
    if (opt.page && rows.length > S.n) h += '<tr><td class="foot" colspan="' + cols.length + '"><button type="button" class="btn" data-more="1">' + esc(f("showMore", { n: Math.min(PAGE, rows.length - S.n) })) + "</button></td></tr>";
    return "<tbody>" + h + "</tbody>";
  }
  function table(id, rows, cols, opt) { return '<div class="scroll"><table class="rc" id="' + id + '">' + thead(cols) + tbody(sorted(rows, cols), cols, opt) + "</table></div>"; }

  function trialCols(extra) {
    return [
      { key: "nct", label: t("trial"), cls: "d", nolabel: 1, cell: function (x) { return '<button type="button" class="exp" data-open="' + x.nct + '" aria-expanded="' + (S.open === x.nct) + '" aria-label="' + esc(t("details")) + '">' + IC_CHEV + "</button>" + nct(x.nct); } },
      { key: "drug", label: t("drug"), cls: "lead", nolabel: 1, val: function (x) { return (x.interventions[0] || "").toLowerCase(); }, cell: function (x) { return esc((x.interventions || []).slice(0, 2).join(", ") || x.title); } },
      { key: "company", label: t("company"), val: function (x) { return (D.companies[x.co] ? D.companies[x.co].name : x.lead_sponsor).toLowerCase(); }, cell: function (x) { return (x.via === "sponsor" ? co(x.co) : esc(x.lead_sponsor)) + " " + tk(x.ticker); } },
      { key: "condition", label: t("condition"), cell: function (x) { return esc((x.conditions || []).slice(0, 2).join("; ")); } },
      { key: "phase", label: t("phase"), term: "phase", val: function (x) { return x.phase_rank; }, cell: function (x) { return esc(phase(x.phase)); } },
      { key: "status", label: t("status"), term: "status", val: function (x) { return x.status; }, cell: function (x) { return pill(x.bucket, status(x.status)) + (x.outcome ? " " + ocPill(x.outcome, x.endpoint) : ""); } },
      { key: "origin", label: t("origin"), term: "origin", val: function (x) { return x.origin; }, cell: function (x) { return ogPill(x.origin); } }
    ].concat(extra);
  }
  function trialDetail(x) {
    function row(k, v) { return v == null || v === "" ? "" : "<dt>" + esc(k) + "</dt><dd>" + esc(v) + "</dd>"; }
    var dr = x.drug_id ? D.drugMap[x.drug_id] : null;
    var org = "<dt>" + esc(t("dOrigin")) + "</dt><dd>" + esc(t("og")[x.origin] || x.origin) + (dr && L(dr, "ai_role") ? ": " + esc(L(dr, "ai_role")) : "") + (dr && dr.source ? " " + link(dr.source.url, dr.source.publisher || t("source")) : "") + (dr && dr.checked === "snippet" ? " (" + esc(t("snip")) + ")" : "") + (dr && dr.added_by === "scanner" ? " (" + esc(f("byScan", { d: dr.added })) + ")" : "") + "</dd>";
    var oc = D.outcomeMap[x.nct];
    if (oc) org = "<dt>" + esc(t("outcome")) + "</dt><dd>" + ocPill(oc.outcome, oc.endpoint) + " " + esc(oc.date) + ": " + esc(L(oc, "summary")) + " " + link(oc.source.url, oc.source.publisher || t("source")) + "</dd>" + org;
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
      '<label class="chk"><input type="checkbox" id="f-listed"' + (S.listed ? " checked" : "") + "> " + esc(t("listedOnly")) + '</label><select id="f-sort" class="only-phone" aria-label="' + esc(t("sortBy")) + '">' + Object.keys(t("sorts")).map(function (k) { return '<option value="' + k + '"' + (k === so ? " selected" : "") + ">" + esc(t("sortBy")) + ": " + esc(t("sorts")[k]) + "</option>"; }).join("") + '</select><button type="button" class="btn" id="f-clear" data-clear="1" hidden>' + IC_X + esc(t("clear")) + '</button></div><p class="muted small" id="count"></p>';
  }

  // ---- views ----
  function subnav() {
    var subs = VIEWS[S.view]; if (!subs.length) return "";
    return '<section><nav class="subnav" aria-label="' + esc(t("nav")[S.view]) + '">' + subs.map(function (s) { return '<a href="' + href(S.view, s) + '"' + (s === S.sub ? ' aria-current="true"' : "") + '><span class="nl" data-w="' + esc(t("subs")[s]) + '">' + esc(t("subs")[s]) + "</span></a>"; }).join("") + "</nav></section>";
  }
  function sigCard(i, compact) {
    var names = (i.names || []).map(function (n) { return tk(n.ticker) + " " + pill("", t("dir")[n.direction]) + (n.order === "second" ? " " + term("second_order", t("second")) : ""); }).join("</span><span>");
    var head = '<p class="muted small">' + (isNew(i.run) ? newDot() : "") + esc(i.date) + " · " + esc(t("ty")[i.type] || i.type) + " · " + dirPill(i.direction) + "</p><h3>" + link(i.url, L(i, "title")) + "</h3>" +
      '<p class="scores"><span>' + term("evidence", t("evidence")) + " " + score(i.evidence, "ev") + "</span><span>" + term("market", t("market")) + " " + score(i.market, "mk") + "</span>" + (compact ? "<span>" + (i.names || []).map(function (n) { return tk(n.ticker); }).join(" ") + "</span>" : "") + "</p>";
    if (compact) return head;
    return '<div class="card sig">' + head + '<p class="muted small">' + esc(t("conf")) + ": " + esc(t("confv")[i.confidence] || i.confidence) + " · " + esc(t(i.source_kind + "_src")) + (i.single_source ? " · " + esc(t("single")) : "") + "</p>" +
      (names ? '<p class="names"><span>' + names + "</span></p>" : "") + '<p class="sw"><b>' + esc(t("soWhat")) + ":</b> " + esc(L(i, "so_what")) + '</p><p class="cv small"><b>' + esc(t("changes")) + ":</b> " + esc(L(i, "changes_view")) + "</p></div>";
  }
  function evLine(e) {
    var what = t("ev")[e.type] || e.type, detail = e.type === "registered" ? phase(e.to) : e.type === "results_posted" ? "" : e.type === "status" ? status(e.from) + " → " + status(e.to) : e.type === "phase" ? phase(e.from) + " → " + phase(e.to) : e.from + " → " + e.to;
    return pill(e.direction, what) + " " + esc(detail);
  }
  function byNct(id) { return D.trialMap[id]; }
  var BUCKETS = ["active", "completed", "stopped", "unknown"];
  function stateLegend() { return '<p class="legend">' + BUCKETS.map(function (b) { return '<span><i class="seg-' + b + '"></i>' + esc(t(b)) + "</span>"; }).join("") + "</p>"; }
  function bars(P, small) {   // one stacked bar per phase; a count that does not fit its segment drops below it (CSS container query)
    var keys = Object.keys(P).filter(function (p) { return P[p].total; }), max = Math.max.apply(null, keys.map(function (p) { return P[p].total; }));
    var rows = keys.map(function (p) {
      var r = P[p], said = [], segs = BUCKETS.map(function (b) {
        if (!r[b]) return "";
        said.push(t(b) + " " + r[b]);
        return '<i class="seg-' + b + " d" + String(r[b]).length + '" style="flex:' + r[b] + '" title="' + esc(t(b)) + ": " + r[b] + '"><b>' + r[b] + "</b></i>";
      }).join("");
      return '<div class="frow"><span class="lab">' + esc(phase(p)) + '</span><span class="stack" role="img" aria-label="' + esc(phase(p) + ": " + said.join(", ")) + '" style="width:' + (100 * r.total / max).toFixed(1) + '%">' + segs + '</span><span class="tot" title="' + esc(t("totalOf")) + '">' + r.total + "</span></div>";
    }).join("");
    return '<div class="funnel' + (small ? " funnel-sm" : "") + '">' + stateLegend() + rows + "</div>";
  }
  function funnel() { return bars(D.stats.by_phase_core, false); }
  function msList(lab) {
    return '<ul class="ms">' + (D.milestones || []).map(function (m) {
      var extra = m.id === "three_p2" ? " · " + esc(f("msCo", { n: Math.min(m.companies, 2) })) : m.id === "twenty_readouts" && m.have ? " · " + esc(f("msRate", { m: m.met, k: m.have })) : "";
      return '<li class="' + (m.done ? "done" : "") + '"><span class="ms-n">' + Math.min(m.have, m.need) + " / " + m.need + '</span><span class="ms-t">' + esc(lab[m.id] || t("ms")[m.id]) + '<span class="muted small">' + (m.done ? " · " + esc(t("msDone")) : "") + extra + '</span></span><span class="ms-bar"><i style="width:' + Math.min(100, 100 * m.have / m.need) + '%"></i></span></li>'; }).join("") + "</ul>";
  }
  function plain() {      // the plain-language caption of a page; one open / closed choice for the whole site
    var c = t("pl")[S.view + (S.sub ? "/" + S.sub : "")]; if (!c) return "";
    return '<details class="plain-cap"' + (store("ledger-plain") === "0" ? "" : " open") + '><summary><b>' + esc(t("plK")) + '</b> <span class="pc-lead">' + esc(c[0]) + '</span><span class="pc-t" data-hide="' + esc(t("plHide")) + '" data-show="' + esc(t("plShow")) + '"></span></summary>' + (c[1].length ? "<ul>" + c[1].map(function (x) { return "<li><b>" + esc(x[0]) + (lang === "zh" ? "：" : ": ") + "</b>" + esc(x[1]) + "</li>"; }).join("") + "</ul>" : "") + "</details>";
  }
  function mainPoint(short) {
    var s = D.stats, M = {}; (D.milestones || []).forEach(function (m) { M[m.id] = m; });
    var ns = (D.signals || []).filter(function (i) { return isNew(i.run); }).length, ne = D.events.filter(function (e) { return isNew(e.detected); }).length;
    if (short) return seen ? '<p class="start-new">' + esc(ns || ne ? f("mpNew", { s: ns, e: ne }) : t("mpNone")) + (ns ? ' <a href="' + href("signals") + '">' + esc(t("nav").signals) + " →</a>" : "") + (ne ? ' <a href="' + href("trials", "changes") + '">' + esc(t("subs").changes) + " →</a>" : "") + "</p>" : "";
    return '<section class="mp"><p class="mp-k">' + esc(t("mpK")) + '</p><p class="mp-a"><b>' + esc(t(s.verdict === "unproven" ? "sAnsBig" : "sAnsH2")) + "</b> " + esc(f("mpLine", { d: s.core_drugs, m: (M.three_p2 || {}).have || 0, a: (M.first_approval || {}).have || 0, x: (D.milestones || []).filter(function (m) { return m.done; }).length, y: (D.milestones || []).length })) + '</p><p class="mp-n">' + (seen ? esc(ns || ne ? f("mpNew", { s: ns, e: ne }) : t("mpNone")) + " · " : "") + '<a href="#start">' + esc(t("mpMore")) + " →</a></p></section>";
  }
  function stairs() {
    var s = D.stats, st = s.core_drugs_by_step || {}, ns = [null, st.phase1, st.phase2, st.phase3, st.approved], rate = Math.round((s.phase2_base_rate || 0) * 100);
    return '<ol class="stairs" aria-label="' + esc(f("sStairAria", { d: s.core_drugs, a: st.phase1, b: st.phase2, c: st.phase3, e: st.approved, x: st.stopped_only })) + '">' + t("sSteps").map(function (x, i) {
      var n = ns[i];
      return '<li class="' + (n ? "" : "empty") + '" style="--i:' + i + '"><span class="st-name">' + esc(x[0]) + '</span><span class="st-n">' + (n == null ? '<small>' + esc(t("sNone")) + "</small>" : n + " <small>" + esc(t("sDrugs")) + "</small>") + '</span><span class="st-q">' + esc(x[1]).replace(/^(.*?[?？])\s*/, "<b>$1</b> ") + '</span><span class="st-odds">' + esc(x[2].replace("{r}", rate)) + "</span></li>"; }).join("") + "</ol>";
  }
  var V = {
    start: function () {
      var s = D.stats, st = s.core_drugs_by_step || {}, M = {}; (D.milestones || []).forEach(function (m) { M[m.id] = m; });
      var met = (M.three_p2 || {}).have || 0, p3 = (M.first_p3 || {}).have || 0, ap = (M.first_approval || {}).have || 0, tw = M.twenty_readouts || {};
      var ans = (met === 0 ? t("sMet0") : met === 1 ? t("sMet1") : f("sMetN", { n: met })) + " " + (p3 ? f("sP3yes", { n: p3 }) : t("sP3no")) + " " + (ap ? f("sApYes", { n: ap }) : t("sApNo"));
      var nums = [s.core_drugs, met, st.stopped_only || 0, ap], done = (D.milestones || []).filter(function (m) { return m.done; }).length;
      return '<section class="verdict start-ans"><p class="start-q">' + esc(t("sQ")) + "</p><h2>" + esc(t(s.verdict === "unproven" ? "sAnsBig" : "sAnsH2")) + '</h2><p class="start-big">' + esc(f("sMain", { d: s.core_drugs })) + '</p><div class="start-nums">' + t("sNums").map(function (x, i) { return "<div><b>" + nums[i] + "</b><span>" + esc(x) + "</span></div>"; }).join("") + "</div>" + mainPoint(true) + '<p class="note">' + esc(t("sFair")) + " " + esc(t("sLead")) + '</p><p class="muted small">' + esc(f("sAsOf", { d: D.today })) + "</p></section>" +
        "<section><h2>" + esc(t("sPathH")) + '</h2><p class="note">' + esc(f("sPathP", { d: s.core_drugs })) + "</p>" + stairs() + (st.stopped_only ? '<p class="note start-left">' + esc(f("sLeft", { n: st.stopped_only })) + "</p>" : "") + '<p class="muted small start-fine">' + esc(t("sPathNote")) + "</p></section>" +
        '<div class="start-two"><section><h2>' + esc(t("sProofH")) + ' <span class="muted small">' + esc(f("sReached", { x: done, y: (D.milestones || []).length })) + '</span></h2><p class="note">' + esc(t("sProofP")) + "</p>" + msList(t("msPlain") || t("ms")) + "</section>" +
        "<section><h2>" + esc(t("sNotH")) + '</h2><ul class="start-not">' + t("sNot").map(function (x) { return "<li><b>" + esc(x[0]) + "</b> " + esc(x[1]) + "</li>"; }).join("") + "</ul></section></div>" +
        "<section><h2>" + esc(t("sFaqH")) + '</h2><div class="start-faq">' + t("sFaq").map(function (x) { return "<details><summary>" + esc(x[0]) + "</summary><p>" + esc(x[1].replace("{ap}", ap).replace("{other}", s.approvals_other || 0).replace("{have}", tw.have || 0).replace("{need}", tw.need || 0).replace("{d}", D.today)) + "</p></details>"; }).join("") + "</div></section>" +
        "<section><h2>" + esc(t("sReadH")) + '</h2><div class="start-next">' + ["today", "signals", "trials", "calendar", "more"].map(function (k) { return '<a href="' + href(k) + '"><b>' + esc(t("nav")[k]) + " →</b><span>" + esc(t("sRead")[k]) + "</span></a>"; }).join("") + "</div></section>";
    },
    today: function () {
      var tb = D.today_block, s = D.stats;
      var sig = tb.signal_ids.map(function (id) { return D.sigMap[id]; }).filter(Boolean), ev = tb.event_ids.map(function (id) { return D.evMap[id]; }).filter(Boolean), due = tb.due_30d.map(byNct).filter(Boolean);
      function blk(cls, title, more, body, empty, hint) { return '<div class="blk ' + cls + '"><div class="row"><h2>' + title + '</h2><a class="more" href="' + more + '">' + esc(t("seeAll")) + " →</a></div>" + (hint || "") + (body ? "<ul>" + body + "</ul>" : '<p class="blk-empty">' + esc(empty) + "</p>") + "</div>"; }
      var b1 = blk("blk-sig", esc(t("tSignals")) + ' <span class="muted small">' + esc(f("scanOf", { d: tb.signals_run || "–" })) + "</span>", href("signals"), sig.map(function (i) { return "<li>" + sigCard(i, true) + "</li>"; }).join(""), t("noSignals"), sig.length ? scoreHint() : "");
      var b2 = blk("blk-rail", esc(t("tChanges")), href("trials", "changes"), ev.map(function (e) { return '<li class="ln"><span class="when">' + esc(e.date) + "</span><div>" + (isNew(e.detected) ? newDot() : "") + co(byNct(e.nct) ? byNct(e.nct).co : e.sponsor_id) + "<br>" + evLine(e) + ' <span class="small">' + nct(e.nct) + "</span></div></li>"; }).join(""), t("noChanges"));
      var b3 = blk("blk-rail", esc(t("tDue")) + (tb.due_30d_n > due.length ? ' <span class="muted small">' + tb.due_30d_n + "</span>" : ""), href("calendar"), due.map(function (x) { return '<li class="ln"><span class="when">' + esc(x.primary_completion) + "</span><div>" + co(x.co) + " " + tk(x.ticker) + "<br>" + esc((x.interventions || [])[0] || "") + " · " + esc(phase(x.phase)) + ' <span class="small">' + nct(x.nct) + "</span></div></li>"; }).join("") +
        (tb.overdue.length ? '<li class="ln-note">' + esc(f("overdue", { n: tb.overdue.length })) + "</li>" : ""), t("noDue"));
      var tiles = [[s.core_drugs, "coreDrugs"], [s.core_trials, "core"], [s.core_sponsors, "sponsors"], [s.core_phase3_live, "p3"], [s.core_stopped, "stoppedN"], [s.core_with_results, "results"]];
      var bo = s.by_origin || {};
      var pc = Math.min(100, 100 * s.phase2_completed_randomised / s.phase2_threshold);
      var ocs = (D.outcomes || []).filter(function (o) { return o.outcome === "met" || o.outcome === "missed" || o.outcome === "mixed"; }).slice(0, 6), resBlock = "<section><h2>" + esc(t("resH")) + '</h2><p class="note">' + esc(t("resNote")) + "</p>" + (ocs.length ? '<ul class="plain dated">' + ocs.map(function (o) {
        var x = byNct(o.nct) || {}; return "<li>" + '<span class="muted small">' + esc(o.date) + "</span> " + ocPill(o.outcome, o.endpoint) + " <b>" + esc(x.drug || (x.interventions || [])[0] || o.nct) + "</b> · " + (x.co ? co(x.co) : "") + " " + tk(x.ticker) + " · " + esc(phase(x.phase || "")) + "<br>" + esc(L(o, "summary")) + ' <span class="small">' + link(o.source.url, o.source.publisher || t("source")) + " · " + nct(o.nct) + "</span></li>"; }).join("") + "</ul>"
        : '<p class="note">' + esc(f("resNone", { n: D.results_watch || 0 })) + "</p>") + "</section>";
      var msBlock = "<section><h2>" + esc(t("msH")) + '</h2><p class="note">' + esc(t("msNote")) + "</p>" + msList(t("ms")) + "</section>";
      return mainPoint() + '<section class="today">' + b1 + b2 + b3 + "</section>" +
        resBlock + msBlock + "<section><h2>" + esc(t("tilesH")) + '</h2><div class="tiles">' + tiles.map(function (x) { return '<div class="tile"><b>' + x[0] + "</b><span>" + esc(t(x[1])) + "</span></div>"; }).join("") + '</div><p class="origin">' + esc(f("originLine", { n: s.ai_company_trials, a: bo.platform, b: bo.acquired, p: bo.partner, d: bo.not_stated })) + ' <a href="' + href("more", "method") + '">' + esc(t("subs").method) + "</a></p></section>" +
        "<section><h2>" + esc(t("phaseH")) + "</h2>" + funnel() + "</section>" +
        '<section class="verdict"><h2>' + esc(t("verdictH")) + '</h2><div class="meter-row"><div class="meter" role="img" aria-label="' + s.phase2_completed_randomised + " / " + s.phase2_threshold + '"><i style="width:' + pc + '%"></i></div><span class="meter-n" aria-hidden="true">' + s.phase2_completed_randomised + " <small>/ " + s.phase2_threshold + '</small></span></div><p class="note">' + esc(f("verdictP", { n: s.phase2_completed_randomised, t: s.phase2_threshold })) + "</p><h3>" + esc(t("apprH")) + '</h3><p class="note">' + esc((D.approvals || []).some(function (a) { return a.tier === "ai"; }) ? "" : t("apprAi")) + "</p>" +
        ((D.approvals || []).length ? '<ul class="appr">' + D.approvals.map(function (a) { return "<li><b>" + esc(a.drug) + '</b><span class="meta">' + esc(a.regulator) + " " + esc(a.date) + " · " + co(a.co) + " " + tk(a.co) + " · " + esc(t(a.tier)) + "</span>" + esc(L(a, "text")) + ' <span class="small">' + link(a.source.url, a.source.publisher) + "</span></li>"; }).join("") + "</ul>" : "") + "</section>";
    },
    signals: function () {
      var st = D.signals_state || {}, items = D.signals || [];
      var head = '<p class="disc">' + esc(D.disclaimer[lang]) + '</p><p class="note">' + esc(t("sigNote")) + "</p>" +
        '<p class="muted small">' + esc(f("sigLast", { d: st.last_date || "–" })) + (st.weekly ? ' · <a href="weekly.html">' + esc(t("weekly")) + " " + esc(st.weekly) + "</a>" : "") + "</p>" + scoreKey();
      var fu = (st.followups || []).length ? "<section><h2>" + esc(t("followups")) + '</h2><ul class="plain">' + st.followups.map(function (x) { return "<li>" + esc(L(x, "text")) + "</li>"; }).join("") + "</ul></section>" : "";
      var op = (D.open || []).length ? "<section><h2>" + esc(t("watching")) + '</h2><ul class="plain dated">' + D.open.map(function (o) { return '<li><span class="when">' + esc(o.due || "") + "</span><span>" + esc(L(o, "text")) + "</span></li>"; }).join("") + "</ul></section>" : "";
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
        { key: "ev", label: t("event"), cls: "lead", nolabel: 1, cell: function (r) { return r.c ? pill("reg", t("regDecision")) + " " + esc(L(r.c, "title")) + '<br><span class="muted small" style="font-weight:400">' + esc(L(r.c, "note")) + "</span>" : esc((r.x.interventions || []).slice(0, 2).join(", ")) + " · " + esc(phase(r.x.phase)) + '<br><span class="muted small" style="font-weight:400">' + esc((r.x.conditions || []).slice(0, 2).join("; ")) + "</span>"; } },
        { key: "co", label: t("company"), cell: function (r) { return r.c ? (r.c.tickers || []).map(tk).join(" ") : (r.x.via === "sponsor" ? co(r.x.co) : esc(r.x.lead_sponsor)) + " " + tk(r.x.ticker); } },
        { key: "n", label: t("n"), num: 1, cell: function (r) { return r.x && r.x.enrollment != null ? r.x.enrollment : ""; } },
        { key: "src", label: t("source"), cls: "d", cell: function (r) { return r.c ? link(r.c.source.url, r.c.source.publisher) : nct(r.x.nct); } }];
      var W = 720, t0 = new Date(D.today + "T00:00:00Z").getTime(), yr = 365 * 864e5, lanes = {}, marks = "";
      rows.forEach(function (r) {
        var x = (new Date(r.sort + "T00:00:00Z").getTime() - t0) / yr; if (x > 1) return;
        var px = 10 + x * (W - 20), slot = Math.round(px / 7); lanes[slot] = (lanes[slot] || 0) + 1; var y = 50 - lanes[slot] * 8;
        marks += r.c ? '<rect class="reg" x="' + (px - 3.5).toFixed(1) + '" y="' + (y - 3.5) + '" width="7" height="7" rx="1"><title>' + esc(r.when + " " + L(r.c, "title")) + "</title></rect>" : '<circle cx="' + px.toFixed(1) + '" cy="' + y + '" r="3.5"><title>' + esc(r.when + " " + (r.x.interventions[0] || "") + " · " + r.x.phase) + "</title></circle>";
      });
      var ticks = "", d0 = new Date(t0);
      for (var m = 1; m <= 12; m += 2) { var d = new Date(Date.UTC(d0.getUTCFullYear(), d0.getUTCMonth() + m, 1)), px2 = 10 + (d.getTime() - t0) / yr * (W - 20); if (px2 > W - 10) break; ticks += '<line x1="' + px2.toFixed(1) + '" y1="54" x2="' + px2.toFixed(1) + '" y2="58"/><text x="' + px2.toFixed(1) + '" y="70" text-anchor="' + (px2 > W - 40 ? "end" : "middle") + '">' + d.toISOString().slice(0, 7) + "</text>"; }
      var strip = '<div class="strip"><svg viewBox="0 0 ' + W + ' 74" role="img" aria-label="' + esc(t("stripLab")) + '"><line x1="10" y1="54" x2="' + (W - 10) + '" y2="54"/>' + ticks + marks + '</svg><p class="muted small" style="margin:2px 0 6px">' + esc(t("stripLab")) + '</p><p class="legend strip-key"><span><i class="k-dot"></i>' + esc(t("stripDot")) + '</span><span><i class="k-sq"></i>' + esc(t("regDecision")) + "</span></p></div>";
      return subnav() + '<section><p class="note">' + esc(t("calNote")) + '</p><div class="filters"><label class="chk"><input type="checkbox" id="f-listed"' + (S.listed ? " checked" : "") + "> " + esc(t("listedOnly")) + "</label></div>" + strip + table("t-main", rows, cc) + "</section>";
    },
    more: function () {
      if (S.sub === "reading") return subnav() + '<section><p class="note">' + esc(t("readNote")) + '</p><div class="cards">' + D.reading.map(function (r) {
        var h = D.headlines[r.id] || [];
        return '<div class="card"><h3>' + link(r.url, r.name) + '</h3><p class="muted small">' + esc(lang === "zh" ? (CAD_ZH[r.cadence] || r.cadence) : r.cadence) + "</p><p>" + esc(L(r, "why")) + "</p>" +
          (h.length ? '<ul class="small">' + h.map(function (i) { return "<li>" + link(i.url, i.title) + ' <span class="muted">' + esc(i.date || "") + "</span></li>"; }).join("") + "</ul>" : (r.feed ? "" : '<p class="muted small">' + esc(t("noFeed")) + "</p>")) + "</div>";
      }).join("") + "</div></section>";
      if (S.sub === "method") return subnav() + '<section class="prose"><h2>' + esc(t("methodH")) + "</h2>" + t("methodP").map(function (p) { return '<p class="note">' + esc(p) + "</p>"; }).join("") +
        (D.assets || []).map(function (a) { return '<p class="note"><b>' + esc(a.name) + ":</b> " + esc(L(a, "note")) + " " + link(a.source, t("source")) + "</p>"; }).join("") +
        '</section><section class="prose"><h2>' + esc(t("rubricH")) + '</h2><p class="note">' + esc(t("rubricP")) + '</p><ol class="rubric">' + t("rubric").map(function (r) { return "<li>" + esc(r) + "</li>"; }).join("") + "</ol></section>";
      if (S.sub === "glossary") return subnav() + '<section><p class="note">' + esc(t("glossNote")) + '</p><dl class="gloss">' + (D.glossary || []).map(function (g) { return "<div><dt>" + esc(L(g, "term")) + "</dt><dd>" + esc(L(g, "def")) + "</dd></div>"; }).join("") + "</dl></section>";
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
    var h = '<div class="phead"><div><h2 id="panel-title">' + esc(coName(c)) + '</h2><p class="pmeta"><span>' + listing + "</span><span>" + esc(c.tier ? t(c.tier) : (t("roles")[c.role] || "")) + "</span>" + (p && p.hq ? "<span>" + esc(p.hq) + "</span>" : "") + '</p></div><button type="button" class="btn" id="panel-close">' + IC_X + esc(t("pClose")) + '</button></div><div class="pbody">';
    if (p) h += "<h3>" + esc(t("pOverview")) + "</h3><p>" + esc(L(p, "what")) + "</p>" + (L(p, "ai") ? '<p><b class="small">' + esc(t("pAi")) + ":</b> " + esc(L(p, "ai")) + "</p>" : "") + (L(p, "lead") ? '<p><b class="small">' + esc(t("pLead")) + ":</b> " + esc(L(p, "lead")) + "</p>" : "") +
      '<p class="muted small">' + [p.founded ? p.founded : "", p.listed || "", link(p.source.url, t("pSrc") + ": " + p.source.publisher), t("asOf") + " " + p.as_of, p.checked === "partly" ? esc(t("profPartly")) : ""].filter(Boolean).join(" · ") + "</p>";
    function kv(k, v, g) { return v == null || v === "" ? "" : "<div><span>" + (g ? term(g, k) : esc(k)) + "</span><b>" + v + "</b></div>"; }
    if (q && q.price != null) {
      var cur = q.currency === "USD" ? "$" : q.currency === "HKD" ? "HK$" : (q.currency || "") + " ";
      h += "<h3>" + esc(t("pMarket")) + '</h3><div class="mkt"><div><span class="muted small">' + esc(t("pPrice")) + '</span><br><span class="px">' + esc(cur) + money(q.price) + "</span></div>" +
        (q.spark && q.spark.length > 1 ? chart(q.spark) + '<div class="rl chart-x"><span>' + esc(q.spark_from || "") + "</span><span>" + esc(q.range_since ? t("pChartNew") : t("pChartYear")) + "</span><span>" + esc(q.as_of || "") + "</span></div>" : "") +
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
      h += "<p>" + esc(f("pTrials", { n: c.trials, s: c.stopped })) + ' · <a href="' + href("trials", "all", { company: c.key }) + '" data-close="1">' + esc(t("pSee")) + '</a></p>' + bars(c.by_phase, true);
      var due = rows.filter(function (x) { return x.bucket === "active" && x.phase_rank >= 3 && x.primary_completion >= D.today; }).sort(function (a, b) { return a.primary_completion < b.primary_completion ? -1 : 1; }).slice(0, 5);
      if (due.length) h += "<h3>" + term("primary_completion", t("pNext")) + "</h3><ul>" + due.map(function (x) { return '<li><span class="muted small">' + esc(x.primary_completion) + "</span> " + esc(x.interventions[0] || "") + " · " + esc(phase(x.phase)) + " · " + esc((x.conditions || [])[0] || "") + ' <span class="small">' + nct(x.nct) + "</span></li>"; }).join("") + "</ul>";
      var st = rows.filter(function (x) { return x.bucket === "stopped"; });
      if (st.length) h += "<h3>" + esc(t("pStopped")) + "</h3><ul>" + st.map(function (x) { return "<li>" + esc(x.interventions[0] || "") + " · " + esc(phase(x.phase)) + " · " + pill("stopped", status(x.status)) + ' <span class="small">' + nct(x.nct) + "</span>" + (x.why_stopped ? '<br><span class="muted small">' + esc(x.why_stopped) + "</span>" : "") + "</li>"; }).join("") + "</ul>";
    }
    var mine = (D.drugs || []).filter(function (d) { return c.sponsor_ids.indexOf(d.sponsor_id) >= 0; });
    if (mine.length) h += "<h3>" + esc(t("pDrugs")) + "</h3><ul>" + mine.map(function (d) { return "<li><b>" + esc(d.drug) + "</b> " + ogPill(d.origin) + (L(d, "ai_role") ? "<br>" + esc(L(d, "ai_role")) : "") + (d.source ? ' <span class="small">' + link(d.source.url, d.source.publisher || t("source")) + (d.checked === "snippet" ? " (" + esc(t("snip")) + ")" : "") + "</span>" : "") + (d.added_by === "scanner" ? ' <span class="muted small">(' + esc(f("byScan", { d: d.added })) + ")</span>" : "") + "</li>"; }).join("") + "</ul>";
    var ap = (D.approvals || []).filter(function (a) { return a.co === c.key; });
    if (ap.length) h += "<h3>" + esc(t("pApproved")) + "</h3><ul>" + ap.map(function (a) { return "<li><b>" + esc(a.drug) + "</b> · " + esc(a.regulator) + " " + esc(a.date) + "<br>" + esc(L(a, "text")) + ' <span class="small">' + link(a.source.url, a.source.publisher) + "</span></li>"; }).join("") + "</ul>";
    var sg = (D.signals || []).filter(function (i) { return (i.names || []).some(function (n) { return n.ticker === c.ticker || (c.proxy && n.ticker === c.proxy); }) && (c.ticker || i.title_en.indexOf(c.name.split(" ")[0]) >= 0); });
    if (sg.length) h += "<h3>" + esc(t("pSignals")) + "</h3><ul>" + sg.slice(0, 6).map(function (i) { return '<li><span class="muted small">' + esc(i.date) + " · " + esc(t("ty")[i.type]) + "</span><br>" + link(i.url, L(i, "title")) + "<br>" + '<span class="scores">' + "<span>" + esc(t("evidence")) + " " + score(i.evidence, "ev") + "</span><span>" + esc(t("market")) + " " + score(i.market, "mk") + "</span></span></li>"; }).join("") + "</ul>";
    var dl = (D.deals || []).filter(function (d) { return c.ticker && (d.tickers || []).indexOf(c.ticker) >= 0 || d.ai === c.name || d.pharma === c.name; });
    if (dl.length) h += "<h3>" + esc(t("pDeals")) + "</h3><ul>" + dl.map(function (d) { return '<li><span class="muted small">' + esc(d.date) + "</span> " + esc(d.ai) + " – " + esc(d.pharma) + "<br>" + (d.upfront_usd == null ? esc(t("undisclosed")) : esc(t("upfront")) + " " + dealUsd(d.upfront_usd) + " · " + esc(t("headline")) + " " + (d.headline_more_than ? esc(t("moreThan")) : "") + dealUsd(d.headline_usd)) + ' <span class="small">' + link(d.source.url, d.source.publisher) + "</span></li>"; }).join("") + "</ul>";
    var ev = D.events.filter(function (e) { return byNct(e.nct) && byNct(e.nct).co === c.key; });
    if (ev.length) h += "<h3>" + esc(t("pChanges")) + "</h3><ul>" + ev.slice(0, 6).map(function (e) { return '<li><span class="muted small">' + esc(e.date) + "</span> " + evLine(e) + ' <span class="small">' + nct(e.nct) + "</span></li>"; }).join("") + "</ul>";
    var links = [];
    if (rows.length) links.push(link("https://clinicaltrials.gov/search?spons=" + encodeURIComponent(c.name.replace(/\s*\(.*/, "")), t("pCt")));
    if (c.ticker && c.market === "US") links.push(link("https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=" + encodeURIComponent(c.ticker) + "&type=&dateb=&owner=include&count=40", t("pSec")));
    if (c.ticker && c.market === "HK") links.push(link("https://www.hkex.com.hk/Market-Data/Securities-Prices/Equities/Equities-Quote?sym=" + parseInt(c.ticker, 10), t("pHk")));
    if (links.length) h += "<h3>" + esc(t("pLinks")) + "</h3><p>" + links.join(" · ") + "</p>";
    return h + "</div>";
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
    document.getElementById("nav").innerHTML = Object.keys(VIEWS).map(function (k) { return '<a href="#' + k + '"' + (k === S.view ? ' aria-current="page"' : "") + ">" + icon(NAV_IC[k]) + '<span class="nl" data-w="' + esc(t("nav")[k]) + '">' + esc(t("nav")[k]) + "</span>" + (fresh[k] ? '<span class="badge" role="img" aria-label="' + esc(t("newLab")) + '" title="' + esc(t("newLab")) + '"></span>' : "") + "</a>"; }).join("");
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
    var html = V[S.view](), cap = plain(), cut = S.view === "today" || VIEWS[S.view].length ? html.indexOf("</section>") + 10 : 0;
    document.getElementById("main").innerHTML = cap ? html.slice(0, cut) + cap + html.slice(cut) : html;
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
    if (e.key === "/" && !e.ctrlKey && !e.metaKey && !e.altKey && !/^(INPUT|SELECT|TEXTAREA)$/.test(e.target.tagName) && !S.co) { e.preventDefault(); return document.getElementById("gs").focus(); }
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
  document.addEventListener("toggle", function (e) { if (e.target.classList && e.target.classList.contains("plain-cap")) store("ledger-plain", e.target.open ? "1" : "0"); }, true);
  window.addEventListener("scroll", function () { if (!document.getElementById("pop").hidden) hidePop(); }, true);
  document.addEventListener("focusin", function (e) { if (e.target.id === "gs" && e.target.value.trim().length >= 2) gsRun(e.target.value); });
  window.addEventListener("pagehide", function () { if (D) store("ledger-seen", D.generated_at); });
  S = parse(); chrome0();
  function chrome0() { Array.prototype.forEach.call(document.querySelectorAll("[data-t]"), function (el) { el.textContent = t(el.getAttribute("data-t")); }); }
  function get(url) { return fetch(url, { cache: "no-cache" }).then(function (r) { if (!r.ok) throw new Error(r.status); return r.json(); }); }
  get("data/ledger.json").catch(function () { return get("../data/ledger.json"); }).then(function (d) {
    D = d; D.trialMap = {}; D.sigMap = {}; D.evMap = {}; D.drugMap = {}; D.outcomeMap = {};
    (d.outcomes || []).forEach(function (x) { D.outcomeMap[x.nct] = x; });
    (d.drugs || []).forEach(function (x) { D.drugMap[x.sponsor_id + ":" + x.drug] = x; });
    d.trials.forEach(function (x) { D.trialMap[x.nct] = x; }); (d.signals || []).forEach(function (x) { D.sigMap[x.id] = x; }); d.events.forEach(function (x) { D.evMap[x.id] = x; });
    render(true);
  }).catch(function (e) { document.getElementById("main").innerHTML = '<p class="muted">' + esc(t("failed")) + "</p>"; if (window.console) console.error(e); });
})();
