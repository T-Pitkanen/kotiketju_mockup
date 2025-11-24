# Kotiketju - Real Estate Platform

A modern, full-stack real estate platform built with Next.js 15, featuring property listings, tour booking system, admin dashboard, and blog functionality. All UI text is in Finnish.

## 🚀 Features

### Public Features
- **Property Listings** - Browse properties with advanced filtering (city, price range, property type)
- **Property Details** - View detailed property information with image galleries, amenities, and key features
- **Tour Booking System** - Book property tours with calendar view showing available dates and time slots
- **Contact Forms** - Contact realtors directly or send general inquiries
- **Favorites** - Save and manage favorite properties (requires authentication)
- **Blog** - Read articles about blockchain in real estate, and smart contracts
- **AI Chatbot** - Get instant answers about properties and services

### Admin Dashboard (`/dashboard`)
- **Property Management** - Create, edit, and delete property listings
- **Tour Management** - Manage tour availability with bulk date insertion, toggle availability, and search
- **Message Management** - View and respond to contact inquiries
- **Dashboard Stats** - Overview of properties, messages, and activities
- **Protected Routes** - All admin routes secured with authentication checks

### Technical Features
- Server-side rendering with Next.js 15 App Router
- Type-safe database access with Prisma ORM
- Supabase authentication with role-based access control
- Responsive design with Tailwind CSS
- Image optimization with Next.js Image component
- MDX-powered blog with syntax highlighting

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Database**: PostgreSQL (via Supabase)
- **ORM**: Prisma 6.18
- **Authentication**: Supabase Auth
- **Styling**: Tailwind CSS 4
- **UI Components**: React 19, Swiper, React Calendar
- **Content**: MDX with rehype-highlight and remark-gfm
- **Date Handling**: date-fns

## 📦 Getting Started

### Prerequisites
- Node.js 18+ 
- PostgreSQL database (or Supabase account)
- Git

### Installation

1. Clone the repository:
```bash
git clone https://github.com/T-Pitkanen/postgre.git
cd postgre
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
# Copy the example file
cp .env.example .env

# Edit .env with your credentials:
# - Supabase URL and keys
# - Database connection string
```

4. Set up the database:
```bash
# Generate Prisma client
npx prisma generate

# Run migrations (manually via Supabase SQL editor)
# Execute SQL files in prisma/migrations/ folder
```

5. (Optional) Seed the database:
```bash
npm run seed
```

6. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## 🔐 Admin Access

To create an admin user:

1. Sign up through Supabase Auth
2. In Supabase Dashboard, go to Authentication → Users
3. Edit the user and add to `raw_user_meta_data`:
```json
{
  "is_admin": true
}
```
4. Access admin dashboard at `/admin` with your credentials

## 📁 Project Structure

```
├── app/                    # Next.js app directory
│   ├── admin/             # Admin login page
│   ├── dashboard/         # Protected admin area
│   ├── api/               # API routes
│   ├── blog/              # Blog pages
│   ├── properties/        # Property listings & details
│   └── profile/           # User profile pages
├── components/            # React components
│   ├── dashboard/         # Admin dashboard components
│   └── properties/        # Property-related components
├── content/blog/          # MDX blog posts
├── lib/                   # Utility functions
├── prisma/               # Database schema & migrations
├── public/               # Static assets
└── server/               # Server utilities
```

## 🔒 Security Features

- Environment variables for sensitive data
- Row-level security (RLS) in Supabase
- Admin authentication on all dashboard routes
- Admin API route protection
- Secure session handling with Supabase SSR
- Input validation and sanitization

## 🎨 Key Components

- **TourBookingModal** - Calendar-based tour booking interface
- **TourManagement** - Admin UI for managing tour availability
- **PropertySearch** - Advanced property search with filters
- **ChatBot** - AI-powered customer support
- **DashboardStats** - Real-time statistics display

## 📝 Database Models

- **Property** - Real estate listings
- **TourBooking** - Tour booking requests
- **TourAvailability** - Available tour dates and time slots
- **Realtor** - Real estate agent information
- **GeneralContact** - General inquiry messages
- **ContactMessage** - Realtor-specific messages
- **Favorite** - User saved properties

## 🚀 Deployment

Build the project:
```bash
npm run build
```

Start production server:
```bash
npm start
```

Deploy to Vercel (recommended):
- Connect your GitHub repository to Vercel
- Add environment variables in Vercel dashboard
- Deploy automatically on push to main branch

## 📄 License

ISC

## 👤 Author

T-Pitkanen

## 🙏 Acknowledgments

Built with Next.js 15, Prisma, Supabase, and Tailwind CSS.
