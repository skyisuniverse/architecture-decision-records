// app/[lang]/adrs/3d-printer-adr/3d-printer-adrs-list.tsx
import { AdrsList } from "@/app/[lang]/types/adr";

export const ThreeDPrinterAdrsList: AdrsList = [
  {
    title: "3d-printer-decision-record-1",
    link: "/adrs/3d-printer-adr/decisions/3d-printer-decision-record-1",   // ← full correct path
    date: "April 2026",
    status: "Draft",
  },
  {
    title: "3d-printer-decision-record-2",
    link: "/adrs/3d-printer-adr/decisions/3d-printer-decision-record-2",   // ← full correct path
    date: "April 2026",
    status: "Draft",
  },
];