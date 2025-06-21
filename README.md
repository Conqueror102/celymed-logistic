# LogiFlow - Logistics & Transportation Solutions

A modern, responsive website for LogiFlow, a comprehensive logistics and transportation company offering fleet management, staff bussing, and logistics services.

## 🚛 Project Overview

LogiFlow is a professional logistics and transportation company website built with React and TypeScript. The website showcases the company's comprehensive range of services including transportation & haulage, staff bussing, fleet management, and compliance services.

## ✨ Features

### 🎯 Core Services
- **Transportation & Haulage**: Reliable cargo transportation with real-time tracking
- **Staff Bussing Services**: Safe and comfortable staff transportation solutions
- **Fleet Supervision & Maintenance**: Comprehensive fleet management and preventive maintenance
- **Driver Welfare Management**: Dedicated support for professional drivers
- **Fleet Documentation & Records**: Complete documentation management with digital solutions
- **Insurance & Compliance Management**: Full insurance coverage and government compliance

### 🎨 Design Features
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Responsive Design**: Fully responsive across all devices (mobile, tablet, desktop)
- **Interactive Elements**: Hover effects, smooth scrolling, and dynamic content
- **Image Gallery**: Professional image grid showcasing company operations
- **Contact Integration**: Easy-to-use contact form for client inquiries

### 🛠 Technical Features
- **TypeScript**: Type-safe development for better code quality
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **Vite**: Fast build tool and development server
- **React Hooks**: Modern React patterns for state management
- **Lucide Icons**: Beautiful, customizable icons
- **Smooth Scrolling**: Enhanced user experience with smooth navigation

## 🚀 Technology Stack

- **Frontend Framework**: React 18.3.1
- **Language**: TypeScript 5.5.3
- **Styling**: Tailwind CSS 3.4.1
- **Build Tool**: Vite 5.4.2
- **Icons**: Lucide React 0.344.0
- **Development**: ESLint, PostCSS, Autoprefixer

## 📁 Project Structure

```
project/
├── assets/                    # Images and static assets
│   ├── celymed.jpg
│   ├── busess.jpg
│   ├── truck-in-line.avif
│   ├── ship.avif
│   └── ... (other images)
├── src/
│   ├── components/           # React components
│   │   ├── Header.tsx       # Navigation header
│   │   ├── Hero.tsx         # Hero section with carousel
│   │   ├── About.tsx        # About section
│   │   ├── Services.tsx     # Services showcase
│   │   ├── WhyChooseUs.tsx  # Why choose us section
│   │   ├── Contact.tsx      # Contact form
│   │   └── Footer.tsx       # Footer section
│   ├── App.tsx              # Main application component
│   ├── main.tsx             # Application entry point
│   └── index.css            # Global styles
├── tailwind.config.js       # Tailwind CSS configuration
├── vite.config.ts           # Vite configuration
├── package.json             # Dependencies and scripts
└── README.md               # This file
```

## 🎨 Color Scheme

The project uses a custom color palette defined in `tailwind.config.js`:

- **Primary Color**: `#A6CE3A` (Green) - Used for primary elements and highlights
- **Secondary Color**: `#008AD4` (Blue) - Used for secondary elements and accents

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd project
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint for code quality

## 📱 Responsive Design

The website is fully responsive and optimized for:
- **Mobile devices** (320px and up)
- **Tablets** (768px and up)
- **Desktop** (1024px and up)
- **Large screens** (1280px and up)

## 🎯 Key Sections

### 1. Header
- Responsive navigation menu
- Smooth scrolling to sections
- Professional branding

### 2. Hero Section
- Dynamic image carousel
- Compelling call-to-action
- Professional messaging

### 3. Services
- Six core service offerings
- Interactive cards with hover effects
- Professional imagery for each service

### 4. Why Choose Us
- Four key differentiators
- Professional image grid
- Detailed service explanations

### 5. Contact
- Contact form for inquiries
- Company information
- Professional contact details

## 🔧 Customization

### Adding New Services
1. Edit `src/components/Services.tsx`
2. Add new service object to the `services` array
3. Include appropriate icon, title, description, and image

### Updating Colors
1. Modify the color values in `tailwind.config.js`
2. Update the `primary` and `secondary` color palettes
3. Rebuild the project to apply changes

### Adding New Images
1. Place images in the `assets/` folder
2. Update component imports or src attributes
3. Ensure proper image optimization

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy Options
- **Vercel**: Connect your repository for automatic deployments
- **Netlify**: Drag and drop the `dist` folder
- **GitHub Pages**: Configure GitHub Actions for deployment
- **Traditional hosting**: Upload the `dist` folder to your web server

## 📞 Support

For questions or support regarding this project, please contact:
- **Email**: [Your Email]
- **Phone**: [Your Phone]
- **Website**: [Your Website]

## 📄 License

This project is proprietary and confidential. All rights reserved.

---

**Built with ❤️ for LogiFlow - Your Trusted Logistics Partner** 