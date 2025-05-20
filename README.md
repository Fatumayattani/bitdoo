# Bitdoo 🌟

[![Netlify Status](https://api.netlify.com/api/v1/badges/<your-badge-id>/deploy-status)](https://app.netlify.com/sites/bitdoo/deploys)
![Next.js](https://img.shields.io/badge/Next.js-13.0%2B-blue)
![License](https://img.shields.io/badge/License-MIT-green)

**Real-time Bitcoin payments for the modern web.**  
Empowering creators to earn Bitcoin as their content/services are consumed, powered by Lightning Network ⚡

---

## Table of Contents
- [Features](#-features)
- [Live Demo](#-live-demo)
- [Project Architecture](#-project-architecture)
- [Built With](#-built-with)
- [Getting Started](#-getting-started)
- [Usage](#-usage)
- [Contributing](#-contributing)
- [Roadmap](#-roadmap)
- [Challenges](#-challenges)
- [License](#-license)
- [Acknowledgments](#-acknowledgments)

---

## 🚀 Features

- 💸 **Real-time Bitcoin Streaming**  
  Continuous micro-payments flow while users engage with content
- 🎨 **Creator-Centric Dashboard**  
  Track earnings, set rates, and visualize transactions with Recharts
- ⚡ **Lightning Network Integration**  
  Sub-second transactions with near-zero fees
- 🔒 **Non-Custodial Design**  
  WebLN enables direct wallet-to-wallet streaming
- 📱 **Responsive UI**  
  Built with mobile-first Tailwind CSS components

[![Bitdoo Demo](https://placehold.co/600x400?text=Live+Demo+Video)](https://your-demo-link.com)

---

## 🌐 Live Demo

Experience Bitdoo live: [bitdoo.netlify.app](https://bitdoo.netlify.app)  
*Requires a WebLN-compatible wallet like [Alby](https://getalby.com)*

---

## 🏗️ Project Architecture

```
bitdoo/
├── app/                   # Next.js 13 App Router
│   ├── (dashboard)/       # Creator dashboard
│   ├── api/               # Serverless endpoints
│   └── streaming/         # Payment streaming UI
│
├── lib/                   # WebLN utilities & payment logic
├── components/            # Radix UI primitives
├── public/                # Static assets
└── styles/                # Tailwind CSS configurations
```

### Key Technical Decisions
- **Serverless Architecture**: No backend required - direct wallet communication via WebLN
- **Optimized Rendering**: Dynamic imports for heavy components like charts
- **Type-Safe Forms**: React Hook Form + Zod for validation
- **State Management**: Context API for real-time payment updates

---

## 🛠️ Built With

| Category          | Technologies                                                                 |
|-------------------|-----------------------------------------------------------------------------|
| **Frontend**      | Next.js 13, React, TypeScript, Tailwind CSS, Radix UI                       |
| **Bitcoin**       | WebLN, Lightning Network                                                    |
| **Data Viz**      | Recharts                                                                    |
| **Forms**         | React Hook Form, Zod                                                        |
| **Deployment**    | Netlify                                                                     |

---

## 🚦 Getting Started

### Prerequisites
- Node.js ≥16.x
- WebLN-enabled browser extension (e.g., [Alby](https://getalby.com))

### Installation
```bash
git clone https://github.com/yourusername/bitdoo.git
cd bitdoo
npm install
npm run dev
```

---

## 💻 Usage

1. **Creator Setup**  
   - Visit `/dashboard`
   - Connect WebLN wallet
   - Set your streaming rate (sats/minute)

2. **Start Streaming**  
   - Share your unique streaming link
   - Viewers connect their wallets to start payment flow
   - Earn Bitcoin in real-time as they engage

![Streaming Flow](https://placehold.co/600x400?text=UI+Walkthrough+GIF)

---

## 🤝 Contributing

We ♥ open source! To contribute:
1. Fork the repository
2. Create your feature branch (`git checkout -b feat/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feat/amazing-feature`)
5. Open a Pull Request

---

## 🧭 Roadmap

### Next Priorities
- [ ] **Custodial Gateway**  
      Support non-WebLN users via Lightning Service Providers
- [ ] **Streaming Rate Controls**  
      Let creators set sats/second thresholds
- [ ] **Embeddable Widget**  
      `<BitdooButton />` for any website

[Full Roadmap →](https://github.com/yourusername/bitdoo/wiki/Roadmap)

---

## 🧗 Challenges

| Challenge                     | Solution Implemented                  |
|-------------------------------|---------------------------------------|
| Wallet Compatibility          | Created WebLN fallback detection      |
| Payment Streaming Simulation  | Micro-payment batches every 5 seconds |
| Live UI Updates               | Optimized React context providers     |
| Cross-Browser Testing         | Developed wallet detection toolkit    |

---

## 📜 License

Distributed under the MIT License. See `LICENSE` for details.

---

## 🙏 Acknowledgments

- Lightning Network developers for enabling instant Bitcoin transactions
- Radix UI team for accessible primitives
- WebLN community for browser standardization efforts