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
                        href="https://rd-center.vercel.app/xai/grok-cad"
                        color="inherit"
                        target="_blank"
                        sx={{ marginBottom: 2 }}
                        >
                        Grok CAD (knowledge base)
                    </Link>
                </Typography>

                <Typography variant="h6" sx={{ marginBottom: 2 }}>
                    <Link 
                        href="https://rd-cad.vercel.app"
                        color="inherit"
                        target="_blank"
                        sx={{ marginBottom: 2 }}
                        >
                        Grok CAD (RD CAD) (web-app)
                    </Link>
                </Typography>

                <Typography variant="h6" sx={{ marginBottom: 2 }}>
                    <Link 
                        href="https://x.com/i/grok/share/5566571cea454c29b5546c566b506528"
                        color="inherit"
                        target="_blank"
                        sx={{ marginBottom: 2 }}
                        >
                        Conversation with Grok: Web-based CAD Tool
                    </Link>
                </Typography>

                <Typography variant="body1" gutterBottom marginTop={5}>
                    CAD UIs are very "desktop application" like, so MUI shines here.
                </Typography>

                <Typography variant="h6" gutterBottom marginTop={5}>
                    AppBar + Toolbar (top menubar)
                </Typography>

                <Typography variant="body1" gutterBottom marginTop={5}>
                    AppBar (position="sticky", color="default") for the main title bar.
                </Typography>

                <Typography variant="body1" gutterBottom marginTop={5}>
                   Inside: Logo + Menu components for File / Edit / View / Tools / Help (exactly like the menubar example you linked).
                </Typography>

                <Typography variant="body1" gutterBottom marginTop={5}>
                    File menu → New, Open, Save, Export (STEP, glTF, STL), Import.
                </Typography>

                <Typography variant="body1" gutterBottom marginTop={5}>
                    Edit → Undo/Redo (with keyboard shortcuts via useHotkeys).
                </Typography>

                <Typography variant="body1" gutterBottom marginTop={5}>
                    View → Toggle side panels, orthographic/perspective, grid, etc.
                </Typography>

                <Typography variant="h6" gutterBottom marginTop={5}>
                    Toolbar (icon strip under the menu)
                </Typography>

                <Typography variant="body1" gutterBottom marginTop={5}>
                    Toolbar with IconButton + Tooltip for: Select, Line, Rectangle, Circle, Extrude, Revolve, Fillet, etc.
                </Typography>

                <Typography variant="body1" gutterBottom marginTop={5}>
                    Group them with ButtonGroup or ToggleButtonGroup for modes (sketch vs model vs assembly).
                </Typography>

                <Typography variant="h6" gutterBottom marginTop={5}>
                    Drawer (left & right sidebars)
                </Typography>

                <Typography variant="h6" gutterBottom marginTop={5}>
                    Permanent or Persistent Drawer on the left: Feature tree / browser / layers.
                </Typography>

                <Typography variant="body1" gutterBottom marginTop={5}>
                    Use MUI X TreeView (with TreeItem) for the parametric feature history (very common in CAD).
                </Typography>

                <Typography variant="h6" gutterBottom marginTop={5}>
                    Right drawer: Properties panel.
                </Typography>
                
                <Typography variant="body1" gutterBottom marginTop={5}>
                    Paper + Accordion sections (Dimensions, Constraints, Material, Appearance).
                </Typography>
                
                <Typography variant="body1" gutterBottom marginTop={5}>
                    Inside: TextField, Select, Slider, Switch, ColorPicker (MUI has one), Autocomplete for references.
                </Typography>
                
                <Typography variant="h6" gutterBottom marginTop={5}>
                    Dialog / Modal
                </Typography>
                
                <Typography variant="body1" gutterBottom marginTop={5}>
                    File open/save dialogs, export options, settings, material library.
                </Typography>

                <Typography variant="h6" gutterBottom marginTop={5}>
                    Snackbar + Alert
                </Typography>
                
                <Typography variant="body1" gutterBottom marginTop={5}>
                    "Model regenerated", "Export successful", errors from kernel.
                </Typography>

                <Typography variant="h6" gutterBottom marginTop={5}>
                    SpeedDial (floating action button)
                </Typography>
                
                <Typography variant="body1" gutterBottom marginTop={5}>
                    For quick access to common tools on mobile/tablet (nice-to-have).
                </Typography>

                <Typography variant="h6" gutterBottom marginTop={5}>
                    Tabs (if multi-document)
                </Typography>
                
                <Typography variant="body1" gutterBottom marginTop={5}>
                    Inside a tab bar for multiple open parts/assemblies.
                </Typography>

                <Typography variant="h6" gutterBottom marginTop={5}>
                    Menu / MenuList / MenuItem
                </Typography>
                
                <Typography variant="body1" gutterBottom marginTop={5}>
                    Context menu on right-click in viewport (copy, paste, delete, constraints).
                </Typography>

                <Typography variant="body1" gutterBottom marginTop={5}>
                    Popover or Menu for dropdown tool options (e.g., extrude depth presets).
                </Typography>

                <Typography variant="body1" gutterBottom marginTop={5}>
                    Divider, List, ListItem, Chip everywhere in side panels.
                </Typography>

                <Typography variant="body1" gutterBottom marginTop={5}>
                    Backdrop + custom loading when regenerating heavy geometry.
                </Typography>

                <Typography variant="h6" gutterBottom marginTop={5}>
                    Layout: MUI Grid
                </Typography>

                <Typography variant="body1" gutterBottom marginTop={5}>
                    Top: AppBar
                </Typography>

                <Typography variant="body1" gutterBottom marginTop={5}>
                    Left: Drawer
                </Typography>

                <Typography variant="body1" gutterBottom marginTop={5}>
                    Center: {`<Canvas>`} from R3F (full height/width)
                </Typography>

                <Typography variant="body1" gutterBottom marginTop={5}>
                    Right: Drawer
                </Typography>

                <Typography variant="body1" gutterBottom marginTop={5}>
                    Bottom: optional status bar (custom {'<Box>'} with coords, units, etc.)
                </Typography>

            </Box>
        </>
    )
}