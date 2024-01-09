import React, { useState, useEffect } from "react";
import { API, graphqlOperation } from "aws-amplify";
import BlogCard from "./blog_cards/BlogCard";

import ScoreCardModule from "./modals/SS";
import { Helmet } from "react-helmet";


function Scorecard() {
  const [posts, setPosts] = useState([]);

  return (
    <div className="scorecard" style={{ paddingBottom: 100 }}>
      <Helmet>
        <title>Scorecard - roostgame.com</title>
        <meta
          name="description"
          content="The home of all Roost related updates"
        />
      </Helmet>
      <div class="container">

        <div style={{ width: "100%", padding: 5, paddingTop: 20 }}>
          <ScoreCardModule></ScoreCardModule>
        </div>
        <p style={{padding: 5, fontStyle: 'italic'}}>
        Select a player by clicking on their name, then utilize the score buttons on the side to modify their points
        </p>
      </div>
    </div>
  );
}

export default Scorecard;
