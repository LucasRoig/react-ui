import { MDXContent } from "@content-collections/mdx/react";
import { allComponents } from "content-collections";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../../../@components/tabs";

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
            return (
              <Tabs defaultValue="preview">
                <TabsList>
                  <TabsTrigger value="preview">Preview</TabsTrigger>
                  <TabsTrigger value="code">Code</TabsTrigger>
                </TabsList>
                <TabsContent value="preview">
                  <iframe
                    title="preview"
                    src={"/preview/button"}
                    height={800}
                    className="relative z-20 w-full bg-background"
                    // onLoad={() => {
                    //   setIsLoading(false);
                    // }}
                  />
                </TabsContent>
                <TabsContent value="code">{props.children}</TabsContent>
              </Tabs>
            );
          },
        }}
      />
    </div>
  );
}
