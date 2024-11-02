import React from "react";

export default function MyContainer({
  children,
  cls,
}: {
  children: React.ReactNode;
  cls?: string;
}) {
  return (
    <div className={`container mx-auto px-2 lg:px-12 ${cls}`}>{children}</div>
  );
}
