export default function ButtonPreview() {
  return (
    <div className="flex flex-col gap-2">
      <button type="button" className="btn btn-primary">
        Primary
      </button>
      <button type="button" className="btn btn-secondary">
        Secondary
      </button>
      <button type="button" className="btn btn-accent">
        Accent
      </button>
      <button type="button" className="btn btn-outline">
        Outline
      </button>
    </div>
  );
}
