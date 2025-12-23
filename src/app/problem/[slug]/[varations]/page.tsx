import { getProblem } from "../../../../lib/problem";
import { notFound } from "next/navigation";
import Link from 'next/link';
import ProblemWorkspace from "../../../../app/components/problem-page/ProblemWorkspace"; 
import Navbar from "@/src/app/components/Navbar";

type Props = {
  params: Promise<{ slug: string,variation?: string;}>;
}; 

export default async function ProblemPage({ params }: Props) {
 const { slug, variation } = await params;
  const problem = await getProblem(slug);

  if (!problem) return notFound();

  return (
    <div className="flex flex-col h-screen bg-white text-slate-800 font-sans gap-4">
     
<Navbar />

      <main className="flex-1 overflow-hidden px-4 pb-4 pt-2">
           <ProblemWorkspace problem={problem} />
      </main>

    </div>
  );
}