"use client"

import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

const RootPage = () => {
  const t = useTranslations("HomePage");
  return (
    <div>
      <h1>Root Page ({t("description")})</h1>

      <div style={{ marginBottom: "3rem" }}>
        <h2>Link with Query string</h2>
        <Link href={{ pathname: "/another-page", query: { name: "Guest" } }}>
          A link to another page with query string
        </Link>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <h2>Switch locale</h2>
        <Link href={{ pathname: "/" }} locale="en">
          English
        </Link>
        <Link href={{ pathname: "/" }} locale="sv">
          Swedish
        </Link>
      </div>
    </div>
  );
};

export default RootPage;
