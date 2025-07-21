# FarmSense AI - Intelligent Agricultural Management System

FarmSense AI is a comprehensive agricultural management platform that combines artificial intelligence, IoT sensor integration, and modern web technologies to help farmers optimize their crop management practices.

## 🌱 Features

### 🤖 AI-Powered Weed Detection
- Upload field images for instant weed identification
- AI-powered species recognition with confidence scoring
- Organic treatment recommendations tailored to detected weed types
- Coverage assessment and severity analysis
- Treatment action logging and tracking

### 📊 Real-Time Environmental Monitoring
- **Temperature Monitoring**: Track ambient temperature conditions
- **Humidity Tracking**: Monitor air moisture levels
- **Soil Moisture Analysis**: Real-time soil moisture content monitoring
- **Light Intensity Measurement**: Optimize growing conditions with light tracking
- Smart alerts and recommendations based on sensor data

### 🐛 Pest Control Management
- Integrated pest identification and management system
- Treatment recommendation engine
- Monitoring and reporting capabilities

### 📈 Analytics & Reporting
- Comprehensive dashboard with data visualization
- Historical trend analysis
- Treatment effectiveness tracking
- Environmental data logging

### 🔐 User Authentication
- Secure user registration and login
- Profile management
- Data privacy and security

## 🛠️ Technology Stack

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **UI Components**: shadcn/ui with Radix UI primitives
- **Styling**: Tailwind CSS
- **Backend**: Supabase (Database, Auth, Real-time subscriptions)
- **State Management**: TanStack Query (React Query)
- **Routing**: React Router DOM
- **Charts**: Recharts
- **Icons**: Lucide React
- **Forms**: React Hook Form with Zod validation

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm (install with [nvm](https://github.com/nvm-sh/nvm#installing-and-updating))
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone <YOUR_GIT_URL>
   cd farm-sense-ai-gcc-main
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   # Copy the example environment file
   cp .env.example .env.local
   
   # Add your Supabase configuration
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173` to see the application.

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   ├── Header.tsx      # Navigation header
│   ├── HeroSection.tsx # Landing page hero
│   ├── FeaturesSection.tsx
│   ├── IoTDashboard.tsx # Environmental monitoring
│   └── WeedDetectionModule.tsx # AI weed detection
├── pages/              # Route components
│   ├── Index.tsx       # Landing page
│   ├── Dashboard.tsx   # Main dashboard
│   ├── Auth.tsx        # Authentication
│   ├── WeedControl.tsx # Weed management
│   ├── PestControl.tsx # Pest management
│   └── Reports.tsx     # Analytics & reports
├── hooks/              # Custom React hooks
├── integrations/       # External service integrations
│   └── supabase/      # Supabase client & utilities
├── lib/               # Utility functions
└── App.tsx            # Main application component
```

## 🔧 Available Scripts

- **`npm run dev`** - Start development server
- **`npm run build`** - Build for production
- **`npm run build:dev`** - Build in development mode
- **`npm run preview`** - Preview production build
- **`npm run lint`** - Run ESLint

## 🌐 API Integration

FarmSense AI uses Supabase as its backend service, providing:

- **Authentication**: User registration, login, password reset
- **Database**: PostgreSQL for data storage
- **Real-time**: Live updates for sensor data
- **Storage**: Image upload and management
- **Edge Functions**: Server-side logic for AI processing

## 📱 Core Functionality

### Weed Detection Workflow
1. Upload field image via web interface or camera
2. AI model processes image for weed identification
3. System provides species identification with confidence score
4. Generates organic treatment recommendations
5. Logs treatment actions for tracking

### Environmental Monitoring
1. IoT sensors collect environmental data
2. Real-time data streaming to dashboard
3. Automated alerts for critical conditions
4. Historical data analysis and trends
5. Actionable recommendations based on conditions

## 🎨 UI/UX Features

- **Responsive Design**: Optimized for desktop, tablet, and mobile
- **Dark/Light Mode**: Theme switching support
- **Modern Interface**: Clean, intuitive design with smooth animations
- **Accessible**: Built with accessibility best practices
- **Progressive Enhancement**: Works across different browsers and devices

## 🔒 Security & Privacy

- Secure authentication with Supabase Auth
- Data encryption in transit and at rest
- Role-based access control
- Privacy-focused data handling
- GDPR compliance considerations

## 🚀 Deployment

### Using Lovable (Recommended)
1. Visit the [Lovable Project](https://lovable.dev/projects/1d3a07b5-2f91-46ee-8c96-1bac618d74eb)
2. Click Share → Publish
3. Your app will be automatically deployed

### Manual Deployment
1. Build the project: `npm run build`
2. Deploy the `dist` folder to your hosting service
3. Configure environment variables on your hosting platform

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📋 Roadmap

- [ ] Integration with additional IoT sensor types
- [ ] Advanced AI models for pest detection
- [ ] Mobile app development
- [ ] Integration with weather APIs
- [ ] Crop yield prediction models
- [ ] Multi-farm management capabilities
- [ ] API for third-party integrations

## 🐛 Bug Reports & Feature Requests

Please use the GitHub Issues tab to report bugs or request features. Provide detailed information including:
- Steps to reproduce (for bugs)
- Expected vs actual behavior
- Browser and device information
- Screenshots if applicable

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Backend powered by [Supabase](https://supabase.com/)
- Icons from [Lucide](https://lucide.dev/)

---

**FarmSense AI** - Empowering sustainable agriculture through intelligent technology 🌾
