import React from 'react'
import BreadcrumbSection from '../breadcrumb/BreadcrumbSection'
import FaqAccordionSection from '../accordion/FaqAccordionSection'

const FaqMain = ({faqStaticData}) => {
  return (
    <>
        <BreadcrumbSection title={"FAQ Page"} current={"FAQ"}/>
        <FaqAccordionSection faqStaticData={faqStaticData}/>
    </>
  )
}

export default FaqMain