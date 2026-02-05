# Trada Utsav - Developer Portfolio

A modern, dark-themed portfolio website for Trada Utsav, MCA student and software developer.

## Features

- **Bold Dark Theme** with Orange/Gold accent colors
- **Responsive Design** - Works perfectly on all devices
- **Smooth Animations** - Engaging scroll and fade-in effects
- **Modern UI Components** - Glass morphism effects and smooth transitions
- **Sections Included**:
  - Hero/Welcome Section
  - About Me
  - Skills & Expertise
  - Projects Showcase
  - Education & Qualifications
  - Contact Information

## Tech Stack

- **Next.js 15** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Styling
- **Next Themes** - Dark mode support
- **Responsive Design** - Mobile-first approach

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone [your-repo-url]

# Navigate to project directory
cd utsav-portfolio

# Install dependencies
npm install

# Run development server
npm run dev
```

Visit `http://localhost:3000` to see your portfolio.

## Customization

### Update Personal Information

Edit the components to add your actual information:
- `/components/hero.tsx` - Update hero text
- `/components/about.tsx` - Add your about content
- `/components/skills.tsx` - Update your skills
- `/components/projects.tsx` - Add your projects
- `/components/education.tsx` - Update education details
- `/components/contact.tsx` - Update contact info

### Change Colors

The color scheme is defined in `/styles/globals.css`:
- Orange/Gold primary color: `33 100% 52%`
- Dark background: `0 0% 8%`
- Light foreground: `0 0% 95%`

Modify these HSL values to change the entire theme instantly.

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Click Deploy

## License

© 2024 Trada Utsav. All rights reserved.
