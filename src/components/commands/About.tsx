import {
  AboutWrapper,
  HighlightAlt,
  HighlightSpan,
} from "../styles/About.styled";

const About: React.FC = () => {
  return (
    <AboutWrapper data-testid="about">
      <p>
        You can call me <HighlightSpan>Oğuz</HighlightSpan>.
      </p>
    </AboutWrapper>
  );
};

export default About;
