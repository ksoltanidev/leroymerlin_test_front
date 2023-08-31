import { getMonsters } from "@/services/monters";
import { MonsterModel } from "@/models/monsterModel";
import { useState } from "react";
import {
  StyledEmptySearchContainer,
  StyledMonsterText,
  StyledPageContainer,
  StyledSearchContainer,
  StyledSeparator,
  StyledWarningContainer,
} from "@/styles/index.style";

type PagePropsTypes = {
  monsters: MonsterModel[];
};

export default function Index({ monsters }: PagePropsTypes) {
  const [searchFilter, setSearchFilter] = useState<string>("");

  function onSearchInput(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchFilter(event.target.value);
  }

  /**
   * get Random number between -20 and 20
   */
  function getRandomNumber() {
    return Math.floor(Math.random() * 50) - 25;
  }

  const filteredMonsters = monsters.filter((monster) => monster.name.includes(searchFilter));
  return (
    <StyledPageContainer>
      <h1>D&D Bestiary</h1>
      <StyledSearchContainer>
        <h2>Search for a monster</h2>
        <input value={searchFilter} onChange={onSearchInput} placeholder="Aboleth" />
      </StyledSearchContainer>
      <div>
        {filteredMonsters.length > 0 ? (
          filteredMonsters.map((monster) => (
            <div key={monster.slug}>
              <StyledMonsterText>
                <h3>{monster.name}</h3>
                <span>{`+${Object.keys(monster.skills).length} SKILLS|${monster.actions.length} ACTIONS`}</span>
              </StyledMonsterText>
              <StyledSeparator randomGradientValue={getRandomNumber()} />
            </div>
          ))
        ) : (
          <StyledEmptySearchContainer>
            <StyledWarningContainer>Warning</StyledWarningContainer>
            <p>Oups ! Il semble que votre monstre ne soit pas dans notre liste</p>
          </StyledEmptySearchContainer>
        )}
      </div>
    </StyledPageContainer>
  );
}

export const getServerSideProps = async () => {
  const monstersResponse = await getMonsters();
  if (!monstersResponse.ok) {
    return {
      redirect: {
        destination: "/500",
        permanent: true,
      },
    };
  }
  if (!monstersResponse.data) {
    return {
      notFound: true,
    };
  }
  const sortedMonsters = monstersResponse.data.sort((a, b) =>
    Object.keys(b.skills).length > Object.keys(a.skills).length ? 1 : -1,
  );
  return { props: { monsters: sortedMonsters } };
};
