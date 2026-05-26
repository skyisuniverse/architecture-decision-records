// app/[lang]/adrs/llm-training-adr/decisions/considerations/considerationsData.ts
export interface ConsiderationSection {
  id: string; // The URL anchor hash identifier (e.g. #data-privacy)
  title: string;
  content: string;
}

export const getConsiderationsData = (
  dict: Record<string, string>,
): ConsiderationSection[] => [
  {
    id: "data-privacy",
    title: dict["considerations.privacy.title"] || "Data Privacy & Compliance",
    content:
      dict["considerations.privacy.content"] ||
      "Detailed compliance parameters regarding licensing models, anonymization, and training text security boundaries.",
  },
  {
    id: "compute-efficiency",
    title:
      dict["considerations.compute.title"] ||
      "Compute Efficiency & Infrastructure",
    content:
      dict["considerations.compute.content"] ||
      "Hardware topology scaling criteria, floating point quantization targets, and cluster orchestration constraints.",
  },
  {
    id: "evaluation-metrics",
    title:
      dict["considerations.evaluation.title"] ||
      "Evaluation Metrics & Validation",
    content:
      dict["considerations.evaluation.content"] ||
      "Benchmarking evaluation architectures, human-in-the-loop feedback mechanisms, and validation thresholds.",
  },
];
