import Footer from "../components/Footer";
import Header from "../components/Header";
import HistoryCompany from "../components/HistoryCompany";
import MisionVision from "../components/MisionVision";
import SectionEco from "../components/SectionEco";
import '../StyleSheets/AboutUs.css'

const AboutUs = () => {
  return (
    <>
      <Header />
      <section className="furniture-company-section">
        <div className="overlay"></div>
        <div className="content">
          <h2>LUBAN</h2>
          <p>Calidad Confort Elegancia</p>
        </div>
      </section>
      <HistoryCompany />
      <MisionVision />
      <SectionEco />
      <Footer />
    </>
  );
};

export default AboutUs;
