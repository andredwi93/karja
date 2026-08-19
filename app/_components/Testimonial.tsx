import { Button } from "@/components/ui/button";
import { getTranslations } from "next-intl/server";
import ScrollReveal from "@/components/ScrollReveal";

export default async function Testimonial() {
  const t = await getTranslations("home");
  const testimonials = [
    {
      handle: "@diinasawwrr",
      role: "Jualan template CV ATS",
      avatar:
        "https://api.builder.io/api/v1/image/assets/TEMP/029e0645f2303f1b0edd90e6bdcebff33d58aa92?width=200",
      text: (
        <>
          Awalnya aku cuma{" "}
          <strong className="text-karja-green">bikin template CV ATS</strong>{" "}
          buat teman-teman kampus yang lagi cari magang.{" "}
          <strong className="text-karja-green">
            Banyak yang minta file-nya, jadi aku pikir kenapa nggak sekalian
            dijual aja.
          </strong>
          <br />
          <br />
          Aku upload ke Karja tanpa ekspektasi apa-apa. Minggu pertama cuma
          kejual beberapa, tapi ternyata lama-lama makin banyak yang beli.{" "}
          <strong className="text-karja-green">
            Sekarang tiap bulan ada aja sih yang download.
          </strong>
          <br />
          <br />
          Lumayan banget buat tambahan uang jajan.
        </>
      ),
    },
    {
      handle: "@ardisant77",
      role: "Jualan SaaS budgeting (subscription)",
      avatar:
        "https://api.builder.io/api/v1/image/assets/TEMP/7e1477764a8e87dee03f6e924d6e311c9341c52b?width=200",
      text: (
        <>
          Saya bekerja full-time di sebuah perusahaan logistik. Di sela waktu,
          saya{" "}
          <strong className="text-karja-green">bikin tools budgeting</strong>{" "}
          sederhana berbasis web untuk dipakai sendiri.
          <br />
          <br />
          Awalnya cuma untuk kebutuhan pribadi, tapi kemudian saya{" "}
          <strong className="text-karja-green">
            coba upload dan jual sebagai SaaS di Karja
          </strong>
          .
          <br />
          <br />
          Ternyata cukup banyak yang butuh solusi simpel seperti ini. Sekarang
          sudah ada{" "}
          <strong className="text-karja-green">
            user yang langganan tiap bulan.
          </strong>
          <br />
          <br />
          Buat saya, ini jadi cara membangun income tambahan dari sesuatu yang
          saya pakai sendiri.
        </>
      ),
    },
    {
      handle: "@rafipratama",
      role: "Buka konsultasi finansial",
      avatar:
        "https://api.builder.io/api/v1/image/assets/TEMP/48ad1fa4b7b592203e03e7f90afe45d7279f5334?width=200",
      text: (
        <>
          Aku kerja di bidang keuangan, dan sering bantu teman-teman buat ngatur
          budget dan planning finansial. Awalnya cuma bantu gratis, sekalian
          sharing ilmu.
          <br />
          <br />
          Akhirnya aku coba{" "}
          <strong className="text-karja-green">
            buka konsultasi finansial
          </strong>{" "}
          di Karja. Jujur awalnya iseng, siapa tahu ada yang butuh. Ternyata
          cukup banyak yang relate. Sekarang tiap minggu{" "}
          <strong className="text-karja-green">
            ada aja yang booking sesi
          </strong>
          .
          <br />
          <br />
          Lumayan, jadi ada tambahan pemasukan dari skill yang memang aku pakai
          sehari-hari.
        </>
      ),
    },
    {
      handle: "@citraayudew",
      role: "Buka layanan konseling",
      avatar:
        "https://api.builder.io/api/v1/image/assets/TEMP/b38b2487442bec0fd1585a75cf49c393c5882214?width=200",
      text: (
        <>
          Saya seorang konselor, dan biasanya buka sesi offline atau lewat
          referral. Tapi banyak juga yang sebenarnya butuh, cuma nggak tahu
          harus mulai dari mana.
          <br />
          <br />
          Akhirnya saya coba{" "}
          <strong className="text-karja-green">
            buka layanan konseling
          </strong>{" "}
          di Karja. Supaya{" "}
          <strong className="text-karja-green">lebih mudah diakses</strong>.
          <br />
          <br />
          Ternyata banyak yang merasa{" "}
          <strong className="text-karja-green">
            lebih nyaman booking secara online
          </strong>
          . Sekarang cukup rutin ada sesi tiap minggu.
          <br />
          <br />
          Rasanya menyenangkan,{" "}
          <strong className="text-karja-green">
            bisa bantu orang sekaligus membangun channel baru untuk praktik
            saya.
          </strong>
        </>
      ),
    },
  ];

  return (
    <>
      <section className="bg-primary py-16 lg:py-24 px-6">
        {/* Stat */}
        <ScrollReveal direction="up" className="text-center mb-16">
          <p className="text-white font-bold text-[80px] md:text-[128px] leading-none">
            167
          </p>
          <p className="text-white text-[20px] md:h3 font-normal mt-2">
            {t("product_sold")}
          </p>
        </ScrollReveal>

        {/* Testimonials grid */}
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
          {/* Column 1 */}
          <div className="flex flex-col gap-6 md:gap-10">
            {[testimonials[0], testimonials[2]].map((t, i) => (
              <ScrollReveal
                key={`col1-${i}`}
                delay={0.1 * i}
                direction="up"
                className="flex flex-col gap-5"
              >
                <div className="bg-white rounded-[32px] rounded-bl-[8px] p-8 relative">
                  <p className="text-black font-extrabold text-[40px] leading-none mb-2">
                    “
                  </p>
                  <p className="text-black text-[15px] font-normal leading-relaxed">
                    {t.text}
                  </p>
                </div>
                <div className="flex items-center gap-4 px-2">
                  <img
                    src={t.avatar}
                    alt={t.handle}
                    className="w-[60px] h-[60px] rounded-full object-cover shrink-0"
                  />
                  <div>
                    <p className="text-white font-bold text-t1">{t.handle}</p>
                    <p className="text-white/80 text-[14px] mt-0.5">{t.role}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-6 md:gap-10">
            {[testimonials[1], testimonials[3]].map((t, i) => (
              <ScrollReveal
                key={`col2-${i}`}
                delay={0.2 + 0.1 * i}
                direction="up"
                className="flex flex-col gap-5"
              >
                <div className="bg-white rounded-[32px] rounded-bl-[8px] p-8 relative">
                  <p className="text-black font-extrabold text-[40px] leading-none mb-2">
                    “
                  </p>
                  <p className="text-black text-[15px] font-normal leading-relaxed">
                    {t.text}
                  </p>
                </div>
                <div className="flex items-center gap-4 px-2">
                  <img
                    src={t.avatar}
                    alt={t.handle}
                    className="w-[60px] h-[60px] rounded-full object-cover shrink-0"
                  />
                  <div>
                    <p className="text-white font-bold text-t1">{t.handle}</p>
                    <p className="text-white/80 text-[14px] mt-0.5">{t.role}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FINAL PUNCHLINE ─── */}
      <section className="bg-primary py-16 px-6">
        <ScrollReveal direction="up" className="max-w-[1100px] mx-auto">
          <div className="bg-karja-bg rounded-[25px] p-6 md:p-8">
            {/* Top banner */}
            <div className="border border-primary rounded-[15px] bg-white p-4 text-center mb-6">
              <p className="text-black font-bold text-xl md:h3">
                {t("not_ready.title")}
              </p>
            </div>

            {/* Two panels */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
              {/* Left panel */}
              <div className="border border-primary rounded-[15px] bg-white p-4 relative overflow-hidden min-h-[320px]">
                <div className="border border-primary rounded-[10px] bg-white inline-block px-4 py-2 mb-4">
                  <p className="text-black text-t1">
                    {t("not_ready.wait_perfect")}
                  </p>
                </div>
                <div className="flex justify-center my-4">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/d410e9f484f78a90c8ee5482fc903ada1555bc59?width=600"
                    alt=""
                    className="w-[200px] md:w-[240px] object-contain"
                  />
                </div>
                <div className="border border-primary rounded-[10px] bg-white inline-block px-4 py-2 absolute bottom-4 right-4">
                  <p className="text-black text-t1">
                    {t("not_ready.never_start")}
                  </p>
                </div>
              </div>

              {/* Right panel */}
              <div className="border border-primary rounded-[15px] bg-white p-4 relative overflow-hidden min-h-[320px]">
                <div className="border border-primary rounded-[10px] bg-white inline-block px-4 py-2 mb-4">
                  <p className="text-black text-t1">
                    {t("not_ready.upload_share")}
                  </p>
                </div>
                <div className="flex justify-center my-4">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/b6f1fc9c1f8e17800af96f3c2d6aa3141ed546f3?width=600"
                    alt=""
                    className="w-[200px] md:w-[240px] object-contain"
                  />
                </div>
                <div className="border border-primary rounded-[10px] bg-white inline-block px-4 py-2 absolute bottom-4 right-4">
                  <p className="text-black text-t1">
                    {t("not_ready.maybe_need")}
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom banner */}
            <div className="border border-primary rounded-[15px] bg-white p-4 text-center">
              <p className="text-black font-bold text-xl md:h3">
                {t("not_ready.start_what_you_have")}
              </p>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="bg-primary pb-24 px-6 text-center">
        <ScrollReveal delay={0.2} direction="up">
          <p className="text-white font-semibold text-4xl md:text-h1">
            {t("not_ready.cta_heading")}
          </p>
          <p className="text-[32px] md:text-h1 font-semibold mt-1 text-white">
            {t.rich("not_ready.cta_subheading", {
              green: (chunks) => (
                <span className="text-tertiary">{chunks}</span>
              ),
            })}
          </p>
          <Button variant={"secondary"} className="mt-8">
            {t("not_ready.cta_button")}
          </Button>
        </ScrollReveal>
      </section>
    </>
  );
}
