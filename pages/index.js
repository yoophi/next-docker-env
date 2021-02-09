import * as fs from "fs";

import getConfig from "next/config";
import ini from "ini";

export default function Home(props) {
  return <pre>{JSON.stringify(props, null, 2)}</pre>;
}

export const getServerSideProps = async () => {
  const { serverRuntimeConfig } = getConfig();
  const configFile = serverRuntimeConfig.projectIniConfig;
  let config = {};
  try {
    config = { ...config, ...ini.parse(fs.readFileSync(configFile, "utf-8")) };
  } catch (e) {
    console.log(e.message);
  }

  return {
    props: {
      projectDir: serverRuntimeConfig.projectDir,
      config: config,
    },
  };
};
