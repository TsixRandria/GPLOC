import React, { Component } from 'react'

class Listin extends Component {
    render() {
        return (
            <div>
                

                    <div class="b-blog s-shadow">
                                <div class="container">
                                    <div class="row">
                                        <div class="col-md-3 col-xs-12">
                                            <aside class="b-blog__aside">
                                                <form class="b-blog__aside-search wow zoomInUp" data-wow-delay="0.3s" action="/" method="post">
                                                    <div>
                                                        <input type="text" name="search" value="" placeholder="Search" />
                                                        <button type="submit"><span class="fa fa-search"></span></button>
                                                    </div>        
                                                </form>
                                                <div class="b-blog__aside-categories wow zoomInUp" data-wow-delay="0.3s">
                                                    <header class="s-lineDownLeft">
                                                        <h2 class="s-titleDet">CATEGORIES</h2>
                                                    </header>
                                                    <nav>
                                                        <ul class="b-blog__aside-categories-list">
                                                            <li><a href="#">Auto Buying Tips &amp; Advice</a></li>
                                                            <li><a href="#">Latest Models News</a></li>
                                                            <li class="m-active"><a href="#">Test Drives</a></li>
                                                            <li><a href="#">Video Reviews</a></li>
                                                            <li><a href="#">Analysis &amp; Features</a></li>
                                                        </ul>
                                                    </nav>
                                                </div>
                                                <div class="b-blog__aside-popular wow zoomInUp" data-wow-delay="0.3s">
                                                    <header class="s-lineDownLeft">
                                                        <h2 class="s-titleDet">POPULAR POSTS</h2>
                                                    </header>
                                                    <div class="b-blog__aside-popular-posts">
                                                        <div class="b-blog__aside-popular-posts-one">
                                                            <img class="img-responsive" src="media/270x150/mercBlog.png" alt="merc" />
                                                            <h4><a href="article.html">2016 Mercedes-Benz GLE-Class Debuts</a></h4>
                                                            <div class="b-blog__aside-popular-posts-one-date"><span class="fa fa-calendar-o"></span>20th May 2015</div>
                                                        </div>
                                                        <div class="b-blog__aside-popular-posts-one">
                                                            <img class="img-responsive" src="media/270x150/outlander.png" alt="outlander" />
                                                            <h4><a href="article.html">Refreshed 2016 Mitsubishi Outlander</a></h4>
                                                            <div class="b-blog__aside-popular-posts-one-date"><span class="fa fa-calendar-o"></span>20th May 2015</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="b-blog__aside-text wow zoomInUp" data-wow-delay="0.3s">
                                                    <header class="s-lineDownLeft">
                                                        <h2 class="s-titleDet">WHY CHOOSE US?</h2>
                                                    </header>
                                                    <p>Curabitur libero. Donec facilisis velit edu est
                                                        Phasellus conside quat. Aenean vitae quam.
                                                        Vivamus etdu nunc. Nunc conseq sem velde
                                                        metus imperdiet lacinia. Cras ornare pretum
                                                        tortor. Donec sed augue sed nunc rutru me
                                                        egestas. Bulum ante ipsum primisn faucibus
                                                        orci luctus et ultrices posuere.</p>
                                                </div>
                                                <div class="b-blog__aside-reviews wow zoomInUp" data-wow-delay="0.3s">
                                                    <header class="s-lineDownLeft">
                                                        <h2 class="s-titleDet">LATEST REVIEWS</h2>
                                                    </header>
                                                    <div class="b-blog__aside-reviews-posts">
                                                        <div class="b-blog__aside-reviews-posts-one">
                                                            <div class="row m-smallPadding">
                                                                <div class="col-xs-5">
                                                                    <img src="media/100x80/audiRev.jpg" alt="audi" class="img-responsive pull-right" />
                                                                </div>
                                                                <div class="col-xs-7">
                                                                    <div class="b-blog__aside-reviews-posts-one-info">
                                                                        <p>First Drive:<br/>2016 Audi Q3</p>
                                                                        <div class="b-world__item-val">
                                                                            <div class="b-world__item-val-circles">
                                                                                <span></span>
                                                                                <span></span>
                                                                                <span></span>
                                                                                <span></span>
                                                                                <span class="m-empty"></span>
                                                                            </div>
                                                                            <span class="b-world__item-num">4.1</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="b-blog__aside-reviews-posts-one">
                                                            <div class="row m-smallPadding">
                                                                <div class="col-xs-5">
                                                                    <img src="media/100x80/mercRev.jpg" alt="merc" class="img-responsive  pull-right" />
                                                                </div>
                                                                <div class="col-xs-7">
                                                                    <div class="b-blog__aside-reviews-posts-one-info">
                                                                        <p>Mercedes-Benz GLA - 2015 Hottest Hatch</p>
                                                                        <div class="b-world__item-val">
                                                                            <div class="b-world__item-val-circles">
                                                                                <span></span>
                                                                                <span></span>
                                                                                <span></span>
                                                                                <span></span>
                                                                                <span class="m-empty"></span>
                                                                            </div>
                                                                            <span class="b-world__item-num">4.1</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </aside>
                                        </div>
                                        <div class="col-md-9 col-xs-12">
                                            <div class="b-blog__posts">
                                                <div class="b-blog__posts-one wow zoomInUp" data-wow-delay="0.3s">
                                                    <div class="row">
                                                        <div class="col-xs-8">
                                                            <header class="b-blog__posts-one-body-head s-lineDownLeft">              
                                                                <div class="b-blog__posts-one-body-head-notes">
                                                                    <span class="b-blog__posts-one-body-head-notes-note"><span class="fa fa-user"></span>Our Admin</span>
                                                                    <span class="b-blog__posts-one-body-head-notes-note"><span class="fa fa-calendar-o"></span>20th May 2015</span>
                                                                    <span class="b-blog__posts-one-body-head-notes-note"><span class="fa fa-comment"></span>5 Comments</span>
                                                                </div>
                                                                <h2 class="s-titleDet">Redesigned 2016 Nissan Maxima Introduced</h2>
                                                            </header>
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col-xs-4 pull-right">
                                                            <img class="img-responsive center-block" src="media/blog/nissanBlogTwo.jpg" alt="nissan" />
                                                        </div>
                                                        <div class="col-xs-8 pull-right">
                                                            <div class="b-blog__posts-one-info">
                                                                <p>
                                                                    Curabitur libero. Donec facilisis velit eu est. Phasellus cons quat. Aenean vitae quam. Vivamu sd nunc. Nunc conseq usemdw veld metus imperdiet lacinia. In viverra dolor non justo. Proin molest erat inder rhoncus posuere de nibh quam  onsectet uer lectus acwl vulputate ligulad lorem dolor. Donec nunc. Suspendisse potent. Integer blandit massa sit amet condimentum laoreet diam elementum urna sed tincidunt lacus sapien.
                                                                </p>
                                                                <a href="article.html" class="btn m-btn m-readMore">Read More<span class="fa fa-angle-right"></span></a>
                                                                <div class="b-blog__posts-one-social pull-right">
                                                                    <em>SHARE THIS</em>
                                                                    <a href="#"><span class="fa fa-google-plus-square "></span></a>
                                                                    <a href="#"><span class="fa  fa-facebook-square"></span></a>
                                                                    <a href="#"><span class="fa fa-twitter-square "></span></a>
                                                                    <a href="#"><span class="fa fa-pinterest-square"></span></a>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                                <div class="b-blog__posts-one wow zoomInUp" data-wow-delay="0.3s">
                                                    <div class="row">
                                                        <div class="col-xs-8">
                                                            <header class="b-blog__posts-one-body-head s-lineDownLeft">              
                                                                <div class="b-blog__posts-one-body-head-notes">
                                                                    <span class="b-blog__posts-one-body-head-notes-note"><span class="fa fa-user"></span>Our Admin</span>
                                                                    <span class="b-blog__posts-one-body-head-notes-note"><span class="fa fa-calendar-o"></span>20th May 2015</span>
                                                                    <span class="b-blog__posts-one-body-head-notes-note"><span class="fa fa-comment"></span>5 Comments</span>
                                                                </div>
                                                                <h2 class="s-titleDet">2015 Ferrari California T</h2>
                                                            </header>
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col-xs-4 pull-right">
                                                            <img class="img-responsive center-block" src="media/blog/ferrariBlogTwo.jpg" alt="ferrari" />
                                                        </div>
                                                        <div class="col-xs-8 pull-right">
                                                            <div class="b-blog__posts-one-info">
                                                                <p>
                                                                    Curabitur libero. Donec facilisis velit eu est. Phasellus cons quat. Aenean vitae quam. Vivamu sd nunc. Nunc conseq usemdw veld metus imperdiet lacinia. In viverra dolor non justo. Proin molest erat inder rhoncus posuere de nibh quam  onsectet uer lectus acwl vulputate ligulad lorem dolor. Donec nunc. Suspendisse potent. Integer blandit massa sit amet condimentum laoreet diam elementum urna sed tincidunt lacus sapien.
                                                                </p>
                                                                <a href="article.html" class="btn m-btn m-readMore">Read More<span class="fa fa-angle-right"></span></a>
                                                                <div class="b-blog__posts-one-social pull-right">
                                                                    <em>SHARE THIS</em>
                                                                    <a href="#"><span class="fa fa-google-plus-square "></span></a>
                                                                    <a href="#"><span class="fa  fa-facebook-square"></span></a>
                                                                    <a href="#"><span class="fa fa-twitter-square "></span></a>
                                                                    <a href="#"><span class="fa fa-pinterest-square"></span></a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="b-blog__posts-one wow zoomInUp" data-wow-delay="0.3s">
                                                    <div class="row">
                                                        <div class="col-xs-8">
                                                            <header class="b-blog__posts-one-body-head s-lineDownLeft">              
                                                                <div class="b-blog__posts-one-body-head-notes">
                                                                    <span class="b-blog__posts-one-body-head-notes-note"><span class="fa fa-user"></span>Our Admin</span>
                                                                    <span class="b-blog__posts-one-body-head-notes-note"><span class="fa fa-calendar-o"></span>20th May 2015</span>
                                                                    <span class="b-blog__posts-one-body-head-notes-note"><span class="fa fa-comment"></span>5 Comments</span>
                                                                </div>
                                                                <h2 class="s-titleDet">2015 Chrysler 300: 7 Things You Need to Know</h2>
                                                            </header>
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col-xs-4 pull-right">
                                                            <img class="img-responsive center-block" src="media/blog/chryslerBlogTwo.jpg" alt="" />
                                                        </div>
                                                        <div class="col-xs-8 pull-right">
                                                            <div class="b-blog__posts-one-info">
                                                                <p>
                                                                    Curabitur libero. Donec facilisis velit eu est. Phasellus cons quat. Aenean vitae quam. Vivamu sd nunc. Nunc conseq usemdw veld metus imperdiet lacinia. In viverra dolor non justo. Proin molest erat inder rhoncus posuere de nibh quam  onsectet uer lectus acwl vulputate ligulad lorem dolor. Donec nunc. Suspendisse potent. Integer blandit massa sit amet condimentum laoreet diam elementum urna sed tincidunt lacus sapien.
                                                                </p>
                                                                <a href="article.html" class="btn m-btn m-readMore">Read More<span class="fa fa-angle-right"></span></a>
                                                                <div class="b-blog__posts-one-social pull-right">
                                                                    <em>SHARE THIS</em>
                                                                    <a href="#"><span class="fa fa-google-plus-square "></span></a>
                                                                    <a href="#"><span class="fa  fa-facebook-square"></span></a>
                                                                    <a href="#"><span class="fa fa-twitter-square "></span></a>
                                                                    <a href="#"><span class="fa fa-pinterest-square"></span></a>
                                                                </div>
                                                            </div>
                                                        </div>                              
                                                    </div>
                                                </div>
                                                <div class="b-blog__posts-one-body-main-link wow zoomInUp" data-wow-delay="0.3s">
                                                    <a><span class="fa fa-globe"></span>http://themeforest.net/user/Templines</a>
                                                </div>
                                                <div class="b-blog__posts-one wow zoomInUp" data-wow-delay="0.3s">
                                                    <div class="row">
                                                        <div class="col-xs-8">
                                                            <header class="b-blog__posts-one-body-head s-lineDownLeft">              
                                                                <div class="b-blog__posts-one-body-head-notes">
                                                                    <span class="b-blog__posts-one-body-head-notes-note"><span class="fa fa-user"></span>Our Admin</span>
                                                                    <span class="b-blog__posts-one-body-head-notes-note"><span class="fa fa-calendar-o"></span>20th May 2015</span>
                                                                    <span class="b-blog__posts-one-body-head-notes-note"><span class="fa fa-comment"></span>5 Comments</span>
                                                                </div>
                                                                <h2 class="s-titleDet">BMW M4 vs Jaguar F-Type Coupe Comparison</h2>
                                                            </header>
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col-xs-4 pull-right">
                                                            <img class="img-responsive center-block" src="media/blog/bmwBlogTwo.jpg" alt="" />
                                                        </div>
                                                        <div class="col-xs-8 pull-right">
                                                            <div class="b-blog__posts-one-info">
                                                                <p>
                                                                    Curabitur libero. Donec facilisis velit eu est. Phasellus cons quat. Aenean vitae quam. Vivamu sd nunc. Nunc conseq usemdw veld metus imperdiet lacinia. In viverra dolor non justo. Proin molest erat inder rhoncus posuere de nibh quam  onsectet uer lectus acwl vulputate ligulad lorem dolor. Donec nunc. Suspendisse potent. Integer blandit massa sit amet condimentum laoreet diam elementum urna sed tincidunt lacus sapien.
                                                                </p>
                                                                <a href="article.html" class="btn m-btn m-readMore">Read More<span class="fa fa-angle-right"></span></a>
                                                                <div class="b-blog__posts-one-social pull-right">
                                                                    <em>SHARE THIS</em>
                                                                    <a href="#"><span class="fa fa-google-plus-square "></span></a>
                                                                    <a href="#"><span class="fa  fa-facebook-square"></span></a>
                                                                    <a href="#"><span class="fa fa-twitter-square "></span></a>
                                                                    <a href="#"><span class="fa fa-pinterest-square"></span></a>
                                                                </div>
                                                            </div>
                                                        </div> 
                                                    </div>
                                                </div>
                                                <div class="text-center wow zoomInUp" data-wow-delay="0.3s">
                                                    <div class="b-items__pagination-main text-center">
                                                        <a href="#" class="m-left"><span class="fa fa-angle-left"></span></a>
                                                        <span class="m-active"><a href="#">1</a></span>
                                                        <span><a href="#">2</a></span>
                                                        <span><a href="#">3</a></span>
                                                        <span><a href="#">4</a></span>
                                                        <a href="#" class="m-right"><span class="fa fa-angle-right"></span></a>    
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
        </div>
        )
    }
}
export default Listin;