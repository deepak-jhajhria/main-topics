import 'bootstrap/dist/css/bootstrap.css';
import './style.css'
import logo from './assets/images/logo.png';
import image1 from './assets/images/first.png'
import image2 from './assets/images/second.png'
import image3 from './assets/images/third.png'
document.querySelector('#app').innerHTML = `
<div class="w-100">
<div class="container bg-white vh-100 ">
    <div class="content">
        <a href="#" class="d-flex link"><img src="${logo}"/>
            Records
        </a>
        <div class="pt-9 row justify-content-center">
            <div class="col-md-6 col-lg-4">
                <div class="d-flex flex-column ">
                    <img class="w-100" src="${image1}" alt="images1">
                    <div class="d-flex flex-column Card">
                        <div class="m-3 max-w-378">
                            <div class="d-flex gap-3 ">
                                <a href="#" class="BtnSmall">Tech</a>
                                <a href="#" class="BtnSmall">Startups</a>
                                <a href="#" class="BtnSmall">AI</a>
                            </div>
                            <h2 class="title m-0 pt-2  text-nowrap">How to choose
                                the right
                                colors when
                                creating a website?</h2>
                            <p class="mt-0 pt-2  para">The app is a comprehensive resource that can help you
                                stay
                                up-to-date on everything that's happening at the company. You can find news
                                articles, blog posts, videos, and presentations about company initiatives,
                                product
                                launches, and employee successes. You can also find information about upcoming
                                events, training opportunities, and resources for your work.</p>
                            <button class="btnSecond rounded-pill w-100 text-center mt-3">CTA button</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-6 my-4 my-md-0  col-lg-4">
                <div class="d-flex flex-column ">
                    <img class="w-100" src="${image2}" alt="images1">
                    <div class="d-flex flex-column Card">
                        <div class="m-3 max-w-378">
                            <div class="d-flex gap-3 ">
                                <a href="#" class="BtnSmall">Tech</a>
                                <a href="#" class="BtnSmall">Startups</a>
                                <a href="#" class="BtnSmall">AI</a>
                            </div>
                            <h2 class="title m-0 pt-2  text-nowrap">How to choose
                                the right
                                colors when
                                creating a website?</h2>
                            <p class="mt-0 pt-2  para">The app is a comprehensive resource that can help you
                                stay
                                up-to-date on everything that's happening at the company. You can find news
                                articles, blog posts, videos, and presentations about company initiatives,
                                product
                                launches, and employee successes. You can also find information about upcoming
                                events, training opportunities, and resources for your work.</p>
                            <button class="btnSecond rounded-pill w-100 text-center mt-3">CTA button</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-lg-4">
                <div class="d-flex flex-column ">
                    <img class="w-100" src="${image3}" alt="images1">
                    <div class="d-flex flex-column Card">
                        <div class="m-3 max-w-378">
                            <div class="d-flex gap-3 ">
                                <a href="#" class="BtnSmall">Tech</a>
                                <a href="#" class="BtnSmall">Startups</a>
                                <a href="#" class="BtnSmall">AI</a>
                            </div>
                            <h2 class="title m-0 pt-2  text-nowrap">How to choose
                                the right
                                colors when
                                creating a website?</h2>
                            <p class="mt-0 pt-2  para">The app is a comprehensive resource that can help you
                                stay
                                up-to-date on everything that's happening at the company. You can find news
                                articles, blog posts, videos, and presentations about company initiatives,
                                product
                                launches, and employee successes. You can also find information about upcoming
                                events, training opportunities, and resources for your work.</p>
                            <button class="btnSecond rounded-pill w-100 text-center mt-3">CTA button</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
`

