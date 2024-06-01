import Image from "next/image";
import wondersImages, { WonderImage } from "../wonders";

export default function PhotoPage({
  params: { id },
}: {
  params: { id: string };
}) {
    try {
        const photo: WonderImage = wondersImages.find((p) => p.id === id)!;
        return (
            <div className="container mx-auto my-10">
                <div className="w-1/2 mx-auto">
                    <div>
                        <h1 className="text-center text-3xl font-bold my-4">{photo.name}</h1>
                    </div>
                    <Image
                        alt={photo.name}
                        src={photo.src}
                        className="w-full object-cover aspect-square "
                    />

                    <div className="bg-white py-4">
                        <h3>{photo.id}</h3>
                        <h3>{photo.site}</h3>
                    </div>
                </div>
            </div>
        );
    } catch {
        console.log('if');
        return <h1>no image to show </h1>
    }
}
