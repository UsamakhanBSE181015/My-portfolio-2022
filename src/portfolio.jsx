import React from 'react';
import LoaderGif from './photos/load.gif';
import b1 from './photos/b1.jpg';
import c1 from './photos/c1.png';
import insta from './photos/instagram.svg';
import behance from './photos/behance.svg';
import git from './photos/github.svg';
import tweet from './photos/twitter.svg';
import { Link } from 'react-router-dom'

export default function portfolio() {
  return (
    <div>
      <div className="loader" id="loader">
        <img src={LoaderGif} />
        <h1>LOADING...</h1>
      </div>
      <div className="logo">
        <p><img className="logo" src="/images/logo2.png" height="auto" width="120px" alt="Usama Khan | UX/UI Designer" /></p>
      </div>
      <nav className="col-3">
        <div>
          <a className="about_me" href="/about">About Me</a>
          <a className="nft" href="/NFT">Work</a>
        </div>
        <div>
          <a target="_blank" href="https://www.behance.net/SparshBajaj"><img className="icon" src={behance} height="auto" /></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a target="_blank" href="https://twitter.com/Sparsh_Nerd"><img className="icon" src={tweet} height="auto" /></a><br />
          <a target="_blank" href="https://instagram.com/sparsh_bajaj"><img className="icon" src={insta} height="auto" /></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a target="_blank" href="https://github.com/sparshbajaj"><img className="icon" src={git} height="auto" /></a><br />
        </div>
      </nav>
      {/*MAIN*/}
      {/*SCROLL-CTN*/}
      <div id="luxy">
        {/*BANNER*/}
        <div className="bnr col-12">
          <div className="bnr_c">
            <img id="scroll" src="/images/scroll.png" />
            <div className="intro">
              <p className="delay">
                <span className="row">
                  <span data-emergence="hidden">Hi! I'm Usama Khan</span>
                </span>
                <span className="row">
                  <span data-emergence="hidden">UX/UI & Product Designer </span>
                </span>
                <span className="row">
                  <span data-emergence="hidden">I’m a driven and flexible designer with an ability of developing projects from inception through production to the final delivery.</span>
                </span>
                <span className="row">
                  <span data-emergence="hidden">I love to take design challenges to do something new and learn in the process.</span>
                </span>
              </p>
            </div>
          </div><br />
          <div className="bnr_t">
            <div className="no-out" style={{ zIndex: 1 }}>
              <h1 className="luxy-el" data-horizontal={1} data-speed-x={-35}>
                <span className="row">
                  <span data-emergence="hidden">Master of Figma</span>
                </span>
              </h1>
              <h1 className="le luxy-el" data-horizontal={1} data-speed-x={35}>
                <span className="row">
                  <span data-emergence="hidden">Design &amp; UI/UX &amp; Design</span>
                </span>
              </h1>
            </div>
            <div style={{ zIndex: 2, marginLeft: '30.3%'}} className="bnr_img imgrev luxy-el" data-speed-y={-19} data-offset={-50} data-emergence="hidden">
              <img id="imgb" src={b1} />
              <div>
                <img id="imgc" src={c1} className="luxy-el" data-speed-y={15} />
              </div>
            </div>
            <div style={{ zIndex: 3 }}>
              <h1 className="luxy-el outline" data-horizontal={1} data-speed-x={-35}>
                <span className="row">
                  <span data-emergence="hidden">Master of Figma</span>
                </span>
              </h1>
              <h1 className="le luxy-el outline" data-horizontal={1} data-speed-x={35}>
                <span className="row">
                  <span data-emergence="hidden">Design &amp; UI/UX &amp; Design</span>
                </span>
              </h1>
            </div>
          </div>
        </div><br /><br />
        {/*WORK*/}
        <div className="wrk">
          <div className="wrk_t">
            <h1 className="row" style={{ marginTop: '12px' }}>
              
            </h1>
            <h1 class="wrk_work">
              <span className="row">
                <span className="outline -o" data-emergence="hidden">work</span>
              </span>
              <span className="row">
                <span data-emergence="hidden">work</span>
              </span>
              <span className="row">
                <span className="outline -o" data-emergence="hidden">work</span>
              </span>
            </h1>
          </div>
          <div className="wrk_s">
            <div className="wrk_e">
              <a target="_blank" href="https://www.instagram.com/schindlerelevators_india/">
                <div className="w-img imgrev" data-emergence="hidden" onmousemove="vis();" onmouseout="hid();">
                  <img className="bg" src="images/behance/proj1.png" />
                </div>
              </a>
              <div className="w-txt">
                <p>01.</p>
                <div>
                  <p>Fossil Smart Watch Website</p>
                  <span>Fossil Website <br></br>To overcome challenge faced by Schindler in India and/or also faced by many other brands make people familiar with correct pronunciation of the brand name.</span>
                </div>
              </div>
            </div>
          </div>
          <div className="wrk_s flex jus" id="wrk_arrow" style={{ padding: '12.5% 0 15% 0', alignItems: 'flex-end' }}>
            <a target="_blank" href="https://www.behance.net/SparshBajaj" className="prj_btn btn">
              <p>
                <span className="row">
                  <span data-emergence="hidden">See All Projects</span>
                </span>
              </p>
              <span className="row">
                <span data-emergence="hidden"><img src="/images/larro.svg" /></span>
              </span>
            </a>
            <div className="wrk_e">
              <a target="_blank" href="https://www.behance.net/gallery/92518137/Ebook-Reader-App-Concept">
                <div className="w-img imgrev" data-emergence="hidden" onmousemove="vis();" onmouseout="hid();">
                  <img className="bg" src="images/behance/proj2.png" />
                  
                </div>
              </a>
              <div className="w-txt">
                <p>02.</p>
                <div>
                  <p>Ride Booking App Concept</p>
                  <span>UI/UX Concept</span>
                </div>
              </div>
            </div>
          </div>
          <div className="wrk_s">
            <div className="wrk_e">
              <a target="_blank" href="https://www.behance.net/gallery/92515861/Rage-Coffee-Branding-%28concept%29">
                <div className="w-img imgrev" data-emergence="hidden" onmousemove="vis();" onmouseout="hid();">
                  <img className="bg" src="images/behance/proj3.png" />
                 
                </div>
              </a>
              <div className="w-txt">
                <p>03.</p>
                <div>
                  <p>Rage Coffee</p>
                  <span>Brand Identity Concept</span>
                </div>
              </div>
            </div>
          </div>
          <div className="wrk_s flex jus jus_wrk" style={{ padding: '12.5% 0 15% 0', alignItems: 'flex-end' }}>
            <a target="_blank">
            </a>
            <div className="wrk_e">
              <a target="_blank" href="https://www.behance.net/gallery/84439363/Monochrome-Portfolio-2019">
                <div className="w-img imgrev" data-emergence="hidden" onmousemove="vis();" onmouseout="hid();">
                  <img className="bg" src="images/behance/proj4.png" />
                  
                </div>
              </a>
              <div className="w-txt">
                <p>04.</p>
                <div>
                  <p>Portfolio Monochrome</p>
                  <span>2019 Portfolio</span>
                </div>
              </div>
            </div>
          </div>

          <div className="wrk_s">
            <div className="wrk_e">
              <a target="_blank" href="https://www.behance.net/gallery/92515861/Rage-Coffee-Branding-%28concept%29">
                <div className="w-img imgrev" data-emergence="hidden" onmousemove="vis();" onmouseout="hid();">
                  <img className="bg" src="images/behance/proj5.png" />
                 
                </div>
              </a>
              <div className="w-txt">
                <p>03.</p>
                <div>
                  <p>Rage Coffee</p>
                  <span>Brand Identity Concept</span>
                </div>
              </div>
            </div>
          </div>
          {/*CONTACT*/}
          <div className="cont-area con flex">
            <div className="con_t">
              <h1 style={{ position: 'relative', zIndex: 4 }}>
                <span className="row">
                  <span className="outline -o" data-emergence="hidden">CONTACT</span>
                </span>
                <span className="row">
                  <span data-emergence="hidden">CONTACT</span>
                </span>
              </h1>
              <h1>
                <span className="row">
                  <span className="outline -o" style={{ transitionDelay: '.5s' }} data-emergence="hidden">CONTACT</span>
                </span>
              </h1>
              <div className="imgrev luxy-el" data-speed-y="-4.5" data-offset={160} data-emergence="hidden">
                <img src="/images/cont2.gif" />
              </div>
            </div>
            <div className="con_p">
              <p className="delay">
                <span className="row">
                  <span data-emergence="hidden">Have a project in mind? Would you like</span>
                </span>
                <span className="row">
                  <span data-emergence="hidden">to share it? Feel free to reach out</span>
                </span>
                <span className="row">
                  <span data-emergence="hidden">by writing an e-mail.</span>
                </span>
              </p><br />
              <a href="mailto:uk25601@gmail.com?subject=Lets%20Work%20Together" className="btn " title="I usually respond in a day.">
                <p>
                  <span className="row">
                    <span data-emergence="hidden">Get in touch</span>
                  </span>
                </p>
                <span className="row">
                  <span data-emergence="hidden"><img src="/images/larro.svg" /></span>
                </span>
              </a>
              <p className="delay copy">
                <span className="row">
                  <span data-emergence="hidden">Developed with 💖 by Usama Khans.</span>
                </span>
                <span className="row">
                  <span data-emergence="hidden">© <span style={{ display: 'inline' }} id="year" /> All rights reserved.</span>
                </span>
              </p>
            </div>
          </div>
        </div>
        {/*SCROLL-END*/}
      </div>
      <span id="float" className="float beh"><img src="/images/beh.png" /></span>
    </div>
  );
}
