import Link from "next/link";

export default function NotFound() {
  return (
    <div className="w-full justify-center items-center h-screen flex flex-col">
      <h1 className="text-5xl font-bold mb-4">Not Found</h1>
      <Link href="/" className="hover:underline">
        홈으로 돌아가기
      </Link>
    </div>
  );
}
