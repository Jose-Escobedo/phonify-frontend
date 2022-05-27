import React from "react";
import Icon1 from "../../images/svg-1.svg";
import Icon2 from "../../images/svg-2.svg";
import Icon3 from "../../images/svg-3.svg";
import {
  TestimonialsSectionContainer,
  TestimonialsSectionH1,
  TestimonialsSectionH3,
  TestimonialsSectionH5,
  TestimonialsSectionCaption,
  TestimonialsSectionBlockQuote,
  TestimonialsSectionWrapper,
  TestimonialsSectionCard,
  TestimonialsSectionIcon,
  TestimonialsSectionP,
  TestimonialsSectionSpan,
} from "./TestimonialsSectionElements";

const TestimonialsSection = () => {
  return (
    <TestimonialsSectionContainer id="TestimonialsSection">
      <TestimonialsSectionH1>Our Testimonials</TestimonialsSectionH1>
      <TestimonialsSectionWrapper>
        <TestimonialsSectionCard>
          <TestimonialsSectionIcon
            src="https://i.ibb.co/K7LKtHG/founder.jpg"
            alt="Business-Owner"
          />
          <TestimonialsSectionCaption>
            <TestimonialsSectionBlockQuote>
              <TestimonialsSectionP>
                "I could not believe the deals, they are legit!"
              </TestimonialsSectionP>
            </TestimonialsSectionBlockQuote>
            <TestimonialsSectionH3>Sara Garcia</TestimonialsSectionH3>
            <TestimonialsSectionH5>eCommerce Manager</TestimonialsSectionH5>
          </TestimonialsSectionCaption>
        </TestimonialsSectionCard>
        <TestimonialsSectionCard>
          <TestimonialsSectionIcon
            src="https://i.ibb.co/t87c04h/chef.jpg"
            alt="Chef"
          />
          <TestimonialsSectionCaption>
            <TestimonialsSectionBlockQuote>
              <TestimonialsSectionP>
                "Phonify is a reliable website with reviews to back it up."
              </TestimonialsSectionP>
            </TestimonialsSectionBlockQuote>
            <TestimonialsSectionH3>Mario Garcia</TestimonialsSectionH3>
            <TestimonialsSectionH5>Professional Chef</TestimonialsSectionH5>
          </TestimonialsSectionCaption>
        </TestimonialsSectionCard>
        <TestimonialsSectionCard>
          <TestimonialsSectionIcon
            src="https://i.ibb.co/gtr3Sjg/student.jpg"
            alt="Student"
          />
          <TestimonialsSectionCaption>
            <TestimonialsSectionBlockQuote>
              <TestimonialsSectionP>
                "Who doesn't like great deals and quality products?"
              </TestimonialsSectionP>
            </TestimonialsSectionBlockQuote>
            <TestimonialsSectionH3>Will Barrow</TestimonialsSectionH3>
            <TestimonialsSectionH5>Entrepreneur</TestimonialsSectionH5>
          </TestimonialsSectionCaption>
        </TestimonialsSectionCard>
      </TestimonialsSectionWrapper>
    </TestimonialsSectionContainer>
  );
};

export default TestimonialsSection;
