# SMEC's Global Innovators Conclave 2026

A modern, responsive web application for SMEC's Global Innovators Conclave 2026 event.

## Tech Stack

- **Frontend**: React 19, TypeScript, Vite
- **Styling**: Tailwind CSS, GSAP animations
- **Backend**: Node.js, Express
- **Database**: Supabase
- **Authentication**: Supabase Auth

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
npm install
```

### Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
EMAIL_USER=your_email
EMAIL_PASS=your_email_password
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Deployment

### Vercel Deployment

1. Push your code to GitHub: `https://github.com/Infix8/GIC.git`
2. Import your repository in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

The `vercel.json` file is already configured for Vercel deployment.

### Environment Variables for Vercel

Make sure to add all environment variables in the Vercel dashboard:
- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`
- `EMAIL_USER`
- `EMAIL_PASS`

## Project Structure

```
├── src/
│   ├── components/     # React components
│   ├── pages/          # Page components
│   ├── hooks/          # Custom React hooks
│   ├── lib/            # Utilities and configurations
│   └── index.css       # Global styles
├── public/             # Static assets
├── vercel.json         # Vercel configuration
└── package.json        # Dependencies
```

## Features

- Responsive design
- GSAP animations
- Supabase authentication
- Email functionality
- Event registration
- Agenda management
- Speaker profiles
- Sponsor information

## License

Unlicense

## Contact

- LinkedIn: [Global Innovators Conclave](https://www.linkedin.com/in/global-innovators-conclave-01a1903a5)
- GitHub: [Infix8/GIC](https://github.com/Infix8/GIC.git)
