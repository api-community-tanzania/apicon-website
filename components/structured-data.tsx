type StructuredDataProps = {
  entries: readonly string[];
};

export function StructuredData({ entries }: StructuredDataProps) {
  return entries.map((entry, index) => (
    <script
      key={index}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: entry }}
    />
  ));
}
