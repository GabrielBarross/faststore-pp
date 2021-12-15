import { useSession } from '@faststore/sdk'
import { graphql } from 'gatsby'
import { GatsbySeo, JsonLd } from 'gatsby-plugin-next-seo'
import React from 'react'
import type { PageProps } from 'gatsby'
import type { HomePageQueryQuery } from '@generated/graphql'
import CategoryBox from 'src/components/home/CategoryBox/CategoryBox'
import BannerCard from 'src/components/home/BannerCard/BannerCard'
import { Form } from '@faststore/ui'

export type Props = PageProps<HomePageQueryQuery>

const Page = (props: Props) => {
  const {
    data: { site },
    location: { pathname, host },
  } = props

  const { locale } = useSession()

  const title = site?.siteMetadata?.title ?? ''
  const siteUrl = `https://${host}${pathname}`

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
      <section className="section-home">
        <h4 className="section-title">Navegue por Categorias</h4>
        <ul className="category-box-list">
          <CategoryBox title="Marketing" />
          <CategoryBox title="Implementação e Vendas" />
          <CategoryBox title="Gestão de Eccommerce" />
          <CategoryBox title="Serviços Financeiros" />
          <CategoryBox title="Operações de Fullfilment" />
          <CategoryBox title="Marketplaces" />
        </ul>
      </section>
      <section className="newsletter-section">
        <Form>
          <h1>Cadastre-se na nossa Newsletter</h1>
        </Form>
      </section>
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
