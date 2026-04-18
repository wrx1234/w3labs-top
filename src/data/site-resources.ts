export const siteResources = {
  mediaKit: {
    href: "/assets/W3Labs_Mediakit.zip",
    label: {
      zh: "品牌资料包",
      en: "Media Kit",
    },
  },
  contacts: {
    community: {
      zh: {
        image: "/assets/qr/community-zh.png",
        title: "加入社群",
        subtitle: "扫码加入 W3Labs 社群，领取活动通知与 AI 学习资料。",
        contact: "微信社群 / Community WeChat",
      },
      en: {
        image: "/assets/qr/community-en.png",
        title: "Join Community",
        subtitle: "Scan to join the W3Labs community for event updates and AI resources.",
        contact: "Contact TJ for community access",
      },
    },
    business: {
      zh: {
        image: "/assets/qr/business-zh.png",
        title: "商务合作",
        subtitle: "活动联办、企业咨询、Agent 开发与 RWA 产品化合作，请扫码联系。",
        contact: "商务微信 / Business WeChat",
      },
      en: {
        image: "/assets/qr/business-en.png",
        title: "Business Contact",
        subtitle: "For partnerships, consulting, agent delivery, or RWA productization, please reach out here.",
        contact: "Contact TJ for business inquiries",
      },
    },
  },
} as const

export const rootAnchors = {
  mission: "/#mission",
  rwa: "/#rwa",
  events: "/#events",
  services: "/#services",
  cases: "/#cases",
  partners: "/#partners",
  cta: "/#cta",
} as const
