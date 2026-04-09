export type Locale = "zh" | "en";
export type Localized<T> = Record<Locale, T>;

export const siteCopy = {
  brand: "W³ Labs",
  banner: {
    badge: { zh: "NEW", en: "NEW" },
    text: {
      zh: "2026 官网首版已上线: AI 活动、咨询、Agent 开发与算力服务一体化展示。",
      en: "2026 website first release is live: events, consulting, agent development, and compute in one unified experience.",
    },
  },
  nav: {
    items: [
      { href: "#mission", label: { zh: "使命", en: "Mission" } },
      { href: "#services", label: { zh: "服务", en: "Services" } },
      { href: "#cases", label: { zh: "案例", en: "Cases" } },
      { href: "/events", label: { zh: "活动", en: "Events" } },
      { href: "#partners", label: { zh: "伙伴", en: "Partners" } },
    ],
  },
  hero: {
    eyebrow: { zh: "AI 时代完整解决方案提供商", en: "Full-stack solutions for the AI era" },
    title: {
      zh: "立足深港, 连接全球 AI 生态",
      en: "Rooted in Shenzhen & Hong Kong, connected to the global AI ecosystem",
    },
    description: {
      zh: "W³ Labs 聚合全球 AI 活动、企业 AI 咨询、Agent 定制开发与算力服务, 帮助品牌与组织更快完成从认知到落地。",
      en: "W³ Labs combines global AI events, enterprise consulting, custom agent development, and compute services to move organizations from awareness to execution.",
    },
    primary: { zh: "查看近期活动", en: "See upcoming events" },
    secondary: { zh: "了解服务矩阵", en: "Explore services" },
    hints: [
      { zh: "高频入口", en: "Hot path" },
      { zh: "可预约咨询", en: "Consultation open" },
      { zh: "支持中英双语", en: "Bilingual ready" },
    ],
  },
  stats: [
    { value: "30+", label: { zh: "全球 AI 活动与合作场次", en: "Global AI events and collaborations" } },
    { value: "4", label: { zh: "核心业务能力", en: "Core business pillars" } },
    { value: "10x", label: { zh: "从内容认知到落地提速", en: "Faster from awareness to execution" } },
    { value: "24/7", label: { zh: "跨境协作与服务响应", en: "Cross-border delivery responsiveness" } },
  ],
  mission: {
    title: { zh: "我们是谁", en: "Who we are" },
    description: {
      zh: "我们是连接技术、商业与国际生态的执行团队。通过活动、咨询、开发与算力四条主线, 帮企业在 AI 时代找到真正可落地的增长路径。",
      en: "We are an execution-focused team connecting technology, business, and international ecosystems. Through four lines of work, we help organizations discover practical AI growth paths.",
    },
    cards: [
      {
        title: { zh: "全球视野", en: "Global reach" },
        body: { zh: "持续连接硅谷、深港与海外社区, 把前沿趋势转成可执行动作。", en: "Linking Silicon Valley, Shenzhen, Hong Kong, and global communities to turn trends into actions." },
      },
      {
        title: { zh: "商业落地", en: "Commercial execution" },
        body: { zh: "不是只讲概念, 而是把技术方案嵌进业务流程、活动增长与组织协同。", en: "Not abstract storytelling, but embedding AI into operations, growth, and team workflows." },
      },
      {
        title: { zh: "跨团队交付", en: "Cross-functional delivery" },
        body: { zh: "战略、内容、产品与工程协同推进, 提供从方案到上线的闭环。", en: "Strategy, content, product, and engineering aligned for end-to-end delivery." },
      },
    ],
  },
  content: {
    title: { zh: "AI 时代的挑战", en: "Challenges in the AI era" },
    items: [
      { title: { zh: "信息过载", en: "Signal overload" }, body: { zh: "AI 信息极度碎片化, 团队难以识别真正值得投入的方向。", en: "AI signals are fragmented, making it hard for teams to identify what truly matters." } },
      { title: { zh: "落地断层", en: "Execution gap" }, body: { zh: "很多组织停留在分享和试用阶段, 缺少能真正上线的方案与人。", en: "Many organizations stop at demos and pilots without a path to production." } },
      { title: { zh: "资源门槛", en: "Resource constraints" }, body: { zh: "跨境活动、Agent 开发、算力采购都存在门槛, 单点尝试成本高。", en: "Cross-border events, agent development, and compute sourcing all have high barriers to entry." } },
    ],
  },
  services: {
    title: { zh: "我们的解决方案", en: "Our solution stack" },
    items: [
      { id: "events", badge: { zh: "高频点击", en: "Hot path" }, title: { zh: "全球 AI 活动", en: "Global AI events" }, body: { zh: "策划和承接论坛、闭门会、工作坊与出海交流, 构建真实连接与转化场。", en: "Curated forums, roundtables, workshops, and market-entry events that create real network effects." } },
      { id: "consulting", badge: { zh: "企业级", en: "Enterprise" }, title: { zh: "企业 AI 咨询", en: "Enterprise AI consulting" }, body: { zh: "围绕战略、流程、培训与组织升级, 制定符合业务目标的 AI 路线图。", en: "Roadmaps for strategy, workflow redesign, enablement, and org transformation." } },
      { id: "agents", badge: { zh: "定制开发", en: "Custom build" }, title: { zh: "Agent 定制开发", en: "Custom agent development" }, body: { zh: "将知识库、自动化流程与多代理协作整合为业务工具, 直接进入工作流。", en: "Custom knowledge, automation, and multi-agent systems embedded into real workflows." } },
      { id: "compute", badge: { zh: "基础设施", en: "Infrastructure" }, title: { zh: "算力服务", en: "Compute services" }, body: { zh: "提供 GPU 资源对接、模型运行环境与部署支持, 降低试错成本。", en: "GPU sourcing, runtime environments, and deployment support to reduce infra friction." } },
    ],
  },
  cases: {
    title: { zh: "代表案例", en: "Selected cases" },
    items: [
      { title: { zh: "长沙 AI 智能体企业级应用实战论坛", en: "Changsha enterprise agent forum" }, body: { zh: "面向企业决策者与实施负责人, 聚焦 Agent 应用、落地流程与协作模式。", en: "A forum for decision makers and operators focused on agent adoption and deployment playbooks." }, tag: { zh: "活动案例", en: "Event case" } },
      { title: { zh: "品牌 AI 内容与社区增长体系", en: "AI content and community growth" }, body: { zh: "围绕品牌曝光、用户教育和转化链路, 设计内容矩阵与增长触点。", en: "Content architecture and community growth motions designed for education and conversion." }, tag: { zh: "内容案例", en: "Content case" } },
      { title: { zh: "企业内部 Agent 工作流原型", en: "Internal agent workflow prototype" }, body: { zh: "从知识检索到任务协同, 快速交付可试运行的内部 Agent 原型。", en: "A working internal agent prototype spanning retrieval, tasks, and team collaboration." }, tag: { zh: "产品案例", en: "Product case" } },
    ],
  },
  partners: {
    title: { zh: "合作伙伴", en: "Partners" },
    items: ["OpenAI", "Anthropic", "AWS", "Google Cloud", "DeepSeek", "Cloudflare"],
  },
  cta: {
    title: { zh: "从一次对话开始, 把 AI 变成你的增长杠杆", en: "Start with one conversation, then turn AI into a real growth lever" },
    body: { zh: "无论你要做活动、咨询、Agent 开发还是基础设施配置, 我们都能先帮你判断优先级, 再推进执行。", en: "Whether you need events, consulting, agents, or infrastructure, we help set priorities first and execute next." },
    primary: { zh: "预约交流", en: "Book a conversation" },
    secondary: { zh: "前往活动页", en: "Open events page" },
  },
  footer: {
    government: { zh: "政府合作入口", en: "Government partnership" },
    governmentBody: {
      zh: "面向园区、政府和产业平台的 AI 论坛、招商路演与培训合作, 可通过邮箱获取定制方案。",
      en: "For governments, parks, and industry platforms seeking AI forums, roadshows, or training, email us for a custom proposal.",
    },
    links: [
      { label: { zh: "邮箱", en: "Email" }, value: "hello@w3labs.top" },
      { label: { zh: "微信/合作", en: "WeChat / Partnership" }, value: "W3LABS-Global" },
      { label: { zh: "城市", en: "Cities" }, value: "Shenzhen · Hong Kong · Global" },
    ],
    copyright: { zh: "© 2026 W³ Labs. All rights reserved.", en: "© 2026 W³ Labs. All rights reserved." },
  },
  events: {
    title: { zh: "近期活动", en: "Upcoming events" },
    intro: { zh: "围绕 AI 智能体、企业应用与全球生态连接, 我们持续发起论坛、工作坊和闭门会。", en: "We run forums, workshops, and curated sessions around agents, enterprise AI, and global ecosystem building." },
    featured: {
      title: { zh: "长沙 · AI 智能体企业级应用实战论坛", en: "Changsha · Enterprise Agent Application Forum" },
      meta: { zh: "线下活动 · 2026 Q2 · 80-120 位企业嘉宾", en: "In-person · Q2 2026 · 80-120 enterprise guests" },
      body: { zh: "面向企业负责人、创新团队和产业伙伴, 重点讨论 Agent 在组织中的真实应用路径。", en: "Designed for business leaders, innovation teams, and ecosystem partners exploring real enterprise agent adoption." },
    },
    agenda: [
      { time: "13:30", title: { zh: "签到与自由交流", en: "Check-in and networking" } },
      { time: "14:00", title: { zh: "AI 智能体落地趋势分享", en: "Agent implementation trend keynote" } },
      { time: "15:00", title: { zh: "企业实战圆桌", en: "Enterprise use-case roundtable" } },
      { time: "16:00", title: { zh: "合作对接与闭门问答", en: "Partner matching and closed-door Q&A" } },
    ],
  },
} as const;
