import Header from "@/components/Main/Header";
import Footer from "@/components/Main/Footer";

export default async function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
