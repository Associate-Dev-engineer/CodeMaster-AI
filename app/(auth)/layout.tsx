import { Section } from "lucide-react";
import React from "react";

export default function AuthRootlayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
