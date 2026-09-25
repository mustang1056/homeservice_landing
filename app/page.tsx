"use client";

import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Bell,
  BriefcaseBusiness,
  Check,
  ChevronRight,
  Clock3,
  Hammer,
  MapPin,
  Menu,
  MessageCircle,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
  Wrench,
  X,
  Zap,
} from "lucide-react";

import { motion } from "framer-motion";
import { useState } from "react";

const RUSTORE_URL = "https://www.rustore.ru";

const categories = [
  {
    icon: "🧹",
    title: "Уборка",
    count: "124 специалиста",
  },
  {
    icon: "🔧",
    title: "Сантехник",
    count: "86 специалистов",
  },
  {
    icon: "⚡",
    title: "Электрик",
    count: "73 специалиста",
  },
  {
    icon: "🚚",
    title: "Переезд",
    count: "54 специалиста",
  },
  {
    icon: "🔨",
    title: "Ремонт",
    count: "112 специалистов",
  },
  {
    icon: "🌿",
    title: "Садовник",
    count: "38 специалистов",
  },
  {
    icon: "🧽",
    title: "Клининг",
    count: "92 специалиста",
  },
  {
    icon: "🏗️",
    title: "Строительство",
    count: "67 специалистов",
  },
];

const popularServices = [
  {
    icon: "🧹",
    category: "Уборка",
    title: "Уборка квартиры",
    rating: "4.9",
    reviews: "124",
    price: "от 500 ₽",
  },
  {
    icon: "🧽",
    category: "Клининг",
    title: "Уборка офиса",
    rating: "4.8",
    reviews: "98",
    price: "от 600 ₽",
  },
  {
    icon: "🪣",
    category: "Уборка",
    title: "Химчистка ковров",
    rating: "4.9",
    reviews: "56",
    price: "от 800 ₽",
  },
  {
    icon: "🔧",
    category: "Сантехника",
    title: "Установка унитаза",
    rating: "4.8",
    reviews: "72",
    price: "от 1 200 ₽",
  },
];

const steps = [
  {
    number: "01",
    icon: <PlusIcon />,
    title: "Создайте заказ",
    text: "Опишите задачу, укажите адрес, дату и удобное время.",
  },
  {
    number: "02",
    icon: <MessageCircle size={23} />,
    title: "Получите отклики",
    text: "Исполнители предложат свою цену и условия работы.",
  },
  {
    number: "03",
    icon: <Users size={23} />,
    title: "Выберите специалиста",
    text: "Изучите рейтинг, отзывы, портфолио и цену.",
  },
  {
    number: "04",
    icon: <BadgeCheck size={23} />,
    title: "Выполните работу",
    text: "Общайтесь в чате, принимайте работу и оставляйте отзыв.",
  },
];

function PlusIcon() {
  return <span className="plus-icon">+</span>;
}

export default function HomePage() {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <main className="site">
      {/* HEADER */}

      <header className="header">
        <div className="container header-inner">
          <a href="#" className="logo">
            <div className="logo-mark">
              <span>JG</span>
            </div>

            <div>
              <div className="logo-name">JobGo</div>
              <div className="logo-subtitle">Сервис услуг рядом</div>
            </div>
          </a>

          <nav className="nav">
            <a href="#services">Услуги</a>
            <a href="#how">Как это работает</a>
            <a href="#customers">Заказчикам</a>
            <a href="#workers">Исполнителям</a>
            <a href="#app">Приложение</a>
          </nav>

          <div className="header-actions">
            <button className="login-button">
              Войти
            </button>

            <a className="header-cta" href={RUSTORE_URL} target="_blank" rel="noreferrer">
              Скачать в RuStore
            </a>
          </div>

          <button
            className="mobile-menu-button"
            onClick={() => setMobileMenu(!mobileMenu)}
          >
            {mobileMenu ? (
              <X size={24} />
            ) : (
              <Menu size={24} />
            )}
          </button>
        </div>

        {mobileMenu && (
          <div className="mobile-menu">
            <a href="#services">Услуги</a>
            <a href="#how">Как это работает</a>
            <a href="#customers">Заказчикам</a>
            <a href="#workers">Исполнителям</a>
            <a href="#app">Приложение</a>

            <a className="mobile-menu-cta" href={RUSTORE_URL} target="_blank" rel="noreferrer">
              Скачать в RuStore
            </a>
          </div>
        )}
      </header>

      {/* HERO */}

      <section className="hero">
        <div className="hero-glow hero-glow-1" />
        <div className="hero-glow hero-glow-2" />

        <div className="container hero-grid">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="eyebrow">
              <span className="eyebrow-dot" />
              Сервис услуг рядом
            </div>

            <h1>
              Все услуги
              <span> рядом с вами</span>
            </h1>

            <p className="hero-description">
              Найдите проверенного специалиста или получите
              новые заказы — быстро, удобно и безопасно.
            </p>

            <div className="hero-buttons">
              <button className="primary-button">
                <Search size={19} />
                Найти исполнителя
                <ArrowRight size={18} />
              </button>

              <button className="secondary-button">
                <BriefcaseBusiness size={18} />
                Стать исполнителем
              </button>
            </div>

            <div className="hero-trust">
              <div className="trust-item">
                <div className="trust-icon">
                  <Search size={17} />
                </div>
                <div>
                  <strong>Быстрый поиск</strong>
                  <span>Нужного специалиста</span>
                </div>
              </div>

              <div className="trust-divider" />

              <div className="trust-item">
                <div className="trust-icon">
                  <ShieldCheck size={17} />
                </div>
                <div>
                  <strong>Проверенные</strong>
                  <span>Специалисты</span>
                </div>
              </div>

              <div className="trust-divider" />

              <div className="trust-item">
                <div className="trust-icon">
                  <BadgeCheck size={17} />
                </div>
                <div>
                  <strong>Безопасно</strong>
                  <span>И прозрачно</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* PHONES */}

          <motion.div
            className="phones-area"
            initial={{
              opacity: 0,
              x: 80,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.9,
              delay: 0.2,
            }}
          >
            <div className="floating-bubble bubble-tools">
              <Wrench size={21} />
            </div>

            <div className="floating-bubble bubble-zap">
              <Zap size={21} />
            </div>

            <div className="phone phone-main">
              <PhoneHome />
            </div>

            <div className="phone phone-secondary">
              <PhoneOrders />
            </div>

            <div className="phone-shadow shadow-main" />
            <div className="phone-shadow shadow-secondary" />
          </motion.div>
        </div>
      </section>

      {/* CATEGORIES */}

      <section
        id="services"
        className="section categories-section"
      >
        <div className="container">
          <div className="section-heading">
            <div>
              <div className="section-label">
                Популярное
              </div>

              <h2>Популярные категории</h2>

              <p>
                Выберите нужное направление и найдите
                подходящего специалиста.
              </p>
            </div>

            <button className="link-button">
              Все категории
              <ArrowRight size={17} />
            </button>
          </div>

          <div className="categories-grid">
            {categories.map((category, index) => (
              <motion.div
                className="category-card"
                key={category.title}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: index * 0.05,
                }}
              >
                <div className="category-emoji">
                  {category.icon}
                </div>

                <div className="category-title">
                  {category.title}
                </div>

                <div className="category-count">
                  {category.count}
                </div>

                <ChevronRight
                  className="category-arrow"
                  size={17}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* POPULAR SERVICES */}

      <section className="section services-section">
        <div className="container">
          <div className="section-heading">
            <div>
              <div className="section-label">
                Что можно заказать
              </div>

              <h2>Популярные услуги</h2>

              <p>
                Тысячи задач уже решаются с помощью JobGo.
              </p>
            </div>

            <button className="link-button">
              Смотреть все
              <ArrowRight size={17} />
            </button>
          </div>

          <div className="services-grid">
            {popularServices.map((service, index) => (
              <motion.div
                className="service-card"
                key={service.title}
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: index * 0.08,
                }}
              >
                <div className="service-image">
                  <div className="service-image-circle">
                    {service.icon}
                  </div>

                  <div className="service-tag">
                    {service.category}
                  </div>
                </div>

                <div className="service-info">
                  <h3>{service.title}</h3>

                  <div className="service-rating">
                    <Star
                      size={14}
                      fill="currentColor"
                    />

                    <strong>{service.rating}</strong>

                    <span>
                      ({service.reviews})
                    </span>
                  </div>

                  <div className="service-bottom">
                    <span>Стоимость</span>
                    <strong>{service.price}</strong>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AUDIENCE */}

      <section className="section audience-section">
        <div className="container">
          <div className="audience-grid">
            {/* CUSTOMER */}

            <motion.div
              id="customers"
              className="audience-card customer-card"
              initial={{
                opacity: 0,
                x: -30,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
            >
              <div className="audience-decoration" />

              <div className="audience-content">
                <div className="audience-badge">
                  Для заказчиков
                </div>

                <h2>
                  Решайте бытовые задачи
                  <span> без лишних хлопот</span>
                </h2>

                <p>
                  Найдите специалиста рядом с вами,
                  сравните предложения и выберите
                  подходящего исполнителя.
                </p>

                <ul>
                  <li>
                    <Check size={15} />
                    Проверенные специалисты
                  </li>

                  <li>
                    <Check size={15} />
                    Рейтинг и реальные отзывы
                  </li>

                  <li>
                    <Check size={15} />
                    Прозрачные цены
                  </li>

                  <li>
                    <Check size={15} />
                    Удобный чат
                  </li>
                </ul>

                <button className="audience-button">
                  Найти исполнителя
                  <ArrowRight size={17} />
                </button>
              </div>

              <div className="audience-person person-customer">
                <div className="person-head">
                  👩🏻
                </div>

                <div className="person-body">
                  <div />
                </div>
              </div>

              <div className="floating-mini-card">
                <ShieldCheck size={18} />
                <div>
                  <strong>Безопасно</strong>
                  <span>Проверяем исполнителей</span>
                </div>
              </div>
            </motion.div>

            {/* WORKER */}

            <motion.div
              id="workers"
              className="audience-card worker-card"
              initial={{
                opacity: 0,
                x: 30,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
            >
              <div className="audience-decoration" />

              <div className="audience-content">
                <div className="audience-badge">
                  Для исполнителей
                </div>

                <h2>
                  Получайте новые заказы
                  <span> каждый день</span>
                </h2>

                <p>
                  Создайте профиль, выбирайте подходящие
                  задачи и зарабатывайте на своих навыках.
                </p>

                <ul>
                  <li>
                    <Check size={15} />
                    Свободный график
                  </li>

                  <li>
                    <Check size={15} />
                    Вы сами выбираете заказы
                  </li>

                  <li>
                    <Check size={15} />
                    Управляйте своей ценой
                  </li>

                  <li>
                    <Check size={15} />
                    Развивайте рейтинг
                  </li>
                </ul>

                <button className="audience-button">
                  Стать исполнителем
                  <ArrowRight size={17} />
                </button>
              </div>

              <div className="audience-person person-worker">
                <div className="person-head">
                  👨🏻‍🔧
                </div>

                <div className="person-body worker-body">
                  <div />
                </div>
              </div>

              <div className="floating-mini-card worker-mini">
                <Zap size={18} />
                <div>
                  <strong>Новый заказ</strong>
                  <span>1 500 ₽ рядом с вами</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}

      <section
        id="how"
        className="section how-section"
      >
        <div className="container">
          <div className="center-heading">
            <div className="section-label">
              Просто и понятно
            </div>

            <h2>Как работает JobGo</h2>

            <p>
              От создания заказа до выполнения — всего
              несколько шагов.
            </p>
          </div>

          <div className="steps">
            {steps.map((step, index) => (
              <motion.div
                className="step"
                key={step.number}
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: index * 0.1,
                }}
              >
                <div className="step-number">
                  {step.number}
                </div>

                <div className="step-icon">
                  {step.icon}
                </div>

                <h3>{step.title}</h3>

                <p>{step.text}</p>

                {index < steps.length - 1 && (
                  <ArrowRight className="step-arrow" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}

      <section className="benefits-section">
        <div className="container">
          <div className="benefits-box">
            <div className="benefit">
              <div className="benefit-icon">
                <Zap size={25} />
              </div>

              <div>
                <strong>Быстрое решение</strong>
                <span>
                  Разместите задачу за 1 минуту
                </span>
              </div>
            </div>

            <div className="benefit">
              <div className="benefit-icon">
                <ShieldCheck size={25} />
              </div>

              <div>
                <strong>Проверенные исполнители</strong>
                <span>
                  Рейтинг, отзывы и портфолио
                </span>
              </div>
            </div>

            <div className="benefit">
              <div className="benefit-icon">
                <Sparkles size={25} />
              </div>

              <div>
                <strong>Честные цены</strong>
                <span>
                  Без скрытых платежей
                </span>
              </div>
            </div>

            <div className="benefit">
              <div className="benefit-icon">
                <BadgeCheck size={25} />
              </div>

              <div>
                <strong>Гарантия качества</strong>
                <span>
                  Контроль качества и поддержка
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* APP */}

      <section
        id="app"
        className="app-section"
      >
        <div className="app-glow" />

        <div className="container app-container">
          <div className="app-content">
            <div className="app-badge">
              <Sparkles size={15} />
              Приложение JobGo
            </div>

            <h2>
              Все услуги
              <span> в вашем телефоне</span>
            </h2>

            <p>
              Создавайте заказы, общайтесь с исполнителями,
              отслеживайте работу и получайте новые заказы
              прямо в приложении.
            </p>

            <div className="download-buttons">
              <a className="store-button" href={RUSTORE_URL} target="_blank" rel="noreferrer">
                <span className="store-icon rustore-icon">R</span>
                <span>
                  <small>Скачать в</small>
                  RuStore
                </span>
                <ArrowUpRight size={16} />
              </a>

              <div className="store-button store-button-muted">
                <span className="store-icon">▶</span>
                <span>
                  <small>Также доступно</small>
                  Google Play
                </span>
              </div>
            </div>
          </div>

          <div className="app-phones">
            <div className="app-phone app-phone-one">
              <PhoneHome />
            </div>

            <div className="app-phone app-phone-two">
              <PhoneOrders />
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}

      <section className="final-section">
        <div className="container">
          <div className="final-box">
            <div className="final-decoration final-decoration-1" />
            <div className="final-decoration final-decoration-2" />

            <div className="final-icon">
              <Wrench size={30} />
            </div>

            <div>
              <div className="final-label">
                JOBGO
              </div>

              <h2>
                Нужна помощь?
                <br />
                <span>JobGo рядом.</span>
              </h2>

              <p>
                Найдите специалиста или начните
                зарабатывать на своих навыках.
              </p>
            </div>

            <div className="final-actions">
              <button className="final-primary">
                Найти исполнителя
                <ArrowRight size={18} />
              </button>

              <button className="final-secondary">
                Стать исполнителем
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}

      <footer className="footer">
        <div className="container">
          <div className="footer-main">
            <div className="footer-brand">
              <a href="#" className="logo">
                <div className="logo-mark">
                  <span>JG</span>
                </div>

                <div>
                  <div className="logo-name">
                    JobGo
                  </div>

                  <div className="logo-subtitle">
                    Сервис услуг рядом
                  </div>
                </div>
              </a>

              <p>
                Помогаем людям находить специалистов,
                а специалистам — новые заказы.
              </p>
            </div>

            <div className="footer-column">
              <h4>JobGo</h4>
              <a href="#">О сервисе</a>
              <a href="#services">Услуги</a>
              <a href="#how">Как это работает</a>
              <a href="#app">Приложение</a>
            </div>

            <div className="footer-column">
              <h4>Пользователям</h4>
              <a href="#">Найти исполнителя</a>
              <a href="#">Стать исполнителем</a>
              <a href="#">Помощь</a>
              <a href="#">Контакты</a>
            </div>

            <div className="footer-column">
              <h4>Документы</h4>
              <a href="#">Пользовательское соглашение</a>
              <a href="#">Политика конфиденциальности</a>
              <a href="#">Правила сервиса</a>
            </div>
          </div>

          <div className="footer-bottom">
            <span>
              © {new Date().getFullYear()} JobGo
            </span>

            <span>
              Сделано для людей
            </span>
          </div>
        </div>
      </footer>
    </main>
  );
}

/* -------------------------------------------------------------------------- */
/* PHONE HOME */
/* -------------------------------------------------------------------------- */

function PhoneHome() {
  return (
    <div className="phone-screen">
      <div className="phone-status">
        <span>9:41</span>

        <div className="status-icons">
          <span>▮▮▮</span>
          <span>◉</span>
          <span>▰</span>
        </div>
      </div>

      <div className="phone-header">
        <div>
          <h4>Привет, Максим 👋</h4>
          <span>Найдём подходящего исполнителя</span>
        </div>

        <div className="phone-bell">
          <Bell size={17} />
          <i>2</i>
        </div>
      </div>

      <div className="phone-create">
        <div className="phone-create-icon">
          <Zap size={22} />
        </div>

        <div>
          <strong>Создать заказ</strong>
          <span>
            Опишите задачу — найдём исполнителя
          </span>
        </div>

        <div className="phone-plus">+</div>
      </div>

      <div className="phone-find">
        <div className="phone-find-icon">
          <Users size={19} />
        </div>

        <div>
          <strong>Найти мастера</strong>
          <span>
            Выберите исполнителя самостоятельно
          </span>
        </div>

        <ChevronRight size={17} />
      </div>

      <div className="phone-search">
        <Search size={17} />
        <span>Поиск услуг...</span>
      </div>

      <div className="phone-section-title">
        Категории
        <span>Все →</span>
      </div>

      <div className="phone-categories">
        <div>
          <b>🧹</b>
          <span>Уборка</span>
        </div>

        <div>
          <b>🔧</b>
          <span>Сантехник</span>
        </div>

        <div>
          <b>⚡</b>
          <span>Электрик</span>
        </div>

        <div>
          <b>🚚</b>
          <span>Переезд</span>
        </div>

        <div>
          <b>🔨</b>
          <span>Ремонт</span>
        </div>
      </div>

      <div className="phone-section-title">
        Популярные услуги
      </div>

      <div className="phone-services">
        <PhoneService
          icon="🧹"
          title="Уборка квартиры"
          price="от 500 ₽"
        />

        <PhoneService
          icon="🔧"
          title="Установка сантехники"
          price="от 1 200 ₽"
        />

        <PhoneService
          icon="⚡"
          title="Услуги электрика"
          price="от 700 ₽"
        />

        <PhoneService
          icon="🔨"
          title="Ремонт"
          price="от 900 ₽"
        />
      </div>

      <div className="phone-nav">
        <div className="active">
          <span>⌂</span>
          Главная
        </div>

        <div>
          <span>☷</span>
          Заказы
        </div>

        <div className="phone-nav-create">
          +
        </div>

        <div>
          <span>◌</span>
          Чаты
        </div>

        <div>
          <span>♙</span>
          Профиль
        </div>
      </div>
    </div>
  );
}

function PhoneService({
  icon,
  title,
  price,
}: {
  icon: string;
  title: string;
  price: string;
}) {
  return (
    <div className="phone-service">
      <div className="phone-service-image">
        {icon}
      </div>

      <strong>{title}</strong>

      <div className="phone-rating">
        <Star
          size={9}
          fill="currentColor"
        />
        4.8
      </div>

      <span>{price}</span>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* PHONE ORDERS */
/* -------------------------------------------------------------------------- */

function PhoneOrders() {
  return (
    <div className="phone-screen">
      <div className="phone-status">
        <span>9:41</span>

        <div className="status-icons">
          <span>▮▮▮</span>
          <span>◉</span>
          <span>▰</span>
        </div>
      </div>

      <div className="orders-header">
        <h3>Мои заказы</h3>

        <div className="orders-notification">
          <Bell size={17} />
          <i>4</i>
        </div>
      </div>

      <OrderCard
        title="Уборка квартиры"
        category="Уборка"
        address="Петровского 2"
        date="24.08.2026, 14:00"
        price="500 ₽"
        status="Ожидает"
        statusType="waiting"
      />

      <OrderCard
        title="Уборка офиса"
        category="Уборка"
        address="Офисный центр"
        date="19.08.2026, 09:30"
        price="400 ₽"
        status="Завершен"
        statusType="done"
        executor="Максим"
      />

      <OrderCard
        title="Установка унитаза"
        category="Сантехника"
        address="Ленина 15"
        date="18.08.2026, 16:45"
        price="1 200 ₽"
        status="Подтвержден"
        statusType="confirmed"
        executor="Сергей"
      />

      <OrderCard
        title="Ремонт розетки"
        category="Электрика"
        address="Пушкина 8"
        date="18.08.2026, 11:20"
        price="350 ₽"
        status="Подтвержден"
        statusType="confirmed"
      />

      <div className="phone-nav">
        <div>
          <span>⌂</span>
          Главная
        </div>

        <div className="active">
          <span>☷</span>
          Заказы
        </div>

        <div className="phone-nav-create">
          +
        </div>

        <div>
          <span>◌</span>
          Чаты
        </div>

        <div>
          <span>♙</span>
          Профиль
        </div>
      </div>
    </div>
  );
}

function OrderCard({
  title,
  category,
  address,
  date,
  price,
  status,
  statusType,
  executor,
}: {
  title: string;
  category: string;
  address: string;
  date: string;
  price: string;
  status: string;
  statusType: "waiting" | "done" | "confirmed";
  executor?: string;
}) {
  return (
    <div className="order-card">
      <div className="order-card-top">
        <strong>{title}</strong>

        <span
          className={`order-status ${statusType}`}
        >
          {status}
        </span>
      </div>

      <div className="order-line">
        <span>📁</span>
        {category}
      </div>

      <div className="order-line">
        <MapPin size={11} />
        {address}
      </div>

      <div className="order-line">
        <Clock3 size={11} />
        {date}
      </div>

      {executor && (
        <div className="order-line">
          <Users size={11} />
          Исполнитель: {executor}
        </div>
      )}

      <div className="order-bottom">
        <strong>{price}</strong>
        <ChevronRight size={15} />
      </div>
    </div>
  );
}

//12312312