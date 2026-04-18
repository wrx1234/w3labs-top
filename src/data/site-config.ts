import type { Locale } from '@/lib/i18n';

export type Localized<T> = Record<Locale, T>;

export const siteConfig = {
  brand: 'W3Labs',
  mediaKitHref: '/assets/W3Labs_Mediakit.zip',
  contactAssets: {
    community: {
      zh: '/assets/qr/community-zh.png',
      en: '/assets/qr/community-en.png',
    },
    business: {
      zh: '/assets/qr/business-zh.png',
      en: '/assets/qr/business-en.png',
    },
  },
  nav: [
    { key: 'mission', href: '#mission', label: { zh: '我们是谁', en: 'About' } },
    { key: 'rwa', href: '#rwa', label: { zh: 'RWA', en: 'RWA' } },
    { key: 'content', href: '#content', label: { zh: '活动与内容', en: 'Content' } },
    { key: 'services', href: '#services', label: { zh: '服务', en: 'Services' } },
    { key: 'cases', href: '#cases', label: { zh: '案例', en: 'Cases' } },
    { key: 'partners', href: '#partners', label: { zh: '伙伴', en: 'Partners' } },
  ],
  seo: {
    zh: {
      title: 'W3Labs | AI 与 RWA 的跨境增长与产品化团队',
      description: 'W3Labs 提供活动与内容、AI 咨询与开发、RWA 结构设计与链上产品化支持，覆盖中文与英文双语官网。',
    },
    en: {
      title: 'W3Labs | Cross-border AI and RWA Productization Studio',
      description: 'W3Labs helps teams ship bilingual content, AI initiatives, and compliant RWA productization workflows for global markets.',
    },
  },
  hero: {
    eyebrow: { zh: 'AI x RWA 跨境增长工作室', en: 'AI x RWA cross-border growth studio' },
    title: {
      zh: '把复杂资产、复杂内容、复杂增长动作, 收口成真正能上线的官网与产品系统',
      en: 'We turn complex assets, content, and growth motions into launch-ready websites and product systems.',
    },
    description: {
      zh: 'W3Labs 连接深圳、香港与全球生态，提供活动与内容运营、AI 咨询与开发、RWA 产品化方案，以及面向中英双语市场的官网承接能力。',
      en: 'W3Labs connects Shenzhen, Hong Kong, and global ecosystems through content, AI execution, RWA productization, and bilingual web funnels built for SEO.',
    },
    primary: { zh: '查看活动与内容', en: 'Browse content' },
    secondary: { zh: '获取 Media Kit', en: 'Download media kit' },
  },
  mission: {
    title: { zh: '我们不是只做展示页', en: 'We do more than brochure sites' },
    description: {
      zh: '第一阶段先把路由、双语、内容承接与资源配置统一起来，后续再把案例、伙伴、表单与后台配置逐步接进去。',
      en: 'Phase one aligns routing, bilingual architecture, content delivery, and asset configuration, creating a clean base for CMS, cases, partners, and lead capture.',
    },
    items: [
      {
        title: { zh: '双语官网收口', en: 'Bilingual site architecture' },
        body: { zh: '采用 /zh 与 /en 路由，首页、内容页、案例页与活动页统一语言上下文。', en: 'A unified /zh and /en routing model across home, content, case, and event pages.' },
      },
      {
        title: { zh: '内容 SEO 承接', en: 'SEO-ready content system' },
        body: { zh: '活动、课程、教程、文章统一进入 Markdown 内容系统，方便后续扩展后台。', en: 'Events, tutorials, courses, and articles now fit a markdown content model that can later attach to a CMS.' },
      },
      {
        title: { zh: '资源差异化配置', en: 'Locale-specific assets' },
        body: { zh: '加入社群、商务合作、Media Kit 等资源支持中英差异配置。', en: 'Community QR, business contacts, and media kit assets can now differ by locale.' },
      },
    ],
  },
  rwa: {
    eyebrow: { zh: 'RWA 深度能力模块', en: 'RWA capability module' },
    title: { zh: '把复杂现实资产, 做成可发行、可分发、可交易、可运营的链上产品', en: 'Turn complex real-world assets into on-chain products that can be issued, distributed, traded, and operated.' },
    intro: {
      zh: '现实资产进入链上市场，难点从来不只是 tokenization。本质挑战在于资产结构、法律关系、发行路径、投资者准入、流转边界、定价机制与兑付运营能否被真正打通。',
      en: 'Real-world assets do not become marketable just by being tokenized. The hard part is connecting structure, legal rights, issuance, investor access, transfer rules, pricing, and post-issuance operations into one workable product.',
    },
    caseTitle: { zh: '案例拆解: Bitget x Republic x SpaceX pre-IPO', en: 'Case breakdown: Bitget x Republic x SpaceX pre-IPO' },
    caseBody: {
      zh: '这不是直接出售 SpaceX 股权，而是由 RepublicX 发行、以 SpaceX 流动性事件和价格表现为参考的结构化债务型权益。投资者获得的是对发行人的结构化权益，而不是底层股权本身。',
      en: 'This is not a direct sale of SpaceX equity. It is a structured issuer claim from RepublicX whose payoff references SpaceX liquidity events and price performance. Investors hold structured rights against the issuer, not direct equity.',
    },
    flow: [
      { title: { zh: 'Asset Structuring', en: 'Asset Structuring' }, body: { zh: '权利定义、参考标的映射、转让与兑付规则设计。', en: 'Define rights, reference asset mapping, transfer limits, and payout rules.' } },
      { title: { zh: 'Compliance & Legal Coordination', en: 'Compliance & Legal Coordination' }, body: { zh: '协同律所、持牌机构、SPV 与披露文件。', en: 'Coordinate counsel, licensed entities, SPVs, and disclosure workflows.' } },
      { title: { zh: 'Tokenization Infrastructure', en: 'Tokenization Infrastructure' }, body: { zh: 'permissioned token、链上登记、白名单与钱包准入。', en: 'Permissioned token rails, chain registry, whitelists, and wallet access control.' } },
      { title: { zh: 'Distribution & Access Control', en: 'Distribution & Access Control' }, body: { zh: '前端认购、KYC/KYB、限售流转与 OTC 支持。', en: 'Subscription flows, KYC/KYB, restricted transfers, and OTC support.' } },
      { title: { zh: 'Post-Issuance Operations', en: 'Post-Issuance Operations' }, body: { zh: '参考价格、企业行为、兑付、报表与对账。', en: 'Reference pricing, corporate actions, payout, reporting, and reconciliation.' } },
    ],
    cta: { zh: '联系商务咨询获取落地方案', en: 'Talk to us about an implementation plan' },
  },
  services: {
    title: { zh: '能力与服务线', en: 'Service lines' },
    items: [
      { title: { zh: '活动与内容运营', en: 'Events and content operations' }, body: { zh: '支持活动页、文章页、课程页与分发页面联动。', en: 'Event landing pages, article pages, course pages, and distribution funnels.' } },
      { title: { zh: 'AI 咨询与开发', en: 'AI consulting and builds' }, body: { zh: '从路线图到 Agent 原型与业务系统接入。', en: 'From strategic roadmaps to agent prototypes and workflow integration.' } },
      { title: { zh: 'RWA 产品结构设计', en: 'RWA product structuring' }, body: { zh: '围绕复杂资产、发行路径与合规边界做产品化方案。', en: 'Product design around complex assets, issuance mechanics, and compliance boundaries.' } },
      { title: { zh: '链上发行与运营基础设施', en: 'On-chain issuance and operations infra' }, body: { zh: '覆盖登记、白名单、兑付、对账和运营中台。', en: 'Registry, whitelists, payout, reconciliation, and operations back office.' } },
    ],
  },
  cases: {
    title: { zh: '落地案例', en: 'Selected case' },
    items: [
      {
        slug: 'spacex-pre-ipo',
        name: { zh: 'SpaceX pre-IPO 结构化案例', en: 'SpaceX pre-IPO structured case' },
        kicker: { zh: 'RWA / 结构化权益', en: 'RWA / structured exposure' },
        summary: { zh: '作为第一阶段，首页先聚焦一个案例，后续每个案例都可以扩为独立详情页。', en: 'Phase one focuses on one flagship case, with room to expand each case into its own detail page.' },
      },
    ],
  },
  partners: {
    title: { zh: '合作伙伴与社区成员', en: 'Partners and community members' },
    note: { zh: '本阶段先接入可替换的 mock 结构，后续后台可直接替换成 logo、人物卡片与链接。', en: 'Phase one ships a replaceable mock structure so the future admin can swap in logos, profile cards, and links.' },
    items: ['Global Exchange Partner', 'Legal & Compliance Partner', 'Research Community', 'Builder Network', 'Media Partner', 'Enterprise Pilot'],
  },
};
