import { BenefitsCard, Title } from '@/components/shared'
import React from 'react'
import styles from "./style.module.scss";

const SectionOurBenefits = ({ data }) => {
  if (data && data.length > 0) {
    const { theme, title, items } = data[0]
    return (
      <>
        <section className={` ${styles.section_benefits_container} ${theme !== 'dark' ? 'bg-nena-secondary' : 'bg-transparent'}   `}>
          <Title title={title} type={theme} />
          <div className={` ${styles.cards_benefits_container}   ${theme !== 'dark' ? 'bg-nena-secondary' : 'bg-transparent'} `} >
            <div className={`${styles.grid_benifts_container}`}>
              {items.map((item, idx) => (
                <BenefitsCard key={item.id} theme={theme} {...item} />
              ))}
            </div>
          </div>
        </section>

      </>
    )
  }
}

export default SectionOurBenefits