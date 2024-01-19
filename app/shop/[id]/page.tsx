import ShopDetailSection from "@/components/section/ShopDetailSection";

async function getShopDetail(id: string) {
  const shopDetail = await (
    await fetch(`http://localhost:3000/api/shop/${id}`, {
      cache: "no-cache",
    })
  ).json();

  return shopDetail;
}

async function getShop(id: string) {
  const shop = await (
    await fetch(`http://localhost:3000/api/shop?id=${id}`)
  ).json();

  return shop;
}

export default async function ShopDetail({
  params,
}: {
  params: { id: string };
}) {
  const detail = await getShopDetail(params.id);
  const shop = await getShop(params.id);

  return <ShopDetailSection shop={shop} detail={detail} />;
}
