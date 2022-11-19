import { Box, FormControlLabel, Grid, ListItem, ListItemText } from "@mui/material"
import EmailIcon from '@mui/icons-material/Email';
import WebIcon from '@mui/icons-material/Web';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import StoreMallDirectoryIcon from '@mui/icons-material/StoreMallDirectory';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import ShopIcon from '@mui/icons-material/Shop';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import AndroidIcon from '@mui/icons-material/Android';
import './FooterSite.css'

export const FooterSite = () => {
    return (
        <Box className="backgroud-footer" maxWidth="xl"  >
            <Grid container justifyContent="center" spacing={2}>
                <Grid item  xs={6} sm={6} md={3} xl={3} lg={3}>
                    <ListItem sx={{ pt: 0, pb: 0 }}>
                        <FormControlLabel
                            control={<LocalPhoneIcon />}
                            label="Comercial:(11)11111-1111"
                        />
                    </ListItem>
                    <ListItem sx={{ pt: 0, pb: 0 }}>
                        <FormControlLabel
                            control={<LocalPhoneIcon />}
                            label="Suporte:(11)11111-1111"
                        />
                    </ListItem>
                    <ListItem sx={{ pt: 0, pb: 0 }}>
                        <FormControlLabel
                            control={<EmailIcon />}
                            label="E-mail:storeapp.official@store.com"
                        />
                    </ListItem>
                    <ListItem sx={{ pt: 0, pb: 2 }}>
                        <FormControlLabel
                            control={<WebIcon />}
                            label="WerSite: www.store.com"
                        />
                    </ListItem>

                </Grid>

                <Grid item xs={6} sm={6} md={2} xl={2} lg={2}>
                    <ListItem sx={{ pt: 0, pb: 0 }}>
                        <FormControlLabel
                            control={<FacebookIcon />}
                            label="Facebook"
                        />
                    </ListItem>
                    <ListItem sx={{ pt: 0, pb: 0 }}>
                        <FormControlLabel
                            control={<InstagramIcon />}
                            label="Instagram"
                        />
                    </ListItem>
                    <ListItem sx={{ pt: 0, pb: 0 }}>
                        <FormControlLabel
                            control={<TwitterIcon />}
                            label="Twitter"
                        />
                    </ListItem>
                    <ListItem sx={{ pt: 0, pb: 2 }}>
                        <FormControlLabel
                            control={<LinkedInIcon />}
                            label="LinkedIn"
                        />
                    </ListItem>

                </Grid>

                <Grid item xs={6} sm={6} md={2} xl={2} lg={2}>
                    <ListItem sx={{ pt: 0, pb: 0 }}>
                        <FormControlLabel
                            control={<AddLocationAltIcon />}
                            label="AddrEndereço"
                        />
                    </ListItem>
                    <ListItem sx={{ pt: 0, pb: 0 }}>
                        <FormControlLabel
                            control={<LocalOfferIcon />}
                            label="Ofertas"
                        />
                    </ListItem>
                    <ListItem sx={{ pt: 0, pb: 0 }}>
                        <FormControlLabel
                            control={<ShopIcon />}
                            label="Items Mais comprados"
                        />
                    </ListItem>
                    <ListItem sx={{ pt: 0, pb: 2 }}>
                        <FormControlLabel
                            control={<AndroidIcon />}
                            label="Aplicativo"
                        />
                    </ListItem>

                </Grid>


            </Grid>


        </Box>
    )
}