# Dhruva Infotech — Java Backend

Spring Boot 3.3.2 backend that receives contact and quote form submissions from the Next.js frontend and stores them in an Excel file using Apache POI.

## Requirements
- **Java 17+** (Java 22 is installed on this machine ✓)
- No Maven installation needed — Maven Wrapper (`mvnw.cmd`) is bundled

## Running the Backend

Open a **new terminal window**, navigate to the `backend/` folder, then run:

```powershell
cd "s:\Dhuruva Infotech\backend"
.\mvnw.cmd spring-boot:run
```

> First run will download Maven (~10–15 MB) and dependencies (~50 MB). Subsequent starts are instant.

The server starts on **http://localhost:8080**

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/health` | Health check |
| POST | `/api/contact` | Save contact form submission |
| POST | `/api/quote` | Save quote request submission |

## Excel Output

Submissions are saved to:
```
backend/data/submissions.xlsx
```

- **Sheet 1**: `Contact Enquiries` — all contact form entries
- **Sheet 2**: `Quote Requests` — all quote form entries

The Excel file is auto-created on first submission with:
- Styled navy headers
- Alternating row colors
- Auto-filter on all columns
- Frozen header row
- Timestamps on every row

## Running Both (Frontend + Backend)

Open **two terminal windows**:

**Terminal 1 — Frontend (Next.js):**
```powershell
cd "s:\Dhuruva Infotech"
npm run dev
# → http://localhost:3000
```

**Terminal 2 — Backend (Spring Boot):**
```powershell
cd "s:\Dhuruva Infotech\backend"
.\mvnw.cmd spring-boot:run
# → http://localhost:8080
```
