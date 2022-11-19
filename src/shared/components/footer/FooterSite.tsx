import { Box, FormControlLabel, Grid, ListItem, ListItemText, ListSubheader } from "@mui/material"
import EmailIcon from '@mui/icons-material/Email';
import WebIcon from '@mui/icons-material/Web';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import ShopIcon from '@mui/icons-material/Shop';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import AndroidIcon from '@mui/icons-material/Android';
import './FooterSite.css'

import { DialogTitle } from '@mui/material';
import { Link } from "react-router-dom";

export const FooterSite = () => {
    return (
        <Grid container maxWidth="xl"  className="backgroud-footer" justifyContent="center" spacing={2}>
            <Grid item xs={10} sm={10} md={3} xl={3} lg={3}>
                <DialogTitle sx={{ py: 0, fontWeight: 'bold' }}>
                    Contato
                </DialogTitle>
                <ListItem sx={{ py: 0 }}>
                    <Link to="/">
                        <FormControlLabel
                            control={<LocalPhoneIcon />}
                            label="Comercial:(11)11111-1111"
                        />
                    </Link>
                </ListItem>
                <ListItem sx={{ py: 0 }}>
                    <Link to="/">
                        <FormControlLabel
                            control={<LocalPhoneIcon />}
                            label="Suporte:(11)11111-1111"
                        />
                    </Link>
                </ListItem>
                <ListItem sx={{ py: 0 }}>
                    <Link to="/">
                        <FormControlLabel
                            control={<EmailIcon />}
                            label="storeapp.official@store.com"
                        />
                    </Link>
                </ListItem>
                <ListItem sx={{ pt: 0 }}>
                    <Link to="/">
                        <FormControlLabel
                            control={<WebIcon />}
                            label="WerSite: www.store.com"
                        />
                    </Link>
                </ListItem>
            </Grid>
            <Grid item xs={10} sm={10} md={2} xl={2} lg={2}>
                <DialogTitle sx={{ py: 0, fontWeight: 'bold' }}>
                    Redes Sociais
                </DialogTitle>
                <ListItem sx={{ py: 0 }}>
                    <Link to="/">
                        <FormControlLabel
                            control={<FacebookIcon />}
                            label="Facebook"
                        />
                    </Link>
                </ListItem>
                <ListItem sx={{ py: 0 }}>
                    <Link to="/">
                        <FormControlLabel
                            control={<InstagramIcon />}
                            label="Instagram"
                        />
                    </Link>
                </ListItem>
                <ListItem sx={{ py: 0 }}>
                    <Link to="/">
                        <FormControlLabel
                            control={<TwitterIcon />}
                            label="Twitter"
                        />
                    </Link>
                </ListItem>
                <ListItem sx={{ pt: 0 }}>
                    <Link to="/">
                        <FormControlLabel
                            control={<LinkedInIcon />}
                            label="LinkedIn"
                        />
                    </Link>
                </ListItem>

            </Grid>

            <Grid item xs={10} sm={10} md={3} xl={3} lg={3}>
                <DialogTitle sx={{ py: 0, fontWeight: 'bold' }}>
                    Geral
                </DialogTitle>
                <ListItem sx={{ py: 0 }}>
                    <Link to="/">
                        <FormControlLabel
                            control={<AddLocationAltIcon />}
                            label="Endereço"
                        />
                    </Link>
                </ListItem>
                <ListItem sx={{ py: 0 }}>
                    <Link to="/">
                        <FormControlLabel
                            control={<LocalOfferIcon />}
                            label="Ofertas"
                        />
                    </Link>
                </ListItem>
                <ListItem sx={{ py: 0 }}>
                    <Link to="/">
                        <FormControlLabel
                            control={<ShopIcon />}
                            label="Items Mais comprados"
                        />
                    </Link>
                </ListItem>
                <ListItem sx={{ pt: 0 }}>
                    <Link to="/">
                        <FormControlLabel
                            control={<AndroidIcon />}
                            label="Aplicativo"
                        />
                    </Link>
                </ListItem>
            </Grid>
        </Grid>
    )
}