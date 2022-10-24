import { Card, CardContent, ListItem, Typography } from "@mui/material";

const MaterialCard = ({ materials }) => {
  return (
    <Card sx={{ backgroundColor: "pink", minWidth: 300, maxWidth: 500, maxHeight: 350, overflow: "auto" }}>
      <CardContent>
        <Typography variant="h6">Zloženie</Typography>
        {materials.map((ingredient) => (
          <ListItem key={ingredient} dense sx={{ display: "list-item", color: "text.secondary" }}>
            {ingredient}
          </ListItem>
        ))}
      </CardContent>
    </Card>
  );
};

export default MaterialCard;
