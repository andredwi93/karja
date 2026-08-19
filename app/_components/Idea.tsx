const productPills = [
  // Row 0
  [
    {
      label: "Mockup Produk",
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/0e6cff6680826976212fcb3d2808952b1e8e812d?width=56",
    },
    {
      label: "Template Website",
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/8839d7e7079fd4340e7d103da66ae7a70f56f314?width=53",
    },
    {
      label: "Template Notion",
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/c471b9f7b127621f882f4bfe78a372cd1ed0a1d3?width=56",
    },
    {
      label: "Ebook",
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/8ef64223d41e72808cdf4973c4a3b03305c2709e?width=49",
    },
    {
      label: "Template Canva",
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/4fdb1dfafbc182f44419883631db75bb439844cf?width=56",
    },
    { label: "Kumpulan Prompt AI", isSvg: true },
    {
      label: "Tiket",
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/680d01a296f238657b3c8bd533eaf297fbf283f3?width=56",
    },
  ],
  // Row 1
  [
    {
      label: "Event",
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/7d0106e7a1e0431b667485b58b37a7a098701f6b?width=56",
    },
    {
      label: "UI Kit / File Figma",
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/6e6369ff1c793c64e6a374220f900d506c0f26bc?width=38",
    },
    {
      label: "Source Code",
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/063db4887542b36d29594ec12fd96e78ab1b147b?width=56",
    },
    {
      label: "Bot WhatsApp",
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/113200db5a223d126ad9b33467ff96001422c908?width=56",
    },
    {
      label: "Modul Belajar",
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/47d59e54196b8f3db774c8373423208469b41282?width=53",
    },
    {
      label: "Konsultasi 1:1",
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/982f82eb9760523e5da53ebb2fe27b502bad0ce9?width=64",
    },
    {
      label: "Materi UTBK / CPNS",
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/65c08f4798f21ccfa3ff42156bbdea9ac74ac433?width=56",
    },
  ],
  // Row 2
  [
    {
      label: "Rekaman Kelas",
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/b878bf2e622070eda95341205139242935d3f77c?width=56",
    },
    {
      label: "Kelas Online",
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/5bbe37ab6e9aa232f7c5201286fe22bc756f7519?width=56",
    },
    {
      label: "Icon Package",
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/6e2c9ae4dd5337e5bb5d78a8a5f741f9cee2ed9e?width=56",
    },
    {
      label: "Template CV",
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/9498c2b9ceef5edc2be1588bd27a88201d3da3a8?width=56",
    },
    {
      label: "SAAS",
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/56bb604eff921503d22fca80b68ab437b6b5abd9?width=56",
    },
    {
      label: "Stok Foto / Video",
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/6e59721a1d365be6bb0d6cc46d37ba416c9ebb64?width=56",
    },
    {
      label: "Printables",
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/129c139116634ff93e25ddeccdf57e7d9895b6c0?width=56",
    },
    {
      label: "Webinar",
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/8def45b893a541b60824a1753a57dd1e803f1c7e?width=56",
    },
  ],
  // Row 3
  [
    {
      label: "Musik",
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/95d0914596807967eb4723f88a6307a367ebf3af?width=56",
    },
    {
      label: "Catatan Belajar",
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/b61a90564d326991fcc2c2be81f22d35d51f7d86?width=56",
    },
    {
      label: "Tour Guide",
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/e1e895150762761914786c895ce640d558327572?width=56",
    },
    {
      label: "Link Pembayaran",
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/cc598dcddf68c55a83f6fb66a48da13dbb841af1?width=56",
    },
    {
      label: "Template Proposal",
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/06a8e8ab226a045851182633c2dc282b5a28bd09?width=56",
    },
    {
      label: "Database Supplier",
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/587c97bda2c17c8246c04bbb862b245c6841bb93?width=56",
    },
    {
      label: "Kumpulan Resep",
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/178c8e810a686aafd0b5e4652d7b7d70d95cf722?width=56",
    },
  ],
];

function ProductPill({
  label,
  icon,
  isSvg,
}: {
  label: string;
  icon?: string;
  isSvg?: boolean;
}) {
  return (
    <div className="flex items-center gap-2 h-[46px] px-4 rounded-full bg-white shadow-md whitespace-nowrap shrink-0">
      {isSvg ? (
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#pill-ai-clip)">
            <path
              d="M21.0898 28H2.53517C1.13517 28 0 26.8648 0 25.4648V6.91017C0 5.51017 1.13517 4.375 2.53517 4.375H21.0898C22.4898 4.375 23.625 5.51017 23.625 6.91017V25.4648C23.625 26.8648 22.4898 28 21.0898 28Z"
              fill="#1FB570"
            />
            <path
              d="M22.2285 4.64453C22.4012 4.98695 22.4983 5.37399 22.4983 5.78349V24.0724C22.4983 25.6192 21.2441 26.8733 19.6974 26.8733H1.40844C0.998942 26.8733 0.612192 26.7762 0.269775 26.6035C0.686859 27.4319 1.54465 28 2.53515 28H21.0898C22.4898 28 23.625 26.8649 23.625 25.4649V6.9102C23.625 5.9197 23.0568 5.06191 22.2285 4.64453Z"
              fill="#0B765C"
            />
            <path
              d="M27.7649 4.04513C25.9808 3.43292 24.5685 2.02008 23.9572 0.235083C23.9091 0.0947916 23.7781 0 23.6297 0H23.627C23.4789 0 23.3476 0.0947916 23.2995 0.235083C22.6879 2.02242 21.273 3.43671 19.4854 4.04775C19.3451 4.09558 19.25 4.22683 19.25 4.37529C19.25 4.52375 19.3451 4.655 19.4854 4.70283C21.273 5.31358 22.6879 6.72787 23.2995 8.51462C23.3476 8.65521 23.4789 8.75 23.627 8.75H23.6297C23.7781 8.75 23.9091 8.65521 23.9572 8.51462C24.5685 6.72992 25.9805 5.31708 27.7649 4.70517C27.9052 4.65704 28 4.52579 28 4.37762V4.37267C28 4.2245 27.9052 4.09354 27.7649 4.04513Z"
              fill="#FFD15B"
            />
            <path
              d="M10.3372 9.37601C10.1083 8.76817 9.51414 8.34351 8.83543 8.34351H8.83398C8.15002 8.34409 7.56493 8.76963 7.33481 9.3728L2.42956 22.2522C2.17143 22.9295 2.51152 23.6878 3.18906 23.9459C3.86631 24.2038 4.62464 23.864 4.88277 23.1864L5.71343 21.0056C5.75485 20.8963 5.85956 20.8242 5.97652 20.8242H11.6573C11.7746 20.8242 11.8796 20.8965 11.9207 21.0062L12.7423 23.1826C13.001 23.8683 13.7678 24.2067 14.4468 23.9421C15.1217 23.6793 15.4437 22.9064 15.1879 22.2289L10.3372 9.37601ZM6.92764 17.8171L8.56681 13.5136C8.65898 13.2715 9.00198 13.2718 9.09356 13.5145L10.7176 17.818C10.787 18.0023 10.6511 18.1992 10.4539 18.1992H7.19102C6.99356 18.1992 6.85735 18.0015 6.92764 17.8171Z"
              fill="white"
            />
            <path
              d="M18.5308 8.62134C17.806 8.62134 17.2183 9.20905 17.2183 9.93384V22.7193C17.2183 23.4441 17.806 24.0318 18.5308 24.0318C19.2556 24.0318 19.8433 23.4441 19.8433 22.7193V9.93384C19.8433 9.20905 19.2556 8.62134 18.5308 8.62134Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="pill-ai-clip">
              <rect width="28" height="28" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ) : icon ? (
        <img
          src={icon}
          alt={label}
          className="w-7 h-7 object-contain shrink-0"
        />
      ) : null}
      <span className="text-black text-t1 font-normal font-jakarta">
        {label}
      </span>
    </div>
  );
}

import { getTranslations } from "next-intl/server";
import ScrollReveal from "@/components/ScrollReveal";

export default async function Idea() {
  const t = await getTranslations("home");
  return (
    <section id="idea" className="bg-karja-bg py-16 lg:py-24 overflow-hidden">
      {/* Heading */}
      <ScrollReveal direction="up" className="text-center mb-8 md:mb-12 px-6">
        <p className="text-black font-bold text-[32px] md:text-[64px] leading-tight">
          {t.rich("have_idea", {
            green: (chunks) => <span className="text-secondary">{chunks}</span>,
          })}
        </p>
        <p className="text-black text-[20px] md:text-h1 font-semibold mt-2">
          {t.rich("try", {
            green: (chunks) => <span className="text-secondary">{chunks}</span>,
          })}
        </p>
      </ScrollReveal>
      <ScrollReveal delay={0.2} direction="up" className="flex flex-col gap-5 pb-4 px-6 md:px-12">
        {productPills.map((row, rowIdx) => {
          let animationStyle = {};
          if (rowIdx === 0) {
            animationStyle = { animation: "marquee-left 40s linear infinite" };
          } else if (rowIdx === 1) {
            animationStyle = { animation: "marquee-right 40s linear infinite" };
          } else if (rowIdx === 2) {
            animationStyle = {
              animation: "marquee-left 50s linear infinite -15s",
            };
          } else if (rowIdx === 3) {
            animationStyle = {
              animation: "marquee-right 50s linear infinite -15s",
            };
          }

          return (
            <div
              key={rowIdx}
              className="flex w-max hover:[animation-play-state:paused]"
              style={{
                marginLeft:
                  rowIdx === 1
                    ? "2rem"
                    : rowIdx === 2
                      ? "0"
                      : rowIdx === 3
                        ? "4rem"
                        : "0",
                ...animationStyle,
              }}
            >
              {[0, 1, 2, 3].map((copyIdx) => (
                <div key={copyIdx} className="flex gap-3 pr-3">
                  {row.map((pill) => (
                    <ProductPill key={pill.label} {...pill} />
                  ))}
                </div>
              ))}
            </div>
          );
        })}
      </ScrollReveal>
    </section>
  );
}
