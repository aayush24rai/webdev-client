import PathCalculator from "../../../PathCalculator";
export default async function Page({ params }: { params: Promise<{ a: string; b: string }> }) {
  const { a, b } = await params;
  return <PathCalculator a={a} b={b} />;
}
