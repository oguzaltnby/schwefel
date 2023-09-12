import {
  AboutWrapper,
  HighlightAlt,
  HighlightSpan,
} from "../styles/About.styled";

const About: React.FC = () => {
  return (
    <AboutWrapper data-testid="about">
      <p>
      <HighlightSpan>Web & Mobile Developer</HighlightSpan> | <HighlightSpan>Software Developer</HighlightSpan> at Kumport Port Services Inc.
      </p>
    </AboutWrapper>
  );
};

export default About;
