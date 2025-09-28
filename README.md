# Ezz Digital Solutions Website

A futuristic, cinematic personal branding website showcasing expertise in creating complete digital ecosystems for businesses, startups, and influencers.

## Features

- **Futuristic Design**: 3D dynamic background with floating geometric shapes
- **Custom Cursor**: Interactive cursor with glow effects
- **Smooth Animations**: Framer Motion powered animations throughout
- **Responsive Design**: Mobile-first approach with full responsiveness
- **Modern Tech Stack**: Next.js 14, Tailwind CSS, Three.js
- **SEO Optimized**: Built-in SEO optimization and meta tags

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **3D Graphics**: Three.js with React Three Fiber
- **Deployment**: Ready for Vercel/Netlify

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd ezz-digital-solutions
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── globals.css          # Global styles and animations
│   ├── layout.js            # Root layout component
│   └── page.js              # Homepage
├── components/
│   ├── Navbar.js            # Navigation component
│   ├── Hero.js              # Hero section with 3D effects
│   ├── About.js             # About section with profile
│   ├── Services.js          # Services showcase
│   ├── CaseStudies.js       # Case studies section
│   ├── AutomationShowcase.js # AI automation demo
│   ├── Contact.js           # Contact form
│   ├── Footer.js            # Footer component
│   ├── CustomCursor.js      # Custom cursor effects
│   └── Background3D.js      # 3D background elements
├── public/
│   ├── logo.png             # Company logo
│   └── profile.jpg          # Profile image
└── README.md
```

## Customization

### Adding Your Images

1. Replace `public/logo.png` with your actual logo
2. Replace `public/profile.jpg` with your profile photo
3. Update image references in components if needed

### Updating Content

- **Hero Section**: Edit `components/Hero.js`
- **About Section**: Edit `components/About.js`
- **Services**: Edit the services array in `components/Services.js`
- **Case Studies**: Edit the caseStudies array in `components/CaseStudies.js`
- **Contact Info**: Update contact details in `components/Contact.js`

### Styling

- **Colors**: Update the color palette in `tailwind.config.js`
- **Fonts**: Modify font families in `tailwind.config.js`
- **Animations**: Customize animations in `app/globals.css`

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with zero configuration

### Netlify

1. Build the project: `npm run build`
2. Deploy the `out` folder to Netlify

## Performance Features

- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic code splitting for better performance
- **SEO**: Built-in SEO optimization with meta tags
- **Responsive**: Mobile-first responsive design

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is private and proprietary to Ezz Digital Solutions.

## Contact

- **Email**: alexa.spina@udspecialize.com
- **Phone**: +20 106 009 2277
- **Location**: Cairo, Egypt

---

Built with ❤️ by Ezz Digital Solutions
