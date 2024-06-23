import { getApod } from "@/actions/getApod";
import BoxView from "@/components/BoxView";
import { NASAImage } from "@/lib/types";

export default async function Home() {
  const imageData: NASAImage = await getApod();
  return (
    <div>
      {imageData ? (
        <BoxView
          url={imageData.url}
          title={imageData.title}
          date={imageData.date}
          explanation={imageData.explanation}
        />
      ) : (
        <div>No image available</div>
      )}
    </div>
  );
}
