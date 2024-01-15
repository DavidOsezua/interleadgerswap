import React, { useState, useEffect } from "react";
import styles from "./Resources.module.css";
import { Resource } from "../Components";
import { faqData, buyCryptoData, cepData } from "../data/data";
import Skeleton from "react-loading-skeleton";

function Loading() {
  return <div className={styles.loading}></div>;
}

const Resources = () => {
  const [heading, setHeading] = useState("");
  const [loading, setLoading] = useState();

  useEffect(function () {
    async function fetch() {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setHeading("FAQS (Frequently Asked Question)");
      setLoading(false);
    }

    fetch();
  }, []);
  return (
    <section className={styles.resourceSection}>
      <div className={styles.resourceContainer}>
        <div>
          <h2 className={`font-bold text-[#5847C4] ${styles.heading}`}>
            {loading ? <Loading /> : heading}
          </h2>

          <div>
            {loading ? (
              <ul className={styles.skeletonContainer}>
                {faqData.map((_, i) => (
                  <Loading />
                ))}
              </ul>
            ) : (
              <Resource Sectiondata={faqData} />
            )}
          </div>
        </div>

        <div>
          <h2 className="font-bold text-[#5847C4]">Buy Crypto With Fiat</h2>
          <div>
            <Resource Sectiondata={buyCryptoData} />
          </div>
        </div>

        <div>
          <h2 className="font-bold text-[#5847C4]">
            Cryptocurrency Exchange Process
          </h2>
          <div>
            <Resource Sectiondata={cepData} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resources;
