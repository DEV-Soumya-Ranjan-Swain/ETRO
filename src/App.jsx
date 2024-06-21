import { useEffect, useRef } from 'react';
import './App.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AOS from 'aos';
import "aos/dist/aos.css";


gsap.registerPlugin(ScrollTrigger);

function App() {
  const images = useRef([]);

  useEffect(() => {
    AOS.init();
    AOS.refresh();

    gsap.to(images.current[0], {
      x: 300,
      delay: 0.4,
      duration: 2,
      rotate: -12,
      scrollTrigger: {
        trigger: images.current[0],
        scroller: "body",
      }
    });

    gsap.to(images.current[1], {
      x: -300,
      delay: 0.4,
      duration: 2,
      rotate: 12,
      scrollTrigger: {
        trigger: images.current[1],
        scroller: "body",
      }
    });

    gsap.to(images.current[2], {
      x: 300,
      delay: 0.4,
      duration: 2,
      rotate: -12,
      scrollTrigger: {
        trigger: images.current[2],
        scroller: "body",
        start: "top 60%",
        end: "top 10%",
        scrub: 3
      }
    });

    gsap.to(images.current[3], {
      x: -300,
      delay: 0.4,
      duration: 2,
      rotate: 12,
      scrollTrigger: {
        trigger: images.current[3],
        scroller: "body",
        start: "top 60%",
        end: "top 10%",
        scrub: 3
      }
    });

    gsap.to(images.current[4], {
      x: 300,
      delay: 0.4,
      duration: 2,
      rotate: -12,
      scrollTrigger: {
        trigger: images.current[4],
        scroller: "body",
        start: "top 60%",
        end: "top 10%",
        scrub: 3
      }
    });

    gsap.to(images.current[5], {
      x: -300,
      delay: 0.4,
      duration: 2,
      rotate: 12,
      scrollTrigger: {
        trigger: images.current[5],
        scroller: "body",
        start: "top 60%",
        end: "top 10%",
        scrub: 3
      }
    });

    // gsap.from("#mid1 h3, #mid2 h3, #mid3 h3", {
    //   y: 50,
    //   duration: 1,
    //   delay: 0.4,
    //   opacity: 0
    // });

    // gsap.from("#mid1 h1, #mid2 h1, #mid3 h1", {
    //   y: 50,
    //   opacity: 0,
    //   duration: 1.5,
    //   delay: 0.4
    // });
  }, []);

  return (
    <div>
      <div id="navbar" style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div id="item1" style={{ display: 'flex', alignItems: 'center' }}>
          <svg height="20" width="52" viewBox="0 0 52 8" fill="none">
            <line x1="0" x2="52" strokeWidth="1.75" stroke="rgba(244, 242, 239, 1)" y1="1" y2="1"></line>
            <line x1="0" x2="52" strokeWidth="1.75" stroke="rgba(244, 242, 239, 1)" y1="8" y2="8"></line>
          </svg>
          <h4 style={{ fontSize: '16px', paddingLeft: '10px' }}>Menu</h4>
        </div>

        <div>
          <img src="./images/logo.svg" alt="logo" style={{ marginLeft: '110px' }} />
        </div>

        <div id="navbar2" style={{ display: 'flex', alignItems: 'center', gap: '10px', paddingRight: '35px' }}>
          <h3 style={{ fontSize: '15.57px' }}>Search</h3>
          <h3 style={{ fontSize: '15.57px' }}>Distributors</h3>
          <h3 style={{ fontSize: '15.57px' }}>Wishlist</h3>
        </div>
      </div>

      <div style={{ marginTop: '200px' }}>
        <div style={{ marginTop: '50px', height: '700px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <img
              ref={(el) => images.current[0] = el}
              className="rotate-image1"
              src="./images/1_Blooming_Flowers-Ebano_picture_2.jpg"
              alt="image1"
              style={{ height: '538px', width: '538px', borderRadius: '40px', marginLeft: '-500px' }}
            />
            <div id="mid1" className="mid1" style={{ alignItems: 'center', display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ fontSize: '17.4px' }} data-aos="fade-up" data-aos-duration="2000">THIS IS A PRINT COLLECTION</h3>
              <h1 style={{ fontSize: '130px', fontWeight: 300 }} data-aos="fade-up" data-aos-duration="2000">PRINT</h1>
              <h4
                style={{ border: '1px solid', borderRadius: '20px', padding: '10px 40px', marginTop: '30px' }}
                data-aos="fade-up"
                data-aos-duration="2000"
                className="fill"
              >
                EXPLORE COLLECTION
              </h4>
            </div>
            <img
              ref={(el) => images.current[1] = el}
              className="rotate-image2"
              src="./images/2_Chinese_Garden-Peonia_picture_2.jpg"
              alt="image2"
              style={{ height: '538px', width: '538px', borderRadius: '40px', marginRight: '-500px' }}
            />
          </div>
        </div>

        <div style={{ marginTop: '50px', height: '700px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <img
              ref={(el) => images.current[2] = el}
              className="rotate-image1"
              src="./images/3_Calliope-Vinaccia_picture_1.jpg"
              alt="image3"
              style={{ height: '538px', width: '538px', borderRadius: '40px', marginLeft: '-500px' }}
            />
            <div id="mid2" style={{ alignItems: 'center', display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ fontSize: '17.4px' }} data-aos="fade-up" data-aos-duration="2000">STRIKING, SLEEK AND STYLISH</h3>
              <h1 style={{ fontSize: '130px', fontWeight: 300 }} data-aos="fade-up" data-aos-duration="2000">VELVET</h1>
              <h1 style={{ fontSize: '130px', fontWeight: 300 }} data-aos="fade-up" data-aos-duration="2000">PRINT</h1>
              <h4
                style={{ border: '1px solid', borderRadius: '20px', padding: '10px 40px', marginTop: '30px' }}
                data-aos="fade-up"
                data-aos-duration="2000"
                className="fill"
              >
                EXPLORE COLLECTION
              </h4>
            </div>
            <img
              ref={(el) => images.current[3] = el}
              className="rotate-image2"
              src="./images/4_Malia-Lontra_picture_1.jpg"
              alt="image4"
              style={{ height: '538px', width: '538px', borderRadius: '40px', marginRight: '-500px' }}
            />
          </div>
        </div>

        <div style={{ marginTop: '50px', height: '500px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <img
              ref={(el) => images.current[4] = el}
              className="rotate-image1"
              src="./images/5_Acropoli-Rosso_picture_1.jpg"
              alt="image5"
              style={{ height: '538px', width: '538px', borderRadius: '40px', marginLeft: '-500px' }}
            />
            <div id="mid3" style={{ alignItems: 'center', display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ fontSize: '17.4px' }} data-aos="fade-up" data-aos-duration="2000">COLOURFUL, GEOMETRICAL AND SOPHISTICATED</h3>
              <h1 style={{ fontSize: '130px', fontWeight: 300 }} data-aos="fade-up" data-aos-duration="2000">ETHNIC</h1>
              <h1 style={{ fontSize: '130px', fontWeight: 300 }} data-aos="fade-up" data-aos-duration="2000">TEXTURES</h1>
              <h4
                style={{ border: '1px solid', borderRadius: '20px', padding: '10px 40px', marginTop: '30px' }}
                data-aos="fade-up"
                data-aos-duration="2000"
                className="fill"
              >
                EXPLORE COLLECTION
              </h4>
            </div>
            <img
              ref={(el) => images.current[5] = el}
              className="rotate-image2"
              src="./images/6_Color_Picture_Dragon_Empress-Grigio_Nero_1.jpg"
              alt="image6"
              style={{ height: '538px', width: '538px', borderRadius: '40px', marginRight: '-500px' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
