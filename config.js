export default {
  cloudfrontUrl: 'https://dd17w042cevyt.cloudfront.net/images/'
}

export const CATEGORIES = {
  careManagement: { id: 'care-management', title: 'Care management' },
  healthITandInfrastructure: { id: 'health-it-and-infrastructure', title: 'Health IT & infrastructure' },
  patientEngagement: { id: 'patient-engagement', title: 'Patient Engagement' },
  precisionMedicineAndGenomics: { id: 'precision-medicine-and-genomics', title: 'Precision medicine & genomics' },
  publicHealthAndPolicy: { id: 'public-health-and-policy', title: 'Public health & policy' },
  all: { id: 'all', title: 'View case studies in all categories' }
}

export const CATEGORIES_LIST = [
  CATEGORIES.careManagement,
  CATEGORIES.healthITandInfrastructure,
  CATEGORIES.patientEngagement,
  CATEGORIES.precisionMedicineAndGenomics,
  CATEGORIES.publicHealthAndPolicy,
  CATEGORIES.all
]
