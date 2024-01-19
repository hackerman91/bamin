import prisma from "@/util/prisma";
import { redirect } from "next/navigation";

export default function Upload({
  searchParam,
}: {
  searchParam: { message: string };
}) {
  async function posting(data: FormData) {
    "use server";

    const success = await fetch(`http://localhost:3000/api/shop`, {
      method: "post",
      body: data,
    });

    if (!success) {
      redirect("/upload?message=something is wrong");
    }

    for (var i = 0; i < 10; i++) {
      const uploadPost = await prisma.shop.create({
        data: {
          title: data.get(`title`)?.toString() as string,
          description: data.get("description")?.toString() as string,
          star: parseInt(data.get("star")?.toString() as string),
          deliveryFee: data.get("delfee")?.toString() as string,
          deliveryTime: data.get("deltime")?.toString() as string,
          minumumOrder: parseInt(data.get("miniorder")?.toString() as string),
          cardImage: data.get("cardimage")?.toString() as string,
          coverImage: data.get("coverimage")?.toString() as string,
          tags: data.get("tag")?.toString() as string,
        },
      });
    }
  }

  return (
    <form
      className="w-full h-screen flex justify-center items-center"
      action={"/api/shop"}
    >
      <div className="border border-black rounded-md p-8">
        <h2 className="text-3xl font-bold mb-2">업로드</h2>
        <div className="flex flex-col gap-2">
          <label>title</label>
          <input type="text" name="title" />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="">description</label>
          <input type="text" name="description" />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="">star</label>
          <input type="number" name="star" />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="">deliveryTime</label>
          <input type="text" name="deltime" />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="">deliveryFee</label>
          <input type="text" name="delfee" />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="">minimumOrder</label>
          <input type="number" name="miniorder" />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="">cardImage</label>
          <input type="text" name="cardimage" />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="">coverImage</label>
          <input type="text" name="coverimage" />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="">tag</label>
          <input type="text" name="tag" />
        </div>
        <div>
          <button className="px-2 py-1 bg-blue-500 text-white text-xs mt-2 rounded-md">
            submit
          </button>
          <button
            className="px-2 py-1 bg-blue-500 text-white text-xs mt-2 rounded-md"
            formAction={posting}
          >
            action
          </button>
        </div>
        {/* {searchParam.message && (
          <p className="text-red-500">{searchParam.message}</p>
        )} */}
      </div>
    </form>
  );
}
