import { ADRHeader } from '@/app/[lang]/components/ADRHeader';
import { Link } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default async function Page() {
    return(
        <>
            <ADRHeader />
            <Box>
                <Typography variant="h6" sx={{ marginBottom: 2 }}>
                    <Link 
                        href="https://rd-center.vercel.app/spacex/instantly-reusable-launchpad/scientific-breakthroughs-for-nano-assembled-launch-pad-for-starships"
                        color="inherit"
                        target="_blank"
                        sx={{ marginBottom: 2 }}
                        >
                        Scientific breakthroughs for Instantly Reusable Launchpad
                    </Link>
                </Typography>

                <Typography variant="h6" sx={{ marginBottom: 2 }}>
                    3. Advanced Materials: Diamondoid Structures and Phonon Metamaterials
                </Typography>

                <Typography sx={{ marginBottom: 2 }}>
                    The pad's indestructible cover layer and flame trench demand materials with extreme properties, like zero thermal erosion and infinite fatigue life.
                </Typography>

                <Typography sx={{ marginBottom: 2 }}>
                    - Defect-Free Diamondoid Synthesis and Self-Assembly: Diamondoids (e.g., adamantane) currently form nanowires or small aggregates via functional groups. Breakthroughs would enable micrometer-scale, atomically perfect lattices, perhaps through Monte Carlo-guided self-assembly influenced by rigidity and substituents. For BNNT-diamondoid hybrids, advances in covalent bonding at scale are needed for strengths {'>'}1 GPa and melting points {'>'}4,000°C.
                </Typography>

                <Typography sx={{ marginBottom: 2 }}>
                    - Phonon-Engineered Metamaterials for Thermal Management: To achieve zero-damage, materials must redirect phonons (heat vibrations) without loss. Current phonon crystals reduce conductivity in SiC nanowires; breakthroughs include non-equilibrium phonon polaritons for 3x copper's conductivity, and metamaterials with tailored anisotropy for bidirectional heat flow. This requires quantum-informed design to convert heat to electricity or vibrations harmlessly.
                </Typography>
            </Box>
        </>
    )
}