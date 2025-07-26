import Card from "@/components/common/Card";

const Home = () => {
  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold text-center mb-6 text-blue-800">
        Welcome to the Home Page
      </h1>

      <Card title="Introduction" content="This project showcases reusable components using Next.js." />
      <Card title="Why Next.js?" content="Next.js offers routing, server-side rendering, and great performance." />
      <Card title="What’s Next?" content="Explore more components and dynamic features in the upcoming tasks." />
    </div>
  );
};

export default Home;
