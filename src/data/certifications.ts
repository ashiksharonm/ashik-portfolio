export interface Certification {
  name: string
  issuer: string
  link: string
  highlight?: boolean
}

export const certifications: Certification[] = [
  {
    name: 'AWS Certified Solutions Architect – Associate (SAA-C03)',
    issuer: 'AWS',
    link: 'https://drive.google.com/file/d/1MqqjX4jMEEj9-DNr-z5Lm23zA89ua2ET/view?usp=drive_link',
    highlight: true,
  },
  {
    name: 'AWS Certified AI Practitioner (AIF-C01)',
    issuer: 'AWS',
    link: 'https://drive.google.com/file/d/1VTnW4P4SisIZYbp58MBh8qw2UGb7-gU5/view?usp=drive_link',
    highlight: true,
  },
  {
    name: 'AWS Certified Machine Learning Specialty',
    issuer: 'AWS',
    link: 'https://drive.google.com/file/d/1U1pady-WCI-x0tk4eWrqlmorj1yZoZn1/view?usp=drive_link',
    highlight: true,
  },
  {
    name: 'AWS Certified Machine Learning Engineer – Associate',
    issuer: 'AWS',
    link: 'https://drive.google.com/file/d/15feqn5BLkPs0kLHii-xVT6KATAGMFjIt/view?usp=drive_link',
    highlight: true,
  },
  {
    name: 'AWS Certified Data Engineer – Associate',
    issuer: 'AWS',
    link: 'https://drive.google.com/file/d/1wAXyVwbMuoeRfn0wtUfOptqHFSPa1nW_/view?usp=drive_link',
    highlight: true,
  },
  {
    name: 'AWS Certified Cloud Practitioner (CLF-C02)',
    issuer: 'AWS',
    link: 'https://drive.google.com/file/d/1R02tIzXfO75SQQBm5n7HPB9HxFk07GnP/view?usp=drive_link',
    highlight: true,
  },
  {
    name: 'AWS Certified Generative AI Developer',
    issuer: 'AWS',
    link: 'https://drive.google.com/file/d/1_HIfwsWs8QgM2xkcB0GytYnvNdByo3G_/view?usp=drive_link',
  },
  {
    name: 'Kubernetes for the Absolute Beginners',
    issuer: 'Udemy',
    link: 'https://drive.google.com/file/d/1aTu2SpzS1eq1PY_O0ae0VpPf_Cmt7LGv/view?usp=drive_link',
  },
  {
    name: 'SAP Certified — Data Analyst (SAP Analytics Cloud)',
    issuer: 'SAP',
    link: 'https://www.credly.com/badges/ccb0159f-1494-44c5-9ad8-a5e80b59efed/linked_in?t=tb0bmm',
  },
]

export const certificationsHighlighted = certifications.filter((c) => c.highlight)
export const certificationsRest = certifications.filter((c) => !c.highlight)
