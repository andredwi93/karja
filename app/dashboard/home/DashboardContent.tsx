"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Progress } from "@/components/ui/progress";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Bell, ChevronDown } from "lucide-react";
import Link from "next/link";
import LanguageSwitcher from "@/components/LanguageSwitcher";

interface DashboardContentProps {
  currentLocale: string;
  translations: {
    greeting: string;
    question: string;
    onboarding: any;
    activity: any;
  };
}

export default function DashboardContent({
  currentLocale,
  translations: t,
}: DashboardContentProps) {
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  // Simulated total products (0 means onboarding shows, >0 means it hides)
  const [totalProduct, setTotalProduct] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = sessionStorage.getItem("karja_onboarding");
    if (saved) {
      try {
        setCompletedSteps(JSON.parse(saved));
      } catch (e) {}
    }
  }, []);

  const toggleStep = (step: number, e: React.MouseEvent) => {
    e.preventDefault();
    setCompletedSteps((prev) => {
      const newSteps = prev.includes(step)
        ? prev.filter((s) => s !== step)
        : [...prev, step];
      sessionStorage.setItem("karja_onboarding", JSON.stringify(newSteps));
      return newSteps;
    });
  };

  const steps = [
    {
      id: 1,
      title: t.onboarding.step1.title,
      desc: t.onboarding.step1.desc,
      image: "/assets/dashboard/your-store.webp",
      href: "/dashboard/setup-store",
    },
    {
      id: 2,
      title: t.onboarding.step2.title,
      desc: t.onboarding.step2.desc,
      image: "/assets/dashboard/upload-store.webp",
      href: "/dashboard/upload-product",
    },
    {
      id: 3,
      title: t.onboarding.step3.title,
      desc: t.onboarding.step3.desc,
      image: "/assets/dashboard/share.webp",
      href: "/dashboard/share-link",
    },
  ];

  if (!mounted) return null;

  const showOnboarding = totalProduct === 0;
  const progressPercentage = (completedSteps.length / steps.length) * 100;

  return (
    <div className="flex flex-col h-full max-w-5xl mx-auto">
      {/* Header */}
      <header className="flex items-center justify-between py-6 border-b border-transparent">
        <div className="flex items-center gap-2">
          <SidebarTrigger className="-ml-2" />
          <h2 className="text-[20px] font-bold text-primary">Beranda</h2>
        </div>
        <div className="flex items-center gap-4">
          <button className="relative p-2 text-gray-600 hover:bg-gray-100 rounded-full">
            <Bell className="w-5 h-5" />
            <span className="absolute top-1 right-1 w-4 h-4 bg-[#F23D4D] text-white text-[10px] font-bold flex items-center justify-center rounded-full border-2 border-white">
              4
            </span>
          </button>
          <LanguageSwitcher currentLocale={currentLocale} />
        </div>
      </header>

      {/* Main Content */}
      <div className="pb-12 pt-2">
        <div className="mb-6">
          <h1
            className="text-[32px] font-bold mb-1 tracking-tight"
            dangerouslySetInnerHTML={{
              __html: t.greeting
                .replace("{name}", "Kimberly")
                .replace("<green>", '<span class="text-secondary">')
                .replace("</green>", "</span>"),
            }}
          />
          <p className="text-xl text-gray-700">{t.question}</p>
        </div>

        {showOnboarding && (
          <div className="mb-8">
            <Accordion
              type="single"
              collapsible
              defaultValue="onboarding"
              className="w-full"
            >
              <AccordionItem
                value="onboarding"
                className="border border-primary rounded-xl px-6 py-5 shadow-sm bg-white"
              >
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="font-bold text-gray-900">
                      {t.onboarding.title}
                    </h3>
                    <p className="text-[13px] text-gray-500 mt-1">
                      {t.onboarding.progress
                        .replace(
                          "{completed}",
                          completedSteps.length.toString(),
                        )
                        .replace("{total}", steps.length.toString())}
                    </p>
                  </div>
                  <AccordionTrigger className="hover:no-underline py-0 text-gray-600 font-normal text-[13px] gap-1 data-[state=open]:text-gray-900 group">
                    <span className="group-data-[state=open]:hidden">
                      {t.onboarding.show}
                    </span>
                    <span className="group-data-[state=closed]:hidden">
                      {t.onboarding.hide}
                    </span>
                  </AccordionTrigger>
                </div>

                <div className="mb-6">
                  <Progress
                    value={progressPercentage}
                    className="h-3.5 bg-[#EEF8CA] [&>div]:bg-btn-normal"
                  />
                </div>

                <AccordionContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {steps.map((step) => {
                      const isCompleted = completedSteps.includes(step.id);
                      return (
                        <Link
                          key={step.id}
                          href={step.href}
                          onClick={(e) => toggleStep(step.id, e)}
                          className="relative flex flex-col bg-[#F3F4F6] rounded-xl overflow-hidden border border-gray-200 hover:border-primary transition-all group"
                          style={{
                            textDecoration: "none",
                          }}
                        >
                          {/* Checkbox / Checkmark */}
                          <div className="absolute top-4 right-4 z-10">
                            {isCompleted ? (
                              <div className="w-6 h-6 rounded-full bg-btn-clicked flex items-center justify-center border-2 border-white shadow-sm">
                                <svg
                                  width="12"
                                  height="12"
                                  viewBox="0 0 12 12"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M10 3L4.5 8.5L2 6"
                                    stroke="#03836B"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </div>
                            ) : (
                              <div className="w-6 h-6 rounded-full border-[1.5px] border-gray-400 bg-white group-hover:border-primary transition-colors" />
                            )}
                          </div>

                          <div className="p-5 pb-0 text-center">
                            <h4 className={`font-bold mb-2 text-primary`}>
                              {step.title}
                            </h4>
                            <p className="text-[12px] text-gray-600 leading-relaxed min-h-[48px]">
                              {step.desc}
                            </p>
                          </div>

                          <div className="mt-auto pt-2 pb-0 flex justify-center w-full">
                            <div className="w-full flex justify-center object-contain overflow-hidden h-[170px] items-end">
                              <Image
                                src={step.image}
                                alt={step.title}
                                width={200}
                                height={210}
                                className="object-contain"
                                loading="eager"
                                priority
                              />
                            </div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        )}

        {/* Activity Section */}
        <div>
          <h3 className="text-xl font-bold mb-4">{t.activity.title}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <ActivityCard
              title={t.activity.total_product}
              value={totalProduct.toString()}
            />
            <ActivityCard title={t.activity.total_viewed} value="0" />
            <ActivityCard
              title={t.activity.total_sales}
              value="0"
              prefix="Rp"
            />
            <ActivityCard
              title={t.activity.total_income}
              value="0"
              prefix="Rp"
            />
          </div>

          {/* A button just for testing the disappearance of onboarding */}
          <div className="mt-12 p-4 border border-gray-100 bg-gray-50 rounded-lg flex items-center justify-between gap-4">
            <p className="text-sm text-gray-500">
              (Testing Tool: Klik tombol untuk mensimulasikan "total produk{" "}
              {">"} 0" / menghilangkan section onboarding)
            </p>
            <button
              onClick={() => setTotalProduct((prev) => (prev === 0 ? 1 : 0))}
              className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-lg text-sm font-semibold transition-colors"
            >
              Ubah Total Produk: {totalProduct}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function ActivityCard({
  title,
  value,
  prefix,
}: {
  title: string;
  value: string;
  prefix?: string;
}) {
  return (
    <div className="bg-white border border-primary rounded-xl p-5 shadow-sm">
      <div className="flex justify-between items-start mb-2">
        <h4 className="font-bold text-gray-900 text-sm">{title}</h4>
        <Image
          src="/assets/icons/dashboard/ic-info.svg"
          alt="info"
          width={16}
          height={16}
          className="opacity-60"
        />
      </div>
      <div className="flex items-baseline gap-1 mt-3">
        {prefix && (
          <span className="text-secondary font-bold text-sm">{prefix}</span>
        )}
        <span className="text-[32px] font-bold text-primary leading-none">
          {value}
        </span>
      </div>
    </div>
  );
}
