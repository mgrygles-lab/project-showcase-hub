import p1 from "@/assets/project-01.jpg";
import p2 from "@/assets/project-02.jpg";
import p3 from "@/assets/project-03.jpg";
import p4 from "@/assets/project-04.jpg";
import p5 from "@/assets/project-05.jpg";
import p6 from "@/assets/project-06.jpg";

export type Project = {
  slug: string;
  title: string;
  client: string;
  year: number;
  discipline: string;
  image: string;
  width: number;
  height: number;
};

export const projects: Project[] = [
  { slug: "atrium", title: "Atrium Workspace", client: "Hale & Co.", year: 2025, discipline: "Interior · Identity", image: p1, width: 1280, height: 1600 },
  { slug: "onsuno", title: "Onsuno Snacks", client: "Onsuno", year: 2025, discipline: "Packaging", image: p2, width: 1280, height: 960 },
  { slug: "ryelark", title: "Ryelark Brand System", client: "Ryelark", year: 2024, discipline: "Brand Identity", image: p3, width: 1280, height: 1280 },
  { slug: "north-tower", title: "North Tower", client: "Meridian Group", year: 2024, discipline: "Architecture", image: p4, width: 1280, height: 1440 },
  { slug: "lumen-app", title: "Lumen App", client: "Lumen Health", year: 2026, discipline: "Product · Mobile", image: p5, width: 1280, height: 1100 },
  { slug: "summit-26", title: "Summit '26", client: "Forge Conf.", year: 2026, discipline: "Event · Stage", image: p6, width: 1280, height: 1700 },
];
