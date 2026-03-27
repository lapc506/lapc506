# 👋 Hola, soy Andrés Peña Castillo

### 📍 Heredia, Costa Rica
[LinkedIn](https://www.linkedin.com/in/lapc506) | [Website](https://lapc506.me) | 📧 lapc506@gmail.com | 📱 (+506) 8945-6736

---

## 👤 Perfil Profesional

*Leaving a Lasting Legacy is my Driver. Helping others access the opportunities I had is my purpose.*

Soy un **Site Reliability Engineer** y **emprendedor serial** con más de **10 años de experiencia** en la industria de tecnología, habiendo trabajado en empresas multinacionales como **IBM, Western Union, Roche, Hewlett Packard Enterprise** y **Provectus**.

Mis áreas de expertise incluyen **Site Reliability Engineering** (gestión de Cloud y Clusters usando GitOps), **Patch Management** y **Endpoints Administration**. También soy CTO y co-fundador de startups en los sectores EdTech, AgriTech y Web3.

---

## 🛠️ Habilidades Técnicas

**Cloud & SRE**
![OpenShift](https://img.shields.io/badge/Red_Hat_OpenShift-EE0000?style=flat&logo=red-hat-open-shift)
![Kubernetes](https://img.shields.io/badge/Kubernetes-326CE5?style=flat&logo=kubernetes&logoColor=white)
![AWS](https://img.shields.io/badge/AWS-232F3E?style=flat&logo=amazon-web-services&logoColor=white)
![ArgoCD](https://img.shields.io/badge/ArgoCD-EF7B4D?style=flat&logo=argo&logoColor=white)
![Ansible](https://img.shields.io/badge/Ansible-EE0000?style=flat&logo=ansible)
![Grafana](https://img.shields.io/badge/Grafana-F46800?style=flat&logo=grafana&logoColor=white)
![Instana](https://img.shields.io/badge/IBM_Instana-000000?style=flat&logo=ibm)

**Scripting & Desarrollo**
![Bash](https://img.shields.io/badge/Bash-4EAA25?style=flat&logo=gnu-bash&logoColor=white)
![PowerShell](https://img.shields.io/badge/PowerShell-5391FE?style=flat&logo=powershell&logoColor=white)
![Python](https://img.shields.io/badge/Python-3776AB?style=flat&logo=python&logoColor=white)
![Flutter](https://img.shields.io/badge/Flutter-02569B?style=flat&logo=flutter&logoColor=white)
![Dart](https://img.shields.io/badge/Dart-0175C2?style=flat&logo=dart&logoColor=white)

**Endpoint Management & ITSM**
![ManageEngine](https://img.shields.io/badge/ManageEngine-DC382D?style=flat)
![Jamf](https://img.shields.io/badge/Jamf_Cloud-491F59?style=flat&logo=jamf)
![Tanium](https://img.shields.io/badge/Tanium-CB1F27?style=flat)
![ServiceNow](https://img.shields.io/badge/ServiceNow-0072F2?style=flat&logo=servicenow)
![Active Directory](https://img.shields.io/badge/Active_Directory-0078D4?style=flat&logo=windows-server)

**Infraestructura & OS**
![RHEL](https://img.shields.io/badge/Red_Hat_Linux-EE0000?style=flat&logo=red-hat)
![Windows Server](https://img.shields.io/badge/Windows_Server-0078D4?style=flat&logo=windows)
![VMware](https://img.shields.io/badge/VMware_Horizon-607078?style=flat&logo=vmware)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=flat&logo=github-actions&logoColor=white)

**Data & Analytics**
![Tableau](https://img.shields.io/badge/Tableau-E97627?style=flat&logo=tableau&logoColor=white)
![Power BI](https://img.shields.io/badge/Power_BI-F2C811?style=flat&logo=power-bi&logoColor=black)
![SQL](https://img.shields.io/badge/SQL-CC2927?style=flat&logo=microsoft-sql-server)
![DB2](https://img.shields.io/badge/IBM_DB2-054ADA?style=flat&logo=ibm)

---

## 🌟 Habilidades Blandas

- Liderazgo democrático y trabajo en equipo
- Autodidacta y aprendizaje continuo
- Toma de decisiones basada en datos
- Comunicación asertiva y no violenta
- Razonamiento dialéctico y mayéutico
- Anti-fragilidad y adaptabilidad
- Persuasión y construcción de rapport
- Timeboxing y atención al detalle

---

## 💼 Experiencia Profesional

### DojoCoding Labs – Freelance Full-Stack & Infrastructure Engineer
*Mar. 2026 – Actualidad*

**Dojo OS — Plataforma EdTech SaaS (Supabase + React + Edge Functions)**
- Implementación de security hardening integral: rate limiting en Edge Functions críticas, corrección de políticas RLS excesivamente permisivas, field allowlists contra mass-assignment, y pre-commit SQL linter para prevenir funciones SECURITY DEFINER inseguras
- Integración de Cloudflare Turnstile CAPTCHA en formularios de signup y password reset
- Creación de tabla `security_audit_log` e instrumentación de Edge Functions para trazabilidad
- Escritura de tests de integración pgTAP para validar políticas RLS en tablas críticas
- Habilitación del chat con AI agent en producción, incluyendo invalidación de queries post-streaming y paso de contexto de cursos (Pathways) al agente
- Migración de endpoints `/api/chat` → `/api/web-chat` a través de frontend y Edge Functions
- Centralización de `getSiteUrl()` y `getAppEnv()` para corregir links de email en staging y selección de API keys de Stripe y Sentry
- Migración de CI/CD workflows a self-hosted runner en Google Compute Engine con ajustes de timeouts
- Creación de tabla y API client para `review_results`
- Documentación de hackathon lead magnet playbook y pitch deck templates con Marp
- Pill de AI disclosure en el chat widget para transparencia de uso de IA

**Dojo Agent — Claude Code Plugin para Gestión Autónoma de Proyectos**
- Desarrollo de herramientas de integración con Linear: `dojo_linear_create`, `dojo_linear_update`, `dojo_linear_comment`, `dojo_linear_projects`, `dojo_linear_cycles` con parámetros de estado
- Herramienta `dojo_github_pr_list` + cron endpoint, y `dojo_github_skill_write` para auto-persistencia de skills del agente
- Endpoint de webhook GitHub para auto-review de PRs
- Herramienta `dojo_slack_search` para búsqueda de keywords en historial de canales
- Herramienta `dojo_sql_query` con funciones RPC y descripciones schema-aware para consultas SQL seguras
- Endpoint `/api/ingest/sync` para re-ingestión atómica de cursos y `/api/ingest/webhook` con GitHub Action template
- Migración de embeddings de `text-embedding-004` a `gemini-embedding-001` (v1beta → v1), con columnas de source/title
- Sistema de memoria persistente con normalización de importancia (0.0–1.0) y categorías
- Sanitización de contenido de mensajes de usuario y descripciones de Linear issues
- Defensa contra despacho duplicado con dedup persistente cross-replica para Slack
- Anclaje de datos para prevenir alucinaciones SQL + logging de output en auditoría
- Implementación de `dojo_startup_incubation_brainstormer` — herramienta de 21 fases para Business Model Canvas
- Cron endpoint de reporte de issues activos en Linear
- Suite de 31 tests E2E para graph search y self-healing, más escenarios de hackathon e incubación
- Estimación de uso de tokens cuando el proveedor no lo reporta
- Inyección de URLs de infraestructura en contexto del agente para canales internos
- Disclaimer de recomendación AI en output de developer-match

**Freedom Academy — Infraestructura GCP para Moodle LMS (OpenTofu + Bash)**
- Diseño e implementación de módulos de infraestructura con OpenTofu: Cloud SQL (MySQL), Memorystore (Redis), y Compute Engine con startup scripts
- Configuración de elasticidad con Managed Instance Groups, Load Balancer y autoscaler
- Implementación de Cloud Armor WAF, alertas de monitoreo y estrategia de backups automatizados
- Migración de PHP 8.1 → 8.2 con verificación SHA256 de tarballs de Moodle
- Centralización de branding (tokens, colores, emails) y logos i18n EN/ES con tema Moove
- Configuración de SSL/TLS y migración de dominio `demolabcr.org` → `freedomacademies.org`
- Scripts de activación SMTP (Resend), reCAPTCHA v2, y verificación de restauración de backups
- Configuración de `mod_scorm` para paquetes Articulate Rise
- Exportación de datos de estudiantes con DDL schema y scripts GDPR
- Documentación completa: credential handover, incident response playbook, deployment runbook, y matriz de roles IAM
- Entorno local de desarrollo Moodle para testing de migraciones

**Freedom Academy — Suite de Plugins Custom para Moodle 4.5 (PHP)**
- **Partner Enrol:** Plugin de enrollment con gestión individual de estudiantes (add/remove/view), estadísticas agregadas, tablero kanban de student journey, y exportación CSV con scoping por partner
- **UTM Tracker:** Rastreo de campañas de marketing con integración a GA4 y Meta Conversions API (CAPI), incluyendo reporte de funnel de rendimiento de campañas y tests HTTP mockeados
- **Student Journey:** Motor de automatización de journeys con triggers de quiz y grading, emisión de certificados, editor visual de reglas para administradores no técnicos, dashboard de estadísticas y vista de detalle de ejecución, con notificaciones push
- **Freedom Dashboard:** Dashboard nativo de Moodle con controles de acceso basados en roles (admin/partner/staff), agregadores de datos, vistas personalizadas, y exportación CSV por partner
- **AI Feedback Engine:** Plugin de retroalimentación impulsada por IA con spike de investigación documentado sobre LLM engines
- ADR-001 para arquitectura de dashboard: enfoque híbrido plugin nativo + Grafana
- Corrección de 3 bugs de compatibilidad con Moodle 4.5
- Hardening de seguridad contra SSRF y hallazgos lógicos de Greptile

### IBM – Site Reliability Engineer
*Maximo Application Suite and Maximo Manage*
*Feb. 2024 – Sept. 2025*
- Administración de Red Hat OpenShift en múltiples clusters en AWS
- Despliegue de upgrades de aplicaciones MAS usando workflows de ArgoCD
- Observabilidad con IBM Instana y Grafana
- Construcción de scripts Bash para automatización y recuperación de datos
- Soporte exitoso de múltiples upgrades mayores de Maximo (MAS 8 → 9.1, 9.0 → 9.1.2)
- Documentación de escenario de Disaster Recovery para Db2U Standalone en OpenShift

### Provectus – IT Cloud Engineer
*Consulting contractor for Model N*
*Sept. 2021 – Nov. 2023*
- Workflows automatizados de Patch Management con ManageEngine y Jamf Cloud
- Upgrade exitoso de +1.100 endpoints de Windows 10 v1703 a 21H2
- Implementación de upgrades de macOS Monterey → Ventura vía Jamf Cloud con Nudge
- Scripts personalizados en PowerShell para System Restore Points y análisis de fallos

### Roche Services & Solutions – Senior Service Desk Agent
*Sept. 2020 – Sept. 2021*
- Gestión de incidentes y solicitudes en ServiceNow ITSM (ITIL3)
- Soporte L1 para Google Suite, SAP, Microsoft Office y apps propietarias
- Creación de herramienta de análisis de problemas para mejora continua de KPIs

### Western Union – End User Support Specialist (L3)
*EUC Desktop Engineering*
*Feb. 2018 – May. 2020*
- Gestión de parches para +1.000 endpoints con WSUS; migración a Tanium
- Detección de fallo global de Windows Update que afectó +1.000 endpoints en LATAM y USA
- Despliegue de VMware Horizon AppStacks para equipos de Cloud Ops y Data Analytics
- Traducción de scripts legacy de batch a PowerShell 5.1

### Western Union – Technical Support Technician (L1)
*Ene. 2017 – Ene. 2018*

### Hewlett Packard Enterprise (DXC) – Customer Solution Center Technician
*Pfizer Global Service Desk*
*Nov. 2015 – Dic. 2016*

### Perfiles Tecnológicos – Technical Support Representative
*Contractor for HPE at Pfizer GSD*
*Dic. 2014 – Nov. 2015*

---

## 🚀 Startups & Proyectos Destacados

### 1. [Vertivo](https://github.com/vertivolatam/monorepo) – AgriTech & IoT
Startup de agricultura vertical urbana incubada en **Bridge for Billions** (2021). Fabricación y gestión remota de **MicroInvernaderos Aeropónicos Autónomos**. Monorepo con Serverpod backend, Flutter app, Raspberry Pi orchestrator (Balena), EMQX MQTT, K8s + ArgoCD GitOps. Pre-seed de US $9.500 levantado con Auge-UCR. Finalistas con mención honorífica en **Road to Innovate Central America** (Friedrich Naumann Foundation).

### 2. [AltruPets](https://github.com/altrupets/monorepo) – Animal Welfare
Aplicación móvil en Flutter para protección animal: coordinación de rescates, hogares de acogida, campañas de crowdfunding y denuncias anónimas de maltrato animal.

### 3. [HabitaNexus](https://github.com/lapc506/habitanexus) – PropTech
Plataforma de gestión de bienes raíces desarrollada en Dart/Flutter.

### 4. [KeikoStart](https://github.com/keikolatam/dapp-monorepo) – EdTech & Web3
Plataforma de colaboración educativa descentralizada con **Life Learning Passport** basado en micro-credenciales sobre blockchain (Starknet). Arquitectura modular de 5 capas usando **Flutter, Dart, GraphQL, gRPC, Starknet/Cairo, Redis Streams**.

---

## 🎓 Educación

- **Ingeniería en Computación** | Instituto Tecnológico de Costa Rica (en Hiatus)
- **Soporte Técnico en Tecnologías de Información** | Colegio Técnico Profesional de Flores (2011 – 2013)

---

## 🗣️ Idiomas

- **Español** Nativo
- **Inglés** Nivel C1
- **Portugués** Nivel A2 (Comprensión lectora y auditiva)

---

## 🎖️ Certificaciones

- **PIEA 2023** – INCAE Business School & Invermaster Ventures
- **Innovate Programme 2022** – Friedrich Naumann Foundation
- **The Leap Incubation Program** – Bridge for Billions (2021)
- **Scrum Product Owner** – CertiProf (2020)
- **User Stories Foundation** – CertiProf (2020)
- **Scrum Foundation Professional** – CertiProf (2020)
- **Management 3.0 Fundamentals** – F&M Consulting (2020)
- **Tableau 2019.2 Intermediate** – Prisma Análisis Costa Rica (2019)
- **Cambridge English B1 CEFR** – University of Cambridge (2013)
- **Cisco IT Essentials** – Fundación Omar Dengo & Cisco Networking Academy (2011)

---

## 🌐 Comunidades que Administro

- **Ciencia de Datos en Latinoamérica** – ~3.000 miembros en LinkedIn (desde Jul. 2019)
- **Flutter Apps en Latinoamérica** – Comunidad en LinkedIn (desde Sept. 2025)
- **Startups 506** – Co-fundador y co-administrador (2022 – 2024)

---

## 🎧 Otros Intereses

- DJ y producción de Electronic Dance Music (Pioneer DDJ-FLX4-W)
- Festivales de música electrónica, karts y Fórmula 1
- Canopy y exploración de maravillas naturales
- Comida picante 🌶️

---

## 📫 **¿Cómo contactarme?**
lapc506@gmail.com | [LinkedIn](https://www.linkedin.com/in/lapc506) | [Website](https://lapc506.me)
