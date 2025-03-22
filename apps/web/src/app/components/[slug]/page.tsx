import { MDXContent } from "@content-collections/mdx/react";
import { allComponents } from "content-collections";

export default async function ComponentPage({ params }: Readonly<{ params: Promise<{ slug: string }> }>) {
  const { slug } = await params;
  const component = allComponents.find((component) => component.slug === slug);
  if (!component) {
    return <div>Component with slug {slug} not found</div>;
  }
  return (
    <div>
      This is a component page {slug}
      <MDXContent
        code={component.mdx}
        components={{
          ComponentPreview: (props: { children: React.ReactNode }) => {
            return <div>{props.children}</div>;
          },
        }}
      />
    </div>
  );
}
