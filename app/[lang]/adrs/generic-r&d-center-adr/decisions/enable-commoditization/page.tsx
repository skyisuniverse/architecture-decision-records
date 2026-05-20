// app/[lang]/adrs/generic-r&d-center-adr/decisions/enable-commoditization/page.tsx

// import { ADRHeader } from "@/app/[lang]/components/ADRHeader";
// import Typography from "@mui/material/Typography";
// import Paper from "@mui/material/Paper";
// import List from "@mui/material/List";
// import ListItem from "@mui/material/ListItem";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemText from "@mui/material/ListItemText";
// import MuiNextLink from "@/app/[lang]/components/MuiNextLink";

// export default async function Page() {
//   return (
//     <>
//       <ADRHeader />

//       <Paper
//         elevation={0}
//         sx={{
//           p: { xs: 4, md: 6 },
//           borderRadius: 3,
//           backgroundColor: "background.paper",
//           border: "1px solid",
//           borderColor: "divider",
//         }}
//       >
//         {/* Page title */}
//         <Typography
//           variant="h3"
//           component="h1"
//           gutterBottom
//           sx={{
//             fontWeight: 700,
//             fontSize: { xs: "2rem", md: "2.5rem" },
//             mb: 4,
//           }}
//         >
//           Commoditization of Physical & Digital Products
//         </Typography>

//         {/* Introductory paragraph with inline links */}
//         <Typography
//           variant="body1"
//           paragraph
//           sx={{
//             fontSize: "1.1rem",
//             lineHeight: 1.8,
//             color: "text.secondary",
//           }}
//         >
//           Based on the results of research described in the{" "}
//           <MuiNextLink
//             href="https://rd-center.vercel.app/computer"
//             target="_blank"
//             rel="noopener noreferrer"
//             underline="hover"
//             sx={{ fontWeight: 500 }}
//           >
//             Computer
//           </MuiNextLink>{" "}
//           section of the{" "}
//           <MuiNextLink
//             href="https://rd-center.vercel.app/"
//             underline="hover"
//             target="_blank"
//             rel="noopener noreferrer"
//             sx={{ fontWeight: 500 }}
//           >
//             R&D Center knowledge base
//           </MuiNextLink>
//           , particularly in:
//         </Typography>

//         {/* Interactive MUI List for the three research links */}
//         <List sx={{ mb: 1 }}>
//           {[
//             {
//               href: "https://rd-center.vercel.app/computer/minimization-of-costs-for-equipment-for-production-of-compute-blades",
//               text: "Minimization of costs for equipment for production of Compute Blades",
//             },
//             {
//               href: "https://rd-center.vercel.app/computer/minimization-of-costs-for-equipment-for-production-of-monitors",
//               text: "Minimization of costs for equipment for production of monitors",
//             },
//             {
//               href: "https://rd-center.vercel.app/computer/minimization-of-costs-for-equipment-for-production-of-laptops",
//               text: "Minimization of costs for equipment for production of Laptops",
//             },
//           ].map((item) => (
//             <ListItem key={item.href} disablePadding>
//               <ListItemButton
//                 component={MuiNextLink}
//                 href={item.href}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 sx={{
//                   borderRadius: 2,
//                   mb: 1,
//                   py: 1.5,
//                   "&:hover": { backgroundColor: "action.hover" },
//                 }}
//               >
//                 <ListItemText
//                   primary={item.text}
//                   primaryTypographyProps={{
//                     fontSize: "1.05rem",
//                     color: "primary.main",
//                     fontWeight: 500,
//                     sx: {
//                       "&:hover": {
//                         textDecoration: "underline",
//                       },
//                     },
//                   }}
//                 />
//               </ListItemButton>
//             </ListItem>
//           ))}
//         </List>

//         {/* Conclusion with bulleted assumptions */}
//         <Typography
//           variant="body1"
//           paragraph
//           sx={{
//             fontSize: "1.1rem",
//             lineHeight: 1.8,
//             color: "text.primary",
//             fontWeight: 500,
//           }}
//         >
//           It makes sense to assume that given:
//         </Typography>

//         <List dense sx={{ pl: 3, mb: 1 }}>
//           <ListItem sx={{ display: "list-item", listStyleType: "disc" }}>
//             <ListItemText
//               primary="Full automation of design &amp; production processes with AI &amp; Robots"
//               primaryTypographyProps={{ fontSize: "1.05rem" }}
//             />
//           </ListItem>
//           <ListItem sx={{ display: "list-item", listStyleType: "disc" }}>
//             <ListItemText
//               primary="Free software with open-source packages (with MIT License)"
//               primaryTypographyProps={{ fontSize: "1.05rem" }}
//             />
//           </ListItem>
//           <ListItem sx={{ display: "list-item", listStyleType: "disc" }}>
//             <ListItemText
//               primary="Free energy (with solar &amp; batteries)"
//               primaryTypographyProps={{ fontSize: "1.05rem" }}
//             />
//           </ListItem>
//         </List>

//         <Typography
//           variant="body1"
//           sx={{
//             fontSize: "1.1rem",
//             lineHeight: 1.8,
//             color: "text.primary",
//           }}
//         >
//           the production cost of physical products can be minimized to the cost
//           of raw materials they are made of. This means that all physical and
//           digital products can be commoditized.
//         </Typography>

//         {/* === R&amp;D Center’s production approach – new section === */}
//         <Typography
//           variant="h4"
//           component="h2"
//           gutterBottom
//           sx={{
//             fontWeight: 700,
//             mt: 10,
//             mb: 3,
//             fontSize: { xs: "1.75rem", md: "2rem" },
//           }}
//         >
//           R&amp;D Center’s design and production approach
//         </Typography>

//         <Typography
//           variant="body1"
//           paragraph
//           sx={{
//             fontSize: "1.1rem",
//             lineHeight: 1.8,
//             color: "text.primary",
//             mb: 0,
//           }}
//         >
//           We therefore:
//         </Typography>

//         {/* Numbered list – fully MUI components, matching the existing bullet list style */}
//         <List sx={{ pl: 4 }}>
//           {/* Main point 1 */}
//           <ListItem
//             sx={{
//               display: "list-item",
//               listStyleType: "decimal",
//               pl: 0,
//               pt: 0,
//               pb: 0,
//               mb: 0,
//             }}
//           >
//             <ListItemText
//               primary={
//                 <>
//                   Assume that throughout R&D Center’s portfolio (including{" "}
//                   <MuiNextLink
//                     href="https://rd-center.vercel.app/products"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     underline="hover"
//                     sx={{ fontWeight: 500 }}
//                   >
//                     Products
//                   </MuiNextLink>
//                   {", "}
//                   <MuiNextLink
//                     href="https://rd-center.vercel.app/services"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     underline="hover"
//                     sx={{ fontWeight: 500 }}
//                   >
//                     Services
//                   </MuiNextLink>
//                   {", "}
//                   <MuiNextLink
//                     href="https://rd-center.vercel.app/apps"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     underline="hover"
//                     sx={{ fontWeight: 500 }}
//                   >
//                     Applications
//                   </MuiNextLink>
//                   {"), "} any:
//                 </>
//               }
//               primaryTypographyProps={{
//                 fontSize: "1.05rem",
//                 lineHeight: 1.85,
//                 color: "text.primary",
//               }}
//             />
//             {/* Nested sub-list (still pure MUI) */}
//             <List sx={{ pl: 5 }}>
//               <ListItem
//                 sx={{
//                   display: "list-item",
//                   listStyleType: "decimal",
//                   pl: 0,
//                   pt: 0,
//                   pb: 0,
//                 }}
//               >
//                 <ListItemText
//                   primary="Physical product, its components and equipment / tools to produce those should be producible from raw materials, ground up."
//                   primaryTypographyProps={{ fontSize: "1.05rem" }}
//                 />
//               </ListItem>
//               <ListItem
//                 sx={{
//                   display: "list-item",
//                   listStyleType: "decimal",
//                   pl: 0,
//                   pt: 0,
//                   pb: 0,
//                 }}
//               >
//                 <ListItemText
//                   primary={
//                     <>
//                       Digital product, its components and equipment / tools to
//                       produce those should be open-source with{" "}
//                       <MuiNextLink
//                         href="https://tlo.mit.edu/understand-ip/exploring-mit-open-source-license-comprehensive-guide"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         underline="hover"
//                         sx={{ fontWeight: 500 }}
//                       >
//                         MIT License
//                       </MuiNextLink>{" "}
//                       (
//                       <MuiNextLink
//                         href="https://en.wikipedia.org/wiki/MIT_License"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         underline="hover"
//                         sx={{ fontWeight: 500 }}
//                       >
//                         Wiki
//                       </MuiNextLink>
//                       )
//                     </>
//                   }
//                   primaryTypographyProps={{ fontSize: "1.05rem" }}
//                 />
//               </ListItem>
//             </List>
//           </ListItem>

//           {/* Main point 2 */}
//           <ListItem
//             sx={{
//               display: "list-item",
//               listStyleType: "decimal",
//               pl: 0,
//               pt: 0,
//               pb: 0,
//             }}
//           >
//             <ListItemText
//               primary="Assume that the entire production process should be automated with"
//               primaryTypographyProps={{
//                 fontSize: "1.05rem",
//                 // lineHeight: 1.85,
//                 color: "text.primary",
//               }}
//             />
//             {/* Nested sub-list */}
//             <List sx={{ pl: 5 }}>
//               <ListItem
//                 sx={{
//                   display: "list-item",
//                   listStyleType: "decimal",
//                   pl: 0,
//                   pt: 0,
//                   pb: 0,
//                 }}
//               >
//                 <ListItemText
//                   primary="Classical Software Engineering"
//                   primaryTypographyProps={{ fontSize: "1.05rem" }}
//                 />
//               </ListItem>
//               <ListItem
//                 sx={{
//                   display: "list-item",
//                   listStyleType: "decimal",
//                   pl: 0,
//                   pt: 0,
//                   pb: 0,
//                 }}
//               >
//                 <ListItemText
//                   primary="AI"
//                   primaryTypographyProps={{ fontSize: "1.05rem" }}
//                 />
//               </ListItem>
//               <ListItem
//                 sx={{
//                   display: "list-item",
//                   listStyleType: "decimal",
//                   pl: 0,
//                   pt: 0,
//                   pb: 0,
//                 }}
//               >
//                 <ListItemText
//                   primary="Robots"
//                   primaryTypographyProps={{ fontSize: "1.05rem" }}
//                 />
//               </ListItem>
//             </List>
//           </ListItem>

//           {/* Main point 3 */}
//           <ListItem
//             sx={{
//               display: "list-item",
//               listStyleType: "decimal",
//               pl: 0,
//               pt: 0,
//               pb: 0,
//             }}
//           >
//             <ListItemText
//               primary="Assume that as a result any product should be commoditized."
//               primaryTypographyProps={{
//                 fontSize: "1.05rem",
//                 // lineHeight: 1.85,
//                 color: "text.primary",
//               }}
//             />
//           </ListItem>
//         </List>
//       </Paper>
//     </>
//   );
// }

// import type { Locale } from "@/i18n-config";
// import { ADRHeader } from "@/app/[lang]/components/ADRHeader";
// import Typography from "@mui/material/Typography";
// import Paper from "@mui/material/Paper";
// import List from "@mui/material/List";
// import ListItem from "@mui/material/ListItem";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemText from "@mui/material/ListItemText";
// import MuiNextLink from "@/app/[lang]/components/MuiNextLink";

// export default async function Page({
//   params,
// }: {
//   params: Promise<{ lang: Locale }>;
// }) {
//   const { lang } = await params;

//   // Load decision-specific dictionary (colocated with the other decision pages)
//   let dict: Record<string, string> = {};
//   try {
//     const module = await import(`../../decisions-dictionaries/${lang}.json`);
//     dict = module.default || module;
//   } catch (err) {
//     console.warn(
//       "Could not load decision dictionary for enable-commoditization",
//     );
//   }

//   return (
//     <>
//       <ADRHeader />

//       <Paper
//         elevation={0}
//         sx={{
//           p: { xs: 4, md: 6 },
//           borderRadius: 3,
//           backgroundColor: "background.paper",
//           border: "1px solid",
//           borderColor: "divider",
//         }}
//       >
//         {/* Page title */}
//         <Typography
//           variant="h3"
//           component="h1"
//           gutterBottom
//           sx={{
//             fontWeight: 700,
//             fontSize: { xs: "2rem", md: "2.5rem" },
//             mb: 4,
//           }}
//         >
//           {dict["enable-commoditization.title"]}
//         </Typography>

//         {/* Introductory paragraph with inline links */}
//         <Typography
//           variant="body1"
//           paragraph
//           sx={{
//             fontSize: "1.1rem",
//             lineHeight: 1.8,
//             color: "text.secondary",
//           }}
//         >
//           {dict["enable-commoditization.intro1"]}{" "}
//           <MuiNextLink
//             href="https://rd-center.vercel.app/computer"
//             target="_blank"
//             rel="noopener noreferrer"
//             underline="hover"
//             sx={{ fontWeight: 500 }}
//           >
//             {dict["enable-commoditization.computer"]}
//           </MuiNextLink>{" "}
//           {dict["enable-commoditization.intro2"]}{" "}
//           <MuiNextLink
//             href="https://rd-center.vercel.app/"
//             underline="hover"
//             target="_blank"
//             rel="noopener noreferrer"
//             sx={{ fontWeight: 500 }}
//           >
//             {dict["enable-commoditization.knowledge-base"]}
//           </MuiNextLink>
//           {dict["enable-commoditization.particularly-in"]}
//         </Typography>

//         {/* Interactive MUI List for the three research links */}
//         <List sx={{ mb: 1 }}>
//           {[
//             {
//               href: "https://rd-center.vercel.app/computer/minimization-of-costs-for-equipment-for-production-of-compute-blades",
//               text: dict["enable-commoditization.research-blades"],
//             },
//             {
//               href: "https://rd-center.vercel.app/computer/minimization-of-costs-for-equipment-for-production-of-monitors",
//               text: dict["enable-commoditization.research-monitors"],
//             },
//             {
//               href: "https://rd-center.vercel.app/computer/minimization-of-costs-for-equipment-for-production-of-laptops",
//               text: dict["enable-commoditization.research-laptops"],
//             },
//           ].map((item) => (
//             <ListItem key={item.href} disablePadding>
//               <ListItemButton
//                 component={MuiNextLink}
//                 href={item.href}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 sx={{
//                   borderRadius: 2,
//                   mb: 1,
//                   py: 1.5,
//                   "&:hover": { backgroundColor: "action.hover" },
//                 }}
//               >
//                 <ListItemText
//                   primary={item.text}
//                   primaryTypographyProps={{
//                     fontSize: "1.05rem",
//                     color: "primary.main",
//                     fontWeight: 500,
//                     sx: {
//                       "&:hover": {
//                         textDecoration: "underline",
//                       },
//                     },
//                   }}
//                 />
//               </ListItemButton>
//             </ListItem>
//           ))}
//         </List>

//         {/* Conclusion with bulleted assumptions */}
//         <Typography
//           variant="body1"
//           paragraph
//           sx={{
//             fontSize: "1.1rem",
//             lineHeight: 1.8,
//             color: "text.primary",
//             fontWeight: 500,
//           }}
//         >
//           {dict["enable-commoditization.assume-given"]}
//         </Typography>

//         <List dense sx={{ pl: 3, mb: 1 }}>
//           <ListItem sx={{ display: "list-item", listStyleType: "disc" }}>
//             <ListItemText
//               primary={dict["enable-commoditization.assumption-automation"]}
//               primaryTypographyProps={{ fontSize: "1.05rem" }}
//             />
//           </ListItem>
//           <ListItem sx={{ display: "list-item", listStyleType: "disc" }}>
//             <ListItemText
//               primary={dict["enable-commoditization.assumption-free-software"]}
//               primaryTypographyProps={{ fontSize: "1.05rem" }}
//             />
//           </ListItem>
//           <ListItem sx={{ display: "list-item", listStyleType: "disc" }}>
//             <ListItemText
//               primary={dict["enable-commoditization.assumption-free-energy"]}
//               primaryTypographyProps={{ fontSize: "1.05rem" }}
//             />
//           </ListItem>
//         </List>

//         <Typography
//           variant="body1"
//           sx={{
//             fontSize: "1.1rem",
//             lineHeight: 1.8,
//             color: "text.primary",
//           }}
//         >
//           {dict["enable-commoditization.conclusion"]}
//         </Typography>

//         {/* === R&D Center’s production approach – new section === */}
//         <Typography
//           variant="h4"
//           component="h2"
//           gutterBottom
//           sx={{
//             fontWeight: 700,
//             mt: 10,
//             mb: 3,
//             fontSize: { xs: "1.75rem", md: "2rem" },
//           }}
//         >
//           {dict["enable-commoditization.approach-title"]}
//         </Typography>

//         <Typography
//           variant="body1"
//           paragraph
//           sx={{
//             fontSize: "1.1rem",
//             lineHeight: 1.8,
//             color: "text.primary",
//             mb: 0,
//           }}
//         >
//           {dict["enable-commoditization.we-therefore"]}
//         </Typography>

//         {/* Numbered list – fully using dictionary */}
//         <List sx={{ pl: 4 }}>
//           {/* Main point 1 */}
//           <ListItem
//             sx={{
//               display: "list-item",
//               listStyleType: "decimal",
//               pl: 0,
//               pt: 0,
//               pb: 0,
//               mb: 0,
//             }}
//           >
//             <ListItemText
//               primary={
//                 <>
//                   {dict["enable-commoditization.assume-portfolio"]}
//                   <MuiNextLink
//                     href="https://rd-center.vercel.app/products"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     underline="hover"
//                     sx={{ fontWeight: 500 }}
//                   >
//                     Products
//                   </MuiNextLink>
//                   {", "}
//                   <MuiNextLink
//                     href="https://rd-center.vercel.app/services"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     underline="hover"
//                     sx={{ fontWeight: 500 }}
//                   >
//                     Services
//                   </MuiNextLink>
//                   {", "}
//                   <MuiNextLink
//                     href="https://rd-center.vercel.app/apps"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     underline="hover"
//                     sx={{ fontWeight: 500 }}
//                   >
//                     Applications
//                   </MuiNextLink>
//                   {"), any:"}
//                 </>
//               }
//               primaryTypographyProps={{
//                 fontSize: "1.05rem",
//                 lineHeight: 1.85,
//                 color: "text.primary",
//               }}
//             />

//             {/* Nested sub-list */}
//             <List sx={{ pl: 5 }}>
//               <ListItem
//                 sx={{
//                   display: "list-item",
//                   listStyleType: "decimal",
//                   pl: 0,
//                   pt: 0,
//                   pb: 0,
//                 }}
//               >
//                 <ListItemText
//                   primary={dict["enable-commoditization.physical-product"]}
//                   primaryTypographyProps={{ fontSize: "1.05rem" }}
//                 />
//               </ListItem>
//               <ListItem
//                 sx={{
//                   display: "list-item",
//                   listStyleType: "decimal",
//                   pl: 0,
//                   pt: 0,
//                   pb: 0,
//                 }}
//               >
//                 <ListItemText
//                   primary={
//                     <>
//                       {dict["enable-commoditization.digital-product-prefix"]}
//                       <MuiNextLink
//                         href="https://tlo.mit.edu/understand-ip/exploring-mit-open-source-license-comprehensive-guide"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         underline="hover"
//                         sx={{ fontWeight: 500 }}
//                       >
//                         MIT License
//                       </MuiNextLink>{" "}
//                       (
//                       <MuiNextLink
//                         href="https://en.wikipedia.org/wiki/MIT_License"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         underline="hover"
//                         sx={{ fontWeight: 500 }}
//                       >
//                         Wiki
//                       </MuiNextLink>
//                       )
//                     </>
//                   }
//                   primaryTypographyProps={{ fontSize: "1.05rem" }}
//                 />
//               </ListItem>
//             </List>
//           </ListItem>

//           {/* Main point 2 */}
//           <ListItem
//             sx={{
//               display: "list-item",
//               listStyleType: "decimal",
//               pl: 0,
//               pt: 0,
//               pb: 0,
//             }}
//           >
//             <ListItemText
//               primary={dict["enable-commoditization.automated-with"]}
//               primaryTypographyProps={{
//                 fontSize: "1.05rem",
//                 lineHeight: 1.85,
//                 color: "text.primary",
//               }}
//             />
//             {/* Nested sub-list */}
//             <List sx={{ pl: 5 }}>
//               <ListItem
//                 sx={{
//                   display: "list-item",
//                   listStyleType: "decimal",
//                   pl: 0,
//                   pt: 0,
//                   pb: 0,
//                 }}
//               >
//                 <ListItemText
//                   primary={dict["enable-commoditization.classical-software"]}
//                   primaryTypographyProps={{ fontSize: "1.05rem" }}
//                 />
//               </ListItem>
//               <ListItem
//                 sx={{
//                   display: "list-item",
//                   listStyleType: "decimal",
//                   pl: 0,
//                   pt: 0,
//                   pb: 0,
//                 }}
//               >
//                 <ListItemText
//                   primary={dict["enable-commoditization.ai"]}
//                   primaryTypographyProps={{ fontSize: "1.05rem" }}
//                 />
//               </ListItem>
//               <ListItem
//                 sx={{
//                   display: "list-item",
//                   listStyleType: "decimal",
//                   pl: 0,
//                   pt: 0,
//                   pb: 0,
//                 }}
//               >
//                 <ListItemText
//                   primary={dict["enable-commoditization.robots"]}
//                   primaryTypographyProps={{ fontSize: "1.05rem" }}
//                 />
//               </ListItem>
//             </List>
//           </ListItem>

//           {/* Main point 3 */}
//           <ListItem
//             sx={{
//               display: "list-item",
//               listStyleType: "decimal",
//               pl: 0,
//               pt: 0,
//               pb: 0,
//             }}
//           >
//             <ListItemText
//               primary={dict["enable-commoditization.final-assumption"]}
//               primaryTypographyProps={{
//                 fontSize: "1.05rem",
//                 lineHeight: 1.85,
//                 color: "text.primary",
//               }}
//             />
//           </ListItem>
//         </List>
//       </Paper>
//     </>
//   );
// }

import type { Locale } from "@/i18n-config";
import { getDictionary } from "@/app/[lang]/components/WithDictionary";
import { ADRHeader } from "@/app/[lang]/components/ADRHeader";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MuiNextLink from "@/app/[lang]/components/MuiNextLink";

export default async function Page({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;

  // Load global dictionary (products, services, applications, etc.)
  const globalDict = await getDictionary(lang);

  // Load colocated decision-specific dictionary (all other strings)
  let decisionDict: Record<string, string> = {};
  try {
    // Renamed from `module` → `decisionModule` to satisfy Next.js ESLint rule
    // @next/next/no-assign-module-variable
    const decisionModule = await import(
      `../../decisions-dictionaries/${lang}.json`
    );
    decisionDict = decisionModule.default || decisionModule;
  } catch (err) {
    console.warn(
      "Could not load decision dictionary for enable-commoditization",
    );
  }

  // Merge both dictionaries (decision keys take precedence)
  const dict = { ...globalDict, ...decisionDict };

  return (
    <>
      <ADRHeader />

      <Paper
        elevation={0}
        sx={{
          p: { xs: 4, md: 6 },
          borderRadius: 3,
          backgroundColor: "background.paper",
          border: "1px solid",
          borderColor: "divider",
        }}
      >
        {/* Page title */}
        <Typography
          variant="h3"
          component="h1"
          gutterBottom
          sx={{
            fontWeight: 700,
            fontSize: { xs: "2rem", md: "2.5rem" },
            mb: 4,
          }}
        >
          {dict["enable-commoditization.title"]}
        </Typography>

        {/* Introductory paragraph with inline links */}
        <Typography
          variant="body1"
          paragraph
          sx={{
            fontSize: "1.1rem",
            lineHeight: 1.8,
            color: "text.secondary",
          }}
        >
          {dict["enable-commoditization.intro1"]}{" "}
          <MuiNextLink
            href="https://rd-center.vercel.app/computer"
            target="_blank"
            rel="noopener noreferrer"
            underline="hover"
            sx={{ fontWeight: 500 }}
          >
            {dict["enable-commoditization.computer"]}
          </MuiNextLink>{" "}
          {dict["enable-commoditization.intro2"]}{" "}
          <MuiNextLink
            href="https://rd-center.vercel.app/"
            underline="hover"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ fontWeight: 500 }}
          >
            {dict["enable-commoditization.knowledge-base"]}
          </MuiNextLink>
          {dict["enable-commoditization.particularly-in"]}
        </Typography>

        {/* Interactive MUI List for the three research links */}
        <List sx={{ mb: 1 }}>
          {[
            {
              href: "https://rd-center.vercel.app/computer/minimization-of-costs-for-equipment-for-production-of-compute-blades",
              text: dict["enable-commoditization.research-blades"],
            },
            {
              href: "https://rd-center.vercel.app/computer/minimization-of-costs-for-equipment-for-production-of-monitors",
              text: dict["enable-commoditization.research-monitors"],
            },
            {
              href: "https://rd-center.vercel.app/computer/minimization-of-costs-for-equipment-for-production-of-laptops",
              text: dict["enable-commoditization.research-laptops"],
            },
          ].map((item) => (
            <ListItem key={item.href} disablePadding>
              <ListItemButton
                component={MuiNextLink}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  borderRadius: 2,
                  mb: 1,
                  py: 1.5,
                  "&:hover": { backgroundColor: "action.hover" },
                }}
              >
                <ListItemText
                  primary={item.text}
                  primaryTypographyProps={{
                    fontSize: "1.05rem",
                    color: "primary.main",
                    fontWeight: 500,
                    sx: {
                      "&:hover": {
                        textDecoration: "underline",
                      },
                    },
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        {/* Conclusion with bulleted assumptions */}
        <Typography
          variant="body1"
          paragraph
          sx={{
            fontSize: "1.1rem",
            lineHeight: 1.8,
            color: "text.primary",
            fontWeight: 500,
          }}
        >
          {dict["enable-commoditization.assume-given"]}
        </Typography>

        <List dense sx={{ pl: 3, mb: 1 }}>
          <ListItem sx={{ display: "list-item", listStyleType: "disc" }}>
            <ListItemText
              primary={dict["enable-commoditization.assumption-automation"]}
              primaryTypographyProps={{ fontSize: "1.05rem" }}
            />
          </ListItem>
          <ListItem sx={{ display: "list-item", listStyleType: "disc" }}>
            <ListItemText
              primary={dict["enable-commoditization.assumption-free-software"]}
              primaryTypographyProps={{ fontSize: "1.05rem" }}
            />
          </ListItem>
          <ListItem sx={{ display: "list-item", listStyleType: "disc" }}>
            <ListItemText
              primary={dict["enable-commoditization.assumption-free-energy"]}
              primaryTypographyProps={{ fontSize: "1.05rem" }}
            />
          </ListItem>
        </List>

        <Typography
          variant="body1"
          sx={{
            fontSize: "1.1rem",
            lineHeight: 1.8,
            color: "text.primary",
          }}
        >
          {dict["enable-commoditization.conclusion"]}
        </Typography>

        {/* === R&amp;D Center’s design and production approach === */}
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          sx={{
            fontWeight: 700,
            mt: 10,
            mb: 3,
            fontSize: { xs: "1.75rem", md: "2rem" },
          }}
        >
          {dict["enable-commoditization.approach-title"]}
        </Typography>

        <Typography
          variant="body1"
          paragraph
          sx={{
            fontSize: "1.1rem",
            lineHeight: 1.8,
            color: "text.primary",
            mb: 0,
          }}
        >
          {dict["enable-commoditization.we-therefore"]}
        </Typography>

        {/* Numbered list */}
        <List sx={{ pl: 4 }}>
          {/* Main point 1 */}
          <ListItem
            sx={{
              display: "list-item",
              listStyleType: "decimal",
              pl: 0,
              pt: 0,
              pb: 0,
              mb: 0,
            }}
          >
            <ListItemText
              primary={
                <>
                  {dict["enable-commoditization.assume-portfolio"]}
                  <MuiNextLink
                    href="https://rd-center.vercel.app/products"
                    target="_blank"
                    rel="noopener noreferrer"
                    underline="hover"
                    sx={{ fontWeight: 500 }}
                  >
                    {dict["products"]}
                  </MuiNextLink>
                  {", "}
                  <MuiNextLink
                    href="https://rd-center.vercel.app/services"
                    target="_blank"
                    rel="noopener noreferrer"
                    underline="hover"
                    sx={{ fontWeight: 500 }}
                  >
                    {dict["services"]}
                  </MuiNextLink>
                  {", "}
                  <MuiNextLink
                    href="https://rd-center.vercel.app/apps"
                    target="_blank"
                    rel="noopener noreferrer"
                    underline="hover"
                    sx={{ fontWeight: 500 }}
                  >
                    {dict["applications"]}
                  </MuiNextLink>
                  {"), any:"}
                </>
              }
              primaryTypographyProps={{
                fontSize: "1.05rem",
                lineHeight: 1.85,
                color: "text.primary",
              }}
            />

            {/* Nested sub-list */}
            <List sx={{ pl: 5 }}>
              <ListItem
                sx={{
                  display: "list-item",
                  listStyleType: "decimal",
                  pl: 0,
                  pt: 0,
                  pb: 0,
                }}
              >
                <ListItemText
                  primary={dict["enable-commoditization.physical-product"]}
                  primaryTypographyProps={{ fontSize: "1.05rem" }}
                />
              </ListItem>
              <ListItem
                sx={{
                  display: "list-item",
                  listStyleType: "decimal",
                  pl: 0,
                  pt: 0,
                  pb: 0,
                }}
              >
                <ListItemText
                  primary={
                    <>
                      {dict["enable-commoditization.digital-product-prefix"]}
                      <MuiNextLink
                        href="https://tlo.mit.edu/understand-ip/exploring-mit-open-source-license-comprehensive-guide"
                        target="_blank"
                        rel="noopener noreferrer"
                        underline="hover"
                        sx={{ fontWeight: 500 }}
                      >
                        MIT License
                      </MuiNextLink>{" "}
                      (
                      <MuiNextLink
                        href="https://en.wikipedia.org/wiki/MIT_License"
                        target="_blank"
                        rel="noopener noreferrer"
                        underline="hover"
                        sx={{ fontWeight: 500 }}
                      >
                        Wiki
                      </MuiNextLink>
                      )
                    </>
                  }
                  primaryTypographyProps={{ fontSize: "1.05rem" }}
                />
              </ListItem>
            </List>
          </ListItem>

          {/* Main point 2 */}
          <ListItem
            sx={{
              display: "list-item",
              listStyleType: "decimal",
              pl: 0,
              pt: 0,
              pb: 0,
            }}
          >
            <ListItemText
              primary={dict["enable-commoditization.automated-with"]}
              primaryTypographyProps={{
                fontSize: "1.05rem",
                lineHeight: 1.85,
                color: "text.primary",
              }}
            />
            {/* Nested sub-list */}
            <List sx={{ pl: 5 }}>
              <ListItem
                sx={{
                  display: "list-item",
                  listStyleType: "decimal",
                  pl: 0,
                  pt: 0,
                  pb: 0,
                }}
              >
                <ListItemText
                  primary={dict["enable-commoditization.classical-software"]}
                  primaryTypographyProps={{ fontSize: "1.05rem" }}
                />
              </ListItem>
              <ListItem
                sx={{
                  display: "list-item",
                  listStyleType: "decimal",
                  pl: 0,
                  pt: 0,
                  pb: 0,
                }}
              >
                <ListItemText
                  primary={dict["enable-commoditization.ai"]}
                  primaryTypographyProps={{ fontSize: "1.05rem" }}
                />
              </ListItem>
              <ListItem
                sx={{
                  display: "list-item",
                  listStyleType: "decimal",
                  pl: 0,
                  pt: 0,
                  pb: 0,
                }}
              >
                <ListItemText
                  primary={dict["enable-commoditization.robots"]}
                  primaryTypographyProps={{ fontSize: "1.05rem" }}
                />
              </ListItem>
            </List>
          </ListItem>

          {/* Main point 3 */}
          <ListItem
            sx={{
              display: "list-item",
              listStyleType: "decimal",
              pl: 0,
              pt: 0,
              pb: 0,
            }}
          >
            <ListItemText
              primary={dict["enable-commoditization.final-assumption"]}
              primaryTypographyProps={{
                fontSize: "1.05rem",
                lineHeight: 1.85,
                color: "text.primary",
              }}
            />
          </ListItem>
        </List>
      </Paper>
    </>
  );
}
