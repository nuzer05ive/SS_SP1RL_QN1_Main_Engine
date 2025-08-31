import { NextRequest } from "next/server";
import { renderToStream, Document } from "@react-pdf/renderer";
import DesignBiblePDFContent from "@/components/pdf/DesignBiblePDFContent";
import React, { createElement } from "react";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const by = searchParams.get("by") || "";
  const date = new Date().toISOString().slice(0, 10);

  // Build a <Document> element without JSX (so .ts is fine)
  const element = createElement(
    Document,
    null,
    createElement(DesignBiblePDFContent, { by, date })
  );

  const stream = await renderToStream(element);

  return new Response(stream as unknown as ReadableStream, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": "inline; filename=RH_Design_Bible.pdf",
    },
  });
}
