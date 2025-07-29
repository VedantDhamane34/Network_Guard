# NetworkGuard: Network Packet Detection and Prevention

🛡️ **A comprehensive network security tool for real-time packet analysis and threat detection**

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Machine Learning Models](#machine-learning-models)
- [Security Features](#security-features)
- [API Endpoints](#api-endpoints)
- [Screenshots](#screenshots)
- [Team](#team)
- [Contributing](#contributing)
- [License](#license)

## 🔍 Overview

NetworkGuard is an advanced network security tool developed as part of an engineering project to detect and prevent potential network threats in real-time. The system provides comprehensive network traffic analysis, identifies suspicious activities, and implements proactive security measures to safeguard network infrastructure.

### Key Objectives
- **Real-time Monitoring**: Live network packet capture and analysis
- **Threat Detection**: Machine learning-powered attack prediction
- **Prevention Mechanisms**: Automated security response systems
- **User-Friendly Interface**: Intuitive dashboard for network administrators

## ✨ Features

### 🔄 Real-Time Capabilities
- **Live Packet Capture**: Continuous monitoring of network traffic
- **Instant Analysis**: Real-time packet processing and classification
- **Attack Detection**: Immediate identification of malicious activities
- **Alert System**: Instant notifications for security threats

### 🤖 Machine Learning Integration
- **Multiple ML Algorithms**: Decision Tree, Random Forest, KNN, Logistic Regression, Naive Bayes
- **High Accuracy**: Up to 99.96% accuracy in attack detection
- **Pattern Recognition**: Advanced threat pattern identification
- **Predictive Analysis**: Proactive threat prediction capabilities

### 🛡️ Security Features
- **HTTPS Encryption**: Secure data transmission
- **User Authentication**: Secure login/signup system
- **Session Management**: Protected user sessions
- **reCAPTCHA Integration**: Bot protection
- **Password Security**: Bcrypt encryption

### 📊 Analytics & Visualization
- **Interactive Dashboard**: Real-time network statistics
- **Packet Analysis Charts**: Visual representation of network data
- **Attack Distribution**: Detailed attack type analysis
- **Trend Analysis**: Historical attack pattern visualization

## 🛠️ Technology Stack

### Backend
- **Node.js** - Server-side JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling

### Frontend
- **EJS** - Templating engine
- **Bootstrap** - CSS framework
- **Chart.js** - Data visualization
- **Select2** - Enhanced select dropdowns

### Machine Learning
- **Python** - ML implementation
- **Scikit-learn** - Machine learning library
- **Pandas** - Data manipulation
- **NumPy** - Numerical computing
- **PyShark** - Network packet analysis

### Security & Authentication
- **bcrypt** - Password hashing
- **express-session** - Session management
- **express-validator** - Input validation
- **reCAPTCHA** - Bot protection

## 📁 Project Structure

```
NetworkGuard/
├── controllers/          # Application logic
├── middlewares/          # Authentication & validation
├── models/              # Database schemas
├── python/              # ML implementation
├── routes/              # API endpoints
├── services/            # Core services
├── views/               # Frontend templates
├── public/              # Static assets
├── .env                 # Environment variables
└── package.json         # Dependencies
```

## 🚀 Installation

### Prerequisites
- Node.js (v14 or higher)
- Python (v3.8 or higher)
- MongoDB
- Git

### Step 1: Clone Repository
```bash
git clone https://github.com/VedantDhamane34/NetworkGuard.git
cd NetworkGuard
```

### Step 2: Install Node.js Dependencies
```bash
npm install
```

### Step 3: Install Python Dependencies
```bash
pip install -r requirements.txt
```

### Step 4: Environment Setup
Create a `.env` file in the root directory:
```env
AuthSecretKey='your_recaptcha_secret_key'
DataSiteKey='your_recaptcha_site_key'
DBUserName='your_mongodb_username'
DBPassword='your_mongodb_password'
DBIP='your_mongodb_ip'
DBUrl='your_mongodb_connection_string'
```

### Step 5: SSL Certificate Setup
Generate SSL certificates for HTTPS:
```bash
openssl req -x509 -newkey rsa:4096 -keyout server.key -out server.crt -days 365 -nodes
```

## ⚙️ Configuration

### Database Configuration
1. Set up MongoDB database
2. Update connection string in `.env`
3. Ensure proper network access

### reCAPTCHA Setup
1. Get reCAPTCHA keys from Google
2. Update keys in `.env` file
3. Configure site and secret keys

### Network Interface
1. Configure network interface for packet capture
2. Ensure proper permissions for packet sniffing
3. Update IP filtering rules as needed

## 🖥️ Usage

### Starting the Application
```bash
# Development mode
npm run dev

# Production mode
npm start
```

### Accessing the Application
- **Homepage**: `https://localhost:3006/`
- **Dashboard**: `https://localhost:3006/user/dashboard`
- **Login**: `https://localhost:3006/auth`

### User Workflow
1. **Registration**: Create account with secure authentication
2. **Login**: Access dashboard with reCAPTCHA verification
3. **Monitor**: View real-time network packets
4. **Analyze**: Review attack patterns and statistics
5. **Respond**: Take action based on threat analysis

## 🤖 Machine Learning Models

### Supported Algorithms
1. **Decision Tree**: 99.95% accuracy
2. **Random Forest**: 99.96% accuracy  
3. **K-Nearest Neighbors**: 99.84% accuracy
4. **Logistic Regression**: 96.06% accuracy
5. **Naive Bayes**: 94.67% accuracy

### Model Performance Metrics
- **Accuracy**: Overall prediction correctness
- **Precision**: True positive rate
- **Recall**: Sensitivity measure
- **F1-Score**: Harmonic mean of precision and recall

### Attack Types Detected
- DoS/DDoS attacks
- Port scanning
- Smurf attacks
- Various network intrusions

## 🔒 Security Features

### Authentication Security
- **Password Hashing**: Secure password encryption
- **Session Management**: Protected user sessions
- **Input Validation**: Server-side security validation
- **Bot Protection**: reCAPTCHA integration

### Network Security
- **HTTPS Encryption**: SSL/TLS implementation
- **Access Control**: Network traffic filtering
- **Real-time Monitoring**: Continuous threat detection

## 🌐 API Endpoints

### Authentication Routes
```
POST /auth/signup     # User registration
POST /auth/login      # User login
GET  /auth/logout     # User logout
```

### Dashboard Routes
```
GET  /user/dashboard       # Main dashboard
GET  /user/analyze-packet  # Packet analysis
GET  /user/settings        # User settings
POST /user/settings/changeName     # Update name
POST /user/settings/changePassword # Update password
```

### Public Routes
```
GET  /              # Homepage
GET  /result        # ML model results
```

## 📸 Screenshots

### Dashboard Overview
![Dashboard](screenshots/dashboard.png)

### Packet Analysis
![Analysis](screenshots/packet-analysis.png)

### ML Results
![Results](screenshots/ml-results.png)

## 👥 Team

This project was developed as a collaborative effort by a dedicated team of engineering students:


## 🤝 Contributing

We welcome contributions from the community! Please follow these guidelines:

### Development Setup
1. Fork the repository
2. Create feature branch
3. Make your changes
4. Test thoroughly
5. Submit pull request

### Code Standards
- Follow established coding conventions
- Add meaningful comments
- Include proper documentation
- Test new features

### Reporting Issues
- Use GitHub Issues for bug reports
- Provide clear description and steps
- Include relevant system information

## 📄 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## ⚠️ Disclaimer

This tool is intended for educational purposes and to secure your own networks. Do not use it to monitor or attack unauthorized systems. The author is not responsible for any misuse.

## 🙏 Acknowledgments

- **Vishwakarma Institute of Technology** for academic support
- **Open Source Community** for tools and libraries
- **Research Papers** for ML algorithm insights
- **Security Experts** for best practices guidance

## 📞 Support

For support and queries:
- 📧 Email: vedant.dhamane222@vit.edu
- 🐛 Issues: [GitHub Issues](https://github.com/VedantDhamane34/NetworkGuard/issues)
- 📖 Documentation: [Project Wiki](https://github.com/VedantDhamane34/NetworkGuard/wiki)

---

**NetworkGuard** - Securing networks, one packet at a time 🛡️

*Developed with ❤️ by the NetworkGuard Team*
