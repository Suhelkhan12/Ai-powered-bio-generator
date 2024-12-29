import Output from "./output/Output";
import UserInput from "./user-input/user-input";

const SecondSection = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-16">
      <UserInput />
      <Output />
    </div>
  );
};

export default SecondSection;
