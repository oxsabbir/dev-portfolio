"use client";

import { MDXProvider } from "@mdx-js/react";
import { useMDXComponents } from "@/mdx-component";
import React from "react";
export default async function ContentRenderer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <MDXProvider components={useMDXComponents({})}>{children}</MDXProvider>
  );
}
