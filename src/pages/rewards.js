import { graphql } from "gatsby";
import { Animation, Page, Section, Seo } from "gatsby-theme-portfolio-minimal";
import React from "react";

import { RewardsTabs } from "src/components/rewards/RewardsTabs";

export default function Rewards({ data }) {
  return (
    <>
      <Seo title="Rewards" />
      <Page useSplashScreenAnimation>
        <Animation type="fadeUp">
          <Section>
            <RewardsTabs data={data}/>
          </Section>
        </Animation>
      </Page>
    </>
  );
}

export const pageQuery = graphql`
  query pageQuery {
    allTeamLevelRewardsCsv {
      nodes {
        id
        teamLevel
        teamRep
        playersRecruited
        playerLevelRequirements
        metersTraveled
        creds
        starTokens
        cash
        xpWildcards
        energyDrinks
        rosterSlots
      }
    }
    allEncounterRewardsCsv {
      nodes {
        id
        teamLevel
        opponentTier
        credsToPlay
        teamRepUponWin
        credsUponWin
        playerXpUponWin
        replayCost
      }
    }
    allRuleTheCourtRewardsCsv {
      nodes {
        id
        wins
        teamRep
        starTokens
        cash
        creds
        timeRequired
      }
    }
    allWeeklyArenaTournamentRewardsCsv {
      nodes {
        id
        type
        when
        requireArenaPass
        playersAllowed
        winsRequired
        lossesToBeEliminated
        pointsToWin
        completionRings
        leaderBoardRings
      }
    }
    allDailyArenaTournamentRewardsCsv {
      nodes {
        id
        type
        when
        requireArenaPass
        playersAllowed
        winsRequired
        lossesToBeEliminated
        pointsToWin
        completionRings
        leaderBoardRings
      }
    }
    allDailyArenaTournamentRewardsByTeamLevelCsv {
      nodes {
        id
        teamLevel
        requireArenaPass
        thirdWinReward
        mondayBonus
        tuesdayBonus
        wednesdayBonus
        thursdayBonus
        fridayBonus
        saturdayBonus
        sundayBonus
      }
    }
    allPracticeCourtRewardsCsv {
      nodes {
        id
        teamLevel
        type
        playerXpVsStarter
        playerXpVsAllStar
        playerXpVsAllWorld
      }
    }
    allOneOnOneRewardsCsv {
      nodes {
        id
        teamLevel
        type
        ladderPosition
        credsToPlay
        credsUponWin
        teamRepUponWinVsStarter
        playerXpUponWinVsStarter
        teamRepUponWinVsAllStar
        playerXpUponWinVsAllStar
        teamRepUponWinVsAllWorld
        playerXpUponWinVsAllWorld
      }
    }
  }
`;