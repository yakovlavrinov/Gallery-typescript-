import Gallery from "./components";

function App() {
  return (
    <div className="App">
      <Gallery
        photos={[
          {
            id: 1,
            src: "/photos/1.jpg",
            preview: "/photos/preview/1.jpg",
            description: "Norway 1",
          },
          {
            id: 1,
            src: "/photos/1.jpg",
            preview: "/photos/preview/1.jpg",
            description: "Norway 1",
          },
          {
            id: 1,
            src: "/photos/1.jpg",
            preview: "/photos/preview/1.jpg",
            description: "Norway 1",
          },
          {
            id: 1,
            src: "/photos/1.jpg",
            preview: "/photos/preview/1.jpg",
            description: "Norway 1",
          },
          {
            id: 1,
            src: "/photos/1.jpg",
            preview: "/photos/preview/1.jpg",
            description: "Norway 1",
          },
          {
            id: 1,
            src: "/photos/1.jpg",
            preview: "/photos/preview/1.jpg",
            description: "Norway 1",
          },
        ]}
      />
    </div>
  );
}

export default App;
