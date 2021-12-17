import { useSession } from '@faststore/sdk'
import { graphql } from 'gatsby'
import { GatsbySeo, JsonLd } from 'gatsby-plugin-next-seo'
import React from 'react'
import type { PageProps } from 'gatsby'
import type { HomePageQueryQuery } from '@generated/graphql'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import CategoryBox from 'src/components/home/CategoryBox/CategoryBox'
import BannerCard from 'src/components/home/BannerCard/BannerCard'
import NewsletterForm from 'src/components/home/NewsletterForm/NewsletterForm'
import PartnerCard from 'src/components/home/PartnerCard/PartnerCard'
import HighlightCard from 'src/components/home/HighlightCard/HighlightCard'

export type Props = PageProps<HomePageQueryQuery>

const Page = (props: Props) => {
  const {
    data: { site },
    location: { pathname, host },
  } = props

  const { locale } = useSession()

  const title = site?.siteMetadata?.title ?? ''
  const siteUrl = `https://${host}${pathname}`

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  }

  const sampleArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  return (
    <>
      {/* SEO */}
      <GatsbySeo
        title={title}
        description={site?.siteMetadata?.description ?? ''}
        titleTemplate={site?.siteMetadata?.titleTemplate ?? ''}
        language={locale}
        canonical={siteUrl}
        openGraph={{
          type: 'website',
          url: siteUrl,
          title: title ?? '',
          description: site?.siteMetadata?.description ?? '',
        }}
      />
      <JsonLd
        json={{
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          url: siteUrl,
          potentialAction: {
            '@type': 'SearchAction',
            target: `${siteUrl}/s/?q={search_term_string}`,
            'query-input': 'required name=search_term_string',
          },
        }}
      />

      {/*
        Sections: Components imported from '../components/sections' only.
        Do not import or render components from any other folder in here.
      */}
      <section className="flex justify-center flex-col items-center">
        <img
          className="pp-main-banner"
          src="https://sesnick.vtexassets.com/arquivos/banner-desk.png"
          alt="Encontre o Melhor Parceiro"
        />
        <div className="banner-card-container flex flex-row">
          <BannerCard
            imageURL="https://sesnick.vteximg.com.br/arquivos/icon-settings.png"
            title="Eu quero construir minha loja"
            smallText="Agências"
          />
          <BannerCard
            imageURL="https://sesnick.vteximg.com.br/arquivos/icon-stock.png"
            title="Eu quero evoluir minha loja"
            smallText="Serviços e Ferramentas"
          />
        </div>
      </section>
      <section className="fh-section h-section x-scroll">
        <h3 className="section-title">Navegue por Categorias</h3>
        <ul className="category-box-list">
          <CategoryBox title="Marketing" url="/" />
          <CategoryBox title="Implementação e Vendas" url="/" />
          <CategoryBox title="Gestão de Eccommerce" url="/" />
          <CategoryBox title="Serviços Financeiros" url="/" />
          <CategoryBox title="Operações de Fullfilment" url="/" />
          <CategoryBox title="Marketplaces" url="/" />
        </ul>
      </section>
      <section className="b-gray h-section">
        <h3 className="shelf-title">Parceiros Populares</h3>
        <Carousel responsive={responsive}>
          {sampleArray.map((index: any) => {
            return (
              <PartnerCard
                key={index}
                url="/"
                partnerName="Default Prop Name"
                partnerText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud"
              />
            )
          })}
        </Carousel>
      </section>
      <section className="flex flex-row h-section">
        <HighlightCard
          title="Grupo Soma acelera marketplace próprio em parceria com Conecta Lá e VTEX"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          url="/"
          image="https://sesnick.vteximg.com.br/arquivos/sample-highlight.png"
        />
        <HighlightCard
          title="Grupo Soma acelera marketplace próprio em parceria com Conecta Lá e VTEX"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          url="/"
          image="https://sesnick.vteximg.com.br/arquivos/sample-highlight.png"
        />
        <HighlightCard
          title="Grupo Soma acelera marketplace próprio em parceria com Conecta Lá e VTEX"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          url="/"
          image="https://sesnick.vteximg.com.br/arquivos/sample-highlight.png"
        />
      </section>
      <section className="flex flex-row h-section">
        <img
          src="https://partnernetwork.vtexassets.com/assets/vtex.file-manager-graphql/images/d3431e0f-8c57-4f17-9c77-5099765ae5ba___2c04000e3d9e3f34ca6164cb68fdf8f4.png"
          alt=""
          width="100%"
        />
      </section>
      <section className="b-gray h-section">
        <h3 className="shelf-title">Novos Parceiros</h3>
        <Carousel responsive={responsive}>
          {sampleArray.map((index: any) => {
            return (
              <PartnerCard
                key={index}
                url="/"
                partnerName="Default Prop Name"
                partnerText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud"
              />
            )
          })}
        </Carousel>
      </section>
      <NewsletterForm />
    </>
  )
}

export const query = graphql`
  query HomePageQuery {
    site {
      siteMetadata {
        title
        description
        titleTemplate
      }
    }
  }
`

export default Page
