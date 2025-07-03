"use client";

import { MDXProvider } from "@mdx-js/react";
import Welcome from "@/app/mdx-page/welcome.mdx";
import { useMDXComponents } from "@/mdx-component";

export default function Page() {
  return (
    <div className="bg-background font-poppins p-6 md:p-10 py-0 bg-heroBgGradient">
      <MDXProvider components={useMDXComponents({})}>
        <Welcome />
      </MDXProvider>
    </div>
  );
}
