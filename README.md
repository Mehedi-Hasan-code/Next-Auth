# MyStore - Next.js E-commerce Application

A modern e-commerce web application built with Next.js 15, featuring product management, user authentication, and a responsive design.

## 🚀 Features

- **Product Catalog**: Browse and view detailed product information
- **User Authentication**: Google OAuth and credentials-based login
- **Product Management**: Add and manage products (authenticated users)
- **Responsive Design**: Mobile-first design with Tailwind CSS
- **Modern UI**: Clean interface with Lucide React icons
- **Toast Notifications**: User feedback with react-hot-toast

## 🛠️ Tech Stack

- **Framework**: Next.js 15.5.0 with App Router
- **Authentication**: NextAuth.js v5 (beta)
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React
- **Notifications**: React Hot Toast
- **Runtime**: React 19.1.0

## 📦 Setup & Installation

### Prerequisites

- Node.js 18+
- npm or yarn
- Google OAuth credentials (for Google login)

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd my-app
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Configuration

Create a `.env.local` file in the root directory:

```env
# NextAuth Configuration
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key-here

# Google OAuth (Get from Google Cloud Console)
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
```

### 4. Google OAuth Setup

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Enable Google+ API
4. Create OAuth 2.0 credentials
5. Add authorized redirect URIs:
   - `http://localhost:3000/api/auth/callback/google` (development)
   - `https://your-domain.com/api/auth/callback/google` (production)

### 5. Run Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see the application.

### 6. Build for Production

```bash
npm run build
npm start
```

## 🗺️ Route Summary

### Public Routes

| Route            | Description                                      |
| ---------------- | ------------------------------------------------ |
| `/`              | Homepage with hero section and featured products |
| `/login`         | Authentication page (Google OAuth + credentials) |
| `/products`      | Product catalog page                             |
| `/products/[id]` | Individual product detail page                   |

### Protected Routes (Requires Authentication)

| Route                    | Description                     |
| ------------------------ | ------------------------------- |
| `/dashboard/add-product` | Add new products to the catalog |

### API Routes

| Route                              | Method   | Description                          |
| ---------------------------------- | -------- | ------------------------------------ |
| `/api/auth/[...nextauth]`          | GET/POST | NextAuth.js authentication endpoints |
| `/api/products`                    | GET      | Fetch all products                   |
| `/api/products/[id]`               | GET      | Fetch specific product by ID         |
| `/api/placeholder/[...dimensions]` | GET      | Generate placeholder images          |

## 🔐 Authentication

### Demo Credentials

- **Email**: `demo@example.com`
- **Password**: `password`

### Google OAuth

Configure your Google OAuth credentials in the environment variables to enable Google login.

## 🎨 Components

- **Navbar**: Navigation with authentication status
- **Footer**: Site footer with links
- **ProductCard**: Reusable product display component

## 📱 Responsive Design

The application is fully responsive and optimized for:

- Mobile devices (320px+)
- Tablets (768px+)
- Desktop (1024px+)

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Update `NEXTAUTH_URL` to your Vercel domain
5. Update Google OAuth redirect URIs

### Environment Variables for Production

```env
NEXTAUTH_URL=https://your-vercel-domain.vercel.app
NEXTAUTH_SECRET=your-production-secret
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
