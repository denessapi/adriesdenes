// Twin macro.
import tw from "twin.macro";

const TopRow = tw.div`
  pl-2
  w-full
  top-0 left-0
  bg-transparent
  z-30
`;

const NameRow = tw.div`
  pt-2
  w-full
  text-center
  lg:text-4xl
  md:text-3xl
  text-2xl
  font-marckscript
`;

const Top = () => {
  return (
    <TopRow>
      <NameRow>Adri & Dénes</NameRow>
    </TopRow>
  );
};

export default Top;
