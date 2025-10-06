"use client";

import React, { useEffect, useState } from "react";
import { useMDXComponents } from "@/mdx-component";
import { MDXProvider } from "@mdx-js/react";
import Loader from "@/app/components/extra/loader";
import NotFound from "@/app/components/extra/not-found";

export default function Page({ params }: { params: Promise<any> }) {
  const [Content, setContent] = useState<React.ComponentType | null>(null);
  const [loading, setLoading] = useState<Boolean>(false);

  useEffect(() => {
    const init = async () => {
      const paramsData = await params;
      setLoading(true);
      import(`@/app/content/${paramsData?.slug}.mdx`)
        .then((mod) => {
          setContent(() => mod.default);
        })
        .finally(() => setLoading(false));
    };
    init();
  }, [params]);

  if (loading) return <Loader />;

  if (!Content) return <NotFound />;

  return (
    <div className="bg-background font-poppins p-4 md:p-10 py-0 bg-heroBgGradient">
      <MDXProvider components={useMDXComponents({})}>
        <Content />
      </MDXProvider>
    </div>
  );
}
