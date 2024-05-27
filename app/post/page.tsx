import { getPost } from "@/actions/get-book";

export default async function ResPost() {
  let res = await getPost("yng_CwAAQBAJ");
  console.log(res);
  return (
    <div>
      <p>List</p>
    </div>
  );
}
