import React from "react";
import styles from "./Home.module.css";
import {
  Rectangle,
  arrow,
  circleBig,
  circleSmall,
  circleBigDesktop,
  circleSmallDesktop,
  comImg2,
  roundImg,
  Quote,
  quote3,
  quote2,
  google,
  mac,
  ComImg3,
  comImg,
} from "../assests";
import Button from "../Components/Button";
import { SectionComponent } from "../Components";

const Home = () => {
  return (
    <>
      <section className={`${styles.homeSection}`}>
        <div className={styles.circleBigMobile}>
          <img src={circleBig} />
        </div>

        <div className={styles.circleSmallMobile}>
          <img src={circleSmall} />
        </div>
        <div className={styles.circleBigDesktop}>
          <img src={circleBigDesktop} />
        </div>

        <div className={styles.circleSmallDesktop}>
          <img src={circleSmallDesktop} />
        </div>

        <div className={styles.patnerContainer}>
          <div>
            <h3>Our Patners</h3>

            <div></div>
          </div>
        </div>
        <div className={`${styles.homeContainer}`}>
          <article className={`${styles.articleOne}`}>
            <p className={styles.text1}>Welcome to </p>

            <h1 className={`${styles.heading}`}>INTERLEDGERSWAP</h1>

            <p className={`${styles.text3}`}>
              Trade crypto with fastest crypto exchange. Over 700 tradable coins
              / tokens and over 3000 active pairs.
            </p>

            <button className={styles.btn}>
              <img src={arrow} />
              START NOW
            </button>
          </article>

          <div className={styles.homeImage}>
            <img src={Rectangle} />
          </div>
        </div>
      </section>

      <section className={styles.formSection}>
        <div className={styles.formContainer}>
          <div className={styles.formContent}>
            <div>
              <h1 className={styles.formHeading}>How to make a trade?</h1>
              <h4 className={styles.formHeading2}>Get a recommended!</h4>
            </div>

            <div className="flex justify-center">
              <Button>
                {" "}
                <img src={arrow} />
                Click Here
              </Button>
            </div>
          </div>

          <p className={styles.formText}>
            Discover the power of decentralized exchanges with GuardianSwap.
            Easily exchange your crypto assets securely by choosing your tokens,
            specifying the amount, and initiating the swap. Trade with the
            protection of decentralized technology!
          </p>

          <div>FORM</div>
        </div>
      </section>

      <section className={styles.aboutSection}>
        <div className={styles.aboutContainer}>
          <h1 className={`${styles.aboutHeading}`}>ABOUT INTERLEDGERSWAP</h1>

          <p className={styles.aboutText}>
            Easily exchange one cryptocurrency for another with our swap system.
            Seamlessly trade your digital assets without the need for complex
            platforms. Select your currencies, enter the amount, and initiate
            the swap – it’s that straightforward. Start trading today!
          </p>

          <div className="flex center">
            <Button>
              <img src={arrow} />
              Click Here
            </Button>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <SectionComponent
            heading1={`LIGHTENING FAST`}
            text1={`The average time per exchange is about 5 minutes.`}
            heading2={`LIMITLESS EXCHANGE`}
            text2={`There is no upper limit for cryptocurrency exchanges. However, there are lower limits: they are different for each coin and`}
            heading3={`DEFI BASED`}
            text3={`Gain access to the decentralized liquidity of Uniswap and Pancakeswap through Interledgerswap.com:`}
            image={comImg2}
            center={true}
            imageSide={true}
          />
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <SectionComponent
            heading1={`HANDY MOBILE EXCHANGE`}
            text1={`Interledgerswap is accessible on the go with our easy swap engine.`}
            heading2={`GET BEST RATE`}
            text2={`Our engine is integrated into multiple cryptocurrency trading platforms, including Binance, Bitfinex, Huobi, OKEx, and Kucoin. At the moment of the trade the engine chooses the best exchange rate on the market.`}
            heading3={`BUY CRYPTO WITH FIAT`}
            text3={`We create buy/sell platform to provide our customers with a wider range of the coins that you can buy with a bank card. Read more here.`}
            image={comImg}
          />
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <SectionComponent
            heading1={`TRADE WITH CONFIDENCE`}
            text1={`Experience the fastest way to exchange crypto! Choose the crypto you want to Swap and your order will be routed to the sources offering the best market prices! Exchange XLS, BTC, ETH, XRP & others without login or registration!`}
            image={ComImg3}
            center={true}
            imageSide={true}
          />
        </div>
      </section>

      <section className={styles.tesSection}>
        <div className="flex flex-col items-center mb-[2rem] ">
          <h1 className={styles.reviews}>REVIEWS</h1>
          <img src={google} c />
        </div>
        <div className={styles.testimonialContainer}>
          <div className={styles.card1}>
            <img src={Quote} />
            <p>
              The exceptional quality of Notta, which I value highly, is its
              capacity to lessen the strain of taking notes during sales
              meetings. It really does change the game. Highly suggested.
            </p>

            <div className={styles.roundImg}>
              <img src={roundImg} />
              <div>
                <h2>Miss Naomi</h2>
                <p>Product Designer</p>
              </div>
            </div>
          </div>

          <div className={styles.card2}>
            <img src={quote2} />
            <p>
              The exceptional quality of Notta, which I value highly, is its
              capacity to lessen the strain of taking notes during sales
              meetings. It really does change the game. Highly suggested.
            </p>

            <div className={styles.roundImg}>
              <img src={roundImg} />
              <div>
                <h2>Miss Naomi</h2>
                <p>Product Designer</p>
              </div>
            </div>
          </div>

          <div className={styles.card3}>
            <img src={quote3} />
            <p>
              The exceptional quality of Notta, which I value highly, is its
              capacity to lessen the strain of taking notes during sales
              meetings. It really does change the game. Highly suggested.
            </p>

            <div className={styles.roundImg}>
              <img src={roundImg} />
              <div>
                <h2>Miss Naomi</h2>
                <p>Product Designer</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={styles.ctaContainer}>
          <div className={styles.imageSide}>
            <img src={mac} />
          </div>

          <div className={styles.titleContainer}>
            <h1 className={styles.ctaTitle}>Trade Fast, Limitless Exchange</h1>

            <button className={styles.ctaBtn}>Start Now</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
