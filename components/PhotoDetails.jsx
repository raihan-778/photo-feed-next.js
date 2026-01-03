import { getDictionery } from "@/app/[lang]/dictioneries";
import Image from "next/image";

export const PhotoDetails = async ({ id, lang }) => {
  const dictionery = await getDictionery(lang);

  const baseUrl = process.env.BASE_URL;

  const response = await fetch(`${baseUrl}/photos/${id}`);
  const photoDetails = await response.json();
  console.log("photoDetails in PhotoDetails", photoDetails);

  return (
    <div className="container my-4 lg:my-8">
      <div className="grid grid-cols-12 gap-4 2xl:gap-10 ">
        <div className="col-span-12 lg:col-span-8 border rounded-xl">
          <Image
            className="max-w-full h-full max-h-[70vh] mx-auto"
            src={photoDetails.url}
            alt={photoDetails.title}
            width={900}
            height={500}
          />
        </div>

        <div className="p-6 border rounded-xl col-span-12 lg:col-span-4  ">
          <h2 className="text-lg lg:text-2xl font-bold mb-2">
            {photoDetails.title}
          </h2>
          <div className="text-xs lg:text-sm text-black/60 mb-6">
            {photoDetails.tags.map((tag) => `#${tag.trim()}`).join(", ")}
            {/* #nature, #river, #ocean */}
          </div>
          {/* <!-- info rows --> */}
          <div className="space-y-2.5 text-black/80 text-xs lg:text-sm">
            {/* <!-- item start --> */}
            <div className="flex justify-between">
              <span>{dictionery.views}</span>
              <span className="font-bold">{photoDetails.views} </span>
            </div>
            {/* <!-- item ends --> */}
            {/* <!-- item start --> */}
            <div className="flex justify-between">
              <span>{dictionery.share}</span>
              <span className="font-bold">{photoDetails.share}</span>
            </div>
            {/* <!-- item ends --> */}
            {/* <!-- item start --> */}
            <div className="flex justify-between">
              <span>{dictionery.uploadedOn}</span>
              <span className="font-bold">{photoDetails.uploaded}</span>
            </div>
            {/* <!-- item ends --> */}
          </div>
          {/* <!-- info rows ends --> */}

          {/* <!-- author info --> */}
          <div className="mt-6">
            {/* <!-- author header --> */}
            <div className="flex justify-between items-center mb-3">
              {/* <!--  --> */}
              <div className="flex items-center gap-3">
                <Image
                  className="size-12 lg:size-14 rounded-full border"
                  src={photoDetails.author.avatar}
                  alt="avatar"
                  height={50}
                  width={50}
                />
                <div className="spacy-y-3">
                  <h6 className="lg:text-lg font-bold">
                    {photoDetails.author.name}
                  </h6>
                  <p className="text-black/60 text-xs lg:text-sm">
                    {photoDetails.author.followers} Followers
                  </p>
                </div>
              </div>
              {/* <!-- action --> */}
              <button className="flex items-center gap-1.5 text-black/60 text-xs xl:text-sm">
                <Image
                  width={50}
                  height={50}
                  src="/follow.svg"
                  className="w-5 h-5"
                  alt=""
                />
                {dictionery.follow}
              </button>
            </div>
            {/* <!-- author bio --> */}
            <p className="text-xs lg:text-sm text-black/60">
              {photoDetails.author.bio}
            </p>
          </div>
          {/* <!-- author info ends --> */}
          {/* <!-- actions --> */}
          <div className="mt-6">
            <div className="flex items-stretch gap-3">
              <button className="flex-1 border py-1.5 rounded text-xs lg:text-sm flex items-center justify-center text-center gap-1.5 font-bold hover:bg-yellow-400">
                <Image
                  width={50}
                  height={50}
                  src="/heart.svg"
                  alt=""
                  className="w-5 h-5"
                />
                {photoDetails.likes}
              </button>
              <button className="flex-1 border py-1.5 rounded text-xs lg:text-sm flex items-center justify-center text-center gap-1.5 font-bold hover:bg-yellow-400">
                <Image
                  width={50}
                  height={50}
                  alt=""
                  src="/save.svg"
                  className="w-5 h-5"
                />
                {dictionery.save}
              </button>
              <button className="flex-1 border py-1.5 rounded text-xs lg:text-sm flex items-center justify-center text-center gap-1.5 font-bold hover:bg-yellow-400">
                <Image
                  width={50}
                  height={50}
                  alt=""
                  src="/share.svg"
                  className="w-5 h-5"
                />
                {dictionery.share}
              </button>
            </div>
          </div>
        </div>
        {/* <!-- details card ends --> */}
      </div>
      {/* <!--  --> */}
    </div>
  );
};
