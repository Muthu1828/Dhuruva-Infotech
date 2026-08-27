# Dhruva Infotech Website

This repository contains the official website for Dhruva Infotech, providing IT infrastructure solutions, system sales, networking services, and Annual Maintenance Contracts (AMC). 

The project is divided into two parts:
1. **Frontend**: Next.js 14 App Router, React, Tailwind CSS, Framer Motion
2. **Backend**: Java Spring Boot (REST API for form submissions saved to Excel)

---

## 🏗️ Project Structure

```text
├── backend/                   # Java Spring Boot Backend
│   ├── src/main/java/...      # Java source files (Controllers, Models, Services)
│   ├── data/                  # Auto-generated Excel files (e.g., submissions.xlsx)
│   ├── mvnw.cmd               # Maven Wrapper for Windows
│   └── pom.xml                # Backend dependencies
│
├── src/                       # Next.js Frontend
│   ├── app/                   # App Router Pages (Home, About, Services, Contact, etc.)
│   ├── components/            # Reusable UI Components (Hero, Navbar, ServiceCard, AnimatedSection)
│   ├── data/                  # Centralized content data (Services, Company Info, FAQs)
│   └── types/                 # TypeScript interfaces
│
├── public/                    # Static assets (images, icons)
├── package.json               # Node.js dependencies
├── tailwind.config.ts         # Tailwind CSS configuration
└── .env.local                 # Environment variables (e.g., NEXT_PUBLIC_BACKEND_URL)
```

---

## 🚀 Getting Started

### 1. Frontend (Next.js)

The frontend is built with Next.js and Tailwind CSS. 

**Prerequisites:** Node.js (v18+)

```bash
# Install dependencies
npm install

# Run the development server (runs on http://localhost:3000)
npm run dev

# Build for production
npm run build
```

### 2. Backend (Java Spring Boot)

The backend handles the "Contact Us" and "Request a Quote" form submissions. It writes the data to an Excel file (`backend/data/submissions.xlsx`) using Apache POI.

**Prerequisites:** Java 17+ (Maven is not required as the wrapper is included).

```bash
cd backend

# Run the Spring Boot application (runs on http://localhost:8080)
./mvnw.cmd spring-boot:run
```

---

## 🛠️ Key Technologies

### Frontend
*   **Next.js 14**: React framework with App Router
*   **Tailwind CSS**: Utility-first styling
*   **Framer Motion**: Scroll-triggered animations and UI transitions
*   **Lucide React**: Iconography

### Backend
*   **Java 22 & Spring Boot 3**: RESTful API
*   **Apache POI**: Reading and writing Excel (`.xlsx`) files
*   **Lombok**: Boilerplate reduction

---

## 📝 Customizing Content

All text content is decoupled from the UI components. To update company details, services, or FAQs, simply edit the files in `src/data/`:
*   `src/data/company.ts` — Phone, email, address, and social links
*   `src/data/services.ts` — IT service catalog and descriptions
*   `src/data/amc.ts` — Annual Maintenance Contract plans
*   `src/data/faqs.ts` — Frequently Asked Questions

---

## 🛡️ API Endpoints (Backend)

*   `GET /api/health` — Check server status
*   `POST /api/contact` — Submit a general enquiry (saved to the "Contact Enquiries" sheet)
*   `POST /api/quote` — Submit a quotation request (saved to the "Quote Requests" sheet)
