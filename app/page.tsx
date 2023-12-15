import ScrollContainer from "@/components/ScrollContainer";

const Home = () => {
  return (
    <main className='w-full overflow-x-hidden overflow-y-auto'>
      <div className='h-40'>Hello</div>

      <ScrollContainer />

      <div className='h-40'>World</div>
    </main>
  );
};

export default Home;
