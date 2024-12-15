import Layout from "./Layout";
export default function Auth() {
  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center ">
      <div className="h-[80vh] w-[80vw] border-2 border-white  bg-white text-opacity-90 shadow-2xl md:w-[98vw] lg:w-[70vw] xl:w-[60vw] rounded-3xl flex flex-col justify-center items-center gap-6 lg:grid  lg:grid-cols-2">
        <div className="flex flex-col justify-center items-center w-full">
          <div className="flex justify-center items-center">
            <img src="" alt="" />
            <h1 className="text-5xl font-bold md:text-6xl"></h1>
          </div>
          <div className="font-medium text-center ">
            A casual chatting application for friends...
          </div>
        </div>
        <div className="flex  items-center justify-center w-full  xl:items-start ">
          <Layout />
        </div>
      </div>
    </div>
  );
}
