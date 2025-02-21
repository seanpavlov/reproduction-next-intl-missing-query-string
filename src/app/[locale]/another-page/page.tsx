"use client";

import { useSearchParams } from "next/navigation";

const AnotherPage = () => {
  const searchParams = useSearchParams();

  const name = searchParams.get("name");

  return (
    <div>
      <h1>Another Page</h1>

      <p>
        <b>Query string:</b> {name}
      </p>
    </div>
  );
};

export default AnotherPage;
