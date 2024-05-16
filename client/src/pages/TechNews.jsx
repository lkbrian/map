import React from "react";
import { Box, Text, Image, Heading } from "@chakra-ui/react";
import {Link} from 'react-router-dom'

function TechNews() {
  const articles = [
    {
      author: "Lauren Forristal",
      title:
        "Bye-bye bots: Altera's game-playing AI agents get backing from Eric Schmidt",
      description:
        "Autonomous, AI-based players are coming to a gaming experience near you, and a new startup, Altera, is joining the fray to build this new guard of AI Research company Altera raised $9 million to build AI agents that can play video games alongside other player…",
      url: "https://techcrunch.com/2024/05/08/bye-bye-bots-alteras-game-playing-ai-agents-get-backing-from-eric-schmidt/",
      urlToImage:
        "https://techcrunch.com/wp-content/uploads/2024/05/Minecraft-keyart.jpg?resize=1200,720",
      publishedAt: "2024-05-08T15:14:57Z",
      content:
        "Autonomous, AI-based players are coming to a gaming experience near you, and a new startup, Altera, is joining the fray to build this new guard of AI agents.\r\nThe company announced Wednesday that it …",
    },
    {
      author: "Alex Wilhelm and Theresa Loconsolo",
      title:
        "$450M for Noname, two billion-dollar rounds, and good news for crypto startups",
      description:
        "This morning on Equity, not only do we have good news for crypto founders, we're also digging into Akamai spending $450 million for API security firm Noname, and billion dollar deals from Wiz and Wayve.",
      url: "https://techcrunch.com/2024/05/08/450m-for-noname-two-billion-dollar-rounds-and-good-news-for-crypto-startups/",
      urlToImage:
        "https://techcrunch.com/wp-content/uploads/2023/07/GettyImages-942480316.jpg?resize=1200,835",
      publishedAt: "2024-04-14T15:01:51Z",
      content:
        "Good news, crypto founders: Venture capital activity is picking up in your sector after falling to multi-year lows in late 2023. Put another way, venture folks appear more web3-bullish than before, e…",
    },
    {
      author: "Alex Wilhelm",
      title: "Watch: When did iPads get as expensive as MacBooks?",
      description:
        "Would you switch out your MacBook for an iPad with an M4 chip and OLED display? With the increase in price, Apple seems to be arguing these are comparable but we’re curious to see if consumers will make the change.",
      url: "https://techcrunch.com/2024/05/08/techcrunch-minute-when-did-ipads-get-as-expensive-as-macbooks/",
      urlToImage:
        "https://techcrunch.com/wp-content/uploads/2024/05/ipad-noplay.png?resize=1200,675",
      publishedAt: "2024-03-27T14:52:26Z",
      content:
        "Apple’s iPad event had a lot to like. New iPads with new chips and new sizes, a new Apple Pencil, and even some software updates. If you are a big fan of Apple hardware, well, it was probably a good …",
    },
    {
      author: "Rebecca Bellan",
      title:
        "Uber promises member exclusives as Uber One passes $1B run-rate",
      description:
        "Uber plans to deliver more perks to Uber One members, like member-exclusive events, in a bid to gain more revenue through subscriptions.  “You will see",
      url: "https://techcrunch.com/2024/05/08/uber-promises-member-exclusives-as-uber-one-passes-1b-run-rate/",
      urlToImage:
        "https://techcrunch.com/wp-content/uploads/2023/05/GettyImages-1142304853-a.jpg?resize=1200,675",
      publishedAt: "2024-02-26T14:41:36Z",
      content:
        "Uber plans to deliver more perks to Uber One members, like member-exclusive events, in a bid to gain more revenue through subscriptions. \r\nYou will see more member-exclusives coming up where members … ",
    },
    {
      author: "Mike Butcher",
      title:
        "Checkfirst raises $1.5M pre-seed, applying AI to remote inspections and audits",
      description:
        "Checkfirst enables businesses to schedule inspectors based on geographical location and qualifications, in addition to allowing for remote inspections.",
      url: "https://techcrunch.com/2024/05/08/checkfirst-raises-1-5m-pre-seed-applying-ai-to-remote-inspections-and-audits/",
      urlToImage:
        "https://techcrunch.com/wp-content/uploads/2024/05/Checkfirst-team.jpg?w=960",
      publishedAt: "2024-05-08T13:02:12Z",
      content:
        "Weve all seen them. The inspector with a clipboard, walking around a building, ticking off the last time the fire extinguishers were checked, or if all the lights are working. They work in the TICC (…",
    },
    {
      author: "Paul Sawers",
      title:
        "UK challenger bank Monzo nabs another $190M as US expansion beckons",
      description:
        "Monzo has raised another $190 million, as the challenger bank looks to expand its presence internationally — particularly in the U.S.",
      url: "https://techcrunch.com/2024/05/08/uk-challenger-bank-monzo-nabs-another-190m-at-5-2b-valuation/",
      urlToImage:
        "https://techcrunch.com/wp-content/uploads/2024/05/GettyImages-1259121938-e1715164252704.jpg?resize=1200,676",
      publishedAt: "2024-04-06T12:34:05Z",
      content:
        "Monzo has raised another £150 million ($190 million), as the challenger bank looks to expand its presence internationally particularly in the U.S.\r\nThe new round comes just two months after Monzo rai…",
    },
    {
      author: "Brian Heater",
      title: "iRobot names former Timex head Gary Cohen as CEO",
      description:
        "iRobot Tuesday announced the successor to longtime CEO, Colin Angle. Gary Cohen, who previous held chief executive role at Timex and Qualitor Automotive,",
      url: "https://techcrunch.com/2024/05/08/irobot-names-former-timex-head-gary-cohen-as-ceo/",
      urlToImage:
        "https://techcrunch.com/wp-content/uploads/2024/05/Screenshot-2024-05-08-at-7.19.50\u202fAM.jpg?resize=1200,919",
      publishedAt: "2024-01-18T12:22:30Z",
      content:
        "iRobot Tuesday announced the successor to longtime CEO, Colin Angle. Gary Cohen, who previous held chief executive role at Timex and Qualitor Automotive, will be heading up the company, marking a maj…",
    },
    {
      author: "Devin Coldewey",
      title:
        "Google Deepmind debuts huge AlphaFold update and free proteomics-as-a-service web app",
      description:
        "Google Deepmind has taken the wraps off a new version AlphaFold, their transformative machine learning model that predicts the shape and behavior of",
      url: "https://techcrunch.com/2024/05/08/google-deepmind-debuts-huge-alphafold-update-and-free-proteomics-as-a-service-web-app/",
      urlToImage:
        "https://techcrunch.com/wp-content/uploads/2024/05/alphafold-3-deepmind.jpg?resize=1200,675",
      publishedAt: "2024-05-07T22:10:14Z",
      content:
        "Google Deepmind has taken the wraps off a new version AlphaFold, their transformative machine learning model that predicts the shape and behavior of proteins. AlphaFold 3 is not only more accurate, b…",
    },
    {
      author: "Tim De Chant",
      title:
        "Mycocycle uses mushrooms to upcycle old tires and construction waste",
      description:
        "The startup's fungi use their mycelium to consume oil-based rubbers and plastics, creating new bio-based materials in the process.",
      url: "https://techcrunch.com/2024/05/08/mycocycle-uses-mushrooms-to-upcycle-old-tires-and-construction-waste/",
      urlToImage:
        "https://techcrunch.com/wp-content/uploads/2024/05/GettyImages-1350655821.jpeg?resize=1200,796",
      publishedAt: "2024-05-07T18:07:09Z",
      content:
        "Usually, when something starts to rot, it gets pitched in the trash. But Joanne Rodriguez wants to turn the concept of rot on its head by growing fungus on trash to turn it into something better.\r\nWe…",
    },
    {
      author: "Kyle Wiggers",
      title:
        "Controversial drone company Xtend leans into defense with new $40M round",
      description:
        "Xtend, a drone company heavily involved with defense customers, has raised a new round of capital to expand its operations.",
      url: "https://techcrunch.com/2024/05/08/controversial-drone-company-xtend-leans-into-defense/",
      urlToImage:
        "https://techcrunch.com/wp-content/uploads/2024/05/wildfire_drone_web.jpg?w=900",
      publishedAt: "2024-05-07T18:01:34Z",
      content:
        "Close to a decade ago, brothers Aviv and Matteo Shapira co-founded Replay, a company that created a video format for 360-degree replays — the sorts of replays that have become part and parcel of majo…",
    },
  ];

  return (
    <Box px={{ base: 5, md: 50 }} py={{ base: 5, md: 50 }}mt={'50px'}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-auto gap-8">
        {articles.map((article, index) => (
          <Box
            key={index}
            position={"relative"}
            className="shadow-[rgba(0, 0, 0, 0.24) 0px 3px 8px]  rounded-[.8rem] bg-[#101F3C] text-[#fff]"
          >
            <Box h={{base:'30%',sm:"35%",md:'40%',lg:'50%'}}>
              <Image
                borderTopRadius={".8rem"}
                src={article.urlToImage}
                boxSize="100%"
                objectFit="cover"
              />
            </Box>
            <Box className="p-4">
              <Heading
                fontSize={{ base: "1.15rem", md: "1.35rem" }}
                fontWeight="bold"
                className=""
                color={'#fa510f'}
              >
                {article.title}
              </Heading>

              <Text
                pb={10}
                letterSpacing={1}
                fontSize={{ base: ".9rem", md: "1rem" }}
              >
                {article.content}{" "}                              
                <Text
                  as={Link}
                  to={article.url}
                  color={"#Fa510f"}
                  className="hover:underline underline-offset-1 "
                  
                >
                  {" "}
                  Read article
                </Text>
              </Text>

              <Text
                fontSize=".94rem"
                fontWeight={"bold"}
                color={"#FA510F"}
                bottom={1}
                position={"absolute"}
              >
                {new Date(article.publishedAt).toLocaleString()}
                <br />
                <Text as={"sup"} fontWeight={"normal"} color={"#fff"}>
                  Author: {article.author}
                </Text>
              </Text>
            </Box>
          </Box>
        ))}
      </div>
    </Box>
  );
}

export default TechNews;
