# 🧠 Michael Garcia – Portfolio (Data Engineering & Systems)

> 🌍 Live Site: [michaelg-create.github.io/portfolio/](https://michaelg-create.github.io/portfolio/)

---

## 🇬🇧 Overview

Welcome to my personal portfolio, designed to showcase my expertise in **Data Engineering**, system architecture, and modern DevOps practices, underpinned by strong scientific rigor.

### 👨‍💻 Profile
**PhD Physicist turned Data Engineer**, specialized in building robust, reliable data architectures (ELT/ETL) and implementing high standards for **Data Quality and Lineage (dbt)**. I apply scientific rigor to ensure system integrity and production readiness.

### 🔧 Tech Stack
- **Orchestration & DevOps:** Apache **Airflow** (DAGs, MWAA), **Docker**, GitHub Actions, **Terraform** (IaC)
- **Data Warehousing:** AWS **Redshift** / S3, PostgreSQL, DuckDB, **dbt Core** (Modeling & Testing)
- **ETL/ELT Processing:** **Python** (pandas, FastAPI), **PySpark**
- **Frontend:** HTML, CSS, JavaScript

### 💼 Portfolio Structure
- `index_en.html`: Homepage (profile summary, key skills)
- `projets_en.html`: Data Engineering projects (Cloud-native pipelines, dimensional modeling, data quality)
- `cv_en.html`: Resume (embedded PDF)
- **International:** Bilingual structure using JavaScript component injection.

---

## 🚀 Featured Projects

### 1. Sectoral - Automated Sectoral Analysis Pipeline
**Cloud-native ELT pipeline for sectoral financial analysis**
- **Modeling**: Implementation of a **Star Schema** on Redshift for optimized analytics.
- **Infrastructure as Code (IaC)**: Full deployment using **Terraform** (AWS S3, Redshift, MWAA).
- **Data Quality**: Extensive use of **dbt Core** for data validation, lineage, and documentation.

[📂 Source Code](https://github.com/MichaelG-create/Sectoral)

### 2. Bank Branch Footfall Analytics
**End-to-end production system for banking traffic analysis**
- **Pipeline Architecture**: Ingestion via FastAPI, large-scale transformation using **PySpark**.
- **Orchestration**: Robust workflows managed by **Apache Airflow** (real-time + backfill).
- **Deployment**: Containerization (Docker) and Streamlit interface for visualization.

[🌐 Live App](https://bank-branch-footfall.streamlit.app/) | [📂 Source Code](https://github.com/michaelg-create/bank-branch-footfall)

---

## 🗂️ File Structure (Component Injection Architecture)

The site architecture utilizes JavaScript component injection (Header and Sidebar) to maintain consistency and bilingual features across all pages.

```

.
├── index.html
├── index\_en.html
├── projets.html
├── projets\_en.html
├── cv.html
├── cv\_en.html
├── components/           \<-- Injected HTML Components
│   ├── header.html
│   ├── header\_en.html
│   ├── sidebar.html
│   └── sidebar\_en.html
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── inject\_components.js \<-- Injection Script
│   ├── images/
│   └── pdf/
└── README.md

```



## 📬 Contact & Job Search

- 📧 Email: michael.garcia.73@gmail.com
- 💼 LinkedIn: [michaelgarcia838383](https://linkedin.com/in/michaelgarcia838383)
- 🐙 GitHub: [michaelg-create](https://github.com/michaelg-create)
- 📍 Location: Aix-les-Bains, France | **Willing to Relocate (Geneva / Switzerland)**

---

## 🎯 Looking for

**Data Engineer positions** in international organizations or innovative tech companies, with a focus on:
- Designing and optimizing **ELT/ETL pipelines**.
- Implementing robust **Data Quality** standards (dbt, testing).
- Working with **Cloud-native** data architectures (AWS, Redshift, Terraform).
- International collaboration (Bilingual portfolio, 🇨🇭 targeting Geneva).
