import { getProviders, signIn } from "next-auth/react"

function Login({ providers }) {
  return (
    <div>
        <h1>Th
          is is a login page</h1>
    </div>
  )
}

export default Login;


// server side render
export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: {
      providers,
    }
  }
}