import { PhotoList } from "../../components/PhotoList";

export default async function Home() {
  const baseUrl = process.env.BASE_URL;

  const response = await fetch(`${baseUrl}/photos`);
  const photoData = await response.json();
  console.log("photoData", photoData);

  return (
    <div className=" container my-4 lg:my-8 ">
      {" "}
      <PhotoList photoData={photoData} />
    </div>
  );
}
