import React from "react";
import CompetitionsStandings from "../competitions/standings/page";
import CompetitionLayout from "../competitions/layout";
import MSignin from "./MSignin";



function Main() {
  return (
    <>
    <section>
    <CompetitionLayout>
    <CompetitionsStandings/>
    </CompetitionLayout>
  </section>

    </>
  )
}

export default Main;
