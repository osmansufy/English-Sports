import { Container } from '@material-ui/core';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Grid from '@material-ui/core/Grid';
import maleIng from '../../assets/images/male.png'
import femaleImg from '../../assets/images/female.png'
import facebookIcon from '../../assets/images/Icon/Facebook.png'
import twitterIcon from '../../assets/images/Icon/Twitter.png'
import youTubeIcon from '../../assets/images/Icon/YouTube.png'
import LanguageIcon from '@material-ui/icons/Language';
import { Link } from 'react-router-dom';
const LeagueDetails = () => {
    const [legueDetails,setLeagueDetails]=useState([])
    let { id } = useParams();
    useEffect(()=>{
axios.get(`https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${id}`)
.then(res=>
   {
       console.log(res);
        setLeagueDetails(res?.data?.leagues[0])
    
    }
    
    )
.catch(err=>console.log(err))},[]
    )
    const gender=legueDetails?.strGender
const twitterLink=legueDetails?.strTwitter
console.log(twitterLink);
    return (
        <div>
                <Container style={{
                    backgroundImage:`url(${legueDetails?.strFanart1})`,
                    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
    padding: "0",
                    }} maxWidth={false}>
    <div className="overContainer">

    </div>
    <div className="bannerImg-container">
    <img src={legueDetails.strLogo} alt=""/>
    </div>
        
        </Container> 
            <Container maxWidth="md">
            <Grid style={{ backgroundColor: '#cfe8fc',    margin: "40px 0" }} container spacing={1}>
  <Grid className="leagueDetails" container item md={6} >
      <h3>{legueDetails?.strLeague}</h3>
<ul>
   
    <li>
    <i className="fa fa-podcast"></i>
    Date First Event:{legueDetails.dateFirstEvent}
    </li>
    <li>
    <i className="fa fa-podcast"></i>
    Founded:{legueDetails.intFormedYear}
    </li>
    <li>
    <i className="fa fa-flag"></i><span>Country:{legueDetails.strCountry}</span>
    </li>
    <li>
    <i className="fa fa-podcast"></i>
    <span>Sports type:{legueDetails.strSport}</span>
    </li>
    <li>
    <i className="fa fa-mars-stroke"></i> <span>Gender:{legueDetails.strGender}</span>
    </li>
</ul>
 
  </Grid>
  <Grid container style={{justifyContent:"flex-end"}} item md={6} >
 <div className="img-container">
     {
gender=="Male"?<img style={{width:"100%" ,height:"100%"}} src={maleIng}/>:<img style={{width:"100%" ,height:"100%"}} src={femaleImg}/>
     }
 
 </div>
  </Grid>

</Grid>
<p>
               {legueDetails?.strDescriptionEN}
            </p>

</Container>
            
            <div className="social-log">
                <Link className="webIcon" to={{pathname: `https://${legueDetails?.strWebsite}`}} target="_blank"  >
                <LanguageIcon  color="inherit" fontSize="large"/>
                </Link>
                <Link to={{ pathname: `https://${twitterLink}` }} target="_blank" >
                    <img src={twitterIcon} alt=""/></Link>
                    <Link to={{ pathname: `https://${legueDetails?.strYoutube}` }} target="_blank">
                    <img src={youTubeIcon} alt=""/>
                    </Link>
            
             
            </div>
        </div>
    );
};

export default LeagueDetails;