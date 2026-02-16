<div align="center">
<h1>Haridwar University Official Portal</h1>
<p>A modern, responsive university portal with AI-powered chatbot, smooth animations, and video backgrounds</p>
</div>

## 🚀 Features

- **Modern UI Design** - Responsive design that works on desktop, tablet, and mobile devices
- **Video Backgrounds** - YouTube video backgrounds on hero and admission sections
- **AI Chatbot** - Google Gemini powered chatbot with intelligent responses
- **Smooth Navigation** - Scroll-spy navigation with smooth scrolling
- **Performance Optimized** - Built with Vite for fast builds and optimized bundle size
- **SEO Ready** - Meta tags and structured data for search engines

## 📋 Prerequisites

- Node.js 18.17.0 or higher
- npm or yarn package manager
- Google Gemini API key (for chatbot functionality)

## 🛠️ Installation & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/Anshuman-cs50/Haridwar-University-Landing-page.git
cd Haridwar-University-Landing-page
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure Environment Variables
Create a `.env.local` file in the root directory:
```bash
cp .env.example .env.local
```

Then add your Google API key:
```
VITE_GOOGLE_API_KEY=your_google_api_key_here
```

Get your API key from: https://aistudio.google.com/apikey

### 4. Run Locally
```bash
npm run dev
```

Open http://localhost:5173 in your browser.

## 🏗️ Building for Production

```bash
npm run build
npm run preview
```

This creates an optimized production build in the `dist/` directory.

## 📦 Project Structure

```
├── components/          # React components
│   ├── Navbar.tsx      # Navigation bar with scroll spy
│   ├── Hero.tsx        # Hero section with video background
│   ├── Chatbot.tsx     # AI chatbot widget
│   ├── SectionRenderer.tsx # Dynamic section renderer
│   └── ...
├── pages/              # Page components
├── services/           # API and external services
│   ├── api.ts          # Backend API calls
│   └── gemini.ts       # Google Gemini chatbot
├── constants.tsx       # CMS content and configuration
├── types.ts            # TypeScript type definitions
└── vite.config.ts      # Vite build configuration
```

## 🚀 Deployment on Vercel

This project is fully configured for Vercel deployment. See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions.

### Quick Deploy
1. Push to GitHub
2. Connect repository to Vercel
3. Add `VITE_GOOGLE_API_KEY` environment variable
4. Deploy

## 🛠️ Tech Stack

- **Frontend Framework**: React 19.2.4
- **Language**: TypeScript
- **Build Tool**: Vite 6.2.0
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM 7.13.0
- **AI/Chatbot**: Google Gemini API
- **Icons**: Lucide React
- **Deployment**: Vercel

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## 🎨 Customization

### Colors
Edit the Tailwind config in `index.html` to customize brand colors:
- Primary Blue: `#0047FF`
- Accent Green: `#00E676`
- Warning Yellow: `#FFEA00`
- Secondary Black: `#000000`

### Content
All page content is managed in `constants.tsx`. Update the `LANDING_SECTIONS` array to modify:
- Headings and descriptions
- Button text and links
- Statistics and metrics
- Course information
- Alumni and testimonials

### Videos
Update YouTube video IDs in the `constants.tsx` for hero and admission sections.

## 🤖 Chatbot Configuration

The chatbot uses Google Gemini API with intelligent fallback responses. It can answer questions about:
- Admissions and applications
- Placements and recruiters
- Campus facilities
- Courses offered
- Student life and alumni
- And more...

## 📱 Responsive Design

The site is fully responsive with breakpoints for:
- Mobile (320px+)
- Tablet (768px+)
- Desktop (1024px+)
- Large Screens (1280px+)

## 🔐 Security & Best Practices

- Environment variables are not committed to version control
- API keys should never be exposed in client-side code
- HTTPS is enforced on production
- Content Security Policy headers are configured

## 📄 License

This project is provided as-is for Haridwar University.

## 📞 Support

For issues or questions:
- Check the [DEPLOYMENT.md](./DEPLOYMENT.md) for deployment help
- Review component comments for code documentation
- Check the GitHub issues for known problems

---

Made with ❤️ for Haridwar University
