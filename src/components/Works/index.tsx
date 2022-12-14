// import { StaticImage } from 'gatsby-plugin-image'
import { useMediaQuery } from '@/hooks'
import Footer from '@/layouts/Footer'
import { works, info } from '@/mocks'
import { slugify } from '@/utils/slug.utils'
import { Link } from 'gatsby'
import * as React from 'react'
import * as S from './Works.module.scss'

const Works = () => {
  const isPhone = useMediaQuery('(max-width: 768px)')

  return (
    <>
      <section className={S.works}>
        <div className={S.works__wrapper}>
          <header className={S.works__header}>
            <h1>
              <span>The Showcase</span>
            </h1>
            {isPhone && <small>{info.worksIntro}</small>}
          </header>

          <section className={S.works__items}>
            {works.map((works, index) => (
              <article key={index} className={S.works__work}>
                <div className={S.works__work__left}>
                  <span>{works.date}</span>
                  <h3>{works.name}</h3>
                  <p>{works.description}</p>
                  <Link to={`/works/${slugify(works.name)}`}>View Project</Link>
                </div>
                <div className={S.works__work__right}>
                  {/* <p>
                    madebyalfa ©22 <br /> 0506
                  </p> */}
                  <img
                    loading='lazy'
                    src={works.coverImage}
                    alt='A dinosaur'
                    width={782}
                    height={500}
                  />
                </div>
              </article>
            ))}
          </section>
        </div>
      </section>
      <div className='empty'></div>
      <Footer />
    </>
  )
}

export default Works
