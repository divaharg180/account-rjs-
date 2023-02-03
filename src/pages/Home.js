import React from "react";
import ImageSlider, { Slide } from "react-auto-image-slider";

function Home() {
  return (<React.Fragment >
  <div id="homeimage">
    <ImageSlider effectDelay={500} autoPlayDelay={2000} >
      <Slide>
        <img alt="img2" src="https://static.wixstatic.com/media/3d6982_a027edc3122c44b4bf10f2fefd59957c~mv2.jpg/v1/fill/w_1000,h_510,al_c,q_85,enc_auto/3d6982_a027edc3122c44b4bf10f2fefd59957c~mv2.jpg" />
      </Slide>
      <Slide>
        <img alt="img2" src="https://static.wixstatic.com/media/3d6982_f76f62f8341d400ca598e6202497cb09~mv2.jpg/v1/fill/w_1899,h_969,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/3d6982_f76f62f8341d400ca598e6202497cb09~mv2.jpg" />
      </Slide>
      <Slide>
        <img alt="img1" src="https://static.wixstatic.com/media/3d6982_30438436316a4eca8686f02725734d2d~mv2.jpg/v1/fill/w_1899,h_969,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/3d6982_30438436316a4eca8686f02725734d2d~mv2.jpg" />
      </Slide>
    </ImageSlider>
    </div>
    <nav id="content">
    <div id="left">
       <h1 id="grid">Quality Teachers</h1>
       <p>Despite writing in black and white, we are here to add color to the life of every student</p>
    </div>
    <div id="center">
       <h1 id="grid">Best Curriculum</h1>
       <p>Working collaboratively to ensure every student achieves academically, socially, emotionally, spiritually and naturally.</p>
    </div>
    <div id="right">
       <h1 id="grid">Eco-Friendly Campus</h1>
       <p>A space to get purified. come here. Grow green with us.</p>
    </div>
    </nav>
    </React.Fragment>
  );
}

export default Home;