import Question from "./Question";

const Hero = () => {
  return (
    <div className="mt- mx-auto  w-[1100px] pt-16">
      <Question data="Do you accept all Credit Cards here ?" />
      <Question data="Do you Support your local farm in India ?" />
      <Question data="What is the political condition in India ?" />
      <Question data="What is your views on current government ?" />
    </div>
  );
};

export default Hero;
