import React from "react";
import Page from "../../assets/projectPage";

function Diagnosis(){
    const frameworks=[{name: 'Yolo',url:'https://docs.ultralytics.com/', icon:`<svg width="70" height="48" viewBox="0 0 512 137" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_9_106)">
<path d="M25.0385 0.000793457C11.2323 0.000793457 2.2543e-05 11.2418 2.2543e-05 25.0594C2.2543e-05 38.8755 11.2323 50.1173 25.0385 50.1173C38.8455 50.1173 50.077 38.8755 50.077 25.0594C50.077 11.2418 38.8455 0.000793457 25.0385 0.000793457Z" fill="#0B23A9"/>
<path d="M53.3671 78.4677C44.3475 78.4677 35.8253 76.1829 28.3448 72.1696V83.5383C28.3448 97.3343 39.3521 108.781 53.1366 108.914C67.0557 109.049 78.4226 97.7569 78.4226 83.858V72.1595C70.9344 76.1821 62.3982 78.4677 53.3671 78.4677Z" fill="#0B23A9"/>
<path d="M56.6424 25.0616C56.617 42.4935 42.4772 56.6497 24.9967 56.6916C18.2534 56.7087 11.9256 54.6076 6.76171 50.9399C15.9145 67.3128 33.3786 78.4772 53.3474 78.4392C82.3554 78.4633 106.291 54.8289 106.773 25.8406L106.704 25.7786C106.733 25.0563 106.698 25.6479 106.733 25.0563C106.746 11.2291 95.4963 -0.0563816 81.7483 -0.00879702C67.8698 0.0454653 56.6558 11.2344 56.6424 25.0616Z" fill="url(#paint0_linear_9_106)"/>
<path d="M171.465 63.3505C171.465 77.5133 161.258 83.3649 150.864 83.3649C140.423 83.3649 130.261 77.5133 130.261 63.3505V37.7183H140.006V62.4681C140.006 71.0589 144.785 74.2168 150.864 74.2168C156.942 74.2168 161.721 71.0589 161.721 62.4681V37.7183H171.465V63.3505Z" fill="#0B23A9"/>
<path d="M190.766 22.7652H180.743V82.2039H190.766V22.7652Z" fill="#0B23A9"/>
<path d="M221.182 45.426H209.675V67.7152C209.675 73.6588 213.573 73.5667 221.182 73.1952V82.2039C205.87 84.0607 199.653 79.8818 199.653 67.7152V22.7652H209.675V35.7678H221.182V45.426Z" fill="#0B23A9"/>
<path d="M321.415 22.7652H311.392V82.2039H321.415V22.7652Z" fill="#0B23A9"/>
<path d="M400.505 45.426H388.997V67.7152C388.997 73.6588 392.895 73.5667 400.505 73.1952V82.2039C385.193 84.0607 378.975 79.8818 378.975 67.7152V22.7652H388.997V35.7678H400.505V45.426Z" fill="#0B23A9"/>
<path d="M407.883 40.9065H417.906V82.2039H407.883V40.9065ZM408.347 32.0828C405.841 29.4828 405.841 25.5818 408.347 23.0748C410.853 20.4741 414.936 20.4741 417.442 23.0748C419.948 25.5818 419.948 29.4828 417.35 32.0828C414.844 34.5905 410.946 34.5905 408.347 32.0828Z" fill="#0B23A9"/>
<path d="M363.141 35.7679H373.813L355.995 83.69C350.561 98.0355 346.438 100.778 333.263 100.778L333.352 91.3984C339.663 91.7691 343.189 88.7048 345.694 82.2968L346.158 81.3672L326.484 35.7679H337.435L351.262 69.4799L363.141 35.7679Z" fill="#0B23A9"/>
<path d="M432.137 76.3532C427.497 71.6162 425.177 65.8583 425.177 58.9859C425.177 52.0206 427.497 46.2619 432.137 41.6186C436.87 36.8825 442.717 34.5604 449.677 34.5604C458.678 34.5604 466.659 39.2045 470.372 46.5406L461.74 51.5562C459.607 47.0986 455.152 44.4051 449.584 44.4051C445.5 44.4051 442.067 45.7983 439.284 48.584C436.592 51.3696 435.2 54.807 435.2 58.9859C435.2 63.1648 436.592 66.6014 439.284 69.3878C442.067 72.1735 445.5 73.5667 449.584 73.5667C455.059 73.5667 459.699 70.7803 461.927 66.4156L470.557 71.3376C466.566 78.7681 458.678 83.4114 449.677 83.4114C442.717 83.4114 436.87 81.0893 432.137 76.3532Z" fill="#0B23A9"/>
<path d="M495.364 54.6205C502.509 56.1995 511.79 59.1717 511.604 69.1092C511.604 73.5667 509.841 77.0962 506.407 79.6032C502.974 82.1103 498.705 83.4114 493.508 83.4114C484.321 83.4114 477.546 79.3246 474.577 72.545L483.207 67.5294C484.785 71.9877 488.218 74.2169 493.508 74.2169C498.798 74.2169 501.397 72.4521 501.397 69.0155C501.397 66.0441 497.499 64.2794 492.58 63.0719C485.62 61.3072 476.247 58.5215 476.433 48.7697C476.433 44.4972 478.011 41.0613 481.258 38.4614C484.506 35.8608 488.59 34.5604 493.415 34.5604C501.117 34.5604 507.336 38.1828 510.583 44.2185L502.138 48.9555C500.56 45.426 497.591 43.662 493.415 43.662C489.61 43.662 486.641 45.3339 486.641 48.584C486.641 51.6483 490.539 53.228 495.364 54.6205Z" fill="#0B23A9"/>
<path d="M279.19 73.8453C283.366 73.8453 286.892 72.4521 289.677 69.6664C292.46 66.7863 293.852 63.2576 293.852 58.9858C293.852 54.7133 292.46 51.1838 289.677 48.3981C286.892 45.5188 283.366 44.1263 279.19 44.1263C275.014 44.1263 271.488 45.5188 268.703 48.3981C265.92 51.1838 264.528 54.7133 264.528 58.9858C264.528 63.2576 265.92 66.7863 268.703 69.6664C271.488 72.4521 275.014 73.8453 279.19 73.8453ZM293.852 35.7678H303.875V82.2038H293.852V75.5172C290.048 80.8106 284.665 83.4105 277.612 83.4105C271.209 83.4105 265.827 81.0885 261.279 76.3531C256.732 71.6161 254.505 65.7646 254.505 58.9858C254.505 52.1134 256.732 46.3547 261.279 41.6186C265.827 36.8816 271.209 34.5596 277.612 34.5596C284.665 34.5596 290.048 37.161 293.852 42.3616V35.7678Z" fill="#0B23A9"/>
<path d="M238.308 44.186C240.748 38.579 245.447 35.7748 252.226 35.7748V46.3571C248.52 46.0854 245.267 46.9894 242.465 49.07C239.664 51.0592 238.308 54.4052 238.308 59.0183V81.8091H228.548V36.589H238.308V44.186Z" fill="#0B23A9"/>
<path d="M313.38 110.237C312.179 110.237 311.245 110.548 310.489 111.216C309.733 111.883 309.376 112.773 309.376 113.886C309.376 115 309.733 115.934 310.489 116.601C311.245 117.269 312.179 117.58 313.38 117.58C314.58 117.58 315.514 117.269 316.27 116.601C317.026 115.934 317.382 115 317.382 113.886C317.382 112.773 317.026 111.883 316.27 111.216C315.514 110.548 314.58 110.237 313.38 110.237ZM313.38 122.476C310.355 122.476 308.31 124.079 308.31 126.749C308.31 129.463 310.355 131.066 313.38 131.066C316.404 131.066 318.449 129.463 318.449 126.749C318.449 124.079 316.404 122.476 313.38 122.476ZM324.542 127.55C324.542 133.292 320.273 136.852 313.38 136.852C306.442 136.852 302.217 133.292 302.217 127.55C302.217 124.257 303.64 121.764 306.486 120.028C304.307 118.471 303.239 116.29 303.239 113.575C303.239 110.682 304.218 108.457 306.13 106.855C308.087 105.252 310.489 104.451 313.38 104.451C316.27 104.451 318.671 105.252 320.584 106.855C322.496 108.457 323.474 110.682 323.474 113.575C323.474 116.334 322.407 118.471 320.228 120.028C323.119 121.764 324.542 124.257 324.542 127.55Z" fill="#00A2F3"/>
<path d="M155.598 104.451L144.715 123.827V136.216H138.504V123.827L127.666 104.451H134.74L141.632 117.702L148.525 104.451H155.598Z" fill="#00A2F3"/>
<path d="M177.677 130.725C180.579 130.725 183.028 129.772 184.977 127.821C186.928 125.87 187.924 123.374 187.924 120.333C187.924 117.293 186.928 114.797 184.977 112.846C183.028 110.894 180.579 109.896 177.677 109.896C174.775 109.896 172.327 110.894 170.376 112.846C168.426 114.797 167.429 117.293 167.429 120.333C167.429 123.374 168.426 125.87 170.376 127.821C172.327 129.772 174.775 130.725 177.677 130.725ZM177.677 136.851C173.097 136.851 169.197 135.263 165.978 132.087C162.804 128.865 161.217 124.962 161.217 120.333C161.217 115.705 162.804 111.802 165.978 108.626C169.197 105.404 173.097 103.816 177.677 103.816C182.257 103.816 186.156 105.404 189.375 108.626C192.596 111.802 194.183 115.705 194.183 120.333C194.183 124.962 192.596 128.865 189.375 132.087C186.156 135.263 182.257 136.851 177.677 136.851Z" fill="#00A2F3"/>
<path d="M211.182 130.227H223.289V136.217H204.924V104.451H211.182V130.227Z" fill="#00A2F3"/>
<path d="M246.231 130.725C249.133 130.725 251.581 129.772 253.531 127.821C255.48 125.87 256.478 123.374 256.478 120.333C256.478 117.293 255.48 114.797 253.531 112.846C251.581 110.894 249.133 109.896 246.231 109.896C243.329 109.896 240.881 110.894 238.93 112.846C236.98 114.797 235.983 117.293 235.983 120.333C235.983 123.374 236.98 125.87 238.93 127.821C240.881 129.772 243.329 130.725 246.231 130.725ZM246.231 136.851C241.651 136.851 237.751 135.263 234.532 132.087C231.357 128.865 229.77 124.962 229.77 120.333C229.77 115.705 231.357 111.802 234.532 108.626C237.751 105.404 241.651 103.816 246.231 103.816C250.81 103.816 254.71 105.404 257.929 108.626C261.149 111.802 262.736 115.705 262.736 120.333C262.736 124.962 261.149 128.865 257.929 132.087C254.71 135.263 250.81 136.851 246.231 136.851Z" fill="#00A2F3"/>
<path d="M288.128 113.527H294.567L285.951 136.216H279.285L270.67 113.527H277.109L282.595 129.409L288.128 113.527Z" fill="#00A2F3"/>
</g>
<defs>
<linearGradient id="paint0_linear_9_106" x1="30.2851" y1="77.5527" x2="92.3039" y2="8.90398" gradientUnits="userSpaceOnUse">
<stop stop-color="#00DEF3"/>
<stop offset="1" stop-color="#0B23A9"/>
</linearGradient>
<clipPath id="clip0_9_106">
<rect width="512" height="137" fill="white"/>
</clipPath>
</defs>
</svg>
`},
{name:'Roboflow', url:'https://roboflow.com/', icon:`<?xml version="1.0" encoding="utf-8"?>
<!-- Generator: Adobe Illustrator 19.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
<svg version="1.1" id="layer" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="90px" height="45px" viewBox="0 0 652 652" style="enable-background:new 0 0 652 652;" xml:space="preserve">
<style type="text/css">
	.st0{fill-rule:evenodd;clip-rule:evenodd;fill:#6706CE;}
	.st1{fill-rule:evenodd;clip-rule:evenodd;fill:#FFFFFF;}
</style>
<path class="st0" d="M155.2,321c0,36.9-29.9,66.8-66.8,66.8c-36.9,0-66.8-29.9-66.8-66.8s29.9-66.8,66.8-66.8
	C125.3,254.2,155.2,284.1,155.2,321 M200.1,309.9h-17v48h17v-19.4c0-8.2,2.3-14.5,11.8-14.5c2.6,0,4.9,0.3,7.2,1.6v-16.4h-3.3
	c-6.6,0-12.2,2.6-15.5,8.5h-0.2V309.9z M280.6,333.9c0-16.4-13.5-25.6-28.9-25.6c-15.4,0-28.9,9.3-28.9,25.6
	c0,16.4,13.6,25.5,28.9,25.5C267.1,359.5,280.6,350.2,280.6,333.9 M240.7,333.9c0-5.9,4-10.8,10.9-10.8c6.9,0,10.9,5,10.9,10.8
	c0,6.1-4,10.8-10.9,10.8C244.7,344.7,240.7,340,240.7,333.9 M285.8,357.9h17v-5.3h0.2c3.1,4.8,8.9,6.9,14.5,6.9
	c14.3,0,24.2-11.8,24.2-25.6c0-13.7-9.8-25.5-24-25.5c-5.5,0-11.2,2.1-14.9,6.3v-34.3h-17V357.9z M302.2,333.9
	c0-5.9,4-10.8,10.9-10.8c6.9,0,10.9,5,10.9,10.8c0,6.1-4,10.8-10.9,10.8C306.2,344.7,302.2,340,302.2,333.9 M404.2,333.9
	c0-16.4-13.5-25.6-28.9-25.6s-28.9,9.3-28.9,25.6c0,16.4,13.6,25.5,28.9,25.5C390.8,359.5,404.2,350.2,404.2,333.9 M364.4,333.9
	c0-5.9,4-10.8,10.9-10.8c6.9,0,10.9,5,10.9,10.8c0,6.1-4,10.8-10.9,10.8C368.4,344.7,364.4,340,364.4,333.9 M430.8,323.9h11.9v-14
	h-11.9v-7.8c0-5.4,1.5-8,5.9-8c2.2,0,4,0.7,6,1.6V281c-2.3-1.2-4.7-1.7-7.3-1.7c-6.5,0-12.5,2.7-16.7,7.7
	c-4.7,5.3-4.9,10.2-4.9,16.8v6.1h-6v14h6v33.9h17V323.9z M465.8,280.3h-17v77.6h17V280.3z M529,333.9c0-16.4-13.5-25.6-28.9-25.6
	s-28.9,9.3-28.9,25.6c0,16.4,13.6,25.5,28.9,25.5C515.5,359.5,529,350.2,529,333.9 M489.1,333.9c0-5.9,4-10.8,10.9-10.8
	c6.9,0,10.9,5,10.9,10.8c0,6.1-4,10.8-10.9,10.8C493.1,344.7,489.1,340,489.1,333.9 M544.6,309.9h-18.9l25.1,48h11l11.9-26.3
	l11.9,26.3h11l25.1-48h-18.8l-12.1,26l-12.1-26h-10.1l-12.1,26L544.6,309.9z"/>
<path class="st1" d="M83.8,313.8c-9.8,7.6-22.2,15.3-23.5,27.6c-0.5,4.9,2,12.8,4.9,18c0.2,0.4,0.3,0.8,0.3,1.3
	c-0.1,1.3-1.1,2.3-2.4,2.3c-0.9,0-1.7-0.5-2.5-1c-3.6-2.2-6.9-5-9.5-8.2c-0.8-1-1.5-2-2.1-3c-0.6-1-1.1-2.1-1.6-3.2
	c-0.5-1.1-0.8-2.2-1.1-3.3c-0.3-1.1-0.5-2.2-0.7-3.4c-0.1-1.1-0.2-2.3-0.2-3.4c0-1.2,0.1-2.3,0.3-3.5c0.2-1.2,0.4-2.3,0.7-3.5
	c3.7-13.9,18.8-25.4,30.6-26.9C87.3,302.4,90,309,83.8,313.8 M133,335.2c-0.6-1.5-2.3-2.4-3.9-2.3c-1.1,0.1-2,0.7-2.8,1.5
	c-1.2,1.1-2.1,2.6-3,4c-1.1,1.6-2.2,3.1-3.4,4.6c-2.4,2.9-5.2,5.5-8.4,7.5c-5.5,3.3-10.5,4.9-16.5,1.9c-4.4-3.5-2.9-7.7,0.7-11.1
	c6.3-5.8,13.8-9.9,19.7-16.1c5.6-5.9,10.5-13.2,11.6-21.3c`}]
const links=[{name:'Project Link',url:'https://experiment.com/projects/xvgmxaolzqgrkvyotnid'}]
const urls=["https://healthjade.net/wp-content/uploads/2018/10/schistosomiasis.jpg","https://th.bing.com/th/id/R.c1098979b9162ea163348ea46c9ee622?rik=T82%2bIEd0N9dMAw&riu=http%3a%2f%2fupload.medbullets.com%2ftopic%2f121847%2fimages%2ffighaematobium.jpg&ehk=f%2b8%2bUnXyLbpIxUJzyga6lK7jDvIr907xsGtJEWqiMHw%3d&risl=&pid=ImgRaw&r=0","/images/diagnosis/2.bmp","/images/diagnosis/3.bmp","/images/diagnosis/1.png"]
    return <>
    <Page title="A low-cost, rapid diagnosis for urogenital Schistosomiasis infection"
    links={links}
    technologies={frameworks}
	projectImageUrls={urls}
    coverImage="/images/diagnosis/1.png"
    subtitle="Developed a cost effective and automated diagnostic tool for a prevalent disease in Africa"
    text="Schistosomiases is an acute disease caused by blood flukes which primarily transmits when a person comes in contact with contaminated water. It's highly prevalent in tropical and subtropical areas and especially in poor communties which lack access to safe drinking water. Almost 90% of the patients requiring treatment live in Africa.
    While the scale of the problem is massive, my team(including 3 Bioengineering PHDs from Stanford) focused on the diagnosis aspect of the issue. Since the disease largely impacts poor communities, the diagnosis should ideally be an accurate test with high cost efficiency. The problem with the already existing processes were as follows:
    1. The affordable tests(costing $1-2) had very low accuracy at around 52%
    2. The tests with high accuracy cannot be afforded(costing $70-100) by the people who are truly affected by the disease
    Thus the technology was not really accessible, getting the cheaper test done is as good as flipping a coin to guess whether one is infected or not. We tried to tackle this problem by creating an automated diagnosis tool, so that instead of having a pathologist look at the urine samples we would record a video of the sample passing through the Planktoscope and then use a machine learning model to identify whether the subject is infected or not. While I did not have expertise in biology, I created the model using my team's help. This was a truly memorable experience as my teammates who had access to the microscope would upload the videos and images on drive, after this we would collectively label them on Roboflow before I finally used the dataset to develop the model.
	We created and successfully tested the prototype which showed promising results with high precision and accuracy. The project was still not at a stage where we could deploy it because we did not have access to live samples to train the model, my team had used stored eggs and water to create the test samples. While they were excellent in helping us make the proof of concept, they were not enough to guarantee they model's accuracy.
	We then applied for a research grant to further work on the project and bring it to life. Fortunately we were awarded a $10,000 grant by The Experiment Foundation.
	Currently, we are planning on doing a field visit and implementing the project in Senegal. "/>
    </>
}

export default Diagnosis;