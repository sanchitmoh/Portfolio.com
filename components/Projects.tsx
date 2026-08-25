'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

interface Project {
  title: string
  category: string
  tagline: string
  description: string
  systemDesign: {
    overview: string
    dataFlow: string[]
    challenges: {
      title: string
      solution: string
    }[]
  }
  applicability: {
    realWorldUseCase: string
    targetAudience: string
    businessImpact: string
  }
  metrics: {
    label: string
    value: string
  }[]
  techStack: {
    category: string
    skills: string[]
  }[]
  status: string
  image: string
  github: string
  live?: string
  liveLabel?: string
}

const projects: Project[] = [
  {
    title: 'AI CFO – Financial Intelligence Platform',
    category: 'Autonomous Financial AI & RAG',
    tagline: 'GPT-powered CFO copilot with cash-flow forecasting, anomaly detection & AR automation',
    description: 'Designed and engineered an AI-powered financial intelligence platform for cash-flow forecasting, balance sheet anomaly detection, accounts receivable (AR) automation, and investor reporting reaching ~97% forecast accuracy.',
    systemDesign: {
      overview: 'High-throughput asynchronous architecture combining FastAPI with PostgreSQL persistence, OpenAI GPT-4 RAG workflows for financial documents, and deterministic mathematical validation engines to eliminate forecasting hallucinations.',
      dataFlow: [
        'Financial Data Ingestion (Bank Feeds, Invoices, General Ledger CSVs)',
        'FastAPI Async Ingestion & Schema Validation Engine',
        'PostgreSQL Relational Ledger & Vector Embedding Store',
        'GPT-4 RAG Financial Analysis & Cash-Flow Prediction Model',
        'Deterministic Anomaly & AR Reconciliation Rule Pipeline',
        'React Executive Financial Command Center'
      ],
      challenges: [
        {
          title: 'High-Precision Forecasting with 97% Accuracy',
          solution: 'Architected a hybrid pipeline combining qualitative context extraction from GPT-4 with deterministic quantitative mathematical models for payroll, burn-rate, and multi-scenario cash-flow forecasting.'
        },
        {
          title: 'Automated Accounts Receivable & Anomaly Detection',
          solution: 'Developed statistical outlier detection and age-bucket analysis algorithms to flag overdue invoices, anomalous expense spikes, and reconciliation variances in real time.'
        },
        {
          title: 'Containerized Async Infrastructure & Low Latency',
          solution: 'Implemented FastAPI asynchronous worker coroutines, semantic caching on repeated financial queries, and containerized Docker deployments for rapid scaling.'
        }
      ]
    },
    applicability: {
      realWorldUseCase: 'High-growth startups, scale-ups, and fractional CFO advisory firms needing automated runway tracking, investor reporting packages, and real-time cash management.',
      targetAudience: 'Chief Financial Officers, Finance Controllers, Startup Founders, and Accounting Teams.',
      businessImpact: 'Cuts month-end financial reporting time by 75% and improves working capital through automated, intelligent AR follow-up workflows.'
    },
    metrics: [
      { label: 'Forecast Accuracy', value: '~97%' },
      { label: 'Reporting Time Saved', value: '75%' },
      { label: 'Anomaly Catch Rate', value: '99.2%' }
    ],
    techStack: [
      { category: 'AI & RAG Orchestration', skills: ['OpenAI GPT-4', 'RAG Workflows', 'Prompt Engineering', 'LangChain'] },
      { category: 'Backend & Services', skills: ['Python', 'FastAPI', 'Docker', 'AsyncIO'] },
      { category: 'Database & Storage', skills: ['PostgreSQL', 'Vector Storage', 'SQLAlchemy'] },
      { category: 'Frontend & UI', skills: ['React', 'TypeScript', 'Tailwind CSS', 'Vercel'] }
    ],
    status: 'Live',
    image: '/aicfo.png',
    github: 'https://github.com/sanchitmoh/CFO',
    live: 'https://cfo-eta.vercel.app/',
    liveLabel: 'Live Demo'
  },
  {
    title: 'GST Agent Environment – AI GST Reconciliation',
    category: 'Agentic AI & Multi-Agent RL Environments',
    tagline: 'OpenEnv multi-agent framework automating invoice matching & ITC reconciliation via Indian tax rules',
    description: 'An OpenEnv-compatible reinforcement learning environment where an AI agent learns and executes what a GST tax accountant does—matching invoices, detecting Input Tax Credit (ITC) mismatches, fixing filing errors, and producing audit reconciliation reports using publicly documented Indian tax rules.',
    systemDesign: {
      overview: 'Modular multi-agent reinforcement learning environment (OpenEnv) built on FastAPI and Docker, integrating LLM-driven tax rule reasoning with deterministic validation against official Indian GST guidelines (GSTR-1, GSTR-2B, GSTR-3B).',
      dataFlow: [
        'Purchase Register (GSTR-2B) & Sales Invoice Ingestion',
        'FastAPI Async Tokenization & Tax Structure Normalization',
        'Multi-Agent Tax Accountant Coordinator & Action Selection',
        'Deterministic Tax Rule Validation & ITC Mismatch Engine',
        'Semantic Cache Layer & HuggingFace Space Environment',
        'Statutory-Compliant GST Reconciliation Audit Report'
      ],
      challenges: [
        {
          title: 'Complex Multi-Source Invoice Discrepancy Matching',
          solution: 'Constructed an agentic reconciliation pipeline that cross-examines vendor-uploaded invoices with government portal returns, automatically catching missing GSTINs, rate discrepancies, and timing mismatches.'
        },
        {
          title: 'Zero-Hallucination Deterministic Tax Compliance',
          solution: 'Coupled LLM reasoning with hardcoded Indian tax rule execution guards to ensure 100% statutory adherence to legal ITC claim limits and Section 16 eligibility criteria.'
        },
        {
          title: 'High-Throughput Execution with Semantic Caching',
          solution: 'Engineered semantic caching on repetitive vendor tax structures and deployed containerized FastAPI microservices on Hugging Face Spaces, slashing reconciliation time from days to minutes.'
        }
      ]
    },
    applicability: {
      realWorldUseCase: 'Chartered accountancy firms, corporate tax departments, and SMEs managing high-volume monthly purchase registers across multiple state GSTINs.',
      targetAudience: 'Chartered Accountants (CAs), Corporate Tax Auditors, and Finance Teams.',
      businessImpact: 'Cuts GST reconciliation cycles from days to minutes and prevents costly ineligible ITC claims and statutory tax penalty notices.'
    },
    metrics: [
      { label: 'Reconciliation Speed', value: 'Days → Mins' },
      { label: 'ITC Mismatch Detection', value: '99.8%' },
      { label: 'Tax Rule Fidelity', value: '100%' }
    ],
    techStack: [
      { category: 'Agentic AI & RL', skills: ['Multi-Agent Systems', 'Reinforcement Learning', 'OpenEnv', 'GPT-4'] },
      { category: 'Backend & Ingestion', skills: ['Python', 'FastAPI', 'RAG Pipeline', 'AsyncIO'] },
      { category: 'Infrastructure & Caching', skills: ['Docker', 'HuggingFace Spaces', 'Semantic Caching'] },
      { category: 'Tax Compliance', skills: ['Indian Tax Rules (GSTR-2B/3B)', 'Deterministic Engine'] }
    ],
    status: 'Live',
    image: '/gstenv.png',
    github: 'https://github.com/sanchitmoh/GSTENV',
    live: 'https://huggingface.co/spaces/Ssk2004/gstagent-env',
    liveLabel: 'HuggingFace Space'
  },
  {
    title: 'Evenza - Event Management Platform',
    category: 'Distributed Systems & Fintech',
    tagline: 'High-concurrency booking engine with transactional webhook pipeline & RBAC',
    description: 'A robust event ticketing and booking platform engineered for high-concurrency seat reservations, automated refund lifecycles, and cryptographic payment settlement.',
    systemDesign: {
      overview: 'Decoupled 3-tier architecture with Spring Boot REST microservices, HikariCP database connection pooling, and ACID-compliant transaction boundaries to manage sudden flash-sale traffic spikes.',
      dataFlow: [
        'Client UI (React/Axios)',
        'API Gateway & Spring Security (JWT Auth)',
        'Ticket Reservation Engine (Pessimistic DB Locks)',
        'Payment Webhook Pipeline (Razorpay HMAC-SHA256)',
        'Async Ticket & Invoice Dispatch (MySQL + Worker)'
      ],
      challenges: [
        {
          title: 'Race Condition & Overbooking Prevention',
          solution: 'Implemented pessimistic row-level database locking during the 5-minute checkout reservation window, ensuring zero oversold tickets under simultaneous high-load requests.'
        },
        {
          title: 'Idempotent Payment Webhooks',
          solution: 'Built an HMAC-SHA256 signature verification pipeline with deterministic event idempotency keys, eliminating duplicate ticket generation and double-charging risks.'
        },
        {
          title: 'Granular Role-Based Access Control (RBAC)',
          solution: 'Engineered stateless JWT authorization with custom Spring Security filter chains separating Attendees, Event Organizers, and SuperAdmins.'
        }
      ]
    },
    applicability: {
      realWorldUseCase: 'Enterprise event ticketing, national tech conferences, and university symposiums with zero tolerance for booking collisions.',
      targetAudience: 'Event organizers, venue managers, and large-scale convention attendees.',
      businessImpact: 'Guarantees 100% financial reconciliation accuracy and eliminates customer support disputes caused by duplicate booking glitches.'
    },
    metrics: [
      { label: 'Overselling Rate', value: '0.0%' },
      { label: 'Webhook Latency', value: '<120ms' },
      { label: 'Booking Rate', value: '500+/min' }
    ],
    techStack: [
      { category: 'Backend & Security', skills: ['Spring Boot', 'Java 17', 'Spring Security', 'JWT'] },
      { category: 'Database & Transactions', skills: ['MySQL 8.0', 'Hibernate JPA', 'HikariCP', 'ACID'] },
      { category: 'Payments & Integrations', skills: ['Razorpay API', 'Webhook Pipeline', 'HMAC-SHA256'] },
      { category: 'Frontend & UI', skills: ['React', 'Tailwind CSS', 'Axios', 'Framer Motion'] }
    ],
    status: 'Live',
    image: '/evenzaa.png',
    github: 'https://github.com/sanchitmoh/Evenzaa.git'
  },
  {
    title: 'Corporate Digital Library (DocDump)',
    category: 'Enterprise Search & Cloud Architecture',
    tagline: 'Sub-50ms full-text search engine with AWS S3 pre-signed storage & async indexing',
    description: 'Enterprise document archiving and retrieval system featuring inverted full-text indexing, multi-department access hierarchy, and direct-to-cloud file streaming.',
    systemDesign: {
      overview: 'Hybrid-datastore system integrating relational metadata in MySQL with distributed inverted indexing in Elasticsearch, paired with AWS S3 pre-signed URLs for zero-memory server uploads.',
      dataFlow: [
        'Client Application (React/TypeScript)',
        'Node.js REST Gateway',
        'Direct AWS S3 Pre-Signed Upload',
        'Asynchronous Ingestion Worker',
        'Elasticsearch Cluster (Inverted Index)',
        'MySQL Relational Metadata Storage'
      ],
      challenges: [
        {
          title: 'Zero-Memory Server Upload Architecture',
          solution: 'Implemented AWS S3 Pre-Signed PUT URLs allowing clients to stream 100MB+ PDFs directly to S3 storage, cutting backend memory consumption by 85%.'
        },
        {
          title: 'Sub-50ms Full-Text & Fuzzy Querying',
          solution: 'Designed custom Elasticsearch tokenizers with edge n-grams and fuzzy matching across OCR text, document tags, and metadata fields.'
        },
        {
          title: 'Multi-Tenant Document Security',
          solution: 'Built cryptographic JWT verification with hierarchical folder ACLs ensuring strict inter-departmental document privacy and audit trails.'
        }
      ]
    },
    applicability: {
      realWorldUseCase: 'Scalable internal corporate intranets, compliance audit repositories, and legal discovery portals managing vast document archives.',
      targetAudience: 'Enterprise teams, HR/legal departments, and corporate compliance officers.',
      businessImpact: 'Reduces document retrieval search time from minutes to milliseconds and slashes cloud bandwidth/compute costs.'
    },
    metrics: [
      { label: 'Search Latency', value: '<45ms' },
      { label: 'Server RAM Saved', value: '85%' },
      { label: 'Doc Formats', value: 'PDF, DOCX, TXT' }
    ],
    techStack: [
      { category: 'Backend & APIs', skills: ['Node.js', 'Express', 'TypeScript', 'REST API'] },
      { category: 'Search & Database', skills: ['Elasticsearch 8', 'MySQL', 'Prisma ORM'] },
      { category: 'Cloud Infrastructure', skills: ['AWS S3', 'Pre-signed URLs', 'AWS IAM', 'Vercel'] },
      { category: 'Frontend', skills: ['React', 'TypeScript', 'Tailwind CSS', 'Lucide Icons'] }
    ],
    status: 'Live',
    image: '/copratedigital.png',
    github: 'https://github.com/sanchitmoh/corporate-digital-library-yv.git',
    live: 'https://docdump.vercel.app',
    liveLabel: 'Live Demo'
  },
  {
    title: 'RAG Model Implementation for Sign Language',
    category: 'AI Systems & Multimodal Retrieval',
    tagline: 'Multimodal Vector Retrieval pipeline with contextual LLM re-ranking & sub-second inference',
    description: 'Assistive AI retrieval architecture converting natural language conversational text into accurate sign language visual representations and gesture sequences using vector embeddings and LLM reasoning.',
    systemDesign: {
      overview: 'Vector-augmented generative pipeline leveraging Google Gemini API for intent parsing, high-dimensional vector embeddings with HNSW indexing for rapid cosine similarity lookup, and asynchronous streaming endpoints.',
      dataFlow: [
        'User Natural Language Query',
        'Gemini Intent Decomposition & Syntax Mapping',
        'Dense Semantic Vector Embedding Model',
        'Vector DB (HNSW Cosine Similarity Search)',
        'Sign Pose/Video Retrieval Engine',
        'Streamlit / FastAPI Streaming UI'
      ],
      challenges: [
        {
          title: 'Grammar Gap Resolution (Spoken vs Sign)',
          solution: 'Created an intermediate LLM prompt engineering and normalization layer to convert spoken syntactic structures into sign language gloss syntax prior to vector lookup.'
        },
        {
          title: 'High-Dimensional Vector Indexing',
          solution: 'Configured HNSW (Hierarchical Navigable Small World) index structures on high-dimensional embeddings, keeping vector retrieval time under 200ms across 2,500+ sign primitives.'
        },
        {
          title: 'Low-Latency Streaming Pipeline',
          solution: 'Employed FastAPI asynchronous worker coroutines with video frame chunking for responsive, real-time user interaction.'
        }
      ]
    },
    applicability: {
      realWorldUseCase: 'Accessibility tools for deaf and hard-of-hearing communities, educational sign language learning platforms, and public information kiosk translation.',
      targetAudience: 'Individuals with hearing impairments, educators, and healthcare/public service providers.',
      businessImpact: 'Bridges critical communication gaps in public services with accessible, automated visual sign language generation.'
    },
    metrics: [
      { label: 'Retrieval Latency', value: '<250ms' },
      { label: 'Semantic Accuracy', value: '94.2%' },
      { label: 'Gesture Vocabulary', value: '2,500+ Signs' }
    ],
    techStack: [
      { category: 'AI & LLM Orchestration', skills: ['Google Gemini API', 'LangChain', 'Dense Embeddings', 'Prompt Design'] },
      { category: 'Vector Search & Backend', skills: ['FastAPI', 'Python 3.11', 'Vector DB (FAISS/Chroma)', 'Pydantic'] },
      { category: 'Frontend & Streaming', skills: ['Streamlit', 'React', 'Video Rendering', 'REST APIs'] }
    ],
    status: 'Live',
    image: '/ragmodel.png',
    github: 'https://github.com/sanchitmoh/Rag_model-.git'
  },
  {
    title: 'Resido - Smart Society & Resident Management',
    category: 'Multi-tenant SaaS & Geospatial Architecture',
    tagline: 'Automated billing ledger, complaint lifecycle engine & interactive geospatial Mapbox layout',
    description: 'Enterprise multi-tenant society management platform that automates recurring maintenance calculations, digital invoice generation, SLA-driven ticket resolution, and 2D/3D geospatial layout visualization.',
    systemDesign: {
      overview: 'Event-driven multi-tenant architecture utilizing Spring Boot and PostgreSQL for data isolation, scheduled CRON reconciliation workers for billing, and Mapbox GL for geospatial spatial query rendering.',
      dataFlow: [
        'Resident & Admin Web Portal (Next.js)',
        'API Gateway & Tenant Context Filter',
        'Spring Boot Service Layer & Hibernate JPA',
        'PostgreSQL Multi-Tenant Schema',
        'Mapbox GL Geospatial Vector Tiles',
        'Scheduled Ledger Calculation Worker'
      ],
      challenges: [
        {
          title: 'Automated Recurring Billing Engine',
          solution: 'Engineered a scheduled batch calculation worker that computes monthly dues, dynamic penalty tiers, and generates itemized digital invoices with automated dispatch.'
        },
        {
          title: 'Interactive Geospatial Layout Rendering',
          solution: 'Integrated Mapbox GL JS to render interactive 2D/3D community maps with live parking space allocation, amenity status, and geo-pinned maintenance issues.'
        },
        {
          title: 'Stateful Complaint Ticketing Workflow',
          solution: 'Designed a deterministic finite state machine (Open -> Assigned -> In Progress -> Resolved -> Verified) with automated SLA escalation alerts.'
        }
      ]
    },
    applicability: {
      realWorldUseCase: 'Gated communities, commercial business parks, and residential societies needing centralized governance and transparent financial accounting.',
      targetAudience: 'Society management committees, facility managers, and residential tenants.',
      businessImpact: 'Eliminated manual billing bookkeeping errors and reduced maintenance fee payment defaults by over 35%.'
    },
    metrics: [
      { label: 'Billing Automation', value: '100%' },
      { label: 'Default Reduction', value: '35%' },
      { label: 'Map Rendering', value: '60 FPS' }
    ],
    techStack: [
      { category: 'Full-Stack Framework', skills: ['Next.js (App Router)', 'TypeScript', 'Tailwind CSS'] },
      { category: 'Backend & Persistence', skills: ['Spring Boot', 'Hibernate JPA', 'PostgreSQL', 'Java 17'] },
      { category: 'Geospatial & Mapping', skills: ['Mapbox GL JS', 'GeoJSON', 'Spatial Queries'] },
      { category: 'Architecture Patterns', skills: ['Multi-tenant Isolation', 'Batch Cron Jobs', 'State Machine'] }
    ],
    status: 'Live',
    image: '/resido.png',
    github: 'https://github.com/sanchitmoh/serene-resident-hub.git'
  }
]

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(0)
  const [activeTab, setActiveTab] = useState<'system' | 'applicability' | 'tech'>('system')
  const [imgError, setImgError] = useState<Record<string, boolean>>({})

  const current = projects[selectedProject]

  return (
    <section id="projects" className="py-12 sm:py-16 lg:py-24 px-3 sm:px-6 lg:px-8 scroll-mt-20 sm:scroll-mt-24 lg:scroll-mt-28">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-14 lg:mb-16"
        >
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "60px" }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="h-0.5 bg-light-gray mx-auto mb-4 sm:mb-6"
          />
          <h2 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            Featured <span className="text-gradient">Projects & System Design</span>
          </h2>
          <p className="text-light-gray text-sm sm:text-base lg:text-lg max-w-3xl mx-auto leading-relaxed px-2">
            Architectural breakdowns, concurrency controls, scalability decisions, and real-world applicability of production-ready systems I've designed and engineered.
          </p>
        </motion.div>

        {/* Main Grid: Left Selector List & Right Deep Dive View */}
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          
          {/* Left Column: Project Selector List (5 Columns) */}
          <div className="lg:col-span-5 space-y-3 sm:space-y-3.5">
            {projects.map((project, index) => {
              const isSelected = selectedProject === index
              return (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  viewport={{ once: true }}
                  onClick={() => setSelectedProject(index)}
                  className={`glossy-card p-4 sm:p-5 cursor-pointer transition-all duration-300 relative overflow-hidden border ${
                    isSelected
                      ? 'border-white/40 bg-medium-gray/50 shadow-xl ring-1 ring-white/20'
                      : 'border-white/10 hover:border-white/25 hover:bg-medium-gray/30'
                  }`}
                >
                  {/* Left Active Accent Bar */}
                  {isSelected && (
                    <motion.div
                      layoutId="activeBar"
                      className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-blue-400 via-teal-400 to-green-400"
                    />
                  )}

                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[11px] font-semibold tracking-wider uppercase text-light-gray/90 bg-white/5 px-2.5 py-0.5 rounded border border-white/10 truncate max-w-[210px]">
                      {project.category}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs text-emerald-400 font-medium bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20 flex-shrink-0">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      {project.status}
                    </span>
                  </div>

                  <h3 className={`text-base sm:text-lg font-bold mb-1.5 transition-colors ${
                    isSelected ? 'text-white' : 'text-off-white'
                  }`}>
                    {project.title}
                  </h3>

                  <p className="text-light-gray text-xs sm:text-sm leading-relaxed mb-3 line-clamp-2">
                    {project.tagline}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.flatMap(t => t.skills).slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 bg-deep-gray/80 border border-white/10 text-lighter-gray text-[11px] rounded"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.flatMap(t => t.skills).length > 4 && (
                      <span className="px-1.5 py-0.5 text-light-gray text-[11px]">
                        +{project.techStack.flatMap(t => t.skills).length - 4}
                      </span>
                    )}
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Right Column: Project Details & System Architecture (7 Columns) */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedProject}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="glossy-card p-5 sm:p-7 lg:p-8 border border-white/15 shadow-2xl"
              >
                {/* Header & Badges */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-5 pb-5 border-b border-white/10">
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="text-xs font-semibold uppercase tracking-wider text-blue-400 bg-blue-500/10 px-2.5 py-0.5 rounded border border-blue-500/20">
                        {current.category}
                      </span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
                      {current.title}
                    </h3>
                    <p className="text-light-gray text-xs sm:text-sm mt-1">
                      {current.tagline}
                    </p>
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <motion.a
                      href={current.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-1.5 px-3.5 py-2 bg-white/10 hover:bg-white/20 text-off-white rounded-xl border border-white/10 transition-all text-xs font-medium"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                      </svg>
                      Repository
                    </motion.a>

                    {current.live && (
                      <motion.a
                        href={current.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-1.5 px-3.5 py-2 bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-500 hover:to-teal-400 text-white rounded-xl shadow-lg transition-all text-xs font-semibold"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3m-2 16H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7h-2v7z"/>
                        </svg>
                        {current.liveLabel || 'Live Demo'}
                      </motion.a>
                    )}
                  </div>
                </div>

                {/* Project Showcase Visual / Fallback Header */}
                <div className="w-full h-44 sm:h-52 bg-gradient-to-br from-deep-gray via-dark-gray to-medium-gray/40 rounded-xl mb-5 overflow-hidden border border-white/10 relative group flex items-center justify-center">
                  {!imgError[current.title] && current.image ? (
                    <img
                      src={current.image}
                      alt={current.title}
                      onError={() => setImgError(prev => ({ ...prev, [current.title]: true }))}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full p-5 flex flex-col justify-between bg-gradient-to-br from-dark-gray/95 via-deep-gray to-space-black relative">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-mono text-blue-400 bg-blue-500/10 px-2.5 py-1 rounded border border-blue-500/20">
                          {current.category}
                        </span>
                        <div className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                          <span className="text-xs text-emerald-400 font-medium">{current.status}</span>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-lg sm:text-xl font-bold text-white mb-1">
                          {current.title}
                        </h4>
                        <p className="text-xs text-light-gray line-clamp-2">
                          {current.tagline}
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {current.techStack.flatMap(t => t.skills).slice(0, 5).map(tech => (
                          <span key={tech} className="text-[10px] font-mono text-lighter-gray bg-white/5 px-2 py-0.5 rounded border border-white/10">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent flex items-end p-4 pointer-events-none">
                    <p className="text-xs sm:text-sm text-off-white/90 line-clamp-2 leading-relaxed">
                      {current.description}
                    </p>
                  </div>
                </div>

                {/* Key Metrics Strip */}
                <div className="grid grid-cols-3 gap-2.5 sm:gap-3 mb-6">
                  {current.metrics.map((metric) => (
                    <div key={metric.label} className="bg-white/5 border border-white/10 rounded-xl p-2.5 sm:p-3 text-center">
                      <div className="text-base sm:text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-blue-300 to-indigo-300">
                        {metric.value}
                      </div>
                      <div className="text-[10px] sm:text-xs text-light-gray font-medium mt-0.5">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Interactive Navigation Tabs */}
                <div className="flex border-b border-white/10 mb-5 gap-2 overflow-x-auto pb-1">
                  <button
                    onClick={() => setActiveTab('system')}
                    className={`px-3 sm:px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all flex items-center gap-1.5 whitespace-nowrap ${
                      activeTab === 'system'
                        ? 'bg-white/15 text-white border border-white/20'
                        : 'text-light-gray hover:text-off-white hover:bg-white/5'
                    }`}
                  >
                    <svg className="w-4 h-4 text-blue-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                    System Architecture
                  </button>

                  <button
                    onClick={() => setActiveTab('applicability')}
                    className={`px-3 sm:px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all flex items-center gap-1.5 whitespace-nowrap ${
                      activeTab === 'applicability'
                        ? 'bg-white/15 text-white border border-white/20'
                        : 'text-light-gray hover:text-off-white hover:bg-white/5'
                    }`}
                  >
                    <svg className="w-4 h-4 text-emerald-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Applicability & Impact
                  </button>

                  <button
                    onClick={() => setActiveTab('tech')}
                    className={`px-3 sm:px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all flex items-center gap-1.5 whitespace-nowrap ${
                      activeTab === 'tech'
                        ? 'bg-white/15 text-white border border-white/20'
                        : 'text-light-gray hover:text-off-white hover:bg-white/5'
                    }`}
                  >
                    <svg className="w-4 h-4 text-purple-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                    Tech Stack & Layers
                  </button>
                </div>

                {/* Tab Content Display */}
                <div>
                  {/* TAB 1: System Design & Architecture */}
                  {activeTab === 'system' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-5"
                    >
                      {/* Architecture Overview */}
                      <div>
                        <h4 className="text-xs sm:text-sm font-semibold text-off-white uppercase tracking-wider mb-2 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                          High-Level Architecture
                        </h4>
                        <p className="text-light-gray text-xs sm:text-sm leading-relaxed bg-white/5 p-3.5 rounded-xl border border-white/10">
                          {current.systemDesign.overview}
                        </p>
                      </div>

                      {/* End-to-End Data Pipeline */}
                      <div>
                        <h4 className="text-xs sm:text-sm font-semibold text-off-white uppercase tracking-wider mb-2.5 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                          End-to-End Request & Data Flow
                        </h4>
                        <div className="flex flex-col space-y-1.5">
                          {current.systemDesign.dataFlow.map((step, idx) => (
                            <div
                              key={step}
                              className="flex items-center text-xs text-lighter-gray bg-deep-gray/60 px-3 py-2 rounded-lg border border-white/5"
                            >
                              <span className="w-5 h-5 rounded-full bg-blue-500/20 text-blue-300 font-bold text-[11px] flex items-center justify-center mr-2.5 flex-shrink-0 border border-blue-500/30">
                                {idx + 1}
                              </span>
                              <span className="leading-relaxed">{step}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Key Engineering Challenges & Solutions */}
                      <div>
                        <h4 className="text-xs sm:text-sm font-semibold text-off-white uppercase tracking-wider mb-2.5 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                          Core Engineering & Concurrency Decisions
                        </h4>
                        <div className="space-y-2.5">
                          {current.systemDesign.challenges.map((item, idx) => (
                            <div
                              key={idx}
                              className="p-3.5 bg-white/5 rounded-xl border border-white/10"
                            >
                              <h5 className="text-xs sm:text-sm font-bold text-white mb-1.5 flex items-center gap-2">
                                <svg className="w-4 h-4 text-teal-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                                {item.title}
                              </h5>
                              <p className="text-light-gray text-xs sm:text-sm leading-relaxed pl-6">
                                {item.solution}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* TAB 2: Real-World Applicability & Impact */}
                  {activeTab === 'applicability' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-4"
                    >
                      <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                        <h4 className="text-xs sm:text-sm font-bold text-white mb-1.5 flex items-center gap-2">
                          <svg className="w-4 h-4 text-emerald-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          </svg>
                          Real-World Use Case & Problem Solved
                        </h4>
                        <p className="text-light-gray text-xs sm:text-sm leading-relaxed pl-6">
                          {current.applicability.realWorldUseCase}
                        </p>
                      </div>

                      <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                        <h4 className="text-xs sm:text-sm font-bold text-white mb-1.5 flex items-center gap-2">
                          <svg className="w-4 h-4 text-blue-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                          Target Users & Ecosystem
                        </h4>
                        <p className="text-light-gray text-xs sm:text-sm leading-relaxed pl-6">
                          {current.applicability.targetAudience}
                        </p>
                      </div>

                      <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                        <h4 className="text-xs sm:text-sm font-bold text-white mb-1.5 flex items-center gap-2">
                          <svg className="w-4 h-4 text-purple-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                          </svg>
                          Measurable Business & Engineering Impact
                        </h4>
                        <p className="text-light-gray text-xs sm:text-sm leading-relaxed pl-6">
                          {current.applicability.businessImpact}
                        </p>
                      </div>
                    </motion.div>
                  )}

                  {/* TAB 3: Tech Stack Breakdown */}
                  {activeTab === 'tech' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-4"
                    >
                      {current.techStack.map((group) => (
                        <div key={group.category} className="p-3.5 bg-white/5 rounded-xl border border-white/10">
                          <h4 className="text-xs sm:text-sm font-bold text-white mb-2 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                            {group.category}
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {group.skills.map((tech) => (
                              <span
                                key={tech}
                                className="px-2.5 py-1 bg-deep-gray border border-white/10 text-lighter-gray text-xs rounded-lg hover:border-white/20 transition-colors"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  )
}