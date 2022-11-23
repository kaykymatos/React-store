import { FormControlLabel, Grid, ListItem } from '@mui/material';
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
import './FooterSite.css';
import { DialogTitle } from '@mui/material';

export const FooterSite = () => {
  return (
    <Grid
      container
      maxWidth="xl"
      className="backgroud-footer"
      justifyContent="center"
      spacing={2}
    >
      <Grid item xs={10} sm={10} md={3} xl={3} lg={3}>
        <DialogTitle sx={{ py: 0, fontWeight: 'bold' }}>Contato</DialogTitle>
        <ListItem sx={{ py: 0 }}>
          <a href="">
            <FormControlLabel
              control={<LocalPhoneIcon />}
              label="Comercial:(11)11111-1111"
            />
          </a>
        </ListItem>
        <ListItem sx={{ py: 0 }}>
          <a href="">
            <FormControlLabel
              control={<LocalPhoneIcon />}
              label="Suporte:(11)11111-1111"
            />
          </a>
        </ListItem>
        <ListItem sx={{ py: 0 }}>
          <a href="">
            <FormControlLabel
              control={<EmailIcon />}
              label="storeapp.official@store.com"
            />
          </a>
        </ListItem>
        <ListItem sx={{ pt: 0 }}>
          <a href="">
            <FormControlLabel
              control={<WebIcon />}
              label="WerSite: www.store.com"
            />
          </a>
        </ListItem>
      </Grid>
      <Grid item xs={10} sm={10} md={2} xl={2} lg={2}>
        <DialogTitle sx={{ py: 0, fontWeight: 'bold' }}>
          Redes Sociais
        </DialogTitle>
        <ListItem sx={{ py: 0 }}>
          <a href="">
            <FormControlLabel control={<FacebookIcon />} label="Facebook" />
          </a>
        </ListItem>
        <ListItem sx={{ py: 0 }}>
          <a href="">
            <FormControlLabel control={<InstagramIcon />} label="Instagram" />
          </a>
        </ListItem>
        <ListItem sx={{ py: 0 }}>
          <a href="">
            <FormControlLabel control={<TwitterIcon />} label="Twitter" />
          </a>
        </ListItem>
        <ListItem sx={{ pt: 0 }}>
          <a href="">
            <FormControlLabel control={<LinkedInIcon />} label="LinkedIn" />
          </a>
        </ListItem>
      </Grid>

      <Grid item xs={10} sm={10} md={3} xl={3} lg={3}>
        <DialogTitle sx={{ py: 0, fontWeight: 'bold' }}>Geral</DialogTitle>
        <ListItem sx={{ py: 0 }}>
          <a href="">
            <FormControlLabel
              control={<AddLocationAltIcon />}
              label="Endereço"
            />
          </a>
        </ListItem>
        <ListItem sx={{ py: 0 }}>
          <a href="">
            <FormControlLabel control={<LocalOfferIcon />} label="Ofertas" />
          </a>
        </ListItem>
        <ListItem sx={{ py: 0 }}>
          <a href="">
            <FormControlLabel
              control={<ShopIcon />}
              label="Items Mais comprados"
            />
          </a>
        </ListItem>
        <ListItem sx={{ pt: 0 }}>
          <a href="">
            <FormControlLabel control={<AndroidIcon />} label="Aplicativo" />
          </a>
        </ListItem>
      </Grid>
    </Grid>
  );
};
