import { Button } from "../../../../@design-system/components/button/button";

export default function ButtonPreview() {
  return (
    <div className="flex flex-col gap-2">
      <Button type="button" color="primary" className="btn btn-primary">
        Primary
      </Button>
      <Button type="button" className="btn btn-secondary">
        Secondary
      </Button>
      <Button type="button" className="btn btn-outline">
        Outline
      </Button>
    </div>
  );
}
