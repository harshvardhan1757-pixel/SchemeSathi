# 🇮🇳 Language Agnostic Chatbot for Government Schemes

An AI-powered multilingual chatbot that helps users discover and understand Indian government schemes in their preferred language.

The chatbot accepts questions in multiple Indian languages, automatically detects the user's language, retrieves relevant government scheme information using semantic search, generates a contextual response using an LLM, and translates the response back into the user's original language.

---

## 🚀 Features

* 💬 Interactive chatbot interface
* 🌐 Multilingual question support
* 🇮🇳 Support for Indian languages including:

  * English
  * Hindi
  * Marathi
  * Tamil
  * and other supported languages
* 🔍 Automatic language detection
* 🔄 Automatic translation to English for retrieval
* 🧠 Semantic search using embeddings
* 📚 Local government scheme knowledge base
* 🤖 LLM-powered answer generation
* 🔄 Translation of answers back to the user's language
* ⚡ Fast and simple chat experience
* 📱 Responsive web interface
* 🔐 API keys handled through environment variables

---

## 🏗️ System Architecture

```text
                    ┌─────────────────────┐
                    │       User          │
                    │  Hindi / English /  │
                    │  Marathi / Tamil... │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │   React / Next.js   │
                    │      Frontend       │
                    └──────────┬──────────┘
                               │
                         POST /chat
                               │
                               ▼
                    ┌─────────────────────┐
                    │   Node.js +         │
                    │      Express        │
                    │      Backend        │
                    └──────────┬──────────┘
                               │
                    ┌──────────▼──────────┐
                    │ Language Detection  │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │ Translation to      │
                    │      English        │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │ Embedding + Semantic│
                    │       Search        │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │ FAISS / Vector DB   │
                    │ Government Schemes  │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │       LLM           │
                    │ Groq / Gemini /     │
                    │ OpenAI               │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │ Translate Response  │
                    │ to Original Language │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │    Chat Response    │
                    │      to User        │
                    └─────────────────────┘
```

---

## 🛠️ Tech Stack

### Frontend

* React / Next.js
* HTML
* CSS
* JavaScript
* REST API

### Backend

* Node.js
* Express.js
* REST API
* Automatic language detection
* Translation
* LLM integration

### AI / NLP

* Sentence Transformers / Hugging Face embeddings
* Semantic search
* FAISS / Vector Database
* LLM API
* Multilingual translation

### Deployment

* Frontend: Vercel / Netlify
* Backend: Render / Railway
* Version Control: Git + GitHub

---

## 📂 Project Structure

```text
language-agnostic-chatbot/
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── ...
│
├── backend/
│   ├── routes/
│   ├── controllers/
│   ├── services/
│   ├── data/
│   ├── embeddings/
│   ├── server.js
│   ├── package.json
│   └── ...
│
├── .gitignore
├── .env.example
└── README.md
```

> The exact folders may differ depending on the implementation.

---

## 🔄 How It Works

### 1. User asks a question

Example:

```text
मुझे किसानों के लिए सरकारी योजना चाहिए।
```

### 2. Language Detection

The backend automatically identifies the language as Hindi.

### 3. Translation

The question is translated into English when required for consistent retrieval.

```text
"I need a government scheme for farmers."
```

### 4. Semantic Search

The translated query is converted into an embedding and compared with embeddings of government scheme documents stored in the vector database.

The most relevant schemes are retrieved.

### 5. LLM Response Generation

The retrieved scheme information is provided to the LLM as context.

The LLM generates an answer based on the available government scheme information.

### 6. Translation

The generated response is translated back into Hindi.

### 7. Response

The frontend displays the answer to the user in Hindi.

---

## 📚 Government Scheme Dataset

The application uses a locally stored dataset containing information about approximately 10–15 government schemes.

Each scheme can contain information such as:

```text
Scheme Name
Description
Eligibility
Benefits
Application Process
Required Documents
Official Website
```

Example categories include:

* Agriculture
* Education
* Healthcare
* Employment
* Women & Child Welfare
* Financial Assistance
* Housing
* Social Security

---

## 🔌 API

### `POST /chat`

Processes a multilingual user question and returns an AI-generated answer.

### Request

```json
{
  "message": "मुझे किसानों के लिए सरकारी योजना चाहिए।"
}
```

### Response

```json
{
  "answer": "किसानों के लिए कई सरकारी योजनाएँ उपलब्ध हैं..."
}
```

---

## 🔐 Environment Variables

Create a `.env` file in the backend directory.

Example:

```env
PORT=5000

LLM_API_KEY=your_api_key_here

FRONTEND_URL=http://localhost:3000
```

Use the variables required by the actual LLM, translation, embedding, and vector-database services used in your implementation.

**Never commit your `.env` file or API keys to GitHub.**

---

## 💻 Local Setup

### Prerequisites

Make sure you have installed:

* Node.js
* npm
* Git

---

### Clone the Repository

```bash
git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
cd YOUR-REPOSITORY
```

---

### Start the Backend

```bash
cd backend
npm install
```

Create your environment file:

```bash
cp .env.example .env
```

Add your API keys and configuration to `.env`.

Then start the server:

```bash
npm start
```

The backend should run on:

```text
http://localhost:5000
```

---

### Start the Frontend

Open another terminal:

```bash
cd frontend
npm install
npm run dev
```

The frontend should then be available at the URL shown by your development server, commonly:

```text
http://localhost:3000
```

---

## 🌍 Multilingual Example

### User

```text
मुझे लड़कियों की शिक्षा के लिए सरकारी योजना बताइए।
```

### System

```text
Detect Hindi
        ↓
Translate to English
        ↓
Semantic Search
        ↓
Retrieve relevant schemes
        ↓
Generate contextual answer
        ↓
Translate answer to Hindi
        ↓
Display response
```

---

## 🎯 Problem Statement

Government schemes are often difficult for citizens to discover and understand because information is distributed across different portals and is frequently available in formal or technical language.

This project aims to provide a simple conversational interface where users can ask questions naturally in their preferred language and receive understandable information about relevant government schemes.

---

## 💡 Why This Project?

The chatbot focuses on:

* Accessibility
* Multilingual interaction
* Easier discovery of government schemes
* Semantic rather than simple keyword-based search
* Context-aware AI responses
* A simple conversational user experience

---

## 🧠 Key AI Pipeline

```text
User Query
    ↓
Language Detection
    ↓
Translation
    ↓
Text Embedding
    ↓
Vector Similarity Search
    ↓
Relevant Scheme Documents
    ↓
LLM
    ↓
Generated Answer
    ↓
Translation
    ↓
User
```

---

## 🚀 Deployment

### Frontend

The frontend can be deployed using:

* Vercel
* Netlify

After deployment, configure the frontend to use the deployed backend URL.

Example:

```env
NEXT_PUBLIC_API_URL=https://your-backend-url.com
```

or the equivalent variable used by the project.

### Backend

The backend can be deployed using:

* Render
* Railway

Make sure the required environment variables are configured in the deployment platform.

---

## 🔒 Security

* API keys are stored in environment variables.
* `.env` files are excluded from Git.
* Sensitive credentials should never be pushed to the repository.
* Production deployments should use HTTPS.
* User input should be validated on the backend.

---

## 📌 Future Improvements

* Add more government schemes
* Integrate official government APIs
* Support additional Indian languages
* Voice input and voice responses
* WhatsApp integration
* Personalized scheme recommendations
* User eligibility checking
* Real-time scheme updates
* Government document verification
* Improved multilingual embeddings
* Mobile application

---

## 👥 Team

Built as a hackathon project focused on improving accessibility to information about Indian government schemes through multilingual AI.

---

## ⭐ Hackathon Goal

> **Making government schemes easier to discover, understand, and access — regardless of the language a citizen speaks.**

---

## ⚠️ Disclaimer

This chatbot is intended to provide informational assistance based on the government scheme data available in its knowledge base.

Users should verify important eligibility requirements, application procedures, deadlines, and other official information through the relevant government portal before applying.

---

## 📄 License

This project is created for educational and hackathon purposes.
