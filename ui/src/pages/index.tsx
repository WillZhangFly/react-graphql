import { withUrqlClient } from "next-urql";
import Nav from "../components/Nav";
import { createUrqlClient } from "../utils/createUrqlClient";
import { usePostsQuery } from "../generated/graphql";

const Index = () => {
  const [{ data }] = usePostsQuery();
  return (
    <>
      <Nav></Nav>
      <div>Hello World!!!</div>
      <div>--------------</div>
      {!data ? (
        <div>Loading</div>
      ) : (
        data.posts.map((p) => <div key={p.id}>{p.title}</div>)
      )}
    </>
  );
};

export default withUrqlClient(createUrqlClient, {ssr : true})(Index);
