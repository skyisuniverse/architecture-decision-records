// app/[lang]/adrs/llm-training-adr/decisions/considerations/page.tsx
import { ADRHeader } from "@/app/[lang]/components/ADRHeader";
import Container from "@mui/material/Container";
import { getConsiderationsData } from "./considerationsData";
import { ConsiderationsClientView } from "./ConsiderationsClientView";

interface Props {
  params: Promise<{ lang: string }>;
}

export default async function Page({ params }: Props) {
  const { lang } = await params;

  // Simulate or execute standard JSON local dictionary dictionary loading layout
  // replace with your real dictionary loading system logic helper
  const dict: Record<string, string> = {
    "considerations.toc.title": "Table of Contents",
    "considerations.privacy.title": "Data Privacy & Compliance Boundaries",
    "considerations.privacy.content":
      "Enterprise data compliance parameters specifying validation structures.",
  };

  const sections = getConsiderationsData(dict);

  return (
    <>
      <ADRHeader />
      <Container
        // maxWidth="md"
        disableGutters
        sx={{
          py: 4,
          px: "0px !important", // Wipes out gutters and side paddings
          marginLeft: "0px !important", // Disables auto-centering margin on the left side
          marginRight: "0px !important", // Disables auto-centering margin on the right side
        }}
      >
        <ConsiderationsClientView
          sections={sections}
          tocLabel={dict["considerations.toc.title"]}
        />
      </Container>
    </>
  );
}
