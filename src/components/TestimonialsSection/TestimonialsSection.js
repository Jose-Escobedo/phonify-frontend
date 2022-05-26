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
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample40.jpg"
            alt="profile-sample2"
          />
          <TestimonialsSectionCaption>
            <TestimonialsSectionBlockQuote>
              <TestimonialsSectionP>
                Which is worse, that everyone has his price, or that the price
                is always so low.
              </TestimonialsSectionP>
            </TestimonialsSectionBlockQuote>
            <TestimonialsSectionH3>Sue Shei</TestimonialsSectionH3>
            <TestimonialsSectionH5>Founder</TestimonialsSectionH5>
          </TestimonialsSectionCaption>
        </TestimonialsSectionCard>
        <TestimonialsSectionCard>
          <TestimonialsSectionIcon
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample40.jpg"
            alt="profile-sample2"
          />
          <TestimonialsSectionCaption>
            <TestimonialsSectionBlockQuote>
              <TestimonialsSectionP>
                The only skills I have the patience to learn are those that have
                no real application in life.
              </TestimonialsSectionP>
            </TestimonialsSectionBlockQuote>
            <TestimonialsSectionH3>Indigo Violet</TestimonialsSectionH3>
            <TestimonialsSectionH5>Public Relations</TestimonialsSectionH5>
          </TestimonialsSectionCaption>
        </TestimonialsSectionCard>
        <TestimonialsSectionCard>
          <TestimonialsSectionIcon
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample40.jpg"
            alt="profile-sample2"
          />
          <TestimonialsSectionCaption>
            <TestimonialsSectionBlockQuote>
              <TestimonialsSectionP>
                I'm killing time while I wait for life to shower me with meaning
                and happiness.
              </TestimonialsSectionP>
            </TestimonialsSectionBlockQuote>
            <TestimonialsSectionH3>Will Barrow</TestimonialsSectionH3>
            <TestimonialsSectionH5>Web Designer</TestimonialsSectionH5>
          </TestimonialsSectionCaption>
        </TestimonialsSectionCard>
      </TestimonialsSectionWrapper>
    </TestimonialsSectionContainer>
  );
};

export default TestimonialsSection;

{
  /* <div id="testimonials" className="testimonialscontainer">
<Caption>Our Testimonials</h2>
<div className="figurecontainer">
  <figure className="figure">
    <img
      src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample40.jpg"
      alt="profile-sample2"
    />
    <figcaption>
      <blockquote>
        <p>
          Which is worse, that everyone has his price, or that the price
          is always so low.
        </p>
      </blockquote>
      <h3>Sue Shei</h3>
      <h5>Founder</h5>
    </figcaption>
  </figure>
  <figure className="figure">
    <img
      src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample37.jpg"
      alt="profile-sample7"
    />
    <figcaption>
      <blockquote>
        <p>
          I'm killing time while I wait for life to shower me with meaning
          and happiness.
        </p>
      </blockquote>
      <h3>Will Barrow</h3>
      <h5>Web Designer</h5>
    </figcaption>
  </figure>
  <figure className="figure">
    <img
      src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample35.jpg"
      alt="profile-sample6"
    />
    <figcaption>
      <blockquote>
        <p>
          The only skills I have the patience to learn are those that have
          no real application in life.{" "}
        </p>
      </blockquote>
      <h3>Indigo Violet</h3>
      <h5>Public Relations</h5>
    </figcaption>
  </figure>
</div>
</div> */
}
