import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { useMemo } from "react";

export interface UserData {
  name: string;
  age: number;
  city: string;
  picture: string;
}

function useFetchData<Payload>(url: string): {
  allData: Payload | null;
  done: boolean;
} {
  const [allData, setAllData] = useState<Payload | null>(null);
  const [done, setDone] = useState(false);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data: Payload) => {
        setAllData(data);
        setDone(true);
      });
  }, [url]);

  return {
    allData,
    done,
  };
}

function CustomHooks() {
  const { allData, done } = useFetchData<UserData[]>("./users.json");
  const portlandTaps = useMemo(
    () => (allData || []).filter((bev) => bev.city.includes("Budapest")),
    [allData]
  );

  console.log(portlandTaps)

  // console.log(allData)
  return (
    <div>
      <Card sx={{ maxWidth: 345, pt: 3 }}>
        <CardActionArea>
          {done && (
            <CardMedia
              component="img"
              height="140"
              image={allData![0].picture}
              alt={allData![0].name}
              sx={{ objectFit: "contain" }}
            />
          )}
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {portlandTaps.length && portlandTaps![0].name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}

export default CustomHooks;
