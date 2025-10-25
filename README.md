# Job Portal

A modern, full-featured job portal application built with React, Vite, and Firebase. This platform enables job seekers to browse opportunities, apply for positions, and manage their applications while providing a seamless user experience.

## 🚀 Features

- **User Authentication**: Secure login and registration system powered by Firebase Authentication
- **Job Listings**: Browse and search through available job opportunities
- **Hot Jobs**: Featured job postings displayed on the home page
- **Job Details**: Detailed view of job descriptions, requirements, and company information
- **Application Management**: Apply for jobs and track your applications
- **Private Routes**: Protected routes for authenticated users
- **Responsive Design**: Mobile-friendly interface built with Tailwind CSS and DaisyUI
- **Smooth Animations**: Enhanced user experience with Framer Motion

## 🛠️ Technologies Used

### Frontend
- **React 19.1.0** - UI library for building user interfaces
- **Vite 6.3.5** - Fast build tool and development server
- **React Router 7.x** - Client-side routing
- **Tailwind CSS 4.x** - Utility-first CSS framework
- **DaisyUI** - Tailwind CSS component library
- **Framer Motion** - Animation library

### Backend & Services
- **Firebase 11.10.0** - Authentication and backend services
- **Axios** - HTTP client for API requests

### Additional Tools
- **React Icons** - Icon library
- **SweetAlert2** - Beautiful alert dialogs
- **ESLint** - Code linting and quality

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v18 or higher recommended)
- npm or yarn package manager
- Firebase account and project setup

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/mehediScriptDev/job-portal.git
   cd job-portal
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure Firebase**
   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
   - Enable Authentication (Email/Password)
   - Copy your Firebase configuration
   - Update the Firebase configuration in `src/Firebase/firebase.init.js`

4. **Set up environment variables** (if needed)
   - Create a `.env` file in the root directory
   - Add your environment-specific variables

## 🚀 Usage

### Development Mode
Start the development server with hot module replacement:
```bash
npm run dev
```
The application will be available at `http://localhost:5173`

### Production Build
Build the application for production:
```bash
npm run build
```

### Preview Production Build
Preview the production build locally:
```bash
npm run preview
```

### Linting
Run ESLint to check code quality:
```bash
npm run lint
```

## 📁 Project Structure

```
job-portal/
├── public/               # Static assets
│   ├── job.jpeg         # Application icon
│   └── vite.svg
├── src/
│   ├── Components/      # React components
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   ├── FindJob.jsx
│   │   ├── ApplyJob.jsx
│   │   ├── MyApplications.jsx
│   │   ├── Nav.jsx
│   │   ├── Footer.jsx
│   │   └── Private/    # Protected route components
│   ├── Context/        # Context providers and data components
│   │   ├── AuthContext/  # Authentication context
│   │   ├── HotJobs.jsx   # Hot jobs component
│   │   ├── JobCards.jsx  # Job card component
│   │   └── JobDetails.jsx # Job details component
│   ├── Firebase/       # Firebase configuration
│   │   └── firebase.init.js
│   ├── images/         # Image assets
│   ├── utils/          # Utility functions
│   ├── App.jsx         # Main App component
│   ├── main.jsx        # Application entry point
│   └── index.css       # Global styles
├── .gitignore
├── package.json
├── vite.config.js
├── eslint.config.js
├── firebase.json
└── README.md
```

## 🔐 Authentication

The application uses Firebase Authentication for user management. Users can:
- Register with email and password
- Login to access protected features
- View job details only when authenticated
- Apply for jobs with their account

## 🌐 API Integration

The application connects to a backend API hosted at:
```
https://job-portal-server-eight-bay.vercel.app
```

API endpoints include:
- `/jobs` - Fetch all job listings
- `/jobs/:id` - Fetch specific job details

## 🎨 Styling

The application uses:
- **Tailwind CSS** for utility-first styling
- **DaisyUI** for pre-built components
- **Custom CSS** for additional styling needs
- **Theme Support** with light theme by default

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/YourFeature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some feature'`)
5. Push to the branch (`git push origin feature/YourFeature`)
6. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Mehedi Hasan**
- GitHub: [@mehediScriptDev](https://github.com/mehediScriptDev)

## 🙏 Acknowledgments

- React team for the amazing library
- Vite for the blazing fast build tool
- Firebase for authentication services
- All contributors who help improve this project

## 📞 Support

If you have any questions or need help, please:
- Open an issue on GitHub
- Contact the maintainer through GitHub

---

**Made with ❤️ by Mehedi Hasan**
