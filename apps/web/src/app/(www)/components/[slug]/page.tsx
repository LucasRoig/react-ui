import { MDXContent } from "@content-collections/mdx/react";
import { allComponents } from "content-collections";
import { Monitor, Smartphone, Tablet } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../../../@components/tabs";
import { ToggleGroup, ToggleGroupItem } from "../../../../@components/toggle-group";
import { Webview } from "../_components/webview";

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
                <div className="flex items-center justify-between">
                  <TabsList>
                    <TabsTrigger value="preview">Preview</TabsTrigger>
                    <TabsTrigger value="code">Code</TabsTrigger>
                  </TabsList>

                  <ToggleGroup type="single">
                    <ToggleGroupItem value="fullwidth">
                      <Monitor />
                    </ToggleGroupItem>
                    <ToggleGroupItem value="tablet">
                      <Tablet />
                    </ToggleGroupItem>
                    <ToggleGroupItem value="smartphone">
                      <Smartphone />
                    </ToggleGroupItem>
                  </ToggleGroup>
                </div>
                <div className="border rounded-md overflow-hidden mt-4">
                  <TabsContent value="preview">
                    <Webview title="preview" src={"/preview/button"} className="relative z-20 w-full bg-background" />
                  </TabsContent>
                  <TabsContent value="code" className="[&_pre]:p-4">
                    {props.children}
                  </TabsContent>
                </div>
              </Tabs>
            );
          },
        }}
      />
    </div>
  );
}
