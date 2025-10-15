import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useGSAP } from "@gsap/react";

const About = () => {
  useGSAP(() => {
    const titleSplit = SplitText.create("#about h2", { type: "words" });

    const scrollTimeLine = gsap.timeline({
      scrollTrigger: {
        trigger: "#about",
        start: "top center",
        // end: "bottom center",
        // scrub: true,
      },
    });

    scrollTimeLine
      .from(titleSplit.words, {
        opacity: 0,
        duration: 1,
        yPercent: 100,
        stagger: 0.02,
        ease: "expo.out",
      })

      .from(
        ".top-grid div, .bottom-grid div",
        {
          opacity: 0,
          duration: 1,
          ease: "power1.inOut",
          stagger: 0.04,
        },
        "-=0.5"
      );
  });
  return (
    <>
      <div id="about" className="">
        <div className="mb-16 md:px-0 px-5">
          <div className="content">
            <div className="md:col-span-8">
              <p className="badge">Best Cocktails</p>
              <h2 className="">
                Where every details matters{" "}
                <span className="text-white">-</span>
                from muddle to garnish
              </h2>
            </div>

            <div className="sub-content">
              <p>
                Every cocktail we serve is a reflection of our passion for
                mixology and dedication to quality. We believe that the art of
                crafting a perfect cocktail lies in the details - from the
                selection of premium ingredients to the precision of our
                techniques. Our bartenders are not just skilled professionals;
                they are artists who take pride in creating drinks that are as
                visually stunning as they are delicious.
              </p>

              <div>
                <p className="md:text-3xl text-xl font-bold">
                  <span>4.5</span>/5
                </p>
                <p className="text-sm text-white-100">
                  More than +1200 customers
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="top-grid">
          <div className="md:col-span-3">
            <div className="noisy" />
            <img src="/images/abt1.png" alt="grid-img-1" />
          </div>
          <div className="md:col-span-6">
            <div className="noisy" />
            <img src="/images/abt2.png" alt="grid-img-2" />
          </div>
          <div className="md:col-span-3">
            <div className="noisy" />
            <img src="/images/abt5.png" alt="grid-img" />
          </div>
        </div>

        <div className="bottom-grid">
          <div className="md:col-span-8">
            <div className="noisy" />
            <img src="/images/abt3.png" alt="grid-img" />
          </div>
          <div className="md:col-span-4">
            <div className="noisy" />
            <img src="/images/abt4.png" alt="grid-img" />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
