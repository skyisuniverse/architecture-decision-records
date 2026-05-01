import { ADRHeader } from '@/app/[lang]/components/ADRHeader';
import { Box, Link } from '@mui/material';
import Typography from '@mui/material/Typography';

export default async function Page() {
    return(
        <>
            <ADRHeader />
            <Box>
                <Typography variant="h6" sx={{ marginBottom: 2 }}>
                    <Link 
                        href="https://rd-center.vercel.app/spacex/nano-assembly-starship/starship-nano-assembly"
                        color="inherit"
                        target="_blank"
                        sx={{ marginBottom: 2 }}
                        >
                        Starship Nano-Assembly
                    </Link>
                </Typography>

                <Typography variant="h6" sx={{ marginBottom: 2 }}>
                    3. Bottom-Up Component Assembly
                </Typography>

                <Typography sx={{ marginBottom: 2 }}>
                    - Structural Skeleton: Nanobots start at the base, assembling the cylindrical 
                    body from stainless steel alloys atom by atom. They form molecular chains of iron, 
                    carbon, and chromium, cross-linking them into sheets that self-curve into the 
                    9-meter-diameter tank sections. This bottom-up approach ensures flawless welds—no seams 
                    or weak points, as the material is grown continuously.
                </Typography>

                <Typography sx={{ marginBottom: 2 }}>
                    - Engine Integration: Simultaneously, specialized bot teams construct the 33 Raptor 
                    engines. For each, they assemble turbopumps from high-strength alloys, combustion chambers 
                    from heat-resistant rhenium or ceramics, and nozzles with embedded cooling channels. Atoms 
                    are placed with picometer precision to optimize thrust and efficiency. Wiring and plumbing 
                    (e.g., methane/oxygen lines) are woven in as molecular conduits.
                </Typography>

                <Typography sx={{ marginBottom: 2 }}>
                    - Tank and Insulation: The massive fuel tanks are built with layered walls: inner 
                    liners for cryogenic containment, insulation foams grown from polymer precursors, and 
                    outer skins reinforced with carbon nanotubes for strength. Bots could embed sensors 
                    directly into the material for real-time structural health monitoring.
                </Typography>

                <Typography sx={{ marginBottom: 2 }}>
                    - Engines and Systems: Six Raptor engines (three sea-level, three vacuum-optimized) are 
                    built in parallel. Avionics bays get populated with quantum chips and wiring harnesses grown 
                    from conductive nanomaterials. Solar panels and batteries are assembled from photovoltaic 
                    molecules and lithium-ion lattices.
                </Typography>

                <Typography sx={{ marginBottom: 2 }}>
                    - Interior Features: For crewed variants, bots could furnish habitats: assembling bunks, 
                    life support systems (e.g., oxygen recyclers from catalytic membranes), and even food 
                    printers from molecular extruders.
                </Typography>

                <Typography sx={{ marginBottom: 2 }}>
                    Throughout, assembly happens in a massively parallel fashion. Imagine a shimmering "fog" of 
                    nanobots swarming over the structure, adding layers at rates of billions of atoms per second 
                    per bot. Energy is supplied via beamed power or chemical fuels converted on-site.
                </Typography>
            </Box>
        </>
    )
}