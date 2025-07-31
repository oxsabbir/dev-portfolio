"use client";

import React, { useEffect, useState } from "react";
import { useMDXComponents } from "@/mdx-component";
import { MDXProvider } from "@mdx-js/react";

export default function Page({ params }: { params: { slug: string } }) {
  const [Content, setContent] = useState<React.ComponentType | null>(null);
  useEffect(() => {
    const init = async () => {
      const paramsData = await params;
      import(`@/app/content/${paramsData?.slug}.mdx`).then((mod) => {
        setContent(() => mod.default);
      });
    };
    init();
  }, [params]);

  if (!Content) return <div>Loading...</div>;

  return (
    <div className="bg-background font-poppins p-4 md:p-10 py-0 bg-heroBgGradient">
      <MDXProvider components={useMDXComponents({})}>
        <Content />
      </MDXProvider>
    </div>
  );
}
