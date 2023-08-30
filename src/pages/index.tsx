import { getMonsters } from "@/services/monters";
import { MonsterModel } from "@/models/monsterModel";
import { useState } from "react";

type PagePropsTypes = {
  monsters: MonsterModel[];
};

export default function Index({ monsters }: PagePropsTypes) {
  const [searchFilter, setSearchFilter] = useState<string>("");

  function onSearchInput(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchFilter(event.target.value);
  }

  return (
    <div>
      <h1>Welcome to my blog!</h1>
      <h2>Here are my posts:</h2>
      <input value={searchFilter} onChange={onSearchInput} />
      <div>
        {monsters
          .filter((monster) => monster.name.includes(searchFilter))
          .map((monster) => (
            <div key={monster.slug}>
              <h3>{monster.name}</h3>
              <p>{`+${Object.keys(monster.skills).length} SKILLS|${monster.actions.length} ACTIONS`}</p>
            </div>
          ))}
      </div>
    </div>
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
  return { props: { monsters: monstersResponse.data } };
};
