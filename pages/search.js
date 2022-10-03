import Head from "next/head";
import { useRouter } from "next/router";
import Header from "../components/Header";
import SearchResults from "../components/SearchResults";
import Response from '../Response'

function Search({ results }) {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>{router.query.term} - Google Search</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <SearchResults results={results} />
    </div>
  );
}

export default Search;

export const getServerSideProps = async (context) => {
  // StaticData используется для предотвращения множества запросов, т.к. в бесплатной версии ограничение запросов = 100
  const useStaticData = true;
  const startIndex = context.query.start || "0";

  const data = useStaticData
    ? Response
    : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${process.env.NEXT_PUBLIC_API_KEY}&cx=${process.env.NEXT_PUBLIC_CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`,
      ).then((response) => response.json());
  return {
    props: {
      results: data,
    },
  };
};
