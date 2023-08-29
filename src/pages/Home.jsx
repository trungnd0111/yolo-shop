import React from 'react'

import Helmet from '../components/Helmet'
import HeroSlider from '../components/HeroSlider'
import Section, { SectionBody, SectionTitle } from '../components/Section'
import { Link } from 'react-router-dom'
import heroSliderData from '../assets/fake-data/hero-slider'
import PolicyCard from '../components/PolicyCard'
import policy from '../assets/fake-data/policy'
import Grid from '../components/Grid'
import productData from '../assets/fake-data/products'
import ProductCard from '../components/ProductCard'
import banner from '../assets/images/banner.png'
const Home = () => {
    return (
        <Helmet title='Trang chủ'>
            {/* Hero slider */}

            <HeroSlider data={heroSliderData} control={true} auto={false} timeOut={5000} />

            {/* end hero slider */}

            {/* policy section */}

            <Section>
                <SectionBody>
                    <Grid
                        col={4}
                        mdCol={2}
                        smCol={1}
                        gap={20}
                    >
                        {
                            policy.map((item, index) => {
                                return <Link to="/policy">
                                    <PolicyCard
                                        key={index}
                                        name={item.name}
                                        description={item.description}
                                        icon={item.icon}
                                    />
                                </Link>
                            })
                        }
                    </Grid>
                </SectionBody>
            </Section>

            {/* end policy section */}


            {/* best selling section */}
            <Section>
                <SectionTitle>
                    Top sản phẩm bán chạy nhất trong tuần
                </SectionTitle>
                <SectionBody>
                    <Grid
                        col={4}
                        mdCol={2}
                        smCol={1}
                        gap={20}
                    >
                        {
                            productData.getProducts(4).map((item, index) => {
                                return <Link to="/policy" key={index}
                                >
                                    <ProductCard
                                        key={index}
                                        img01={item.image01}
                                        img02={item.image02}
                                        name={item.title}
                                        price={Number(item.price)}
                                        slug={item.slug}
                                    />
                                </Link>
                            })
                        }
                    </Grid>
                </SectionBody>
            </Section>
            {/* end best selling section */}


            {/* new arrival section */}
            <Section>
                <SectionTitle>
                    Sản phẩm mới
                </SectionTitle>
                <SectionBody>
                    <Grid
                        col={4}
                        mdCol={2}
                        smCol={1}
                        gap={20}
                    >
                        {
                            productData.getProducts(4).map((item, index) => {
                                return <Link to="/policy" key={index}
                                >
                                    <ProductCard
                                        key={index}
                                        img01={item.image01}
                                        img02={item.image02}
                                        name={item.title}
                                        price={Number(item.price)}
                                        slug={item.slug}
                                    />
                                </Link>
                            })
                        }
                    </Grid>
                </SectionBody>
            </Section>
            {/* end new arrival section */}

            {/* banner */}
            <Section>
                <SectionBody>
                    <Link to="/catalog">
                        <img src={banner} alt='' />
                    </Link>
                </SectionBody>
            </Section>
            {/* end banner */}

            {/* popular product section */}
            <Section>
                <SectionTitle>
                    Sản phẩm phổ biến nhất
                </SectionTitle>
                <SectionBody>
                    <Grid
                        col={4}
                        mdCol={2}
                        smCol={1}
                        gap={20}
                    >
                        {
                            productData.getProducts(12).map((item, index) => {
                                return <Link to="/policy" key={index}
                                >
                                    <ProductCard
                                        key={index}
                                        img01={item.image01}
                                        img02={item.image02}
                                        name={item.title}
                                        price={Number(item.price)}
                                        slug={item.slug}
                                    />
                                </Link>
                            })
                        }
                    </Grid>
                </SectionBody>
            </Section>
            {/* end popular product section */}

        </Helmet>
    )
}

export default Home
