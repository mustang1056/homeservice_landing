import type { Metadata } from "next";
import PrivacyContent from "../../components/legal/PrivacyContent";

export const metadata: Metadata = {
  title: "Политика конфиденциальности — JobGo",
  description: "Политика конфиденциальности и обработки персональных данных JobGo",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
        <div className="mb-10">
          <div className="mb-3 text-sm font-semibold text-indigo-600">
            JobGo
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Политика конфиденциальности
          </h1>

          <p className="mt-3 text-sm text-slate-500">
            Дата публикации: 25 сентября 2026 года
          </p>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-10">
          <PrivacyContent />
        </div>
      </div>
    </main>
  );
}