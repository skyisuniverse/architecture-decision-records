// app/[lang]/adrs/generic-r&d-center-adr/decisions/enable-commoditization/page.tsx

// import type { Locale } from "@/i18n-config";
// import { getDictionary } from "@/app/[lang]/components/WithDictionary";
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

//   // Load global dictionary (products, services, applications, etc.)
//   const globalDict = await getDictionary(lang);

//   // Load colocated decision-specific dictionary (all other strings)
//   let decisionDict: Record<string, string> = {};
//   try {
//     // Renamed from `module` → `decisionModule` to satisfy Next.js ESLint rule
//     // @next/next/no-assign-module-variable
//     const decisionModule = await import(
//       `../../decisions-dictionaries/${lang}.json`
//     );
//     decisionDict = decisionModule.default || decisionModule;
//   } catch (err) {
//     console.warn(
//       "Could not load decision dictionary for enable-commoditization",
//     );
//   }

//   // Merge both dictionaries (decision keys take precedence)
//   const dict = { ...globalDict, ...decisionDict };

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

//         {/* === R&amp;D Center’s design and production approach === */}
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

//         {/* Numbered list */}
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
//                     {dict["products"]}
//                   </MuiNextLink>
//                   {", "}
//                   <MuiNextLink
//                     href="https://rd-center.vercel.app/services"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     underline="hover"
//                     sx={{ fontWeight: 500 }}
//                   >
//                     {dict["services"]}
//                   </MuiNextLink>
//                   {", "}
//                   <MuiNextLink
//                     href="https://rd-center.vercel.app/apps"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     underline="hover"
//                     sx={{ fontWeight: 500 }}
//                   >
//                     {dict["applications"]}
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

  // Load colocated decision-specific dictionary
  let decisionDict: Record<string, string> = {};
  try {
    const decisionModule = await import(
      `../../decisions-dictionaries/${lang}.json`
    );
    decisionDict = decisionModule.default || decisionModule;
  } catch (err) {
    console.warn(
      "Could not load decision dictionary for enable-commoditization",
    );
  }

  // Merge both dictionaries
  const dict = { ...globalDict, ...decisionDict };

  // Glossary link (same for all languages, anchors to the English term "Commodity")
  const glossaryHref = `/${lang}/glossary#Commodity`;

  // Word to be linked (different per language)
  const commoditizedWord = lang === "en" ? "commoditized" : "kommoditisiert";

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

        {/* === Commoditized sentence with link === */}
        <Typography
          variant="body1"
          sx={{
            fontSize: "1.1rem",
            lineHeight: 1.8,
            color: "text.primary",
          }}
        >
          {dict["enable-commoditization.conclusion"].split(commoditizedWord)[0]}
          <MuiNextLink
            href={glossaryHref}
            underline="hover"
            sx={{ fontWeight: 500 }}
          >
            {commoditizedWord}
          </MuiNextLink>
          {dict["enable-commoditization.conclusion"].split(commoditizedWord)[1]}
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

          {/* Main point 3 – final assumption with "commoditized" link */}
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
                  {
                    dict["enable-commoditization.final-assumption"].split(
                      commoditizedWord,
                    )[0]
                  }
                  <MuiNextLink
                    href={glossaryHref}
                    underline="hover"
                    sx={{ fontWeight: 500 }}
                  >
                    {commoditizedWord}
                  </MuiNextLink>
                  {
                    dict["enable-commoditization.final-assumption"].split(
                      commoditizedWord,
                    )[1]
                  }
                </>
              }
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
