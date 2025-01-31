"use client";
import { useSearchParams } from "next/navigation";

const Page = () => {
  const searchParams = useSearchParams();
  const title = searchParams.get("title") || "No Title Provided";
  const description =
    searchParams.get("description") || "No Description Available";

  const decodedDescription = decodeURIComponent(description);

  const words = decodedDescription.split(" ");

  const chunkSize = 50;
  const paragraphs = [];
  for (let i = 0; i < words.length; i += chunkSize) {
    paragraphs.push(words.slice(i, i + chunkSize).join(" "));
  }

  return (
    <div className="mt-28 px-6">
      <h1 className="text-3xl font-bold underline text-start text-green-600">
        {title}
      </h1>

      <div className="mt-6 space-y-4 text-lg text-gray-700">
        {paragraphs.map((para, index) => (
          <p key={index} className="leading-relaxed">
            {para}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Page;
