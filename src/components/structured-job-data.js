import React from "react"
import { Helmet } from "react-helmet"

const StructuredJobData = ({ 
    jobTitle, 
    jobDescription, 
    jobDatePosted, 
    jobValidThrough, 
    jobEmploymentType, 
    jobStreetAddress,
    jobCity,
    jobState,
    jobZipCode,
    jobSalary,
    jobMaxSalary,
    jobSalaryPer,
    jobSkills,
    jobQualifications,
    jobResponsibilities,
    jobEducationRequirements,
    jobExperienceRequirements }) => {
  return (
    <Helmet title="Structured Job Opening">
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "JobPosting",
            title: jobTitle ? jobTitle : '',
            description: jobDescription ? jobDescription : '',
            hiringOrganization: {
              "@type": "Organization",
              name: 'Optomi',
              sameAs: 'https://optomi.com'
            },
            datePosted: jobDatePosted ? jobDatePosted : '',
            validThrough: jobValidThrough ? jobValidThrough : '',
            employmentType: jobEmploymentType ? jobEmploymentType : '',
            jobLocation: {
                "@type": "Place",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: jobStreetAddress ? jobStreetAddress : '',
                  addressLocality: jobCity ? jobCity : '',
                  postalCode: jobZipCode ? jobZipCode : '',
                  addressCountry: "US",
                  addressRegion: jobState ? jobState : ''
                }
            },
            baseSalary: {
                "@type": "MonetaryAmount",
                currency: "USD",
                value: {
                  "@type": "QuantitativeValue",
                  unitText: jobSalaryPer ? jobSalaryPer : '',
                  minValue: jobSalary ? jobSalary : '',
                  maxValue: jobMaxSalary ? jobMaxSalary : ''
                }
              },
              qualifications: jobQualifications ? jobQualifications : '',
              skills: jobSkills ? jobSkills : '',
              responsibilities: jobResponsibilities ? jobResponsibilities : '',
              educationRequirements: jobEducationRequirements ? jobEducationRequirements : '',
              experienceRequirements: jobExperienceRequirements ? jobExperienceRequirements : ''
          })}
        </script>
    </Helmet>
  )
}

export default StructuredJobData