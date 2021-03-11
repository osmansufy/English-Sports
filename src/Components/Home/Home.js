import React, { useEffect, useState } from "react";
import Container from "@material-ui/core/Container";
import bannerImg from "../../assets/images/banner.png";
import axios from "axios";
import SingleLeague from "../Leagues/SingleLeague";
import Grid from "@material-ui/core/Grid";
const Home = () => {
  const [leagues, setAllLeagues] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://www.thesportsdb.com/api/v1/json/1/search_all_leagues.php?c=England"
      )
      .then((res) => {
        console.log(res);
        setAllLeagues(res?.data?.countrys);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      <React.Fragment>
        <Container
          style={{
            backgroundImage: `url(${bannerImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "relative",
            padding: "0",
          }}
          maxWidth={false}
        >
          <div className="overContainer"></div>
          <div className="banner-content">
            <h2>All About England Sports </h2>
          </div>
        </Container>
        {/* <img src={bannerImg} alt=""/> */}
        <Container>
          <Grid container style={{ margin: "40px 0" }} spacing={3}>
            {leagues?.map((league) => (
              <Grid
                className="w-100"
                spacing={1}
                item
                key={league.idLeague}
                md={4}
              >
                <SingleLeague data={league} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </React.Fragment>
    </div>
  );
};

export default Home;
