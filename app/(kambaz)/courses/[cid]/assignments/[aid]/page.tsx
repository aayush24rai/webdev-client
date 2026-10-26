import AssignmentEditor from "../AssignmentEditor";
export default async function AssignmentEditorPage({
  params,
}: {
  params: Promise<{ cid: string; aid: string }>;
}) {
  const { cid, aid } = await params;
  return <AssignmentEditor cid={cid} aid={aid} />;
}
