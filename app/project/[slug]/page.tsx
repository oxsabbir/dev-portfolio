"use client";

import { MDXProvider } from "@mdx-js/react";
import { useMDXComponents } from "@/mdx-component";
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  console.log(slug);
  const { default: Content } = await import(`@/app/content/${slug}.mdx`);

  return (
    <div className="bg-background font-poppins p-6 md:p-10 py-0 bg-heroBgGradient">
      <MDXProvider components={useMDXComponents({})}>
        <Content />
      </MDXProvider>
    </div>
  );
}
