// Twin macro.
import tw from "twin.macro";
import Header from "../components/Header";

const StatusImg = tw.div`
  mx-auto
  lg:w-1/2
  md:w-2/3
  w-full
  p-4
`;

function CustomError() {
  return (
    <>
      <Header />
      <StatusImg>
        <img
          alt="Not found dog"
          width="100%"
          src={`https://httpstatusdogs.com/img/404.jpg`}
        />
      </StatusImg>
    </>
  );
}

export default CustomError;
