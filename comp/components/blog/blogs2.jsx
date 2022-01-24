/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link';

const Blogs2 = () => {
    return (
        <section className="blog-list section-padding sub-bg">
        <div className="container">
            <div className="row">
                <div className="col-lg-4">
                    <div className="head md-mb50">
                        <h6 className="back-color">Get The Latest News</h6>
                        <h3>What Our Trending News.</h3>
                        <p>We provide company and finance service for
                            startups and company business.</p>
                            <Link href="/contact">
                <a
                  className="butn bord curve wow fadeInUp"
                  data-wow-delay=".5s"
                >
                  <span>Get In Touch</span>
                </a>
              </Link>
                    </div>
                </div>
                <div className="col-lg-7 offset-lg-1">
                    <Link href="https://www.cnbc.com/2022/01/15/inside-the-metaverse-economy-this-is-what-will-be-for-real-in-2022.html" target="_blank">
                        {/* <a target="_blank"> */}
                    <div className="item wow fadeInUp" data-wow-delay=".3s">
                        <div className="img valign">
                            <img src="https://www.cityam.com/wp-content/uploads/2021/08/Bitcoin-Illustrations-of-Cryptocurrency-1320843096-2.jpg"  style={{width:'240px'}} alt="" />
                        </div>
                        <div className="cont valign">
                            <div>
                                <div className="info">
                                    <a href="#0" className="date">
                                        <span><i>06</i> August</span>
                                    </a>
                                    <span>/</span>
                                    <a href="#0" className="tag">
                                        <span>Trending</span>
                                    </a>
                                </div>
                                <h5>
                                    <a href="#0">Crypto job ads jump 400 per cent in a year, says LinkedIn</a>
                                </h5>
                            </div>
                        </div>
                    </div>
                    {/* </a> */}
                    </Link>
                    <Link href="https://finance.yahoo.com/news/metaverse-gradually-becoming-major-sensation-140043722.html">
                        {/* <a target="_blank"> */}
                    <div className="item wow fadeInUp" data-wow-delay=".5s">
                        <div className="img valign">
                            <img src="data:image/jpeg;base64,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" style={{width:'240px'}} alt="" />
                        </div>
                        <div className="cont valign">
                            <div>
                                <div className="info">
                                    <a href="#0" className="date">
                                        <span><i>06</i> August</span>
                                    </a>
                                    <span>/</span>
                                    <a href="#0" className="tag">
                                        <span>Trending</span>
                                    </a>
                                </div>
                                <h5>
                                    <a href="#0">The metaverse is gradually becoming a major sensation among corporate brands</a>
                                </h5>
                            </div>
                        </div>
                    </div>
                    {/* </a> */}
                    </Link>
                    <Link href="https://www.geekwire.com/2022/nfts-metaverse-web3-and-new-realities-of-startup-investing-with-founders-co-ops-aviel-ginzburg/">
                        {/* <a target="_blank"> */}
                    <div className="item wow fadeInUp" data-wow-delay=".3s">
                        <div className="img valign">
                            <img src="https://static01.nyt.com/images/2021/12/30/business/00metaverse/00metaverse-superJumbo.jpg"  style={{width:'240px'}} alt=""  />
                        </div>
                        <div className="cont valign">
                            <div>
                                <div className="info">
                                    <a href="#0" className="date">
                                        <span><i>06</i> August</span>
                                    </a>
                                    <span>/</span>
                                    <a href="#0" className="tag">
                                        <span>WordPress</span>
                                    </a>
                                </div>
                                <h5>
                                    <a href="#0">NFTs, Metaverse, Web3, and new realities of startup investing</a>
                                </h5>
                            </div>
                        </div>
                    </div>
                    {/* </a> */}
                    </Link>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Blogs2;