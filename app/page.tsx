import Intro from "@/components/intro";
import { Header } from "@/components/header";
import { TopFiveList, BookList } from "@/components/book-list";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center px-24">
        <Header />
        <TopFiveList />
        <BookList />
    </main>
  );
}
