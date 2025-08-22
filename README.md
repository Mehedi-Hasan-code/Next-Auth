# MyStore - Next.js 15 E-commerce App

A modern e-commerce application built with Next.js 15, featuring authentication, product management, and a clean user interface.

## Features

- **Landing Page** - Hero section, features, and product highlights
- **Authentication** - NextAuth.js with Google OAuth and credential login
- **Product Catalog** - Browse and search products
- **Product Details** - Detailed product information pages
- **Protected Dashboard** - Add new products (authenticated users only)
- **Responsive Design** - Mobile-friendly interface with Tailwind CSS

## Demo Credentials

For testing the credential login:

- **Email**: demo@example.com
- **Password**: password

## Getting Started

1. **Install dependencies**:

```bash
npm install
```

2. **Set up environment variables**:
   Copy `.env.local` and update the values:

```bash
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key-here

# Optional: For Google OAuth
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
```

3. **Run the development server**:

```bash
npm run dev
```

4. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
src/
├── app/
│   ├── api/
│   │   ├── auth/[...nextauth]/     # NextAuth API routes
│   │   ├── products/               # Product API endpoints
│   │   └── placeholder/            # Image placeholder generator
│   ├── dashboard/
│   │   └── add-product/            # Protected product creation page
│   ├── login/                      # Authentication page
│   ├── products/
│   │   ├── [id]/                   # Dynamic product details page
│   │   └── page.js                 # Product listing page
│   ├── layout.js                   # Root layout with navigation
│   └── page.js                     # Landing page
├── components/
│   ├── Navbar.js                   # Navigation component
│   ├── Footer.js                   # Footer component
│   └── ProductCard.js              # Product card component
├── lib/
│   ├── auth.js                     # NextAuth configuration
│   └── products.js                 # Product data management
└── middleware.js                   # Route protection middleware
```

## Pages Overview

### Public Pages

- **/** - Landing page with hero, features, and product highlights
- **/products** - Product catalog with search functionality
- **/products/[id]** - Individual product details
- **/login** - Authentication page

### Protected Pages

- **/dashboard/add-product** - Add new products (requires authentication)

## Technologies Used

- **Next.js 15** - React framework with App Router
- **NextAuth.js** - Authentication library
- **Tailwind CSS** - Utility-first CSS framework
- **React Hot Toast** - Toast notifications
- **Lucide React** - Icon library

## Authentication

The app supports two authentication methods:

1. **Credential Login** - Simple email/password authentication
2. **Google OAuth** - Social login (requires Google OAuth setup)

## API Routes

- `GET /api/products` - Fetch all products
- `POST /api/products` - Create new product
- `GET /api/products/[id]` - Fetch single product
- `GET /api/placeholder/[width]/[height]` - Generate placeholder images

## Development

The application uses mock data stored in memory. In a production environment, you would replace this with a proper database solution.

## Deployment

This app can be deployed on Vercel, Netlify, or any platform that supports Next.js applications.

For Vercel deployment:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Set up environment variables in Vercel dashboard
4. Deploy!

## License

This project is open source and available under the MIT License.
# Next-Auth
