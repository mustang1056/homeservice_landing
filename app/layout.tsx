import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "JobGo — Все услуги рядом",
  description:
    "Найдите проверенного исполнителя или получите новые заказы с JobGo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}