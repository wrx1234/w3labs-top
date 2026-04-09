"use client";

import { CalendarDays, MapPin, Users, Send } from "lucide-react";
import { useLang } from "@/context/LangContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const featured = {
  title: { zh: "长沙 · AI 智能体企业级应用实战论坛", en: "Changsha · AI Agent Enterprise Forum" },
  meta: { zh: "2026 Q2 · 长沙 / 深圳 · 80-120人", en: "2026 Q2 · Changsha / Shenzhen · 80-120 guests" },
  body: { zh: "聚焦 AI Agent 在企业级场景中的落地实践，涵盖量化交易、法律合规、物联网、AI 员工系统等方向。", en: "Focusing on AI Agent deployment in enterprise scenarios, covering quantitative trading, legal compliance, IoT, AI employee systems." },
};

const agenda = [
  { time: "09:00", title: { zh: "签到 & 社交", en: "Check-in & Networking" } },
  { time: "09:30", title: { zh: "开场 & 主题演讲", en: "Opening & Keynote" } },
  { time: "10:30", title: { zh: "AI Agent 工程化实战", en: "AI Agent Engineering" } },
  { time: "12:00", title: { zh: "午餐 & 自由交流", en: "Lunch & Free Discussion" } },
  { time: "14:00", title: { zh: "行业案例分享", en: "Industry Case Studies" } },
  { time: "16:00", title: { zh: "圆桌讨论 & 闭幕", en: "Panel Discussion & Closing" } },
];

export function EventsPage() {
  const { lang, t } = useLang();

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 py-24 pb-20">
      <section className="grid gap-6 rounded-[2rem] border border-border bg-card/40 p-8 lg:grid-cols-[1.1fr_0.9fr] lg:p-12">
        <div>
          <div className="inline-flex rounded-full bg-primary px-3 py-1 text-xs font-black text-black">{t("活动页", "Events")}</div>
          <h1 className="mt-5 text-4xl font-black tracking-tight sm:text-6xl">{t("活动与论坛", "Events & Forums")}</h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-muted-foreground">{t("W³ Labs 定期在全国各城市举办 AI 产业落地活动。", "W³ Labs regularly hosts AI industry events across cities in China.")}</p>
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            <div className="rounded-3xl border border-border bg-background p-4"><CalendarDays className="h-5 w-5 text-primary" /><p className="mt-3 text-sm font-bold">2026 Q2</p></div>
            <div className="rounded-3xl border border-border bg-background p-4"><MapPin className="h-5 w-5 text-primary" /><p className="mt-3 text-sm font-bold">Changsha / Shenzhen</p></div>
            <div className="rounded-3xl border border-border bg-background p-4"><Users className="h-5 w-5 text-primary" /><p className="mt-3 text-sm font-bold">80-120 Guests</p></div>
          </div>
        </div>
        <Card className="bg-[linear-gradient(180deg,rgba(34,197,94,0.12),transparent_45%)]">
          <CardContent className="space-y-4">
            <span className="rounded-full bg-primary px-3 py-1 text-xs font-black text-black">{t("重点活动", "Featured")}</span>
            <h2 className="text-2xl font-black">{lang === 'zh' ? featured.title.zh : featured.title.en}</h2>
            <p className="text-sm font-semibold text-primary">{lang === 'zh' ? featured.meta.zh : featured.meta.en}</p>
            <p className="text-sm leading-7 text-muted-foreground">{lang === 'zh' ? featured.body.zh : featured.body.en}</p>
          </CardContent>
        </Card>
      </section>

      <section className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
        <Card>
          <CardContent>
            <h2 className="text-2xl font-black">{t("活动流程", "Agenda")}</h2>
            <div className="mt-6 space-y-4">
              {agenda.map((item) => (
                <div key={item.time} className="flex gap-4 rounded-2xl border border-border p-4">
                  <div className="min-w-14 rounded-xl bg-primary px-3 py-2 text-center text-sm font-black text-black">{item.time}</div>
                  <div className="text-sm font-medium text-muted-foreground">{lang === 'zh' ? item.title.zh : item.title.en}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <div className="flex items-center justify-between gap-3">
              <div>
                <h2 className="text-2xl font-black">{t("报名表单", "Registration")}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{t("先收集基础信息, 后续可接 Typeform/CRM/邮件系统。", "Collecting essential info, ready to connect CRM or email.")}</p>
              </div>
            </div>
            <form className="mt-6 grid gap-4 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-medium text-muted-foreground"><span>{t("姓名", "Name")}</span><input className="h-12 rounded-2xl border border-border bg-background px-4 outline-none ring-0 transition focus:border-primary" placeholder={t("请输入姓名", "Your name")} /></label>
              <label className="grid gap-2 text-sm font-medium text-muted-foreground"><span>{t("公司/机构", "Company")}</span><input className="h-12 rounded-2xl border border-border bg-background px-4 outline-none transition focus:border-primary" placeholder={t("请输入公司或机构", "Company or organization")} /></label>
              <label className="grid gap-2 text-sm font-medium text-muted-foreground"><span>{t("职位", "Role")}</span><input className="h-12 rounded-2xl border border-border bg-background px-4 outline-none transition focus:border-primary" placeholder={t("请输入职位", "Job title")} /></label>
              <label className="grid gap-2 text-sm font-medium text-muted-foreground"><span>{t("邮箱", "Email")}</span><input type="email" className="h-12 rounded-2xl border border-border bg-background px-4 outline-none transition focus:border-primary" placeholder="name@company.com" /></label>
              <label className="grid gap-2 text-sm font-medium text-muted-foreground sm:col-span-2"><span>{t("你最关注的话题", "Topics of interest")}</span><textarea className="min-h-32 rounded-2xl border border-border bg-background px-4 py-3 outline-none transition focus:border-primary" placeholder={t("例如: Agent 工作流、企业培训、活动合作、算力支持...", "e.g., agent workflows, enterprise training, event partnership...")} /></label>
              <div className="sm:col-span-2">
                <Button size="lg" className="w-full text-black"><Send className="mr-2 h-4 w-4" />{t("提交报名", "Submit")}</Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
