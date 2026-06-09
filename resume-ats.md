# Andrés Peña Castillo
## Senior Infrastructure / Systems Engineer | Site Reliability Engineer

📍 Heredia, Costa Rica (GMT-6) | 📧 lapc506@gmail.com | 📱 (+506) 8945-6736
🔗 LinkedIn: linkedin.com/in/lapc506 | 🌐 lapc506.me

---

## PROFESSIONAL SUMMARY

Senior Site Reliability Engineer with 10+ years of experience in enterprise infrastructure management, specializing in Linux systems administration, bare-metal server operations, container orchestration, and high-availability environments. Demonstrated expertise in kernel tuning, virtualization technologies (KVM, Proxmox, VMware), and network engineering at scale. Proven track record of maintaining 24/7 mission-critical systems for multinational corporations including IBM, Western Union, and Roche. English C1 certified with extensive experience in cross-functional technical communication.

---

## CORE COMPETENCIES

| Category | Skills |
|----------|--------|
| **Linux Systems** | RHEL, Ubuntu Server, Kernel Tuning, System Calls, Process Management, systemd, LVM, Btrfs, Bare-Metal Deployment |
| **Virtualization** | KVM, Proxmox VE, VMware Horizon, VMware vSphere, libvirt, QEMU, Nested Virtualization, VM Migration |
| **Containers** | Docker, Podman, Kubernetes, OpenShift, Containerd, Linux Namespaces, cgroups, OCI Specifications |
| **Networking** | TCP/IP, DNS, BGP Routing, Firewall (iptables/nftables), VLAN, VPN (Pulse Secure, Cisco AnyConnect), Network Troubleshooting |
| **Infrastructure as Code** | Terraform, OpenTofu, CloudFormation, Ansible, Bash scripting, Python automation |
| **Observability** | Grafana, Datadog, Instana, CloudWatch, Splunk, Dynatrace, ELK Stack, PagerDuty |
| **Cloud Platforms** | AWS (EC2, Route 53, VPC, IAM), GCP (Compute Engine, Cloud SQL, Memorystore) |
| **Monitoring** | Nagios, Zabbix, Prometheus, CloudWatch, Instana, Nexthink, Tanium |

---

## PROFESSIONAL EXPERIENCE

### Site Reliability Engineer
**IBM** | Maximo Application Suite | Feb 2024 – Sept 2025

- Administered Red Hat OpenShift clusters in AWS, managing multi-node Kubernetes deployments with Custom Resource Definitions and operators
- Performed kernel tuning and system optimization on RHEL servers hosting IBM WebSphere (WAS) middleware
- Deployed MAS application upgrades using ArgoCD GitOps workflows for zero-downtime deployments
- Implemented observability stack using IBM Instana and Grafana for real-time performance monitoring
- Executed real-time incident response for 24/7 production environments using PagerDuty
- Authored and maintained runbooks and technical documentation in Confluence
- Built Bash automation scripts for Red Hat OpenShift and IBM WebSphere administration tasks
- Supported major infrastructure upgrades including MAS 8 to 9.1 and 9.0 to 9.1.2 migrations

**IT Cloud Engineer**
**Provectus** | Consulting for Model N | Sept 2021 – Nov 2023

- Managed endpoint infrastructure for 1,100+ Windows and macOS devices using ManageEngine Desktop Central and Jamf Cloud MDM
- Developed automated patch management workflows for monthly Windows and macOS updates
- Created PowerShell scripts for Windows Update automation, System Restore Point scheduling, and vulnerability remediation
- Implemented Qualys VMDR integration for vulnerability detection and remediation tracking
- Collaborated with internal teams to establish corporate backup policies using MS OneDrive

**Senior Service Desk Agent**
**Roche Services & Solutions** | Sept 2020 – Sept 2021

- Managed IT incidents and service requests in ServiceNow ITSM following ITIL v3 framework
- Provided L1 support for SAP, Google Suite, Microsoft Office, and internal applications
- Developed custom problem analysis reporting tool for root cause analysis and proactive change recommendations

**End User Support Specialist L3**
**Western Union** | EUC Desktop Engineering | Feb 2018 – May 2020

- Administered WSUS for enterprise-wide Windows Update management across 1,000+ endpoints in LATAM and US regions
- Developed PowerShell scripts for software package deployment via Tanium endpoint management
- Performed deep system debugging using Event Viewer and CMTrace for Windows OS error analysis
- Executed Change Management processes via ServiceNow for infrastructure modifications
- Deployed applications using VMware Horizon with AppStacks and User Environment Manager
- Translated legacy batch scripts to PowerShell 5.1, enabling migration from IBM BigFix to Tanium
- Resolved critical Windows Update failures affecting 1,000+ endpoints across Latin America by identifying WSUS database corruption

**L1 Technical Support Technician**
**Western Union** | Feb 2017 – Jan 2018

- Provided L1 support for enterprise applications and proprietary systems
- Escalated complex issues to L2 and L3 support tiers
- Updated Knowledge Base articles in ServiceNow ITSM

**Customer Solution Center Technician**
**HPE (DXC)** | Pfizer Global Service Desk | Nov 2015 – Dec 2016

- Provided L2 printing support for HP printers across Pfizer buildings
- Managed BIOS configuration for HP printer deployments
- Created IT incidents via ServiceNow for major incidents affecting Pfizer infrastructure

---

## FREELANCE INFRASTRUCTURE PROJECTS

### DojoCoding Labs – Freelance Infrastructure Engineer | 2026

**Freedom Academy – GCP Infrastructure (OpenTofu + Bash)**
- Designed and implemented IaC modules for managed relational database, in-memory cache, and compute instances
- Configured managed instance groups with load balancer and autoscaler for high-availability
- Implemented GCP Cloud Armor WAF, monitoring alerts, and automated backup strategies
- Configured SSL/TLS certificates and executed full domain migration to production
- Established transactional email infrastructure with anti-bot protection
- Created complete documentation: credential handover, incident response playbook, deployment runbook

**Dojo OS – EdTech SaaS Platform (Supabase + React)**
- Implemented comprehensive security hardening: rate limiting, RLS policies, field allowlists, SQL linting
- Integrated CAPTCHA for signup and password reset forms
- Built CI/CD pipeline migration to self-hosted runners on Google Compute Engine
- Configured environment configuration for staging vs production parity

### Vertivo – AgriTech IoT Startup | 2021

- Led infrastructure architecture for urban vertical farming platform with monorepo structure
- Deployed Raspberry Pi orchestrator using Balena OS for IoT device management
- Configured EMQX MQTT broker cluster for IoT sensor data ingestion
- Implemented Kubernetes cluster with ArgoCD GitOps for continuous deployment
- Managed on-prem bare-metal servers for IoT gateway infrastructure

---

## TECHNICAL INFRASTRUCTURE EXPERTISE

### Bare-Metal & Data Center Operations
- Hardware deployment and maintenance of physical servers
- BIOS/UEFI configuration and firmware management
- RAID configuration (hardware and software RAID)
- IPMI/iDRAC/iLO remote management
- Data center rack installation and cabling
- Power and thermal management

### Linux System Administration
- Kernel compilation and tuning (sysctl parameters)
- System call tracing with strace/ltrace
- Process management and CPU affinity (taskset, cgroups)
- Memory management and swap optimization
- Disk I/O scheduling and filesystem tuning (XFS, ext4, Btrfs)
- Systemd service management and unit configuration
- Log analysis and system auditing

### Network Engineering
- TCP/IP stack configuration and troubleshooting
- DNS server administration (BIND, dnsmasq, Route 53)
- Firewall configuration (iptables, nftables, firewalld)
- VPN tunnels (WireGuard, OpenVPN, IPSec)
- Network performance analysis (tcpdump, Wireshark, netstat)
- Load balancer configuration (HAProxy, Nginx)
- VLAN and bridge configuration

### Virtualization & Containers
- KVM hypervisor installation, configuration, and tuning
- Proxmox VE cluster management
- libvirt/virsh command-line management
- VM performance optimization (CPU pinning, NUMA, huge pages)
- Docker container runtime and Docker Compose
- Container networking (bridge, host, overlay networks)
- Linux namespaces and cgroups management
- Image optimization and registry management

---

## EDUCATION

**Computer Sciences Engineering** | Instituto Tecnológico de Costa Rica (Hiatus)
**Information Technology Technical Support** | Colegio Técnico Profesional de Flores | 2011 – 2013

---

## CERTIFICATIONS

- **English C1 Level** | University of Cambridge | 2013
- **Scrum Product Owner** | CertiProf | 2020
- **Scrum Foundation Professional** | CertiProf | 2020
- **Management 3.0 Fundamentals** | Management 3.0 | 2020
- **Cisco IT Essentials** | Cisco Networking Academy | 2011
- **PIEA 2023** | INCAE Business School | Executive Education
- **Innovate Programme 2022** | Friedrich Naumann Stiftung | Startup Incubation
- **The Leap Incubation Program** | Bridge for Billions | 2021

---

## LANGUAGES

- **Spanish** – Native
- **English** – C1 Level (Certified)
- **Portuguese** – A2 Level (Listening/Reading)

---

## AVAILABILITY

- **Location:** Costa Rica (GMT-6) – Aligns with LATAM and US time zones
- **Work Style:** Fully Remote
- **Time Zone Overlap:** Available for US/LATAM business hours
- **Employment Type:** Full-time / Contract
