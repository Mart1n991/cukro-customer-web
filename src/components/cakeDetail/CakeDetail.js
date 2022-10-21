import { Button, Box, Checkbox, FormGroup, FormControlLabel, Grid, Typography, Card, CardContent, ListItem } from "@mui/material";
import Layout from "../layout/Layout";
import torta from "../../assets/Torty_1.jpg";

const CakeDetail = () => {
  return (
    <Layout>
      <Grid container spacing={5}>
        <Grid item xs={12} md={6} lg={4}>
          <Box sx={{ height: { xs: 300, md: 350 } }}>
            <img src={torta} alt="torta" style={{ height: "100%", width: "100%", objectFit: "cover" }} />
          </Box>
        </Grid>
        <Grid item xs={12} md={6} lg={8}>
          <Box>
            <Typography variant="h4" mb={2}>
              Malinová torta
            </Typography>
            {/** Basic information about cake */}
            <Box sx={{ display: "flex" }}>
              <Typography variant="body2" color="text.secondary" width={80}>
                Hmotnosť:
              </Typography>
              <Typography variant="body2" color="text.secondary">
                270 gramov
              </Typography>
            </Box>

            {/** Action that user can take: choose variants and amount */}
            <Box>
              <Typography variant="subtitle2">Ak ste na niečo intoleratný zvoľte jednu z možností</Typography>
              <FormGroup sx={{ display: "flex", flexDirection: "row" }}>
                <FormControlLabel
                  control={<Checkbox size="small" />}
                  label={<Typography variant="body2">Bezlepková</Typography>}
                />
                <FormControlLabel
                  control={<Checkbox size="small" />}
                  label={<Typography variant="body2">Bezlaktózová</Typography>}
                />
              </FormGroup>
            </Box>
          </Box>
          {/** Action that user can take: choose amount of product */}
          <Box mb={3}>
            <Typography variant="subtitle2">Množstvo</Typography>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Button variant="contained" color="info" size="small">
                -
              </Button>
              <Typography variant="subtitle2" mx={1}>
                20
              </Typography>
              <Button variant="contained" color="info" size="small">
                +
              </Button>
            </Box>
          </Box>
          <Button variant="contained">Pridať do objednávky</Button>
        </Grid>
        <Grid item xs={12}>
          <Card sx={{ backgroundColor: "pink", minWidth: 300, maxWidth: 500, maxHeight: 350, overflow: "auto" }}>
            <CardContent>
              <Typography variant="h6">Zloženie</Typography>
              <ListItem dense sx={{ display: "list-item", color: "text.secondary" }}>
                Biela múka
              </ListItem>
              <ListItem dense sx={{ display: "list-item", color: "text.secondary" }}>
                Biela múka
              </ListItem>
              <ListItem dense sx={{ display: "list-item", color: "text.secondary" }}>
                Biela múka
              </ListItem>
              <ListItem dense sx={{ display: "list-item", color: "text.secondary" }}>
                Biela múka
              </ListItem>
              <ListItem dense sx={{ display: "list-item", color: "text.secondary" }}>
                Biela múka
              </ListItem>
              <ListItem dense sx={{ display: "list-item", color: "text.secondary" }}>
                Biela múka
              </ListItem>
              <ListItem dense sx={{ display: "list-item", color: "text.secondary" }}>
                Biela múka
              </ListItem>
              <ListItem dense sx={{ display: "list-item", color: "text.secondary" }}>
                Biela múka
              </ListItem>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default CakeDetail;
