// import Layout from "../layouts/Layout.jsx";
// import UltContainer from "../components/ult/UltContainer.astro";
// import ErrorDisplay from "../components/ErrorDisplay.astro";
// import { apiCall, tryConnection } from "../helpers/index";

// const connected = await tryConnection();
// const { error, code, data } =
//   connected !== true ? connected : await apiCall("/ult");

function Landing() {
  console.log("Buenas soy el landing");
  return (
    <>
      <h1>Landing</h1>
      <h2>Aqui hay cosas</h2>
    </>
    // <Layout title="Ult - index" mainHeader="Home">
    //   {!error ? (
    //     <UltContainer data={data} />
    //   ) : (
    //     <ErrorDisplay message={data} code={code} />
    //   )}
    // </Layout>
  );
}

export default Landing;
