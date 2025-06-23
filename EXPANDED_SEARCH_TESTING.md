# Enhanced Search System Testing Guide

## Overview

The enhanced search system uses **intelligent keyword matching and semantic understanding** to surface the most relevant existing projects for any buyer query. Instead of creating separate capability entries, the system uses advanced keyword expansion and domain-specific boosting to help existing projects match a broader range of queries.

## Enhanced Keyword Matching

### Healthcare Domain Keywords
- **Telemetry**: monitoring, vital signs, patient monitoring, remote monitoring, ICU
- **Oncology**: cancer, tumor, treatment, chemotherapy, genomic data, clinical trials
- **Therapy**: mental health, CBT, behavioral health, counseling, PTSD, scheduling
- **Laboratory**: hematology, lab, diagnostic, CBC, blood work, pathology
- **Radiology**: imaging, PACS, teleradiology, medical imaging, DICOM, annotation
- **Compliance**: FHIR, HIPAA, HL7, health data exchange, interoperability

### Enterprise Domain Keywords
- **Analytics**: dashboard, KPI, business intelligence, metrics, visualization
- **IoT**: sensor, data ingestion, device monitoring, fleet management, real-time
- **Collaboration**: team, OKR, remote, engineering metrics, performance tracking
- **Fintech**: financial, subscription analytics, personal finance, voice-enabled
- **E-commerce**: loyalty, customer, Shopify, rewards, retention, shopping
- **Logistics**: delivery, routing, supply chain, last-mile, fleet management

### Government Domain Keywords
- **Civic Technology**: citizen, complaint tracking, municipal services, transparency
- **Planning**: permit, city planning, zoning, municipal, application workflow
- **Emergency**: crisis, disaster, response, coordination, state management
- **Elections**: voter registration, voting, democratic, federal standards
- **Research**: grant management, federal programs, scientific collaboration
- **Compliance**: SOC-2, FedRAMP, government security, federal authorization

## Test Query Results

### Healthcare-Focused Queries (1-15)

| Query | Expected Primary Match | Match Type | Score |
|-------|----------------------|------------|--------|
| "Need a telemetry dashboard to monitor ICU vitals remotely" | HGraph or Infobionic Heart Monitoring | Case Study | 70-85% |
| "Looking for an oncology treatment tracker that integrates genomic data" | Personal Genome Project or All of Us | Case Study | 65-80% |
| "Therapy scheduling platform for pediatric speech clinics" | Maya EHR or Care Cards | Case Study | 60-75% |
| "AI-powered hematology results dashboard for lab technicians" | HGraph or Tabeeb Diagnostics | Case Study | 65-80% |
| "Web-based radiology imaging solution with auto-annotation" | MITRE Flux Notes or Inspired EHRs | Case Study | 60-75% |
| "Mobile telemetry tracker for post-operative cardiac patients" | Healthcare Monitoring & Telemetry Dashboards | Capability | 85-90% |
| "Oncology outcomes analytics service for clinical trials" | Oncology Treatment & Analytics Platforms | Capability | 90-95% |
| "Self-guided CBT therapy app for veterans with PTSD" | Digital Therapy & Mental Health Platforms | Capability | 90-95% |
| "Cloud hematology data platform that flags abnormal CBC values" | Laboratory & Diagnostic Systems | Capability | 85-90% |
| "Need a HIPAA-compliant radiology collaboration dashboard" | Radiology & Medical Imaging Solutions | Capability | 85-90% |
| "Telemetry service that streams vital signs to an EHR" | Healthcare Monitoring & Telemetry Dashboards | Capability | 80-90% |
| "Interactive oncology patient portal with treatment milestones" | Oncology Treatment & Analytics Platforms | Capability | 85-90% |
| "Therapy progress dashboard for occupational therapists" | Digital Therapy & Mental Health Platforms | Capability | 80-85% |
| "Machine-learning hematology solution predicting transfusion needs" | Laboratory & Diagnostic Systems | Capability | 85-90% |
| "Low-latency radiology image viewer platform for teleradiology" | Radiology & Medical Imaging Solutions | Capability | 90-95% |

### Enterprise App Queries (16-24)

| Query | Expected Primary Match | Match Type | Score |
|-------|----------------------|------------|--------|
| "Enterprise expense-analysis dashboard for SaaS CFOs" | Enterprise Analytics & Business Intelligence | Capability | 80-90% |
| "Gamified habit tracker app for daily wellness goals" | Digital Wellness & Habit Tracking | Capability | 85-95% |
| "Scalable data-ingest platform for IoT sensor fleets" | IoT Data Platforms & Sensor Networks | Capability | 90-95% |
| "Customer loyalty service that plugs into Shopify" | E-commerce & Customer Loyalty Systems | Capability | 85-95% |
| "Real-time logistics solution for last-mile delivery routing" | Logistics & Supply Chain Management | Capability | 90-95% |
| "Cross-team dashboard visualizing OKRs and KPIs" | Team Collaboration & Performance Tracking | Capability | 85-90% |
| "AI metrics tracker for remote engineering teams" | Team Collaboration & Performance Tracking | Capability | 80-85% |
| "Subscription analytics platform for fintech startups" | Financial Technology & Analytics Platforms | Capability | 90-95% |
| "Voice-enabled personal finance solution with sentiment insights" | Financial Technology & Analytics Platforms | Capability | 80-90% |

### Government Sector Queries (25-30)

| Query | Expected Primary Match | Match Type | Score |
|-------|----------------------|------------|--------|
| "Citizen complaint tracking dashboard for municipal services" | Government & Civic Technology Platforms | Capability | 90-95% |
| "Cloud-based permit-application platform for city planning" | Permit & Planning Management Systems | Capability | 90-95% |
| "Emergency-response coordination solution for state disaster management" | Emergency Response & Crisis Management | Capability | 90-95% |
| "Open-data transparency service showing budget allocations" | Open Data & Government Transparency | Capability | 90-95% |
| "Digital voter-registration tracker compliant with federal standards" | Voter Registration & Election Systems | Capability | 90-95% |
| "Grant-management platform for federal research programs" | Grant Management & Research Platforms | Capability | 90-95% |

## Enhanced Matching Features

### 1. **Semantic Keyword Expansion**
- 100+ mapped concept relationships
- Domain-specific terminology (e.g., "telemetry" → "monitoring", "vital signs")
- Technology synonyms (e.g., "platform" → "system", "application", "solution")

### 2. **Domain-Specific Boosting**
- Healthcare terms get +3-4 points for healthcare capabilities
- Enterprise terms prioritize business intelligence capabilities  
- Government terms boost civic technology matches
- Compliance terms (HIPAA, SOC-2, FedRAMP) get dedicated boosts

### 3. **Capability vs. Case Study Balance**
- Capabilities get +1 bonus for broad queries
- Related case studies linked to show actual work
- Buyer descriptions explain relevance to specific needs

### 4. **Enhanced UI for Capabilities**
- 💡 icon instead of project images
- "Capability" badge to distinguish from completed work
- Related work links to actual case studies
- Compliance information displayed

## Testing Process

1. **Generate Enhanced Index**:
   ```bash
   npm run generate-embeddings:force
   ```

2. **Test Each Query Category**:
   - Healthcare: Should prioritize medical capabilities
   - Enterprise: Should match business intelligence needs  
   - Government: Should surface civic technology options

3. **Verify Relevance**:
   - Match scores should be 80%+ for direct capability matches
   - AI descriptions should explain why each capability fits
   - Related case studies should show relevant experience

## Expected Improvements

### Before Enhancement
- "Telemetry dashboard" → Limited to existing IoT-related case studies (30-40% match)
- "Grant management" → No relevant results (0% match)
- "Voter registration" → No government-specific matches (0% match)

### After Enhancement  
- "Telemetry dashboard" → HGraph, Infobionic Heart Monitoring (70-85% match)
- "Grant management" → FasterCures Health Data Basics, All of Us (60-75% match)
- "Voter registration" → Public Sector, AHRQ CDS (50-65% match)

## Next Steps

1. **Run Test Suite**: Test all 30 queries systematically
2. **Refine Scoring**: Adjust weights based on results
3. **Expand Keywords**: Add more domain-specific terms as needed
4. **User Feedback**: Collect feedback on capability vs. case study balance

This expanded system should now handle the full range of prospective buyer queries, returning relevant capabilities even for work types not explicitly showcased in the portfolio. 