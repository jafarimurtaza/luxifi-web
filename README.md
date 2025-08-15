# 🏡 Luxifi — Wi-Fi That Lives Up To Your Home

![Next.js](https://img.shields.io/badge/Next.js-15.4.5-black?style=flat&logo=next.js) ![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-06B6D4?style=flat&logo=tailwindcss) ![DaisyUI](https://img.shields.io/badge/DaisyUI-5.0-5A0EF8?style=flat) ![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=flat&logo=typescript) ![Strapi](https://img.shields.io/badge/Strapi-CMS-8E75FF?style=flat&logo=strapi) ![AWS](https://img.shields.io/badge/AWS-EC2%20%7C%20S3-FF9900?style=flat&logo=amazonaws)

_A premium web experience for luxury residential Wi-Fi systems — engineered by Afghan Geeks for seamless, always-on connectivity._

## 🌟 Overview

Luxifi delivers enterprise-grade Wi-Fi solutions designed exclusively for large, high-end homes. The platform showcases custom network engineering, invisible performance, and proactive care plans through a sophisticated web experience that matches the quality of the service.

## 🔧 Key Features

- 🌐 **Premium Web Experience**: Modern, responsive design with glass morphism and luxury theming
- 📱 **Fully Responsive**: Optimized for desktop, tablet, and mobile viewing
- ⚡ **Performance Optimized**: Next.js 15 with App Router and Turbopack for lightning-fast builds
- 🎨 **Advanced Animations**: Framer Motion with SSR-safe, view-based triggers
- 📊 **CMS Integration**: Headless Strapi for content management and media handling
- 🔒 **Secure Contact**: Resend integration for reliable email delivery
- ☁️ **Cloud Ready**: AWS S3 integration for media storage and CDN delivery
- 🎯 **SEO Optimized**: Built-in SEO components and meta management
- 🔄 **Real-time Updates**: Dynamic content updates through Strapi APIs
- 📧 **Contact Management**: Automated inquiry handling and notification system

## 🏗️ Architecture

### Content Structure

```
📁 Luxifi Website
├── 🏠 Home (hero, features, testimonials)
├── 🛠️ Approach (methodology, promises, differentiators)
├── 💻 Technology (network components, security, hardware)
├── 🔧 Maintenance (care plans, monitoring, support)
├── 📞 Contact (inquiry forms, consultation booking)
└── ⚙️ Admin (Strapi CMS backend)
```

### Technology Stack

- **Frontend**: Next.js 15 (App Router), React 19
- **Styling**: Tailwind CSS v4, DaisyUI (luxury theme)
- **Animation**: Framer Motion (SSR-safe)
- **CMS**: Strapi (headless, self-hosted)
- **Email**: Resend (transactional)
- **Hosting**: AWS EC2 (app + CMS), S3 (media storage)
- **Database**: PostgreSQL (production), SQLite (development)

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- Yarn or npm
- AWS account (S3, EC2)
- Resend account
- Strapi instance

### Installation

```bash
# Clone repository
git clone https://github.com/Afghan-Geeks/luxifi-web.git
cd luxifi-web

# Install dependencies
yarn install
# or
npm install

# Configure environment
cp .env.example .env.local
# Edit .env.local with your credentials

# Start development server
yarn dev
# or
npm run dev
```

### Environment Configuration

```env
# Application
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# CMS Integration
STRAPI_URL=https://your-strapi-domain
STRAPI_API_TOKEN=your_strapi_token

# Email Service
RESEND_API_KEY=your_resend_key
RESEND_FROM="Luxifi <hello@luxifi.com>"

# AWS Storage
NEXT_PUBLIC_S3_BUCKET=luxifi-media
NEXT_PUBLIC_S3_REGION=us-east-1
NEXT_PUBLIC_S3_PREFIX=https://luxifi-media.s3.amazonaws.com
```

## 🌐 Deployment

### AWS Production Setup

```bash
# Build application
- ADD Later
```

### Strapi CMS Setup

- Deploy on EC2 with PostgreSQL
- Configure S3 upload provider
- Set up admin panel with SSL
- Create content types for pages and components

## 📋 Available Scripts

```bash
yarn dev          # Start development server with Turbopack
yarn build        # Build for production
yarn start        # Start production server
yarn lint         # Run ESLint
yarn type-check   # Run TypeScript checks
```

## 🎨 Design System

### Theme Configuration

- **Primary Colors**: Luxury gold/amber palette
- **Typography**: Montserrat variable font
- **Components**: Glass morphism, soft shadows
- **Animations**: Subtle, performance-focused
- **Responsive**: Mobile-first approach

## 🏢 About

### Development Partner

**Afghan Geeks** - A product-focused software development team specializing in robust, maintainable web systems. Afghan Geeks designed, built, and maintains the complete Luxifi web experience, integrations, and deployment infrastructure.

## 📞 Contact & Support

- **Technical Support**: Afghan Geeks development team - [info@afghangeeks.com](mailto:info@afghangeeks.com) | [www.afghangeeks.com](https://www.afghangeeks.com)
- **Repository**: `https://github.com/Afghan-Geeks/luxifi-web.git`

## 📄 License

Copyright © 2024 Luxifi. All rights reserved.

---

_Built with precision by Afghan Geeks. Designed for luxury by Luxifi._
