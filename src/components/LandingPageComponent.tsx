import ContactSections from "./ContactSections";
import Footer from "./Footer";
import LandingPageComp from "./LandingPage";
import NewsletterSections from "./NewsletterSections";
import StatsSections from "./StatsSection";
import TeamSections from "./TeamSections";
import Testimonials from "./Testimonials";

const LandingPage = () => {
  return (
    <>
      <LandingPageComp></LandingPageComp>
      <TeamSections></TeamSections>
      <StatsSections></StatsSections>
      <Testimonials></Testimonials>
      <ContactSections></ContactSections>
      <NewsletterSections></NewsletterSections>
      <Footer></Footer>
    </>
  );
};

export default LandingPage;
