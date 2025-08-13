import { Footer, Navbar, Request, RequestForm, Response } from "../components";

const Home = () => {
  return (
    <>
    <Navbar />
    <main className="w-[95%] flex flex-col gap-3 mx-auto py-4">
      <RequestForm />
      <Request />
      <Response />
    </main>
      <Footer />
    </>
  );
};

export default Home;
