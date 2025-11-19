import Card from "../components/Card";

export default function Home() {
  const searchResult = [
    {
      id: "abc123",
      title: "Sample Video 1",
      thumbnail: "",
      lengthSeconds: 300,
      uploaded_at: "2023-06-15 10:00:00",
    },
    {
      id: "def456",
      title: "Sample Video 2",
      thumbnail: "",
      lengthSeconds: 600,
      uploaded_at: "2023-01-15 10:00:00",
    },
  ];
  return (
    <main className="flex flex-row h-[calc(100%-56px)]">
      <div className="grow w-[calc(100%-240px)] h-full overflow-y-auto bg-white dark:bg-black">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-5">
          {searchResult.map((item, index) => {
            return <Card key={index} video={item} />;
          })}
        </div>
      </div>
    </main>
  );
}
